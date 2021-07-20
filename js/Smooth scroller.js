$(document).ready(function() {

    var scrollLink = $('.scroll');

    // Smooth scrolling
    scrollLink.click(function(e) {
        //prevents default jumping of links
        e.preventDefault();
        $('body,html').animate({
            //calculates how far scrollbar from id automatically with a duration of 1000ms
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Active link switching
    $(window).scroll(function() {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 20;
            //this is to make active when navbar link is clicked.
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })

    })

})