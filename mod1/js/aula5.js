$(function(){    
    
    var temp = $('.ex1');

    $('.ev1').click(function() {
        $(this).css("background", "gray");
        temp.text('Você deu 1 click');
    })

    $('.ev2').dblclick(function() {
        temp.text('Você deu 2 clicks');
    })

    $('.ev3').focusin(function() {
        $(this).css("background", "blue");
        temp.text("Voce deu focus!")
    }).focusout(function() {
        $(this).css("background", "black");
        temp.text("Você tirou o focus!")
    })

    $('.ev4').hover(function() {
        $(this).css("background", "gray");
        temp.text("Você passou o Mouse!")
    })

    $('.ev5').mousedown(function() {
        $(this).css("background", "gray");
        temp.text("Você clicou no botão do Mouse!")
    }).mouseup(function() {
        $(this).css("background", "black");
        temp.text("Você soltou o botão do Mouse!")
    })

    var cont = 0

    $('.ev6').mouseenter(function() {
        cont++;
        temp.text("Entradas do Mouse " + cont);
    }).mouseout(function() {        
        temp.text("Saindas do Mouse" + cont);
    })

    var contb = 0

    $(".ev7").mouseover(function() {
        contb++;
        temp.text("Mouse over " + contb)
        }).mouseleave(function() {
            temp.text("Mouse Leave");
    })

    $('.ev8').mousemove(function(move) {
        var x = move.pageX;
        var y = move.pageY;
        temp.text("Movimento X: " + x + " - Movimento Y: " + y);
    })

    // $('.ev3').focus().css("background", "yellow");
});