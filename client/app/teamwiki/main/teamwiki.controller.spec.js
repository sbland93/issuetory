'use strict';

describe('Component: TeamwikiComponent', function () {

  // load the controller's module
  beforeEach(module('constructiveApp'));

  var TeamwikiComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    TeamwikiComponent = $componentController('TeamwikiComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
