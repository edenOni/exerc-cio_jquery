$(document).ready(function() {


    //Funçao para quando clicar no btn de add
    $('#btnAdd').click(function(e) {
        e.preventDefault();
        const task = $('#inputTask').val();

        const novoItem = $('<li class="item"></li>');
        $(`
                <p>${task}</p>
            `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $('#inputTask').val('');
        
    });

});