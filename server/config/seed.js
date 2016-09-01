/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Card from '../api/card/card.model';
import Comment from '../api/comment/comment.model';
import Teamwiki from '../api/teamwiki/teamwiki.model';
import MakeSeedCard from './makeseedcard';
import MakeSeedProject from './makeseedproject';

var makeProjects = MakeSeedProject.makeProjects;
var makeComments = MakeSeedCard.makeComments;
var makeCards = MakeSeedCard.makeCards;
var makeUsers = MakeSeedCard.makeUsers;


var _userArray;
var _commentId;
//var _card;
var _cardArray
User.find({}).remove()
.then(function(){
  return User.create(makeUsers(20))
})
.then(function(_user){
  _userArray = _user;
  makeProjectSeed(_userArray);
  return Card.find({}).remove()
})
.then(function(){
  return Card.create(makeCards(_userArray))
})
.then(function(cardArray){
  _cardArray = cardArray;

  for(var i = 0; i < cardArray.length; i++){
    
    var _cardCreator = _cardArray[i].creator;
    var _cardId = _cardArray[i]._id;


    for(var k = 0; k< i; k++){

      _cardArray[i].hit.push(_userArray[k]._id);
    
    }
    _cardArray[i].upvote = i;
    _cardArray[i].save(function(err){
      if(err) return 'error!';
    });
  
    (function(_cardCreator, _cardId){
       return User.findById(_cardCreator).exec()
              .then(function(user){
                user.cards.push(_cardId);
                return user.save();
              })
    })(_cardCreator , _cardId);

  }
  return console.log('equipping card to user is finsihed');
})

.then(function(){
  return Comment.find({}).remove()
})
.then(function(){
  return Comment.create(makeComments(_userArray, _cardArray))
})
.then(function(_comments){

  for (var i = 0; i < (_comments.length); ++i) {
      _commentId = _comments[i]._id
    for(var k = 0; k< (_cardArray.length); ++k){
      _cardArray[k].comments.push(_comments[i]._id);
    }
    (function(_commentId){
      console.log('comments[i].creator', _comments[i].creator);
      User.findById(_comments[i].creator).exec().then(function(user){
        console.log('For Test: user', user.name);
        user.comments.push(_commentId);
        return user.save().then(function(){
          return console.log('correct');
        });
      })

    })(_commentId);

  }
  for(var l = 0; l<(_cardArray.length); ++l){
    _cardArray[l].save();
  }
})



//Below Code is for making Team Project

var _projectArray;
function makeProjectSeed(_userArray){
  console.log('Start makeProjectSeed;');
 (Teamwiki.find({}).remove()
.then(function(){
  return Teamwiki.create(makeProjects(_userArray))
})
.then(function(project){
  _projectArray = project;
  for(var i = 0; i < _projectArray.length; i++){
    
    var _projectCreator = _projectArray[i].creator;
    var _projectId = _projectArray[i]._id;


    for(var k = 0; k< i; k++){

      _projectArray[i].hit.push(_userArray[k]._id);
    
    }
    _projectArray[i].upvote = i;
    _projectArray[i].save();
  
    (function(_projectCreator, _projectId){
       return User.findById(_projectCreator).exec()
              .then(function(user){
                user.cards.push(_projectId);
                return user.save();
              })
    })(_projectCreator , _projectId);

  }
  return console.log('equipping card to user is finsihed');
})
)}