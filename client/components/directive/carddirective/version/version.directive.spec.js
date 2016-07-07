'use strict';

describe('Directive: version', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp'));
  beforeEach(module('app/forum/version/version.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<version></version>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the version directive');
  }));
});
