(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('card', card)
    //.constant('CARD_LIMIT', {count: 5});

  /* @ngInject */
  function card(Cards) {
    this.sortByType = sortByType;
    

    //Sorting By Type From A to F
    

    function sortByType(card){
      //How can we sort the card by type;
       
    }
  
  }
})();