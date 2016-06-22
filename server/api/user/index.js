'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);
router.get('/me', auth.isAuthenticated(), controller.me);

//email validation REST API
router.get('/validation', auth.isAuthenticated(), controller.getUsernumber, controller.sendEmail);
router.post('/validation', auth.isAuthenticated(), controller.getUsernumber, controller.confirmNumber ,controller.emailValidate);


router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/', controller.create);


module.exports = router;
