var species = [
    {
        "category": "birds",
        "name":"Oystercatcher",
        "subname":"Torea, Haematopus", 
        "scale":"scale", 
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Emily Harris"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "photo":"photo",
        "desc":"5cm in length. Oystercatchers walk on their toes so heel not always visible. Toes more chunky than Spur-winged plover.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/south-island-pied-oystercatcher","name":"South Island Pied Oystercatcher"},
            {"link":"http://nzbirdsonline.org.nz/species/variable-oystercatcher","name":"Variable Oystercatcher"}
        ]
    },
    {
        "category": "birds",
        "name":"Stilt",
        "subname":"Himantopus", 
        "scale":"scale", 
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "photo":"photo",
        "desc":"4cm in length. Slimmer toes than oystercatcher and plover.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/pied-stilt","name":"Pied Stilt"},
            {"link":"http://nzbirdsonline.org.nz/species/black-stilt","name":"Black Stilt"}
        ]
    },
    {
        "category": "birds",
        "name":"Dotterel",
        "subname":"Tūturiwhatu, Charadrius", 
        "scale":"scale", 
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"}
        ],
        "photo":"photo",
        "desc":"3cm in length with asymmetric toes. Dotterels walk on their toes so heel not often visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/new-zealand-dotterel","name":"New Zealand Dotterel"}
        ]
    }
];

$(function() { // Init jQuery

species.forEach(function(item){
    var aname =  item["name"].toLowerCase();
    var animal = "<div class='animal off'>" +
        "<h1>" + item["name"] + "</h1>" +
        "<h4>" + item["subname"] + "</h4>" +
        "<div class='animal-pics'>" +
        "<div class='column'><img src='img/" + item["category"] + "/" + aname + "/scale.png'></div>" +
        "<div class='column'>" +
        "<div class='gallery'>";
    var count_photos = 0;
    item["photos"].forEach(function(photo){
        animal = animal + "<div><a href='img/" + item["category"] + "/" + aname + "/" + photo["name"] + ".jpg' title='" + photo["title"]  + "'><img src='img/birds/" + aname + "/-" + photo["name"] + ".jpg' ></a></div>";
        count_photos = count_photos + 1;
    });
    for (var i = 4; i > count_photos; i--) {
        animal = animal + "<div><img src='img/blank.png'></div>";
    }
    animal = animal + 
        "</div>" +
        "</div>" +
        "<div class='column photo'>" +
        "<img class='thephoto' src='img/" + item["category"] + "/" + aname + "/" + item["photo"] + ".jpg'>" +
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