'use strict';

angular.module('constructiveApp')
  .directive('reference', function () {
    return {
      templateUrl: 'components/directive/carddirective/reference/reference.html',
      restrict: 'EA',
      scope: {
      	reference: '=info'
      },
      link: function (scope, element, attrs) {
      }
    };
  });
