$(document).ready(function(){
  var form_data = $('#form').serialize();
  $("#form").bind("submit", function(e) {
    e.preventDefault();
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
             $("#status").addClass("alert alert-error"); // Enable this line of code if using bootstrap forms
            //$("#status").removeClass("main-formsuccess"); // Disable this line of code if using bootstrap forms
            //$("#status").addClass("main-formerror"); // Disable this line of code if using bootstrap forms
            var dataSet=resultObj.message+"<br/>";

            $.each(resultObj.data, function(i,data){
              var d = data.message;
              highlightID="#id_"+data.name;
              // Check if the span has been created already
              //errorHTML='<span class="formerror" id="'+data.name+'Error">'+data.message+'</span>'; // Disable this line if using Boostrap Forms
               errorHTML='<span class="label label-important" id="'+data.name+'Error">'+data.message+'</span><br /><br />'; // Enable this line if using Boostrap Forms
              if($('#' + data.name + 'Error').length == 0) {
                // If span does not exist, then add it
                $(highlightID).after(errorHTML);
              }
            });

            $("#status").html(dataSet);
          } else {
            var dataSet = resultObj.message + " " + resultObj.data[0].message;
             $("#status").addClass("alert alert-error"); // Enable this line of code if using bootstrap forms
            //$("#status").addClass("fielderror"); // Disable this line of code if using bootstrap forms
            //$("#status").addClass("main-formerror"); // Disable this line of code if using bootstrap forms
            $("#status").html(dataSet);
          }
        } else {
           $("#status").removeClass("alert alert-error"); // Enable this line of code if using bootstrap forms
           $("#status").addClass("alert alert-success"); // Enable this line of code if using bootstrap forms
          //$("#status").removeClass("main-formerror"); // Disable this line of code if using bootstrap forms
          //$("#status").addClass("main-formsuccess"); // Disable this line of code if using bootstrap forms
          $("#form").remove();
          $("#status").html(resultObj.message);
        }
      },
      error: function(data){ }
    });
  return false;
  });
});
