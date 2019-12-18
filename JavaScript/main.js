$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

/* to top button */
$(window).scroll(function(){   
    if($(this).scrollTop() > 700){       
        $("#to__top").fadeIn();
    } else {
        $("#to__top").fadeOut();
    }
})

$("#to__top").click(function(event){
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 2000);
    
})
/* to top button */
