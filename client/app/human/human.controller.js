//User의 서비스를 만들고
//User정보를 가져온다. (Card, Comment)
//가져올때 sorting을 created로 한다
//comment와 card의 UI는다르게 준다

(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('humanCtrl', humanCtrl);

  /* @ngInject */
  function humanCtrl($stateParams, user, storage) {

  
    var vm = this;
    vm.o = {};
    _init();



    function _init(){
    	user.getUser($stateParams.id).then(function(thisPageUser){
    		
        vm.o.thisPageUser = thisPageUser;
        vm.o.auth = (thisPageUser._id == storage.get('currentUser')._id);

      })
    }


  }

})();
