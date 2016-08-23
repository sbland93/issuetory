'use strict';

describe('Directive: personalComment', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp'));
  beforeEach(module('components/directive/carddirective/personalComment/personalComment.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<personal-comment></personal-comment>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the personalComment directive');
  }));
});
