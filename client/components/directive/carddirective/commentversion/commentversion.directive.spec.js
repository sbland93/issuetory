'use strict';

describe('Directive: commentversion', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp'));
  beforeEach(module('components/directive/carddirective/commentversion/commentversion.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<commentversion></commentversion>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the commentversion directive');
  }));
});
