(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('versionCtrl', versionCtrl);

  /* @ngInject */
  function versionCtrl($stateParams, user, card, storage) {

  
    var vm = this;
    vm.o = {};
    vm.o.controllVersion = controllVersion;
    vm.o.updateScore = updateScore;
    vm.o.currentUser = storage.get('currentUser')._id
    _init();

	function _init() {
		card.getCard($stateParams.id).then(function(card){
			vm.o.currentCard = card;
			vm.o.auth = ( vm.o.currentUser === comment.creator._id )
		})
	}

	//removeVersion by  && affect the score of contributor
	function controllVersion(indexOfVersion, amountOfScore, contributorId){
		if(!vm.o.auth) return alert('you are not owner!');

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


	function updateScore(amountOfScore, contributorId){
		if(!vm.o.auth) return alert('you are not owner!');

		var params = {
			score: amountOfScore
		}
		user.updateScore(contributorId, params).then(function(){
			return;
		})
	}


  }

})();

