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
        updateCard: '&',
      },
      link: function (scope, element, attrs) {
        scope.hitCard = function(){
          console.log('scope.currentUser', scope.currentUser);
          scope.card.hit.push(scope.currentUser);
          console.log('For Test: scope.card.hit is', scope.card.hit);
          scope.updateCard({newVal: scope.card});
        }
      }
    };
  });