'use strict';

angular.module('constructiveApp', [
  'constructiveApp.auth',
  'constructiveApp.admin',
  'constructiveApp.constants',
  'constructiveApp.storageService',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match',
  'restangular'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
