(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('controllview', controllview)

  /* @ngInject */
  function controllview() {
    this.controllView = controllView;


    function controllView(wannaChangeBoolean) {

        wannaChangeBoolean.value = !wannaChangeBoolean.value;

    }

  }
})();