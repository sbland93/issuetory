/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cards              ->  index
 * POST    /api/cards              ->  create
 * GET     /api/cards/:id          ->  show
 * PUT     /api/cards/:id          ->  update
 * DELETE  /api/cards/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Card from './card.model';
import User from '../user/user.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    console.log('entity', entity);
    var updated = _.merge(entity, updates);
    console.log('updated', updated);
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

// Gets a list of Cards
export function index(req, res) {
  return Card.find().populate('creator', '_id').populate('comments').exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Card from the DB
export function show(req, res) {
  return Card.findById(req.params.id).populate('creator')
    .deepPopulate('versions.contributor comments.creator comments.versions.contributor').exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Card in the DB and make the default of creator
export function create(req, res) {
  req.body.creator = req.user._id;


  return Card.create(req.body)
    .then(function(entity){
      User.findById(req.body.creator).then(function(user){
        user.cards.push(entity._id);
        user.save().then(function(err){
          return entity;
        })
      .then(respondWithResult(res, 201))
      .catch(handleError(res));
      })
    })

}



// Updates an existing Card in the DB
export function update(req, res) {
  console.log('For Test: updating......');
  if (req.body._id) {
    delete req.body._id;
  }
  return Card.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Card from the DB
export function destroy(req, res) {
  return Card.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}


export function updateVersion(req, res){
    req.body.version.contributor = req.user;
    console.log('update: updateVersion@@@@@@@@@@@@@@@@@@', req.body.version);
    console.log('req.params.id', req.params.id);
    //find & add version & save
    Card.findById(req.params.id).exec()
      .then(function(card){
        console.log('card', card);
        if(card) {
          console.log('card' ,card);
          card.versions.unshift(req.body.version);
          return card.save();
        }
      })
      .then(function(_card){
        if(_card) {
          return res.status(200).send(_card);
        }
      })
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
  return Card.update(conditions, update, callback);

}