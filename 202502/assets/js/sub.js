(function($){
    // 클립보드 복사
    function copyClip(url){
        var $temp = $('<input>');
        $('body').append($temp);
        $temp.val(url).select();
        document.execCommand('copy');
        $temp.remove();
        alert('url이 복사되었습니다.');
    }
    $('.btn-copy').on('click', function(e){
        e.preventDefault();
        var link = location.href;
        copyClip(link);
    });
    
    // highlight 관련
    $(window).on('scroll', function() {
        $('.highlight').each(function(index, elem) {
            if ($(window).scrollTop() > $(elem).offset().top - ($(window).height() / 1.5)) {
                $(elem).addClass('active');
            }
        });
    });
    
    // scroll 관련
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('.page-controls').addClass('show');
        } else {
            $('.page-controls').removeClass('show');
        }
    });
    
})(jQuery);