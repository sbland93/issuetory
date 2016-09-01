'use strict';

angular.module('constructiveApp')
  .directive('teamproject', function () {
    return {
      templateUrl: 'components/directive/teamdirective/teamproject/teamproject.html',
      restrict: 'EA',
      scope:{
      	project : '=info'
      },
      link: function (scope, element, attrs) {
      
      }
    };
  });
