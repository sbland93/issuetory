
'use strict';

angular.module('constructiveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('versions', {
        url: '/versions/:id',
        templateUrl: 'app/versions/versions.html',
        controller: 'versionCtrl as versions'
      }).state('commentVersions', {
        url: '/versions/comment/:id',
        templateUrl: 'app/versions/comment/commentversions.html',
        controller: 'commentVersionsCtrl as commentVersions'
      });
  });
