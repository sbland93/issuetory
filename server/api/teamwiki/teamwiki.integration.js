'use strict';

var app = require('../..');
import request from 'supertest';

var newTeamwiki;

describe('Teamwiki API:', function() {

  describe('GET /api/teamwikis', function() {
    var teamwikis;

    beforeEach(function(done) {
      request(app)
        .get('/api/teamwikis')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teamwikis = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      teamwikis.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/teamwikis', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/teamwikis')
        .send({
          name: 'New Teamwiki',
          info: 'This is the brand new teamwiki!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newTeamwiki = res.body;
          done();
        });
    });

    it('should respond with the newly created teamwiki', function() {
      newTeamwiki.name.should.equal('New Teamwiki');
      newTeamwiki.info.should.equal('This is the brand new teamwiki!!!');
    });

  });

  describe('GET /api/teamwikis/:id', function() {
    var teamwiki;

    beforeEach(function(done) {
      request(app)
        .get('/api/teamwikis/' + newTeamwiki._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          teamwiki = res.body;
          done();
        });
    });

    afterEach(function() {
      teamwiki = {};
    });

    it('should respond with the requested teamwiki', function() {
      teamwiki.name.should.equal('New Teamwiki');
      teamwiki.info.should.equal('This is the brand new teamwiki!!!');
    });

  });

  describe('PUT /api/teamwikis/:id', function() {
    var updatedTeamwiki;

    beforeEach(function(done) {
      request(app)
        .put('/api/teamwikis/' + newTeamwiki._id)
        .send({
          name: 'Updated Teamwiki',
          info: 'This is the updated teamwiki!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedTeamwiki = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedTeamwiki = {};
    });

    it('should respond with the updated teamwiki', function() {
      updatedTeamwiki.name.should.equal('Updated Teamwiki');
      updatedTeamwiki.info.should.equal('This is the updated teamwiki!!!');
    });

  });

  describe('DELETE /api/teamwikis/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/teamwikis/' + newTeamwiki._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when teamwiki does not exist', function(done) {
      request(app)
        .delete('/api/teamwikis/' + newTeamwiki._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
