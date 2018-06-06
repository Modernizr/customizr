/* jshint sub: true */

var Modernizr = window.Modernizr;

var tests = {
	"standalone": {
		"ambientlight": Modernizr.ambientlight,
		"applicationcache": Modernizr.applicationcache,
		"audio": Modernizr.audio,
		"battery": Modernizr.batteryapi,
		"blob": Modernizr.blobconstructor,
		"canvas": Modernizr.canvas,
		"canvastext": Modernizr.canvastext,
		"contenteditable": Modernizr.contenteditable,
		"contextmenu": Modernizr.contextmenu,
		"cookies": Modernizr.cookies,
		"cors": Modernizr.cors,
		"crypto": Modernizr.cryptography,
		"custom-elements": Modernizr.customelements,
		"custom-protocol-handler": Modernizr.customprotocolhandler,
		"customevent": Modernizr.customevent,
		"dart": Modernizr.dart,
		"dataview-api": Modernizr.dataview,
		"emoji": Modernizr.emoji,
		"eventlistener": Modernizr.eventlistener,
		"exif-orientation": Modernizr.exiforientation,
		"flash": Modernizr.flash,
		"forcetouch": Modernizr.forcetouch,
		"fullscreen-api": Modernizr.fullscreen,
		"gamepad": Modernizr.gamepads,
		"geolocation": Modernizr.geolocation,
		"hashchange": Modernizr.hashchange,
		"hiddenscroll": Modernizr.hiddenscroll,
		"history": Modernizr.history,
		"htmlimports": Modernizr.htmlimports,
		"ie8compat": Modernizr.ie8compat,
		"indexeddb": Modernizr.indexeddb,
		"indexeddbblob": Modernizr.indexeddbblob,
		"input": Modernizr.input,
		"inputsearchevent": Modernizr.search,
		"inputtypes": Modernizr.inputtypes,
		"intl": Modernizr.intl,
		"json": Modernizr.json,
		"ligatures": Modernizr.ligatures,
		"lists-reversed": Modernizr.olreversed,
		"mathml": Modernizr.mathml,
		"messagechannel": Modernizr.MessageChannel,
		"notification": Modernizr.notification,
		"pagevisibility-api": Modernizr.pagevisibility,
		"performance": Modernizr.performance,
		"pointerevents": Modernizr.pointerevents,
		"pointerlock-api": Modernizr.pointerlock,
		"postmessage": Modernizr.postmessage,
		"proximity": Modernizr.proximity,
		"queryselector": Modernizr.queryselector,
		"quota-management-api": Modernizr.quotamanagement,
		"requestanimationframe": Modernizr.requestanimationframe,
		"serviceworker": Modernizr.serviceworker,
		"svg": Modernizr.svg,
		"templatestrings": Modernizr.templatestrings,
		"touchevents": Modernizr.touchevents,
		"typed-arrays": Modernizr.typedarrays,
		"unicode-range": Modernizr.unicoderange,
		"unicode": Modernizr.unicode,
		"userdata": Modernizr.userdata,
		"vibration": Modernizr.vibrate,
		"video": Modernizr.video,
		"vml": Modernizr.vml,
		"web-intents": Modernizr.webintents,
		"webanimations": Modernizr.animation,
		"webgl": Modernizr.webgl,
		"websockets": Modernizr.websockets,
		"xdomainrequest": Modernizr.xdomainrequest
	},
	"a": {
		"download": Modernizr.adownload
	},
	"audio": {
		"loop": Modernizr.audioloop,
		"preload": Modernizr.audiopreload,
		"webaudio": Modernizr.webaudio
	},
	"battery": {
		"lowbattery": Modernizr.lowbattery
	},
	"canvas": {
		"blending": Modernizr.canvasblending,
		"todataurl": [
			Modernizr["todataurljpeg"],
			Modernizr["todataurlpng"],
			Modernizr["todataurlwebp"]
		],
		"winding": [
			Modernizr["canvaswinding"]
		]
	},
	"crypto": {
		"getrandomvalues": Modernizr.getrandomvalues
	},
	"css": {
		"all": Modernizr.cssall,
		"animations": Modernizr.cssanimations,
		"appearance": Modernizr.appearance,
		"backdropfilter": Modernizr.backdropfilter,
		"backgroundblendmode": Modernizr.backgroundblendmode,
		"backgroundcliptext": Modernizr.backgroundcliptext,
		"backgroundposition-shorthand": Modernizr.bgpositionshorthand,
		"backgroundposition-xy": Modernizr.bgpositionxy,
		"backgroundrepeat": [
			Modernizr["bgrepeatspace"],
			Modernizr["bgrepeatround"]
		],
		"backgroundsize": Modernizr.backgroundsize,
		"backgroundsizecover": Modernizr.bgsizecover,
		"borderimage": Modernizr.borderimage,
		"borderradius": Modernizr.borderradius,
		"boxshadow": Modernizr.boxshadow,
		"boxsizing": Modernizr.boxsizing,
		"calc": Modernizr.csscalc,
		"checked": Modernizr.checked,
		"chunit": Modernizr.csschunit,
		"columns": Modernizr.csscolumns,
		"cssgrid": [
			Modernizr["cssgrid"],
			Modernizr["cssgridlegacy"]
		],
		"cubicbezierrange": Modernizr.cubicbezierrange,
		"displayrunin": Modernizr["display-runin"],
		"displaytable": Modernizr.displaytable,
		"ellipsis": Modernizr.ellipsis,
		"escape": Modernizr.cssescape,
		"exunit": Modernizr.cssexunit,
		"filters": Modernizr.cssfilters,
		"flexbox": Modernizr.flexbox,
		"flexboxlegacy": Modernizr.flexboxlegacy,
		"flexboxtweener": Modernizr.flexboxtweener,
		"flexwrap": Modernizr.flexwrap,
		"focuswithin": Modernizr.focuswithin,
		"fontface": Modernizr.fontface,
		"generatedcontent": Modernizr.generatedcontent,
		"gradients": Modernizr.cssgradients,
		"hairline": Modernizr.hairline,
		"hsla": Modernizr.hsla,
		"hyphens": [
			Modernizr["csshyphens"],
			Modernizr["softhyphens"],
			Modernizr["softhyphensfind"]
		],
		"invalid": Modernizr.cssinvalid,
		"lastchild": Modernizr.lastchild,
		"mask": Modernizr.cssmask,
		"mediaqueries": Modernizr.mediaqueries,
		"multiplebgs": Modernizr.multiplebgs,
		"nthchild": Modernizr.nthchild,
		"objectfit": Modernizr.objectfit,
		"opacity": Modernizr.opacity,
		"overflow-scrolling": Modernizr.overflowscrolling,
		"pointerevents": Modernizr.csspointerevents,
		"positionsticky": Modernizr.csspositionsticky,
		"pseudoanimations": Modernizr.csspseudoanimations,
		"pseudotransitions": Modernizr.csspseudotransitions,
		"reflections": Modernizr.cssreflections,
		"regions": Modernizr.regions,
		"remunit": Modernizr.cssremunit,
		"resize": Modernizr.cssresize,
		"rgba": Modernizr.rgba,
		"scrollbars": Modernizr.cssscrollbar,
		"scrollsnappoints": Modernizr.scrollsnappoints,
		"shapes": Modernizr.shapes,
		"siblinggeneral": Modernizr.siblinggeneral,
		"subpixelfont": Modernizr.subpixelfont,
		"supports": Modernizr.supports,
		"target": Modernizr.target,
		"textalignlast": Modernizr.textalignlast,
		"textshadow": Modernizr.textshadow,
		"transforms": Modernizr.csstransforms,
		"transforms3d": Modernizr.csstransforms3d,
		"transformslevel2": Modernizr.csstransformslevel2,
		"transformstylepreserve3d": Modernizr.preserve3d,
		"transitions": Modernizr.csstransitions,
		"userselect": Modernizr.userselect,
		"valid": Modernizr.cssvalid,
		"variablefonts": [
			Modernizr["variablefonts"]
		],
		"vhunit": Modernizr.cssvhunit,
		"vmaxunit": Modernizr.cssvmaxunit,
		"vminunit": Modernizr.cssvminunit,
		"vwunit": Modernizr.cssvwunit,
		"will-change": Modernizr.willchange,
		"wrapflow": Modernizr.wrapflow
	},
	"dom": {
		"classlist": Modernizr.classlist,
		"createElement-attrs": [
			Modernizr["createelementattrs"],
			Modernizr["createelement-attrs"]
		],
		"dataset": Modernizr.dataset,
		"documentfragment": Modernizr.documentfragment,
		"hidden": Modernizr.hidden,
		"microdata": Modernizr.microdata,
		"mutationObserver": Modernizr.mutationobserver,
		"passiveeventlisteners": Modernizr.passiveeventlisteners
	},
	"elem": {
		"bdi": Modernizr.bdi,
		"datalist": Modernizr.datalistelem,
		"details": Modernizr.details,
		"output": Modernizr.outputelem,
		"picture": Modernizr.picture,
		"progress-meter": [
			Modernizr["progressbar"],
			Modernizr["meter"]
		],
		"ruby": Modernizr.ruby,
		"template": Modernizr.template,
		"time": Modernizr.time,
		"track": [
			Modernizr["texttrackapi"],
			Modernizr["track"]
		],
		"unknown": Modernizr.unknownelements
	},
	"es5": {
		"array": Modernizr.es5array,
		"date": Modernizr.es5date,
		"function": Modernizr.es5function,
		"object": Modernizr.es5object,
		"specification": Modernizr.es5,
		"strictmode": Modernizr.strictmode,
		"string": Modernizr.es5string,
		"syntax": Modernizr.es5syntax,
		"undefined": Modernizr.es5undefined
	},
	"es6": {
		"array": Modernizr.es6array,
		"arrow": Modernizr.arrow,
		"collections": Modernizr.es6collections,
		"contains": Modernizr.contains,
		"generators": Modernizr.generators,
		"math": Modernizr.es6math,
		"number": Modernizr.es6number,
		"object": Modernizr.es6object,
		"promises": Modernizr.promises,
		"string": Modernizr.es6string
	},
	"event": {
		"deviceorientation-motion": [
			Modernizr["devicemotion"],
			Modernizr["deviceorientation"]
		],
		"oninput": Modernizr.oninput
	},
	"file": {
		"api": Modernizr.filereader,
		"filesystem": Modernizr.filesystem
	},
	"forms": {
		"capture": Modernizr.capture,
		"fileinput": Modernizr.fileinput,
		"fileinputdirectory": Modernizr.directory,
		"formattribute": Modernizr.formattribute,
		"inputnumber-l10n": Modernizr.localizednumber,
		"placeholder": Modernizr.placeholder,
		"requestautocomplete": Modernizr.requestautocomplete,
		"validation": Modernizr.formvalidation
	},
	"iframe": {
		"sandbox": Modernizr.sandbox,
		"seamless": Modernizr.seamless,
		"srcdoc": Modernizr.srcdoc
	},
	"img": {
		"apng": Modernizr.apng,
		"crossorigin": Modernizr.imgcrossorigin,
		"jpeg2000": Modernizr.jpeg2000,
		"jpegxr": Modernizr.jpegxr,
		"sizes": Modernizr.sizes,
		"srcset": Modernizr.srcset,
		"webp-alpha": Modernizr.webpalpha,
		"webp-animation": Modernizr.webpanimation,
		"webp-lossless": [
			Modernizr["webplossless"],
			Modernizr["webp-lossless"]
		],
		"webp": Modernizr.webp
	},
	"input": {
		"formaction": Modernizr.inputformaction,
		"formenctype": Modernizr.inputformenctype,
		"formmethod": Modernizr.inputformmethod,
		"formtarget": Modernizr.inputformtarget
	},
	"mediaquery": {
		"hovermq": Modernizr.hovermq,
		"pointermq": Modernizr.pointermq
	},
	"network": {
		"beacon": Modernizr.beacon,
		"connection": Modernizr.lowbandwidth,
		"eventsource": Modernizr.eventsource,
		"fetch": Modernizr.fetch,
		"xhr-responsetype-arraybuffer": Modernizr.xhrresponsetypearraybuffer,
		"xhr-responsetype-blob": Modernizr.xhrresponsetypeblob,
		"xhr-responsetype-document": Modernizr.xhrresponsetypedocument,
		"xhr-responsetype-json": Modernizr.xhrresponsetypejson,
		"xhr-responsetype-text": Modernizr.xhrresponsetypetext,
		"xhr-responsetype": Modernizr.xhrresponsetype,
		"xhr2": Modernizr.xhr2
	},
	"script": {
		"async": Modernizr.scriptasync,
		"defer": Modernizr.scriptdefer
	},
	"speech": {
		"speech-recognition": Modernizr.speechrecognition,
		"speech-synthesis": Modernizr.speechsynthesis
	},
	"storage": {
		"localstorage": Modernizr.localstorage,
		"sessionstorage": Modernizr.sessionstorage,
		"websqldatabase": Modernizr.websqldatabase
	},
	"style": {
		"scoped": Modernizr.stylescoped
	},
	"svg": {
		"asimg": Modernizr.svgasimg,
		"clippaths": Modernizr.svgclippaths,
		"filters": Modernizr.svgfilters,
		"foreignobject": Modernizr.svgforeignobject,
		"inline": Modernizr.inlinesvg,
		"smil": Modernizr.smil
	},
	"textarea": {
		"maxlength": Modernizr.textareamaxlength
	},
	"url": {
		"bloburls": Modernizr.bloburls,
		"data-uri": Modernizr.datauri,
		"parser": Modernizr.urlparser,
		"urlsearchparams": Modernizr.urlsearchparams
	},
	"video": {
		"autoplay": Modernizr.videoautoplay,
		"crossorigin": Modernizr.videocrossorigin,
		"loop": Modernizr.videoloop,
		"preload": Modernizr.videopreload
	},
	"webgl": {
		"extensions": Modernizr.webglextensions
	},
	"webrtc": {
		"datachannel": Modernizr.datachannel,
		"getusermedia": Modernizr.getusermedia,
		"peerconnection": Modernizr.peerconnection
	},
	"websockets": {
		"binary": Modernizr.websocketsbinary
	},
	"window": {
		"atob-btoa": [
			Modernizr["atobbtoa"]
		],
		"framed": Modernizr.framed,
		"matchmedia": Modernizr.matchmedia
	},
	"workers": {
		"blobworkers": Modernizr.blobworkers,
		"dataworkers": Modernizr.dataworkers,
		"sharedworkers": Modernizr.sharedworkers,
		"transferables": Modernizr.transferables,
		"webworkers": Modernizr.webworkers
	}
};