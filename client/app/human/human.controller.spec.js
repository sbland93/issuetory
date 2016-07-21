'use strict';

describe('Component: HumanComponent', function () {

  // load the controller's module
  beforeEach(module('constructiveApp'));

  var HumanComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    HumanComponent = $componentController('HumanComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
