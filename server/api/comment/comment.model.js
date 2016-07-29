'use strict';

import mongoose from 'mongoose';
import User from '../user/user.model';
import Card from '../card/card.model';
var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Schema = mongoose.Schema;


var ReferenceSchema = new Schema({
	title: {type: String, required: true},
	url: {type: String, required: true}
});


var DateSchema = { type: Date, default: Date.now};


var CommentVersionSchema = new Schema({
	category:  {type: Number, min:1, max:6, required: true},
	contributor: { type:Schema.Types.ObjectId, ref: 'User'},
	updated_at: DateSchema,
	title: {type: String},
	idea: {type: String, required: true},
	link: [ReferenceSchema],
});


var CommentSchema = new Schema({
	//category:  {type: Number, min:1, max:6, required: true},
	card:  {type: Schema.Types.ObjectId, ref: 'Card'} ,
	creator: { type:Schema.Types.ObjectId, ref: 'User'},
	//contributor: [{ type:Schema.Types.ObjectId, ref: 'User'}],
	created_at: DateSchema,
	//updated_at: DateSchema,
	/*title: {type: String},
	idea: {type: String, required: true},
	link: [ReferenceSchema],*/
	hit: [{type:Schema.Types.ObjectId, ref: 'User'}] ,
	versions: [CommentVersionSchema]
});


var ReplySchema = new Schema({
	creator:{type:Schema.Types.ObjectId, ref: 'User'},
	created_at: DateSchema,
	idea: {type: String, required: true},
	hit: [{type:Schema.Types.ObjectId, ref: 'User'}],
	link: [ReferenceSchema]
});


CommentSchema.add({ replies: [ReplySchema]  });



CommentSchema.plugin(deepPopulate);

export default mongoose.model('Comment', CommentSchema);