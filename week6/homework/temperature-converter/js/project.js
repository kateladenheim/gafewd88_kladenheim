$(document).ready(function () {

	var temp = $('#temperature').val();
	var solution = $('#solution').val();

	$('#celcius').click(function(){
		$('#soluion').html(temp * 1.8 + 32);

		if solution (< 20) {
			$('#body').css('background-color', '#75b7bb');
	} else { 
		$('#body').css('background-color', '#ba0913');
	}

	});

	$('#farenheit').click(function() {
		$('#solution').html((temp - 32) / 1.8);

		if solution (< 70) {
			$('#body').css('background-color', '#75b7bb');
	} else { 
		$('#body').css('background-color', '#ba0913');
	}

	});

});