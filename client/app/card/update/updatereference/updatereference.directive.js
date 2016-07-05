'use strict';

angular.module('constructiveApp')
  .directive('updatereference', function () {
    return {
      templateUrl: 'app/card/update/updatereference/updatereference.html',
      restrict: 'EA',
      scope: {
      	reference: '=info'
      },
      link: function (scope, element, attrs) {
      }
    };
  });
