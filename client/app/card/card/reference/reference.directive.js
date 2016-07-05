'use strict';

angular.module('constructiveApp')
  .directive('reference', function () {
    return {
      templateUrl: 'app/card/card/reference/reference.html',
      restrict: 'EA',
      scope: {
      	reference: '='
      }
      link: function (scope, element, attrs) {
      }
    };
  });
