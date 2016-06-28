(function(){
	'use strict';

	angular
		.module('constructiveApp')
		.config(function ($stateProvider) {
    	$stateProvider
      	.state('update', {
	        url: '/update/:id',
	        templateUrl: 'app/card/update/update.html',
	        controller: 'updateCtrl',
//		    controllerAs: 'updateCtrl'
      });
  });

})();