<!DOCTYPE html>
<html>
	<head>
		<title>Video | Skies Fall</title>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- TypeKit -->
		<script type="text/javascript" src="//use.typekit.net/yzy8slw.js"></script>
		<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

		<!-- BigVideo Dependencies -->
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
		<script>window.jQuery || document.write('<script src="js/jquery.min.js"><\/script>')</script>
		<script src="/js/jquery-ui-1.8.22.custom.min.js"></script>
		<script src="/js/jquery.imagesloaded.min.js"></script>
		<script src="http://vjs.zencdn.net/4.0/video.js"></script>
		<script src="/js/modernizr-2.5.3.min.js"></script>

		<!-- BigVideo -->
		<script src="/js/bigvideo.js"></script>

		<!-- Parallax API -->
		<script src="/js/skrollr.js"></script>

		<!-- Popup (Video and Image Gallery) styles and scripts -->
		<link rel="stylesheet" href="/css/popup.css">
		<script src="/js/popup.js"></script>

		<!-- Stylesheets -->
		<link href="/css/style.css" rel="stylesheet" type="text/css">
		<link href="/css/responsive.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="/genericons/genericons.css">

		<!-- GoogleMaps API -->
		<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&amp;sensor=false"></script>

		<!-- Responsive Navigation -->
		<link rel="stylesheet" href="/css/responsive-nav.css">
		<script src="/js/responsive-nav.js"></script>

	</head>
	<body id="skrollr-body" class="video">

		<!-- Panel #1 will always include the navigation !-->
		<div id="panel-1" class="panel">
			<div class="panel-container full-width">
				<nav id="nav" class="header">
					<ul>
						<li class="logo">
							<h1><a href="/dev"><img id="logo" src="/img/logo.png" alt="Skies Fall Media" /></a></h1>
						</li>
						<li>
							<a href="/who-we-are/">Who We Are</a>
						</li>
						<li>
							<a class="selected" href="/video">Video</a>
						</li>
						<li>
							<a href="/audio/">Audio</a>
						</li>
						<li>
							<a href="/photo/">Photo</a>
						</li>
						<li>
							<a href="/design/">Design</a>
						</li>
					</ul>
				</nav>
				<p class="quote">&#8220;Cinema has become the modern cathedral and is the grand concert of all the arts&#8221;<br />&#8212; Robert Mckee</p>
				<img class="play-button popup-vimeo" src="/img/play.png" alt="Play Video" data-mfp-src="http://player.vimeo.com/video/72420766" />
			</div>
		</div>

		<div class="demo-top"></div>
			<div class="demo-left"></div>
			<div class="demo" data-mfp-src="http://player.vimeo.com/video/73880521">
				<canvas id="demo" width="647" height="150" data-mfp-src="http://player.vimeo.com/video/73880521"></canvas>
				<canvas id="reel" width="665" height="180" data-mfp-src="http://player.vimeo.com/video/73880521"></canvas>
				<canvas id="demo-reel-link" width="128" height="380" data-mfp-src="http://player.vimeo.com/video/73880521"></canvas>
				<img src="/img/demo-reel-caret.png" id="arrow" />
			</div>
			<div class="demo-right"></div>
		<div class="demo-bottom"></div>

		<img id="panel" src="/img/quotes.png" alt="Our clients love us" />

		<div id="panel-4" class="panel location">
			<div class="panel-container">
				<h3>Locations</h3>
				<div class="address">
					<a class="add" target="blank" href="http://maps.apple.com/?daddr=2745+Chicory+Road+Racine%2C+WI+53403">
					Headquarters &amp; Creative Studios<br />
					2745 Chicory Road<br />
					Racine, WI 53403</a><br /><br />
					<span class="telephone" itemprop="telephone"><a href="tel:+12624564027">262-456-4027</a></span><br />
					<span><a href="mailto:&#105;&#110;&#102;&#111;&#064;&#115;&#107;&#105;&#101;&#115;&#102;&#097;&#108;&#108;&#046;&#099;&#111;&#109;">info@skiesfall.com</a></span>
				</div>
				<div class="address">
					<a class="add" target="blank" href="http://maps.apple.com/?daddr=3215+60th+St.+Kenosha%2C+WI+53142">
					Skies Fall Recording Studios<br />
					3215 60th St.<br />
					Kenosha, WI 53142</a>
					<br /><br />
					<span class="telephone" itemprop="telephone"><a href="tel:+12624555814">262-455-5814</a></span><br />
					<span><a href="mailto:&#105;&#110;&#102;&#111;&#064;&#115;&#107;&#105;&#101;&#115;&#102;&#097;&#108;&#108;&#046;&#099;&#111;&#109;">info@skiesfall.com</a></span>
				</div>
				<div class="address">
					<a class="add" target="blank" href="http://maps.apple.com/?daddr=800+Center+St.+Racine%2C+WI+53403">
					Skies Fall/BelleTV Studios<br />
					800 Center St.<br />
					Racine, WI 53403</a><br /><br />
					<span class="telephone" itemprop="telephone"><a href="tel:+12626193506">262-619-3506</a></span><br />
					<span><a href="mailto: &#116;&#104;&#101;&#098;&#101;&#108;&#108;&#101;&#116;&#118;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">thebelletv@gmail.com</a></span>
				</div>
				<div id='contact-bubble'>
					<a class="contact">Say Hello</a>
					<form id="contact-form" action="contact.php" method="POST">
						<div id="contact">
							<label id="name">Name<input type="text" name="name" /></label>
							<label id="email">Email<input type="text" name="email" /></label>
							<label id="message">Message<textarea name="message"></textarea></label>
							<input name="gotye" id="gotye" value="" type="hidden" />
							<input type="submit" value="Send" />

							<div id="circularG" class='ajax-loader'>
								<div id="circularG_1" class="circularG">
								</div>
								<div id="circularG_2" class="circularG">
								</div>
								<div id="circularG_3" class="circularG">
								</div>
								<div id="circularG_4" class="circularG">
								</div>
								<div id="circularG_5" class="circularG">
								</div>
								<div id="circularG_6" class="circularG">
								</div>
								<div id="circularG_7" class="circularG">
								</div>
								<div id="circularG_8" class="circularG">
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<span class="down-arrow"></span>
		<div id="map" class="panel map"></div>
		<div id="panel-6" class="panel colophon">
			<div class="panel-container">
				<p class="copyright">
					&copy; <?php echo date( 'Y' ); ?> Skies Fall Media Group. All Rights Reserved.
				</p>
				<div class='social'>
					<ul>
						<li class="twitter"><a class="genericon genericon-twitter" href="https://twitter.com/skiesfall"></a></li>
						<li class="facebook"><a href="https://www.facebook.com/skiesfall" class="genericon genericon-facebook-alt"></a></li>
						<li class="linkedin"><a href="http://www.linkedin.com/company/skies-fall-media-group" class="genericon genericon-linkedin"></a></li>
						<li class="vimeo"><a href="http://www.vimeo.com/skiesfall" class="genericon genericon-vimeo"></a></li>
					</ul>
				</div>
			</div>
		</div>
		<script src="/js/site.js"></script>
		<script src="/js/retina.js"></script>
		<script type="text/javascript">

			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-10378787-1']);
			_gaq.push(['_trackPageview']);

			(function() {
				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
			})();

		</script>
	</body>
</html>