
(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('emailvalidateCtrl', emailvalidateCtrl);

  /* @ngInject */
  function emailvalidateCtrl($scope, emailvalidate, $state) {

    var vm = this;
    this.confirmNumber = confirmNumber;
    _init();


    //find user number and send email with number.
    function _init() {
      _sendEmail(/*_findUsernumber()*/);
    }

    //return usernumber
    /*function _findUsernumber() {
    	var usernumber;
    	emailvalidate.getUsernumber().then(function(number){
    		usernumber = number;
    	})

    	return usernumber;
    }*/

    //sendEmail with usernumber(found by _findUsernumber())
    function _sendEmail(number) {
    	
    	emailvalidate.sendEmail(number).then(function(){
    		alert('We sent Email! check your validation number and put the number!');
    	})
      
    }

    function confirmNumber(number){
        console.log('For Test: email.confirmNumber() is called [emailvalidate.controller.js 41]');
        console.log('For Test: number from email.confirmNumber [emailvalidate.controller.js 41]', number);
    	emailvalidate.confirmNumber(number).then(function(value){
    		$state.go('main');
    	}).catch(function(){
    		alert('number is wrong!!');
    	});
    }
  }

})();