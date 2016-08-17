


(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('cardCtrl', cardCtrl);

  /* @ngInject */
  function cardCtrl($scope, card, $state, Auth, storage) {
  
    var vm = this;
    vm.o = {};


    vm.o.controllView = controllView;
    vm.o.getCard = getCard;
    vm.o.create = create;
    vm.o.update = update;
    vm.o.hit = hit;
 
    vm.o.viewAddForm = false;
    vm.o.currentUser = storage.get('currentUser');
    console.log('For Test: storage.get("currentUser")', storage.get('currentUser'));

    vm.o.cardlist = []; 
    _init();

 

    //getCard list with _init()
    function _init() {
      _getCards();
    }


    function _getCards(){

      card.getCards().then(function(cards){
        vm.o.cardlist = cards;
        console.log('vm.o.cardlist', vm.o.cardlist);
      });
    
    }


    function getCard(cardId){
      card.getCard(cardId).then(function(card){
        vm.o.currentCard = card;
      })
    }


    function create(params){
      console.log('For Test: create() is called [card.controller.js 53]');
      card.create(params).then(function(card){
        console.log('card is come!');
        vm.o.cardlist.unshift(card);
        vm.o.viewAddForm = !vm.o.viewAddForm;
      })
    }

    
    function update(cardId, params){
      card.update(cardId, params).then(function(card){
        console.log('hit!');
      });
    }


    function hit(cardId, params){
      return card.hit(cardId, params);
    }


    function remove(cardId){
      card.remove(cardId).then(function(card){
        var _num = vm.o.cardlist.indexOf(card);
        vm.o.cardlist.splice(_num, 1);
      })
    }


    function controllView(){
      vm.o.viewAddForm = !vm.o.viewAddForm;
    }



  }

})();
