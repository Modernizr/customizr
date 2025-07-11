# customizr

[![Build Status](https://github.com/Modernizr/customizr/actions/workflows/testing.yml/badge.svg)](https://github.com/Modernizr/customizr/actions/workflows/testing.yml)
[![npm version](https://badge.fury.io/js/customizr.svg)](https://badge.fury.io/js/customizr)

##### *tl;dr:* This tool crawls through your project files, gathers up your references to Modernizr tests and outputs a lean, mean Modernizr machine.

`customizr` is a Modernizr builder for your project. It is based on the Modernizr team's [Modulizr](https://github.com/Modernizr/modernizr.com/blob/gh-pages/i/js/modulizr.js) tool.

This configurable task allows you to configure and export a custom Modernizr build. Use Modernizr's [annotated source](http://modernizr.com/downloads/modernizr-latest.js) for development, and let this tool worry about optimization.

When you're ready to build, `customizr` will crawl your project for Modernizr test references and save out a minified, uglified, customized version using only the tests you've used in your JavaScript or (S)CSS.

## Example

### CSS / SCSS / LESS

When going through css files, the crawler will not look for `display: flex` but rather if the code contains a css selector that is named like the Modernizr properties

```
.flexbox {
  ...
}
```

or

```
.no-flexbox {
  ...
}
```

### Javascript

When going through javascript files, the crawler will look for Modernizr calls like this one:

```
if (!Modernizr.flexbox) {
  ...
}
```

## Use with Grunt

A Grunt wrapper is available at: [https://github.com/Modernizr/grunt-modernizr](https://github.com/Modernizr/grunt-modernizr)

## Use with Gulp

A Gulp wrapper is available at: [https://github.com/rejas/gulp-modernizr](https://github.com/rejas/gulp-modernizr)

## Getting Started

Install with npm: `npm install --save customizr`

## Documentation

### Command Line

```
./node-modules/.bin/customizr -c path/to/config
```

### Command Line Options

```
-h, --help           # Print options and usage
-v, --version        # Print the version number
-c, --config         # Path to your Modernizr config JSON file
-f, --force          # Ignore cached versions and force build Modernizr
```

#### Config File

A sample config file is below. Default values shown:

```javascript
{
	// Avoid unnecessary builds (see Caching section below)
	"cache" : true,

	// Path to the build you're using for development.
	"devFile" : false,

	// Path to save out the built file
	"dest" : false,

	// Based on default settings on http://modernizr.com/download/
	"options" : [
		"addTest",
		"html5printshiv",
		"testProp"
	],

	// By default, the build process is verbose
	"quiet" : false,
	
	// By default, source is uglified before saving
	"uglify" : true,

	// Define any tests you want to explicitly include
	"tests" : [],

	// Useful for excluding any tests that this tool will match
	// e.g. you use .notification class for notification elements,
	// but don’t want the test for Notification API
	"excludeTests": [],

	// By default, will crawl your project for references to Modernizr tests
	// Set to false to disable
	"crawl" : true,

	// Set to true to pass in buffers via the "files" parameter below
	"useBuffers" : false,

	// By default, this task will crawl all *.js, *.css, *.scss files.
	"files" : {
		"src": [
			"*[^(g|G)runt(file)?].{js,css,scss}",
			"**[^node_modules]/**/*.{js,css,scss}",
			"!lib/**/*"
		]
	},

	// Have custom Modernizr tests? Add them here.
	"customTests" : [],
	
	// Add custom prefix to Modernizr CSS classes
	"classPrefix" : '' 
}
```

###### **`cache`** (Boolean, optional)
When true, `customizr` will avoid the expensive build process if a certain criteria is met (see [Caching](#caching) section below)

###### **`devFile`** (String, optional)
Path to the local build file you're using for development. This parameter is needed so `customizr` can skip your dev file when traversing your project to avoid triggering false positives. If you're using a remote file for development, set this option to `remote`.

This is an optional parameter. If you do not have a local devFile, set this option to `false`. Note that if this parameter is false and you have a local development file, it will find all Modernizr references from this file and will defeat the purpose of this tool.

###### **`dest`** (String, optional)
Path to save the customized Modernizr build. It defaults to `lib/modernizr-custom.js`.

This is an optional parameter. If undefined or falsy, `customizr` will return the result as a string and will not write to disk.

###### **`options`** (Array, optional)
An array of extra configuration options. Check the extra section on [modernizr.com/download](http://modernizr.com/download/) for complete options. Defaults are as they appear on the official site.

This is an optional parameter.

###### **`quiet`** (Boolean, optional)
By default, the build process is verbose. Set to true to build silently.

This is an optional parameter.

###### **`uglify`** (Boolean, optional)
By default, the source is uglified before save. Set to false to disable.

This is an optional parameter.

###### **`tests`** (Array, optional)
Define any tests you want to explicitly include. Check out the full set of test options [here](#ADD_LINK_LATER).

This is an optional parameter.

###### **`excludeTests`** (Array, optional)
Useful for excluding any tests that this tool will match. (e.g. you use .notification class for notification elements, but don’t want the test for Notification API).

This is an optional parameter.

###### **`crawl`** (Boolean, optional)
By default, this task will crawl your project for references to Modernizr tests. Set to false to disable.

This is an optional parameter.

###### **`useBuffers`** (Boolean, optional)
When `true`, the `files` parameter will accept an array of buffers in lieu of lookup strings.

###### **`files.src`** (Array, optional)
When `crawl` = `true`, this task will crawl all `*.js`, `*.css`, `*.scss` files. You can override this by defining a custom `files.src` array. The object supports either:

- An array of all [minimatch](https://github.com/isaacs/minimatch) options
- An array of [Vinyl-style](https://github.com/wearefractal/vinyl) File buffers. `useBuffers` must be `true` to enable this functionality.

This is an optional parameter.

###### **`customTests`** (Array, optional)
Have custom Modernizr tests? Add paths to their location here. The object supports all [minimatch](https://github.com/isaacs/minimatch) options.

This is an optional parameter.

###### **`classPrefix`** (String, optional)
Add custom prefix to Modernizr classes to avoid clashes with your preexisting class names.

This is an optional parameter.

## Caching

For large projects, building a custom Modernizr file can be an expensive task. `customizr` does its best to avoid unnecessary builds by following a set criteria. When all of the following are met, it assumes that no changes are necessary:

- If `customizr` has been previously run *AND*
- If [`settings.cache`](#cache-boolean-optional) is true *AND*
- If [`settings.dest`](#dest-string-optional) exists and is identical to the previous build *AND*
- If the `customizr` version is identical to the previous build *AND*
- If the `modernizr` dependency is identical to the previous build *AND*
- If the current [`customizr` settings](#config-file) are identical to the previous build *THEN*

`customizr` returns the cached data found in [`settings.dest`](#dest-string-optional)

- If any of the preceding rules are falsy, the cache is invalidated.
- If [`settings.cache`](#cache-boolean-optional) is falsy, the cache is invalidated.
- If [`settings.dest`](#dest-string-optional) is not defined, the cache is invalidated.

## Programmatic API

### require("customizr")(settings, callback)

- `settings` — A settings object as described above in "Config File".
- `callback` — A callback to execute when the task is finished

You can use `customizr` directly in your app if you prefer to not rely on the binary.

```js
var modernizr = require("customizr");

var settings = {
	"cache" : true,
	"devFile" : false,
	"dest" : false,
	"options" : [
		"setClasses",
		"addTest",
		"html5printshiv",
		"testProp"
	],
	"uglify" : true,
	"tests" : [],
	"excludeTests": [],
	"crawl" : true,
	"useBuffers": false,
	"files" : {
		"src": [
			"*[^(g|G)runt(file)?].{js,css,scss}",
			"**[^node_modules]/**/*.{js,css,scss}",
			"!lib/**/*"
		]
	},
	"customTests" : []
};

modernizr(settings, function () {
	// all done!
});
```

## License
Copyright (c) 2025 The Modernizr team
Licensed under the MIT license.
