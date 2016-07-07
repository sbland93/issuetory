'use strict';

describe('Directive: comment', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp'));
  beforeEach(module('app/forum/comment/comment.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<comment></comment>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the comment directive');
  }));
});
