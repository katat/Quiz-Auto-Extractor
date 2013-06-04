// Require.js allows us to configure shortcut alias
require.config({
	// The shim config allows us to configure dependencies for
	// scripts that do not call define() to register a module
	// baseUrl: 'lib/opensource',
	baseUrl: '/',
	waitSeconds: 200,
	shim : {
		underscore : {
			exports : '_'
		},
		jquery : {
			exports : '$'
		},
		backbone : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
        'mockjax' : ['jquery']
	},
	paths : {
		jquery : '/lib/opensource/jquery/jquery',
		underscore : '/lib/opensource/underscore/underscore',
		backbone : '/lib/opensource/backbone/backbone',
		text : '/lib/opensource/text/text'
	}
});

