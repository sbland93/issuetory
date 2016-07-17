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






User.find({}).remove().then(function(){
  User.create(makeUsers()).then(function(_user){
      var _userId = _user[0]._id;
      Card.find({}).remove().then(function(){
        Card.create(makeCards(_userId)).then(function(_card){
            var _cardId = _card._id;
            Comment.find({}).remove().then(function(){
              Comment.create(makeComments(_userId, _cardId)).then(function(_comments){
                  for (var i = 0; i < (_comments.length); ++i) {
                      _card.comments.push(_comments[i]._id);
                  }
                  _card.save();
                })
            })
          })
      })
  })
})






