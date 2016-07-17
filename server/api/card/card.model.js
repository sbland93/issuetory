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
	updated_at: DateSchema,
	title: {type: String, required: true},
	idea: {type: String, required: true},
	link: [ReferenceSchema],
	keyword: [{type:String}],
	hit: [{type: Schema.Types.ObjectId, ref: 'User'}],
	comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
	versions: [CardVersionSchema]
});

CardSchema.plugin(deepPopulate);






export default mongoose.model('Card', CardSchema);
