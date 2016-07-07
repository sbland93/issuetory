


(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('cardCtrl', cardCtrl);

  /* @ngInject */
  function cardCtrl($scope, card, $state, Auth) {
  
    var vm = this;
    vm.obj = {};

    vm.obj.controllView = controllView;
    vm.obj.getCard = getCard;
    vm.obj.create = create;
 
    vm.obj.viewAddForm = false;

    vm.obj.cardlist = []; 
    _init();

 

    //getCard list with _init()
    function _init() {
      _getCards();

    }


    function _getCards(){

      card.getCards().then(function(cards){
        vm.obj.cardlist = cards;
      });
    
    }


    function getCard(cardId){
      card.getCard(cardId).then(function(card){
        vm.obj.currentCard = card;
      })
    }


    function create(params){
      console.log('For Test: create() is called [card.controller.js 53]');
      card.create(params).then(function(card){
        vm.obj.cardlist.unshift(card);
      })
    }

    
    function update(cardId, params){
      card.update(cardId, params).then(function(card){
        $state.go('card');
      });
    }

    function remove(cardId){
      card.remove(cardId).then(function(card){
        var _num = vm.obj.cardlist.indexOf(card);
        vm.obj.cardlist.splice(_num, 1);
        //$state.go('card');
      })
    }


    function controllView(){
      vm.obj.viewAddForm = !vm.obj.viewAddForm;
    }



  }

})();
