'use strict';

var UserService = require('./user.service');
var Mailing = require('../../components/mails/mail.service');

var validationError = function(res, err) {
  return res.json(422, err);
};

exports.index = index;
exports.create = create;
exports.show = show;
exports.destroy = destroy;
exports.changePassword = changePassword;
exports.me = me;
exports.authCallback = authCallback;
exports.getUsernumber = getUsernumber;
exports.sendEmail = sendEmail;
exports.emailValidate = emailValidate;
exports.confirmNumber = confirmNumber;

/**
 * Get list of users
 * restriction: 'admin'
 */
function index(req, res) {
  UserService
    .index()
    .then(function(users) {
      res.json(200, users);
    })
    .catch(function(err) {
      res.send(500, err);
    });
};

/**
 * Creates a new user
 */
function create(req, res, next) {
  UserService
    .create(req.body)
    .then(function(token) {
      res.json({ token: token });
    })
    .catch(function(err) {
      return validationError(res, err);
    });
};

/**
 * Get a single user
 */
function show(req, res, next) {
  UserService
    .show(req.params.id)
    .then(function(profile) {
      console.log('For Test: Profile', profile);
      res.json(profile);
    })
    .catch(function(err) {
      if(err && err.code && err.code === 'USER_NOT_FOUND') {
        return res.send(401);
      } 
      if (err) return next(err);
    });
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
function destroy(req, res) {
  UserService
    .destroy(req.params.id)
    .then(function() {
      res.send(204);
    })
    .catch(function(err) {
      if (err) return res.send(500, err);
    });
};

/**
 * Change a users password
 */
function changePassword(req, res, next) {
  var userId = req.user._id;
  var oldPass = String(req.body.oldPassword);
  var newPass = String(req.body.newPassword);

  UserService
    .changePassword(userId, oldPass, newPass)
    .then(function() {
      res.send(200);
    })
    .catch(function(err) {
      if(err && err.code && err.code === 'FORBIDDEN') {
        return res.send(403);
      } 
      return validationError(res, err);
    });
};

/**
 * Get my info
 */
function me(req, res, next) {
  UserService
    .me(req.user._id)
    .then(function(user) {
      res.json(user);
    })
    .catch(function(err) {
      if(err && err.code && err.code === 'USER_NOT_FOUND') {
        return res.send(401);
      } 
      if (err) return next(err);
    });
};


/**
 * Authentication callback
 */
function authCallback(req, res, next) {
  res.redirect('/');
};

//make email validate! From false to true
function emailValidate(req, res, next) {

  UserService.emailValidates(req.user._id).then(function(user){
    res.sendStatus(200);
  })
  .catch(function(err){
    if(err) return next(err);
    console.log('For Test: emailvalidate error [user.controller.js 137]', error);
  })

}


//getUsernumber (it is because of safety, because we delete ret.usernumber on to JSON)
function getUsernumber(req, res, next) {
  console.log('For Test: getUsernumber() is called......');
  console.log('For Test: req.user is [called from user.controller.js 145]', req.user)
  var id = req.user._id;


  UserService.getUsernumber(id).then(function(number){
    req.number = number;
    console.log(req.number);
    next();
  })
  .catch(function(err){
    if(err) return next(err);
  })

}


//sendEmail with usernumber(equipped into req by getUsernumber())

function sendEmail(req, res, next) {
  console.log('For Test: sendEmail..[called from user.controller.js 164]');
  var options = {};
  var html = '<div>validation number:'+req.number+'</div>';
  var from = '"constructive" <rltmqj@yonsei.ac.kr>';
  var subject = 'constructive validatation!';

  options.html = html;
  options.from = from;
  options.to = req.user.email;
  options.subject = subject;

  Mailing.sendMail(options).then(function(){
    res.sendStauts(204);
  });
}


function confirmNumber(req, res, next) {
  console.log('For Test: req.body.number is', req.body.number);
  console.log('For Test: req.number is', req.number);
  if(req.number == req.body.number){

    next();
  }
  else{
    res.sendStatus(400);
  }

}