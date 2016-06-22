
  'use strict';

  angular
    .module('constructiveApp')
    .service('emailvalidate', emailvalidate);

  /* @ngInject */
  function emailvalidate(EmailValidates) {
    this.sendEmail = sendEmail;
    this.confirmNumber = confirmNumber;


   /* function getUsernumber(userId) {
      return EmailValidates.one(userId).get();
    }

    function sendEmail(params){
      return EmailValidates.customPOST(params);
    }
    */

    function sendEmail(){
      return EmailValidates.getList();
    }

    function confirmNumber(params){
      console.log('For Test: params(in confirmNumber) is', params);
      return EmailValidates.customPOST(params);
    }

   
  }