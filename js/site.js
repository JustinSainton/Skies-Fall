(function($) {

	/** Panel Resizing **/
	resize_panels = function() {
		var bodyheight = $( window ).height();

		$( 'div.panel' ).height( bodyheight );
	}

	resize_panels();

	$ ( window ).resize( resize_panels );

	/** Video Background **/
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

	/** Google Maps **/
	var map;

	function initialize() {
		google.maps.visualRefresh = true;

		var hq    = new google.maps.LatLng( 42.680964,-87.812026 ),
		recording = new google.maps.LatLng( 42.580899,-87.848738 ),
		tv        = new google.maps.LatLng( 42.723704,-87.789871 ),
		mapOptions = {
			zoom        : 12,
			center      : hq,
			mapTypeId   : google.maps.MapTypeId.ROADMAP,
			scrollwheel : false
		},
		image = 'http://skiesfall.com/dev/img/map-marker.png',
		hqMarker = new google.maps.Marker({
			position : hq,
			map      : map,
			icon     : image
		}),
		recMarker = new google.maps.Marker({
			position : recording,
			map      : map,
			icon     : image
		}),
		tvMarker = new google.maps.Marker({
			position : tv,
			map      : map,
			icon     : image
		}),

		map = new google.maps.Map( document.getElementById( 'panel-5' ), mapOptions );
	}

	google.maps.event.addDomListener( window, 'load', initialize );

})(jQuery);