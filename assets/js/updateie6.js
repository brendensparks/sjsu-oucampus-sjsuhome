// (c) 2009 SilvesterWebDesigns.com - Stuart Silvester. Thanks to the SevenUp Project.
$(document).ready(function(){function isCookieSet(){if(document.cookie.length>0){var i=document.cookie.indexOf("updateie6=");return(i!=-1);}
return false;}
var needUpgrade=/(MSIE 6|MSIE 5.(\d+))/i.test(navigator.userAgent);if(needUpgrade&&!isCookieSet()){$("body").prepend('<div class="updateie6" style="display:none;" ><h3 style="margin: 0px;">Your web browser is outdated and  unsupported</h3>SJSU recommends that you <a href="http://www.microsoft.com/windows/internet-explorer/" target="_blank">upgrade to the latest version of Internet Explorer</a>. <div id="whyupcontent" style="display:none;"> <h3>Why should I upgrade?</h3> <ul><li><strong>Websites load faster.</strong></li> <li><strong>Websites look better</strong> with more web standards compliance.</li> <li><strong>Tabs</strong> let you view multiple sites in one window.</li> <li><strong>Safer browsing</strong> with phishing protection.</li> </ul></div><span id="hideme" style="display: none;"><a href="#" id="whyupgrade">Why should I upgrade?</a> - <a href="#" id="goaway">Remove Warning</a></span></div>');$('div.updateie6').slideDown('slow');$("span#hideme").fadeIn("slow");$("a#whyupgrade").click(function(){$("div#whyupcontent").slideDown("slow");});$("a#goaway").click(function(){$("div.updateie6").slideUp("fast",function(){$(this).remove()});var exp=new Date();exp.setTime(exp.getTime()+(7*24*3600000));document.cookie="updateie6=hide; expires="+exp.toUTCString();});};});