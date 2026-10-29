/**
 * 7 Wonders of the World Explorer — Gamility
 * Complete Encyclopedic Dataset, Leaflet Mapping, Chronology & Trivia Challenge
 */

(function () {
  'use strict';

  // ==========================================================================
  // 1. DATASET: 21 LEGENDARY WONDERS OF THE WORLD
  // ==========================================================================
  const WONDERS_DATA = [
    // ------------------------------------------------------------------------
    // NEW 7 WONDERS (VOTED 2007)
    // ------------------------------------------------------------------------
    {
      id: 'great_wall',
      category: 'new7',
      categoryLabel: 'New 7 Wonders',
      title: 'Great Wall of China',
      nativeName: '万里长城 • "Ten-Thousand-Mile Long Wall"',
      continent: 'Asia',
      location: 'Northern China (Shanxi, Hebei, Beijing)',
      year: '7th Century BC – 1644 AD',
      timelineYear: -221,
      civilization: 'Qin, Han & Ming Dynasties',
      status: 'Standing / Protected',
      builder: 'Emperor Qin Shi Huang & Ming Architects',
      materials: 'Tamped Earth, Brick, Granite & Cut Limestone',
      dimensions: 'Total Length 21,196 km (13,171 miles) • Avg Height 6–8 m',
      coordinates: [40.4319, 116.5704],
      coordText: '40.4319° N, 116.5704° E',
      image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/23/The_Great_Wall_of_China_at_Jinshanling-edit.jpg/3840px-The_Great_Wall_of_China_at_Jinshanling-edit.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      extract: 'The Great Wall of China is a colossal system of military fortifications built across historical northern borders to defend against nomadic incursions from the Eurasian Steppe.',
      storyOrigin: 'Initial defensive ramparts were erected as early as the 7th century BC by rival warring states. Following China\'s first unification in 221 BC, the first Emperor Qin Shi Huang ordered the walls joined into a contiguous fortress system. Over successive millennia, the Ming Dynasty transformed the earth walls into the legendary stone and brick crenellated battlements seen today.',
      storyEngineering: 'Engineers utilized sticky rice mortar mixed with slaked lime, creating a chemical bond so durable that weeds cannot sprout through the joints. Watchtowers were spaced within double archery range (150–200 m) so defenders could provide overlapping crossfire, and beacon towers communicated military emergencies over 1,000 km in mere hours using smoke by day and fire by night.',
      storyTrivia: 'Contrary to the popular myth, the Great Wall cannot be easily seen from low Earth orbit without specialized optical magnification. It is composed of multiple overlapping wall sections, trenches, and natural barriers rather than a single unbroken line.'
    },
    {
      id: 'petra',
      category: 'new7',
      categoryLabel: 'New 7 Wonders',
      title: 'Petra',
      nativeName: 'البتراء • Raqmu • The "Rose City"',
      continent: 'Asia',
      location: 'Ma\'an Governorate, Southern Jordan',
      year: 'c. 312 BC – 106 AD',
      timelineYear: -312,
      civilization: 'Nabataean Kingdom',
      status: 'Ruins / Protected',
      builder: 'King Aretas IV & Nabataean Master Sculptors',
      materials: 'Natural Rose-Red Sandstone Bedrock',
      dimensions: 'Site spans 264 km² • Al-Khazneh Facade: 39.5 m High x 25 m Wide',
      coordinates: [30.3285, 35.4444],
      coordText: '30.3285° N, 35.4444° E',
      image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e8/Al_Deir_Petra.JPG/3840px-Al_Deir_Petra.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      extract: 'Carved directly into deep rose-colored sandstone canyon cliffs, Petra was the bustling desert metropolis and trade oasis connecting incense, silk, and spice routes.',
      storyOrigin: 'The Nabataeans, nomadic Arabian pastoralists, established Petra in the 4th century BC at a strategic nexus connecting Egypt, Arabia, and the Levant. By monopolizing frankincense and myrrh caravans, the desert kingdom amassed extraordinary wealth, carving monumental Hellenistic facades into sheer cliffs before being annexed into the Roman Empire in 106 AD.',
      storyEngineering: 'In an arid climate receiving less than 150 mm of annual rainfall, Nabataean hydraulic engineers built an ingenious network of terracotta water conduits, cisterns, dams, and flood bypass diversion tunnels through the Siq. This allowed a desert city of 30,000 inhabitants to enjoy continuous freshwater, gardens, and fountains.',
      storyTrivia: 'The iconic Treasury (Al-Khazneh) gets its name from local Bedouin legend that Egyptian pharaohs concealed treasures in the ornamental stone urn atop the second level. Bullet marks remain visible on the urn from Bedouins trying to crack it open—though it is carved from solid stone.'
    },
    {
      id: 'colosseum',
      category: 'new7',
      categoryLabel: 'New 7 Wonders',
      title: 'Colosseum',
      nativeName: 'Amphitheatrum Flavium • Flavian Amphitheatre',
      continent: 'Europe',
      location: 'Rome, Lazio, Italy',
      year: '72 AD – 80 AD',
      timelineYear: 72,
      civilization: 'Roman Empire (Flavian Dynasty)',
      status: 'Standing / Protected',
      builder: 'Emperors Vespasian & Titus',
      materials: 'Travertine Limestone, Tuff Stone, Roman Pozzolana Concrete',
      dimensions: 'Length 189 m • Width 156 m • Height 48 m • Capacity 50,000–80,000',
      coordinates: [41.8902, 12.4922],
      coordText: '41.8902° N, 12.4922° E',
      image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/3840px-Colosseo_2020.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      extract: 'The largest amphitheatre ever constructed in antiquity, the Colosseum seated 65,000 spectators for gladiatorial contests, battle recreations, and theatrical spectacles.',
      storyOrigin: 'Commissioned by Emperor Vespasian in 72 AD on the site of Nero\'s Golden House lake, the monument was designed to restore public land to Roman citizens. Financed by war spoils from the Siege of Jerusalem, the amphitheatre opened in 80 AD with 100 days of grand inaugural games hosted by Vespasian’s son, Titus.',
      storyEngineering: 'The structure pioneered the revolutionary use of volcanic pozzolana concrete and barrel vaults, allowing it to withstand enormous seismic loads. A massive subterranean staging labyrinth—the hypogeum—featured 80 vertical trapdoor elevators and pulleys operated by hundreds of stagehands to hoist gladiators, scenery, and wild beasts directly onto the sand arena.',
      storyTrivia: 'Sailors from the Roman Imperial fleet at Misenum were stationed at the top of the Colosseum to operate the Velarium—a colossal retractable canvas awning spanning 240 masts to shield spectators from rain and the Mediterranean sun.'
    },
    {
      id: 'chichen_itza',
      category: 'new7',
      categoryLabel: 'New 7 Wonders',
      title: 'Chichén Itzá',
      nativeName: 'Chi\'ch\'èen Ìitsha\' • "At the mouth of the well of the Itza"',
      continent: 'Americas',
      location: 'Tinúm Municipality, Yucatán, Mexico',
      year: 'c. 600 AD – 1200 AD',
      timelineYear: 600,
      civilization: 'Maya Civilization (Terminal Classic Period)',
      status: 'Standing / Protected',
      builder: 'Itza Maya Priests & Toltec Architects',
      materials: 'Hand-carved Limestone Bedrock',
      dimensions: 'Temple of Kukulcán: Height 30 m (98 ft) • Base 55.3 m',
      coordinates: [20.6843, -88.5678],
      coordText: '20.6843° N, 88.5678° W',
      image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Chichen_Itza_3.jpg/3840px-Chichen_Itza_3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      extract: 'A focal ceremonial and political capital of the Maya empire, Chichén Itzá reflects the profound astronomical alignments, math, and acoustics of Mesoamerican civilization.',
      storyOrigin: 'Thriving from 600 to 1200 AD near natural sacred sinkholes (cenotes), Chichén Itzá became the primary regional center of the Yucatán Peninsula. The city was dedicated to Kukulcán, the Feathered Serpent deity, integrating intricate Maya cosmology with Toltec military iconography.',
      storyEngineering: 'The central pyramid, El Castillo (Temple of Kukulcán), is a physical stone calendar. Each of its four staircases has 91 steps; combined with the top platform, they total exactly 365 steps—one for each day of the solar year. During the spring and autumn equinoxes, the afternoon sun casts an undulating shadow resembling a 100-foot serpent slithering down the balustrade to join its stone head at the base.',
      storyTrivia: 'The Great Ball Court is the largest in the Americas (166 by 68 meters). Its acoustic design is so precise that a whisper at one end can be clearly heard 150 meters away at the other, and a single hand clap at the base of El Castillo echoes back as the distinct chirping call of the sacred Quetzal bird.'
    },
    {
      id: 'machu_picchu',
      category: 'new7',
      categoryLabel: 'New 7 Wonders',
      title: 'Machu Picchu',
      nativeName: 'Machu Pikchu • "Old Peak" in Quechua',
      continent: 'Americas',
      location: 'Urubamba Province, Cusco Region, Peru',
      year: 'c. 1450 AD – 1472 AD',
      timelineYear: 1450,
      civilization: 'Inca Empire',
      status: 'Standing / Protected',
      builder: 'Inca Emperor Pachacuti',
      materials: 'Polished Dry-Stone Granite (Ashlar Masonry)',
      dimensions: 'Altitude 2,430 m (7,970 ft) • Spans 32,592 hectares',
      coordinates: [-13.1631, -72.5450],
      coordText: '13.1631° S, 72.5450° W',
      image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bb/Machu_Picchu%2C_2023_%28012%29.jpg/3840px-Machu_Picchu%2C_2023_%28012%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      extract: 'Perched on a cloud-shrouded Andean ridge 2,430 meters above sea level, Machu Picchu is the crowning architectural masterpiece of the Inca Empire.',
      storyOrigin: 'Constructed around 1450 AD under the visionary rule of Inca Emperor Pachacuti as a royal country estate and religious sanctuary, the citadel was inhabited for barely a century. It was abandoned during the Spanish conquest of the Inca Empire but remained hidden from the conquistadors until American explorer Hiram Bingham brought it to global prominence in 1911.',
      storyEngineering: 'The Inca built the entire complex without mortar, wheels, or iron tools, utilizing ashlar masonry where massive granite stones were carved to interlock with microscopic precision—so tightly that a blade of grass cannot pass between them. During earthquakes, the interlocking stones dance in place and resettle, making the citadel virtually earthquake-proof.',
      storyTrivia: 'Over 60% of the engineering work at Machu Picchu is hidden underground. To prevent torrential Andean mudslides, the Inca laid deep foundations of gravel and stone terraces that doubled as advanced agricultural and drainage systems.'
    },
    {
      id: 'taj_mahal',
      category: 'new7',
      categoryLabel: 'New 7 Wonders',
      title: 'Taj Mahal',
      nativeName: 'تاج محل • "Crown of the Palace"',
      continent: 'Asia',
      location: 'Agra, Uttar Pradesh, India',
      year: '1631 AD – 1653 AD',
      timelineYear: 1632,
      civilization: 'Mughal Empire',
      status: 'Standing / Intact',
      builder: 'Emperor Shah Jahan & Ustad Ahmad Lahori',
      materials: 'Translucent Makrana White Marble, Jasper, Jade, Turquoise',
      dimensions: 'Central Dome Height 73 m (240 ft) • 42-Acre Complex',
      coordinates: [27.1751, 78.0421],
      coordText: '27.1751° N, 78.0421° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Taj_Mahal_%28Edited%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'An ivory-white marble mausoleum on the banks of the Yamuna River, the Taj Mahal is globally celebrated as the jewel of Mughal art and the ultimate monument to eternal love.',
      storyOrigin: 'Commissioned in 1631 by Mughal Emperor Shah Jahan to honor the memory of his beloved chief empress, Mumtaz Mahal, who died during childbirth. Over 20,000 stone carvers, calligraphers, and gem cutters from across India, Persia, and Central Asia labored for over two decades under master architect Ustad Ahmad Lahori to complete the paradise garden mausoleum.',
      storyEngineering: 'The monument embodies bilateral symmetry along its central axis. The four surrounding minarets (40 m tall) were deliberately constructed leaning slightly outward (around 2 degrees) to ensure that in the event of a catastrophic earthquake, they would collapse away from the central marble dome rather than crushing Mumtaz’s tomb chamber.',
      storyTrivia: 'The Makrana marble changes color dynamically depending on the time of day and moonlight—appearing soft blush pink at dawn, brilliant radiant white in midday sun, and luminous milky golden-blue under a full moon.'
    },
    {
      id: 'christ_redeemer',
      category: 'new7',
      categoryLabel: 'New 7 Wonders',
      title: 'Christ the Redeemer',
      nativeName: 'Cristo Redentor',
      continent: 'Americas',
      location: 'Corcovado Mountain, Rio de Janeiro, Brazil',
      year: '1922 AD – 1931 AD',
      timelineYear: 1922,
      civilization: 'Republic of Brazil',
      status: 'Standing / Intact',
      builder: 'Heitor da Silva Costa & Paul Landowski',
      materials: 'Reinforced Concrete Faced with Millions of Soapstone Tiles',
      dimensions: 'Statue Height 30 m (98 ft) • Pedestal 8 m • Arm Span 28 m',
      coordinates: [-22.9519, -43.2105],
      coordText: '22.9519° S, 43.2105° W',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Christ_the_Redeemer_-_Cristo_Redentor.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'Towering 710 meters above Rio de Janeiro from the summit of Corcovado Mountain, this monumental Art Deco statue of Jesus Christ extends open arms over the city in a perpetual blessing of peace.',
      storyOrigin: 'Proposed in the 1920s by the Catholic Circle of Rio as a monument to national faith and Brazilian independence, the design was selected via a national competition. Built under the supervision of civil engineer Heitor da Silva Costa, with the head and hands sculpted in clay by French-Polish artist Paul Landowski in Paris, the statue was formally inaugurated on October 12, 1931.',
      storyEngineering: 'Erected on a razor-thin mountain peak subjected to winds exceeding 150 km/h, the statue was constructed using reinforced concrete clad with a protective mosaic of over 6 million triangular soapstone tiles. Soapstone was selected because it is soft enough to carve easily, yet highly resilient to harsh marine salt air and temperature extremes.',
      storyTrivia: 'Because of its exposed position at the summit of Corcovado, Christ the Redeemer is struck by lightning an average of 3 to 6 times every year. During an intense lightning storm in January 2014, a direct strike chipped the tip of the statue\'s right thumb.'
    },

    // ------------------------------------------------------------------------
    // 7 WONDERS OF THE ANCIENT WORLD
    // ------------------------------------------------------------------------
    {
      id: 'great_pyramid',
      category: 'ancient',
      categoryLabel: 'Ancient Wonders',
      title: 'Great Pyramid of Giza',
      nativeName: 'Khufu\'s Horizon • 𓐍𓅱𓆑𓅱𓅜𓏏𓊖',
      continent: 'Africa',
      location: 'Giza Plateau, Greater Cairo, Egypt',
      year: 'c. 2580 BC – 2560 BC',
      timelineYear: -2580,
      civilization: 'Ancient Egypt (Fourth Dynasty, Old Kingdom)',
      status: 'Standing / Intact',
      builder: 'Pharaoh Khufu & Master Architect Hemiunu',
      materials: '2.3 Million Blocks of Limestone & Aswan Granite',
      dimensions: 'Original Height 146.6 m (481 ft) • Base Length 230.3 m • Weight 6M tons',
      coordinates: [29.9792, 31.1342],
      coordText: '29.9792° N, 31.1342° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'The oldest of the Seven Wonders of the Ancient World and the only one that remains standing intact, the Great Pyramid was the tallest human-made structure on Earth for over 3,800 years.',
      storyOrigin: 'Commissioned as the eternal tomb for the Fourth Dynasty Pharaoh Khufu around 2580 BC, the Great Pyramid was engineered by royal vizier Hemiunu over a 27-year period. It originally featured an outer casing of highly polished white Tura limestone that gleamed like a beacon in the desert sun.',
      storyEngineering: 'Comprising approximately 2.3 million stone blocks weighing an average of 2.5 to 15 tons each, the base is aligned with true astronomical north with an accuracy of within four minutes of arc (less than 1/15th of a degree). The King\'s Chamber is relieved of crushing stone weight by five ascending granite relieving chambers topped with a peaked gable roof.',
      storyTrivia: 'The Great Pyramid held the title of the tallest building in the world for over 3,800 years until the spire of Lincoln Cathedral in England surpassed it in 1311 AD. It is the sole surviving monument from the original ancient canon.'
    },
    {
      id: 'hanging_gardens',
      category: 'ancient',
      categoryLabel: 'Ancient Wonders',
      title: 'Hanging Gardens of Babylon',
      nativeName: 'κρεμαστοὶ κῆποι • Tiered Mountain of Flora',
      continent: 'Asia',
      location: 'Near Al-Hillah, Babil Governorate, Iraq',
      year: 'c. 600 BC',
      timelineYear: -600,
      civilization: 'Neo-Babylonian Empire',
      status: 'Destroyed in Antiquity',
      builder: 'King Nebuchadnezzar II',
      materials: 'Mud Brick, Baked Brick, Bitumen, Lead Waterproofing & Soil',
      dimensions: 'Tiered terraces rising ~25 m (80 ft) above the Euphrates',
      coordinates: [32.5422, 44.4210],
      coordText: '32.5422° N, 44.4210° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Hanging_Gardens_of_Babylon.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'A cascading artificial mountain of terraced gardens planted with exotic trees, flowers, and vines, nourished by complex hydraulic pumps from the Euphrates River.',
      storyOrigin: 'According to classical Hellenistic chronicles, King Nebuchadnezzar II constructed the tiered botanical mountain around 600 BC for his Median wife, Queen Amytis, who sorely missed the lush green valleys and mountains of her Persian homeland amid the arid flat plains of Mesopotamia.',
      storyEngineering: 'Because moisture would dissolve standard Mesopotamian mud bricks, ancient engineers sealed the tiered foundations with thick layers of reeds, bitumen (natural asphalt), baked brick, and solid sheets of lead. Continuous water was hoisted up to the summit gardens from the Euphrates using chain-bucket pumps or an early predecessor to the Archimedes screw.',
      storyTrivia: 'The Hanging Gardens are the only ancient wonder whose definitive archaeological location has never been verified. Some modern scholars theorize the gardens were actually located 300 miles north in Nineveh, built by the Assyrian king Sennacherib.'
    },
    {
      id: 'temple_artemis',
      category: 'ancient',
      categoryLabel: 'Ancient Wonders',
      title: 'Temple of Artemis at Ephesus',
      nativeName: 'Ἀρτεμίσιον • Artemision',
      continent: 'Asia',
      location: 'Near Selçuk, Izmir Province, Turkey',
      year: 'c. 550 BC – 356 BC',
      timelineYear: -550,
      civilization: 'Lydian & Greek Ionian Civilizations',
      status: 'Destroyed in Antiquity',
      builder: 'King Croesus of Lydia & Architect Chersiphron',
      materials: 'Pure White Greek Marble, Gold & Cedarwood',
      dimensions: 'Length 115 m • Width 46 m • 127 Ionic Columns 18 m Tall',
      coordinates: [37.9497, 27.3639],
      coordText: '37.9497° N, 27.3639° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Miniaturk_009.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'Four times the size of the Parthenon in Athens, this magnificent all-marble temple was dedicated to Artemis, the Greek goddess of the hunt and wilderness.',
      storyOrigin: 'Funded by the fabulously wealthy King Croesus of Lydia around 550 BC and designed by Cretan architect Chersiphron, the temple stood for two centuries as the religious sanctuary of Asia Minor. It housed countless priceless sculptures and paintings by masters like Phidias and Polyclitus.',
      storyEngineering: 'Erected on marshy terrain near the Cayster River to absorb seismic shocks from frequent Aegean earthquakes, the temple\'s foundations were packed with layers of charcoal and fleece. The monumental 18-meter-tall marble columns were carved with life-size high-relief sculptures around their lower drums.',
      storyTrivia: 'In 356 BC, an arsonist named Herostratus burned the temple down solely so that his name would be remembered throughout history. Legend recounts that on the very night the temple burned, Alexander the Great was born—Artemis being too preoccupied with his birth to save her own temple.'
    },
    {
      id: 'statue_zeus',
      category: 'ancient',
      categoryLabel: 'Ancient Wonders',
      title: 'Statue of Zeus at Olympia',
      nativeName: 'Ἄγαλμα τοῦ Ὀλυμπίου Διός',
      continent: 'Europe',
      location: 'Sanctuary of Olympia, Elis, Greece',
      year: 'c. 435 BC',
      timelineYear: -435,
      civilization: 'Classical Greece',
      status: 'Destroyed in Antiquity',
      builder: 'Master Sculptor Phidias',
      materials: 'Chryselephantine (Ivory Plates over Wooden Core, Solid Gold Robes)',
      dimensions: 'Height 12.4 m (41 ft) seated • Throne Carved from Cedar & Ebony',
      coordinates: [37.6385, 21.6300],
      coordText: '37.6385° N, 21.6300° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Le_Jupiter_Olympien_ou_l%27art_de_la_sculpture_antique.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'A colossal seated figure of Zeus, king of the Olympian gods, towering over 12 meters inside his grand Doric temple at the historic home of the ancient Olympic Games.',
      storyOrigin: 'Commissioned by the Eleans in 435 BC to celebrate the glory of the Olympic Games, the statue was sculpted by Phidias, who had previously created the Athena Parthenos in Athens. Zeus was depicted seated on an ornate throne of cedarwood, holding a statue of Nike (Victory) in his right hand and a scepter crowned with an eagle in his left.',
      storyEngineering: 'Phidias pioneered chryselephantine construction: a hollow timber framework was wrapped with ivory plates for the skin (softened with steam to mold curves) and draped with gleaming hammered gold sheets for the drapery. To protect the ivory from cracking in Olympia\'s humid marshland air, priests regularly wiped the statue with olive oil collected in a dark stone reflection pool at its feet.',
      storyTrivia: 'Roman Emperor Caligula ordered the statue brought to Rome so its head could be replaced with his own likeness. Ancient chronicler Suetonius wrote that when Roman soldiers approached the statue, it emitted a roar of laughter so terrifying that the scaffolding collapsed and the soldiers fled in terror.'
    },
    {
      id: 'mausoleum_halicarnassus',
      category: 'ancient',
      categoryLabel: 'Ancient Wonders',
      title: 'Mausoleum at Halicarnassus',
      nativeName: 'Μαυσωλεῖον τῆς Ἁλικαρνασσοῦ • Tomb of Mausolus',
      continent: 'Asia',
      location: 'Bodrum, Muğla Province, Turkey',
      year: '353 BC – 351 BC',
      timelineYear: -351,
      civilization: 'Achaemenid Empire (Caria)',
      status: 'Destroyed in Antiquity',
      builder: 'Queen Artemisia II, Architects Satyros & Pythius',
      materials: 'White Pentelic & Proconnesian Marble, Green Volcanic Stone',
      dimensions: 'Height 45 m (148 ft) • Perimeter 125 m • 36 Ionic Columns',
      coordinates: [37.0379, 27.4241],
      coordText: '37.0379° N, 27.4241° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Mausoleum_at_Halicarnassus_at_the_Bodrum_Museum_of_Underwater_Archaeology.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'The lavish monumental tomb constructed for Mausolus, ruler of Caria, whose sheer architectural splendor made his name the universal root for all grand tombs: "mausoleum".',
      storyOrigin: 'Mausolus, Persian satrap of Caria, planned a grandiose tomb to overlook his new capital of Halicarnassus. When he died in 353 BC, his grief-stricken sister-wife Artemisia II continued construction, hiring the greatest sculptors of Greece (Scopas, Bryaxis, Timotheus, and Leochares) to carve its four sides.',
      storyEngineering: 'The monument harmonized three distinct architectural traditions: a towering Lycian stepped podium base, surrounded by a Greek peristyle of 36 Ionic columns, topped with an Egyptian-inspired 24-step pyramid roof crowned with a massive marble four-horse chariot (quadriga).',
      storyTrivia: 'The structure survived for nearly 1,800 years until a series of earthquakes between the 12th and 15th centuries collapsed its columns. In the 15th century, the Knights of St. John dismantled its remaining stones to fortify Bodrum Castle, where fragments of the Mausoleum\'s relief friezes can still be seen today.'
    },
    {
      id: 'colossus_rhodes',
      category: 'ancient',
      categoryLabel: 'Ancient Wonders',
      title: 'Colossus of Rhodes',
      nativeName: 'Κολοσσὸς τῆς Ῥόδου • Bronze Sun God Helios',
      continent: 'Europe',
      location: 'Rhodes Harbor, Dodecanese, Greece',
      year: '292 BC – 280 BC',
      timelineYear: -280,
      civilization: 'Hellenistic Rhodes',
      status: 'Destroyed in Antiquity',
      builder: 'Chares of Lindos',
      materials: 'Cast Bronze Plates, Iron Framing & Stone Ballast Blocks',
      dimensions: 'Height 33 m (108 ft) • Approx Height of the Statue of Liberty (base to torch)',
      coordinates: [36.4511, 28.2258],
      coordText: '36.4511° N, 28.2258° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Colosse_de_Rhodes_%28Barclay%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'A towering 33-meter bronze colossus depicting the sun god Helios, constructed to celebrate the Rhodians\' triumphant defense against an epic year-long Macedonian siege.',
      storyOrigin: 'In 305 BC, Demetrius Poliorcetes besieged Rhodes with a massive fleet and siege engines. When the siege was abandoned, the Rhodians sold the captured bronze weapons and siege towers, using the proceeds to commission master sculptor Chares of Lindos to erect a monument of thanksgiving to Helios.',
      storyEngineering: 'Chares erected the statue layer by layer, casting large bronze skins reinforced with an internal skeleton of iron tie rods and heavy stone masonry ballast to ensure stability in coastal gales. As the statue grew in height, an earthen ramp was built around it to allow workers to cast higher sections.',
      storyTrivia: 'Contrary to medieval Renaissance illustrations depicting the Colossus straddling the harbor entrance with ships sailing between its legs, structural physics proves this was impossible. The statue stood on a land pedestal near the harbor. It collapsed during a major earthquake in 226 BC after standing for only 54 years.'
    },
    {
      id: 'lighthouse_alexandria',
      category: 'ancient',
      categoryLabel: 'Ancient Wonders',
      title: 'Lighthouse of Alexandria',
      nativeName: 'ὁ Φάρος τῆς Ἀλεξανδρείας • Pharos of Alexandria',
      continent: 'Africa',
      location: 'Pharos Island, Alexandria, Egypt',
      year: 'c. 280 BC – 247 BC',
      timelineYear: -247,
      civilization: 'Ptolemaic Kingdom of Egypt',
      status: 'Destroyed in Antiquity',
      builder: 'Sostratus of Cnidus under Ptolemy I & II',
      materials: 'Massive White Limestone & Granite Blocks with Molten Lead Joints',
      dimensions: 'Estimated Height 100–120 m (330–390 ft) • Visible up to 50 km at sea',
      coordinates: [31.2140, 29.8856],
      coordText: '31.2140° N, 29.8856° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Lighthouse_-_Thiersch.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'The world\'s first monumental lighthouse, guiding Mediterranean merchant ships safely into the bustling harbor of Alexandria with an intense beacon visible for 30 miles.',
      storyOrigin: 'Founded by Alexander the Great in 331 BC, Alexandria had a treacherous flat harbor coastline surrounded by hidden sandbanks and shallows. Ptolemy I Soter initiated construction of the beacon on Pharos island, completed under his son Ptolemy II around 280 BC by master architect Sostratus of Cnidus.',
      storyEngineering: 'The lighthouse rose in three distinct geometric tiers: a wide square base housing 300 rooms for fuel and keepers, an octagonal middle section, and a cylindrical top tower containing the beacon. A massive hydraulic spiral ramp allowed horses and carts to carry fuel to the summit, where a massive polished bronze concave mirror magnified flame light out across the sea.',
      storyTrivia: 'The word for "lighthouse" in many Romance and Slavic languages (such as "phare" in French, "faro" in Spanish and Italian, and "far" in Romanian) derives directly from the island of Pharos. Its submerged ruins were rediscovered in Alexandria\'s harbor in 1994.'
    },

    // ------------------------------------------------------------------------
    // 7 NATURAL WONDERS OF THE WORLD
    // ------------------------------------------------------------------------
    {
      id: 'grand_canyon',
      category: 'natural',
      categoryLabel: 'Natural Wonders',
      title: 'Grand Canyon',
      nativeName: 'Öngtupqa (Hopi) • Mangwhada (Havasupai)',
      continent: 'Americas',
      location: 'Arizona, United States',
      year: 'Carved over ~6 Million Years',
      timelineYear: -6000000,
      civilization: 'Ancestral Puebloans & Indigenous Nations',
      status: 'Natural Ecosystem',
      builder: 'The Colorado River & Tectonic Uplift',
      materials: 'Layered Vishnu Schist, Redwall Limestone, Coconino Sandstone',
      dimensions: 'Length 446 km (277 miles) • Width up to 29 km • Depth 1,857 m (6,093 ft)',
      coordinates: [36.0544, -112.1401],
      coordText: '36.0544° N, 112.1401° W',
      image: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Canyon_River_Tree_%28165872763%29.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'A breathtaking geological chasm carved by the Colorado River through the Colorado Plateau, exposing nearly two billion years of Earth\'s geological history in towering striated cliffs.',
      storyOrigin: 'Around 70 million years ago, tectonic forces began uplifting the Colorado Plateau thousands of feet. Roughly 6 million years ago, the Colorado River established its course, scouring through rock layers at an average rate of the thickness of a sheet of paper each year, exposing ancient marine beds and primordial Vishnu Schist.',
      storyEngineering: 'Nature\'s hydraulic chisel carved a mile-deep canyon that hosts five of North America’s seven distinct life zones. The extreme elevation differential from the river bed (730 m) to the North Rim (2,400 m) creates distinct microclimates—the rim may experience blizzards while the inner canyon basin experiences desert heat exceeding 40°C.',
      storyTrivia: 'At the bottom of the Grand Canyon lies the Great Unconformity—a geological gap where 1.2 billion years of rock layers have completely vanished between 500-million-year-old Cambrian sandstone and 1.7-billion-year-old basement rock.'
    },
    {
      id: 'great_barrier_reef',
      category: 'natural',
      categoryLabel: 'Natural Wonders',
      title: 'Great Barrier Reef',
      nativeName: 'World\'s Largest Living Biogenic Structure',
      continent: 'Oceania',
      location: 'Coral Sea, Queensland, Australia',
      year: 'Current living reef ~20,000 Years Old',
      timelineYear: -20000,
      civilization: 'Aboriginal & Torres Strait Islander Peoples',
      status: 'Natural Ecosystem',
      builder: 'Billions of Microscopic Coral Polyps',
      materials: 'Calcium Carbonate (Aragonite) Secreted by Coral Colonies',
      dimensions: 'Length 2,300 km (1,400 miles) • Area 344,400 km² • 2,900 Individual Reefs',
      coordinates: [-18.2871, 147.6992],
      coordText: '18.2871° S, 147.6992° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/ISS-45_StoryOfWater%2C_Great_Barrier_Reef%2C_Australia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'The world\'s largest coral reef system, visible from space, containing over 2,900 individual reefs and 900 islands composed entirely of living organisms.',
      storyOrigin: 'Coral reefs have existed off the northeastern coast of Australia for over 500,000 years. The current living structure formed following the Last Glacial Maximum 20,000 years ago when rising sea levels flooded the coastal continental shelf, allowing coral polyps to colonize submerged hills.',
      storyEngineering: 'Tiny soft-bodied coral polyps extract calcium ions from seawater to build interlocking limestone skeletons that accumulate into massive geological barriers. The reef acts as a natural breakwater, protecting the Australian coast from catastrophic ocean cyclones and supporting 1,500 fish species, 400 coral types, and 30 species of whales and dolphins.',
      storyTrivia: 'Once a year, after the late spring full moon when sea temperatures are just right, the entire Great Barrier Reef participates in a synchronized mass coral spawning event—a celestial underwater blizzard where billions of corals release gametes simultaneously.'
    },
    {
      id: 'harbor_rio',
      category: 'natural',
      categoryLabel: 'Natural Wonders',
      title: 'Harbor of Rio de Janeiro',
      nativeName: 'Guanabara Bay • "Bosom of the Sea" (Tupi-Guarani)',
      continent: 'Americas',
      location: 'Rio de Janeiro State, Brazil',
      year: 'Formed via Atlantic Oceanic Ingress ~10,000 BC',
      timelineYear: -10000,
      civilization: 'Tupinambá & Portuguese Colonizers',
      status: 'Natural Ecosystem',
      builder: 'Atlantic Sea Level Rise & Granite Monoliths',
      materials: 'Precambrian Gneiss-Granite Monoliths & Deep Ocean Bay',
      dimensions: 'Area 384 km² • Perimeter 143 km • Framed by 396 m Sugarloaf Peak',
      coordinates: [-22.8483, -43.1494],
      coordText: '22.8483° S, 43.1494° W',
      image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Rio_deJaneiro_LE2002059_lrg.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'A grand coastal natural inlet surrounded by towering monolithic granite mountains, including the iconic Sugarloaf Mountain and Corcovado Peak.',
      storyOrigin: 'On January 1, 1502, Portuguese navigators led by Gaspar de Lemos sailed through a narrow 1.5-kilometer sea channel into a colossal inland body of water. Mistaking the vast bay for the mouth of a great river, they christened it "Rio de Janeiro" (River of January).',
      storyEngineering: 'The bay was sculpted by tectonic faulting and post-ice age Atlantic sea level rise that drowned an ancient river basin. It is guarded by monumental "inselbergs"—steep, dome-shaped granite hills formed deep underground 600 million years ago and exposed through billions of years of tropical weathering.',
      storyTrivia: 'The harbor holds more volume of water than almost any other natural bay on Earth. More than 100 islands dot Guanabara Bay, with Governador Island spanning over 40 square kilometers.'
    },
    {
      id: 'mount_everest',
      category: 'natural',
      categoryLabel: 'Natural Wonders',
      title: 'Mount Everest',
      nativeName: 'Sagarmāthā (Nepali: "Goddess of the Sky") • Chomolungma (Tibetan)',
      continent: 'Asia',
      location: 'Mahalangur Himal Range, Border of Nepal & Tibet (China)',
      year: 'Himalayan Orogeny ~60 Million Years to Present',
      timelineYear: -60000000,
      civilization: 'Sherpa, Tibetan & Nepalese Mountain Peoples',
      status: 'Natural Ecosystem',
      builder: 'Indo-Australian & Eurasian Tectonic Collision',
      materials: 'Pelagic Marine Limestone, Pelitic Schist & Granite',
      dimensions: 'Summit Elevation 8,848.86 m (29,031.7 ft) • Growing ~4 mm/year',
      coordinates: [27.9881, 86.9250],
      coordText: '27.9881° N, 86.9250° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Mt._Everest_from_Gokyo_Ri_November_5%2C_2012.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'Earth\'s highest point above sea level, piercing into the lower stratosphere with extreme sub-zero winds, glacial valleys, and the legendary mountaineering Death Zone.',
      storyOrigin: 'Roughly 50 million years ago, the continental plate of India collided with the Eurasian plate at a rate of 15 cm per year, crumpling the seafloor of the ancient Tethys Ocean skyward to forge the Himalayas. First climbed by Sir Edmund Hillary and Tenzing Norgay in 1953.',
      storyEngineering: 'The rock at the very summit of Everest—the Qomolangma Formation—is yellow marine limestone filled with 450-million-year-old fossilized trilobites, crinoids, and seashells, proving that the highest point on Earth was once a shallow tropical sea floor.',
      storyTrivia: 'Above 8,000 meters (26,000 ft) lies the "Death Zone," where atmospheric pressure drops so low that air contains only one-third of the oxygen available at sea level. The human body consumes its own cellular energy faster than it can replenish it, making long-term survival impossible.'
    },
    {
      id: 'aurora_borealis',
      category: 'natural',
      categoryLabel: 'Natural Wonders',
      title: 'Aurora Borealis (Northern Lights)',
      nativeName: 'Guovssahasat (Sámi: "Light You Can Hear") • Polar Lights',
      continent: 'Europe',
      location: 'High-Latitude Auroral Oval (Norway, Iceland, Canada, Alaska)',
      year: 'Continuous Solar Wind Phenomenon (Billions of Years)',
      timelineYear: -4500000000,
      civilization: 'Inuit, Sámi, Norse & Arctic Peoples',
      status: 'Natural Ecosystem',
      builder: 'Solar Wind Interactions with Earth\'s Magnetosphere',
      materials: 'Excited Atmospheric Oxygen and Nitrogen Atoms',
      dimensions: 'Altitude 80 km to 640 km above Earth • Auroral Oval Circumference ~4,000 km',
      coordinates: [68.0000, 15.0000],
      coordText: '68.0000° N, 15.0000° E',
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Aurora_borealis_over_Eielson_Air_Force_Base%2C_Alaska.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'Curtains, rays, and ribbons of luminous green, magenta, and violet light dancing across the high-latitude night sky as solar particles collide with atmospheric gases.',
      storyOrigin: 'Galileo Galilei coined the term "Aurora Borealis" in 1619, combining Aurora (Roman goddess of dawn) with Boreas (Greek god of the north wind). Indigenous Arctic peoples viewed auroras as the spirits of ancestors dancing in the sky, or torches carried by spirits guiding newcomers to the afterlife.',
      storyEngineering: 'Coronal mass ejections from the Sun fling billions of tons of charged protons and electrons toward Earth at speeds up to 2,000 km/s. Earth\'s magnetic field channels these particles toward the polar cusps, where they collide with atmospheric gases. Excited atomic oxygen at 100–300 km produces radiant emerald greens; molecular nitrogen produces vivid purples and crimson reds.',
      storyTrivia: 'Auroras are not unique to Earth—Jupiter, Saturn, Uranus, and Neptune possess even more ferocious auroral storms fueled by powerful magnetospheres and volcanic emissions from their moons.'
    },
    {
      id: 'paricutin',
      category: 'natural',
      categoryLabel: 'Natural Wonders',
      title: 'Parícutin Volcano',
      nativeName: 'Volcán de Parícutin • Purepecha Highlands',
      continent: 'Americas',
      location: 'Michoacán, Central-Western Mexico',
      year: '1943 AD – 1952 AD',
      timelineYear: 1943,
      civilization: 'Purépecha Indigenous Farmers & Modern Geology',
      status: 'Natural Ecosystem',
      builder: 'Monogenetic Basaltic Volcanism',
      materials: 'Basaltic Andesite Lava, Cinders, Scoria & Volcanic Ash',
      dimensions: 'Cone Height 424 m (1,391 ft) above field • Summit Elevation 2,800 m',
      coordinates: [19.4931, -102.2514],
      coordText: '19.4931° N, 102.2514° W',
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Paricutin.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
      extract: 'The only volcano whose birth was witnessed and recorded from its very first hour by modern human beings, surging out of a Mexican cornfield in 1943.',
      storyOrigin: 'On February 20, 1943, local farmer Dionisio Pulido was clearing his cornfield when the ground opened in a fissure, emitting sulfurous smoke and hissing sounds. Within 24 hours, a cinder cone had grown 50 meters tall; by the end of the first week, it was over 100 meters high, raining incandescent volcanic bombs over the Michoacán plateau.',
      storyEngineering: 'Parícutin is a monogenetic cinder cone volcano, meaning it erupts only once from a single localized magma pocket. Over its nine years of active eruption, it erupted 1.4 square kilometers of basaltic lava, burying the towns of Parícutin and San Juan Parangaricutiro—leaving only the stone bell tower of the church protruding above the solidified black lava fields.',
      storyTrivia: 'Because geologists and photographers were able to reach the site almost immediately, Parícutin became the defining natural laboratory for modern volcanology, providing the world\'s first complete photographic and scientific documentation of an entire volcanic lifecycle from birth to extinction.'
    },
    {
      id: 'victoria_falls',
      category: 'natural',
      categoryLabel: 'Natural Wonders',
      title: 'Victoria Falls',
      nativeName: 'Mosi-oa-Tunya • "The Smoke that Thunders"',
      continent: 'Africa',
      location: 'Zambezi River, Border of Zambia & Zimbabwe',
      year: 'Basaltic Fissure Erosion ~100,000 Years',
      timelineYear: -100000,
      civilization: 'Batonka & Kololo Indigenous Peoples',
      status: 'Natural Ecosystem',
      builder: 'Zambezi River Fracturing Volcanic Basalt Plateaus',
      materials: 'Stormberg Basalt Fissures & River Sediments',
      dimensions: 'Width 1,708 m (5,604 ft) • Height 108 m (354 ft) • Max Flow 12,000 m³/s',
      coordinates: [-17.9243, 25.8572],
      coordText: '17.9243° S, 25.8572° E',
      image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg/3840px-Cataratas_Victoria%2C_Zambia-Zimbabue%2C_2018-07-27%2C_DD_04.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
      extract: 'The world\'s largest sheet of falling water, where the 1.7-kilometer-wide Zambezi River plunges 108 meters into a narrow basalt gorge, producing a thunderous mist visible from 30 miles away.',
      storyOrigin: 'Known for centuries to the local Kololo people as Mosi-oa-Tunya ("The Smoke That Thunders"), Scottish missionary David Livingstone was the first European to view the falls in 1855, writing in his diary that "scenes so lovely must have been gazed upon by angels in their flight" and naming them in honor of Queen Victoria.',
      storyEngineering: 'The falls were created as the Zambezi River encountered deep vertical fault fractures in the ancient volcanic basalt plateau. Over the past 100,000 years, the river has eroded through seven successive zigzagging gorges upstream, with the present falls marking the eighth canyon stage.',
      storyTrivia: 'During the high-water flood season from February to May, the water spray rises over 400 meters (1,300 ft) into the air. When illuminated by the light of a full moon, the spray generates rare, magical "moonbows" (lunar rainbows) lasting through the night.'
    }
  ];

  // ==========================================================================
  // 2. AUDIO SYNTHESIS ENGINE (WEB AUDIO API)
  // ==========================================================================
  class WonderAudioEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = false;
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playChime(freq = 520, type = 'sine', duration = 0.4) {
      if (this.isMuted) return;
      try {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, this.ctx.currentTime + duration);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        // Audio error silently handled
      }
    }

    playFanfare() {
      if (this.isMuted) return;
      [440, 554, 659, 880].forEach((freq, idx) => {
        setTimeout(() => this.playChime(freq, 'triangle', 0.5), idx * 110);
      });
    }

    playError() {
      if (this.isMuted) return;
      this.playChime(220, 'sawtooth', 0.25);
    }
  }

  const audio = new WonderAudioEngine();

  // ==========================================================================
  // 3. APPLICATION STATE & DOM REFERENCES
  // ==========================================================================
  const state = {
    currentCategory: 'all',
    currentView: 'grid',
    searchQuery: '',
    selectedContinent: 'all',
    selectedStatus: 'all',
    activeDossierIndex: 0,
    filteredWonders: [...WONDERS_DATA],
    mapInitialized: false,
    leafletMap: null,
    mapMarkers: [],
    quiz: {
      questions: [],
      currentIndex: 0,
      score: 0,
      streak: 0,
      answered: false
    }
  };

  // DOM Elements
  const wondersGrid = document.getElementById('wondersGrid');
  const wonderSearchInput = document.getElementById('wonderSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const continentFilterSelect = document.getElementById('continentFilterSelect');
  const statusFilterSelect = document.getElementById('statusFilterSelect');
  const btnSurpriseWonder = document.getElementById('btnSurpriseWonder');
  const activeQueryBar = document.getElementById('activeQueryBar');
  const queryStatusText = document.getElementById('queryStatusText');
  const btnResetFilters = document.getElementById('btnResetFilters');
  const categoryTabBtns = document.querySelectorAll('.category-tabs-bar .tab-btn');
  const viewPanels = document.querySelectorAll('.explorer-view-panel');
  const btnSoundToggle = document.getElementById('btnSoundToggle');
  const soundIcon = document.getElementById('soundIcon');
  const soundText = document.getElementById('soundText');

  // Dossier Modal Elements
  const dossierModal = document.getElementById('dossierModal');
  const modalCategoryBadge = document.getElementById('modalCategoryBadge');
  const modalWonderImg = document.getElementById('modalWonderImg');
  const modalWonderTitle = document.getElementById('modalWonderTitle');
  const modalNativeName = document.getElementById('modalNativeName');
  const modalTagLocation = document.getElementById('modalTagLocation');
  const modalTagEra = document.getElementById('modalTagEra');
  const modalTagCivilization = document.getElementById('modalTagCivilization');
  const modalTagStatus = document.getElementById('modalTagStatus');
  const modalSpecBuilder = document.getElementById('modalSpecBuilder');
  const modalSpecMaterials = document.getElementById('modalSpecMaterials');
  const modalSpecDimensions = document.getElementById('modalSpecDimensions');
  const modalSpecCoordinates = document.getElementById('modalSpecCoordinates');
  const modalStoryOrigin = document.getElementById('modalStoryOrigin');
  const modalStoryEngineering = document.getElementById('modalStoryEngineering');
  const modalStoryTrivia = document.getElementById('modalStoryTrivia');
  const btnModalClose = document.getElementById('btnModalClose');
  const btnModalPrev = document.getElementById('btnModalPrev');
  const btnModalNext = document.getElementById('btnModalNext');

  // Feature Panels
  const timelineTrack = document.getElementById('timelineTrack');
  const quizCardBox = document.getElementById('quizCardBox');

  // ==========================================================================
  // 4. RENDERING ENGINE: WONDERS CARDS GRID
  // ==========================================================================
  function filterWonders() {
    state.filteredWonders = WONDERS_DATA.filter(w => {
      // Category Match
      if (state.currentCategory !== 'all' && w.category !== state.currentCategory) {
        return false;
      }

      // Continent Match
      if (state.selectedContinent !== 'all' && w.continent !== state.selectedContinent) {
        return false;
      }

      // Status Match
      if (state.selectedStatus !== 'all' && w.status !== state.selectedStatus) {
        return false;
      }

      // Search Query Match
      if (state.searchQuery.trim()) {
        const q = state.searchQuery.toLowerCase().trim();
        const searchable = (
          w.title + ' ' + 
          w.location + ' ' + 
          w.civilization + ' ' + 
          w.builder + ' ' + 
          w.materials + ' ' + 
          w.extract
        ).toLowerCase();
        if (!searchable.includes(q)) {
          return false;
        }
      }

      return true;
    });

    renderWondersGrid();
    updateActiveFilterBar();
  }

  function renderWondersGrid() {
    if (!wondersGrid) return;

    if (state.filteredWonders.length === 0) {
      wondersGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--border-medium);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: #ffffff; margin-bottom: 0.5rem;">No Wonders Found</h3>
          <p style="color: var(--text-muted); font-size: 0.95rem; max-width: 440px; margin: 0 auto 1.5rem;">We couldn't find any world wonders matching your exact filter criteria. Try clearing search keywords or selecting all categories.</p>
          <button type="button" class="btn btn-gold-outline" onclick="window.resetWondersFilters()">Reset All Filters ↺</button>
        </div>
      `;
      return;
    }

    wondersGrid.innerHTML = state.filteredWonders.map((w, index) => {
      const eraBadgeClass = w.category === 'new7' ? 'badge-new7' : (w.category === 'ancient' ? 'badge-ancient' : 'badge-natural');
      return `
        <article class="wonder-card" data-wonder-id="${w.id}" data-index="${index}" tabindex="0" role="button" aria-label="Inspect ${w.title}">
          <div class="wonder-card-media">
            <span class="card-era-badge ${eraBadgeClass}">${w.categoryLabel}</span>
            <span class="card-status-pill">${w.status}</span>
            <img src="${w.image}" alt="${w.title}" class="wonder-card-img" loading="lazy">
          </div>
          <div class="wonder-card-body">
            <div class="card-title-row">
              <h3 class="wonder-card-title">${w.title}</h3>
            </div>
            <div class="card-meta-ribbon">
              <span class="meta-chip">📍 ${w.location.split(',')[0]}</span>
              <span class="meta-chip">📅 ${w.year.split('–')[0]}</span>
              <span class="meta-chip">🌍 ${w.continent}</span>
            </div>
            <p class="wonder-card-desc">${w.extract}</p>
            <div class="wonder-card-footer">
              <span class="card-coordinates">${w.coordText}</span>
              <span class="btn-inspect-dossier">Inspect Dossier ➔</span>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Wire Card Click Events
    wondersGrid.querySelectorAll('.wonder-card').forEach(card => {
      card.addEventListener('click', () => {
        const wonderId = card.dataset.wonderId;
        openDossierModalById(wonderId);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const wonderId = card.dataset.wonderId;
          openDossierModalById(wonderId);
        }
      });
    });
  }

  function updateActiveFilterBar() {
    if (!activeQueryBar) return;
    const isFiltered = (
      state.currentCategory !== 'all' ||
      state.selectedContinent !== 'all' ||
      state.selectedStatus !== 'all' ||
      state.searchQuery.trim().length > 0
    );

    if (isFiltered) {
      activeQueryBar.style.display = 'flex';
      queryStatusText.textContent = `Showing ${state.filteredWonders.length} of ${WONDERS_DATA.length} wonders`;
    } else {
      activeQueryBar.style.display = 'none';
    }
  }

  window.resetWondersFilters = function () {
    state.currentCategory = 'all';
    state.selectedContinent = 'all';
    state.selectedStatus = 'all';
    state.searchQuery = '';

    wonderSearchInput.value = '';
    searchClearBtn.classList.remove('visible');
    continentFilterSelect.value = 'all';
    statusFilterSelect.value = 'all';

    categoryTabBtns.forEach(btn => {
      const isAll = btn.dataset.category === 'all';
      btn.classList.toggle('active', isAll);
      btn.setAttribute('aria-selected', isAll ? 'true' : 'false');
    });

    switchView('grid');
    filterWonders();
    audio.playChime(320);
  };

  // ==========================================================================
  // 5. FULL DOSSIER MODAL (100% UN増CROPPED IMAGE VIEWER)
  // ==========================================================================
  function openDossierModalById(wonderId) {
    const idx = WONDERS_DATA.findIndex(w => w.id === wonderId);
    if (idx !== -1) {
      openDossierModal(idx);
    }
  }

  function openDossierModal(index) {
    state.activeDossierIndex = index;
    const w = WONDERS_DATA[index];
    if (!w) return;

    modalCategoryBadge.textContent = w.categoryLabel;
    modalWonderTitle.textContent = w.title;
    modalNativeName.textContent = w.nativeName;

    // Tags
    modalTagLocation.textContent = '📍 ' + w.location;
    modalTagEra.textContent = '📅 ' + w.year;
    modalTagCivilization.textContent = '👑 ' + w.civilization;
    modalTagStatus.textContent = '🏛️ ' + w.status;

    // Specs
    modalSpecBuilder.textContent = w.builder;
    modalSpecMaterials.textContent = w.materials;
    modalSpecDimensions.textContent = w.dimensions;
    modalSpecCoordinates.textContent = w.coordText;

    // Stories
    modalStoryOrigin.textContent = w.storyOrigin;
    modalStoryEngineering.textContent = w.storyEngineering;
    modalStoryTrivia.textContent = w.storyTrivia;

    // Media (CRITICAL: 100% Uncropped Image)
    modalWonderImg.src = w.image;
    modalWonderImg.alt = `${w.title} - ${w.categoryLabel}`;

    dossierModal.classList.add('active');
    dossierModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    audio.playChime(480);
  }

  function closeDossierModal() {
    dossierModal.classList.remove('active');
    dossierModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function nextDossier() {
    const nextIdx = (state.activeDossierIndex + 1) % WONDERS_DATA.length;
    openDossierModal(nextIdx);
  }

  function prevDossier() {
    const prevIdx = (state.activeDossierIndex - 1 + WONDERS_DATA.length) % WONDERS_DATA.length;
    openDossierModal(prevIdx);
  }

  // Modal event wiring
  btnModalClose.addEventListener('click', closeDossierModal);
  btnModalNext.addEventListener('click', nextDossier);
  btnModalPrev.addEventListener('click', prevDossier);

  dossierModal.addEventListener('click', (e) => {
    if (e.target === dossierModal) {
      closeDossierModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!dossierModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeDossierModal();
    if (e.key === 'ArrowRight') nextDossier();
    if (e.key === 'ArrowLeft') prevDossier();
  });

  // ==========================================================================
  // 6. GLOBAL WORLD MAP (LEAFLET + FALLBACK)
  // ==========================================================================
  function initGlobalMap() {
    if (state.mapInitialized) return;
    const mapContainer = document.getElementById('wondersMap');
    if (!mapContainer) return;

    if (typeof L === 'undefined') {
      mapContainer.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center; padding: 2rem;">
          <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🌍</div>
          <h4 style="font-family: var(--font-serif); color: #ffffff;">Interactive Coordinates Directory</h4>
          <p style="color: var(--text-muted); font-size: 0.85rem; max-width: 400px;">Leaflet script loading. All 21 monuments are pinpointed across 6 continents.</p>
        </div>
      `;
      return;
    }

    try {
      state.leafletMap = L.map('wondersMap', {
        center: [25.0, 15.0],
        zoom: 2,
        minZoom: 1.8,
        maxZoom: 10,
        scrollWheelZoom: true
      });

      // 1. High-Resolution Satellite Basemap (Free, Zero API Key, No Watermark, Photorealistic Earth)
      const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '&copy; <a href="https://www.esri.com/">Esri</a>, Earthstar Geographics, USGS',
        maxZoom: 18
      });

      // 2. Dark-Filtered OpenStreetMap Basemap (Free, Zero API Key, No Watermark)
      const osmDarkLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
        className: 'osm-dark-tiles'
      });

      // Default to Satellite Layer for gorgeous photorealistic Earth
      satelliteLayer.addTo(state.leafletMap);

      // Layer Control (Satellite vs Dark Vector)
      const baseMaps = {
        '🛰️ Satellite View': satelliteLayer,
        '🗺️ Dark Vector Map': osmDarkLayer
      };
      L.control.layers(baseMaps, null, { position: 'topright' }).addTo(state.leafletMap);

      // Add pins for all 21 wonders with glowing pulsing halo
      WONDERS_DATA.forEach(w => {
        const markerColor = w.category === 'new7' ? '#3b82f6' : (w.category === 'ancient' ? '#f43f5e' : '#10b981');
        
        const customIcon = L.divIcon({
          className: 'custom-wonder-marker',
          html: `
            <div style="position: relative; width: 16px; height: 16px;">
              <div style="position: absolute; top: -3px; left: -3px; width: 22px; height: 22px; border-radius: 50%; background: ${markerColor}; opacity: 0.35; animation: markerPulse 2s infinite ease-out;"></div>
              <div style="position: absolute; top: 0; left: 0; background: ${markerColor}; width: 16px; height: 16px; border-radius: 50%; border: 2.5px solid #ffffff; box-shadow: 0 0 12px ${markerColor}; cursor: pointer;"></div>
            </div>
          `,
          iconSize: [16, 16],
          iconAnchor: [8, 8]
        });

        const marker = L.marker(w.coordinates, { icon: customIcon }).addTo(state.leafletMap);

        const popupContent = `
          <div class="map-popup-card">
            <h4 class="map-popup-title">${w.title}</h4>
            <p class="map-popup-loc">📍 ${w.location}</p>
            <button type="button" class="btn-popup-inspect" onclick="window.inspectWonderFromMap('${w.id}')">Inspect Dossier ➔</button>
          </div>
        `;

        marker.bindPopup(popupContent);
        state.mapMarkers.push(marker);
      });

      state.mapInitialized = true;
    } catch (e) {
      console.warn('Map initialization error:', e);
    }
  }

  window.inspectWonderFromMap = function (wonderId) {
    openDossierModalById(wonderId);
  };

  // ==========================================================================
  // 7. CHRONOLOGY TIMELINE
  // ==========================================================================
  function renderTimeline() {
    if (!timelineTrack) return;

    // Sort by timelineYear
    const sorted = [...WONDERS_DATA].sort((a, b) => a.timelineYear - b.timelineYear);

    timelineTrack.innerHTML = sorted.map((w, idx) => {
      const side = idx % 2 === 0 ? 'left' : 'right';
      return `
        <div class="timeline-item ${side}" data-wonder-id="${w.id}">
          <div class="timeline-dot"></div>
          <div class="timeline-content-card" onclick="window.inspectWonderFromMap('${w.id}')">
            <div class="timeline-year">${w.year}</div>
            <h4 class="timeline-wonder-name">${w.title}</h4>
            <p class="timeline-wonder-desc">${w.civilization} • ${w.location.split(',')[0]}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  // ==========================================================================
  // 8. WONDERS TRIVIA CHALLENGE
  // ==========================================================================
  const QUIZ_QUESTIONS = [
    {
      q: 'Which is the ONLY surviving monument from the original Seven Wonders of the Ancient World?',
      options: ['Colossus of Rhodes', 'Great Pyramid of Giza', 'Lighthouse of Alexandria', 'Temple of Artemis'],
      answer: 1,
      explanation: 'The Great Pyramid of Giza was built circa 2580 BC and is the only ancient wonder that has remained standing intact to this day.'
    },
    {
      q: 'What ancient building secret prevents the Taj Mahal\'s four minarets from collapsing onto the central tomb during an earthquake?',
      options: ['They are anchored to bedrock with iron chains', 'They are built leaning slightly outward by 2 degrees', 'They are hollowed out to reduce mass', 'They are made of flexible bamboo cores'],
      answer: 1,
      explanation: 'Architect Ustad Ahmad Lahori deliberately constructed the minarets leaning slightly outward so that in a severe earthquake, they would fall away from the mausoleum dome.'
    },
    {
      q: 'Which wonder was carved directly into sheer rose-red sandstone cliffs in the desert of Jordan?',
      options: ['Machu Picchu', 'Petra', 'Chichén Itzá', 'Mausoleum at Halicarnassus'],
      answer: 1,
      explanation: 'Petra, established by the Nabataeans in the 4th century BC, is famous for its rock-cut architecture carved directly into vibrant rose-colored canyon walls.'
    },
    {
      q: 'What phenomenon causes the stone serpent of Kukulcán to appear to slither down the pyramid at Chichén Itzá?',
      options: ['Lunar eclipse reflections', 'Spring & Autumn equinox solar shadows', 'Wet limestone reflections during monsoon', 'Torches placed in subterranean chambers'],
      answer: 1,
      explanation: 'During the spring and autumn equinoxes, the late afternoon sun casts seven triangular shadows on the staircase balustrade, mimicking the undulating body of a descending serpent.'
    },
    {
      q: 'Why can Machu Picchu withstand intense Andean earthquakes without mortar?',
      options: ['Ashlar masonry allows stones to dance and resettle without breaking', 'It is made of volcanic pumice', 'It is tied together with copper wires', 'It rests on deep water springs'],
      answer: 0,
      explanation: 'The Inca used dry-stone ashlar masonry where massive granite stones were carved so tightly together that during earthquakes, they vibrate in place and resettle perfectly.'
    },
    {
      q: 'Which Natural Wonder surged suddenly out of a Mexican cornfield in 1943?',
      options: ['Grand Canyon', 'Parícutin Volcano', 'Victoria Falls', 'Sugarloaf Mountain'],
      answer: 1,
      explanation: 'Parícutin began erupting from the cornfield of farmer Dionisio Pulido on February 20, 1943, becoming the only volcano whose complete lifecycle was documented from birth.'
    },
    {
      q: 'What marine fossils are discovered embedded in the limestone at the very summit of Mount Everest?',
      options: ['Prehistoric Megalodon teeth', '450-million-year-old trilobites and crinoids', 'Petrified coral polyps from 2,000 years ago', 'No fossils have ever been found'],
      answer: 1,
      explanation: 'The Qomolangma Formation at the peak of Mount Everest contains 450-million-year-old Ordovician limestone from the ancient Tethys Ocean floor.'
    },
    {
      q: 'What natural phenomenon creates the magical "moonbows" at Victoria Falls?',
      options: ['Solar flares striking the upper atmosphere', 'Full moonlight illuminating the massive river mist spray', 'Phosphorescent algae in the Zambezi River', 'Desert dust storms at night'],
      answer: 1,
      explanation: 'Victoria Falls\' towering spray mist creates lunar rainbows (moonbows) under the light of a clear full moon.'
    },
    {
      q: 'The Colosseum in Rome was originally named what after its founding imperial dynasty?',
      options: ['The Circus Maximus', 'The Flavian Amphitheatre', 'The Pantheon Arena', 'The Antonine Colosseum'],
      answer: 1,
      explanation: 'It was originally known as the Flavian Amphitheatre (Amphitheatrum Flavium), built under the Flavian emperors Vespasian and Titus.'
    },
    {
      q: 'Where were the components of Christ the Redeemer\'s head and hands originally sculpted?',
      options: ['Rio de Janeiro, Brazil', 'Paris, France', 'Rome, Italy', 'Warsaw, Poland'],
      answer: 1,
      explanation: 'French-Polish sculptor Paul Landowski modeled and sculpted the clay head and hands in his studio in Paris before they were cast in concrete in Rio.'
    }
  ];

  function startQuiz() {
    state.quiz.questions = [...QUIZ_QUESTIONS].sort(() => 0.5 - Math.random());
    state.quiz.currentIndex = 0;
    state.quiz.score = 0;
    state.quiz.answered = false;
    renderQuizCard();
  }

  function renderQuizCard() {
    if (!quizCardBox) return;

    if (state.quiz.currentIndex >= state.quiz.questions.length) {
      // Quiz Finished Scorecard
      const pct = Math.round((state.quiz.score / state.quiz.questions.length) * 100);
      const isMaster = pct >= 80;

      quizCardBox.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem;">
          <div style="font-size: 3.5rem; margin-bottom: 0.75rem;">${isMaster ? '🏆' : '📜'}</div>
          <h4 style="font-family: var(--font-serif); font-size: 1.6rem; color: #ffffff; margin-bottom: 0.5rem;">
            ${isMaster ? 'Master Archaeologist Certified!' : 'Expedition Completed!'}
          </h4>
          <p style="color: var(--text-muted); font-size: 1rem; margin-bottom: 1.5rem;">
            You scored <strong>${state.quiz.score} of ${state.quiz.questions.length}</strong> (${pct}%) on World Wonders history, architecture, and geology!
          </p>
          <button type="button" class="btn btn-gold-outline" onclick="window.restartWonderQuiz()">
            ↺ Take Challenge Again
          </button>
        </div>
      `;

      if (isMaster) {
        audio.playFanfare();
      } else {
        audio.playChime(440);
      }
      return;
    }

    const currentQ = state.quiz.questions[state.quiz.currentIndex];
    const progressPct = ((state.quiz.currentIndex + 1) / state.quiz.questions.length) * 100;

    quizCardBox.innerHTML = `
      <div class="quiz-progress-bar-wrap">
        <div class="quiz-progress-bar-fill" style="width: ${progressPct}%;"></div>
      </div>

      <div class="quiz-question-header">
        <span>Question ${state.quiz.currentIndex + 1} of ${state.quiz.questions.length}</span>
        <span>Score: ${state.quiz.score} pts</span>
      </div>

      <h4 class="quiz-question-text">${currentQ.q}</h4>

      <div class="quiz-options-list" id="quizOptionsList">
        ${currentQ.options.map((opt, optIdx) => `
          <button type="button" class="quiz-option-btn" data-opt-index="${optIdx}">
            <span style="opacity: 0.6; font-family: var(--font-mono);">${String.fromCharCode(65 + optIdx)}.</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>

      <div class="quiz-explanation-box" id="quizExplanationBox">
        <strong>💡 Historical Insight:</strong> ${currentQ.explanation}
      </div>

      <div class="quiz-footer-actions">
        <span class="quiz-score-indicator">Current: <strong>${state.quiz.score} correct</strong></span>
        <button type="button" class="btn btn-gold-outline" id="btnNextQuizQuestion" style="display: none;">
          Next Question ➔
        </button>
      </div>
    `;

    state.quiz.answered = false;

    // Bind option buttons
    quizCardBox.querySelectorAll('.quiz-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.quiz.answered) return;
        state.quiz.answered = true;

        const chosenIdx = parseInt(btn.dataset.optIndex, 10);
        const isCorrect = chosenIdx === currentQ.answer;

        const allOptionBtns = quizCardBox.querySelectorAll('.quiz-option-btn');
        allOptionBtns.forEach(b => b.disabled = true);

        if (isCorrect) {
          btn.classList.add('correct');
          state.quiz.score++;
          audio.playChime(660);
        } else {
          btn.classList.add('incorrect');
          allOptionBtns[currentQ.answer].classList.add('correct');
          audio.playError();
        }

        const explBox = document.getElementById('quizExplanationBox');
        if (explBox) explBox.classList.add('visible');

        const btnNext = document.getElementById('btnNextQuizQuestion');
        if (btnNext) {
          btnNext.style.display = 'inline-flex';
          btnNext.addEventListener('click', () => {
            state.quiz.currentIndex++;
            renderQuizCard();
          });
        }
      });
    });
  }

  window.restartWonderQuiz = function () {
    startQuiz();
  };

  // ==========================================================================
  // 9. VIEW SWITCHING & NAVIGATION
  // ==========================================================================
  function switchView(viewName) {
    state.currentView = viewName;

    // Toggle panels
    viewPanels.forEach(p => {
      const isTarget = (
        (viewName === 'grid' && p.id === 'viewGrid') ||
        (viewName === 'map' && p.id === 'viewMap') ||
        (viewName === 'timeline' && p.id === 'viewTimeline') ||
        (viewName === 'quiz' && p.id === 'viewQuiz')
      );
      p.classList.toggle('active', isTarget);
    });

    // Toggle toolbar visibility (only on grid view)
    const toolbar = document.getElementById('toolbarFilterDeck');
    if (toolbar) {
      toolbar.style.display = viewName === 'grid' ? 'flex' : 'none';
    }

    if (viewName === 'map') {
      setTimeout(() => {
        initGlobalMap();
        if (state.leafletMap) state.leafletMap.invalidateSize();
      }, 100);
    } else if (viewName === 'timeline') {
      renderTimeline();
    } else if (viewName === 'quiz') {
      startQuiz();
    }

    audio.playChime(380);
  }

  // ==========================================================================
  // 10. EVENT HANDLERS & BINDINGS
  // ==========================================================================
  // Category & Feature Tabs
  categoryTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryTabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      if (btn.dataset.category) {
        state.currentCategory = btn.dataset.category;
        switchView('grid');
        filterWonders();
      } else if (btn.dataset.view) {
        switchView(btn.dataset.view);
      }
    });
  });

  // Search Input
  wonderSearchInput.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    searchClearBtn.classList.toggle('visible', state.searchQuery.length > 0);
    filterWonders();
  });

  searchClearBtn.addEventListener('click', () => {
    wonderSearchInput.value = '';
    state.searchQuery = '';
    searchClearBtn.classList.remove('visible');
    filterWonders();
    wonderSearchInput.focus();
  });

  // Select Filters
  continentFilterSelect.addEventListener('change', (e) => {
    state.selectedContinent = e.target.value;
    filterWonders();
  });

  statusFilterSelect.addEventListener('change', (e) => {
    state.selectedStatus = e.target.value;
    filterWonders();
  });

  // Surprise Wonder Button
  btnSurpriseWonder.addEventListener('click', () => {
    const randomWonder = WONDERS_DATA[Math.floor(Math.random() * WONDERS_DATA.length)];
    openDossierModalById(randomWonder.id);
  });

  // Reset Filters Button
  btnResetFilters.addEventListener('click', () => {
    window.resetWondersFilters();
  });

  // Sound Toggle Button
  btnSoundToggle.addEventListener('click', () => {
    audio.isMuted = !audio.isMuted;
    soundIcon.textContent = audio.isMuted ? '🔇' : '🔊';
    soundText.textContent = audio.isMuted ? 'Sound: OFF' : 'Sound: ON';
    if (!audio.isMuted) audio.playChime(440);
  });

  // ==========================================================================
  // 11. INITIALIZATION
  // ==========================================================================
  renderWondersGrid();
  console.log('[7WondersExplorer] Initialized with 21 Wonders across 3 Eras.');

})();
