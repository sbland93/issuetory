'use strict';

describe('Directive: addcard', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp'));
  beforeEach(module('app/card/addcard/addcard.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<addcard></addcard>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the addcard directive');
  }));
});
