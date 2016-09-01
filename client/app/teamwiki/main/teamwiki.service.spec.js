'use strict';

describe('Service: teamwiki', function () {

  // load the service's module
  beforeEach(module('constructiveApp'));

  // instantiate service
  var teamwiki;
  beforeEach(inject(function (_teamwiki_) {
    teamwiki = _teamwiki_;
  }));

  it('should do something', function () {
    expect(!!teamwiki).toBe(true);
  });

});
