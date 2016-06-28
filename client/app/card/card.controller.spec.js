'use strict';

describe('Component: CardComponent', function () {

  // load the controller's module
  beforeEach(module('constructiveApp'));

  var CardComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    CardComponent = $componentController('CardComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});