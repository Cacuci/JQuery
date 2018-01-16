$(function() {
    $('.place').each(function(){
        var place = $(this).attr('title');
        var input = $(this);
    
        input
            .val(place)
            .css("color", "#a0a0a0")
            .focusin(function(){
                input.css("color", "black");      
                if(input.val() == place){
                    input.val('');
                }                
            }).focusout(function(){                 
                if(input.val() == ''){
                    input.css("color", "#a0a0a0")
                    input.val(place);
                }                
            });

        var txt = $('.ex1');
        // $('.key').keypress(function(){
        //     txt.text($(this).val());
        // });
        // $('.key').keydown(function(){
        //     txt.text($(this).val());
        // });
        $('.key').keyup(function(){
            txt.text($(this).val());
        });
    });
});