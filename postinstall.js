var exec = require('child_process').exec;
var fs = require('fs');

if (fs.existsSync('node_modules/modernizr')) {
	exec('cd node_modules/modernizr && npm install --production', function (error, stdout, stderr) {
		console.log('Installing modernizr in production mode');

		if (error !== null) {
			console.log(error);
		} else {
			console.log('Success!');
		}
	});
}