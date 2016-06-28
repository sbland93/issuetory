
'use strict';

angular.module('constructiveApp')
  .directive('card', function () {
    return {
      templateUrl: 'app/card/card/card.html',
      restrict: 'EA',

      scope: {
        user : '=',
        card: '=info',
        update : '&',
        remove : '&'
      },
      link: function (scope, element, attrs) {
        _init();
        function _init(){
          console.log('For Test: scope.user is [card.directive.js 17]', scope.user);
        }
      }
    };
  });
