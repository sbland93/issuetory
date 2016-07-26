'use strict';

angular.module('constructiveApp')
  .directive('personality', function () {
    return {
      templateUrl: 'components/directive/carddirective/personality/personality.html',
      restrict: 'EA',
      scope:{
      	personality: '=info',
      },
      link: function (scope, element, attrs) {

      	switch (scope.personality.kind) {
          case 'wise':
              scope.btnStyle = 'btn btn-success btn-block';
              break;
          case 'neutral':
              scope.btnStyle = 'btn btn-warning btn-block';
              break;
          case 'new':
              scope.btnStyle = 'btn btn-info btn-block';
              break;
          case 'elegant':
              scope.btnStyle = 'btn btn-primary btn-block';
              break;
          case 'proposal':
              scope.btnStyle = 'btn btn-danger btn-block';
              break;
          case 'firm':
              scope.btnStyle = 'btn btn-default btn-block';
              break;
        }

        


      }
    };
  });
