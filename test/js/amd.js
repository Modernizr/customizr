/* global define */

define(["Modernizr"], function (M) {

	var tests = {
		"standalone": {
			"ambientlight": M.ambientlight,
			"applicationcache": M.applicationcache,
			"audio": M.audio,
			"battery": M.batteryapi,
			"blob": M.blobconstructor,
			"canvas": M.canvas,
			"canvastext": M.canvastext,
			"clipboard": M.clipboard,
			"contenteditable": M.contenteditable,
			"contextmenu": M.contextmenu,
			"cookies": M.cookies,
			"cors": M.cors,
			"crypto": M.cryptography,
			"custom-elements": M.customelements,
			"custom-protocol-handler": M.customprotocolhandler,
			"customevent": M.customevent,
			"dart": M.dart,
			"dataview-api": M.dataview,
			"emoji": M.emoji,
			"eventlistener": M.eventlistener,
			"exif-orientation": M.exiforientation,
			"flash": M.flash,
			"forcetouch": M.forcetouch,
			"fullscreen-api": M.fullscreen,
			"gamepad": M.gamepads,
			"geolocation": M.geolocation,
			"hashchange": M.hashchange,
			"hiddenscroll": M.hiddenscroll,
			"history": M.history,
			"htmlimports": M.htmlimports,
			"ie8compat": M.ie8compat,
			"indexeddb": M.indexeddb,
			"indexeddbblob": M.indexeddbblob,
			"input": M.input,
			"inputsearchevent": M.inputsearchevent,
			"inputtypes": M.inputtypes,
			"intl": M.intl,
			"json": M.json,
			"ligatures": M.ligatures,
			"lists-reversed": M.olreversed,
			"mathml": M.mathml,
			"media-source-extension-api": M.mediasource,
			"messagechannel": M.messagechannel,
			"notification": M.notification,
			"pagevisibility-api": M.pagevisibility,
			"performance": M.performance,
			"pointerevents": M.pointerevents,
			"pointerlock-api": M.pointerlock,
			"postmessage": M.postmessage,
			"proximity": M.proximity,
			"proxy": M.proxy,
			"queryselector": M.queryselector,
			"quota-management-api": M.quotamanagement,
			"requestanimationframe": M.requestanimationframe,
			"scrolltooptions": M.scrolltooptions,
			"serviceworker": M.serviceworker,
			"svg": M.svg,
			"templatestrings": M.templatestrings,
			"textencoding": [
				M["textencoder"],
				M["textdecoder"]
			],
			"touchevents": M.touchevents,
			"typed-arrays": M.typedarrays,
			"unicode-range": M.unicoderange,
			"unicode": M.unicode,
			"userdata": M.userdata,
			"vibration": M.vibrate,
			"video": M.video,
			"vml": M.vml,
			"web-intents": M.webintents,
			"webanimations": M.webanimations,
			"webgl": M.webgl,
			"websockets": M.websockets,
			"xdomainrequest": M.xdomainrequest
		},
		"a": {
			"aping": M.aping,
			"areaping": M.areaping,
			"download": M.adownload
		},
		"audio": {
			"autoplay": M.audioautoplay,
			"loop": M.audioloop,
			"preload": M.audiopreload,
			"webaudio": M.webaudio
		},
		"battery": {
			"lowbattery": M.lowbattery
		},
		"canvas": {
			"blending": M.canvasblending,
			"todataurl": [
				M["todataurljpeg"],
				M["todataurlpng"],
				M["todataurlwebp"]
			],
			"winding": M.canvaswinding
		},
		"crypto": {
			"getrandomvalues": M.getrandomvalues
		},
		"css": {
			"all": M.cssall,
			"animations": M.cssanimations,
			"appearance": M.appearance,
			"aspectratio": M.aspectratio,
			"backdropfilter": M.backdropfilter,
			"backgroundblendmode": M.backgroundblendmode,
			"backgroundcliptext": M.backgroundcliptext,
			"backgroundposition-shorthand": M.bgpositionshorthand,
			"backgroundposition-xy": M.bgpositionxy,
			"backgroundrepeat": [
				M["bgrepeatspace"],
				M["bgrepeatround"]
			],
			"backgroundsize": M.backgroundsize,
			"backgroundsizecover": M.bgsizecover,
			"borderimage": M.borderimage,
			"borderradius": M.borderradius,
			"boxdecorationbreak": M.boxdecorationbreak,
			"boxshadow": M.boxshadow,
			"boxsizing": M.boxsizing,
			"calc": M.csscalc,
			"checked": M.checked,
			"chunit": M.csschunit,
			"columns": M.csscolumns,
			"cssgrid": [
				M["cssgrid"],
				M["cssgridlegacy"]
			],
			"cubicbezierrange": M.cubicbezierrange,
			"customproperties": M.customproperties,
			"displayrunin": M["display-runin"],
			"displaytable": M.displaytable,
			"ellipsis": M.ellipsis,
			"escape": M.cssescape,
			"exunit": M.cssexunit,
			"filters": M.cssfilters,
			"flexbox": M.flexbox,
			"flexboxlegacy": M.flexboxlegacy,
			"flexboxtweener": M.flexboxtweener,
			"flexgap": M.flexgap,
			"flexwrap": M.flexwrap,
			"focusvisible": M.focusvisible,
			"focuswithin": M.focuswithin,
			"fontdisplay": M.fontdisplay,
			"fontface": M.fontface,
			"generatedcontent": M.generatedcontent,
			"gradients": M.cssgradients,
			"hairline": M.hairline,
			"hsla": M.hsla,
			"hyphens": [
				M["csshyphens"],
				M["softhyphens"],
				M["softhyphensfind"]
			],
			"invalid": M.cssinvalid,
			"lastchild": M.lastchild,
			"mask": M.cssmask,
			"mediaqueries": M.mediaqueries,
			"multiplebgs": M.multiplebgs,
			"nthchild": M.nthchild,
			"objectfit": M.objectfit,
			"opacity": M.opacity,
			"overflow-scrolling": M.overflowscrolling,
			"pointerevents": M.csspointerevents,
			"positionsticky": M.csspositionsticky,
			"pseudoanimations": M.csspseudoanimations,
			"pseudotransitions": M.csspseudotransitions,
			"reflections": M.cssreflections,
			"regions": M.regions,
			"remunit": M.cssremunit,
			"resize": M.cssresize,
			"rgba": M.rgba,
			"scrollbars": M.cssscrollbar,
			"scrollsnappoints": M.scrollsnappoints,
			"shapes": M.shapes,
			"siblinggeneral": M.siblinggeneral,
			"subpixelfont": M.subpixelfont,
			"supports": M.supports,
			"target": M.target,
			"textalignlast": M.textalignlast,
			"textdecoration": M.textdecoration,
			"textshadow": M.textshadow,
			"transforms": M.csstransforms,
			"transforms3d": M.csstransforms3d,
			"transformslevel2": M.csstransformslevel2,
			"transformstylepreserve3d": M.preserve3d,
			"transitions": M.csstransitions,
			"userselect": M.userselect,
			"valid": M.cssvalid,
			"variablefonts": M.variablefonts,
			"vhunit": M.cssvhunit,
			"vmaxunit": M.cssvmaxunit,
			"vminunit": M.cssvminunit,
			"vwunit": M.cssvwunit,
			"will-change": M.willchange,
			"wrapflow": M.wrapflow
		},
		"dom": {
			"classlist": M.classlist,
			"createElement-attrs": [
				M["createelementattrs"],
				M["createelement-attrs"]
			],
			"dataset": M.dataset,
			"documentfragment": M.documentfragment,
			"hidden": M.hidden,
			"intersection-observer": M.intersectionobserver,
			"microdata": M.microdata,
			"mutationObserver": M.mutationobserver,
			"passiveeventlisteners": M.passiveeventlisteners,
			"shadowroot": M.shadowroot,
			"shadowrootlegacy": M.shadowrootlegacy
		},
		"elem": {
			"bdi": M.bdi,
			"datalist": M.datalistelem,
			"details": M.details,
			"output": M.outputelem,
			"picture": M.picture,
			"progress-meter": [
				M["progressbar"],
				M["meter"]
			],
			"ruby": M.ruby,
			"template": M.template,
			"time": M.time,
			"track": [
				M["texttrackapi"],
				M["track"]
			],
			"unknown": M.unknownelements
		},
		"es5": {
			"array": M.es5array,
			"date": M.es5date,
			"function": M.es5function,
			"object": M.es5object,
			"specification": M.es5,
			"strictmode": M.strictmode,
			"string": M.es5string,
			"syntax": M.es5syntax,
			"undefined": M.es5undefined
		},
		"es6": {
			"array": M.es6array,
			"arrow": M.arrow,
			"class": M.es6class,
			"collections": M.es6collections,
			"contains": M.contains,
			"generators": M.generators,
			"math": M.es6math,
			"number": M.es6number,
			"object": M.es6object,
			"promises": M.promises,
			"rest-parameters": M.restparameters,
			"spread-array": M.spreadarray,
			"string-template": M.stringtemplate,
			"string": M.es6string,
			"symbol": M.es6symbol
		},
		"es7": {
			"array": M.es7array,
			"rest-destructuring": [
				M["restdestructuringarray"],
				M["restdestructuringobject"]
			],
			"spread-object": M.spreadobject
		},
		"es8": {
			"object": M.es8object
		},
		"event": {
			"deviceorientation-motion": [
				M["devicemotion"],
				M["deviceorientation"]
			],
			"oninput": M.oninput
		},
		"file": {
			"api": M.filereader,
			"filesystem": M.filesystem
		},
		"forms": {
			"capture": M.capture,
			"fileinput": M.fileinput,
			"fileinputdirectory": M.directory,
			"formattribute": M.formattribute,
			"inputnumber-l10n": M.localizednumber,
			"placeholder": M.placeholder,
			"requestautocomplete": M.requestautocomplete,
			"validation": M.formvalidation
		},
		"iframe": {
			"sandbox": M.sandbox,
			"seamless": M.seamless,
			"srcdoc": M.srcdoc
		},
		"img": {
			"apng": M.apng,
			"avif": M.avif,
			"crossorigin": M.imgcrossorigin,
			"jpeg2000": M.jpeg2000,
			"jpegxr": M.jpegxr,
			"lazyloading": M.lazyloading,
			"sizes": M.sizes,
			"srcset": M.srcset,
			"webp-alpha": M.webpalpha,
			"webp-animation": M.webpanimation,
			"webp-lossless": [
				M["webplossless"],
				M["webp-lossless"]
			],
			"webp": M.webp
		},
		"input": {
			"formaction": M.inputformaction,
			"formenctype": M.inputformenctype,
			"formmethod": M.inputformmethod,
			"formnovalidate": M.inputformnovalidate,
			"formtarget": M.inputformtarget
		},
		"link": {
			"prefetch": M.prefetch
		},
		"mediaquery": {
			"hovermq": M.hovermq,
			"pointermq": M.pointermq
		},
		"network": {
			"beacon": M.beacon,
			"connection-effectivetype": M.connectioneffectivetype,
			"connection": M.lowbandwidth,
			"eventsource": M.eventsource,
			"fetch": M.fetch,
			"xhr-responsetype-arraybuffer": M.xhrresponsetypearraybuffer,
			"xhr-responsetype-blob": M.xhrresponsetypeblob,
			"xhr-responsetype-document": M.xhrresponsetypedocument,
			"xhr-responsetype-json": M.xhrresponsetypejson,
			"xhr-responsetype-text": M.xhrresponsetypetext,
			"xhr-responsetype": M.xhrresponsetype,
			"xhr2": M.xhr2
		},
		"script": {
			"async": M.scriptasync,
			"defer": M.scriptdefer
		},
		"speech": {
			"speech-recognition": M.speechrecognition,
			"speech-synthesis": M.speechsynthesis
		},
		"storage": {
			"indexeddb2": M.indexeddb2,
			"localstorage": M.localstorage,
			"sessionstorage": M.sessionstorage,
			"websqldatabase": M.websqldatabase
		},
		"style": {
			"scoped": M.stylescoped
		},
		"svg": {
			"asimg": M.svgasimg,
			"clippaths": M.svgclippaths,
			"filters": M.svgfilters,
			"foreignobject": M.svgforeignobject,
			"inline": M.inlinesvg,
			"smil": M.smil
		},
		"textarea": {
			"maxlength": M.textareamaxlength
		},
		"url": {
			"bloburls": M.bloburls,
			"data-uri": M.datauri,
			"parser": M.urlparser,
			"urlsearchparams": M.urlsearchparams
		},
		"video": {
			"autoplay": M.videoautoplay,
			"crossorigin": M.videocrossorigin,
			"loop": M.videoloop,
			"preload": M.videopreload
		},
		"webauthn": {
			"publickeycredential": M.publickeycredential
		},
		"webgl": {
			"extensions": M.webglextensions
		},
		"webrtc": {
			"datachannel": M.datachannel,
			"getusermedia": M.getusermedia,
			"mediastream": M.mediarecorder,
			"peerconnection": M.peerconnection
		},
		"websockets": {
			"binary": M.websocketsbinary
		},
		"window": {
			"atob-btoa": M.atobbtoa,
			"framed": M.framed,
			"matchmedia": M.matchmedia,
			"pushmanager": M.pushmanager,
			"resizeobserver": M.resizeobserver
		},
		"workers": {
			"blobworkers": M.blobworkers,
			"dataworkers": M.dataworkers,
			"sharedworkers": M.sharedworkers,
			"transferables": M.transferables,
			"webworkers": M.webworkers,
			"workertypeoption": M.workertypeoption
		}
	};

	return M;

});