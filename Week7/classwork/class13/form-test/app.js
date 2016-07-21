$(document).ready(function () {

	$('#myForm').submit(function(e){
		var name = $('#name-input').val()
		$('#target').html(name);
		e.preventDefault();
		$('#name-input').val("");
	});

});
