<!-- LIGHTBOX -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.lightbox-0.5-min.js"></script>
<!-- NIVO SLIDER -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.nivo.slider.pack-min.js"></script>
<script type="text/javascript">// <![CDATA[
	$(document).ready(function() {
		init_nivoSlider();
	});	
	
	function init_nivoSlider(){
		
	    $('#slider').nivoSlider({
	    effect:'fade',
		directionNav:true,
		captionOpacity: 1.0,
		pauseTime:5000
		});
	}
	
// ]]></script>
<script type="text/javascript">// <![CDATA[
	$(function() {
		$('#gallery a').lightBox({fixedNavigation:true});
	});
// ]]></script>

<!--[if lte IE 9]>
<script type="text/javascript">// <![CDATA[
$(document).ready(function(){

$('#container').addClass('badie');
});
// ]]></script>
<![endif]-->

<!--[if lte IE 7]>
<script type="text/javascript">// <![CDATA[
$(document).ready(function(){

$('#top_home .right').addClass('ieZIndexHack');

});
// ]]></script>
<![endif]-->

<!-- SECONDARY NAV EXPAND -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.navexpand-min.js"></script>
<!-- SCROLLTO -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.scrollTo-1.4.2-min.js"></script>
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.localscroll-1.2.7-min.js"></script>
<!-- HOVERINTENT: MEGANAV -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.hoverIntent-min.js"></script>
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.meganav-min.js"></script>
<!-- TOOLTIP -->
<script type="text/javascript" src="/sjsuhome/assets/js/jquery.tipTip-min.js"></script>
<!--[if lte IE 6]>
<script src="/sjsuhome/assets/js/updateie6-min.js" type="text/javascript"></script>
<![endif]-->
<!-- TYPEAHEAD -->
<script type="text/javascript" src="/typeahead.js/typeahead.min.js"></script>
