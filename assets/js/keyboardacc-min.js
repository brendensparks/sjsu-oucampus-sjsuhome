// JavaScript Document

sfHover=function(){var sfEls=document.getElementById("nav").getElementsByTagName("LI");for(var i=0;i<sfEls.length;i++){sfEls[i].onmouseover=function(){this.className+=(this.className.length>0?" ":"")+"sfhover"}sfEls[i].onmouseout=function(){this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"),"")}}}mcAccessible=function(){var mcEls=document.getElementById("nav").getElementsByTagName("A");for(var i=0;i<mcEls.length;i++){mcEls[i].onfocus=function(){this.className+=(this.className.length>0?" ":"")+"sffocus";this.parentNode.className+=(this.parentNode.className.length>0?" ":"")+"sfhover";if(this.parentNode.parentNode.parentNode.nodeName=="LI"){this.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.className.length>0?" ":"")+"sfhover";if(this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName=="LI"){this.parentNode.parentNode.parentNode.parentNode.parentNode.className+=(this.parentNode.parentNode.parentNode.parentNode.parentNode.className.length>0?" ":"")+"sfhover"}}}mcEls[i].onblur=function(){this.className=this.className.replace(new RegExp("( ?|^)sffocus\\b"),"");this.parentNode.className=this.parentNode.className.replace(new RegExp("( ?|^)sfhover\\b"),"");if(this.parentNode.parentNode.parentNode.nodeName=="LI"){this.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sfhover\\b"),"");if(this.parentNode.parentNode.parentNode.parentNode.parentNode.nodeName=="LI"){this.parentNode.parentNode.parentNode.parentNode.parentNode.className=this.parentNode.parentNode.parentNode.parentNode.parentNode.className.replace(new RegExp("( ?|^)sfhover\\b"),"")}}}}}if(window.addEventListener)window.addEventListener('load',mcAccessible,false);else if(document.addEventListener)document.addEventListener('load',mcAccessible,false);else if(window.attachEvent){window.attachEvent('onload',sfHover);window.attachEvent('onload',mcAccessible)}else{if(typeof window.onload=='function'){var existing=onload;window.onload=function(){existing();sfHover();mcAccessible()}}else{window.onload=function(){sfHover();mcAccessible()}}}