'use strict';

GLOBAL.localrequire = {
  app: function app() {
    return require('../../app');
  },
  config: function config() {
    return require('../../config/environment');
  },
  errors: function errors() {
    return require('../errors/error');
  },
  errors2: function errors2() {
    return require('../errors/errors');
  },
  common: function common() {
    return require('./common');
  },
  test: function test() {
    return require('./test');
  },
  UserService: function UserService() {
    return require('../../api/user/user.service');
  },
  User: function User() {
    return require('../../api/user/user.model');
  },
  GroupService: function GroupService() {
    return require('../../api/group/group.service');
  },
  Group: function Group() {
    return require('../../api/group/group.model');
  },
  CardService: function CardService() {
    return require('../../api/card/card.service');
  },
  Card: function Card() {
    return require('../../api/card/card.model');
  },
  AuthService: function AuthService() {
    return require('../../auth/auth.service');
  },
  AlarmService: function AlarmService() {
    return require('../../api/alarm/alarm.service');
  },
  Alarm: function Alarm() {
    return require('../../api/alarm/alarm.model');
  },
  // add localrequire
  domain: function domain(_domain, name) {
    return require('../../api/' + _domain + '/' + name);
  },
  middleware: function middleware(name) {
    return require('../../middlewares/' + name);
  },
  module: function module(name) {
    return require('./' + name);
  }
};
//# sourceMappingURL=requires.js.map
