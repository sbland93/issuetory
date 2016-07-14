

'use strict';

angular.module('constructiveApp')
  .directive('version', function () {
    return {
      templateUrl: 'components/directive/carddirective/version/version.html',
      restrict: 'EA',

      scope: {
        card: '=info',
        controllVersions : '&'
      },
      link: function (scope, element, attrs) {
        
      }
    };
  });
