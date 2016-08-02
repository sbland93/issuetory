(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('card', card)

  /* @ngInject */
  function card(Cards, myCache, $q) {
    this.getCard = getCard;
    this.getCards = getCards;
    this.create = create;
    this.remove = remove;
    this.update = update;
    this.updateVersion = updateVersion;

    function getCard(cardId, refreshingCache) {
      return Cards.one(cardId).get();    
    }

    function getCards(groupId, params, refreshingCache) {
      return Cards.customGET('', params);
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

    //it will delete the version of Card (of cardId)
    function updateVersion(cardId, version){
      return Cards.version(cardId).customPUT(version);
    }

  }

  
})();