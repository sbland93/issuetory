

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('forumCtrl', forumCtrl);

  /* @ngInject */
  function forumCtrl($scope, $stateParams, $state, Auth, card, forum, cardCache) {


  
    var vm = this;
    vm.obj = {};
    vm.obj.currentCard = {};
    vm.obj.currentCardId = $stateParams.id;
    vm.obj.update = update;
    vm.obj.remove = remove;


    _init();



    //getCard list with _init()

    function _init() {
      
      cardCache.cachingCard($stateParams.id).then(function(card){
        vm.obj.currentCard = card;
        
        //it will make vm.obj.commentA ~ vm.obj.commentF
        forum.sortByType(vm.obj.currentCard.comments, vm.obj); 
        console.log('For Test: vm.obj.currentCardId is [forum.controller.js 28]', vm.obj.currentCardId );
      });

      //Cache처럼 Refactoryin!
      Auth.getCurrentUser(function(user){
        vm.obj.currentUser = user;
      });

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
