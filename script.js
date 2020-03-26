$('#addToDoButton').click(function() {
	$('#addToDo').slideToggle();
});

$('ul').on('click', '.todo', function() {
	$(this).toggleClass('done');
});

$('#addToDo').keypress(function(event) {
	if (event.which === 13 && $(this).val() !== ' ' && $(this).val() !== '') {
		$('ul').append('<li><span class="deleteButton"><i class="trash"></i></span><span class="todo"></span></li>');
		$('li .todo').last().text($(this).val());
		$(this).val('');
	}
});

$('ul').on('click', '.deleteButton', function() {
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
});
