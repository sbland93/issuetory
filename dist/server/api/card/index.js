'use strict';

var express = require('express');
var controller = require('./card.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', auth.isAuthenticated(), controller.create);
router.put('/:id', auth.isAuthenticated(), controller.update);
router.patch('/:id', auth.isAuthenticated(), controller.update);
router.delete('/:id', auth.isAuthenticated(), controller.destroy);

//controllVersion
router.put('/version/:id', auth.isAuthenticated(), controller.updateVersion);
router.put('/version/remove/:id', auth.isAuthenticated(), controller.removeVersion);

//Hit
router.put('/hit/:id', auth.isAuthenticated(), controller.hit);

module.exports = router;
//# sourceMappingURL=index.js.map
