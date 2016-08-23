'use strict';

describe('Directive: personalCard', function () {

  // load the directive's module and view
  beforeEach(module('constructiveApp.personalCard'));
  beforeEach(module('components/directive/carddirective/personalCard/personalCard.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<personal-card></personal-card>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the personalCard directive');
  }));
});
