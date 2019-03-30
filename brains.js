$(function() { // Init jQuery

function showAndHide (or) {
    var el = $( or ).parent().parent().parent();
    if ( $(el).hasClass( 'off' ) ) {
        // ON
        $( el ).addClass('on');
        $( el ).removeClass('off');
        $( or ).attr('src', 'img/icon-hide.svg');
        $( or ).prev().animate( {opacity: 1} );
        $( el ).removeClass('animalOn');
        $( el ).addClass('animalOff');
        $( el ).find('h1, h4, p.desc, p.species').slideDown('fast');
    } else {
        // OFF
        $( el ).addClass('off');
        $( el ).removeClass('on');
        $( or ).attr('src', 'img/icon-show.svg');
        $( or ).prev().animate( {opacity: .1} );
        $( el ).removeClass('animalOff');
        $( el ).addClass('animalOn');
        $( el ).find('h1, h4, p.desc, p.species').slideUp('fast');
    }
};
    
// Show hide  
$('.show').bind('click', function() {
    showAndHide (this);
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
    $( '.show' ).each(function() {
        showAndHide(this);
    });
});

$('nav a:last-child').hover(function() {
    $(this).addClass('hideAll');
    $(this).removeClass('showAll');
    }, function () {
        $(this).addClass('showAll');
        $(this).removeClass('hideAll');
    });
    
}); // End jQuery