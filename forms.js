$(document).on('submit', 'form', function () {
    let email_address = $("input[name='email']").val();
    const formDataName = document.querySelector('form').getAttribute('data-name');
    setTimeout(function () {
        $('html, body').animate({
                scrollTop: $('[class*="w-form-done"]').offset().top - 200
        }, 400); 
    }, 1000);
    setTimeout(function () {
        window.cookiehub.allowAll();
    }, 2500);
    setTimeout(function () {
        sendinblue.identify(email_address);
    }, 8500);
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
