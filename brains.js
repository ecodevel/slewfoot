$(function() { // Init jQuery

function turnOn(el, or, isOn) {
    if ( isOn === true) {
        // ON
        $( el ).addClass('on');
        $( el ).removeClass('off');
        $( or ).attr('src', 'img/icon-hide.svg');
        $( or ).prev().animate( {opacity: 1} );
        $( el ).removeClass('animalOn');
        $( el ).addClass('animalOff');
        $( el ).find('h1, h4, p.desc, p.species').slideDown('fast');
    }
    else {
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

// Show hide method for div species
function showAndHide (or, showAll) {
    var el = $( or ).parent().parent().parent();
    if (typeof showAll === "undefined" || showAll === null) { 
        if ( $(el).hasClass( 'off' ) ) {
            turnOn(el, or, true);
        } else {
            turnOn(el, or, false);
        }
    }
    else {
        if (showAll === true) {
            turnOn(el, or, true);
        }
        else {
            turnOn(el, or, false);
        }
    }
    
};
    
// Show hide animals upon click
$('.show').bind('click', function() {
    showAndHide (this);
});

// Show hide rollover
$('.show').hover(function() {
    var el = $( this ).parent().parent().parent();
    if ($ ( el ).hasClass('on') ) {
        $( this ).attr('src', 'img/icon-hide.svg');
    }
    else{
        $( this ).attr('src', 'img/icon-show.svg');
    }
   
    }, function () {
        var el = $( this ).parent().parent().parent();
        if ($ ( el ).hasClass('off') ) {
            $( this ).attr('src', 'img/icon-hide.svg');
        }
        else{
            $( this ).attr('src', 'img/icon-show.svg');
        }
});
    
// Build Galleries
$('.gallery').each(function() {
    // From https://github.com/dbrekalo/simpleLightbox
    $( this ).find('a').simpleLightbox();
});

// Show all button
$('nav a:last-child').click(function() {
    var showAll = false;
    if ($ (this).hasClass( 'collapsed' )) {
        $ (this).children('span').text('Hide all');
        showAll = true;
        $ (this).removeClass( 'collapsed' )
    }
    else {
        $ (this).children('span').text('Show all');
        $ (this).addClass( 'collapsed' )
    }
    $( '.show' ).each(function() {
        showAndHide(this, showAll);
    });
});

$('nav a:last-child').hover(function() {
        $( this ).children('img').attr('src', 'img/_hide.png');
    }, function () {
        $( this ).children('img').attr('src', 'img/_show.png');        
});
    
}); // End jQuery