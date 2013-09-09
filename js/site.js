(function($) {

	if ( ! Modernizr.touch ) {
		$( '#panel-1' ).stellar({
			hideDistantElements : false
		});
	} else {

		$( '#panel-1' ).addClass( 'vertical scrollable' ).stellar({
			hideDistantElements : false,
			scrollProperty   : 'transform',
			positionProperty : 'transform',
		});
	}


	/** Panel Resizing **/
	resize_panels = function() {

		var panels = {
			home   : [ 'panel-1', 'panel-3' ],
			who    : [ 'panel-1' ]
		},
		page = $( 'body' ).attr( 'class' ),
		bodyheight = $( window ).height();
		bodyheight = bodyheight - 325;

		$( 'div.panel' ).each(function() {
			var $this = $( this ),
			id = $this.attr( 'id' );

			if ( ! $.inArray( id, panels[ page ] ) ) {
				$this.addClass( 'modified' );
				$this.height( bodyheight );
			}
		});
	}

	resize_panels();

	$( window ).resize( resize_panels );

	/** BIO **/

	var largest_offset;

	$( 'div.bio' ).each( function(i,v){
		largest_offset = i * 100;
		$( this ).css( 'bottom', largest_offset );
	});

	$( 'div.bio' ).eq( -1 ).css( 'margin-bottom', '-' + largest_offset + 'px' );

	/** Video Background **/

	var BV;

	$(function() {

		var videos = {
			home   : 'http://player.vimeo.com/external/73702612.hd.mp4?s=1ea318ce4c81df7e0d6d99c93638434e',
			who    : 'http://player.vimeo.com/external/73702613.hd.mp4?s=dca69bc69ed721b723375792a2729008',
			video  : 'http://player.vimeo.com/external/73701651.hd.mp4?s=897fc226d7b0f3d111d424d9cf617d6a',
			audio  : 'http://player.vimeo.com/external/73703469.hd.mp4?s=75f3772c5f79f6ad407f6f425e587e47',
			photo  : 'http://player.vimeo.com/external/73701370.hd.mp4?s=ed7747b111296ad40d1d8d985d4d99db',
			design : 'http://player.vimeo.com/external/73702612.hd.mp4?s=1ea318ce4c81df7e0d6d99c93638434e',
		},

		page = $( 'body' ).attr( 'class' );

		// initialize BigVideo
		BV = new $.BigVideo();
		BV.init();

		if (  Modernizr.touch ) {
			BV.show('img/mobile-placeholder.jpg');
		} else {
			BV.show( videos[ page ], { ambient : true, loop : true, doLoop : true } );
		}

	});

	/** Google Maps **/
	var map;

	function initialize() {

		if ( 'undefined' !== typeof map )
			return map;

		google.maps.visualRefresh = true;

		var hq    = new google.maps.LatLng( 42.680964,-87.812026 ),
		recording = new google.maps.LatLng( 42.580899,-87.848738 ),
		tv        = new google.maps.LatLng( 42.723704,-87.789871 ),
		mapOptions = {
			zoom        : 5,
			center      : hq,
			mapTypeId   : google.maps.MapTypeId.ROADMAP,
			scrollwheel : false
		};

		var map = new google.maps.Map( document.getElementById( 'map' ), mapOptions );

		if ( window.devicePixelRatio > 1 ) {
			var image = 'http://skiesfall.com/dev/img/map-marker@2x.png';
		} else {
			var image = 'http://skiesfall.com/dev/img/map-marker.png';
		}

		var markerImage = {
			url        : image,
			scaledSize : new google.maps.Size(44, 58),
			origin     : new google.maps.Point(0,0),
			anchor     : new google.maps.Point(29, 58)
		},

		hqMarker = new google.maps.Marker({
			position  : hq,
			map       : map,
			icon      : image,
			title     : 'Skies Fall Headquarters',
			animation : google.maps.Animation.DROP,
			icon      : markerImage,
			optimized : false
		}),

		recMarker = new google.maps.Marker({
			position  : recording,
			map       : map,
			icon      : image,
			title     : 'Skies Fall Recording Studio',
			animation : google.maps.Animation.DROP,
			icon      : markerImage,
			optimized : false
		}),

		tvMarker = new google.maps.Marker({
			position  : tv,
			map       : map,
			icon      : image,
			title     : 'Skies Fall TV',
			animation : google.maps.Animation.DROP,
			icon      : markerImage,
			optimized : false
		});

		return map;
	}

	google.maps.event.addDomListener( window, 'load'  , initialize );
	google.maps.event.addDomListener( window, 'scroll', scroll );

	function scroll() {
		var windowEl   = $( window ),
		mapEl          = $( '#map' ),
		scrollTop      = windowEl.scrollTop(),
		windowHeight   = windowEl.height(),
		mapHeight      = mapEl.height(),
		mapOffset      = mapEl.offset().top,
		distance       = ( mapOffset - scrollTop ),
		fullyVisible   = ( windowHeight - mapHeight );

		if ( 'undefined' === typeof map || ( 'undefined' !== typeof map && 'undefined' == typeof( map.setZoom ) ) ) {
			map = initialize();
		}

		var percentage = ( ( ( windowHeight - distance ) / mapHeight ) * 100 );

		if ( percentage > 140 ) {
			map.setZoom( 10 );
		} else if ( percentage > 135 )  {
			map.setZoom( 9 );
		} else if ( percentage > 130 )  {
			map.setZoom( 8 );
		} else if ( percentage > 120 )  {
			map.setZoom( 7 );
		} else if ( percentage > 110 )  {
			map.setZoom( 6 );
		} else if ( percentage > 100 )  {
			map.setZoom( 5 );
		}
	}

	/** General hijackery **/
	$( 'ul#portfolio li a' ).click( function(e){
		e.preventDefault();
	});

	//Sets the Down Arrow to be under the first location text, period.
	$( 'span.down-arrow' ).css( 'left', $( 'div.address' ).eq(0).offset().left + 35 );

	//Contact Form
	$( '#contact-bubble' ).click( function(){
		$( '#contact-form' ).slideToggle( 250 );
	});

	$( '#contact-form' ).submit( function(e){
		e.preventDefault();
		$( 'div.ajax-loader' ).fadeIn( 350 );
		var url = 'contact.php',
		data = {
			name    : $( 'label#name input' ).val(),
			email   : $( 'label#email input' ).val(),
			message : $( 'label#message textarea' ).val(),
			gotye   : $( 'input#gotye' ).val(),
		},
		success = function( response ) {
			if ( response.errormsg ) {
				$( 'div.hidden-message' ).remove();
				$( '#contact' ).before( '<div class="hidden-message" />' );
				$( 'div.hidden-message' ).html( '<p>' + response.errormsg + '</p>' );
				$( 'div.ajax-loader' ).fadeOut( 350 );
				$( 'div.hidden-message' ).slideDown( 400 ).delay( 3000 ).slideUp( 400 );
			} else {
				$( 'div.hidden-message' ).remove();
				$( '#contact' ).before( '<div class="hidden-message" />' );
				$( 'div.hidden-message' ).html( '<p>' + response.success + '</p>' );
				$( 'div.ajax-loader' ).fadeOut( 350 );
				$( 'div.hidden-message' ).slideDown( 300 ).delay( 3000 ).slideUp( 300 );
			}
		};
		$.post( url, data, success, 'json' );

	});

	$( '#video' ).click(function(){
		window.location = 'video.html';
	});

	$( '#photography' ).click(function(){
		window.location = 'photo.html';
	});

	$( '#audio' ).click(function(){
		window.location = 'audio.html';
	});

	$( '#design' ).click(function(){
		window.location = 'design.html';
	});

})(jQuery);

jQuery( document ).ready( function( $ ) {
/** Home Page | Services Photos Centering **/

	var smallest_div_height = 500;

	$( 'body.home div#panel-3 div > div' ).not( '.img' ).each(function(){

		var $this = $( 'img', $( this ) );

		if ( $this.height() > 1 && $this.height() < smallest_div_height )
			smallest_div_height = $this.height();
	});

	$( 'body.home div#panel-3 div > div' ).not( '.img' ).css( 'height', smallest_div_height );


	$( 'body.home div#panel-3 div > div' ).not( '.img' ).each(function(){

		var $this = $( this ), $h2 = $( 'h2', $this );

		//Center h2 vertically within container
		$h2.css( 'left', ( $this.width() - $h2.width() ) / 2 );

		//Center h2 horizontally within container
		$h2.css( 'top', ( ( $this.height() / 2 ) - ( $h2.height() / 2 ) ) - 5 );

	});
});