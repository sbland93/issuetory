'use strict';

import mongoose from 'mongoose';
import User from '../user/user.model';
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Schema = mongoose.Schema;

var date = new Date();
var koreanDate = date.toLocaleTimeString('ko-KR');

var ReferenceSchema = new Schema({
	title: {type: String, required: true},
	url: {type: String, required: true}
});


var CardVersionSchema = new Schema({
	contributor: { type: Schema.Types.ObjectId, ref:'User'},
	updated_at: { type: Date, default: Date.now },
	title: {type: String, required: true},
	idea: {type: String, required: true},
	link: [ReferenceSchema],
	keyword: [{type:String}]
})


var CardSchema = new Schema({
	creator: { type: Schema.Types.ObjectId, ref: 'User', required: true},
	created_at: { type: Date, default: Date.now, index: true},
	upvote: {type: Number, default: 0},
	hit: {type: [{type: Schema.Types.ObjectId, ref: 'User'}], default: []},
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	versions: [CardVersionSchema]
},
{
	toObject: {
	virtuals: true
	},
	toJSON: {
	virtuals: true 
	}
});


CardSchema.path('versions').validate(function(versions){
    if(!versions){ console.log('noversion'); return false}
    else if(versions.length === 0){ console.log('version length'); return false}
    return true;
}, 'Card needs to have title and idea');


CardSchema.virtual('title').get(function() {
	return this.versions[0].title;
})

CardSchema.virtual('idea').get(function(){
	return this.versions[0].idea;
})

CardSchema.virtual('keyword').get(function(){
	return this.versions[0].keyword;
})

CardSchema.virtual('link').get(function(){
	return this.versions[0].link;
})


CardSchema.plugin(deepPopulate);


export default mongoose.model('Card', CardSchema);
