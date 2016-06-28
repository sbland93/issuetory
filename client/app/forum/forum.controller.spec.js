'use strict';

describe('Component: ForumComponent', function () {

  // load the controller's module
  beforeEach(module('constructiveApp'));

  var ForumComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    ForumComponent = $componentController('ForumComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
