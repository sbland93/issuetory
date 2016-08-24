'use strict';

angular.module('constructiveApp')
  .directive('personalComment', function () {
    return {
      templateUrl: 'components/directive/carddirective/personalComment/personalComment.html',
      restrict: 'EA',
      scope:{
      	comment: '=info',
        auth : '=auth'
      },
      link: function (scope, element, attrs) {
      }
    };
  });
