export interface Hotspot {
  id: string;
  title: string;
  sanskritTitle: string;
  xPercent: number; // Position on image (0-100)
  yPercent: number;
  category: string;
  summary: string;
  keyInsights: string[];
  primarySource: string;
  sanskritVerse?: string;
  verseTranslation?: string;
  modernParallel: string;
}

export interface KnowledgePillar {
  id: string;
  name: string;
  sanskritName: string;
  iconName: string;
  era: string;
  color: string;
  tagline: string;
  description: string;
  treatises: {
    title: string;
    author: string;
    date: string;
    highlight: string;
  }[];
  breakthroughs: {
    title: string;
    description: string;
    sanskritTerm?: string;
    impact: string;
  }[];
  verse: {
    sanskrit: string;
    transliteration: string;
    translation: string;
    source: string;
  };
}

export interface Polymath {
  id: string;
  name: string;
  sanskritName: string;
  period: string;
  location: string;
  field: string;
  masterwork: string;
  biography: string;
  keyContributions: string[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  sourceTreatise: string;
  domain: string;
}

export const HOTSPOTS: Hotspot[] = [
  {
    id: 'rishi',
    title: 'The Sages & Palm-Leaf Grantha',
    sanskritTitle: 'ऋषयः तालपत्रग्रन्थाश्च',
    xPercent: 12,
    yPercent: 46,
    category: 'Vedic Sciences & Manuscripts',
    summary:
      'Ancient Indian scholars (Rishis) committed discoveries to palm-leaf (Tala-patra) and birch-bark (Bhurja-patra) manuscripts, while safeguarding exact oral phonetics through 8 intricate chanting mnemonics.',
    keyInsights: [
      'The Ghana, Jata, and Krama pathas ensured not a single syllable or accent altered across three millennia.',
      'Baudhayana formulated geometry in Sulba Sutras (c. 800 BCE) for precise sacred altar construction.',
      'Panini created the Ashtadhyayi (c. 5th century BCE), the worlds first generative formal grammar system.',
    ],
    primarySource: 'Rigveda Samhita & Baudhayana Sulba Sutra',
    sanskritVerse: 'दीर्घचतुरश्रस्याक्ष्णया रज्जुः पार्श्वमानी तिर्यङ्मानी च यत्पृथग्भूते कुरुतस्तदुभयं करोति ॥',
    verseTranslation:
      '"The diagonal cord of a rectangle produces both areas which its length and breadth produce separately." — Baudhayana Sulba Sutra 1.48 (Pre-Pythagorean)',
    modernParallel:
      'Anticipated the Pythagorean theorem, modern computational phonology, and formal syntax compilers (Backus-Naur Form).',
  },
  {
    id: 'temple',
    title: 'Gopuram & Temple Acoustics',
    sanskritTitle: 'वास्तुशास्त्रं स्थापत्यवेदश्च',
    xPercent: 18,
    yPercent: 28,
    category: 'Architecture & Civil Engineering',
    summary:
      'Dravidian and Nagara temple architecture integrated Vastu Shastra, sacred proportions, seismic interlocking joints, and phenomenal acoustic engineering.',
    keyInsights: [
      'Mortarless interlocking granite blocks absorb seismic tremors without structural collapse.',
      'Brihadeeswarar Temple (Thanjavur) features an 80-tonne monolithic granite cupola hoisted 66 meters high.',
      'Musical pillars at Hampi and Madurai resonate at specific musical notes (Sa, Re, Ga, Ma) when struck.',
    ],
    primarySource: 'Manasara Shilpa Shastra & Mayamata',
    sanskritVerse: 'प्रासादं यः प्रकुरुते विधानेन समाहितः । स सर्वलोकमभ्येति विष्णोः परममुत्तमम् ॥',
    verseTranslation:
      '"He who creates an architectural sanctuary with focused mathematical rigor attains the supreme realm." — Samarangana Sutradhara',
    modernParallel:
      'Modern seismic dampening, acoustic wave resonance in concert halls, and modular stone interlocking.',
  },
  {
    id: 'wheel',
    title: 'Konark Sun Temple Chronometry',
    sanskritTitle: 'सूर्यकालचक्रम्',
    xPercent: 37,
    yPercent: 54,
    category: 'Astronomy & Horology',
    summary:
      'The 24 carved stone wheels of the 13th-century Konark Sun Temple in Odisha function as a monumental sundial, calculating precise solar time to the minute.',
    keyInsights: [
      '24 wheels symbolize the 24 fortnights (Pakshas) of the Hindu solar year.',
      'Each wheel possesses 8 major spokes dividing the 24-hour day into eight 3-hour periods (Prahars).',
      'The shadow of the axle falling across the carved beadings between spokes reveals the time in Ghatis (24 min) and Palas (24 sec).',
    ],
    primarySource: 'Surya Siddhanta & Brihat Samhita',
    sanskritVerse: 'कालाद्भवन्ति भूतानि कालात्परिवर्तन्ते च । कालः सृजति भूतानि कालः संहरते प्रजाः ॥',
    verseTranslation:
      '"From Time all beings arise; in Time they cycle; Time generates and reabsorbs all." — Surya Siddhanta',
    modernParallel:
      'Solar chronometry, equinoctial alignment, and astronomical observation towers.',
  },
  {
    id: 'dance',
    title: 'Classical Natya & Cosmic Kinetics',
    sanskritTitle: 'नाट्यशास्त्रं ताण्डवलक्षणम्',
    xPercent: 40,
    yPercent: 36,
    category: 'Performing Arts & Aesthetics',
    summary:
      'Bharata Munis Natya Shastra encodes sacred kinesiology, 108 Karanas (fundamental dance units), and mudras expressing cosmic cycles and emotional states (Rasa).',
    keyInsights: [
      'Nataraja (the Cosmic Dancer) visualizes continuous creation, preservation, destruction, illusion, and liberation.',
      'Physicist Fritjof Capra observed: "Modern physics has shown that the rhythm of creation and destruction is depicted in the dance of Shiva."',
      'A 2-meter Nataraja statue was unveiled at CERN (Geneva) in 2004 celebrating cosmic subatomic particle kinetics.',
    ],
    primarySource: 'Natya Shastra by Bharata Muni (c. 200 BCE)',
    sanskritVerse: 'यतो हस्तस्ततो दृष्टिर्यतो दृष्टिस्ततो मनः । यतो मनस्ततो भावो यतो भावस्ततो रसः ॥',
    verseTranslation:
      '"Where the hands go, eyes follow; where the eyes go, the mind follows; where the mind goes, emotion awakens; where emotion is, aesthetic bliss (Rasa) arises."',
    modernParallel:
      'Biomechanics, kinetic expressiveness in robotics, and non-verbal semantic communication.',
  },
  {
    id: 'astronomy',
    title: 'Khagola Shastra: Planetary Spheres',
    sanskritTitle: 'खगोलशास्त्रम्',
    xPercent: 32,
    yPercent: 24,
    category: 'Astronomy & Mathematics',
    summary:
      'Indian astronomers calculated the spherical nature of Earth, axial rotation, planetary orbital periods, and trigonometric sine values with astrolabes and armillary spheres.',
    keyInsights: [
      'Aryabhata (499 CE) stated Earth is spherical and rotates daily on its axis: "Just as a person in a boat moving forward sees stationary objects moving backward..."',
      'Calculated the sidereal rotation of the Earth as 23h 56m 4.1s (modern value: 23h 56m 4.091s).',
      'Accurately determined the value of Pi as 3.1416 (Aryabhatiya 2.10).',
    ],
    primarySource: 'Aryabhatiya of Aryabhata (499 CE)',
    sanskritVerse: 'चतुरधिकं शतमष्टगुणं द्वाषष्टिस्तथा सहस्राणाम् । अयुतद्वयविष्कम्भस्यासन्नो वृत्तपरिणाहः ॥',
    verseTranslation:
      '"Add 4 to 100, multiply by 8, add 62,000: this is the approximate circumference of a circle of diameter 20,000." (3.1416) — Aryabhatiya 2.10',
    modernParallel:
      'Orbital mechanics, trigonometric approximations, and planetary ephemeris modeling.',
  },
  {
    id: 'ecology',
    title: 'Himalayan Rivers & Ecological Stewardship',
    sanskritTitle: 'नदीसूक्तं प्रकृतिसंरक्षणम्',
    xPercent: 68,
    yPercent: 64,
    category: 'Ecology & Natural Sciences',
    summary:
      'The Vedic reverence for rivers (Nadi Sukta) and forests created indigenous watershed protection, rainwater harvesting (stepwells/kunds), and botanical medicine (Vrikshayurveda).',
    keyInsights: [
      'Surapalas Vrikshayurveda (c. 10th century) detailed plant pathology, soil taxonomy, graft propagation, and biopesticides.',
      'Stepwells (Baolis) engineered complex microclimate cooling and multi-tiered aquifer recharge systems in arid zones.',
      'Sacred groves (Devrai/Kavu) preserved climax forest biodiversity for over a millennium.',
    ],
    primarySource: 'Rigveda Nadi Sukta (10.75) & Surapalas Vrikshayurveda',
    sanskritVerse: 'दशकूपसमा वापी दशवापीसमो ह्रदः । दशह्रदसमः पुत्रो दशपुत्रसमो द्रुमः ॥',
    verseTranslation:
      '"A pond equals ten wells, a reservoir equals ten ponds, a worthy son equals ten reservoirs, and a tree equals ten sons." — Matsya Purana',
    modernParallel:
      'Hydrological watershed management, permaculture agroforestry, and biodiversity sanctuaries.',
  },
  {
    id: 'projector',
    title: 'The Modern Lens & Young Explorers',
    sanskritTitle: 'ज्ञानपरम्परायाः पुनर्जागरणम्',
    xPercent: 78,
    yPercent: 44,
    category: 'Contemporary Renaissance',
    summary:
      'The glowing spotlight represents modern scientific re-examination of IKS: students and researchers applying AI, metallurgy, and medicine to ancient heritage.',
    keyInsights: [
      'National Education Policy (NEP 2020) institutionalized IKS across premier technological and scientific universities.',
      'Sushrutas nasal flap reconstruction remains the foundational benchmark in modern maxillofacial plastic surgery.',
      'Crucible steel (Wootz) investigations by modern metallurgists revealed naturally occurring carbon nanotubes.',
    ],
    primarySource: 'Contemporary IKS Research & Peer-Reviewed Journals',
    sanskritVerse: 'सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै । तेजस्वि नावधीतमस्तु मा विद्विषावहै ॥',
    verseTranslation:
      '"May we be protected together; may we be nourished together; may we work together with great energy; may our study be illuminated." — Taittiriya Upanishad',
    modernParallel:
      'Interdisciplinary research combining ancient empirical knowledge with modern STEM methodology.',
  },
];

export const KNOWLEDGE_PILLARS: KnowledgePillar[] = [
  {
    id: 'ganita',
    name: 'Ganita & Khagola',
    sanskritName: 'गणितं खगोलशास्त्रं च',
    iconName: 'Calculator',
    era: '800 BCE – 1500 CE',
    color: 'from-amber-500 to-yellow-600',
    tagline: 'The Science of Numbers, Infinite Series & Celestial Mechanics',
    description:
      'From the conceptualization of zero (shunya) as a number with arithmetic rules to the decimal place-value system and calculus centuries before Newton, ancient Indian mathematics formed the bedrocks of world computation.',
    treatises: [
      {
        title: 'Brahmasphutasiddhanta',
        author: 'Brahmagupta',
        date: '628 CE',
        highlight: 'First treatise to formulate arithmetic with Zero, negative numbers, and quadratic equations.',
      },
      {
        title: 'Aryabhatiya',
        author: 'Aryabhata',
        date: '499 CE',
        highlight: 'Approximated Pi to 4 decimal places, sine tables, spherical Earth, and heliocentric insights.',
      },
      {
        title: 'Yuktidipika & Tantrasamgraha',
        author: 'Madhava of Sangamagrama / Nilakantha',
        date: '14th–15th Century CE',
        highlight: 'Discovered infinite series for Pi, sine, and cosine (Madhava-Leibniz series) 300 years before European calculus.',
      },
      {
        title: 'Lilavati & Bijaganita',
        author: 'Bhaskaracharya II',
        date: '1150 CE',
        highlight: 'Systematic algebra, permutations, combinations, and early notions of differential calculus.',
      },
    ],
    breakthroughs: [
      {
        title: 'The Invention of Zero & Place Value',
        sanskritTerm: 'शून्य (Śūnya) & दशगुणोत्तर (Daśaguṇottara)',
        description: 'Transformed mathematics from clumsy additive symbols into a fluid calculation engine adopted by the Arab world and Europe.',
        impact: 'Foundation of modern computing and planetary mathematics.',
      },
      {
        title: 'Madhava Infinite Series (Calculus)',
        sanskritTerm: 'अनन्तश्रेणी (Ananta-śreṇī)',
        description: 'Derived the power series expansion for arctangent, sine, and cosine in Kerala, predating Gregory, Newton, and Leibniz.',
        impact: 'Pre-requisite for mathematical analysis and numerical algorithms.',
      },
      {
        title: 'Baudhayana Sulba Sutras (Pythagorean Triples)',
        sanskritTerm: 'शुल्बसूत्राणि (Śulbasūtrāṇi)',
        description: 'Geometric theorem on rectangles and diagonals stated around 800 BCE, along with square root of 2 approximation accurate to 5 decimals.',
        impact: 'Early axiomatic geometry used for fire altar design (Shyena-chiti).',
      },
    ],
    verse: {
      sanskrit: 'यथा शिखा मयूराणां नागानां मणयो यथा । तद्वद्वेदाङ्गशास्त्राणां गणितं मूर्धनि स्थितम् ॥',
      transliteration: 'Yathā śikhā mayūrāṇāṁ nāgānāṁ maṇayo yathā | Tadvad vedāṅga-śāstrāṇāṁ gaṇitaṁ mūrdhani sthitam ||',
      translation: 'Like the crest on the head of a peacock, like the gem on the hood of a cobra, so does mathematics stand at the summit of all sciences.',
      source: 'Vedanga Jyotisha 4',
    },
  },
  {
    id: 'ayurveda',
    name: 'Ayurveda & Shalya Tantra',
    sanskritName: 'आयुर्वेदः शल्यतन्त्रं च',
    iconName: 'HeartPulse',
    era: '1000 BCE – Present',
    color: 'from-emerald-500 to-teal-700',
    tagline: 'Holistic Living, Pharmacopeia & The Birthplace of Surgery',
    description:
      'Sushruta, honored universally as the Father of Plastic Surgery, pioneered rhinoplasty, cataract extraction, and 121 surgical instruments, while Charaka established holistic psychosomatic medicine based on Tridosha equilibrium.',
    treatises: [
      {
        title: 'Sushruta Samhita',
        author: 'Maharshi Sushruta',
        date: 'c. 600 BCE',
        highlight: 'Contains 184 chapters detailing 1,120 illnesses, 700 medicinal plants, and 121 surgical instruments (Shastras & Yantras).',
      },
      {
        title: 'Charaka Samhita',
        author: 'Maharshi Charaka / Agnivesha',
        date: 'c. 2nd Century BCE',
        highlight: 'Foundational text of internal medicine (Kayachikitsa), digestion (Agni), metabolism, and preventative health.',
      },
      {
        title: 'Ashtanga Hridaya',
        author: 'Vagbhata',
        date: 'c. 6th Century CE',
        highlight: 'Synthesized Charaka and Sushruta into a harmonious clinical framework practiced worldwide.',
      },
    ],
    breakthroughs: [
      {
        title: 'Pedicled Cheek & Forehead Flap Rhinoplasty',
        sanskritTerm: 'नासासंधानविधि (Nāsāsaṁdhānavidhi)',
        description: 'Reconstructed severed noses using living cheek/forehead tissue flaps with hollow reed air-tubes, published in London in 1794 after observing Pune surgeons.',
        impact: 'Established the foundation of modern reconstructive plastic surgery.',
      },
      {
        title: 'Cataract Surgery (Couching)',
        sanskritTerm: 'लिङ्गनाशकर्म (Liṅganāśakarma)',
        description: 'Sushruta utilized a curved needle (Javamukhi Salaka) to displace the clouded lens to restore functional vision.',
        impact: 'First recorded ocular surgical procedure in medical history.',
      },
      {
        title: 'Holistic Tridosha & Circadian Biology (Dinacharya)',
        sanskritTerm: 'दोषधातुमलविज्ञानम् (Doṣadhātumalavijñānam)',
        description: 'Systemic synchronization of daily and seasonal habits with metabolic fire, body humors (Vata, Pitta, Kapha), and psychological balance.',
        impact: 'Pioneered chronobiology and personalized preventative medicine.',
      },
    ],
    verse: {
      sanskrit: 'हिताहितं सुखं दुःखमायुस्तस्य हिताहितम् । मानं च तच्च यत्रोक्तमायुर्वेदः स उच्यते ॥',
      transliteration: 'Hitāhitaṁ sukhaṁ duḥkham āyustasya hitāhitam | Mānaṁ ca tac ca yatroktam āyurvedaḥ sa ucyate ||',
      translation: 'That science is designated as Ayurveda where the beneficial, non-beneficial, joyful, and sorrowful spans of life, together with what is wholesome and unwholesome, are expounded.',
      source: 'Charaka Samhita, Sutrasthana 1.41',
    },
  },
  {
    id: 'dhatuvidya',
    name: 'Dhatuvidya & Rasashastra',
    sanskritName: 'धातुविद्या रसशास्त्रं च',
    iconName: 'Flame',
    era: '3000 BCE – 1800 CE',
    color: 'from-orange-500 to-amber-700',
    tagline: 'Ancient Indian Metallurgy, Wootz Crucible Steel & Rustless Alloys',
    description:
      'India was renowned globally for high-carbon Wootz steel (which forged legendary Damascus blades), the rustless Iron Pillar of Delhi, and early high-temperature zinc distillation at Zawar centuries before Europe.',
    treatises: [
      {
        title: 'Rasaratnakara',
        author: 'Nagarjuna',
        date: 'c. 8th Century CE',
        highlight: 'Explored metallurgy, extraction of zinc, brass preparation, and chemical purification.',
      },
      {
        title: 'Rasarnava',
        author: 'Anonymous Alchemical Scholar',
        date: 'c. 12th Century CE',
        highlight: 'Detailed color tests of flame, cupellation, distillation, and furnaces (Kosthi).',
      },
      {
        title: 'Dhatuvada & Yuktikalpataru',
        author: 'Bhoja Raja',
        date: 'c. 11th Century CE',
        highlight: 'Classified iron, steel, alloys, sword forging techniques, and nautical ship construction.',
      },
    ],
    breakthroughs: [
      {
        title: 'Wootz Crucible Steel (Ukku)',
        sanskritTerm: 'तीक्ष्णलोह (Tīkṣṇaloha)',
        description: 'Melted iron with carbon-rich biomass in closed clay crucibles at 1400°C, forming banded carbide patterns and carbon nanotubes.',
        impact: 'Prized worldwide for sharpness; exported across the Silk Route to Damascus.',
      },
      {
        title: 'The Rustless Iron Pillar of Delhi',
        sanskritTerm: 'लौहस्तम्भ (Lauhastambha)',
        description: 'A 6-tonne forged wrought-iron pillar erected in the 4th century CE that has resisted monsoon weathering for 1,600+ years.',
        impact: 'Formed a protective crystalline iron hydrogen phosphate hydrate (misawite) film.',
      },
      {
        title: 'Industrial Zinc Distillation at Zawar',
        sanskritTerm: 'यसदभस्म (Yasadabhasma)',
        description: 'Distillation of zinc requires condensing vapor at 907°C without re-oxidizing. India operated retorts at Zawar (Rajasthan) by 1100 CE, 600 years before William Champion.',
        impact: 'Awarded the ASM International Historical Metallurgical Landmark status.',
      },
    ],
    verse: {
      sanskrit: 'सुलक्षणं सुरूपं च दृढं कान्तं सुघोषवत् । सर्वदोषविनिर्मुक्तं लोहं श्रेष्ठं विदुर्बुधाः ॥',
      transliteration: 'Sulakṣaṇaṁ surūpaṁ ca dṛḍhaṁ kāntaṁ sughoṣavat | Sarvadoṣavinirmuktaṁ lohaṁ śreṣṭhaṁ vidurbudhāḥ ||',
      translation: 'Having fine grain, beautiful surface luster, unyielding strength, acoustic resonance, and freed from all flaws: such metal the wise proclaim supreme.',
      source: 'Rasaratnasamuchchaya',
    },
  },
  {
    id: 'sthapatya',
    name: 'Sthapatya & Shilpa Shastra',
    sanskritName: 'स्थापत्यवेदः शिल्पशास्त्रं च',
    iconName: 'Building2',
    era: '2500 BCE – 1700 CE',
    color: 'from-amber-600 to-stone-700',
    tagline: 'Sacred Architecture, Hydraulic Engineering & Monolithic Carving',
    description:
      'From the standardized fired-brick urban drainage of Harappa and Mohenjo-daro to the top-down rock-hewn Kailasa Temple at Ellora and the acoustic marvels of medieval stone sanctuaries.',
    treatises: [
      {
        title: 'Manasara',
        author: 'Sage Manasara',
        date: 'c. 5th–7th Century CE',
        highlight: 'Comprehensive encyclopedia of town planning, proportions, pillar orders, and royal civil structures.',
      },
      {
        title: 'Mayamata',
        author: 'Sage Maya',
        date: 'c. 8th Century CE',
        highlight: 'Treatise on housing, site selection, soil testing, modular grids (Mandala), and sacred orientation.',
      },
      {
        title: 'Samarangana Sutradhara',
        author: 'King Bhoja of Dhar',
        date: '1050 CE',
        highlight: 'Covers city planning, palace architecture, mechanical automata (Yantras), and temple construction.',
      },
    ],
    breakthroughs: [
      {
        title: 'Kailasa Temple (Ellora Cave 16)',
        sanskritTerm: 'कैलासनाथ मन्दिर (Kailāsanātha Mandira)',
        description: 'World’s largest monolithic rock excavation: 200,000 tonnes of basalt carved top-to-bottom with zero margin for error.',
        impact: 'Unrivaled feat of sculptural subtraction and structural engineering.',
      },
      {
        title: 'Hydraulic Baolis & Stepwell Reservoirs',
        sanskritTerm: 'वापी (Vāpī) & कुण्ड (Kuṇḍa)',
        description: 'Multi-tiered subterranean architectural stepwells (e.g. Rani ki Vav) harvesting desert rainfall while cooling ambient air by 5–6°C.',
        impact: 'Sustainable arid water preservation and UNESCO World Heritage marvels.',
      },
      {
        title: 'Vastu Purusha Mandala Geometry',
        sanskritTerm: 'वास्तुपुरुषमण्डल (Vāstupuruṣamaṇḍala)',
        description: 'Cosmic geometric fractal grid (8x8 or 9x9) integrating cardinal orientation, air flow, and structural load distribution.',
        impact: 'Early system of modular architectural planning and biophilic orientation.',
      },
    ],
    verse: {
      sanskrit: 'यस्मिन् देशे च काले च यद्द्रव्यं यत्प्रयोजनम् । तत्तथैव विधातव्यं शिल्पिना तत्त्वदर्शिना ॥',
      transliteration: 'Yasmin deśe ca kāle ca yaddravyaṁ yatprayojanam | Tattathaiva vidhātavyaṁ śilpinā tattvadarśinā ||',
      translation: 'Whatever material suits the specific place, time, and function, precisely that must be utilized by the architect who perceives fundamental reality.',
      source: 'Samarangana Sutradhara',
    },
  },
  {
    id: 'vyakarana',
    name: 'Vyakarana & Bhashavidya',
    sanskritName: 'व्याकरणं भाषाविद्या च',
    iconName: 'BookOpen',
    era: '600 BCE – 500 CE',
    color: 'from-indigo-600 to-purple-800',
    tagline: 'Computational Linguistics & The Generative Grammar of Panini',
    description:
      'Panini’s Ashtadhyayi is celebrated by computer scientists (such as Leonard Bloomfield and Noam Chomsky) as the earliest known formal computing language, formulating recursive rule systems 2,500 years before modern software compilers.',
    treatises: [
      {
        title: 'Ashtadhyayi',
        author: 'Panini',
        date: 'c. 5th–4th Century BCE',
        highlight: 'Contains 3,959 concise sutras that generate the entirety of correct Sanskrit morphology and phonology algorithmically.',
      },
      {
        title: 'Mahabhashya',
        author: 'Patanjali',
        date: 'c. 2nd Century BCE',
        highlight: 'Philosophical and analytical commentary probing linguistic semantics, syntax, and cognitive philosophy.',
      },
      {
        title: 'Vakyapadiya',
        author: 'Bhartrihari',
        date: 'c. 5th Century CE',
        highlight: 'Philosophy of language exploring Sphota (instantaneous burst of meaning) and the relationship between sound and thought.',
      },
    ],
    breakthroughs: [
      {
        title: 'The Shiva Sutras & Auxiliary Markers (It-samjna)',
        sanskritTerm: 'माहेश्वरसूत्राणि (Māheśvarasūtrāṇi)',
        description: 'Organized phonetic sounds into concise algorithmic sub-ranges (Pratyaharas) with meta-variables, exactly like modern regular expressions.',
        impact: 'First formal meta-language and precursor to Backus-Naur Form (BNF).',
      },
      {
        title: 'Rule Ordering & Conflict Resolution Engine',
        sanskritTerm: 'विप्रतिषेधे परं कार्यम् (Vipratiṣedhe paraṁ kāryam)',
        description: 'Engineered an unambiguous rule prioritization mechanism to resolve overlapping generative rules systematically.',
        impact: 'Directly mirrors modern production rules in compiler theory and AI syntax parsers.',
      },
      {
        title: 'Acoustic Phonetics & The Varṇamālā',
        sanskritTerm: 'स्थानकरणप्रयत्न (Sthānakaraṇaprayatna)',
        description: 'The Sanskrit alphabet is mapped precisely according to vocal tract articulation points (velar, palatal, retroflex, dental, labial).',
        impact: 'Highest phonetic precision in human linguistics, ideal for natural language processing.',
      },
    ],
    verse: {
      sanskrit: 'न सोऽस्ति प्रत्ययो लोके यः शब्दानुगमादृते । अनुविद्धमिव ज्ञानं सर्वं शब्देन भासते ॥',
      transliteration: 'Na so\'sti pratyayo loke yaḥ śabdānugamād ṛte | Anuviddham iva jñānaṁ sarvaṁ śabdena bhāsate ||',
      translation: 'There is no cognition in this world without the accompaniment of language; all knowledge illuminates only as it is intertwined with the word.',
      source: 'Bhartrihari, Vakyapadiya 1.123',
    },
  },
  {
    id: 'darshana',
    name: 'Darshana & Tarka Shastra',
    sanskritName: 'दर्शनं तर्कशास्त्रं च',
    iconName: 'Compass',
    era: '1500 BCE – Present',
    color: 'from-rose-600 to-amber-700',
    tagline: 'Systematic Logic, Epistemology & Atomic Ontology',
    description:
      'The six classical Darshanas (Nyaya, Vaisheshika, Samkhya, Yoga, Mimamsa, Vedanta) formulated rigorous epistemology (Pramana), atomic physics (Kanada’s Paramāṇu), and psychological discipline.',
    treatises: [
      {
        title: 'Nyaya Sutras',
        author: 'Aksapada Gautama',
        date: 'c. 2nd Century BCE',
        highlight: 'Formalized 5-step inductive-deductive syllogism and the four valid means of knowledge (perception, inference, comparison, testimony).',
      },
      {
        title: 'Vaisheshika Sutras',
        author: 'Sage Kanada',
        date: 'c. 6th Century BCE',
        highlight: 'Formulated atomic theory (Paramāṇu), postulating that invisible indestructible particles combine to compose physical substances.',
      },
      {
        title: 'Yoga Sutras',
        author: 'Patanjali',
        date: 'c. 400 CE',
        highlight: 'Eight-limbed (Ashtanga) psychological discipline for mastery over mental fluctuations (Chitta Vritti Nirodha).',
      },
    ],
    breakthroughs: [
      {
        title: 'Kanada’s Atomic Theory of Paramāṇu',
        sanskritTerm: 'परमाणुवाद (Paramāṇuvāda)',
        description: 'Stated all matter is composed of indivisible atoms (Paramāṇu) that form binary dyads (Dvyanuka) and triads (Tryanuka) under heat and motion.',
        impact: 'Early material ontology and physical chemistry theory.',
      },
      {
        title: 'Nyaya Epistemology (Pramana Shastra)',
        sanskritTerm: 'प्रमाणशास्त्र (Pramāṇaśāstra)',
        description: 'Established rigorous standards of proof: Pratyaksha (perception), Anumana (inference), Upamana (analogy), and Shabda (trustworthy testimony).',
        impact: 'Formed the intellectual basis for philosophical debate and scientific validation in ancient India.',
      },
      {
        title: 'Navya-Nyaya Formal Logic',
        sanskritTerm: 'नव्यन्याय (Navya-Nyāya)',
        description: 'Developed in 12th-century Mithila and Bengal by Gangesha Upadhyaya, using precise technical language to eliminate semantic ambiguity.',
        impact: 'Analyzed by mathematical logicians (e.g. Frits Staal) as equivalent to modern symbolic mathematical logic.',
      },
    ],
    verse: {
      sanskrit: 'प्रत्यक्षावगतस्य हि अनुमानेन बुभुत्सिते । प्रत्यक्षं तु परं ज्ञानं यतः सर्वं प्रवर्तते ॥',
      transliteration: 'Pratyakṣāvagasya hi anumānena bubhūtsite | Pratyakṣaṁ tu paraṁ jñānaṁ yataḥ sarvaṁ pravartate ||',
      translation: 'What is directly perceived becomes the foundation for inquiry through inference; indeed, perception is the supreme basis from which all sciences proceed.',
      source: 'Nyaya Bhashya',
    },
  },
];

export const POLYMATHS: Polymath[] = [
  {
    id: 'aryabhata',
    name: 'Aryabhata',
    sanskritName: 'आर्यभटः',
    period: '476 – 550 CE',
    location: 'Kusumapura (Modern Patna, Bihar)',
    field: 'Mathematics & Astronomy',
    masterwork: 'Aryabhatiya',
    biography:
      'Wrote his seminal 121-verse masterwork Aryabhatiya at just 23 years of age. He boldly asserted Earth’s diurnal rotation, explained lunar and solar eclipses via shadows rather than demons, gave Pi = 3.1416, and created table of sines.',
    keyContributions: [
      'Earth spins daily on its axis and orbits the Sun.',
      'Approximation of Pi as 3.1416.',
      'Introduction of Jya (Sine) and Kojya (Cosine) tables.',
      'Solved indeterminate linear equations using the Kuttaka (pulverizer) algorithm.',
    ],
  },
  {
    id: 'sushruta',
    name: 'Maharshi Sushruta',
    sanskritName: 'महर्षिः सुश्रुतः',
    period: 'c. 600 BCE',
    location: 'Kashi (Varanasi, Uttar Pradesh)',
    field: 'Surgery & Anatomy',
    masterwork: 'Sushruta Samhita',
    biography:
      'Regarded globally as the Father of Plastic Surgery. Taught students anatomy using submersed human cadaver dissection and practiced surgical suturing with plant fibers and ant heads.',
    keyContributions: [
      'Pioneered forehead flap rhinoplasty.',
      'Documented 121 surgical instruments and 300+ procedures.',
      'First surgical extraction of ocular cataracts (couching).',
      'Advanced protocols for antisepsis, fractures, and lithotomy (stone extraction).',
    ],
  },
  {
    id: 'panini',
    name: 'Panini',
    sanskritName: 'पाणिनिः',
    period: 'c. 5th – 4th Century BCE',
    location: 'Shalatula (Near modern Attock, Gandhara)',
    field: 'Linguistics & Computing Theory',
    masterwork: 'Ashtadhyayi',
    biography:
      'The genius who formalized Sanskrit with 3,959 algebraic aphorisms. His work is recognized as the world’s first generative grammar, using meta-languages, recursion, and auxiliary symbols.',
    keyContributions: [
      '3,959 rule formal grammar generating complete spoken language.',
      'Invented the concept of the auxiliary marker (It) used in compiler tokens.',
      'Formulated the Shiva Sutras phonetic matrix.',
      'Predecessor to Backus-Naur Form (BNF) notation in modern computing.',
    ],
  },
  {
    id: 'brahmagupta',
    name: 'Brahmagupta',
    sanskritName: 'ब्रह्मगुप्तः',
    period: '598 – 668 CE',
    location: 'Bhillamala (Bhinmal, Rajasthan)',
    field: 'Mathematics & Astronomy',
    masterwork: 'Brahmasphutasiddhanta',
    biography:
      'Head of the astronomical observatory at Ujjain. He was the first mathematician in world history to explicitly treat Zero as a full number with operational rules for addition, subtraction, and multiplication.',
    keyContributions: [
      'Formulated arithmetic rules for Zero and negative numbers.',
      'Discovered the formula for the area of a cyclic quadrilateral (Brahmagupta’s Formula).',
      'Solved Pell’s equation centuries before John Pell.',
      'Stated that Earth exerts an attractive force (Gurutvakarshan): "Bodies fall towards the Earth as it is in the nature of Earth to attract bodies."',
    ],
  },
  {
    id: 'madhava',
    name: 'Madhava of Sangamagrama',
    sanskritName: 'सङ्गमग्राममाधवः',
    period: '1340 – 1425 CE',
    location: 'Kerala (Kerala School of Astronomy and Mathematics)',
    field: 'Calculus & Infinite Series',
    masterwork: 'Golavada & Yuktibhasha (transmitted)',
    biography:
      'Founder of the Kerala School. Over 250 years before Isaac Newton and Gottfried Wilhelm Leibniz, Madhava pioneered mathematical analysis, step limits, and power series expansions.',
    keyContributions: [
      'Infinite series for Pi: Pi/4 = 1 - 1/3 + 1/5 - 1/7 + ... (Madhava-Leibniz series).',
      'Power series expansions for Sine and Cosine (Madhava-Newton series).',
      'Approximated Pi correct to 11 decimal places (3.14159265359).',
      'Early integration concepts calculating surface areas and arc lengths.',
    ],
  },
  {
    id: 'bhaskara2',
    name: 'Bhaskaracharya II',
    sanskritName: 'भास्कराचार्यः द्वितीयः',
    period: '1114 – 1185 CE',
    location: 'Vijjadhavida (Karnataka/Maharashtra border)',
    field: 'Mathematics & Astronomy',
    masterwork: 'Siddhanta Shiromani (Lilavati, Bijaganita, Grahaganita, Goladhyaya)',
    biography:
      'Chief mathematician at the Ujjain observatory. His poetic treatise Lilavati, written for his daughter, introduced playful mathematical puzzles, while Bijaganita pioneered differential calculus concepts.',
    keyContributions: [
      'Formulated early differential calculus: derivative of sine is cosine.',
      'Observed that instantaneous motion (Tatkaliki gati) is zero at extreme points.',
      'Solved indeterminate quadratic equations of the second order (Chakravala method).',
      'Stated that dividing any quantity by zero results in an infinite quantity (Khahara).',
    ],
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Who is revered as the "Adikavi" (first poet) of Sanskrit literature who composed the Ramayana in the sacred Anushtubh meter?',
    options: ['Maharishi Valmiki', 'Sage Veda Vyasa', 'Maharishi Vishwamitra', 'Sage Agastya'],
    correctIndex: 0,
    explanation:
      'Maharishi Valmiki composed the 24,000 verses across 7 Kandas of the Ramayana in the divine Anushtubh meter after witnessing the sorrow of a Krauncha bird, earning him the eternal title of Adikavi.',
    sourceTreatise: 'Valmiki Ramayana, Bala Kanda 1.2',
    domain: 'Ramayana · Adikavya',
  },
  {
    id: 2,
    question: 'At the Sita Swayamvar in Mithila organized by King Janaka, which divine bow did Prabhu Shree Ram lift and string to win Devi Sita’s hand?',
    options: ['Gandiva', 'Shiva Dhanush (Pinaka)', 'Sharanga', 'Vijaya Dhanush'],
    correctIndex: 1,
    explanation:
      'Prabhu Shree Ram lifted, strung, and broke the mighty Shiva Dhanush (Pinaka), preserved through generations by the royal house of Mithila, fulfilling King Janaka’s sacred condition for Sita’s marriage.',
    sourceTreatise: 'Valmiki Ramayana, Bala Kanda 67',
    domain: 'Ramayana · Bala Kanda',
  },
  {
    id: 3,
    question: 'Which invincible son of Ravana could only be vanquished by a warrior who had renounced sleep for fourteen consecutive years, fulfilled by Lakshmana?',
    options: ['Kumbhakarna', 'Indrajit (Meghanada)', 'Akshayakumara', 'Prahasta'],
    correctIndex: 1,
    explanation:
      'Indrajit held a celestial boon making him invincible except against a Gudakesha—one who conquered sleep. Lakshmana devoted all 14 years of exile in sleepless vigil to protect Sri Rama and Devi Sita.',
    sourceTreatise: 'Valmiki Ramayana, Yuddha Kanda 90',
    domain: 'Ramayana · Yuddha Kanda',
  },
  {
    id: 4,
    question: 'In the Yuddha Kanda, which miraculous life-restoring herb from Mount Dronagiri did Shri Hanuman retrieve to revive Lakshmana?',
    options: ['Ashwagandha', 'Brahmi', 'Mrita Sanjeevani', 'Sudarshana'],
    correctIndex: 2,
    explanation:
      'When Royal Physician Sushena specified the sacred Sanjeevani herb, Shri Hanuman flew across the subcontinent, lifted the entire Dronagiri peak upon his hand, and delivered it before sunrise to revive Lakshmana.',
    sourceTreatise: 'Valmiki Ramayana, Yuddha Kanda 74',
    domain: 'Ramayana · Sundara & Yuddha Kanda',
  },
  {
    id: 5,
    question: 'On which sacred mountain near the Pampa lake did Sugreeva find sanctuary, knowing Vali could not enter due to Sage Matanga’s curse?',
    options: ['Mount Rishyamukha', 'Mount Kailash', 'Mount Gandhamadana', 'Mount Vindhyachala'],
    correctIndex: 0,
    explanation:
      'Sugreeva took refuge on Mount Rishyamukha accompanied by Hanuman and his loyal ministers, protected by Sage Matanga’s curse that Vali would perish if he ever stepped upon the sacred hill.',
    sourceTreatise: 'Valmiki Ramayana, Kishkindha Kanda 10',
    domain: 'Ramayana · Kishkindha Kanda',
  },
  {
    id: 6,
    question: 'Which Vedic fire ceremony did King Dasharatha perform under Sage Rishyasringa to obtain noble heirs for the Ikshvaku dynasty?',
    options: ['Ashwamedha Yajna', 'Putra Kameshti Yajna', 'Rajasuya Yajna', 'Sarpa Satra'],
    correctIndex: 1,
    explanation:
      'King Dasharatha performed the Putra Kameshti Yajna led by Sage Rishyasringa. Lord Agni appeared from the sacrificial flames offering divine payasam, leading to the birth of Rama, Bharata, Lakshmana, and Shatrughna.',
    sourceTreatise: 'Valmiki Ramayana, Bala Kanda 15',
    domain: 'Ramayana · Bala Kanda',
  },
  {
    id: 7,
    question: 'Who were the two skilled Vanara architects, sons of divine builder Vishwakarma, who engineered the construction of the Rama Setu?',
    options: ['Angada and Tara', 'Nala and Nila', 'Jambavan and Mainda', 'Sushena and Dvivida'],
    correctIndex: 1,
    explanation:
      'Endowed with structural and acoustic wisdom from Vishwakarma, Nala directed the engineering of the floating stone causeway across the ocean to Lanka in five days, ably supported by Nila and the Vanara army.',
    sourceTreatise: 'Valmiki Ramayana, Yuddha Kanda 22',
    domain: 'Ramayana · Sthapatya & Engineering',
  },
  {
    id: 8,
    question: 'Despite choosing the path of adharma, Ravana was an accomplished scholar of the Sama Veda and composed which celebrated Sanskrit hymn praising Lord Shiva?',
    options: ['Shiva Tandava Stotram', 'Vishnu Sahasranama', 'Hanuman Chalisa', 'Aditya Hridaya Stotram'],
    correctIndex: 0,
    explanation:
      'Ravana was a master veena player and Vedic scholar who composed the intricately metered "Shiva Tandava Stotram" when subdued beneath Mount Kailash, winning Lord Shiva’s grace and the Chandrahas sword.',
    sourceTreatise: 'Classical Stotra Literature & Valmiki Ramayana',
    domain: 'Ramayana · Classical Sanskrit',
  },
  {
    id: 9,
    question: 'Which sacred solar hymn did Sage Agastya impart to Prabhu Shree Ram on the battlefield to dispel fatigue and bestow ultimate victory?',
    options: ['Gayatri Mantra', 'Aditya Hridaya Stotram', 'Purusha Sukta', 'Rudra Prashna'],
    correctIndex: 1,
    explanation:
      'Sage Agastya approached Sri Rama during the final battle and initiated him into the "Aditya Hridaya Stotram," invoking the infinite cosmic power of Surya Deva to restore spiritual vigor and triumph over Ravana.',
    sourceTreatise: 'Valmiki Ramayana, Yuddha Kanda 105',
    domain: 'Ramayana · Yuddha Kanda',
  },
  {
    id: 10,
    question: 'During Prabhu Shree Ram’s 14-year exile, how did Bharata govern the kingdom of Kosala from Nandigrama?',
    options: [
      'He crowned himself sovereign emperor of Ayodhya',
      'He placed Sri Rama’s sacred sandals (Padukas) upon the throne and ruled as a humble trustee',
      'He appointed ministers to run an autonomous council',
      'He relocated the royal capital to Mithila'
    ],
    correctIndex: 1,
    explanation:
      'In an exemplary demonstration of Rajadharma and brotherly devotion, Bharata refused the throne of Ayodhya, placed Sri Rama’s Charana Padukas on the Simhasana, and lived as an ascetic guardian in Nandigrama.',
    sourceTreatise: 'Valmiki Ramayana, Ayodhya Kanda 115',
    domain: 'Ramayana · Dharma & Rajaneeti',
  },
];
