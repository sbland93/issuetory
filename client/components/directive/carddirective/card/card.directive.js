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
              value.created_at = moment(value.created_at).format('YYYY년 MM월 DD일 HH시 MM분');
            }
          }
        );


        scope._hitCard = function(){
          scope.hitCard({newVal:scope.alreadyHit}).then(function(card){
            scope.card = card;
          })
        }

      }
    };
  });