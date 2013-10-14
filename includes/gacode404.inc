<!-- Google Analytics for 404 page -->
<script type="text/javascript">
      var _gaq = _gaq || [];
      var ref = "";
      ref = document.referrer; 
      if(!document.referrer) { ref ="direct";}
      var errorpage = document.location.hostname + document.location.pathname;
      var pluginUrl =  '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
      _gaq.push(['_require', 'inpage_linkid', pluginUrl]);
      _gaq.push(['_setAccount', 'UA-21659030-2']);
      _gaq.push(['_setCustomVar',1,'Referrer',ref,3]); 
      _gaq.push(['_setCustomVar',2,'ErrPage',errorpage,3]); 
      _gaq.push(['_trackPageview']);
      (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; 
      s.parentNode.insertBefore(ga, s);})();
</script>
