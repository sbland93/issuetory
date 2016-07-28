
'use strict';

var Q = require('q'),
    User = require('./user.model'),
    passport = require('passport'),
    config = require('../../config/environment'),
    jwt = require('jsonwebtoken');


/**
 * exports 내역 
 * @type {[type]}
 */
exports.index = index;
exports.create = create;
exports.show = show;
exports.destroy = destroy;
exports.changePassword = changePassword;
exports.me = me;
exports.emailValidates = emailValidates;
exports.getUsernumber = getUsernumber;
exports.updateScore = updateScore;



/**
 * Get list of users
 * restriction: 'admin'
 */
function index() {
  var deferred = Q.defer();

  User.find({}, '-salt -hashedPassword', function (err, users) {
    if(err) return deferred.reject(err);
     deferred.resolve(users);
  });
  return deferred.promise;
};

/**
 * Creates a new user
 */
function create(params) {
  var deferred = Q.defer();

  var newUser = new User(params);
  newUser.provider = 'local';
  newUser.role = 'user';
  newUser.save(function(err, user) {
    if (err) return deferred.reject(err);
    var token = jwt.sign({_id: user._id }, config.secrets.session, { expiresIn: 60*5 });
    
    deferred.resolve(token);
  });
  return deferred.promise;
};


function show(userId) {
  var deferred = Q.defer();
  User.findById(userId).populate('cards').populate('comments').exec().then(
    function(user){
      if (!user) return deferred.reject(
        Error.new({
          code: 'USER_NOT_FOUND',
          message: 'User: ' + userId + ' is not found.'
        })
      );
      deferred.resolve(user.profile);
    }, function(err){
       if (err) return deferred.reject(err);
    })

  return deferred.promise;
};

/**
 * Deletes a user
 * restriction: 'admin'
 */
function destroy(userId) {
  var deferred = Q.defer();

  User.findByIdAndRemove(userId, function(err, user) {
    if(err) return deferred.reject(err);
    return deferred.resolve(204);
  });
  return deferred.promise;
};

/**
 * Change a users password
 */
function changePassword(userId, oldPass, newPass) {
  var deferred = Q.defer();

  User.findById(userId, function (err, user) {
    if(user.authenticate(oldPass)) {
      user.password = newPass;
      user.save(function(err) {
        if (err) return deferred.reject(err);
        deferred.resolve(200);
      });
    } else {
      deferred.reject(
        Error.new({
          code: 'FORBIDDEN',
          message: 'User: ' + userId + ' is forbidden.'
        })
      );
    }
  });
  return deferred.promise;
};

/**
 * Get my info
 */
function me(userId) {
  var deferred = Q.defer();
  console.log('For Test: UserId:', userId);
  User.findOne({
    _id: userId
  }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
    if (err) return deferred.reject(err);
    if (!user) return deferred.reject(
      Error.new({
        code: 'USER_NOT_FOUND',
        message: 'User: ' + userId + ' is not found.'
      })
    );
    deferred.resolve(user);
  });
  return deferred.promise;
};



//usernumber: user email validation number
//find by number & change the validation schema from FALSE to TRUE
//delete usernumber cuz it will no need.
 function emailValidates(userId){
  var deferred = Q.defer();

  User
    .findOne({_id: userId}).exec(function(err, user) {
      if(err) return deferred.reject(err);
      if(!user) return deferred.reject(err);

      user.validation = true;
      console.log('For Test: user from emailValidates [user.service.js 152]', user);
      //delete user.usernumber
      user.usernumber = undefined;
      user.save(function(err){
        if(err) return deferred.reject(err);
        deferred.resolve();
      });/*.then(function(err, _user){
        if(err) return deferred.reject(err);
        deferred.resolve(_user);
      })*/;
    })

  return deferred.promise;
  
}

//get user number
function getUsernumber(userId) {
  var deferred = Q.defer();

  User.findById(userId, function (err, user) {
    if (err) return deferred.reject(err);
    if (!user) return deferred.reject(
      Error.new({
        code: 'USER_NOT_FOUND',
        message: 'User: ' + userId + ' is not found.'
      })
    );

    deferred.resolve(user.usernumber);
  });
  return deferred.promise;
};


function updateScore(userId, amount) {
  console.log('updateScore user.service.js');
  var deferred = Q.defer();

  var conditions = { _id: userId }
  , update = { $inc: { score: amount }};

  User.update(conditions, update, callback);

  function callback (err, numAffected) {
    // numAffected is the number of updated documents
    if(err) deferred.reject(err);
    deferred.resolve(numAffected);
  }

  return deferred.promise;
}