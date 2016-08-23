

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
        vm.o.thisVersion.title = card.title;
        vm.o.thisVersion.idea = card.idea;
        vm.o.thisVersion.link = deepcopy.deepCopy(card.link);
        vm.o.thisVersion.keyword = card.keyword.slice(0);
        vm.o.currentCard = card;
      });
    }
    
    
    function update(cardId, params){
      //비동기식으로 만들어야 하고,변화가 있는지 확인하고(폼에서 하자!) 해야한다.
      var body = {version: params};
      card.updateVersion(cardId, body).then(function(card){
      console.log('card', card);
        $state.go('forum', {id:cardId});
      }, function(error){
        console.log("Error", error);
      });
    }


  }

})();