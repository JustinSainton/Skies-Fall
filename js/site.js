function initialize() {
	var mapOptions = {
		zoom: 8,
		center: new google.maps.LatLng(-34.397, 150.644),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map(document.getElementById( 'map-canvas' ),
	mapOptions);
}

function loadScript() {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
	'callback=initialize';
	document.body.appendChild(script);
}

window.onload = loadScript;

(function($) {
	var BV;
	$(function() {
		// initialize BigVideo
		BV = new $.BigVideo();
		BV.init();
		if (  Modernizr.touch ) {
			BV.show('img/mobile-placeholder.jpg');
		} else {
			BV.show('http://skiesfall.com/video/bg.mp4', { ambient : true } );
		}

	});

})(jQuery);