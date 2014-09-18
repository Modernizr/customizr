var path = require("path");
var cwd  = path.resolve(__dirname, "..");
var cp   = require("child_process");
var fs   = require("fs");

var modernizrPath = path.join(cwd, "node_modules", "modernizr");

if (fs.existsSync(modernizrPath)) {
	console.log("Installing Modernizr dependencies");

	var child = cp.spawn("npm", ["install", "--production"], {
		cwd: modernizrPath,
		stdio: "inherit"
	});

	child.on("exit", process.exit);
}
