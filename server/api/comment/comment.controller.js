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
  return Comment.findById(req.params.id).exec()
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
  var _comment;
  delete req.body.cardId;
  console.log('req.body', JSON.stringify(req.body));
  return Comment.create(req.body)
      .then(function(comment){
          _comment = comment;
          return Card.findById(cardId).exec()
      })
      .then(function(card){
          card.comments.push(_comment._id);
          return card.save()          
      })
      .then(function(err){
          if(err) return err;
          return User.findById(req.body.creator).exec()
      })
      .then(function(user){
          user.comments.push(_comment._id);
          return user.save()
      })
      .then(function(err){
          //if(err) return err;
          return _comment;
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


export function updateVersion(req, res){
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
  return Card.update(conditions, update, callback);

}