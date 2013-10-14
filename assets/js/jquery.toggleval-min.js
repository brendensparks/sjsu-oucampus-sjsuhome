/* -------------------------------------------------- *
 * ToggleVal 3.0
 * Updated: 01/15/2010
 * -------------------------------------------------- *
 * Author: Aaron Kuzemchak
 * URL: http://aaronkuzemchak.com/
 * Copyright: 2008-2010 Aaron Kuzemchak
 * License: MIT License
** -------------------------------------------------- */

(function(a){a.fn.toggleVal=function(b){if(!b||"object"==typeof b)b=a.extend({},a.fn.toggleVal.defaults,b);else if("string"==typeof b&&"destroy"==b.toLowerCase())var d=!0;return this.each(function(){if(d)return a(this).unbind("focus.toggleval").unbind("blur.toggleval").removeData("defText"),!1;var c="";switch(b.populateFrom){case "title":a(this).attr("title")&&(c=a(this).attr("title"),a(this).val(c));break;case "label":a(this).attr("id")&&(c=a('label[for="'+a(this).attr("id")+'"]').text(),a(this).val(c));
break;case "custom":c=b.text;a(this).val(c);break;default:c=a(this).val()}a(this).addClass("toggleval").data("defText",c);!0==b.removeLabels&&a(this).attr("id")&&a('label[for="'+a(this).attr("id")+'"]').remove();a(this).bind("focus.toggleval",function(){a(this).val()==a(this).data("defText")&&a(this).val("");a(this).addClass(b.focusClass)}).bind("blur.toggleval",function(){""==a(this).val()&&!b.sticky&&a(this).val(a(this).data("defText"));a(this).removeClass(b.focusClass);""!=a(this).val()&&a(this).val()!=
a(this).data("defText")?a(this).addClass(b.changedClass):a(this).removeClass(b.changedClass)})})};a.fn.toggleVal.defaults={focusClass:"tv-focused",changedClass:"tv-changed",populateFrom:"default",text:null,removeLabels:!1,sticky:!1};a.extend(a.expr[":"],{toggleval:function(b){return a(b).data("defText")||!1},changed:function(b){return a(b).data("defText")&&a(b).val()!=a(b).data("defText")?!0:!1}})})(jQuery);
$(document).ready(function(){$("#q").attr("title","Search SJSU").toggleVal({populateFrom:"title",removeLabels:!0})});