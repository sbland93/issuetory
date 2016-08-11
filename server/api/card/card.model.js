'use strict';

import mongoose from 'mongoose';
import User from '../user/user.model';
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Schema = mongoose.Schema;

var ReferenceSchema = new Schema({
	title: {type: String, required: true},
	url: {type: String, required: true}
});


var DateSchema = { type: Date, default: Date.now};


var CardVersionSchema = new Schema({
	contributor: { type: Schema.Types.ObjectId, ref:'User'},
	created_at: DateSchema,
	title: {type: String, required: true},
	idea: {type: String, required: true},
	link: [ReferenceSchema],
	keyword: [{type:String}]
})


var CardSchema = new Schema({
	creator: { type: Schema.Types.ObjectId, ref: 'User', required: true},
	contributor: [{ type: Schema.Types.ObjectId, ref: 'User'}],
	created_at: DateSchema,
	upvote: {type: Number, default: 0},
	hit: {type: [{type: Schema.Types.ObjectId, ref: 'User'}], default: []},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	versions: [CardVersionSchema]
});


CardSchema.path('versions').validate(function(versions){
    if(!versions){ console.log('noversion'); return false}
    else if(versions.length === 0){ console.log('version length'); return false}
    return true;
}, 'Card needs to have title and idea');




CardSchema.plugin(deepPopulate);


export default mongoose.model('Card', CardSchema);
