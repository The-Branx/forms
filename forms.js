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
var getUrlParameter = function (sParam) {
    var params = new URLSearchParams(window.location.search);
    return params.has(sParam) ? decodeURIComponent(params.get(sParam)) : false;
  };
  
  $(document).ready(function () {
    var params = Array.from(new URLSearchParams(window.location.search));
    for (var [key, value] of params) {
      var input = $('input[name="' + key + '"]');
      if (input.length && value) {
        input.val(value);
      }
    }
  });

  