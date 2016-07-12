
(function(){
	'use strict';

	angular
		.module('constructiveApp')
		.factory('Comments', Comments)
		

	function Comments(Restangular){
		var model = Restangular.all('/api/comments');
		model.one = function(id){
			return Restangular.one('/api/comments', id);
		}
		return model;
	}

})();