'use strict';

describe('Component: UpdateComponent', function () {

  // load the controller's module
  beforeEach(module('constructiveApp'));

  var UpdateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    UpdateComponent = $componentController('UpdateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
