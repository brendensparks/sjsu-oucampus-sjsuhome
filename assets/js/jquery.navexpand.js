$(document).ready(function(){

	//Set height of parent div before collapsing, to prevent jumping
	var $div = $('.navexpand');
	var height = $div.height();
	$div.hide().css({ height : 0 });
	
	//Hide (Collapse) the toggle containers on load
	//$(".toggle_container").hide(); //hide footer global nav
	$(".navexpand").hide(); // hide secondary nav before expanding

	//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
	$("h2.trigger").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false; //Prevent the browser jump to the link anchor
	});
	
		//Automatically slide open children of secondary nav
	//$("ul.navexpand").delay(200).slideDown('slow');
	if ( $div.is(':visible') ) {
	    $div.animate({ height: 0 }, { duration: 100, complete: function () {
	        $div.hide();
	      } 
	    });
	  } else {
	    $div.show().delay(300).animate({ height : height }, { duration: "slow", complete: function(){
	          $div.css({ height: 'auto'});
	          
	          if ($div.height() > 200) {
                    $div.css('padding-bottom','5em');
 	          }
	        }
	    });
	  }
});
