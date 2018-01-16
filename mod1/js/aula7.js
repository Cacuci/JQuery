$(function() {
    var temp = $('.ex1'); //temp recebe o valor ".ex1" como referencia, assim alterações realizas em "temp" tambem ocorreram em ".ex1"

    $('.ev1').focus(function(){
        temp.text($(this).attr('title'));
    }).keyup(function(){
        if($(this).val() == 'pontocom'){
            $('.ev2').focus();
        }
    })

    // $('.ev1').blur(function(){
    //     $('.ex1').text("Saida do campo " + $(this).attr('name'));        
    // })

    $('.ev1').change(function(){
        $('.ex1').text("Campo alterado " + $(this).val());
    })

    $('.selecionar').click(function(){
        $('.ev3').select();
        $('form').submit(function(){
            return false;
        })
    })
});