(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .service('deepcopy', deepcopy)

  /* @ngInject */
  function deepcopy() {
    this.deepCopy = deepCopy;


   /* function deepCopy(originalObject) {

      var copiedObject = JSON.parse(JSON.stringify( originalObject )); //참조없는 복사

    
      return copiedObject;
    }*/


    function deepCopy(obj) {
        if (Object.prototype.toString.call(obj) === '[object Array]') {
            var out = [], i = 0, len = obj.length;
            for ( ; i < len; i++ ) {
                if(obj[i] == '_id') continue;
                out[i] = deepCopy(obj[i]);
            }
            return out;
        }
        if (typeof obj === 'object') {
            var out = {}, i;
            for ( i in obj ) {
                if(i == '_id') continue;
                out[i] = deepCopy(obj[i]);
            }
            return out;
        }
        return obj;
    }

  }
})();