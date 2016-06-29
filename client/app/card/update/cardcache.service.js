(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('cardCache', cardCache)
    //.constant('CARD_LIMIT', {count: 5});

  /* @ngInject */
  function cardCache(card) {
    this.cachingCard = cachingCard;
    this.cachedCard = null;

    function cachingCard(cardId){

      card.getCard(cardId).then(function(card){
        this.cachedCard = card;

        //it will make controllerObj.commentA ~ controllerObj.commentF
        forum.sortByType(card.comments, this);
         
      })
    }

  }

  
})();