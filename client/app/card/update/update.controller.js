

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

    //For this version ng-model.
    //ng-model and value is collided
    vm.o.thisVersion = {};


    function _init(){
      card.getCard($stateParams.id, true).then(function(card){
        vm.o.thisVersion.title = card.versions[0].title;
        vm.o.thisVersion.idea = card.versions[0].idea;
        //thisVersion.contributor = card.contributor[card.contributor.length - 1];
        vm.o.thisVersion.link = deepcopy.deepCopy(card.versions[0].link);
        vm.o.thisVersion.keyword = card.versions[0].keyword.slice(0);
        vm.o.currentCard = card;
      });
    }
    
    
    function update(cardId, params){
      //비동기식으로 만들어야 하고,변화가 있는지 확인하고(폼에서 하자!) 해야한다.
      vm.o.currentCard.versions.unshift(params);
      card.update(cardId, vm.o.currentCard).then(function(card){
        $state.go('forum', {id:cardId});
      }, function(error){
        console.log("Error", error);
      });
    }


  }

})();
