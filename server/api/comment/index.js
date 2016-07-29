'use strict';

var express = require('express');
var auth = require('../../auth/auth.service');
var controller = require('./comment.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/',  auth.isAuthenticated(), controller.create);
router.put('/:id',  auth.isAuthenticated(), controller.update);
router.patch('/:id',  auth.isAuthenticated(), controller.update);
router.delete('/:id',  auth.isAuthenticated(), controller.destroy);

//controllVersion
router.put('/version/:id', auth.isAuthenticated(), controller.updateVersion);



module.exports = router;
