/* frameworks */
//=include ../../dist/bower_components/jquery/dist/jquery.js
//=include ../../dist/bower_components/moff/dist/moff.min.js

/* libs */
//=include lib/modernizr-custom.js

/* plugins */

//=include ../../dist/bower_components/bootstrap/js/dist/util.js
//=include ../../dist/bower_components/popper.js/dist/umd/popper.min.js
//=include ../../dist/bower_components/bootstrap/js/dist/modal.js
//=include ../../dist/bower_components/bootstrap/js/dist/dropdown.js
//=include ../../dist/bower_components/bootstrap/js/dist/collapse.js
//=include ../../dist/bower_components/bootstrap-select/dist/js/bootstrap-select.js
//=include ../../dist/bower_components/bootstrap/js/dist/tooltip.js
//=include ../../dist/bower_components/jquery-validation/dist/jquery.validate.min.js

/* separate */
//=include helpers/object-fit.js
//=include helpers/toggle-blocks.js
//=include separate/global.js
//=include helpers/valid.js

/* components */
// components/js-header.js

// the main code

window.moffConfig = {
	// Website CSS breakpoints.
	// Default values from Twitter Bootstrap.
	// No need to set xs, because of Mobile first approach.
	breakpoints: {
		xs: 480,
		sm: 768,
		md: 992,
		lg: 1200
	},
	loadOnHover: true,
	cacheLiveTime: 2000
};

Moff.amd.register({
	id: 'header',
	// depend: {
	// 	js: ['http://chat-domain.com/js/chat-api.js'],
	// 	css: ['http://chat-domain.com/css/chat.css']
	// },
	file: {
		js: [
				's/js/components/js-header.js',
				's/js/components/js-simple-timer.js',
				's/js/components/js-timer.js'
			]
	},

	beforeInclude: function() {},
    afterInclude: function() {},
    
	loadOnScreen: ['xs', 'sm', 'md', 'lg'],
	onWindowLoad: true
});

if($(".js-modal").length){
    Moff.amd.register({
        id: 'modal',
        depend: {
            js: ['s/js/plugins/bs/modal.js']
        },
        file: {
            js: ['s/js/helpers/bs_modal_fix.js']
        },

        beforeInclude: function() {},
        afterInclude: function() {},

        loadOnScreen: ['xs', 'sm', 'md', 'lg'],
        onWindowLoad: true
    });
}

$('.component-title').on('click', function() {
	$(this).toggleClass('active');
	$(this).siblings('.component-inner').slideToggle(300);
});