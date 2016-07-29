
'use strict';

angular.module('constructiveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('versions', {
        url: '/versions/:id',
        templateUrl: 'app/versions/versions.html',
        controller: 'versionCtrl as versions'
      }).state('versions.comment', {
        url: '/comment/:id',
        templateUrl: 'app/versions/commentversions.html',
        controller: 'commentVersionsCtrl as comments'
      });
  });
