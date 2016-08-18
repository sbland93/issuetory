'use strict';

var _express = require('express');

var _user = require('./user.controller');

var controller = _interopRequireWildcard(_user);

var _auth = require('../../auth/auth.service');

var auth = _interopRequireWildcard(_auth);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = new _express.Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);

//email validation REST API
router.get('/validation', auth.isAuthenticated(), controller.getUsernumber, controller.sendEmail);
router.post('/validation', auth.isAuthenticated(), controller.getUsernumber, controller.confirmNumber, controller.emailValidate);

router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);

//make route for controllscore
router.put('/score/:id', auth.isAuthenticated(), controller.updateScore);

module.exports = router;
//# sourceMappingURL=index.js.map
