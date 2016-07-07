'use strict';

angular.module('constructiveApp')
  .directive('navbar', () => ({
    templateUrl: 'components/directive/originaldirective/navbar/navbar.html',
    restrict: 'E',
    controller: 'NavbarController',
    controllerAs: 'nav'
  }));
