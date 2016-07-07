

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
    vm.obj.controllCardVersions = controllCardVersions;
    vm.obj.controllSimilar = controllSimilar;
    vm.obj.cardVersions = false;
    vm.obj.similarA = false;
    vm.obj.similarB = false;
    vm.obj.similarC = false;
    vm.obj.similarD = false;
    vm.obj.similarE = false;
    vm.obj.similarF = false;


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


    function controllCardVersions(){

      vm.obj.cardVersions = !vm.obj.cardVersions;
    
    }

    function controllSimilar(category){
      if(category == 'A') vm.obj.similarA = !vm.obj.similarA;
      if(category == 'B') vm.obj.similarB = !vm.obj.similarB;
      if(category == 'C') vm.obj.similarC = !vm.obj.similarC;
      if(category == 'D') vm.obj.similarD = !vm.obj.similarD;
      if(category == 'E') vm.obj.similarE = !vm.obj.similarE;
      if(category == 'F') vm.obj.similarF = !vm.obj.similarF;
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
