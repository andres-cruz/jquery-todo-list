// Check off specific todo by clicking
$('ul').on('click', 'li', function() {
    $(this).toggleClass('completed');
});

// click on X to delete todo
$('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$('input[type="text"]').keypress(function(e) {
    if(e.which === 13) {
        // grabbing new todo text from input
        var todoText = $(this).val();
        // cleaning the input
        $(this).val('');
        // create a new li and add to ul
        $('ul').append('<li><span><i class="fas fa-trash"></i></span>' + todoText + '</li>')
    }
});
