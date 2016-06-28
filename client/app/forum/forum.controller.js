

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('forumCtrl', forumCtrl);

  /* @ngInject */
  function forumCtrl($scope, card, $stateParams) {


  
    var vm = this;
    vm.obj = {};
    vm.obj.currentCard = {};
    vm.obj.currentCardId = $stateParams.id;
    vm.obj.update = update;
    vm.obj.remove = remove;

    _init();




    //getCard list with _init()
    function _init() {
      console.log('For Test: vm.obj.currentCardId is [forum.controller.js 28]', vm.obj.currentCardId );
      _getCard($stateParams.id);
    }


    function _getCard(cardId){
      card.getCard(cardId).then(function(card){
        console.log('For Test: _getCard is called and the currentcard is[forum.controller.js 36]', card);
        vm.obj.currentCard = card;
      })
    }
    
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
