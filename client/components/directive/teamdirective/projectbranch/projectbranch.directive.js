'use strict';

angular.module('constructiveApp')
  .directive('projectbranch', function () {
    return {
      templateUrl: 'components/directive/teamdirective/projectbranch/projectbranch.html',
      restrict: 'EA',
      scope: {
      	branch : '=info'
      },
      link: function (scope, element, attrs) {
      }
    };
  });
