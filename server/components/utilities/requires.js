'use strict';

GLOBAL.localrequire = {
  app: function() {
    return require('../../app');
  }, 
  config: function() {
    return require('../../config/environment');
  },
  errors: function() {
    return require('../errors/error');
  },
  errors2: function() {
    return require('../errors/errors');
  },
  common: function() {
    return require('./common');
  },
  test: function() {
    return require('./test');
  },
  UserService: function() {
    return require('../../api/user/user.service');
  },
  User: function() {
    return require('../../api/user/user.model');
  },
  GroupService: function() {
    return require('../../api/group/group.service');
  },
  Group: function() {
    return require('../../api/group/group.model');
  },
  CardService: function() {
    return require('../../api/card/card.service');
  },
  Card: function() {
    return require('../../api/card/card.model');
  },
  AuthService: function() {
    return require('../../auth/auth.service');
  },
  AlarmService: function() {
    return require('../../api/alarm/alarm.service');
  },
  Alarm: function() {
    return require('../../api/alarm/alarm.model');
  },
  // add localrequire
  domain: function(domain, name) {
    return require('../../api/' + domain + '/' + name);
  },
  middleware: function(name) {
    return require('../../middlewares/' + name);
  },
  module: function(name) {
    return require('./' + name);
  }
};