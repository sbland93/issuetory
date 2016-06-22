'use strict';

var should = require('should'),
    MailService = require('./mail.service');

/**
 * Test 항목
 *   exports.create = create;
 *   exports.index = index;
 *   exports.show = show;
 *   exports.update = update;
 *   exports.destroy = destroy;
 */

describe('>>mail system', function() {
  describe('mail send', function(){
    it('should be able to send mail', function(){
      MailService.sendMail({
        from: '"constructive" <rltmqj@yonsei.ac.kr>',
        subject: 'Test Subject',
        to: 'rltmqj@gmail.com',
        html: '<b>test</b>'
      }).then(function(promise){
        promise.should.not.be.eql(null);
      }, function(error){
        error.should.be.eql(null);
      })
    })
  })
});
