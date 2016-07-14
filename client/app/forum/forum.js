'use strict';

angular.module('constructiveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forum', {
        url: '/forum/:id',
        templateUrl: 'app/forum/forum.html',
        controller: 'forumCtrl as forum'
      });
  });
