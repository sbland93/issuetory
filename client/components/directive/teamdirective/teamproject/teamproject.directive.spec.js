'use strict';

describe('Directive: teamproject', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp'));
  beforeEach(module('components/directive/teamdirective/teamproject/teamproject.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<teamproject></teamproject>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the teamproject directive');
  }));
});
