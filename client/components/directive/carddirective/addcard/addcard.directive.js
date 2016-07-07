'use strict';

angular.module('constructiveApp')
  .directive('addcard', function () {
    return {
      templateUrl: 'components/directive/carddirective/addcard/addcard.html',
      restrict: 'EA',
      scope: {
      	create : '&',
        controllView : '&',
        card : '=info'
      },

      link: function (scope, element, attrs) {
      	scope.newCard = {};
      	scope.newCard.prerequisite =[];
      	scope.newCard.link = [];

      }
    };
  });
