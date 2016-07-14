'use strict';

describe('Component: UpdatecommentComponent', function () {

  // load the controller's module
  beforeEach(module('constructiveApp'));

  var UpdatecommentComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    UpdatecommentComponent = $componentController('UpdatecommentComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
