(function(){
	'use strict';

	angular
		.module('constructiveApp')
		.factory('Users', Users)
		

	function Users(Restangular){
		var model = Restangular.all('/api/users');
		model.one = function(id){
			return Restangular.one('/api/users', id);
		}
		model.score = function(id){
			return Restangular.one('api/users/score', id);
		}
		return model;
	}

})();