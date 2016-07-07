'use strict';

angular.module('constructiveApp')
  .directive('updatereference', function () {
    return {
      templateUrl: 'components/directive/carddirective/updatereference/updatereference.html',
      restrict: 'EA',
      scope: {
      	reference: '=info'
      },
      link: function (scope, element, attrs) {
      }
    };
  });
