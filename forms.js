// Scrolls to top and indetifies user on Submit
$(document).on('submit', 'form', function() {
	setTimeout(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 400);
    }, 500);
  let email_address = $("input[name='email']").val();
  sendinblue.identify(email_address);
});

// Dynamic params to inputs
var getUrlParameter = function(sParam) {
    var params = new URLSearchParams(window.location.search);
    return params.has(sParam) ? decodeURIComponent(params.get(sParam)) : false;
  };
  
  $(document).ready(function() {
    var params = Array.from(new URLSearchParams(window.location.search));
    for (var [key, value] of params) {
      var element = $('[name="' + key + '"]');
        element.val(value);
    }
  });


//   Auto select Service from URL param
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

    $( document ).ready(function() {
        var type = getUrlParameter('type');
        $('input[value="'+ type +'"]').click();
        
        var sector = getUrlParameter('sector');
        if (sector.length > 0) {
       		 $("#sector").val(sector);    
				};
    });

// Selects default texts of dropdown input
$( "select option:nth-child(1)" ).attr("disabled","disabled");
