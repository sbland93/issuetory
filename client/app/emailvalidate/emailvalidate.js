'use strict';

angular.module('constructiveApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('emailvalidate', {
        url: '/emailvalidate',
        templateUrl: 'app/emailvalidate/emailvalidate.html',
        controller: 'emailvalidateCtrl',
		    controllerAs: 'email'
      });
  })
  .factory('EmailValidates', EmailValidates);

/* @ngInject */
	function EmailValidates(Restangular){
		var model = Restangular.all('/api/users/validation');
		model.one = function(id){
			return Restangular.one('/api/users/validation', id);
		}
		return model;
	}

  