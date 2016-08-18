'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _user = require('../user/user.model');

var _user2 = _interopRequireDefault(_user);

var _card = require('../card/card.model');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepPopulate = require('mongoose-deep-populate')(_mongoose2.default);

var Schema = _mongoose2.default.Schema;

var ReferenceSchema = new Schema({
	title: { type: String, required: true },
	url: { type: String, required: true }
});

var DateSchema = { type: Date, default: Date.now };

var CommentVersionSchema = new Schema({
	category: { type: Number, min: 1, max: 6, required: true },
	contributor: { type: Schema.Types.ObjectId, ref: 'User' },
	updated_at: DateSchema,
	title: { type: String },
	idea: { type: String, required: true },
	link: [ReferenceSchema]
});

var CommentSchema = new Schema({
	card: { type: Schema.Types.ObjectId, ref: 'Card' },
	creator: { type: Schema.Types.ObjectId, ref: 'User' },
	created_at: DateSchema,
	upvote: { type: Number, default: 0, index: true },
	hit: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	versions: [CommentVersionSchema]
});

var ReplySchema = new Schema({
	creator: { type: Schema.Types.ObjectId, ref: 'User' },
	created_at: DateSchema,
	idea: { type: String, required: true },
	hit: [{ type: Schema.Types.ObjectId, ref: 'User' }],
	link: [ReferenceSchema]
});

CommentSchema.add({ replies: [ReplySchema] });

CommentSchema.path('versions').validate(function (versions) {
	if (!versions) {
		return false;
	} else if (versions.length === 0) {
		return false;
	}
	return true;
}, 'Comment needs to have title and idea');

CommentSchema.plugin(deepPopulate);

exports.default = _mongoose2.default.model('Comment', CommentSchema);
//# sourceMappingURL=comment.model.js.map
