
'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'card'
  },
  {
    'title': 'History',
    'state': 'main'
  },
  {
    'title': 'Glory',
    'state': 'main'
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

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('constructiveApp')
  .controller('NavbarController', NavbarController);
