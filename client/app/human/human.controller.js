'use strict';
(function(){

class HumanComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('constructiveApp')
  .component('human', {
    templateUrl: 'app/human/human.html',
    controller: HumanComponent
  });

})();
