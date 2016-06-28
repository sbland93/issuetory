'use strict';

angular.module('constructiveApp')
  .directive('addcard', function () {
    return {
      templateUrl: 'app/card/addcard/addcard.html',
      restrict: 'EA',
      scope: {
      	createOrUpdate : '&',
        remove : '&',
        card : '=info'
      },

      link: function (scope, element, attrs) {
      	scope.newCard = {};
      	scope.newCard.prerequisite =[];
      	scope.newCard.link = [];

        console.log("For Test: card is updated on [addcard.directive.js 19]", JSON.stringify(scope.card));

        //Some Trick for reusing this form to update card.
        scope.$watch('scope.card', function(newValue){ 
          if(newValue){
            console.log("For Test: card is updated on [addcard.directive.js 19]", JSON.stringify(scope.card));
             scope.newCard = newValue;
          }
        })



      }
    };
  });
