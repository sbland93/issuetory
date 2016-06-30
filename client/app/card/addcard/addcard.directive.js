'use strict';

angular.module('constructiveApp')
  .directive('addcard', function () {
    return {
      templateUrl: 'app/card/addcard/addcard.html',
      restrict: 'EA',
      scope: {
      	create : '&',
        remove : '&',
        card : '=info'
      },

      link: function (scope, element, attrs) {
      	scope.newCard = {};
      	scope.newCard.prerequisite =[];
      	scope.newCard.link = [];

      }
    };
  });
