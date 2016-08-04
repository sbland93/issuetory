
(function(){
	'use strict';

	angular
		.module('constructiveApp')
		.factory('Comments', Comments)
		

	function Comments(Restangular){
		var model = Restangular.all('/api/comments');
		model.one = function(id){
			return Restangular.one('/api/comments', id);
		};
		model.updateVersion = function(id){
			return Restangular.one('/api/comments/version', id);
		}
		model.removeVersion = function(id){
			return Restangular.one('/api/comments/version/remove', id);
		}
		return model;
	}

})();