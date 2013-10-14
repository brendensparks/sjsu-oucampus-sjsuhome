<!-- JQUERY -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery-1.9.1.min.js"></script>
<!-- Side Navigation -->
<script type="text/javascript" src="/sjsuhome/assets/js/sidenav.js"></script>
<!-- Login Link -->
<script type="text/javascript" src="/sjsuhome/includes/directedit-min.js"></script>
<script type="text/javascript">// <![CDATA[
document.ready = function(){ directedit(); }
// ]]></script>
<!-- LIGHTBOX -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.lightbox-0.5-min.js"></script>
<!-- NIVO SLIDER -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.nivo.slider.pack-min.js"></script>
<script type="text/javascript">// <![CDATA[
$(window).load(function() {
	    $('#slider').nivoSlider({
	    effect:'fade',
		pauseTime:6000,
		directionNav:true,
		captionOpacity: 1.0
		});
	});
// ]]></script>
<script type="text/javascript">// <![CDATA[
$(function() {
		$('#gallery a').lightBox({fixedNavigation:true});
	});
// ]]></script>
<!-- HOVERINTENT: MEGANAV -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.hoverIntent-min.js"></script>
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.meganav-min.js"></script>
<!-- TYPEAHEAD -->
<script type="text/javascript" src="/typeahead.js/typeahead.min.js"></script>
<script type="text/javascript">
$(document).ready(function() {
	$('.typeaheadsjsu').typeahead({
    prefetch: '/typeahead.js/sjsulist.min.json',
    limit: 10 });
	});
</script>
