//= include ../../../bower_components/jquery/dist/jquery.js
//= include ../../../bower_components/jquery.fitvids/jquery.fitvids.js
jQuery ( function($) {

	var site = new SiteController($);
	site.init();

});

function SiteController($)
{
	self.init = function()  //functions are being called when loads, like document.ready
	{
		initMobileNav();
	}

	//MOBILE NAV
	function initMobileNav() {
		//Click on trigger, open mobile nav
		$('.js-mobile-trigger').click(function(e) {
			e.preventDefault();//prevents mobile trigger link from going to another page
			$('.js-mobile-nav').addClass('open');
		});

		//Click on close button, close mobile nav
		$('.js-mobile-nav-close').click(function(e) {
			e.preventDefault();//prevents mobile trigger link from going to another page
			$('.js-mobile-nav').removeClass('open');
		});
	}

	return self;
}
