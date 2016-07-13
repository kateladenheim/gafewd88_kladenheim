$(document).ready(function(){

	//var box = {

	//}

	$('.box').css('background-color', 'red');
	$('.box').text('This is some text');

	/* $('#one').click(function(){
		$('#one').css({ 'height': '500px', 'width': '500px' });
	});

	$('#two').click(function(){
		$('#two').css({ 'height': '500px', 'width': '500px' });
	}); */

	$('.box').click(function(){
		console.log('hello')
		$(this).css({ 'height': '500px', 'width': '500px' });

	});

	$('.box').click(function(){
		$(this).css({ 'height': 'height +100', 'width': 'width + 100'});
	});

});