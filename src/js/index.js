$(document).ready(() => {

	// Don't touch
	svg4everybody();
	// End don't touch
	require('./main.js');
});

// remove preloader
$(window).on('load', () => {
	$('html').addClass('page-loaded');
});


