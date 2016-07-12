'use strict';

angular.module('constructiveApp')
  .directive('addcomment', function () {
    return {
      templateUrl: 'components/directive/carddirective/addcomment/addcomment.html',
      restrict: 'EA',
      scope:{
      	representCategory :'=',
      	controllView : '&',
        createComment: '&'
      },
      link: function (scope, element, attrs) {
        scope.newCard = {};
        scope.newCard.link = [];
      }
    };
  });
