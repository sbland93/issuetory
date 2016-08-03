'use strict';

angular.module('constructiveApp')
  .directive('addcomment', function () {
    return {
      templateUrl: 'components/directive/carddirective/addcomment/addcomment.html',
      restrict: 'EA',
      scope:{
      	representCategory :'=',
      	controllView : '&',
        createComment: '&',
      },
      link: function (scope, element, attrs) {
        scope.newComment = {};
        scope.newComment.link = [];


        scope.newComment = {};
        scope.newComment.link = [];
        scope.justForKeyword = [];
        scope.newComment.keyword = [];

        //check isItEmptyObject
        function _isEmptyArray(array)
        {
            return array.length == 0;
        }


        scope._createComment = function(params){
          if(_isEmptyArray(params.link)) delete params.link;
          if(_isEmptyArray(params.keyword)) delete params.keyword;
          //For Add to Version
          var newComment = { versions: [params] }
          scope.createComment({newVal: newComment});
        }

        scope.controllInput = function(params){
          if(params == 'reference') scope.newComment.link.push({});
          if(params == 'keyword') scope.justForKeyword.push({});
          if(params == 'removeKeyword') scope.justForKeyword.pop();
          if(params == 'removeReference') scope.newComment.link.pop(); 
        }



      }
    };
  });
