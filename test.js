var exec = require('child_process').exec;
var fs = require('fs');
var os = require('os');
var platform = os.platform();
var cmd = 'rm -fr build';

if (platform !== 'linux' && platform !== 'darwin') {
	if (fs.existsSync('build')) {
		cmd = 'rmdir /s /q build';
	} else {
		cmd = 'cd'; // noop
	}
}

cmd += ' && node test/generate-tests.js && node test/runner.js';

exec(cmd, function (error, stdout, stderr) {
	console.log('Running tests');

	if (error !== null) {
		console.log(error);
	} else {
		console.log('Success!');
	}
});