'use strict';

(function() {

function authInterceptor($rootScope, $q, storage, $injector, Util) {
  var state;
  return {
    // Add authorization token to headers
    request(config) {
      config.headers = config.headers || {};
      if (storage.get('token') && Util.isSameOrigin(config.url)) {
        console.log('For Test: config.headers.Authorization!');
        config.headers.Authorization = 'Bearer ' + storage.get('token');
      }
      return config;
    },

    // Intercept 401s and redirect you to login
    responseError(response) {
      if (response.status === 401) {
        (state || (state = $injector.get('$state'))).go('login');
        // remove any stale tokens
        storage.remove('token');
      }
      return $q.reject(response);
    }
  };
}

angular.module('constructiveApp.auth')
  .factory('authInterceptor', authInterceptor);

})();
