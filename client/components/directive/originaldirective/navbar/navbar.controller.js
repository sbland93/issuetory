/*
'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'glory',
    'state': 'card'
  },
  {
    'title': 'History',
    'state': 'main'
  },
  {
    'title': 'Glory',
    'state': 'glory'
  },
  {
    'title': 'Newest',
    'state': 'main'
  },
  {
    'title': 'TeamWiki',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth, card) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.cardTest = card.test;
  }
}

angular.module('constructiveApp')
  .controller('NavbarController', NavbarController);*/


(function() {
  'use strict';

  angular
    .module('constructiveApp')
    .controller('NavbarController', NavbarController);

  /* @ngInject */
  function NavbarController(Auth, card) {
  
    var vm = this;
    
    vm.menu = [{
    'title': 'Card',
    'state': 'card'
  },
  {
    'title': 'TeamWiki',
    'state': 'teamwiki'
  }];

  vm.isCollapsed = true;

  vm.isLoggedIn = Auth.isLoggedIn;
  vm.isAdmin = Auth.isAdmin;
  vm.getCurrentUser = Auth.getCurrentUser;

  }

})();