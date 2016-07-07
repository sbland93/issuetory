'use strict';

angular.module('constructiveApp')
  .directive('oauthButtons', function() {
    return {
      templateUrl: 'components/directive/originaldirective/oauth-buttons/oauth-buttons.html',
      restrict: 'EA',
      controller: 'OauthButtonsCtrl',
      controllerAs: 'OauthButtons',
      scope: {
        classes: '@'
      }
    };
  });
