'use strict';

angular.module('constructiveApp')
  .directive('card', function () {
    return {
      templateUrl: 'components/directive/carddirective/card/card.html',
      restrict: 'EA',

      scope: {
        card: '=info',
        versions: '=',
        updateCard: '&'
      },
      link: function (scope, element, attrs) {
        scope.hitCard = function(){
          scope.card.hit ++;
          scope.updateCard({newVal: scope.card});
        }
      }
    };
  });