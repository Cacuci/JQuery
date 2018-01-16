$(function(){    
    //Função Error
    // $('img').on("error", function() {
    //     var img = $(this).attr("src");
    //     alert('Imagem ' +  img + 'indisponivel');
    //     $(this).attr('src', 'img/error.png')
    // })

    //Função redimensionar imagem
    // $('img').width($(window).width()).height($(window).height());

    // $(window).resize(function() {
    //     $('img').width($(window).width()).height($(window).height());
    // })
    
    $('body').css("height", "5000px");

    $(window).scroll(function() {
        var topo = $(window).scrollTop();
        
        if(topo > 350) {
            $('img').fadeOut('1000');
        }
        else {
            $('img').fadeIn('1000');
        }
    });
});