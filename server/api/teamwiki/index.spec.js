'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var teamwikiCtrlStub = {
  index: 'teamwikiCtrl.index',
  show: 'teamwikiCtrl.show',
  create: 'teamwikiCtrl.create',
  update: 'teamwikiCtrl.update',
  destroy: 'teamwikiCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var teamwikiIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './teamwiki.controller': teamwikiCtrlStub
});

describe('Teamwiki API Router:', function() {

  it('should return an express router instance', function() {
    teamwikiIndex.should.equal(routerStub);
  });

  describe('GET /api/teamwikis', function() {

    it('should route to teamwiki.controller.index', function() {
      routerStub.get
        .withArgs('/', 'teamwikiCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/teamwikis/:id', function() {

    it('should route to teamwiki.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'teamwikiCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/teamwikis', function() {

    it('should route to teamwiki.controller.create', function() {
      routerStub.post
        .withArgs('/', 'teamwikiCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/teamwikis/:id', function() {

    it('should route to teamwiki.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'teamwikiCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/teamwikis/:id', function() {

    it('should route to teamwiki.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'teamwikiCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/teamwikis/:id', function() {

    it('should route to teamwiki.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'teamwikiCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
