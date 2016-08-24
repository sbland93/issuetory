
(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('commentVersionsCtrl', commentVersionsCtrl);

  /* @ngInject */
  function commentVersionsCtrl($stateParams, user, comment, storage) {

  
    var vm = this;
    vm.o = {};
    vm.o.controllVersion = controllVersion;
    vm.o.updateScore = updateScore;
    vm.o.currentUser = storage.get('currentUser')._id

    _init();

	function _init() {
		comment.getComment($stateParams.id).then(function(comment){
			vm.o.currentComment = comment;
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
				versionId : vm.o.currentComment.versions[indexOfVersion]._id 
			}
			return comment.removeVersion(vm.o.currentComment._id, _version)
		}).then(function(){
			console.log('return!');
			comment.getComment($stateParams.id).then(function(comment){
				console.log('change!');
				vm.o.currentComment = comment;
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


