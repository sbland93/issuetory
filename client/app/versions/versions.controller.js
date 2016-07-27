(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('versionCtrl', versionCtrl);

  /* @ngInject */
  function versionCtrl($stateParams, user, card) {

  
    var vm = this;
    vm.o = {};
    _init();

	function _init() {
		card.getCard($stateParams.id).then(function(card){
			vm.o.currentCard = card;
		})
	}

  }

})();
