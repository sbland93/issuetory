/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/comments              ->  index
 * POST    /api/comments              ->  create
 * GET     /api/comments/:id          ->  show
 * PUT     /api/comments/:id          ->  update
 * DELETE  /api/comments/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Comment from './comment.model';
import Card from '../card/card.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    console.log('For Test: entity', entity);
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    updated.markModified('hit');
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Comments
export function index(req, res) {
  return Comment.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Comment from the DB
export function show(req, res) {
  return Comment.findById(req.params.id).populate('creator')
  .deepPopulate('versions.contributor').exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}



// Creates a new Comment in the DB
// And, Put the Comment Id into the Card.
// And , Put the Comment Id into the User.
export function create(req, res) {
  req.body.creator = req.user._id;
  var cardId = req.body.cardId;
  var _returnComment;
  delete req.body.cardId;
  console.log('req.body', JSON.stringify(req.body));
  return Comment.create(req.body)
      .then(function(comment){
          console.log('For Test: created comment is ', comment);
          return Comment.populate(comment, {path: 'creator'})
      })
      .then(function(_comment){
          console.log('For Test: populated comment is ', _comment);
          _returnComment = _comment;
          return Card.findById(cardId).exec()
      })
      .then(function(card){
          console.log('For Test: found card is ', card);
          card.comments.push(_returnComment._id);
          return card.save()          
      })
      .then(function(err){
          if(err) return err;
          return User.findById(req.body.creator).exec()
      })
      .then(function(user){
          console.log('For Test: user is ', user);
          user.comments.push(_returnComment._id);
          return user.save()
      })
      .then(function(err){
          //if(err) return err;
          console.log('For Test: _returnComment is ', _returnComment);
          return _returnComment;
      })
      .then(respondWithResult(res, 201))
      .catch(handleError(res));   
}





// Updates an existing Comment in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Comment.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Comment from the DB
export function destroy(req, res) {
  return Comment.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}


export function removeVersion(req, res){
  console.log('req.params.id:',req.params.id);
  console.log('update:req.body.version', req.body.versionId );
    var conditions = {'_id' : req.params.id}
    , update = { $pull : {"versions" : {_id: req.body.versionId}}}
    , callback = function(err, entity){
      console.log('entity:', entity);
      if(err) res.status(500).send(err);
      if (entity) {
      res.status(200).json(entity);
      }
    }
  return Comment.update(conditions, update, callback);

}


export function updateVersion(req, res){
    req.body.version.contributor = req.user;
    console.log('update: updateVersion@@@@@@@@@@@@@@@@@@', req.body.version);
    console.log('req.params.id', req.params.id);
    //find & add version & save
    Comment.findById(req.params.id).exec()
      .then(function(comment){
        console.log('comment', comment);
        if(comment) {
          console.log('comment' ,comment);
          comment.versions.unshift(req.body.version);
          return comment.save();
        }
      })
      .then(function(_comment){
        if(_comment) {
          return res.status(200).send(_comment);
        }
      })
}


export function hit(req, res){
  console.log("For Test: hit function is called");
  console.log("For Test: req.user is", req.user._id);
  Comment.findById(req.params.id).exec()
      .then(function(comment){
        if(comment) {
          console.log('upvote of comment', comment.upvote);
          console.log('req.body.alreadyHit', req.body.alreadyHit);
          if(!req.body.alreadyHit){
            comment.hit.push(req.user._id);
            comment.upvote = comment.upvote + 1;
          }
          else if(req.body.alreadyHit){
            var index = comment.hit.indexOf(req.user._id);
            console.log('For Test: indexOf user', index);
            comment.hit.splice(index, 1);
            comment.upvote = comment.upvote - 1;
          }
          console.log('upvote of comment after updating', comment.upvote);
          return comment.save();
        }
      }, function(err){
        console.log('err', err);
        if(err){
          return res.status(500).send(err);
        }
      })
      .then(function(comment){
        if(comment) {
          console.log('comment', comment);
          return res.status(200).send(comment);
        }
      })

}