$(document).ready(function() {

  var currUrl = window.location.pathname;
  if(currUrl.indexOf("index.html") < 0){
  	currUrl = currUrl + "index.html";
  }

  var currUrl2 = currUrl.substring(0,currUrl.indexOf('index.html'));
  var currUrl3 = currUrl.substring(0,currUrl.indexOf('/index.html'))

  //Hide the two side navs (the current and parent ones)
  $("#currnav").hide();
  $("#prevnav").hide();

  //Append the new side nav structure to the nav node, with the current parent nav item
  $(".secnav").append(
  	"<ul class='sn1' role='navigation'>"
  	+"<li class='selected'>"+ $("ul#prevnav li").has("a[href='"+currUrl+"']").text() 
  	+"<li class='selected'>"+ $("ul#prevnav li").has("a[href='"+currUrl2+"']").text() 
  	+"<li class='selected'>"+ $("ul#prevnav li").has("a[href='"+currUrl3+"']").text() 
  	+"<ul class='sn1 navexpand' style='float:none'></ul></li>"
  	+"</ul>"
  );

  //Add the current side nav to the proper spot
  $("ul#currnav li a").each(function(){
  	$(".navexpand").append(
  		"<li>"
  		+"<a href='" + $(this).attr('href') + "'>"
  		+ $(this).text() 
  		+"</a></li>")
  });

  //Add the other parent nav items
  $("ul#prevnav li a").each(function(){
  	if($(this).attr("href") != currUrl && $(this).attr("href") != currUrl2 && $(this).attr("href") != currUrl3){
  		$(".secnav ul[class='sn1']").append($(this).parent()); 
  	}
  });

  //Removes border from image links added 2011-11-09 cjo 
  $('a > img').parent().css('border','none'); 
  
  remove_empty_captions();
  
});

// Now IE Compatible 2011-01-12 cjo
function remove_empty_captions(){
  $('#slider-wrapper div.nivo-html-caption').each(function(){
    // var caption_title = $.trim($(this).find('h3').first().text());
    var caption_text = $.trim( $(this).find('p').first().text() );
    if('' == caption_text){
      var id = '#' + $(this).attr('id');
      $(this).remove();
      $('#slider img[title="' + id + '"]').attr('title', '');
    }
  });  

  $('div.banner_text div.banner_caption').each(function(){
    var caption_title = $.trim($(this).find('h3').first().text());
    var caption_text = $.trim($(this).find('p').first().text());
    if('' == caption_title){
      $(this).remove();
    }
  });

}
