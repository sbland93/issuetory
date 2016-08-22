/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var _thing = require('../api/thing/thing.model');

var _thing2 = _interopRequireDefault(_thing);

var _user2 = require('../api/user/user.model');

var _user3 = _interopRequireDefault(_user2);

var _card = require('../api/card/card.model');

var _card2 = _interopRequireDefault(_card);

var _comment = require('../api/comment/comment.model');

var _comment2 = _interopRequireDefault(_comment);

var _makeseed = require('./makeseed');

var _makeseed2 = _interopRequireDefault(_makeseed);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeComments = _makeseed2.default.makeComments;
var makeCards = _makeseed2.default.makeCards;
var makeUsers = _makeseed2.default.makeUsers;

var _userArray;
var _cardId;
var _commentId;
//var _card;
var _cardArray;
_user3.default.find({}).remove().then(function () {
  return _user3.default.create(makeUsers());
}).then(function (_user) {
  _userArray = _user;
  return _card2.default.find({}).remove();
}).then(function () {
  return _card2.default.create(makeCards(_userArray));
})

/*.then(function(card){
  _card = card;
  _cardId = _card._id;
  return User.findById(_card.creator).exec()
})
.then(function(user){
  user.cards.push(_cardId);
  return user.save()
})*/

.then(function (cardArray) {
  _cardArray = cardArray;
  for (var i = 0; i < cardArray.length; i++) {

    var _cardCreator = _cardArray[i].creator;
    (function (_cardCreator) {
      return _user3.default.findById(_cardCreator).exec().then(function (user) {
        user.cards.push(_cardCreator);
        return user.save();
      });
    })(_cardCreator);
  }
  return console.log('equipping card to user is finsihed');
}).then(function () {
  return _comment2.default.find({}).remove();
}).then(function () {
  return _comment2.default.create(makeComments(_userArray, _cardArray));
}).then(function (_comments) {

  for (var i = 0; i < _comments.length; ++i) {
    _commentId = _comments[i]._id;
    for (var k = 0; k < _cardArray.length; ++k) {
      _cardArray[k].comments.push(_comments[i]._id);
    }
    (function (_commentId) {
      console.log('comments[i].creator', _comments[i].creator);
      _user3.default.findById(_comments[i].creator).exec().then(function (user) {
        console.log('For Test: user', user.name);
        user.comments.push(_commentId);
        return user.save().then(function () {
          return console.log('correct');
        });
      });
    })(_commentId);
  }
  for (var l = 0; l < _cardArray.length; ++l) {
    _cardArray[l].save();
  }
});
//# sourceMappingURL=seed.js.map
