

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('updateCtrl', updateCtrl);

  /* @ngInject */
  function updateCtrl($scope, $stateParams, $state, card, myCache) {


  
    var vm = this;
    vm.obj = {};
    vm.obj.update = update;
    vm.obj.remove = remove;
    _init();


    function _init(){
      card.getCard($stateParams.id).then(function(card){
        vm.obj.currentCard = card;
      });
    }
    
    
    function update(cardId, params){
      card.update(cardId, params).then(function(card){
        console.log("For Test: myCache.get('card'+cardId)", myCache.get('card'+cardId));
        $state.go('forum', {id:cardId});
      });
    }

    function remove(cardId){
      card.remove(cardId).then(function(card){
        $state.go('card');
      })
    }

  }

})();
