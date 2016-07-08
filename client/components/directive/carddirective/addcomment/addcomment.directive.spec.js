'use strict';

describe('Directive: addcomment', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp'));
  beforeEach(module('components/directive/carddirective/addcomment/addcomment.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<addcomment></addcomment>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the addcomment directive');
  }));
});
