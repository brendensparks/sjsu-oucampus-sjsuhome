(function(l,j){function r(a,c){var f=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return f.innerHTML="x<style>"+c+"</style>",d.insertBefore(f.lastChild,d.firstChild)}function n(){var a=k.elements;return"string"==typeof a?a.split(" "):a}function u(a){var c={},f=a.createElement,d=a.createDocumentFragment,b=d();a.createElement=function(a){k.shivMethods||f(a);var g;return c[a]?g=c[a].cloneNode():v.test(a)?g=(c[a]=f(a)).cloneNode():g=f(a),g.canHaveChildren&&!w.test(a)?b.appendChild(g):
g};a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(a){return c[a]=f(a),b.createElement(a),'c("'+a+'")'})+");return n}")(k,b)}function s(a){var c;return a.documentShived?a:(k.shivCSS&&!o&&(c=!!r(a,"article,aside,details,figcaption,figure,footer,header,hgroup,nav,section{display:block}audio{display:none}canvas,video{display:inline-block;*display:inline;*zoom:1}[hidden]{display:none}audio[controls]{display:inline-block;*display:inline;*zoom:1}mark{background:#FF0;color:#000}")),
p||(c=!u(a)),c&&(a.documentShived=c),a)}function x(a){for(var c,f=a.attributes,d=f.length,b=a.ownerDocument.createElement(m+":"+a.nodeName);d--;)c=f[d],c.specified&&b.setAttribute(c.nodeName,c.nodeValue);return b.style.cssText=a.style.cssText,b}function t(a){var c,f,d=a.namespaces,b=a.parentWindow;return!y||a.printShived?a:("undefined"==typeof d[m]&&d.add(m),b.attachEvent("onbeforeprint",function(){var h,g,d;h=a.styleSheets;for(var b=[],e=h.length,i=Array(e);e--;)i[e]=h[e];for(;d=i.pop();)if(!d.disabled&&
z.test(d.media)){h=d.imports;e=0;for(g=h.length;e<g;e++)i.push(h[e]);try{b.push(d.cssText)}catch(j){}}e=b.reverse().join("").split("{");i=e.length;h=RegExp("(^|[\\s,>+~])("+n().join("|")+")(?=[[\\s,>+~#.:]|$)","gi");for(g="$1"+m+"\\:$2";i--;)b=e[i]=e[i].split("}"),b[b.length-1]=b[b.length-1].replace(h,g),e[i]=b.join("}");b=e.join("{");i=a.getElementsByTagName("*");h=i.length;g=RegExp("^(?:"+n().join("|")+")$","i");for(d=[];h--;)e=i[h],g.test(e.nodeName)&&d.push(e.applyElement(x(e)));f=d;c=r(a,b)}),
b.attachEvent("onafterprint",function(){for(var a=f,b=a.length;b--;)a[b].removeNode();c.removeNode(!0)}),a.printShived=!0,a)}var q=l.html5||{},w=/^<|^(?:button|form|map|select|textarea|object|iframe)$/i,v=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,o,p;(function(){var a=j.createElement("a");a.innerHTML="<xyz></xyz>";(o="hidden"in a)&&"function"==typeof injectElementWithStyles&&
injectElementWithStyles("#modernizr{}",function(a){a.hidden=!0;o="none"==(l.getComputedStyle?getComputedStyle(a,null):a.currentStyle).display});p=1==a.childNodes.length||function(){try{j.createElement("a")}catch(a){return!0}var f=j.createDocumentFragment();return"undefined"==typeof f.cloneNode||"undefined"==typeof f.createDocumentFragment||"undefined"==typeof f.createElement}()})();var k={elements:q.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
shivCSS:!1!==q.shivCSS,shivMethods:!1!==q.shivMethods,type:"default",shivDocument:s};l.html5=k;s(j);var z=/^$|\b(?:all|print)\b/,m="html5shiv",y=!p&&function(){var a=j.documentElement;return"undefined"!=typeof j.namespaces&&"undefined"!=typeof j.parentWindow&&"undefined"!=typeof a.applyElement&&"undefined"!=typeof a.removeNode&&"undefined"!=typeof l.attachEvent}();k.type+=" print";k.shivPrint=t;t(j)})(this,document);