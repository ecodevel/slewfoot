// Oganised by taxonomy, ref Birds New Zealand feild guide

var species = [
    // Dinornithiformes
    {
        "category": "birds",
        "name": "Moa",
        "subname": "Dinornis",
        "folder": "moa",
        "photos": [
            {"name":"a", "title":"Photo by Kane Fleury / Otago Museum"},
            {"name":"b", "title":"Dinornis robustus, Manawatū River. K. Wilson, \"Footprints of the moa\". Transactions of the Royal Society of New Zealand 45 (1912): plate 2"},
            {"name":"c", "title":"Photo by Ian Griffin / Otago Museum"},
            {"name":"d", "title":"Photo by Ian Griffin / Otago Museum"}
        ],
        "desc":"Up to 36cm long, three strong front-pointing toes. A small rear toe (unlike most other ratites) may be visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/upland-moa","name":"Upland moa"},
            {"link":"http://nzbirdsonline.org.nz/species/little-bush-moa","name":"Little bush moa"},
            {"link":"http://nzbirdsonline.org.nz/species/heavy-footed-moa","name":"Heavy-footed moa"},
            {"link":"http://nzbirdsonline.org.nz/species/mantells-moa","name":"Mantell's moa"},
            {"link":"http://nzbirdsonline.org.nz/species/crested-moa","name":"Crested moa"},
            {"link":"http://nzbirdsonline.org.nz/species/eastern-moa","name":"Eastern moa"},
            {"link":"http://nzbirdsonline.org.nz/species/stout-legged-moa","name":"Stout-legged moa"},
            {"link":"http://nzbirdsonline.org.nz/species/north-island-giant-moa","name":"North Island giant moa"},
            {"link":"http://nzbirdsonline.org.nz/species/south-island-giant-moa","name":"South Island giant moa"}
        ],
        "inatlink": null
    },
    // Kiwi
    {
        "category": "birds",
        "name": "Kiwi",
        "subname": "Apterygidae, Apteryx",
        "folder": "kiwi",
        "photos":[
            {"name":"a", "title":"Adult North Island Brown Kiwi. Photo by Lesley Baigent"},
            {"name":"b", "title":"Photo by Jordi Tablada"},
            {"name":"c", "title":"Juvenile ink print. Photo by Lesley Baigent"},
            {"name":"d", "title":"Probe hole of a North Island Brown Kiwi. Photo by Shaun Lee"}
        ],
        "desc":"Up to around 12cm long, no fourth (hind) toe unless very deep mud. Often associated with probe holes.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/north-island-brown-kiwi","name":"North Island brown kiwi"},
            {"link":"http://nzbirdsonline.org.nz/species/okarito-brown-kiwi","name":"Okarito brown kiwi"},
            {"link":"http://nzbirdsonline.org.nz/species/southern-brown-kiwi","name":"Southern brown kiwi"},
            {"link":"http://nzbirdsonline.org.nz/species/little-spotted-kiwi","name":"Little spotted kiwi"},
            {"link":"http://nzbirdsonline.org.nz/species/great-spotted-kiwi","name":"Great spotted kiwi"}
        ],
        "inatlink": null
    },
    // Gamebirds
    // Waterfowl
    {
        "category": "birds",
        "name":"Pateke",
        "subname":"Anas chlorotis, Brown Teal",
        "folder": "pateke",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"}
        ],
        "desc":"6cm in length. Short steps infront of each other. Shorter inner toe.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/brown-teal","name":"Pateke"},
        ],
        "inatlink": null
    },
    {
        "category": "birds",
        "name":"Mallard",
        "subname":"Anas platyrhynchos",
        "folder": "mallard",
        "photos":[
            {"name":"a", "title":"Photo by Jordi Tablada"},
            {"name":"b", "title":"Photo by Jordi Tablada"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "desc":"6-7cm in length with webbing often visible. Shorter steps than a Southern Black-backed gull.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/mallard","name":"Mallard"},
            {"link":"https://inaturalist.nz/taxa/410743-Anas-superciliosa-%C3%97-platyrhynchos","name":"Grey Duck × Mallard Hybrid"},
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=6930&verifiable=any"
    },
    {
        "category": "birds",
        "name":"Paradise shelduck",
        "subname":"Tadorna variegata, Pūtangitangi",
        "folder": "paradise-shelduck",
        "photos":[
            {"name":"a", "title":"Photo by Jordi Tablada"},
            {"name":"b", "title":"Photo by Jordi Tablada"},
            {"name":"c", "title":"Photo by Jordi Tablada"},
            {"name":"d", "title":"Photo by Jordi Tablada"}
        ],
        "desc":"7cm in length with webbing often visible. Shorter inner toe.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/paradise-shelduck","name":"Paradise shelduck"},
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=6803&project_id=animal-footprints-in-nz&subview=table&taxon_id=7072"
    },
    {
        "category": "birds",
        "name":"Black swan",
        "subname":"Cygnus atratus, kakīānau",
        "folder": "black-swan",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "desc":"15cm in length with webbing often visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/black-swan","name":"Black swan"},
        ],
    },
    {
        "category": "birds",
        "name":"Canada goose",
        "subname":"Branta canadensis",
        "folder": "canada-goose",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"}
        ],
        "desc":"10cm in length with webbing often visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/canada-goose","name":"Canada goose"},
        ],
    },
    // Grebes
    // Penguins
    {
        "category": "birds",
        "name":"Little penguin",
        "subname":"Kororā, Eudyptula minor",
        "folder": "little-penguin",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Jordi Tablada"}
        ],
        "desc":"5.5cm in length with chunky claws and visible heel. Note narrow angle of toes compared to the oystercatcher. Angle of all toes always less than 75&deg;. <a href='http://www.bluepenguin.org.nz/wp-content/uploads/Tracking-blue-penguin-tracks.pdf' target='_blank'>Detailed guide.</a>",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/little-penguin","name":"Little penguin"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=3817&verifiable=any"
    },
    {
        "category": "birds",
        "name":"Hoiho",
        "subname":"Yellow-eyed penguin, Megadyptes antipodes",
        "folder": "yellow-eyed-penguin",
        "photos":[
            {"name":"a", "title":"Photo by <a href=\"http://www.keaphotography.org\">Kimball Chen</a>"},
            {"name":"b", "title":"Photo by <a href=\"http://www.keaphotography.org\">Kimball Chen</a>"},
            {"name":"c", "title":"Photo by Ingrid Hutzler"}
        ],
        "desc":"13-14cm in length with claws and visible heel. Note narrow angle of toes (angle of all toes always less than 75&deg)",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/yellow-eyed-penguin","name":"Yellow-eyed penguin"}
        ],
    },
    // Albatrossses and Mollymawks
    // Fullmars, Prions, Petrels and shearwaters
    {
        "category": "birds",
        "name":"Diving petrel",
        "subname":"Pelecanoides",
        "folder": "diving-petrel",
        "photos":[
            {"name":"a", "title":"Whenua Hou Diving Petrel. Photo by <a href=\"https://www.facebook.com/FlyingPenguingForce/\">Flying Penguin Force</a>"},
            {"name":"b", "title":"Whenua Hou Diving Petrel. Photo by <a href=\"https://www.facebook.com/FlyingPenguingForce/\">Flying Penguin Force</a>"},
            {"name":"c", "title":"Whenua Hou Diving Petrel. Photo by <a href=\"https://www.facebook.com/FlyingPenguingForce/\">Flying Penguin Force</a>"}
        ],
        
        "desc":"About 5cm in length. Horizontal tarsus visible.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/common-diving-petrel","name":"Common diving petrel" },
            {"link":"http://nzbirdsonline.org.nz/species/south-georgian-diving-petrel","name":"South Georgian diving petrel" },
            {"link":"https://en.wikipedia.org/wiki/Whenua_Hou_diving_petrel","name":"Whenua Hou diving petrel" }
        ]
    },
        {
        "category": "birds",
        "name":"Grey-faced petrel",
        "subname":"Ōi, Pterodroma macroptera",
        "folder": "grey-faced-petrel",
        "photos":[
            {"name":"a", "title":"Grey-faced petrel. Piha. Photo by Jordi Tablada"},
            {"name":"b", "title":"Grey-faced petrel. Piha. Photo by Jordi Tablada"},
            {"name":"c", "title":"Grey-faced petrel. Piha. Photo by Jordi Tablada"},
            {"name":"d", "title":"Grey-faced petrel. Piha. Photo by Jordi Tablada"}
        ],
        
        "desc":"About 7cm in length. Horizontal tarsus visible, longer outer toe. <span class='note'>[More seabird prints needed]</span>",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/grey-faced-petrel","name":"Grey-faced petrel" },
        ]
    },
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
    {
        "category": "birds",
        "name":"Little Shag",
        "subname":"Little pied shag, little cormorant, kawau paka, Phalacrocorax melanoleucos",
        "folder": "little-shag",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        
        "desc":"6–7cm in length. Hind toe often visible. Webbing sometimes visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/little-shag","name":"Little Shag"}
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
        "desc":"11-12cm in length. More weight on toes, heal not always visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/white-faced-heron","name":"White-faced heron"},
            {"link":"http://nzbirdsonline.org.nz/species/reef-heron","name":"Reef heron"},
            {"link":"http://nzbirdsonline.org.nz/species/white-heron","name":"White heron"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=4929&verifiable=any"
    },
    
    {
        "category": "birds",
        "name":"Australasian bittern",
        "subname":"Matuku hūrepo, Botaurus poiciloptilus",
        "folder": "bittern",
        "photos":[
            {"name":"a", "title":"Photo by hudsonianjoe"},
            {"name":"b", "title":"Photo by hudsonianjoe"}
        ],
        "desc":"18-23cm in length (males larger). Inner toe longer than outer. <span class='note'>[More obersvations needed.]</span>",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/australasian-bittern","name":"Australasian bittern"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=5032&verifiable=any"
    },
    
    // Ibises and Spoonbills
   {
        "category": "birds",
        "name":"Royal Spoonbill",
        "subname":"Kōtuku ngutupapa",
        "folder": "spoonbill",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Left to right scapes through the print made by sweeps of the bill. Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "desc":"Around 14-15cm in length. Stronger footpad than a pukeko.<span class='note'> [Back toe mark 3cm longer when feeding in water?]</span>",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/royal-spoonbill","name":"Royal Spoonbill"}
        ]
    },
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
        "desc":"13-15cm in length depending on the size of the bird. Outer toe longer than inner.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/pukeko","name":"Pukeko"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=418530&verifiable=any"
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
        "desc":"15cm in length. <span class='note'>[Requires more photos to compare to pukeko.]</span>.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/south-island-takahe","name":"South Island takahe"}
        ],
        "inatlink": null
    },
    {
        "category": "birds",
        "name":"Weka",
        "subname":"Gallirallus australis",
        "folder": "weka",
        "photos":[
            {"name":"a", "title":"Photo by Jon Sullivan"},
            {"name":"b", "title":"Photo by Jon Sullivan"},
            {"name":"c", "title":"Photo by Jon Sullivan"}
        ],
        "desc":"About 8cm in length. <span class='note'>[A more precise meausrement needed]</span>",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/weka","name":"Weka"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=6803&project_id=animal-footprints-in-nz&taxon_id=436"
    },
    {
        "category": "birds",
        "name":"Banded rail",
        "subname":"Mioweka, Gallirallus philippensis",
        "folder": "banded-rail",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Jeremy Painting"},
            {"name":"d", "title":"Photo by Jeremy Painting"},
        ],
        "desc":"4-5cm in length, weight evenly distrubuted, longer middle toe than a stilt.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/banded-rail","name":"Banded rail"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=464857&verifiable=any"
    },
    // Snipes, Sandpipers, Godwits and allies
    {
        "category": "birds",
        "name":"Godwits",
        "subname":"Kuaka, Limosa",
        "folder": "godwit",
        "photos":[
            {"name":"a", "title":"Bar-tailed Godwit, Photo by Shaun Lee"},
            {"name":"b", "title":"Bar-tailed Godwit, Photo by Shaun Lee"},
            {"name":"c", "title":"Bar-tailed Godwit, Photo by Shaun Lee"},
            {"name":"d", "title":"Bar-tailed Godwit, Photo by Shaun Lee"}
        ],
        "desc":"5.5cm in length. Hind toe not always visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/bar-tailed-godwit","name":"Bar-tailed godwit"},
            {"link":"http://nzbirdsonline.org.nz/species/hudsonian-godwit","name":"Hudsonian godwit"},
            {"link":"http://nzbirdsonline.org.nz/species/black-tailed-godwit","name":"Black-tailed godwit"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=3946&verifiable=any"
    },
    {
        "category": "birds",
        "name":"Lesser knot",
        "subname":"Calidris canutus, red knot, huahou",
        "folder": "lesser-knot",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"}
        ],
        "desc":"3.7cm in length. Hind toe not always visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/lesser-knot","name":"Lesser knot"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=3845&verifiable=any"
    },
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
            {"name":"d", "title":"Variable Oystercatcher footprints and probe holes, Photo by Shaun Lee"}
        ],
        "desc":"5cm in length. Oystercatchers walk on their toes so heel not always visible. Toes more chunky than Spur-winged plover.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/south-island-pied-oystercatcher","name":"South Island Pied Oystercatcher"},
            {"link":"http://nzbirdsonline.org.nz/species/variable-oystercatcher","name":"Variable Oystercatcher"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=71325&verifiable=any"
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
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=71361&verifiable=any"
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
            {"name":"d", "title":"Northern New Zealand Dotterel print on Pakiri Beach. Photo by Denise Poyner"}
        ],
        
        "desc":"3cm in length with asymmetric toes. Dotterels walk on their toes so heel not often visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/new-zealand-dotterel","name":"New Zealand Dotterel"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=4829&verifiable=any"
    },
    {
        "category": "birds",
        "name":"Banded dotterel",
        "subname":"Tūturiwhatu, Charadrius bicinctus",
        "folder": "banded-dotterel",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        
        "desc":"2-2.5cm in length with asymmetric toes. Banded dotterels walk on their toes so heel not often visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/banded-dotterel","name":"Banded dotterel"}
        ]
    },
    {
        "category": "birds",
        "name":"Spur-winged plover",
        "subname":"Masked lapwing, Vanellus miles",
        "folder": "spur-winged-plover",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Jordi Tablada"},
            {"name":"d", "title":"Photo by Jordi Tablada"}
        ],
        
        "desc":"4cm in length with asymmetric toes. Toes slightly slimmer than oystercatcher. Walk on their toes so heel not always visible.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/spur-winged-plover","name":"Spur-winged plover"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=413584&verifiable=any"
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
            {"name":"a", "title":"Photo by Jeremy Painting"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Jordi Tablada"}
        ],
        "desc":"7cm in length with webbing on feet noticeable in soft sand.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/southern-black-backed-gull","name":"Southern black-backed gull"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=333759&verifiable=any"
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
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=144320&verifiable=any"
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
        "desc":"5cm in length with webbing usually visible, narrower and more asymetrical than a gull print.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/caspian-tern","name":"Caspian Tern"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=144537&verifiable=any"
    },
    {
        "category": "birds",
        "name":"White-fronted Tern",
        "subname":"Tara, Sterna striata",
        "folder": "white-fronted-tern",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Emily Roberts"}
        ],
        "desc":"2cm in length with webbing visible and middle toe elongated. Similar to the Caspian Tern but smaller.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/white-fronted-tern","name":"White-fronted Tern"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=4478&verifiable=any"
    },
    // Pidgeons and doves
    // Cockatoos, Parrots and parakeets
    {
        "category": "birds",
        "name":"Kākāpō",
        "subname":"Kakapo, Strigops habroptilus",
        "folder": "kakapo",
        "photos":[
            {"name":"a", "title":"Left foot. Note claw holes. Photo by Andrew Digby"},
            {"name":"b", "title":"Photo by <a href=\"https://www.facebook.com/FlyingPenguingForce/\">Flying Penguin Force</a>"},
            {"name":"c", "title":"Taken on Whenua Hou. Photo by <a href=\"https://www.leonberardphotography.co.nz\">Leon Berard</a>"}
        ],
        "desc":"11-12cm in length in distinctive K pattern. Larger and deeper than kea or kaka which are closer to 9cm long.",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/kakapo","name":"Kākāpō"}
        ],
        "inatlink": null
    },    
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
            {"name":"b", "title":"Walking. Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Jordi Tablada"},
            {"name":"d", "title":"Photo by Jordi Tablada"}
        ],
        "desc":"3cm in length. Back claw drags when walking.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/eurasian-skylark","name":"Eurasian Skylark"},
            {"link":"http://www.nzbirdsonline.org.nz/species/new-zealand-pipit","name":"Pipit"}
        ],
        "inatlink": null
    },
    // Reed-warblers
    // Grassbirds and allies
    // White-eyes
    // Swallows and Martins
    // Thrushes
    {
        "category": "birds",
        "name":"Eurasian blackbird",
        "subname":"Manu pango, Turdus merula",
        "folder": "blackbird",
        "photos":[
            {"name":"a", "title":"Photo by Jordi Tablada"},
            {"name":"b", "title":"Photo by Jordi Tablada"},
            {"name":"c", "title":"Photo by Jordi Tablada"}
        ],
        "desc":"4cm in length. Hoping and walking, back claw drags when walking.",
        "similar":[
            {"link":"http://www.nzbirdsonline.org.nz/species/eurasian-skylark","name":"Eurasian Skylark"},
            {"link":"http://www.nzbirdsonline.org.nz/species/new-zealand-pipit","name":"Pipit"}
        ],
        "inatlink": null
    },
    // Starlings and Mynas
    {    
    "category": "birds",
        "name":"Myna",
        "subname":"Common myna, Acridotheres tristis",
        "folder": "myna",
        "photos":[
            {"name":"a", "title":"Photo by Photo by Jordi Tablada"},
        ],
        "desc":"About 2cm in length. <span class='note'>[A more precise meausrement needed]</span>",
        "similar":[
            {"link":"http://nzbirdsonline.org.nz/species/common-myna","name":"Common myna"}
        ],
        "inatlink": null
    },
    // Old world sparrows
    // Pipits and Wagtails
    // Accentors
    // Finches
    // Buntings and new world sparrows
    
    // Mammals
    {
        "category": "mammals",
        "name":"New Zealand Fur Seal",
        "subname":"Kekeno, Arctocephalus forsteri",
        "folder": "seal",
        "photos":[
            {"name":"a", "title":"Photo by Adrian Riegen"},
            {"name":"b", "title":"Photo by Kath Dewar"},
            {"name":"c", "title":"Photo by Kath Dewar"},
            {"name":"d", "title":"Photo by Kath Dewar"}
        ],
        "desc":"Up to 1m wide, fore flipper marks much larger than smaller hind flippers.",
        "similar":[
            {"link": "https://en.wikipedia.org/wiki/Arctocephalus_forsteri", "name": "New Zealand Fur Seal"}
        ],
        "inatlink": "https://inaturalist.nz/observations?captive=any&place_id=any&project_id=2795&taxon_id=41752&verifiable=any",
    },
    {
        "category": "mammals",
        "name":"Wild European Rabbit",
        "subname":"Rāpeti, Oryctolagus cuniculus",
        "folder": "rabbit",
        "photos":[
            {"name":"a", "title":"All four feet of a small rabbit landing together. Photo by Shaun Lee"},
            {"name":"b", "title":"All four feet of a small rabbit landing together, running fast. Photo by Shaun Lee"},
            {"name":"c", "title":"Larger back feet. Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Emily Roberts"}
        ],
        "desc":"Hind feet much longer than fore feet. Length of hind feet not always obvious in sand if running.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/rabbit/","name":"Rabbit"},
            {"link":"http://www.pestdetective.org.nz/culprits/new-culprit-page-3/","name":"Juvenile brown hare"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=43095&verifiable=any"
    },
    {
        "category": "mammals",
        "name":"Brown Hare",
        "subname":"Hea, Lepus europaeus",
        "folder": "hare",
        "photos":[
            {"name":"a", "title":"Hind foot. Photo by Jon Sullivan"},
            {"name":"b", "title":"Fore foot. Photo by Jon Sullivan"},
            {"name":"c", "title":"Photo by Shaun Lee"}
        ],
        "desc":"Hind feet much longer than fore feet but land in front of forefeet.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/new-culprit-page-3/","name":"Brown hare"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=6803&project_id=animal-footprints-in-nz&taxon_id=43128"
    },
    {
        "category": "mammals",
        "name":"Cat",
        "subname":"Poti, Felis catus",
        "folder": "cat",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Emily Roberts"}
        ],
        "desc":"Heart-shaped central pad and four toe pads with retractable claws.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/cat/","name":"Cat"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=118552&verifiable=any"
    },
    {
        "category": "mammals",
        "name":"Dog",
        "subname":"Kuri, Canis lupus familiaris",
        "folder": "dog",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Emily Roberts"}
        ],
        "desc":"Large pads and claws visible. Variable in length.",
        "similar":[
            {"link":"https://www.kiwisforkiwi.org/resources/dogs-cats/","name":"Dog"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=47144&verifiable=any"
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
            {"name":"d", "title":"Snow substrate. Photo by Jon Sullivan"},
        ],
        "desc":"Five-toed fore-feet, different hind-feet, claw marks.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/possum/","name":"Possum"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=42808&verifiable=any"
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
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=43042&verifiable=any"
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
        ],
        "inatlink": null
    },
    {
        "category": "mammals",
        "name":"Ship rat",
        "subname":"Rattus rattus, Black rat",
        "folder": "ship-rat",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Emily Roberts"}
        ],
        "desc":"Four toes on forefoot, five on hindfoot. 1-2cm wide.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/ship-rat/","name":"Ship rat"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=44575&verifiable=any"
    },
    {
        "category": "mammals",
        "name":"Norway rat",
        "subname":"Rattus norvegicus, Brown rat",
        "folder": "norway-rat",
        "photos":[
            {"name":"a", "title":"Photo by Jeremy Painting"}
        ],
        "desc":"Four toes on forefoot, five on hindfoot. 1.5-2.5cm wide.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/norway-rat/","name":"Norway rat"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=44576&verifiable=any"
    },
    {
        "category": "mammals",
        "name":"Stoat",
        "subname":"Mustela erminea",
        "folder": "stoat",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Emily Roberts"},
            {"name":"c", "title":"Photo by Emily Roberts"},
            {"name":"d", "title":"Photo by Emily Roberts"}
        ],
        "desc":"Five toes each foot. Claws visible.",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/stoat/","name":"Stoat"},
            {"link":"http://www.pestdetective.org.nz/culprits/weasel/","name":"Weasel"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=41770&verifiable=any"
    },
    {
        "category": "mammals",
        "name":"Goat",
        "subname":"Koati, Capra hircus",
        "folder": "goat",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Jordi Tablada"}
        ],
        "desc":"Cleaved hooves with pointed, slightly in-curved tips – Pest Detective",
        "similar":[
            {"link":"http://www.pestdetective.org.nz/culprits/goat/","name":"Goat"}
        ],
        "inatlink": null
    },
    
    // Other
    {
        "category": "other",
        "name":"Purple rock crab",
        "subname":"Leptograpsus variegatus, swift-footed shore crab, Pāpaka nui",
        "folder": "purple-rock-crab",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
             {"name":"b", "title":"Photo by Jacqui Geux"},
              {"name":"c", "title":"Photo by Jacqui Geux"},
               {"name":"d", "title":"Photo by Jacqui Geux"}
        ],
        "desc":"More observations required",
        "similar":[
            {"link":"https://inaturalist.nz/guide_taxa/355911","name":"Purple rock crab"}
        ],
        "inatlink": null
    },
    {
        "category": "other",
        "name":"Large sand scarab",
        "subname":"Pericoptus truncatus, Ngungutawa",
        "folder": "large-sand-scarab",
        "photos":[
            {"name":"a", "title":"Photo by Emily Roberts"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Shaun Lee"},
            {"name":"d", "title":"Photo by Shaun Lee"}
        ],
        "desc":"Leaves distinctive trails at night. Can be found hidding in the sand during the day at the end of their tracks.",
        "similar":[
            {"link":"https://inaturalist.nz/taxa/408947-Pericoptus-truncatus","name":"Large sand scarab"}
        ],
        "inatlink": "https://inaturalist.nz/observations?place_id=any&project_id=animal-footprints-in-nz&taxon_id=408947&verifiable=any"
    },
    {
        "category": "other",
        "name":"Sea and freshwater snails",
        "subname":"Caenogastropod Snails",
        "folder": "sea-and-freshwater-snails",
        "photos":[
            {"name":"a", "title":"Photo by Shaun Lee"},
            {"name":"b", "title":"Photo by Shaun Lee"},
            {"name":"c", "title":"Photo by Jordi Tablada"},
            {"name":"d", "title":"Photo by Jordi Tablada"}
        ],
        "desc":"Spaghetti shaped trails, large range in size.",
        "similar":[
            {"link":"https://inaturalist.nz/taxa/246139-Caenogastropoda","name":"Caenogastropod Snails"}
        ],
        "inatlink": null
    },
    {
        "category": "other",
        "name":"Gecko",
        "subname":"Mokomoko",
        "folder": "gecko",
        "photos":[
            {"name":"a", "title":"Thick toes pads with horizontal lines. Photo by Shaun Lee"},
            {"name":"b", "title":"Note size difference betwwen front and back feet. Tail drag mark. Photo by Shaun Lee"}
        ],
        "desc":"Size varies a lot. Horizontal lines on thick toe pads.",
        "similar":[
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/dactylocnemis-pacificus","name":"Pacific gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/hoplodactylus-delcourti","name":"Kawekaweau gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/hoplodactylus-duvaucelii","name":"Duvaucel's Gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/mokopirirakau-roys-peak","name":"Orange-spotted gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/mokopirirakau-southern-north-island","name":"Ngahere gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/mokopirirakau-cryptozoicus","name":"Takitimu gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/mokopirirakau-granulatus","name":"Forest gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/mokopirirakau-kahutarae","name":"Black-eyed gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/mokopirirakau-nebulosus","name":"Cloudy gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/naultinus-north-cape","name":"Aupori green gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/naultinus-elegans","name":"Elegant gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/naultinus-gemmeus","name":"Jewelled gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/naultinus-grayii","name":"Northland green gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/naultinus-manukanus","name":"Marlborough green gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/naultinus-punctatus","name":"Barking gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/naultinus-rudis","name":"Rough gecko"},  
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/naultinus-stellatus","name":"Starred gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/naultinus-tuberculatus","name":"West Coast green gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/toropuku-stephensi","name":"Northern striped gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/tukutuku-rakiurae","name":"Harlequin gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/woodworthia-brunnea","name":"Waitaha gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/woodworthia-chrysosiretica","name":"Goldstripe gecko"},
            {"link":"https://www.reptiles.org.nz/herpetofauna/native/woodworthia-maculata","name":"Raukawa gecko"}

        ],
        "inatlink": null
    },
    {
        "category": "other",
        "name":"Skink",
        "subname":"Oligosoma, Mokomoko",
        "folder": "skink",
        "photos":[
            {"name":"a", "title":"Egg laying skink, Photo by Shaun Lee"},
            {"name":"b", "title":"Egg laying skink, Photo by Shaun Lee"},
            {"name":"c", "title":"Skink, Photo by Shaun Lee"},
            {"name":"d", "title":"Skink footprints with tail drag markings , Photo by Shaun Lee"}
        ],
        "desc":"Size varies a lot. Each species has distinctive markings.",
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
        ],
        "inatlink": null
    } // no comma on last item

];