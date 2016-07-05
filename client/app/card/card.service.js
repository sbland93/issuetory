(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('card', card)
    //.constant('CARD_LIMIT', {count: 5});

  /* @ngInject */
  function card(Cards, myCache, $q) {
    this.getCard = getCard;
    this.getCards = getCards;
    this.create = create;
    this.remove = remove;
    this.update = update;

    function getCard(cardId, refreshingCache) {
      var deferred = $q.defer();

      if(myCache.get('card'+cardId) && !refreshingCache){

        deferred.resolve(myCache.get('card'+cardId));

      }
    
      else{

        Cards.one(cardId).get().then(function(currentCard){
              myCache.put('card'+cardId, currentCard);
              console.log('mycache.get(card_cardId)', myCache.get('card'+cardId));
              deferred.resolve(myCache.get('card'+cardId));
            }, function(error){
              deferred.reject(error);
            });
      
      }

      return deferred.promise;
    
    }

    function getCards(groupId, params, refreshingCache) {
      var deferred = $q.defer();

      if(myCache.get('cardList') && !refreshingCache){

        deferred.resolve(myCache.get('cardList'));

      }

      else {
        Cards.customGET('', params).then(function(cardList){
              myCache.put('cardList', cardList);
              deferred.resolve(myCache.get('cardList'));
            }, function(error){
              deferred.reject(error);
            });
      }

      return deferred.promise;
    }

    function create(params) {
      return Cards.customPOST(params);
    }

    function remove(cardId) {
      return Cards.one(cardId).customDELETE();
    }

    function update(cardId, params) {
      return Cards.one(cardId).customPUT(params);
    }
    

  }
})();