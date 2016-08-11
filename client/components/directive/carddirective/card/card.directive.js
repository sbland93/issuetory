'use strict';

angular.module('constructiveApp')
  .directive('card', function () {
    return {
      templateUrl: 'components/directive/carddirective/card/card.html',
      restrict: 'EA',

      scope: {
        card: '=info',
        versions: '=',
        currentUser: '=',
        hitCard: '&',
        forVersion: '='
      },
      link: function (scope, element, attrs) {
        

        scope.$watch(
          function(){
            return scope.card
          },
          function(value){ 
            if(!(_.isEmpty(value))){
              scope.alreadyHit = { alreadyHit: (value.hit.indexOf(scope.currentUser) > -1)}
            }
          }
        );

      }
    };
  });