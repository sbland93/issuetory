'use strict';

describe('Component: EmailvalidateComponent', function () {

  // load the controller's module
  beforeEach(module('constructiveApp'));

  var EmailvalidateComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EmailvalidateComponent = $componentController('EmailvalidateComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
