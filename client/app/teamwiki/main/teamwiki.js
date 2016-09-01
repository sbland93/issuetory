(function(){

'use strict';

	angular.module('constructiveApp')
	  .config(function ($stateProvider) {
	    $stateProvider
	      .state('teamwiki', {
	      	//id for human.
	        url: '/teamwiki/:id',
	        templateUrl: 'app/teamwiki/main/teamwiki.html',
	        controller: 'teamwikiCtrl as teamwiki'
	      });
	  })
	  .factory('Teamwikis', Teamwikis);
		

	function Teamwikis(Restangular){
		
		var model = Restangular.all('/api/teamwikis');
		model.one = function(id){
			return Restangular.one('/api/teamwikis', id);
		}
		return model;
	
	}

})();