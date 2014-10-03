$(document).ready(function(){
	
	$("input:text").on('input', function () {
		$(this).next('.label-important:first').remove();
		return false;
	});
	
	$("textarea").on('input', function () {
		$(this).next('.label-important:first').remove();
		return false;
	});
	
	
  var form_data = $('#form').serialize();
  $("#form").bind("submit", function(e) {
    e.preventDefault();
    $("#form .label-important").remove();
	  $.ajax({
      type : "POST",
      cache : false,
		url : "/ldp/modules/forms.php", //or url : "/_resources/ldp/form_submit.aspx"
      data : $(this).serialize(),
      success: function(data) {
        var resultObj = jQuery.parseJSON(data);
        var errC=/[faultcode]+\s:/;
        var faultCode=errC.exec(resultObj.message);
        if(resultObj.active == false) {
          if(!faultCode) {
             $("#status").addClass("alert alert-error"); 

            var dataSet=resultObj.message+"<br/>";

            $.each(resultObj.data, function(i,data){
              var d = data.message;
              highlightID="#id_"+data.name;
              // Check if the span has been created already
    
               errorHTML='<span class="label label-important" id="'+data.name+'Error">'+data.message+'</span>';
              if($('#' + data.name + 'Error').length == 0) {
                // If span does not exist, then add it
                $(highlightID).after(errorHTML);
              }
            });

            $("#status").html(dataSet);
          } else {
            var dataSet = resultObj.message + " " + resultObj.data[0].message;
             $("#status").addClass("alert alert-error"); 

            $("#status").html(dataSet);
          }
        } else {
           $("#status").removeClass("alert alert-error"); 
           $("#status").addClass("alert alert-success"); 

          $("#form").remove();
          $("#status").html(resultObj.message);
        }
      },
      error: function(data){ }
    });
  return false;
  });
});
