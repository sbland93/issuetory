


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
    vm.o.getCards = getCards;
    vm.o.create = create;
    vm.o.update = update;
    vm.o.hit = hit;

    //sort
    vm.o.sortGlory = sortGlory;
    vm.o.sortHistory = sortHistory;
    vm.o.sortAll = sortAll;
 
    vm.o.viewAddForm = false;
    vm.o.currentUser = storage.get('currentUser');

    vm.o.cardlist = [];
    _init();



    //getCard list with _init()
    function _init() {
    
      getCards();
    
    }



    //params including sorting option and query options;
    function getCards(params){

      card.getCards(params).then(function(cards){
        vm.o.cardlist = cards;
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



    function sortGlory(gloryStandard){
      getCards({ queryOptions: {upvote: {$gte: gloryStandard}}, sortOptions : {created_at: -1}});
    }

    function sortAll(){
      getCards();
    }

    function sortHistory(){
      getCards({sortOptions: {upvote: -1}});
    }



  }

})();
