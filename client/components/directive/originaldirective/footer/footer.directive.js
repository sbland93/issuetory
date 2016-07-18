'use strict';

angular.module('constructiveApp')
  .directive('footer', function() {
    return {
      templateUrl: 'components/directive/originaldirective/footer/footer.html',
      restrict: 'E',
      link: function(scope, element) {
        element.addClass('footer');
      }
    };
  });