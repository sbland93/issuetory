'use strict';

angular.module('constructiveApp')
  .directive('comment', function () {
    return {
      templateUrl: 'components/directive/carddirective/comment/comment.html',
      restrict: 'EA',
      scope: {
      	category: '=',
      	filled: '=',
      	comment: '=info',
        controllView: '&'
      },
      link: function (scope, element, attrs) {
      	scope.viewcommentversions = false;

        switch (scope.category) {
          case 'A':
              scope.type = 'primary';
              break;
          case 'B':
              scope.type = 'default';
              break;
          case 'C':
              scope.type = 'info';
              break;
          case 'D':
              scope.type = 'danger';
              break;
          case 'E':
              scope.type = 'warning';
              break;
          case 'F':
              scope.type = 'success';
              break;
        }

        switch (scope.filled) {
          
          case true:
              scope.filledType = '-filled';
              break;
          default :
              scope.filledType = '';
              break;
        }





        /*if(scope.filled){
          scope.myStyle = 'testimonial testimonial-'+scope.type+scope.filled
        }else if(!scope.filled){
          scope.myStyle = 'testimonial testimonial-'+scope.type
        }*/

        scope.myStyle = 'testimonial testimonial-' + scope.type + scope.filledType;


        scope.controllViewOfVersions = function(){
          scope.viewcommentversions = !scope.viewcommentversions
        }
      	
      }
    };
  });

