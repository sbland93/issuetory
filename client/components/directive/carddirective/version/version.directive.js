

'use strict';

angular.module('constructiveApp')
  .directive('version', function () {
    return {
      templateUrl: 'app/forum/version/version.html',
      restrict: 'EA',

      scope: {
        card: '=info',
        versions: '=',
        controllVersions : '&'
      },
      link: function (scope, element, attrs) {
        
      }
    };
  });
