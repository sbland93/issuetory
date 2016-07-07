(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('deepcopy', deepcopy)

  /* @ngInject */
  function deepcopy() {
    this.deepCopy = deepCopy;


    function deepCopy(originalObject) {

      var copiedObject = JSON.parse(JSON.stringify( originalObject )); //참조없는 복사

    
      return copiedObject;
    }

  }
})();