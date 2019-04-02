$(function() { // Init jQuery

// Build HTML markup for each species in array
species.forEach(function(item){
    var isExcluded = (item["category"] != "birds"); // Initially hidden if not a bird
    var classes = "animal off";
    if (isExcluded === true) {
        classes = classes + " excluded";
    }
    var animal = "<div data-id='" + item["category"] + "' class='" + classes + "'>" +
        "<h1>" + item["name"] + "</h1>" +
        "<h4>" + item["subname"] + "</h4>" +
        "<div class='animal-pics'>" +
        "<div class='column'><img src='img/" + item["category"] + "/" + item["folder"] + "/scale.png'></div>" +
        "<div class='column'>" +
        "<div class='gallery'>";
    var count_photos = 0;
    item["photos"].forEach(function(photo){
        animal = animal + "<div><a href='img/" + item["category"] + "/" + item["folder"] + "/" + photo["name"] + ".jpg' title='" + photo["title"]  + "'><img src='img/" + item["category"] + "/" + item["folder"] + "/-" + photo["name"] + ".jpg' ></a></div>";
        count_photos = count_photos + 1;
    });
    for (var i = 4; i > count_photos; i--) {
        animal = animal + "<div><img src='img/blank.png'></div>";
    }
    animal = animal + 
        "</div>" +
        "</div>" +
        "<div class='column photo'>" +
        "<img class='thephoto' src='img/" + item["category"] + "/" + item["folder"] + "/photo.jpg'>" +
        "<img class='show' src='img/icon-hide.svg'>" + 
        "</div>" +
        "</div>" +
        "<p class='desc'>" + item["desc"] + "</p>" +
        "<p class='species'><span class='likely'>LIKELY SPECIES:</span>";
    item["similar"].forEach(function(similar){
        animal = animal + 
            " <a target='_blank' href='" + similar["link"] + "'>" + 
            similar["name"] + "</a>";
    });
    animal = animal + "</p>";
    animal = animal + "</div>";
    $('section.animals').append(animal);
});

// Turn species on and off (show/hide)
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

// Nav category selector
$('nav a[data-id!=""]').click(function() {
    if (!$ (this).hasClass( 'selected' )) {
        // Update nav buttons state
        $('.menu .button').removeClass('selected');
        $ (this).addClass( 'selected' );
        // Exclude or include animals div according to category
        var cat = $ (this).data('id');
        $( '.animal' ).each(function( i ) {
            if ( $ (this).data('id') == cat ) {
                $ (this).removeClass('excluded');
            } else {
                $ (this).addClass('excluded');
            }
        });
    }
});

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