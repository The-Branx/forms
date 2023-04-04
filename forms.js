// Scrolls user to success message
$(document).on('submit', 'form', function () {
    setTimeout(function () {
        $('html, body').animate({
            scrollTop: $('.w-form-done').offset().top
        }, 600); //
    }, 500);
    setTimeout(function () {
    if (window.cookiehub.hasConsented("marketing")) {
        console.log('Marketing category is allowed');
        let email_address = $("input[name='email']").val();
        sendinblue.identify(email_address);
    }
    }, 13000);
});

// Dynamic params to inputs
var getUrlParameter = function (sParam) {
    var params = new URLSearchParams(window.location.search);
    return params.has(sParam) ? decodeURIComponent(params.get(sParam)) : false;
};
$(document).ready(function () {
    //exception for services
    var type = getUrlParameter('type');
    $('input[value="' + type + '"]').click();
    //rest
    var params = Array.from(new URLSearchParams(window.location.search));
    for (var [key, value] of params) {
        var element = $('[name="' + key + '"]:not([type="checkbox"])');
        element.val(value);
    }
    // stores language
    var langUrl = window.location.hostname.split('.')[0];
    if (!langUrl || langUrl === 'www' || langUrl === 'thebranx') {
        langUrl = 'en';
    } else {
        langUrl = langUrl.toLowerCase();
    }
    $('input[name="lang-url"], #lang-url').val(langUrl);
    // honeypot
    $("#Privacy-Check").hide();
    //fills Url
    $('#OriginUrl').val(window.location.href);
});

// Selects default texts of dropdown input
$("select option:nth-child(1)").attr("disabled", "disabled");
