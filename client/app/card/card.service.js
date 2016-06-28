(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('card', card)
    //.constant('CARD_LIMIT', {count: 5});

  /* @ngInject */
  function card(Cards) {
    this.getCard = getCard;
    this.getCards = getCards;
    this.create = create;
    this.remove = remove;
    this.update = update;
    //this.responseCard = responseCard;

    function getCard(cardId) {
      return Cards.one(cardId).get();
    }

    function getCards(groupId, params) {

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
    

  }
})();