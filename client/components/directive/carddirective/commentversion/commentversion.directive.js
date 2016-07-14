'use strict';

angular.module('constructiveApp')
  .directive('commentversion', function () {
    return {
      templateUrl: 'components/directive/carddirective/commentversion/commentversion.html',
      restrict: 'EA',
      scope: {
        comment: '=info',
        controllView : '&',
        myStyle: '='
      },
      link: function (scope, element, attrs) {

      }
    };
  });
