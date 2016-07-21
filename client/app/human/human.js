'use strict';

angular.module('constructiveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('human', {
        url: '/human/:id',
        templateUrl: 'app/human/human.html',
        controller: 'humanCtrl as human'
      });
  });
