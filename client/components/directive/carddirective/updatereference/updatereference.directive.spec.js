'use strict';

describe('Directive: updatereference', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp'));
  beforeEach(module('app/card/update/updatereference/updatereference.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<updatereference></updatereference>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the updatereference directive');
  }));
});
