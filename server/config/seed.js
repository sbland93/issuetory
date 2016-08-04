/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Card from '../api/card/card.model';
import Comment from '../api/comment/comment.model';
import MakeSeed from './makeseed';

var makeComments = MakeSeed.makeComments;
var makeCards = MakeSeed.makeCards;
var makeUsers = MakeSeed.makeUsers;


var _userArray;
var _cardId;
var _commentId;
var _card;
User.find({}).remove()
.then(function(){
  return User.create(makeUsers())
})
.then(function(_user){
  _userArray = _user;
  return Card.find({}).remove()
})
.then(function(){
  return Card.create(makeCards(_userArray))
})
.then(function(card){
  _card = card;
  _cardId = _card._id;
  return User.findById(_card.creator).exec()
})
.then(function(user){
  user.cards.push(_cardId);
  return user.save()
})
.then(function(){
  return Comment.find({}).remove()
})
.then(function(){
  return Comment.create(makeComments(_userArray, _cardId))
})
.then(function(_comments){
  for (var i = 0; i < (_comments.length); ++i) {
    _commentId = _comments[i]._id
    console.log('For Test: _commentId ', _commentId)
    console.log('For Test: comment.creator ', _comments[i].creator)
    _card.comments.push(_comments[i]._id);
    (function(_commentId){

      User.findById(_comments[i].creator).exec().then(function(user){
        console.log('For Test: user', user.name);
        user.comments.push(_commentId);
        return user.save().then(function(){
          return console.log('correct');
        });
      })

    })(_commentId);
  
  }
  _card.save();
})


/*User.find({}).remove().then(function(){
  User.create(makeUsers()).then(function(_user){
      var _userArray = _user;
      Card.find({}).remove().then(function(){
        Card.create(makeCards(_userArray)).then(function(_card){
            var _cardId = _card._id;
            User.findById(_card.creator).exec().then(function(user){
              user.cards.push(_cardId);
              user.save().then(function(){
                console.log('correct');
              })
            })
            Comment.find({}).remove().then(function(){
              Comment.create(makeComments(_userArray, _cardId)).then(function(_comments){
                  for (var i = 0; i < (_comments.length); ++i) {
                      var commentId = _comments[i]._id
                      console.log('For Test: commentId ', commentId)
                      console.log('For Test: comment.creator ', _comments[i].creator)
                      _card.comments.push(_comments[i]._id);
                      User.findById(_comments[i].creator).exec().then(function(user){
                        console.log('For Test: user ', user.name);
                        user.comments.push(commentId);
                        user.save().then(function(){
                          console.log('correct');
                        });
                      })
                  }
                  _card.save();
                })
            })
          })
      })
  })
})*/






