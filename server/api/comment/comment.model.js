'use strict';

import mongoose from 'mongoose';
import User from '../user/user.model';
import Card from '../card/card.model';

var Schema = mongoose.Schema;


var ReferenceSchema = new Schema({
	title: {type: String, required: true},
	url: {type: String, required: true}
});


var DateSchema = { type: Date, default: Date.now};




var CommentSchema = new Schema({
	category:  {type: String, enum:['A', 'B', 'C', 'D', 'E', 'F'], required: true},
	card:  {type: Schema.Types.ObjectId, ref: 'Card'} ,
	creator: { type:Schema.Types.ObjectId, ref: 'User'},
	contributor: [{ type:Schema.Types.ObjectId, ref: 'User'}],
	created_at: DateSchema,
	updated_at: DateSchema,
	title: {type: String},
	idea: {type: String, required: true},
	link: [ReferenceSchema],
	hit: {type: Number, default: 1}
});


var ReplySchema = new Schema({
	creator:{type:Schema.Types.ObjectId, ref: 'User'},
	created_at: DateSchema,
	idea: {type: String, required: true},
	link: [ReferenceSchema]
})


CommentSchema.add({ replies: [ReplySchema]  });





export default mongoose.model('Comment', CommentSchema);
