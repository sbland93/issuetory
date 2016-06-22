'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User');
	//Group = mongoose.model('Group');


var test = {
	/*clear: function(done) {
		User.remove().exec(function(){
			Group.remove().exec(function(){
				done();
			})
		})
	},*/

	userClear: function() {
		User.remove();
	}
};


module.exports = test;