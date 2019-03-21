$(function() { // Init jQuery
  
// Show hide  
$('.show').bind('click', function() {
    var el = $( this ).parent().parent().parent();
    if ( $(el).hasClass( 'off' ) ) {
        // ON
        $( el ).addClass('on');
        $( el ).removeClass('off');
        $( this ).attr('src', 'img/icon-hide.svg');
        $( this ).prev().animate( {opacity: 1} );
        $( el ).removeClass('animalOn');
        $( el ).addClass('animalOff');
        $( el ).find('h1, h4, p.desc, p.species').slideDown('fast');
    } else {
        // OFF
        $( el ).addClass('off');
        $( el ).removeClass('on');
        $( this ).attr('src', 'img/icon-show.svg');
        $( this ).prev().animate( {opacity: .1} );
        $( el ).removeClass('animalOff');
        $( el ).addClass('animalOn');
        $( el ).find('h1, h4, p.desc, p.species').slideUp('fast');
    }

    
});
    

    
}); // End jQuery