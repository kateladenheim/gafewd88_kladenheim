$(document).ready(function () {

	var temp;
	var solution;

	$('#celcius').click(function(){
		temp = parseInt($('#temperature').val());
		$('#solution').html((temp - 32) / 1.8);

		solution = parseInt($('#solution').html());

		if (solution <= 20) {
			$('#body').css('background-color', '#75b7bb');
		} else { 
			$('#body').css('background-color', '#ba0913');
		}

	});

	$('#farenheit').click(function() {
		temp = parseInt($('#temperature').val());
		$('#solution').html(temp * 1.8 + 32);

		solution = parseInt($('#solution').html());

		if (solution <= 70) {
			$('#body').css('background-color', '#75b7bb');
		} else { 
			$('#body').css('background-color', '#ba0913');
		}

	});

});