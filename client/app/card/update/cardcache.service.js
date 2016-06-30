(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('cardCache', cardCache)

  /* @ngInject */
  function cardCache(card, $q) {
    var vm = this;
    vm.cachingCard = cachingCard;
    vm.cachedCard = null;

    function cachingCard(cardId){

      var deferred = $q.defer();

      card.getCard(cardId).then(function(card){
        vm.cachedCard = card;
        deferred.resolve(card);
      });
      
      return deferred.promise;

    }
    

  }


})();