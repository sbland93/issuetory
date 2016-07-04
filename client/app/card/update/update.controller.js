

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('updateCtrl', updateCtrl);

  /* @ngInject */
  function updateCtrl($scope, card, $stateParams, cardCache) {


  
    var vm = this;
    vm.obj = {};
    vm.obj.currentCard = cardCache.cachedCard;
    vm.obj.update = update;
    vm.obj.remove = remove;
    console.log('For Test: vm.obj.currentCard', vm.obj.currentCard);

    

    
    function update(cardId, params){
      card.update(cardId, params).then(function(card){
        $state.go('card');
      });
    }

    function remove(cardId){
      card.remove(cardId).then(function(card){
        $state.go('card');
      })
    }

  }

})();
