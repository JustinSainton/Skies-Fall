$.fn.textWidth = function(){
    var self = $(this),
        calculator = $('<span style="display: inline-block;" />'),
        width;

    self.wrap(calculator);
    width = self.parent().width(); // parent = the calculator wrapper
    self.unwrap();
    return width;
};

var navigation = responsiveNav("#nav");

var set_proper_home_margin = function() {
		if ( parseInt( $( 'body.home #panel-1 .panel-container' ).css( 'top' ), 10 ) < 247 ) {
			$( 'body.home #panel-1 .panel-container' ).css( 'top', 247 );
		}
		if ( parseInt( $( 'body.who #panel-1 .panel-container' ).css( 'top' ), 10 ) < 247 ) {
			$( 'body.who #panel-1 .panel-container' ).css( 'top', 247 );
		}
	};

(function($) {

	if ( ! Modernizr.touch ) {

		$( 'body.home #panel-1 .panel-container, body.who #panel-1 .panel-container' ).addClass( 'desktop-panel' );

		$.stellar({
			hideDistantElements : false,
			horizontalScrolling : false,
		});

	set_proper_home_margin();


	} else {

		$( '#panel-1' ).addClass( 'vertical scrollable' ).stellar({
			hideDistantElements : false,
			scrollProperty   : 'transform',
			positionProperty : 'transform',
		});
	}


	/** Panel Resizing **/
	var resize_panels = function() {

		var panels = {
			home   : [ 'panel-1' ],
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
			design : 'http://player.vimeo.com/external/74322918.hd.mp4?s=b3d120a046d230d1a8709f402d790361',
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
			zoom        : 4,
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

		if ( percentage > 131 ) {
			map.setZoom( 10 );
		} else if ( percentage > 130 )  {
			map.setZoom( 9 );
		} else if ( percentage > 124 )  {
			map.setZoom( 8 );
		} else if ( percentage > 118 )  {
			map.setZoom( 7 );
		} else if ( percentage > 112 )  {
			map.setZoom( 6 );
		} else if ( percentage > 106 )  {
			map.setZoom( 5 );
		} else if ( percentage > 100 )  {
			map.setZoom( 4 );
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
		var url = '/dev/contact.php',
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
		window.location = '/dev/video/';
	});

	$( '#photography' ).click(function(){
		window.location = '/dev/photo/';
	});

	$( '#audio' ).click(function(){
		window.location = '/dev/audio/';
	});

	$( '#design' ).click(function(){
		window.location = '/dev/design/';
	});

})(jQuery);

jQuery( document ).ready( function( $ ) {

	$( 'p.quote' ).width( $( 'p.quote' ).textWidth() );

	var align_h2 = function() {
		/** Home Page | Services Photos Centering **/
		var smallest_div_height = 500;

		$( 'div.grid-item' ).each(function(){

			var $this = $( 'img', $( this ) );

			if ( $this.height() > 1 && $this.height() < smallest_div_height )
				smallest_div_height = $this.height();
		});

		$( 'div.grid-item' ).each( function(){

			var $this = $( this ), $h2 = $( 'h2', $this );

			//Center h2 vertically within container
			$h2.css( 'left', ( $this.width() - $h2.width() ) / 2 );

			//Center h2 horizontally within container
			$h2.css( 'top', ( ( $this.height() / 2 ) - ( $h2.height() / 2 ) ) - 46 );

		});
	}

	$( window ).resize( align_h2 );

	align_h2();

	if ( jQuery.fn.magnificPopup ) {

		//Video page popup video
		$( '.popup-vimeo, #demo, #reel, #demo-reel-link, div.demo' ).magnificPopup({
			disableOn       : 700,
			type            : 'iframe',
			mainClass       : 'mfp-iframe-scaler',
			removalDelay    : 160,
			fixedContentPos : false
		});

		$( '#studio, #gallery, #studio-gallery-link, div.studio' ).magnificPopup({
			preloader : true,
			items: [
				{
					src   : '<img src="/dev/img/1-aroom-2.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/2-aroom-1.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/3-live-room-2.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/4-live-room-1.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/5-vocal.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/6-iso-booth-1.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/7-iso-booth-2.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/8-b-room-2.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/9-b-room-1.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/10-c-room-1.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
				{
					src: '<img src="/dev/img/11-c-room-iso.jpg" />',
					type  : 'inline',
					title : 'Audio Room'
				},
			],
			gallery: {
				enabled: true,
				preload: [1,3],
				navigateByImgClick: true,
				arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
				tPrev: 'Previous (Left arrow key)', // title for left button
				tNext: 'Next (Right arrow key)', // title for right button
				tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
						},
						type : 'image'
					});

	}

	$( '#panel' ).css( 'padding-left', ( ( window.innerWidth - $( '#panel' ).width() ) / 2 ) );
	$( '#panel' ).css( 'padding-right', ( ( window.innerWidth - $( '#panel' ).width() ) / 2 ) );

	$("#web").click( function() {
		$('html, body').animate({
			scrollTop: $("div.web").offset().top
		}, 750 );
	});
	$("#print").click( function() {
		$('html, body').animate({
			scrollTop: $("div.print").offset().top
		}, 750 );
	});
	$("#music").click( function() {
		$('html, body').animate({
			scrollTop: $("div.music").offset().top
		}, 750 );
	});
	$("#apparel").click( function() {
		$('html, body').animate({
			scrollTop: $("div.apparel").offset().top
		}, 750 );
	});

	var size_design_scrollers = function() {

		//Web
		$( 'div.web' ).css( 'min-height', Math.round( window.innerWidth * .4681 ) );
		$( 'div.web div.scroll-space' ).css( 'width', Math.round( window.innerWidth * .4010416666666667 ) );
		$( 'div.web div.scroll-space' ).css( 'height', Math.round( window.innerWidth * 0.23125 ) );

		//Apparel
		$( 'div.apparel' ).css( 'min-height', Math.round( window.innerWidth * .5778 ) );
		$( 'div.apparel div.scroll-space' ).eq(0).css( 'width', Math.round( window.innerWidth * .15625 ) );
		$( 'div.apparel div.scroll-space' ).eq(0).css( 'height', Math.round( window.innerWidth * .23177083333333334 ) );
		$( 'div.apparel div.scroll-space' ).eq(0).css( 'top', Math.round( window.innerWidth * .15416666666666667 ) );
		$( 'div.apparel p.scroll' ).css( 'line-height', Math.round( window.innerWidth * .10416666666666667 ) + 'px' );

		$( 'div.apparel div.scroll-space' ).eq(1).css( 'width', Math.round( window.innerWidth * 0.1046875 ) );
		$( 'div.apparel div.scroll-space' ).eq(1).css( 'height', Math.round( window.innerWidth * 0.140625 ) );
		$( 'div.apparel div.scroll-space' ).eq(1).css( 'top', Math.round( window.innerWidth * 0.025 ) );

		//Print
		$( 'div.print' ).css( 'min-height', Math.round( window.innerWidth * .5375 ) );
		$( 'div.print div.scroll-space' ).css( 'width', Math.round( window.innerWidth * 0.21614583333333334 ) );
		$( 'div.print div.scroll-space' ).css( 'height', Math.round( window.innerWidth * 0.43854166666666666 ) );
		$( 'div.print div.scroll-space' ).css( 'top', Math.round( window.innerWidth * 0.057291666666666664 ) );
		$( 'div.print div.scroll-space' ).css( 'left', Math.round( window.innerWidth * 0.5671875 ) );

		jQuery( window ).load(function(){
			var screenImage = $( 'div.print img' ).eq(0), theImage = new Image();

			theImage.src = screenImage.attr( 'src' );

			$( 'div.print img' ).css( 'width', Math.ceil( theImage.width * ( window.innerWidth / 1900 ) ) );
		});

		$( 'div.print img' ).css( 'margin-left', '-' + Math.round( window.innerWidth * 0.003125 ) + 'px' );

		//Music
		$( 'div.music' ).css( 'min-height', Math.round( window.innerWidth * .6848 ) );
		$( 'div.music div.scroll-space' ).css( 'width', Math.round( window.innerWidth * 0.18229166666666666 ) );
		$( 'div.music div.scroll-space' ).css( 'height', Math.round( window.innerWidth * 0.17708333333333334 ) );
		$( 'div.music div.scroll-space' ).css( 'top', Math.round( window.innerWidth * 0.13802083333333334 ) );
		$( 'div.music div.scroll-space' ).css( 'left', Math.round( window.innerWidth * 0.40989583333333335 ) );
	}

	if ( $( 'body' ).hasClass( 'design' ) ) {
		size_design_scrollers();
		$( window ).resize( size_design_scrollers );
	}

	var place_audio_paragraphs = function() {

		$( 'body.audio #panel-3 div.grid-item p' ).css( 'top', Math.round( $( 'body.audio #panel-3 div.grid-item p' ).parent().height() * 0.6655290102389079 ) );
		$( 'body.audio #panel-3 div.grid-item p' ).css( 'margin-left', Math.round( $( 'body.audio #panel-3 div.grid-item p' ).parent().height() * 0.041666666666666664 ) + '%' );
		$( 'body.audio #panel-3 div.grid-item:odd p' ).css( 'margin-left', Math.round( $( 'body.audio #panel-3 div.grid-item p' ).parent().height() * 0.010416666666666666 ) + '%' );
		$( 'body.audio #panel-3 div.grid-item:odd p' ).css( 'margin-right', Math.round( $( 'body.audio #panel-3 div.grid-item p' ).parent().height() * 0.020833333333333332 ) + '%' );

		$( 'body.audio #panel-4' ).css( 'min-height', Math.round( window.innerWidth * 0.47368421052631576 ) );
		$( 'div.studio-top' ).css( 'margin-top', ( ( $( 'div#panel-4' ).height() - ( $( 'div.studio' ).height() + $( 'div.studio-top' ).height() + $( 'div.studio-bottom' ).height() ) ) / 2 ) + 'px' );

	}

	place_audio_paragraphs();

	$( window ).resize( place_audio_paragraphs );

	//Ensure girls and guys scroll at same time
	if ( $( 'div.apparel div.scroll-space' ).length ) {
		var scroll_difference = $( 'div.apparel div.scroll-space' ).get(1).scrollHeight / $( 'div.apparel div.scroll-space' ).get(0).scrollHeight;

		$( 'div.apparel div.scroll-space' ).eq(0).on( 'scroll', function () {
			$( 'div.apparel div.scroll-space' ).eq(1).scrollTop( $( this ).scrollTop() * scroll_difference );
		});
	}

});

var canvas_demo = function() {

	// Get a handle to our canvas
	var demo = document.getElementById('demo'), reel = document.getElementById('reel');

	if ( null == demo )
		return;

	demo.width   = 715;
	reel.width   = 715;
	demo.height  = 160;
	reel.height  = 208;

	ctx   = demo.getContext("2d");
	ctx_r = reel.getContext("2d");

	// Choose font
	ctx.font   = '215px "Didot W02 Roman"';
	ctx_r.font = '265px "Didot W02 Italic"';

	// Draw black rectangle
	ctx.fillStyle = 'rgba(0,0,0,.9)';
	ctx.fillRect( 0, 0, 720, 300 );

	// Draw black rectangle
	ctx_r.fillStyle = 'rgba(0,0,0,.9)';
	ctx_r.fillRect( 0, 0, 720, 348 );

	// Punch out the text!
	ctx.globalCompositeOperation   = 'destination-out';
	ctx_r.globalCompositeOperation = 'destination-out';

	ctx.fillText("DEMO", 3, 155);
	ctx_r.fillText("REEL", 3, 204);

	var link = document.getElementById("demo-reel-link").getContext("2d");
	var img  = document.getElementById("arrow");

	link.globalAlpha = 0.9;
	link.drawImage(img,0,0, 128, 368);

	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
	demo_offset  = ( ( window.innerWidth - $( 'div.demo' ).width() )  / 2 );
	demo_offset  = isSafari ? demo_offset + .5 : demo_offset;

	$( 'div.demo-left' ).css( 'width', demo_offset );
	$( 'div.demo-right' ).css( 'width', ( ( window.innerWidth - $( 'div.demo' ).width() )  / 2 ) );

	$( '#panel' ).css( 'padding-left', ( ( window.innerWidth - $( '#panel' ).width() ) / 2 ) );
	$( '#panel' ).css( 'padding-right', ( ( window.innerWidth - $( '#panel' ).width() ) / 2 ) );

}

var canvas_gallery = function() {

	// Get a handle to our canvas
	var studio = document.getElementById('studio'), gallery = document.getElementById('gallery');

	if ( null == studio )
		return;

	studio.width   = 890;
	gallery.width  = 890;
	studio.height  = 180;
	gallery.height = 188;

	ctx   = studio.getContext("2d");
	ctx_r = gallery.getContext("2d");

	// Choose font
	ctx.font   = '220px "Didot W02 Italic"';
	ctx_r.font = '176px "Didot W02 Roman"';

	// Draw black rectangle
	ctx.fillStyle = 'rgba(0,0,0,.9)';
	ctx.fillRect( 0, 0, 890, 320 );

	// Draw black rectangle
	ctx_r.fillStyle = 'rgba(0,0,0,.9)';
	ctx_r.fillRect( 0, 0, 890, 298 );

	// Punch out the text!
	ctx.globalCompositeOperation   = 'destination-out';
	ctx_r.globalCompositeOperation = 'destination-out';

	ctx.fillText("STUDIO", 19, 170);
	ctx_r.fillText("GALLERY", 3, 165);

	var link = document.getElementById("studio-gallery-link").getContext("2d");
	var img  = document.getElementById("arrow");

	link.globalAlpha = 0.9;
	link.drawImage(img,0,0, 128, 368);

	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
	studio_offset  = ( ( window.innerWidth - $( 'div.studio' ).width() )  / 2 );
	studio_offset  = isSafari ? studio_offset + .5 : studio_offset;

	$( 'div.studio-left' ).css( 'width', studio_offset );
	$( 'div.studio-right' ).css( 'width', ( ( window.innerWidth - $( 'div.studio' ).width() )  / 2 ) );
}

var gear_list = function() {

	// Get a handle to our canvas
	var gear = document.getElementById('gear'), list = document.getElementById('list');

	if ( null == studio )
		return;

	gear.width   = 890;
	list.width  = 890;
	gear.height  = 180;
	list.height = 188;

	ctx   = gear.getContext("2d");
	ctx_r = list.getContext("2d");

	// Choose font
	ctx.font   = '220px "Didot W02 Italic"';
	ctx_r.font = '250px "Didot W02 Italic"';

	// Draw black rectangle
	ctx.fillStyle = 'rgba(0,0,0,.9)';
	ctx.fillRect( 0, 0, 890, 320 );

	// Draw black rectangle
	ctx_r.fillStyle = 'rgba(0,0,0,.9)';
	ctx_r.fillRect( 0, 0, 890, 298 );

	// Punch out the text!
	ctx.globalCompositeOperation   = 'destination-out';
	ctx_r.globalCompositeOperation = 'destination-out';

	ctx.fillText("gear", 19, 170);
	ctx_r.fillText("LIST", 3, 165);

	var link = document.getElementById("gear-list-link").getContext("2d");
	var img  = document.getElementById("arrow");

	link.globalAlpha = 0.9;
	link.drawImage(img,0,0, 128, 368);

	var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
	gear_offset  = ( ( window.innerWidth - $( 'div.gear' ).width() )  / 2 );
	gear_offset  = isSafari ? gear_offset + .5 : gear_offset;

	$( 'div.gear-left' ).css( 'width', gear_offset );
	$( 'div.gear-right' ).css( 'width', ( ( window.innerWidth - $( 'div.gear' ).width() )  / 2 ) );
}

jQuery( window ).load( canvas_gallery );
jQuery( window ).load( canvas_demo );
jQuery( window ).load( gear_list );
jQuery( window ).resize( canvas_gallery );
jQuery( window ).resize( canvas_demo );
jQuery( window ).resize( gear_list );