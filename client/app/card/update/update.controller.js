

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('updateCtrl', updateCtrl);

  /* @ngInject */
  function updateCtrl($scope, $stateParams, $state, card, myCache, deepcopy) {


  
    var vm = this;
    vm.o = {};
    vm.o.update = update;
    _init();

    var lastCard = {};


    function _init(){
      card.getCard($stateParams.id, true).then(function(card){
        lastCard.title = card.title;
        lastCard.idea = card.idea;
        //lastCard.contributor = card.contributor[card.contributor.length - 1];
        lastCard.link = deepcopy.deepCopy(card.link);
        lastCard.keyword = card.keyword.slice(0);
        vm.o.currentCard = card;
      });
    }
    
    
    function update(cardId, params){
      //비동기식으로 만들어야 하고,변화가 있는지 확인하고(폼에서 하자!) 해야한다.
      params.versions.push(lastCard);

      card.update(cardId, params).then(function(card){
        console.log("For Test: lastCard", lastCard);
        $state.go('forum', {id:cardId});
      }, function(error){
        console.log("Error", error);
      });

    }

    

  }

})();
