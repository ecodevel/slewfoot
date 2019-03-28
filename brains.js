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
    
/*
Show hide rollover thing that Jordi can write?
If you do please delete this CSS class '.animal-pics .photo .show:hover'

function toggleShowHide {
    if xxx has class 'off' {
        $( this ).attr('src', 'img/icon-hide.svg');
    } else {
        $( this ).attr('src', 'img/icon-hide.svg');
    }
}
.show.blind mouseover {
    toggleShowHide();
}
.show.blind mouseout {
    toggleShowHide();
}

*/
    
// Build Galleries
$('.gallery').each(function() {
    $( this ).find('a').simpleLightbox({
        captions:true,
        captionDelay:0,
        captionSelector:'img',
        captionType:'attr',
        captionPosition:'bottom',
        captionClass:'',
        captionsData:'title' // None of these options working, trying to set up captions!
    });
});

    
// Show all button
$('nav a:last-child').click(function() {
  alert( "Jordi makes all the animals come alive :D" );
});
$('nav a:last-child').hover(function() {
    $( this ).children('img').attr('src', 'img/_hide.png'); // And this mouseout?
});
    
}); // End jQuery