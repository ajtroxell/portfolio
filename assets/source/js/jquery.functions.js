jQuery(document).ready(function($) {
    
    //inputs clear and restore value
    var el = $('input[type=text], input[type=email], textarea, input.header-search');
    el.focus(function(e) {
        if (e.target.value === e.target.defaultValue)
            e.target.value = '';
    });
    el.blur(function(e) {
        if (e.target.value === '')
            e.target.value = e.target.defaultValue;
    });

    //fade images in after load
    $('img').loadComplete(function(){
        $(this).fadeIn(800);
    });

    //initialize magnific popup
    $('.projects').magnificPopup({
        delegate: 'a.screen', // child items selector, by clicking on it popup will open
        type: 'image',
        image: {
            titleSrc: 'rel'
        },
        gallery: {
            enabled: true,
            navigateByImgClick: true
        }
    });

});