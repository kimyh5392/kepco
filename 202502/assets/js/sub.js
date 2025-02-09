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
})(jQuery);