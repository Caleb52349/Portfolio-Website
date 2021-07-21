/*Responsive Navigation*/
$(document).ready(function() {
    $('.toggle').click(function() {
        $('.toggle').toggleClass('active')

        $('nav ul').toggleClass('active-menu')


    })
});
let $btns = $('.project-area .button-group button');


$btns.click(function(e) {

    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
        filter: selector
    });

    return false;
})

$('.project-area .button-group #btn1').trigger('click');

// Magnific Popup
$('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true }
});