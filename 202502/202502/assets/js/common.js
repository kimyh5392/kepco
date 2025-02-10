(function($){
            
    // header 관련
    $(document).on('mouseenter', '#gnb > ul > li', function(){
        var $position = $(this).position().left;
        var $width = $(this).children().width();
        var $liwidth = $(this).width();
        $(this).addClass('active');
        $('#gnb > ul > li').removeClass('active');
        $('.active-bar').addClass('show');
        $('.active-bar').css({'left': $position + ($liwidth / 2)});
        $('.active-bar .bar').css({'width': $width});
    });
    $(document).on('mouseleave', '#gnb > ul > li', function(){
        $('#gnb > ul > li').removeClass('active');
        $('.active-bar').removeClass('show');
    });
    
    // gnb 관련
    $(document).on('mouseenter', '#gnb > ul > li', function(){
        $('#gnb > ul > li').removeClass('active');
        $(this).addClass('active');
    });
    $(document).on('mouseleave', '#gnb', function(){
        $('#gnb > ul > li').removeClass('active');
    });

    // nav 관련
    $(document).on('click', '.nav-body > ul > li > a', function(){
        $('.nav-body > ul > li').removeClass('active');
        $(this).parent().addClass('active');
    });

    // drdop 관련
    $(document).on('click', '.btn-drdop', function(){
        $('.dropdown').toggleClass('show');
        $(this).toggleClass('on');
    });

    // simplyScroll
    $('.move-slider').simplyScroll({
        speed: 1
    });

    // nav 관련 
    $(document).on('click', '.btn-nav', function(){
        $('body').addClass('opened');
        $(this).addClass('close');
    });
    $(document).on('click', '.btn-nav.close', function(){
        $('body').removeClass('opened');
        $(this).removeClass('close');
    });

    // scroll 관련
    var lastScroll = 0;
    $(window).on('scroll', function(){
        var scrollTop = $(this).scrollTop();
        if(scrollTop > lastScroll) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
        lastScroll = scrollTop;
    });


})(jQuery);