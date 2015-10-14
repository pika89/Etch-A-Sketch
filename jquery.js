$(document).ready(function(){

	$('body').prepend('<div class = "container"></div>')
	$('.container').prepend('<button onclick=newGrid();>New Grid</button>')
		.append('<ul></ul>')
		.append('<ul></ul>')
		.append('<ul></ul>')
		.append('<ul></ul>')
	$('ul').prepend('<li></li>')
		.append('<li></li>')
		.append('<li></li>')
		.append('<li></li>')

	$('li').css({
    display: 'inline-block',
    'list-style-type': 'none',
    height: '25px',
    width: '25px',
    border: '1px black solid',
    margin: '0 1px',
    'box-sizing': 'border-box'
  }).hover(function() {
    $(this).css('background-color','red')
  });




$('.container').css({
    margin: '0 auto'
  });

  $('ul').css({
    padding: '0',
    margin: '0'
  });

  $('button').css({
    margin: '10px 0',
    padding: '10px',
    'font-size': '16px'
  });

});



function newGrid(){

	$('li').css('background-color','white');
	$('.container').remove()
	$('body').prepend('<div class = "container"></div>')

	var width = prompt ('Enter new grid width:');

	if(width>128)
	{
		var width = prompt ('Cant be more than 128:');
	}

	var height = prompt ('Enter new grid height:');

	if(height>60)
	{
		var height = prompt ('Cant be more than 60:');
	}

	for (var i=0; i<=height;i++){
    $('.container').append('<ul></ul>');
  }

  for (var i=0; i<=width;i++){
    $('ul').append('<li></li>');
  }

	$('.container').prepend('<button onclick="newGrid();">New Grid</button>')

    $('li').css({
    display: 'inline-block',
    'list-style-type': 'none',
    height: '25px',
    width: '25px',
    border: '1px black solid',
    margin: '0 1px',
    'box-sizing': 'border-box'
  }).hover(function() {
    $(this).css('background-color','red')
  });

  $('.container').css({
    margin: '0 auto'
  });

  $('ul').css({
    padding: '0',
    margin: '0'
  });

  $('button').css({
    margin: '10px 0',
    padding: '10px',
    'font-size': '16px'
  });
};


