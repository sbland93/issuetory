'use strict';

angular.module('constructiveApp')
  .directive('personalCard', function () {
    return {
      templateUrl: 'components/directive/carddirective/personalCard/personalCard.html',
      restrict: 'EA',
      scope : {
      	card : '=info',
        auth: '=auth'
      },
      link: function (scope, element, attrs) {
      	
      }
    };
  });
