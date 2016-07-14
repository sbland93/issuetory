
(function(){
	'use strict';

	angular
		.module('constructiveApp')
		.config(function ($stateProvider) {
    	$stateProvider
      	.state('updatecomment', {
	        url: '/updatecomment/:id',
	        templateUrl: 'app/comment/updatecomment/updatecomment.html',
	        controller: 'updatecommentCtrl',
		    controllerAs: 'updatecommentCtrl'
      });
  });

})();