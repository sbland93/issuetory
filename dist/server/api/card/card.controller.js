/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/cards              ->  index
 * POST    /api/cards              ->  create
 * GET     /api/cards/:id          ->  show
 * PUT     /api/cards/:id          ->  update
 * DELETE  /api/cards/:id          ->  destroy
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = index;
exports.show = show;
exports.create = create;
exports.update = update;
exports.destroy = destroy;
exports.updateVersion = updateVersion;
exports.removeVersion = removeVersion;
exports.hit = hit;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _card2 = require('./card.model');

var _card3 = _interopRequireDefault(_card2);

var _user = require('../user/user.model');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function (entity) {
    if (entity) {
      return res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function (entity) {
    console.log('entity', entity);
    var updated = _lodash2.default.merge(entity, updates);
    console.log('updated', updated);
    updated.markModified('hit');
    return updated.save().then(function (updated) {
      return updated;
    });
  };
}

function removeEntity(res) {
  return function (entity) {
    if (entity) {
      return entity.remove().then(function () {
        res.status(204).end();
      });
    }
  };
}

function handleEntityNotFound(res) {
  return function (entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function (err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Cards
function index(req, res) {
  return _card3.default.find().populate('creator', '_id').populate({
    path: 'comments',
    options: { sort: { upvote: -1 } }
  }).sort({ upvote: -1 }).exec().then(respondWithResult(res)).catch(handleError(res));
}

// Gets a single Card from the DB
function show(req, res) {
  return _card3.default.findById(req.params.id).populate('creator').deepPopulate('versions.contributor comments.creator comments.versions.contributor').exec().then(handleEntityNotFound(res)).then(respondWithResult(res)).catch(handleError(res));
}

// Creates a new Card in the DB and make the default of creator
function create(req, res) {
  req.body.creator = req.user._id;

  return _card3.default.create(req.body).then(function (entity) {
    _user2.default.findById(req.body.creator).then(function (user) {
      user.cards.push(entity._id);
      user.save().then(function (err) {
        return entity;
      }).then(respondWithResult(res, 201)).catch(handleError(res));
    });
  });
}

// Updates an existing Card in the DB
function update(req, res) {
  console.log('For Test: updating......');
  if (req.body._id) {
    delete req.body._id;
  }
  return _card3.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(saveUpdates(req.body)).then(respondWithResult(res)).catch(handleError(res));
}

// Deletes a Card from the DB
function destroy(req, res) {
  return _card3.default.findById(req.params.id).exec().then(handleEntityNotFound(res)).then(removeEntity(res)).catch(handleError(res));
}

function updateVersion(req, res) {
  req.body.version.contributor = req.user;
  console.log('update: updateVersion@@@@@@@@@@@@@@@@@@', req.body.version);
  console.log('req.params.id', req.params.id);
  //find & add version & save
  _card3.default.findById(req.params.id).exec().then(function (card) {
    console.log('card', card);
    if (card) {
      console.log('card', card);
      card.versions.unshift(req.body.version);
      return card.save();
    }
  }).then(function (_card) {
    if (_card) {
      console.log('_card in updateVersion is', _card);
      return res.status(200).send(_card);
    }
  });
}

function removeVersion(req, res) {
  console.log('req.params.id:', req.params.id);
  console.log('update:req.body.version', req.body.versionId);
  var conditions = { '_id': req.params.id },
      update = { $pull: { "versions": { _id: req.body.versionId } } },
      callback = function callback(err, entity) {
    console.log('entity:', entity);
    if (err) res.status(500).send(err);
    if (entity) {
      res.status(200).json(entity);
    }
  };
  return _card3.default.update(conditions, update, callback);
}

function hit(req, res) {
  console.log("For Test: hit function is called");
  console.log("For Test: req.user is", req.user._id);
  console.log("For Test: req.params.id", req.params.id);
  _card3.default.findById(req.params.id).exec().then(function (card) {
    if (card) {
      console.log('upvote of card', card.upvote);
      console.log('req.body.alreadyHit', req.body.alreadyHit);
      if (!req.body.alreadyHit) {
        card.hit.push(req.user._id);
        card.upvote = card.upvote + 1;
      } else if (req.body.alreadyHit) {
        var index = card.hit.indexOf(req.user._id);
        card.hit.splice(index, 1);
        card.upvote = card.upvote - 1;
      }

      console.log('upvote of card after updating', card.upvote);
      return card.save();
    }
  }, function (err) {
    console.log('err', err);
    if (err) {
      return res.status(500).send(err);
    }
  }).then(function (card) {
    if (card) {
      console.log('card', card);
      return res.status(200).send(card);
    }
  });
}
//# sourceMappingURL=card.controller.js.map
