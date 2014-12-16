/*jshint node:true*/
/*global describe, before, it, after*/

"use strict";

var fs = require("fs");
var path = require("path");
var colors = require("colors");
var cwd = process.cwd();

var expect = require("expect.js");
var nexpect = require("nexpect");

var tests = "Intl, adownload, animation, apng, applicationcache, audio, audioloop, audiopreload, backgroundcliptext, backgroundsize, batteryapi, bgpositionshorthand, bgpositionxy, bgrepeatround, bgrepeatspace, bgsizecover, blobconstructor, blobworkers, borderimage, borderradius, boxshadow, boxsizing, canvas, canvastext, capture, checked, classlist, contains, contenteditable, contextmenu, cookies, cors, createelement-attrs, createelementattrs, cssanimations, csscalc, csscolumns, cssfilters, cssgradients, csshyphens, cssmask, csspointerevents, csspositionsticky, csspseudoanimations, csspseudotransitions, cssreflections, cssremunit, cssresize, cssscrollbar, csstransforms, csstransforms3d, csstransitions, cssvhunit, cssvmaxunit, cssvminunit, cssvwunit, cubicbezierrange, customprotocolhandler, dart, datalistelem, dataset, datauri, dataview, dataworkers, details, devicemotion, deviceorientation, directory, display-runin, displaytable, documentfragment, draganddrop, ellipsis, emoji, es5array, es5date, es5function, es5object, es5string, eventsource, exiforientation, fileinput, filereader, filesystem, flash, flexbox, flexboxlegacy, flexboxtweener, flexwrap, fontface, formattribute, formvalidation, framed, fullscreen, gamepads, generatedcontent, geolocation, getrandomvalues, getusermedia, hashchange, history, hsla, ie8compat, indexeddb, inlinesvg, input, inputformaction, inputtypes, jpegxr, json, lastchild, localizednumber, localstorage, lowbandwidth, lowbattery, mathml, mediaqueries, meter, microdata, multiplebgs, notification, nthchild, objectfit, olreversed, oninput, opacity, outputelem, overflowscrolling, pagevisibility, peerconnection, performance, placeholder, pointerevents, pointerlock, postmessage, preserve3d, progressbar, quotamanagement, regions, requestanimationframe, requestautocomplete, rgba, ruby, sandbox, scriptasync, scriptdefer, seamless, search, serviceworker, sessionstorage, shapes, sharedworkers, siblinggeneral, smil, softhyphens, softhyphensfind, speechrecognition, speechsynthesis, srcdoc, srcset, strictmode, stylescoped, subpixelfont, supports, svg, svgasimg, svgclippaths, svgfilters, target, template, textareamaxlength, textshadow, texttrackapi, time, todataurljpeg, todataurlpng, todataurlwebp, touchevents, track, typedarrays, unicode, userdata, userselect, vibrate, video, videoautoplay, videoloop, videopreload, vml, webaudio, webgl, webglextensions, webintents, webp, webp-lossless, webpalpha, webpanimation, webplossless, websockets, websocketsbinary, websqldatabase, webworkers, wrapflow, xhr2, xhrresponsetype, xhrresponsetypearraybuffer, xhrresponsetypeblob, xhrresponsetypedocument, xhrresponsetypejson, xhrresponsetypetext";
var testArray = tests.split(", ");

var cli = path.join(cwd, "bin", "customizr");
var settingsPath = path.join(cwd, "test", "settings");

var settings = {
	cache: path.join(settingsPath, "cache-invalidate.json"),
	custom: path.join(settingsPath, "custom.json"),
	exclude: path.join(settingsPath, "exclude.json"),
	prefixed: path.join(settingsPath, "prefixed.json"),
	select: path.join(settingsPath, "select.json")
};

describe("customizr", function () {
	var testsLength = testArray.length,
		existingBuild = path.join(cwd, "build", "modernizr-custom.js");

	it("should find all available tests in project", function (done) {
		process.stdout.write("\n\n");

		nexpect.spawn(cli, [
			"--config", settings.custom
		], {
			stripColors: true,
			verbose: true
		})
		.wait("Looking for Modernizr references")

		.wait(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> Ready to build using these settings:")

		.wait("Building your customized Modernizr").wait("OK")
		.expect(">> Success! Saved file to build/modernizr-custom.js")

		.run(function () {
			done();
		});
	});

	it("should avoid re-building a cached Modernizr build", function (done) {
		process.stdout.write("\n\n");

		nexpect.spawn(cli, [
			"--config", settings.custom
		], {
			stripColors: true,
			verbose: true
		})
		.wait("Looking for Modernizr references")

		.wait(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect("No config or test changes detected")
		.expect(">> The build step has been bypassed. Use `--force` to override.")
		.expect(">> Your current file can be found in build/modernizr-custom.js")

		.run(function () {
			done();
		});
	});

	it("should force re-building a cached Modernizr build", function (done) {
		process.stdout.write("\n\n");

		nexpect.spawn(cli, [
			"--config", settings.custom,
			"--force"
		], {
			stripColors: true,
			verbose: true
		})
		.wait("Looking for Modernizr references")

		.wait(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> Ready to build using these settings:")

		.wait("Building your customized Modernizr").wait("OK")
		.expect(">> Success! Saved file to build/modernizr-custom.js")

		.run(function () {
			done();
		});
	});

	it("should invalidate a cached Modernizr build", function (done) {
		process.stdout.write("\n\n");

		nexpect.spawn(cli, [
			"--config", settings.cache
		], {
			stripColors: true,
			verbose: true
		})
		.wait("Looking for Modernizr references")

		.wait(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> " + testsLength + " matches in")
		.expect(">> " + tests)

		.expect(">> Ready to build using these settings:")

		.wait("Building your customized Modernizr").wait("OK")
		.expect(">> Success! Saved file to build/modernizr-custom.js")

		.run(function () {
			done();
		});
	});

	describe("should include all tests", function () {
		var contents;

		testArray.forEach(function (test) {
			it(test, function (done) {
				contents = contents || fs.readFileSync(existingBuild, "utf8");
				expect(contents.indexOf(test)).to.not.equal(-1);
				done();
			});
		});
	});
});

describe("custom builds", function () {
	describe("declared tests", function () {

		it("should only build declared tests", function (done) {
			process.stdout.write("\n\n");

			nexpect.spawn(cli, [
				"--config", settings.select
			], {
				stripColors: true,
				verbose: true
			})

			.wait(">> Explicitly including these tests:")
			.expect(">> siblinggeneral, svg, webintents")

			.expect("Skipping file traversal")

			.wait("Building your customized Modernizr").wait("OK")
			.expect(">> Success! Saved file to build/modernizr-select.js")

			.run(function () {
				done();
			});
		});

		describe("should only contain references to bundled tests", function () {

			var includedTestArray = [
				"webintents",
				"siblinggeneral",
				"svg"
			];

			var testsLength = includedTestArray.length;
			var includedTests = includedTestArray.join(" ");

			var contents;

			includedTestArray.forEach(function (test) {
				it(test, function (done) {
					contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-select.js"), "utf8");
					expect(contents.indexOf(test)).to.not.equal(-1);
					done();
				});
			});

			describe("should not contain these references", function (done) {
				var excludedTestArray = testArray.filter(function (test) {
					return includedTestArray.indexOf(test) === -1;
				});

				excludedTestArray.forEach(function (test) {
					it(test, function (done) {
						contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-select.js"), "utf8");

						var testPattern = "addTest('" + test.toLowerCase();
						expect(contents.indexOf(testPattern)).to.equal(-1);
						done();
					});
				});
			});
		});

	});

	describe("excluded tests", function () {

		it("should build without excluded tests", function (done) {
			process.stdout.write("\n\n");

			nexpect.spawn(cli, [
				"--config", settings.exclude
			], {
				stripColors: true,
				verbose: true
			})

			.wait(">> Explicitly excluding these tests:")
			.expect(">> applicationcache, emoji, notification")

			.wait("Building your customized Modernizr").wait("OK")
			.expect(">> Success! Saved file to build/modernizr-exclude.js")

			.run(function () {
				done();
			});
		});

		describe("should not contain references to excluded tests", function () {

			var excludedTestArray = [
				"applicationcache",
				"emoji",
				"notification"
			];

			var testsLength = excludedTestArray.length;
			var excludedTests = excludedTestArray.join(" ");

			var contents;

			excludedTestArray.forEach(function (test) {
				it(test, function (done) {
					contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-exclude.js"), "utf8");
					expect(contents.indexOf(test)).to.equal(-1);
					done();
				});
			});
		});

	});

	describe("prefix test", function () {

		it("should honor the specified prefix", function (done) {
			process.stdout.write("\n\n");

			nexpect.spawn(cli, [
				"--config", settings.prefixed
			], {
				stripColors: true,
				verbose: true
			})

			.wait("Looking for Modernizr references")

			.expect(">> 3 matches in test/css/vanilla.css")
			.expect(">> cors, input, smil")

			.wait("Building your customized Modernizr").wait("OK")
			.expect(">> Success! Saved file to build/modernizr-prefixed.js")

			.run(function () {
				done();
			});
		});

		describe("should only contain references to bundled tests", function () {

			var includedTestArray = [
				"cors",
				"input",
				"smil"
			];

			var testsLength = includedTestArray.length;
			var includedTests = includedTestArray.join(" ");

			var contents;

			includedTestArray.forEach(function (test) {
				it(test, function (done) {
					contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-prefixed.js"), "utf8");
					expect(contents.indexOf(test)).to.not.equal(-1);
					done();
				});
			});

			describe("should not contain these references", function (done) {
				var excludedTestArray = testArray.filter(function (test) {
					return includedTestArray.indexOf(test) === -1;
				});

				excludedTestArray.forEach(function (test) {
					it(test, function (done) {
						contents = contents || fs.readFileSync(path.join(cwd, "build", "modernizr-prefixed.js"), "utf8");

						var testPattern = "addTest('" + test.toLowerCase();
						expect(contents.indexOf(testPattern)).to.equal(-1);
						done();
					});
				});
			});
		});

	});
});
