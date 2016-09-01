'use strict';

describe('Directive: projectbranch', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp'));
  beforeEach(module('components/directive/teamdirective/projectbranch/projectbranch.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<projectbranch></projectbranch>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the projectbranch directive');
  }));
});
