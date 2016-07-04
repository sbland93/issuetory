'use strict';

angular.module('constructiveApp')
  .directive('comment', function () {
    return {
      templateUrl: 'app/forum/comment/comment.html',
      restrict: 'EA',
      scope: {
      	type: '=',
      	filled: '=',
      	comment: '=info',
        controllSimilar: '&'
      },
      link: function (scope, element, attrs) {
      	if(scope.filled){
	      	scope.myStyle = 'testimonial testimonial-'+scope.type+scope.filled
      	}else if(!scope.filled){
    	  	scope.myStyle = 'testimonial testimonial-'+scope.type
      	}

        if(scope.type == 'primary') scope.category = 'A';
        console.log("For Test: scope.category = ", scope.category)
      	
      }
    };
  });

