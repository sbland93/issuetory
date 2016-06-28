
(function(){
	'use strict';

	angular
		.module('constructiveApp')
		.factory('Cards', Cards)
		.config(function ($stateProvider) {
    	$stateProvider
      	.state('card', {
	        url: '/card',
	        templateUrl: 'app/card/card.html',
	        controller: 'cardCtrl',
		    controllerAs: 'cardCtrl'
      });
  });

	function Cards(Restangular){
		var model = Restangular.all('/api/cards');
		model.one = function(id){
			return Restangular.one('/api/cards', id);
		}
		return model;
	}
})();