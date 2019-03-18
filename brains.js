$(function() { // Init jQuery
  
// Show hide  
$('.show').bind('click', function() {
    if ( $( this ).parent().parent().parent().hasClass( 'off' ) ) {
        // ON
        $( this ).parent().parent().parent().addClass('on');
        $( this ).parent().parent().parent().removeClass('off');
        $( this ).attr('src', 'img/icon-hide.svg');
        $( this ).prev().animate( {opacity: 1} );
        $( this ).parent().parent().parent().removeClass('animalOn');
        $( this ).parent().parent().parent().addClass('animalOff');
        $( 'h1, h4, .desc, .species' ).slideDown('fast');
    } else {
        // OFF
        $( this ).parent().parent().parent().addClass('off');
        $( this ).parent().parent().parent().removeClass('on');
        $( this ).attr('src', 'img/icon-show.svg');
        $( this ).prev().animate( {opacity: .1} );
        $( this ).parent().parent().parent().removeClass('animalOff');
        $( this ).parent().parent().parent().addClass('animalOn');
        $( 'h1, h4, .desc, .species' ).slideUp('fast');
    }

    
});
    

    
}); // End jQuery