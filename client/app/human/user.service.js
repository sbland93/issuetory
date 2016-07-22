(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('user', user)

  /* @ngInject */
  function user(Users) {
    this.getUser = getUser;

    function getUser(userId, refreshingCache) {
      return Users.one(userId).get()
    }


  }
})();