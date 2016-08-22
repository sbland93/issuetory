'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendMail = sendMail;
var nodemailer = require('nodemailer');
var q = require('q');

/*
// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');

// setup e-mail data with unicode symbols
var mailOptions = {
    from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address
    to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world 🐴', // plaintext body
    html: '<b>Hello world 🐴</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }
    console.log('Message sent: ' + info.response);
});

*/

/*var transporter = nodemailer.createTransport("SMTP", {
    service: 'Gmail',
    auth: {
        user: 'rltmqj@gmail.com',
        pass: 'remind2015-'
    }
});*/

var transporter = nodemailer.createTransport('smtps://rltmqj%40gmail.com:remind2015-@smtp.gmail.com');

function sendMail(options) {

    console.log('For Test: sendMail() is called [mail.service.js 38]');
    var deferred = q.defer();

    if (!options.to || !options.subject) {
        return deferred.reject('error');
    } else if (!options.from) {
        options.from = '"constructive 👥" <foo@blurdybloop.com>';
    }

    transporter.sendMail(options, function (error, info) {
        if (error) {
            console.log('For Test: error!', error);
            return deferred.reject(error);
        }
        console.log('For Test: sendMail() is called and transporter.sendMail is called also [mail.service.js 51]');
        deferred.resolve(info);
    });

    return deferred.promise;
}
//# sourceMappingURL=mail.service.js.map
