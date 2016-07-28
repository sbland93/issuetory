(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('user', user)

  /* @ngInject */
  function user(Users) {
    this.getUser = getUser;
    this.create = create;
    this.remove = remove;
    this.update = update;
    this.updateScore = updateScore;

    function getUser(userId, refreshingCache) {
      return Users.one(userId).get()
    }


    //Put The userId to params.
    function create(params, userId) {
      params.userId = userId; 
      return Users.customPOST(params);
    }

    function remove(userId) {
      return Users.one(userId).customDELETE();
    }

    function update(userId, params) {
      return Users.one(userId).customPUT(params);
    }

    function updateScore(userId, params) {
      return Users.score(userId).customPUT(params);
    }



  }
})();