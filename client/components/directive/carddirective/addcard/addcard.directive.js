'use strict';

angular.module('constructiveApp')
  .directive('addcard', function () {
    return {
      templateUrl: 'components/directive/carddirective/addcard/addcard.html',
      restrict: 'EA',
      scope: {
      	create : '&',
        controllView : '&',
      },

      link: function (scope, element, attrs) {
      	scope.newCard = {};
      	scope.newCard.link = [];
        scope.justForKeyword = [];
        scope.newCard.keyword = [];

        //check isItEmptyObject
        function _isEmptyArray(array)
        {
            return array.length == 0;
        }


        scope.createCard = function(params){
          if(_isEmptyArray(params.link)) delete params.link;
          if(_isEmptyArray(params.keyword)) delete params.keyword;
          //For Add to Version
          var newCard = { versions: [params] }
          scope.create({newVal: newCard});
        }

        scope.controllInput = function(params){
          if(params == 'reference') scope.newCard.link.push({});
          if(params == 'keyword') scope.justForKeyword.push({});
          if(params == 'removeKeyword') scope.justForKeyword.pop();
          if(params == 'removeReference') scope.newCard.link.pop();
          
        }
      }
    };a
  });
