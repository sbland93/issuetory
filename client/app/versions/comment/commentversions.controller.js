
(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('commentVersionsCtrl', commentVersionsCtrl);

  /* @ngInject */
  function commentVersionsCtrl($stateParams, user, comment) {

  
    var vm = this;
    vm.o = {};
    vm.o.controllVersion = controllVersion
    _init();

	function _init() {
		comment.getComment($stateParams.id).then(function(comment){
			vm.o.currentComment = comment;
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



  }

})();


