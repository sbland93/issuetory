
'use strict';

import mongoose from 'mongoose';
import User from '../user/user.model';

var deepPopulate = require('mongoose-deep-populate')(mongoose);


var Schema = mongoose.Schema;


var ReferenceSchema = new Schema({
	title: {type: String, required: true},
	from: {type: String, required: true}
});


var ReplySchema = new Schema({
	creator:{type:Schema.Types.ObjectId, ref: 'User'},
	created_at: { type: Date, default: Date.now},
	idea: {type: String, required: true},
	hit: [{type:Schema.Types.ObjectId, ref: 'User'}],
	link: [ReferenceSchema]
});


var TeamwikiBranchSchema = new Schema({
	contributor: { type: Schema.Types.ObjectId, ref:'User'},
	updated_at: { type: Date, default: Date.now },
	name: {type: String},
	idea: {type: String},
	link: [ReferenceSchema],
})


var TeamwikiSchema = new Schema({
	
	creator: { type: Schema.Types.ObjectId, ref: 'User', required: true},
	created_at: { type: Date, default: Date.now, index: true},
	upvote: {type: Number, default: 0},
	hit: {type: [{type: Schema.Types.ObjectId, ref: 'User'}], default: []},
	name: {type: String, required: true},
	where: {type: String, required: true},
	who: {type: String, required: true},
	keyword: [{type:String}],
	private: { type:Boolean, default: false },
	team: [{type: Schema.Types.ObjectId, ref: 'User'}],
	reply: [ReplySchema],
	branch: [TeamwikiBranchSchema]

});

TeamwikiSchema.plugin(deepPopulate);


export default mongoose.model('Teamwiki', TeamwikiSchema);
