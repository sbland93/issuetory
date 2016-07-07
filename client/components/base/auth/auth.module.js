'use strict';

angular.module('constructiveApp.auth', [
  'constructiveApp.constants',
  'constructiveApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
