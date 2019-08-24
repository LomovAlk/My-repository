$(document).ready(function(){
    $(function(){
        $('.wrapper a').on('click',function(){
            $('nav ul').slideToggle(300, function(){
                if($(this).css('display') === 'none'){
                    $(this).removeAttr('style');
                }
            });
        });
    });
});

$(document).ready(function(){
    $('a.menu-btn').on('click', function(e){
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');
    });
});