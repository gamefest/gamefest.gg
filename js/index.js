new WOW().init();
$(".view .mask").removeClass("waves-effect waves-light");
$(function () {
	$('[data-toggle="tooltip"]').tooltip()
});

isLive(function() {
	makeShown($("#liveBtn"));
});

var url = 'https://script.google.com/macros/s/AKfycbxpE04ML6jN1GFEsmyvFID__aS5VZxwv3nNP6IMnE5ld7J8OvPm/exec';

var button = $('#submit-form');
button.on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
	button.removeClass('animated headShake')
});
button.on('click', function (e) {
	var form = document.getElementById('mailing-list-form');
	var valid = true;
	if (form.checkValidity() === false) {
		valid = false;
		button.addClass('animated headShake');
	}
	e.preventDefault();
	e.stopPropagation();
	form.classList.add('was-validated');

	if (valid) {
		$(this).prop('disabled', true);
		makeShown($('#submit-progress-spinner'));
		$.ajax({
			url: url,
			method: "GET",
			dataType: "json",
			data: $("#mailing-list-form").serialize(),
			timeout: 6000,
			crossDomain: true,
			success: function () {
				$('#submit-form').prop('disabled', false);
				makeHidden($('#submit-progress-spinner'));
				$('#emailSignupSuccess').modal();
				$('.form-control').val("");
				form.classList.remove('was-validated');
			},
			error: function (jqXHR, status) {
				$('#submit-form').prop('disabled', false);
				makeHidden($('#submit-progress-spinner'));
				$('#error-type').text(status);
				$('#emailSignupFailure').modal();
			}
		});
	}
});

function makeShown(obj) {
	obj.removeClass('hidden');
}

function makeHidden(obj) {
	obj.addClass('hidden');
}

var a = new UAParser();
var name = a.getResult().browser.name;
if(name === "Edge" || name === "IE") {
	$("[class^='btn-hex']").addClass('btn-hex-ms-fix');
}

jarallax(document.querySelectorAll('.jarallax'), {
    disableParallax: /iPhone|iPod|Android/,
    disableVideo: /iPhone|iPod|Android/
});