
// masscode://snippets/6F8Q6ILz
$(document).ready(function() {
	if (window.location.host === 'de.thebranx.com') {
		$('[language="ES"]').remove();
		$('[language="EN"]').remove();
    $('body').addClass("hyphens");
  	$("#lang-url").val("DE");
	} else if (window.location.host === 'es.thebranx.com') {
		$('[language="EN"]').remove();
		$('[language="DE"]').remove();
    $('#lang-url').val("ES");
	} else {
		$('[language="ES"]').remove();
		$('[language="DE"]').remove();
     	$('[name="lang-url"]").val("EN");
	}
});




