(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('versionCtrl', versionCtrl);

  /* @ngInject */
  function versionCtrl($stateParams, user, card) {

  
    var vm = this;
    vm.o = {};
    vm.o.controllVersion = controllVersion
    _init();

	function _init() {
		card.getCard($stateParams.id).then(function(card){
			vm.o.currentCard = card;
		})
	}

	//removeVersion by  && affect the score of contributor
	function controllVersion(indexOfVersion, amountOfScore, contributorId){
		console.log('contributorId', contributorId);
		var params = {
			score: amountOfScore
		}
		console.log('indexOfVersion', indexOfVersion);

		user.updateScore(contributorId, params).then(function(){
			var _version = {
				versionId : vm.o.currentCard.versions[indexOfVersion]._id 
			}
			return card.removeVersion(vm.o.currentCard._id, _version)
		}).then(function(){
			console.log('return!' );
			card.getCard($stateParams.id).then(function(card){
				vm.o.currentCard = card;
			})
		})

	
	}

  }

})();

