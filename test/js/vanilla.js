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
		"clipboard": Modernizr.clipboard,
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
		"inputsearchevent": Modernizr.inputsearchevent,
		"inputtypes": Modernizr.inputtypes,
		"intl": Modernizr.intl,
		"json": Modernizr.json,
		"ligatures": Modernizr.ligatures,
		"lists-reversed": Modernizr.olreversed,
		"mathml": Modernizr.mathml,
		"media-source-extension-api": Modernizr.mediasource,
		"messagechannel": Modernizr.messagechannel,
		"notification": Modernizr.notification,
		"pagevisibility-api": Modernizr.pagevisibility,
		"performance": Modernizr.performance,
		"pointerevents": Modernizr.pointerevents,
		"pointerlock-api": Modernizr.pointerlock,
		"postmessage": Modernizr.postmessage,
		"proximity": Modernizr.proximity,
		"proxy": Modernizr.proxy,
		"queryselector": Modernizr.queryselector,
		"quota-management-api": Modernizr.quotamanagement,
		"requestanimationframe": Modernizr.requestanimationframe,
		"scrolltooptions": Modernizr.scrolltooptions,
		"serviceworker": Modernizr.serviceworker,
		"svg": Modernizr.svg,
		"templatestrings": Modernizr.templatestrings,
		"textencoding": [
			Modernizr["textencoder"],
			Modernizr["textdecoder"]
		],
		"touchevents": Modernizr.touchevents,
		"typed-arrays": Modernizr.typedarrays,
		"unicode-range": Modernizr.unicoderange,
		"unicode": Modernizr.unicode,
		"userdata": Modernizr.userdata,
		"vibration": Modernizr.vibrate,
		"video": Modernizr.video,
		"vml": Modernizr.vml,
		"web-intents": Modernizr.webintents,
		"webanimations": Modernizr.webanimations,
		"webgl": Modernizr.webgl,
		"websockets": Modernizr.websockets,
		"xdomainrequest": Modernizr.xdomainrequest
	},
	"a": {
		"aping": Modernizr.aping,
		"areaping": Modernizr.areaping,
		"download": Modernizr.adownload
	},
	"audio": {
		"autoplay": Modernizr.audioautoplay,
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
		"winding": Modernizr.canvaswinding
	},
	"crypto": {
		"getrandomvalues": Modernizr.getrandomvalues
	},
	"css": {
		"all": Modernizr.cssall,
		"animations": Modernizr.cssanimations,
		"appearance": Modernizr.appearance,
		"aspectratio": Modernizr.aspectratio,
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
		"boxdecorationbreak": Modernizr.boxdecorationbreak,
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
		"customproperties": Modernizr.customproperties,
		"displayrunin": Modernizr["display-runin"],
		"displaytable": Modernizr.displaytable,
		"ellipsis": Modernizr.ellipsis,
		"escape": Modernizr.cssescape,
		"exunit": Modernizr.cssexunit,
		"filters": Modernizr.cssfilters,
		"flexbox": Modernizr.flexbox,
		"flexboxlegacy": Modernizr.flexboxlegacy,
		"flexboxtweener": Modernizr.flexboxtweener,
		"flexgap": Modernizr.flexgap,
		"flexwrap": Modernizr.flexwrap,
		"focusvisible": Modernizr.focusvisible,
		"focuswithin": Modernizr.focuswithin,
		"fontdisplay": Modernizr.fontdisplay,
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
		"textdecoration": Modernizr.textdecoration,
		"textshadow": Modernizr.textshadow,
		"transforms": Modernizr.csstransforms,
		"transforms3d": Modernizr.csstransforms3d,
		"transformslevel2": Modernizr.csstransformslevel2,
		"transformstylepreserve3d": Modernizr.preserve3d,
		"transitions": Modernizr.csstransitions,
		"userselect": Modernizr.userselect,
		"valid": Modernizr.cssvalid,
		"variablefonts": Modernizr.variablefonts,
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
		"intersection-observer": Modernizr.intersectionobserver,
		"microdata": Modernizr.microdata,
		"mutationObserver": Modernizr.mutationobserver,
		"passiveeventlisteners": Modernizr.passiveeventlisteners,
		"shadowroot": Modernizr.shadowroot,
		"shadowrootlegacy": Modernizr.shadowrootlegacy
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
		"class": Modernizr.es6class,
		"collections": Modernizr.es6collections,
		"contains": Modernizr.contains,
		"generators": Modernizr.generators,
		"math": Modernizr.es6math,
		"number": Modernizr.es6number,
		"object": Modernizr.es6object,
		"promises": Modernizr.promises,
		"rest-parameters": Modernizr.restparameters,
		"spread-array": Modernizr.spreadarray,
		"string-template": Modernizr.stringtemplate,
		"string": Modernizr.es6string,
		"symbol": Modernizr.es6symbol
	},
	"es7": {
		"array": Modernizr.es7array,
		"rest-destructuring": [
			Modernizr["restdestructuringarray"],
			Modernizr["restdestructuringobject"]
		],
		"spread-object": Modernizr.spreadobject
	},
	"es8": {
		"object": Modernizr.es8object
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
		"avif": Modernizr.avif,
		"crossorigin": Modernizr.imgcrossorigin,
		"jpeg2000": Modernizr.jpeg2000,
		"jpegxr": Modernizr.jpegxr,
		"lazyloading": Modernizr.lazyloading,
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
		"formnovalidate": Modernizr.inputformnovalidate,
		"formtarget": Modernizr.inputformtarget
	},
	"link": {
		"prefetch": Modernizr.prefetch
	},
	"mediaquery": {
		"hovermq": Modernizr.hovermq,
		"pointermq": Modernizr.pointermq
	},
	"network": {
		"beacon": Modernizr.beacon,
		"connection-effectivetype": Modernizr.connectioneffectivetype,
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
		"indexeddb2": Modernizr.indexeddb2,
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
	"webauthn": {
		"publickeycredential": Modernizr.publickeycredential
	},
	"webgl": {
		"extensions": Modernizr.webglextensions
	},
	"webrtc": {
		"datachannel": Modernizr.datachannel,
		"getusermedia": Modernizr.getusermedia,
		"mediastream": Modernizr.mediarecorder,
		"peerconnection": Modernizr.peerconnection
	},
	"websockets": {
		"binary": Modernizr.websocketsbinary
	},
	"window": {
		"atob-btoa": Modernizr.atobbtoa,
		"framed": Modernizr.framed,
		"matchmedia": Modernizr.matchmedia,
		"pushmanager": Modernizr.pushmanager,
		"resizeobserver": Modernizr.resizeobserver
	},
	"workers": {
		"blobworkers": Modernizr.blobworkers,
		"dataworkers": Modernizr.dataworkers,
		"sharedworkers": Modernizr.sharedworkers,
		"transferables": Modernizr.transferables,
		"webworkers": Modernizr.webworkers,
		"workertypeoption": Modernizr.workertypeoption
	}
};