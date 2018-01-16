$(function(){
    var temp = $('.ex1');

    $('.ev1').click(function(){
        temp.hide('slow');
    });

    $('.ev2').click(function(){
        temp.show('slow');
    });

    $('.ev3').click(function(){
        temp.toggle('slow');
    });

    $('.ev4').keyup(function(){
        var txt = $(this).val();

        if(txt == 'hide')
        {
            temp.hide('slow');
        }

        if(txt == 'show')
        {
            temp.hide('slow');
        }

        if(txt == 'toggle')
        {
            temp.toggle('slow');
        }
    });
})