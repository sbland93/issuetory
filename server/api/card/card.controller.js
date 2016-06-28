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

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
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
  return Card.findById(req.params.id).populate('creator').populate('comments').exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Card in the DB and make the default of creator
export function create(req, res) {
  console.log('For Test: create() is called [card.controller.js 79]');
  req.body.owner = req.user._id;
  console.log('For Test: req.body [card.controller.js 79]', req.body);

  return Card.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Card in the DB
export function update(req, res) {
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
