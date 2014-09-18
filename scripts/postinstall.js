var path = require("path");
var cwd  = path.resolve(__dirname, "..");
var cp   = require("child_process");
var fs   = require("fs");

var modernizrPath = path.join(cwd, "node_modules", "modernizr");

if (fs.existsSync(modernizrPath)) {
	cp.spawn("npm", ["install", "--production"], {
		cwd: modernizrPath,
		stdio: "inherit"
	});

	cp.on("exit", process.exit);
}
