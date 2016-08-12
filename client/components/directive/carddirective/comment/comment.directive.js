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
        currentUser:'=',
        removeComment: '&',
        hitComment : '&',
        controllView: '&',
        forVersion: '='
      },
      link: function (scope, element, attrs) {
      	
        scope.viewcommentversions = false;
        switch (scope.category) {
          case 1:
              scope.type = 'primary';
              break;
          case 2:
              scope.type = 'default';
              break;
          case 3:
              scope.type = 'info';
              break;
          case 4:
              scope.type = 'danger';
              break;
          case 5:
              scope.type = 'warning';
              break;
          case 6:
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


        scope.myStyle = 'testimonial testimonial-' + scope.type + scope.filledType;


        scope.controllViewOfVersions = function(){
          scope.viewcommentversions = !scope.viewcommentversions
        }

        scope.$watch(
          function(){
            return scope.comment
          },
          function(value){ 
            if(!(_.isEmpty(value))){
              scope.alreadyHit = { alreadyHit: (value.hit.indexOf(scope.currentUser) > -1)}
            }
          }
        );

        scope._hitComment = function(){
          scope.hitComment({newVal: scope.alreadyHit}).then(function(comment){
            scope.comment = comment;
          })
        }


      	
      }
    };
  });

