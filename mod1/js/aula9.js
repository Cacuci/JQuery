$('document').ready(function(){
    var tmp2 = $('.ex1');
    var tmp = $('.ex2');
    var btn = $(':button');

    // btn.click(function(){
    //     tmp.fadeOut("slow");
    // });

    // btn.dblclick(function(){
    //     tmp.fadeIn("slow");
    // });

    // btn.click(function(){
    //     tmp.fadeTo("slow", 0.5)
    // });

    // btn.click(function(){
    //     tmp.fadeToggle("slow");
    // });

    //Utilizando o callback, assim quando o 1º evento foi finalizado será disparado o 2º evento
    btn.click(function(){
        tmp.fadeTo(3000, 0.3, function(){
            tmp2.fadeTo("slow", 0.7);
        });
    });

})