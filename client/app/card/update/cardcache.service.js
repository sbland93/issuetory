(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('cardCache', cardCache)

  /* @ngInject */
  function cardCache(card, $q) {
    var vm = this;
    vm.cachingCard = cachingCard;

    function cachingCard(cardId){

      var deferred = $q.defer();

      card.getCard(cardId, true).then(function(card){
        vm.cachedCard = card;
        deferred.resolve(card);
      });
      
      return deferred.promise;

    }
    

  }


})();