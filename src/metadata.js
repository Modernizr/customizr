/* jshint node: true */
module.exports = function () {
	"use strict";

	// Dependencies
	var cp = require("child_process"),
		fs = require("fs"),
		path = require("path");

	// Deferreds
	var promise = require("promised-io/promise");

	return {
		init : function () {
			var deferred = new promise.Deferred(),
				modernizr = require("modernizr");

			modernizr.metadata(function (data) {
				data = JSON.parse(data).map(function (map) {
					var testpath = map.amdPath.replace("test/", "");
					testpath = testpath.replace(".js", "");

					return {
						"path": testpath,
						"name": map.name,
						"property": map.property,
						"cssclass": map.cssclass
					};
				});

				return deferred.resolve(data);
			});

			return deferred.promise;
		}
	};
};
