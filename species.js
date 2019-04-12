// Oganised by taxonomy, ref Birds New Zealand feild guide

var species = [
    // Kiwi
    {
        "category": "birds",
        "name":"Kiwi",
        "subname":"Apterygidae, Apteryx",
        "folder": "kiwi",
        "photos":[
            {"name":"a", "title":"Photo by Jordi Tablada"},
            {"name":"b", "title":"Photo by Jordi Tablada"},
            {"name":"c", "title":"Photo by Jordi Tablada"},
        ],
        "desc":"11cm long, no fourth (hind) toe unless very deep mud. Often associated with probe holes.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/north-island-brown-kiwi","name":"North Island brown kiwi"},
            {"link":"http://nzbirdsonline.org.nz/species/okarito-brown-kiwi","name":"Okarito brown kiwi"},
            {"link":"http://nzbirdsonline.org.nz/species/southern-brown-kiwi","name":"Southern brown kiwi"},
            {"link":"http://nzbirdsonline.org.nz/species/little-spotted-kiwi","name":"Little spotted kiwi"},
            {"link":"http://nzbirdsonline.org.nz/species/great-spotted-kiwi","name":"Great spotted kiwi"}
        ]
    },
    // Gamebirds
    // Waterfowl
    // Grebes
    // Penguins
    // Albatrossses and Mollymawks
    // Fullmars, Prions, Petrels and shearwaters
    // Storm ptrels
    // Tropicbirds
    // Pelicans
    // Gannets and boobies
    // Shags
    {
        "category": "birds",
        "name":"Pied Shag",
        "subname":"Kawau, Phalacrocorax varius",
        "folder": "pied-shag",
        "photos":[
            {"name":"a", "title":"Photo by Eliane Lagnaz"},
            {"name":"b", "title":"Photo by Eliane Lagnaz"},
            {"name":"c", "title":"Photo by Eliane Lagnaz"}
        ],
        
        "desc":"9cm in length. More weight on the outer toe.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/pied-shag","name":"Pied Shag"}
        ]
    },
    // Darters
    // Frigatebirds
    // Herons, Egrets and Bitterns
   {
        "category": "birds",
        "name":"Heron",
        "subname":"Egretta, Matuku moana",
        "folder": "white-faced-heron",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Jordi Tablada"}
        ],
        "desc":"11cm in length? Needs checking. More weight on toes, heal not always visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/white-faced-heron","name":"White-faced heron"},
            {"link":"http://nzbirdsonline.org.nz/species/reef-heron","name":"Reef heron"}
        ]
    },
    // Ibises and Spoonbills
    // Raptors
    // Rails, Gallinules and Coots
   {
        "category": "birds",
        "name":"Pukeko",
        "subname":"Australasian swamphen, Porphyrio melanotus",
        "folder": "pukeko",
        "photos":[
            {"name":"a", "title":"Photo by Jordi Tablada"},
            {"name":"b", "title":"Photo by Jordi Tablada"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Jordi Tablada"},
        ],
        "desc":"13-15cm in length depending on the size of the bird.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/pukeko","name":"Pukeko"}
        ]
    },
    {
        "category": "birds",
        "name":"Takahe",
        "subname":"Notornis, Porphyrio hochstetteri",
        "folder": "takahe",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"}
        ],
        "desc":"15cm in length, we need more photos to compare to pukeko.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/south-island-takahe","name":"South Island takahe"}
        ]
    },
    {
        "category": "birds",
        "name":"Banded rail",
        "subname":"Mioweka, Gallirallus philippensis",
        "folder": "banded-rail",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"},
        ],
        "desc":"4-5cm in length, weight evenly distrubuted, longer middle toe than a stilt.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/banded-rail","name":"Banded rail"}
        ]
    },
    // Snipes, Sandpipers, Godwits and allies
    // Oystercatchers
    {
        "category": "birds",
        "name":"Oystercatcher",
        "subname":"Torea, Haematopus",
        "folder": "oystercatcher",
        "photos":[
            {"name":"a", "title":"South Island Pied Oystercatcher, Photo by Shaun Lee"},
            {"name":"b", "title":"South Island Pied Oystercatcher, Photo by Shaun Lee"},
            {"name":"c", "title":"Variable Oystercatcher, Photo by Shaun Lee"},
            {"name":"d", "title":"Variable Oystercatcher, Photo by Shaun Lee"}
        ],
        "desc":"5cm in length. Oystercatchers walk on their toes so heel not always visible. Toes more chunky than Spur-winged plover.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/south-island-pied-oystercatcher","name":"South Island Pied Oystercatcher"},
            {"link":"http://nzbirdsonline.org.nz/species/variable-oystercatcher","name":"Variable Oystercatcher"}
        ]
    },
    // Stilts and Avocets
    {
        "category": "birds",
        "name":"Stilt",
        "subname":"Himantopus",
        "folder": "stilt",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "desc":"4cm in length. Slimmer toes than oystercatcher and plover.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/pied-stilt","name":"Pied Stilt"},
            {"link":"http://nzbirdsonline.org.nz/species/black-stilt","name":"Black Stilt"}
        ]
    },
    // Plovers, Dotterels and Lapwings
    {
        "category": "birds",
        "name":"Dotterel",
        "subname":"Tūturiwhatu, Charadrius Obscurus",
        "folder": "dotterel",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        
        "desc":"3cm in length with asymmetric toes. Dotterels walk on their toes so heel not often visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/new-zealand-dotterel","name":"New Zealand Dotterel"}
        ]
    },
    // Pratincoles and Coursers
    // Skuas
    // Gulls
    {
        "category": "birds",
        "name":"Southern black-backed gull",
        "subname":"Karoro, Kelp gull, Larus dominicanus",
        "folder": "southern-black-backed-gull",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Jordi Tablada"}
        ],
        "desc":"7cm in length with webbing on feet noticeable in soft sand.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/southern-black-backed-gull","name":"Southern black-backed gull"}
        ]
    },
    {
        "category": "birds",
        "name":"Gull",
        "subname":"Larus, Red-billed gull or Black-billed gull, Tarāpunga or Tarāpuka",
        "folder": "gull",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "desc":"4.5cm in length with webbing visible in soft sand. Smaller prints than black-backed gull.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/red-billed-gull","name":"Red-billed gull"},
            {"link":"http://www.nzbirdsonline.org.nz/species/black-billed-gull","name":"Black-billed gull"}
        ]
    },
    // Noddies and Terns
    {
        "category": "birds",
        "name":"Caspian Tern",
        "subname":"Taranui, Hydroprogne caspia",
        "folder": "caspian-tern",
        "photos":[
            {"name":"a", "title":"Photo by Jordi Tablada"},
            {"name":"b", "title":"Photo by Jordi Tablada"},
            {"name":"c", "title":"Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "desc":"5cm in length with webbing usyually visible, narrower and more asymetrical than a gull print.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/caspian-tern","name":"Caspian Tern"}
        ]
    },
    // Pidgeons and doves
    // Cockatoos, Parrots and parakeets
    // Cuckoos
    // Owls
    // Swifts
    // Kingfishers
    // Rollers
    // Wrens
    // Wattlebirds
    // Stitchbird
    // Piopio
    // Warblers
    // Honeyeaters
    // Cuckoo-shrikes and Trillers
    // Bulbuls
    // Whisters and allies
    // Woodswallows
    // Fantails
    // Crows and Jays
    // Monarch flycatcher
    // Robins
    // Larks
    {
        "category": "birds",
        "name":"Skylark or Pipit",
        "subname":"Alauda arvensis or Anthus novaeseelandiae",
        "folder": "skylark",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Walking. Photo by Shaun Lee"}
        ],
        "desc":"3cm in length. Back claw drags when walking.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/eurasian-skylark","name":"Eurasian Skylark"},
            {"link":"http://www.nzbirdsonline.org.nz/species/new-zealand-pipit","name":"Pipit"}
        ]
    },
    // Reed-warblers
    // Grassbirds and allies
    // White-eyes
    // Swallows and Martins
    // Thrushes
    // Starlings and Mynas
    // Old world sparrows
    // Pipits and Wagtails
    // Accentors
    // Finches
    // Buntings and new world sparrows
    
    // Mammals
    {
        "category": "mammals",
        "name":"Wild European Rabbit",
        "subname":"Rāpeti, Oryctolagus cuniculus",
        "folder": "rabbit",
        "photos":[
            {"name":"a", "title":"All four feet of a small rabbit landing together. Photo by Shaun Lee"},
            {"name":"b", "title":"All four feet of a small rabbit landing together, running fast. Photo by Shaun Lee"},
        ],
        "desc":"Back feet much longer than front feet. Length of back feet not always obvious in sand if running.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/rabbit/","name":"Rabbit"}
        ]
    },
    {
        "category": "mammals",
        "name":"Possum",
        "subname":"Trichosurus vulpecula",
        "folder": "possum",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Emily Roberts"},
        ],
        "desc":"Five-toed fore-feet, different hind-feet, claw marks.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/possum/","name":"Possum"}
        ]
    },
    {
        "category": "mammals",
        "name":"Hedgehog",
        "subname":"Erinaceus europaeus occidentalis",
        "folder": "hedgehog",
        "photos":[
            {"name":"a", "title":"Left front foot. Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Emily Roberts"}
        ],
        "desc":"Hedgehog toe pads are larger and closer to the central pad compared with rat or ferret prints. - http://www.landcareresearch.co.nz",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/hedgehog/","name":"Hedgehog"}
        ]
    },
    {
        "category": "mammals",
        "name":"Mouse",
        "subname":"Mus musculus",
        "folder": "mouse",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"}
        ],
        "desc":"Four toes on forefoot, five on hindfoot. 8mm wide can look like scattered dots.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/mouse/","name":"Mouse"}
        ]
    },
    
    // Other
    {
        "category": "other",
        "name":"Large Sand Scarab",
        "subname":"Pericoptus truncatus, Ngungutawa",
        "folder": "large-sand-scarab",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "desc":"Leaves distinctive trails at night. Can be found hidding in the sand during the day at the end of their tracks.",
        "similar":[
            {"link":"https://inaturalist.nz/taxa/408947-Pericoptus-truncatus","name":"Large Sand Scarab"}
        ]
    },
    {
        "category": "other",
        "name":"Skink",
        "subname":"Oligosoma, Mokomoko",
        "folder": "skink",
        "photos":[
            {"name":"a", "title":"Egg laying skink, Photo by Shaun Lee"},
            {"name":"b", "title":"Egg laying skink, Photo by Shaun Lee"},
            {"name":"c", "title":"Skink, Photo by Shaun Lee"}
        ],
        "desc":"Most species are 3-6mm in length. Each species has distinctive markings.",
        "similar":[
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-alani","name":"Robust skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-grande","name":"Grand skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-homalonotum","name":"Chevron skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-macgregori","name":"McGregor's skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-oliveri","name":"Marbled skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-ornatum","name":"Ornate skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-otagense","name":"Otago skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-pikitanga","name":"Sinbad skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-smithi","name":"Shore skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-suteri","name":"Egg laying skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligosoma-whitakeri","name":"Whitaker's skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/oligososma-aeneum","name":"Copper skink"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/non-native/lampropholis-delicata","name":"Plague skink"}
        ]
    } // no comma on last item

];