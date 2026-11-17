import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Compass,
  ChevronUp,
  Info,
  X,
  ZoomIn,
  ExternalLink,
  BookOpen,
  Globe,
  Scroll,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Award,
  Binary,
  Cpu,
  Code,
  FileText,
} from 'lucide-react';
import { LotusIcon } from './LotusIcon';
const ramayanaSideImg = '/assets/aistudio/Archer_Before_the_Demon_King_e7e13863.jpg';
const mahabharatSideImg = '/assets/aistudio/Divine_Flute_Over_the_Battlefield_f8a77299.jpg';
import swarajSideImg from '../assets/images/swaraj_sovereignty_art_1792917266524.jpg';
import vedasSideImg from '../assets/images/vedas_sacred_scriptures_1793362177304.jpg';
import scientistsSideImg from '../assets/images/indian_scientists_art_1793356681255.jpg';
import universitiesSideImg from '../assets/images/indian_universities_art_1793356680991.jpg';
import aryabhataImg from '../assets/images/aryabhata_astronomer_1793362203010.jpg';
import sushrutaImg from '../assets/images/sushruta_surgeon_1793362222306.jpg';
import nalandaImg from '../assets/images/nalanda_university_1793362250180.jpg';
import pingalaImg from '../assets/images/pingala_binary_sanskrit_1793629443860.jpg';
import sanskritAiImg from '../assets/images/sanskrit_ai_semantics_1793629460543.jpg';

interface ChapterItem {
  numeral: string;
  title: string;
  sanskritTitle?: string;
  description: string;
  topics: string[];
  image?: string;
}

interface GroupSection {
  id: string;
  pages: string;
  title: string;
  subtitle: string;
  percentTop: number;
  percentHeight: number;
  chapters: ChapterItem[];
}

interface ChapterCatalogViewProps {
  onBackToSpotlight: () => void;
  onOpenSimulator: () => void;
  onOpenEpicPortal?: (epic: 'ramayana' | 'mahabharat' | 'bhosale') => void;
}

const GROUPS_DATA: GroupSection[] = [
  {
    id: 'hero-header',
    pages: '01',
    title: 'INDIAN KNOWLEDGE SYSTEM',
    subtitle: 'भारतीय ज्ञानपरम्परा · The Living Matrix of Ancient Indian Sciences',
    percentTop: 0,
    percentHeight: 29.92,
    chapters: [
      {
        numeral: 'Prologue',
        title: 'Epoch Introduction: Indian Knowledge System',
        sanskritTitle: 'भारतीय ज्ञानपरम्परा प्रवेशः',
        description:
          'Historical canvas spanning three millennia of Vedic science, geometry, astronomy, linguistics, metallurgy, and surgical treatises.',
        topics: [
          'The Living Tradition of Indian Knowledge (IKS)',
          'Integration of empirical sciences with philosophical rigor',
          'Classical treatises from Rigveda to Aryabhatiya and Sushruta Samhita',
        ],
      },
    ],
  },
  {
    id: 'group-1',
    pages: '02 · 03',
    title: 'Group 1: Ramayana & Mahabharat',
    subtitle: 'Chapters I & II: The Great Epics, Civilizational Ethos & Statecraft',
    percentTop: 29.92,
    percentHeight: 16.58,
    chapters: [
      {
        numeral: 'I',
        title: 'Ramayana',
        sanskritTitle: 'रामायणम्',
        image: ramayanaSideImg,
        description:
          'The Adi Kavya: Cosmic Order, Dharma, and the Journey of Maryada Purushottama.',
        topics: [
          'Maryada Purushottama: Ethical framework of righteous conduct and statecraft',
          'Valmiki Ramayana: Structural harmony, poetic meters (Shloka), and civilizational ethos',
          'Geographical cartography, sacred geography, and botanical heritage of the ancient subcontinent',
        ],
      },
      {
        numeral: 'II',
        title: 'Mahabharat',
        sanskritTitle: 'महाभारतम्',
        image: mahabharatSideImg,
        description:
          'The Great Epic of Dharma, Moral Dilemmas, Statecraft, and the Divine Dialogue of the Bhagavad Gita.',
        topics: [
          'Raja Dharma, statecraft, and the complex ethical dilemmas in the Kurukshetra conflict',
          'The Bhagavad Gita: Synthesis of Jnana, Karma, and Bhakti Yoga for human action',
          'Shanti Parva & Vidura Niti: Classical foundations of jurisprudence and strategic diplomacy',
        ],
      },
    ],
  },
  {
    id: 'group-2',
    pages: '04 · 05',
    title: 'Group 2: Swaraj & Vedas',
    subtitle: 'Chapters III & IV: Indigenous Sovereignty and the Sacred Vedas',
    percentTop: 47.66,
    percentHeight: 16.58,
    chapters: [
      {
        numeral: 'III',
        title: 'Swaraj',
        sanskritTitle: 'स्वराज्यम्',
        image: swarajSideImg,
        description:
          'The Philosophy of Self-Rule, Spiritual Autonomy, and Civilizational Self-Determination.',
        topics: [
          'Inner Swaraj: Mastery over senses, conscious ethical discipline, and spiritual freedom (Atma-Niyantrana)',
          'Outer Swaraj: Decentralized self-governing communities, indigenous science, and sovereignty',
          'Reclaiming authentic indigenous thought matrices and civilizational self-reliance',
        ],
      },
      {
        numeral: 'IV',
        title: 'Vedas',
        sanskritTitle: 'वेदाः',
        image: vedasSideImg,
        description:
          'The Four Sacred Samhitas of Eternal Knowledge, Cosmic Order (Rta), and Philosophical Inquiries.',
        topics: [
          'Rigveda, Samaveda, Yajurveda, and Atharvaveda: Structure, chanting intonations (Svara), and preservation',
          'Cosmic order (Rta), Vedic epistemology, and the profound Hymn of Creation (Nasadiya Sukta)',
          'Philosophical evolution towards the Upanishads and foundational sciences of ancient India',
        ],
      },
    ],
  },
  {
    id: 'group-3',
    pages: '06 · 07',
    title: 'Group 3: Indian Scientists & Indian Universities',
    subtitle: 'Chapters V & VI: Pioneers of Ancient Science, Discoveries & World-Renowned Academies',
    percentTop: 65.40,
    percentHeight: 16.58,
    chapters: [
      {
        numeral: 'V',
        title: 'Indian Scientists and Their Contribution',
        sanskritTitle: 'भारतीयवैज्ञानिकाः तेषां योगदानं च',
        image: scientistsSideImg,
        description:
          'Pioneering breakthroughs in astronomy, mathematics, metallurgy, medicine, and surgery that laid the foundations of empirical science.',
        topics: [
          'Aryabhata: Diurnal rotation of Earth, value of Pi (π), solar-lunar eclipses, and sine tables (Jya)',
          'Sushruta: Father of Surgery, rhinoplasty, cataract extraction, and 121 surgical instruments (Sushruta Samhita)',
          'Brahmagupta: Mathematical principles of Zero (Shunya), negative numbers, and quadratic equations',
          'Charaka & Kanāda: Holistic medical etiology, atomic theory of matter (Vaisheshika), and alchemy',
        ],
      },
      {
        numeral: 'VI',
        title: 'Indian Universities',
        sanskritTitle: 'भारतीयविश्वविद्यालयाः',
        image: universitiesSideImg,
        description:
          'World-renowned ancient residential seats of higher learning: Nalanda, Takshashila, Vikramashila, and Vallabhi.',
        topics: [
          'Takshashila (Taxila): Global cosmopolitan university of medicine, statecraft (Chanakya), and grammar (Panini)',
          'Nalanda Mahavihara: 10,000 international scholars, 2,000 professors, and the 9-story Dharmaganja library',
          'Vikramashila, Vallabhi & Odantapuri: Centers of logic (Nyaya), metaphysics, astronomy, and linguistics',
          'Rigorous entrance examinations (Dwarapala debate) and interdisciplinary residential pedagogy',
        ],
      },
    ],
  },
  {
    id: 'group-4',
    pages: '08 · 09',
    title: 'Group 4: Sanskrit, Binary Computation & Artificial Intelligence',
    subtitle: 'Chapters VII & VIII: Acharya Pingala & Panini in Modern Computing',
    percentTop: 83.14,
    percentHeight: 16.86,
    chapters: [
      {
        numeral: 'VII',
        title: 'Relation Between Sanskrit and Computer Language',
        sanskritTitle: 'संस्कृतं सङ्गणकभाषा च',
        image: pingalaImg,
        description:
          'In the 3rd century BCE, Acharya Pingala developed Chandaḥśāstra, mapping poetic meters (Laghu and Guru) identically to binary 0s and 1s with algorithmic combinations.',
        topics: [
          'Laghu & Guru: 3rd century BCE syllable mapping functioning identically to binary 0s and 1s',
          'Powers of 2 and Combinatorics: Algorithmic procedures (Prastara) generating 2ⁿ combinations',
          'Modern parallels: Pingala’s 8-syllable meters mirroring modern 8-bit byte architectures',
        ],
      },
      {
        numeral: 'VIII',
        title: 'Relation Between Sanskrit and Artificial Intelligence',
        sanskritTitle: 'संस्कृतं कृत्रिमबुद्धिमत्ता च',
        image: sanskritAiImg,
        description:
          'The 1985 NASA AI Magazine paper by Rick Briggs analyzing Panini’s generative grammar (c. 500 BCE) as an unambiguous semantic network for AI knowledge representation.',
        topics: [
          'The 1985 Paper: Rick Briggs (NASA Ames Research Center) in AI Magazine',
          'Panini’s Ashtadhyayi: Algorithmic rule-based grammar avoiding natural language ambiguity',
          'Semantic networks: How Sanskrit syntactic structures mirror modern AI knowledge graphs',
        ],
      },
    ],
  },
];

export interface VedaDetail {
  id: string;
  numeral: string;
  englishName: string;
  sanskritName: string;
  transliteration: string;
  essence: string;
  shortSummary: string;
  wikiPageTitle: string;
  wikiUrl: string;
  fullWikipediaArticleExtract: string;
  keyAspects: {
    composition: string;
    focus: string;
    officiatingPriest: string;
    prominentUpanishads: string;
    sacredHymn: string;
  };
}

export const VEDAS_DATA: VedaDetail[] = [
  {
    id: 'rigveda',
    numeral: 'I',
    englishName: 'Rigveda',
    sanskritName: 'ऋग्वेदः',
    transliteration: 'Ṛgveda',
    essence: 'The Veda of Sacred Hymns & Cosmic Praise',
    shortSummary: 'Oldest known Vedic Sanskrit scripture consisting of 1,028 hymns dedicated to cosmic order and cosmological inquiry.',
    wikiPageTitle: 'Rigveda',
    wikiUrl: 'https://en.wikipedia.org/wiki/Rigveda',
    fullWikipediaArticleExtract:
      'The Rigveda (Sanskrit: ऋग्वेदः ṛgveda, from ṛc "praise" and veda "knowledge") is an ancient Indian collection of Vedic Sanskrit hymns. It is one of the four sacred canonical Hindu texts known as the Vedas, and is the oldest known Vedic Sanskrit text. Its early layers are among the oldest extant texts in any Indo-European language. The Rigveda is divided into ten books (Maṇḍalas) comprising 1,028 hymns (sūktas) with 10,600 verses (ṛcs). The hymns are dedicated to Rigvedic deities including Agni, Indra, Varuna, and Soma, and contain profound cosmological hymns such as the Nasadiya Sukta ("Creation Hymn") and Purusha Sukta.',
    keyAspects: {
      composition: '10 Maṇḍalas (Books), 1,028 Sūktas, 10,600 Mantras / Ṛcs',
      focus: 'Cosmic Order (Ṛta), Invocations, Cosmological Inquiries, Epistemology',
      officiatingPriest: 'Hotṛ (Reciter & Invoker of Sacred Mantras)',
      prominentUpanishads: 'Aitareya Upaniṣad, Kauṣītaki Upaniṣad',
      sacredHymn: 'Nāsadīya Sūkta (10.129 - Creation Hymn), Gāyatrī Mantra (3.62.10)',
    },
  },
  {
    id: 'samaveda',
    numeral: 'II',
    englishName: 'Samaveda',
    sanskritName: 'सामवेदः',
    transliteration: 'Sāmaveda',
    essence: 'The Veda of Melodies & Chants',
    shortSummary: 'Scripture of sacred musical chants and melodies, revered as the foundational source of Indian classical music.',
    wikiPageTitle: 'Samaveda',
    wikiUrl: 'https://en.wikipedia.org/wiki/Samaveda',
    fullWikipediaArticleExtract:
      'The Samaveda (Sanskrit: सामवेदः sāmaveda, from sāman "melody" and veda "knowledge") is the scripture of sacred melodies and devotional chants. It is an ancient Vedic Sanskrit text and an essential part of the scriptures of Hinduism. Consisting of 1,875 verses, nearly all derived from the Rigveda, they are organized not for speech or recitation, but for melodic singing (Gāna) with specific musical notations during sacred Soma rituals. The Samaveda is revered across classical traditions as the primordial source of Indian music, rhythmic systems (Tala), and Gandharva Veda.',
    keyAspects: {
      composition: '1,875 Verses arranged in Ārcika and Gāna melodic collections',
      focus: 'Sacred Melodic Singing, Musical Notations, Chanting Intonations (Svara)',
      officiatingPriest: 'Udgātṛ (Master Singer and Chanter of Rituals)',
      prominentUpanishads: 'Chāndogya Upaniṣad, Kena Upaniṣad',
      sacredHymn: 'Sāma Gāna, Pavamāna Melodic Chants',
    },
  },
  {
    id: 'yajurveda',
    numeral: 'III',
    englishName: 'Yajurveda',
    sanskritName: 'यजुर्वेदः',
    transliteration: 'Yajurveda',
    essence: 'The Veda of Sacrificial Formulas & Liturgical Rituals',
    shortSummary: 'Liturgical handbook for priests performing ritual actions, ceremonies, and altar geometry (Śulba Sūtras).',
    wikiPageTitle: 'Yajurveda',
    wikiUrl: 'https://en.wikipedia.org/wiki/Yajurveda',
    fullWikipediaArticleExtract:
      'The Yajurveda (Sanskrit: यजुर्वेदः yajurveda, from yajus "ritual formula / sacrificial prayer" and veda "knowledge") is the liturgical handbook for priests performing ritual actions, ceremonies, and sacrifices. It contains prose mantras and instructions. The Yajurveda is broadly divided into two major historical recensions: the Śukla Yajurveda ("White Yajurveda", having clear mantras separate from commentaries) and the Kṛṣṇa Yajurveda ("Black Yajurveda", which interweaves mantras with explanatory prose). It gave rise to the Śulba Sūtras, ancient mathematical treatises detailing altar geometry.',
    keyAspects: {
      composition: 'Two major branches: Śukla (White) and Kṛṣṇa (Black) Yajurveda',
      focus: 'Ceremonial Actions, Sacred Mantras, Altar Geometry (Śulba Sūtras)',
      officiatingPriest: 'Adhvaryu (Architect & Executive Priest of Ceremonies)',
      prominentUpanishads: 'Bṛhadāraṇyaka, Īśa, Kaṭha, Taittirīya, Śvetāśvatara',
      sacredHymn: 'Śrī Rudram Chamakam, Śānti Pāṭha',
    },
  },
  {
    id: 'atharvaveda',
    numeral: 'IV',
    englishName: 'Atharvaveda',
    sanskritName: 'अथर्ववेदः',
    transliteration: 'Atharvaveda',
    essence: 'The Veda of Everyday Life, Healing & Metaphysics',
    shortSummary: 'Canonical scripture of daily life, healing remedies (roots of Āyurveda), peace, and profound ecological hymns.',
    wikiPageTitle: 'Atharvaveda',
    wikiUrl: 'https://en.wikipedia.org/wiki/Atharvaveda',
    fullWikipediaArticleExtract:
      'The Atharvaveda (Sanskrit: अथर्ववेदः atharvaveda, from atharvan "ancient seer of daily domestic rites" and veda "knowledge") is the fourth canonical Veda of Hinduism. Unlike the three liturgical Vedas, it addresses the everyday experiences and practical welfare of human life: medical remedies, healing botanical flora (the seminal roots of Āyurveda), domestic harmony, charms, statecraft, and profound cosmological hymns. It contains the celebrated Pṛthvī Sūkta (Hymn to the Earth), recognized worldwide as an ancient charter of ecological stewardship.',
    keyAspects: {
      composition: '20 Kāṇḍas (Books), 730 Sūktas, ~6,000 Verses',
      focus: 'Indigenous Healing (Āyurveda), Ecology, Protection, Metaphysics',
      officiatingPriest: 'Brahman (Silent Supreme Observer & Guardian of Rites)',
      prominentUpanishads: 'Muṇḍaka (origin of "Satyameva Jayate"), Praśna, Māṇḍūkya',
      sacredHymn: 'Pṛthvī Sūkta (12.1 - Ode to Mother Earth)',
    },
  },
];

export interface ScientistDetail {
  id: string;
  numeral: string;
  englishName: string;
  sanskritName: string;
  transliteration: string;
  era: string;
  field: string;
  image: string;
  shortSummary: string;
  contributions: string[];
  wikiUrl: string;
}

export const INDIAN_SCIENTISTS_DATA: ScientistDetail[] = [
  {
    id: 'aryabhata',
    numeral: 'I',
    englishName: 'Aryabhata',
    sanskritName: 'आर्यभटः',
    transliteration: 'Āryabhaṭa',
    era: '476–550 CE (Classical Gupta Period)',
    field: 'Astronomy & Mathematics (ज्योतिषं गणितं च)',
    image: aryabhataImg,
    shortSummary: 'Master of classical Indian astronomy and mathematics; author of the immortal Aryabhatiya and Arya-siddhanta.',
    contributions: [
      'Earth’s Diurnal Rotation: First astronomer to state that the Earth rotates on its own axis daily, causing day and night.',
      'Accurate Value of Pi (π): Computed π to 3.1416, explicitly classifying it as an approximation (āsanna).',
      'Scientific Explanation of Eclipses: Discovered that solar and lunar eclipses are shadows cast by the moon and earth, rejecting mythic dragon lore.',
      'Trigonometric Functions: Formulated sine (jyā), cosine (kojyā), and versine (utkrama-jyā) tables.',
      'Kuṭṭaka Algorithm: Developed systematic methods for solving linear indeterminate equations (ax + by = c).',
      'Epicyclic Planetary Models: Calculated the sidereal year to 365 days, 6 hours, 12 minutes, and 30 seconds.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Aryabhata',
  },
  {
    id: 'sushruta',
    numeral: 'II',
    englishName: 'Sushruta',
    sanskritName: 'सुश्रुतः',
    transliteration: 'Suśruta',
    era: 'c. 800–600 BCE (Kashi / Varanasi)',
    field: 'Surgery & Plastic Surgery (शल्यचिकित्सा)',
    image: sushrutaImg,
    shortSummary: 'Globally celebrated Father of Surgery and Father of Plastic Surgery; author of the seminal Sushruta Samhita.',
    contributions: [
      'Pioneer of Rhinoplasty: Invented forehead and cheek flap nasal reconstruction, the cornerstone of modern reconstructive plastic surgery.',
      'Extracapsular Cataract Extraction: Pioneered ophthalmic surgery and couching method to remove cataracts with a curved needle.',
      'Surgical Instrumentarium: Designed and categorized 121 precise steel surgical instruments (scalpels, lancets, forceps, trocars, specula).',
      'Over 300 Surgical Procedures: Described cesarean operations, lithotomy (bladder stone removal), intestinal suturing with black ant pincers, and amputations.',
      'Rigorous Anatomical Training: Mandated surgical practice on fruits, watermelons, and animal hides, and conducted human dissection via water immersion.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Sushruta',
  },
  {
    id: 'charaka',
    numeral: 'III',
    englishName: 'Charaka',
    sanskritName: 'चरकः',
    transliteration: 'Caraka',
    era: 'c. 300–100 BCE (Ancient India)',
    field: 'Holistic Medicine & Ayurveda (कायचिकित्सा)',
    image: scientistsSideImg,
    shortSummary: 'Father of Indian Medicine; prime contributor to Charaka Samhita, establishing clinical diagnosis and systemic homeostasis.',
    contributions: [
      'Tridosha Homeostasis: Codified the fundamental equilibrium of Vata, Pitta, and Kapha as the core determinant of health and disease.',
      'Metabolic Science (Agni): Discovered that digestion, nutrient absorption, and metabolism govern physiological vitality.',
      'Preventive Healthcare: Emphasized Dinacharya (daily regimen), Ritucharya (seasonal adaptation), and mental wellbeing over mere symptomatic treatment.',
      'Medical Ethics: Codified the foundational oath for physicians, establishing non-discrimination, compassion, and patient confidentiality.',
      'Pharmacology & Toxicology: Classified hundreds of medicinal plants, mineral preparations, and systemic detoxification therapies.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Charaka',
  },
  {
    id: 'brahmagupta',
    numeral: 'IV',
    englishName: 'Brahmagupta',
    sanskritName: 'ब्रह्मगुप्तः',
    transliteration: 'Brahmagupta',
    era: '598–668 CE (Bhillamala / Rajasthan)',
    field: 'Number Theory & Gravity (अंकगणितं गुरुत्वाकर्षणं च)',
    image: aryabhataImg,
    shortSummary: 'Author of the Brahmasphutasiddhanta; first mathematician to formalize zero as a computational number with negative arithmetic.',
    contributions: [
      'Rules of Zero (Śūnya): Established arithmetic operations for zero: 0 + 0 = 0, a - 0 = a, a × 0 = 0, and rules for negative numbers (debts).',
      'Gravitational Force: Stated that "bodies fall towards the earth as it is in the nature of the earth to attract and keep bodies" centuries before Newton.',
      'Brahmagupta’s Formula: Discovered the exact formula for the area of any cyclic quadrilateral: K = √((s-a)(s-b)(s-c)(s-d)).',
      'Brahmasphutasiddhanta: Advanced astronomical algorithms and computed planetary conjunctions and eclipses.',
      'Indeterminate Quadratic Equations: Solved Nx² + 1 = y² through the Bhavana composition method.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Brahmagupta',
  },
  {
    id: 'varahamihira',
    numeral: 'V',
    englishName: 'Varahamihira',
    sanskritName: 'वराहमिहिरः',
    transliteration: 'Varāhamihira',
    era: '505–587 CE (Ujjain)',
    field: 'Astronomy, Hydrology & Geophysics (खगोलं जलविज्ञानं च)',
    image: scientistsSideImg,
    shortSummary: 'Foremost court polymath of Ujjain; author of Pancha-Siddhantika and the encyclopedic Brihat Samhita.',
    contributions: [
      'Hydrology & Groundwater Detection: Formulated botanical, geological, and termite mound indicators to locate underground aquifers.',
      'Pancha-Siddhantika: Synthesized five classical astronomical schools into an authoritative mathematical treatise.',
      'Trigonometric Identities: Discovered sin²(x) + cos²(x) = 1 and sin(x) = cos(π/2 - x).',
      'Combinatorics: Formulated early combinatorial mathematics and precursor to Pascal’s triangle.',
      'Meteorology: Catalogued seasonal weather patterns, earthquake precursors, and atmospheric optical phenomena.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Var%C4%81hamihira',
  },
  {
    id: 'kanada',
    numeral: 'VI',
    englishName: 'Kanāda',
    sanskritName: 'कणादः',
    transliteration: 'Kaṇāda',
    era: 'c. 6th–2nd Century BCE (Prabhas Patan)',
    field: 'Atomic Physics & Metaphysics (परमाणुवादः)',
    image: scientistsSideImg,
    shortSummary: 'Founder of the Vaisheshika school of philosophy; pioneer of atomic theory (Paramanu) and causal physics.',
    contributions: [
      'Atomic Theory (Paramāṇu): Postulated that all physical reality consists of indestructible, indivisible, indivisible spherical particles.',
      'Molecular Bonding: Formulated that two Paramāṇus combine into a Dvyaṇuka (diatomic), and three Dvyaṇukas form a Trasareṇu (triatomic particle).',
      'Chemical Transformations (Pākajotpatti): Explained how heat and chemical actions transform physical properties of matter.',
      'Theory of Motion (Karman): Analyzed inertia, gravity, elasticity, and fluids within a rigorous logical framework.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Kanada_(philosopher)',
  },
  {
    id: 'bhaskara2',
    numeral: 'VII',
    englishName: 'Bhaskara II',
    sanskritName: 'भास्कराचार्यः',
    transliteration: 'Bhāskarācārya',
    era: '1114–1185 CE (Bijapur / Ujjain)',
    field: 'Calculus & Algebra (कलनगणितं बीजगणितं च)',
    image: aryabhataImg,
    shortSummary: 'Author of Siddhanta Shiromani (Lilavati & Bijaganita); pioneer of differential calculus centuries before modern Europe.',
    contributions: [
      'Foundations of Differential Calculus: Calculated instantaneous motion of planets and derivative of trigonometric functions.',
      'Division by Zero: Stated that dividing a finite quantity by zero results in an infinite quantity (Khahara / अनंत).',
      'Chakravala Cyclic Method: Perfected algorithm for solving indeterminate quadratic equations (Pell’s equation), praised by Euler.',
      'Lilavati: Celebrated poetic mathematical treatise spanning geometry, arithmetic progressions, and permutations.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Bh%C4%81skara_II',
  },
];

export interface UniversityDetail {
  id: string;
  numeral: string;
  englishName: string;
  sanskritName: string;
  transliteration: string;
  location: string;
  era: string;
  image: string;
  ideologyTitle: string;
  ideologies: string[];
  shortSummary: string;
  wikiUrl: string;
}

export const INDIAN_UNIVERSITIES_DATA: UniversityDetail[] = [
  {
    id: 'nalanda',
    numeral: 'I',
    englishName: 'Nalanda Mahavihara',
    sanskritName: 'नालन्दा महाविहारः',
    transliteration: 'Nālandā Mahāvihāra',
    location: 'Magadha (Modern Bihar, India)',
    era: '5th Century CE – 1200 CE (Founded by Gupta Dynasty)',
    image: nalandaImg,
    ideologyTitle: 'Integrated Universal Pedagogy & Dialectical Inquiry',
    shortSummary: 'The crown jewel of ancient world residential universities, housing 10,000 scholars and 2,000 master teachers across Asia.',
    ideologies: [
      'Dialectical Freedom: Synthesis of Mahayana and Theravada Buddhist philosophies with Vedic Shad-Darshanas, Samkhya, and Nyaya logic.',
      'The 9-Story Dharmaganja Library: Housed hundreds of thousands of illuminated manuscripts in Ratnasagara, Ratnodadhi, and Ratnaranjaka towers.',
      'Strict Meritocratic Admission: Dvarapala (gatekeeper) oral disputations where only 20% of the world’s brightest scholars were admitted.',
      'Interdisciplinary Curricula: Compulsory mastery of Hetuvidya (Logic), Sabdavidya (Linguistics), Chikitsavidya (Medicine), and Astronomy.',
      'International Scholarly Crucible: Welcomed seekers from China (Xuanzang, Yijing), Korea, Japan, Tibet, Persia, and Sumatra.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Nalanda',
  },
  {
    id: 'takshashila',
    numeral: 'II',
    englishName: 'Takshashila (Taxila)',
    sanskritName: 'तक्षशिला विश्वविद्यालयः',
    transliteration: 'Takṣaśilā Viśvavidyālaya',
    location: 'Gandhara (Northwestern Indian Subcontinent)',
    era: 'c. 6th Century BCE – 5th Century CE',
    image: universitiesSideImg,
    ideologyTitle: 'Decentralized Mentorship, Pragmatic Statecraft & 18 Shilpas',
    shortSummary: 'The world’s oldest recorded university and intellectual academy; alma mater of Chanakya, Panini, and Charaka.',
    ideologies: [
      'Decentralized Gurukula Ecosystem: Eminent Acharyas operated sovereign academic halls under a unified civilizational syllabus.',
      '18 Shilpas (Applied Sciences): Practical training spanning metallurgy, architecture, archery, surgery, commerce, and astronomy.',
      'Strategic Statecraft (Arthashastra): Chanakya formulated classical geopolitics, espionage, economics, and Rajadharma here.',
      'Linguistic Precision: Panini synthesized the Ashtadhyayi, formulating the world’s first formal generative grammar.',
      'Open Scholarly Inquiry: Scholars of diverse traditions lived, debated, and advanced medicine, warfare, and philosophical inquiry.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Taxila',
  },
  {
    id: 'vikramashila',
    numeral: 'III',
    englishName: 'Vikramashila Mahavihara',
    sanskritName: 'विक्रमशिला महाविहारः',
    transliteration: 'Vikramaśilā Mahāvihāra',
    location: 'Bhagalpur, Bihar',
    era: 'c. 783–820 CE (Founded by Pala Emperor Dharmapala)',
    image: nalandaImg,
    ideologyTitle: 'Vajrayana Metaphysics, Tantric Logic & Scholarly Administration',
    shortSummary: 'Premier center of Tantric philosophy, logic, and metaphysics, celebrated for its six directional scholar gatekeepers.',
    ideologies: [
      'Rigorous Six-Gate Examination: Six erudite Dvarapanditas (gatekeeper professors) examined candidates on philosophy and logic.',
      'Himalayan Educational Diplomacy: Dispatched master scholars including Atisha Dipankara to reform intellectual life in Tibet.',
      'Comprehensive Logic (Nyaya): Pioneered advanced philosophical disputation, epistemology, and semantic analysis.',
      'State-Sponsored Central Administration: Maintained royal patronage with organized residential colleges and lecture auditoriums.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Vikramashila',
  },
  {
    id: 'vallabhi',
    numeral: 'IV',
    englishName: 'Vallabhi University',
    sanskritName: 'वल्लभी विश्वविद्यालयः',
    transliteration: 'Vallabhī Viśvavidyālaya',
    location: 'Saurashtra (Gujarat, Western India)',
    era: 'c. 600 CE – 1200 CE (Patronized by Maitraka Dynasty)',
    image: universitiesSideImg,
    ideologyTitle: 'Theravada Philosophy, Civil Administration & Maritime Economics',
    shortSummary: 'Western counterpart to Nalanda, renowned for diplomacy, civic governance, public administration, and commerce.',
    ideologies: [
      'Theravada & Hinayana Academics: Primary seat of Buddhist Sammitiya school along with Vedic civil jurisprudence.',
      'Administrative & Civil Training: Graduates were actively recruited into royal courts for ministerial, diplomatic, and fiscal leadership.',
      'Maritime & Commercial Studies: Situated on vital Arabian Sea trade routes, integrating commercial law, navigation, and economics.',
      'Scholarly Validation: Scholars from across the continent presented their theses at Vallabhi to gain universal academic acclaim.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Valabhi',
  },
  {
    id: 'pushpagiri',
    numeral: 'V',
    englishName: 'Pushpagiri & Ratnagiri',
    sanskritName: 'पुष्पगिरि-रत्नगिरि महाविहारः',
    transliteration: 'Puṣpagiri & Ratnagiri',
    location: 'Jajpur & Cuttack districts, Odisha',
    era: '3rd Century BCE – 11th Century CE',
    image: nalandaImg,
    ideologyTitle: 'Art, Architecture, Astronomy & Maritime Buddhist Culture',
    shortSummary: 'Glorious eastern maritime academic sanctuary celebrated in Xuanzang’s accounts for radiating intellectual light.',
    ideologies: [
      'Monastic Architectural Grandeur: Massive stupas, sculpted stone monasteries, and serene meditation caves.',
      'Integration of Yoga and Metaphysics: United philosophical introspection with astronomy and artistic sculpture.',
      'Maritime Connectivity: Hub of academic exchange connecting Kalinga with Southeast Asia and Sri Lanka.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Pushpagiri_Vihara',
  },
  {
    id: 'odantapuri',
    numeral: 'VI',
    englishName: 'Odantapuri (Uddandapura)',
    sanskritName: 'ओदन्तपुरी महाविहारः',
    transliteration: 'Odantapurī Mahāvihāra',
    location: 'Bihar Sharif (Magadha)',
    era: '8th Century CE – 1200 CE (Established by King Gopala)',
    image: universitiesSideImg,
    ideologyTitle: 'Classical Monastic College & Architectural Prototype',
    shortSummary: 'Major residential academy housing over 1,000 scholars, whose layout served as the model for Samye Monastery in Tibet.',
    ideologies: [
      'Pala Renaissance of Learning: Flourished alongside Nalanda and Vikramashila as the tripartite intellectual pillars of Magadha.',
      'Pedagogical Blueprint: Provided the structural and scholastic prototype adopted across Tibetan and Himalayan monasteries.',
      'Manuscript Preservation: Preserved valuable Sanskrit commentaries on logic, ethics, and cosmological treatises.',
    ],
    wikiUrl: 'https://en.wikipedia.org/wiki/Odantapuri',
  },
];

export const ChapterCatalogView: React.FC<ChapterCatalogViewProps> = ({
  onBackToSpotlight,
  onOpenSimulator,
  onOpenEpicPortal,
}) => {
  const [selectedGroupModal, setSelectedGroupModal] = useState<GroupSection | null>(null);
  const [activeArtworkModal, setActiveArtworkModal] = useState<{
    src: string;
    title: string;
    sanskritTitle: string;
    subtitle: string;
    description: string;
    wikiUrl: string;
    bookUrl: string;
  } | null>(null);

  // Vedas Interactive Modal & Wikipedia Integration State
  const [isVedasModalOpen, setIsVedasModalOpen] = useState<boolean>(false);
  const [selectedVedaIndex, setSelectedVedaIndex] = useState<number>(0);
  const [liveWikiData, setLiveWikiData] = useState<
    Record<string, { extract: string; description?: string; thumbnail?: string }>
  >({});
  const [isLoadingWiki, setIsLoadingWiki] = useState<boolean>(false);

  // Indian Scientists Interactive Modal & Wikipedia State
  const [isScientistsModalOpen, setIsScientistsModalOpen] = useState<boolean>(false);
  const [selectedScientistIndex, setSelectedScientistIndex] = useState<number>(0);

  // Indian Universities Interactive Modal & Wikipedia State
  const [isUniversitiesModalOpen, setIsUniversitiesModalOpen] = useState<boolean>(false);
  const [selectedUniversityIndex, setSelectedUniversityIndex] = useState<number>(0);

  // Box 7: Relation Between Sanskrit and Computer Language (Acharya Pingala) Modal State
  const [isPingalaModalOpen, setIsPingalaModalOpen] = useState<boolean>(false);

  // Box 8: Relation Between Sanskrit and Artificial Intelligence (Rick Briggs & Panini) Modal State
  const [isSanskritAiModalOpen, setIsSanskritAiModalOpen] = useState<boolean>(false);

  // Dynamically fetch Wikipedia extract for Vedas from live Wikipedia REST API
  useEffect(() => {
    if (!isVedasModalOpen) return;
    const currentVeda = VEDAS_DATA[selectedVedaIndex];
    if (!currentVeda) return;

    if (liveWikiData[currentVeda.id]) return;

    setIsLoadingWiki(true);
    const controller = new AbortController();

    fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(currentVeda.wikiPageTitle)}`,
      { signal: controller.signal }
    )
      .then((res) => {
        if (!res.ok) throw new Error('Wikipedia response not ok');
        return res.json();
      })
      .then((data) => {
        if (data && data.extract) {
          setLiveWikiData((prev) => ({
            ...prev,
            [currentVeda.id]: {
              extract: data.extract,
              description: data.description,
              thumbnail: data.thumbnail?.source,
            },
          }));
        }
      })
      .catch(() => {
        // Fallback to rich pre-configured authentic Wikipedia content
      })
      .finally(() => {
        setIsLoadingWiki(false);
      });

    return () => {
      controller.abort();
    };
  }, [isVedasModalOpen, selectedVedaIndex, liveWikiData]);

  const openScientistsModal = () => {
    setIsScientistsModalOpen(true);
  };

  const openUniversitiesModal = () => {
    setIsUniversitiesModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 pb-20 select-none">
      {/* Centered Long Continuous Image Scroll */}
      <div className="max-w-4xl mx-auto px-3 sm:px-6 pt-6 flex flex-col items-center">
        <main className="w-full flex flex-col items-center">
          
          <div className="relative w-full max-w-3xl rounded-xl overflow-hidden border border-amber-500/30 shadow-[0_25px_60px_rgba(0,0,0,0.85)] bg-[#0d0b09]">
            {/* The Long Continuous Website Image Asset from user */}
            <div className="relative w-full aspect-[736/1128] min-h-[500px] sm:min-h-[750px] md:min-h-[950px]">
              <img
                src="/assets/aistudio/interface_idea_1fa4c7b9.jpg"
                alt="Exploring India's Knowledge System - Chronicles Visual Infographic"
                width={736}
                height={1128}
                className="w-full h-full object-cover block select-none"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />

              {/* Interactive Group Highlight Overlays directly over the long image */}
              {GROUPS_DATA.map((grp) =>
                grp.id === 'hero-header' ? (
                  <div
                    key={grp.id}
                    id={grp.id}
                    className="absolute left-0 right-0 top-0 overflow-hidden z-20 flex flex-col items-center justify-center text-center p-4 sm:p-6 shadow-2xl cursor-pointer group"
                    style={{
                      height: `${grp.percentHeight}%`,
                    }}
                    onClick={() => setSelectedGroupModal(grp)}
                  >
                    {/* Clean Dark Styled Background without image */}
                    <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#14120e] via-[#181410] to-[#0d0b09] border-b border-amber-900/30" />

                    {/* Stately Title Lockup */}
                    <div className="relative z-10 max-w-2xl px-4 py-8 space-y-2 sm:space-y-3">
                      <div className="inline-flex items-center justify-center gap-2">
                        <span className="text-amber-400 text-xs font-serif">✦</span>
                        <p className="font-script text-base sm:text-lg md:text-xl text-amber-200 tracking-wider">
                          Lets dive into the world of
                        </p>
                        <span className="text-amber-400 text-xs font-serif">✦</span>
                      </div>

                      <div className="flex items-center justify-center gap-3 text-amber-400 my-1">
                        <div className="w-10 sm:w-20 h-px bg-gradient-to-r from-transparent to-amber-400" />
                        <LotusIcon className="w-6 h-6 sm:w-7 sm:h-7 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.7)]" />
                        <div className="w-10 sm:w-20 h-px bg-gradient-to-l from-transparent to-amber-400" />
                      </div>

                      <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-widest uppercase drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                        INDIAN KNOWLEDGE SYSTEM
                      </h1>

                      <p className="text-xs sm:text-sm font-serif italic text-amber-200/90 tracking-wider">
                        भारतीय ज्ञानपरम्परा · The Living Matrix of Ancient Indian Sciences
                      </p>
                    </div>
                  </div>
                ) : (
                  <div
                    key={grp.id}
                    id={grp.id}
                    className="absolute left-0 right-0 border-b border-stone-500/40 transition-all duration-300 hover:bg-amber-500/5 cursor-pointer group"
                    style={{
                      top: `${grp.percentTop}%`,
                      height: `${grp.percentHeight}%`,
                    }}
                    onClick={(e) => {
                      if (grp.id === 'group-1') {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        if (clickX < rect.width / 2) {
                          onOpenEpicPortal?.('ramayana');
                        } else {
                          onOpenEpicPortal?.('mahabharat');
                        }
                      } else if (grp.id === 'group-4') {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        if (clickX < rect.width / 2) {
                          setIsPingalaModalOpen(true);
                        } else {
                          setIsSanskritAiModalOpen(true);
                        }
                      } else {
                        setSelectedGroupModal(grp);
                      }
                    }}
                  >
                    {/* Clear Central Vertical Partition dividing Chapter 1 & 2, 3 & 4, 5 & 6, 7 & 8, 9 & 10 */}
                    <div className="absolute top-[2%] bottom-[2%] left-1/2 -translate-x-1/2 pointer-events-none flex flex-col items-center justify-between z-10">
                      {/* Top Ornament Accent */}
                      <div className="w-2 h-2 rotate-45 bg-amber-600 border border-amber-200/90 shadow-sm" />

                      {/* Continuous Engraved Spine Divider Line */}
                      <div className="w-[2px] h-full my-0.5 bg-gradient-to-b from-stone-400/40 via-stone-700/80 to-stone-400/40 shadow-[1px_0_0_rgba(255,255,255,0.45),-1px_0_0_rgba(0,0,0,0.35)]" />

                      {/* Center Decorative Medallion */}
                      <div className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center">
                        <div className="w-3.5 h-3.5 rotate-45 bg-[#b45309] border border-amber-100 shadow-[0_2px_6px_rgba(0,0,0,0.7)] flex items-center justify-center">
                          <div className="w-1.5 h-1.5 bg-amber-200 rotate-45" />
                        </div>
                      </div>

                      {/* Bottom Ornament Accent */}
                      <div className="w-2 h-2 rotate-45 bg-amber-600 border border-amber-200/90 shadow-sm" />
                    </div>

                    {/* Top Partition Header Banner matching user request */}
                    {grp.id === 'group-1' ? (
                      <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 z-20 bg-stone-900/95 text-[10px] sm:text-xs font-serif font-bold text-amber-200 px-3 py-0.5 rounded-full shadow-md border border-amber-500/50 flex items-center gap-1.5 sm:gap-2 tracking-wider backdrop-blur-sm whitespace-nowrap">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenEpicPortal?.('ramayana');
                          }}
                          className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
                          title="Open Ramayana Page"
                        >
                          <span className="text-amber-400">❖</span>
                          <span>I. Ramayana</span>
                        </button>
                        <span className="text-stone-500">|</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenEpicPortal?.('mahabharat');
                          }}
                          className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
                          title="Open Mahabharat Page"
                        >
                          <span>II. Mahabharat</span>
                          <span className="text-amber-400">❖</span>
                        </button>
                      </div>
                    ) : grp.id === 'group-2' ? (
                      <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 z-20 bg-stone-900/95 text-[10px] sm:text-xs font-serif font-bold text-amber-200 px-3 py-0.5 rounded-full shadow-md border border-amber-500/50 flex items-center gap-1.5 sm:gap-2 tracking-wider backdrop-blur-sm whitespace-nowrap">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenEpicPortal?.('bhosale');
                          }}
                          className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
                          title="Open House of Bhosale Swarajya Portal"
                        >
                          <span className="text-amber-400">❖</span>
                          <span>III. Swaraj</span>
                        </button>
                        <span className="text-stone-500">|</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsVedasModalOpen(true);
                          }}
                          className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
                          title="Open 4 Vedas Wikipedia Dossier"
                        >
                          <span>IV. Vedas</span>
                          <span className="text-amber-400">❖</span>
                        </button>
                      </div>
                    ) : grp.id === 'group-3' ? (
                      <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 z-20 bg-stone-900/95 text-[10px] sm:text-xs font-serif font-bold text-amber-200 px-3 py-0.5 rounded-full shadow-md border border-amber-500/50 flex items-center gap-1.5 sm:gap-2 tracking-wider backdrop-blur-sm whitespace-nowrap">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openScientistsModal();
                          }}
                          className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
                          title="Open Indian Scientists and Their Contribution"
                        >
                          <span className="text-amber-400">❖</span>
                          <span>V. Indian Scientists</span>
                        </button>
                        <span className="text-stone-500">|</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            openUniversitiesModal();
                          }}
                          className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
                          title="Open Indian Universities"
                        >
                          <span>VI. Indian Universities</span>
                          <span className="text-amber-400">❖</span>
                        </button>
                      </div>
                    ) : grp.id === 'group-4' ? (
                      <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 z-20 bg-stone-900/95 text-[10px] sm:text-xs font-serif font-bold text-amber-200 px-3 py-0.5 rounded-full shadow-md border border-amber-500/50 flex items-center gap-1.5 sm:gap-2 tracking-wider backdrop-blur-sm whitespace-nowrap">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPingalaModalOpen(true);
                          }}
                          className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
                          title="Open Relation Between Sanskrit and Computer Language"
                        >
                          <span className="text-amber-400">❖</span>
                          <span>VII. Sanskrit & Computer Language</span>
                        </button>
                        <span className="text-stone-500">|</span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsSanskritAiModalOpen(true);
                          }}
                          className="hover:text-amber-400 transition-colors cursor-pointer flex items-center gap-1"
                          title="Open Relation Between Sanskrit and Artificial Intelligence"
                        >
                          <span>VIII. Sanskrit & AI</span>
                          <span className="text-amber-400">❖</span>
                        </button>
                      </div>
                    ) : (
                      /* Subtle Hover Partition Label Pill for remaining groups */
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-stone-900/95 text-[10px] font-serif font-bold text-amber-200 px-2.5 py-0.5 rounded-full shadow-lg border border-amber-500/50 flex items-center gap-2 tracking-wider backdrop-blur-sm">
                        <span>CH {grp.chapters[0]?.numeral}</span>
                        <span className="text-amber-500">❖</span>
                        <span>CH {grp.chapters[1]?.numeral}</span>
                      </div>
                    )}

                    {/* In-Image Typography Replacements & Relevant Artwork for Group 1 (I. Ramayana & II. Mahabharat) */}
                    {grp.id === 'group-1' && (
                      <>
                        {/* Relevant Side Image 1 (Left): Ramayana -> Archer Before the Demon King */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveArtworkModal({
                              src: '/assets/aistudio/Archer_Before_the_Demon_King_e7e13863.jpg',
                              title: 'RAMAYAN',
                              sanskritTitle: 'रामायणम्',
                              subtitle: 'The Epic Journey of Maryada Purushottama',
                              description:
                                'is one of the two important epics of Hinduism known as the Itihasas, the other being the Mahabharata,[7] narratives of past events (purāvṛtta), interspersed with teachings on the goals of human life. The epic narrates the life and journey of Rama, the seventh avatar of the Hindu deity Vishnu, who was the prince of Ayodhya.',
                              wikiUrl: 'https://en.wikipedia.org/wiki/Ramayana',
                              bookUrl: 'https://www.esahity.com/uploads/5/0/1/2/501218/ramayan_1_shyam_kulkarni.pdf',
                            });
                          }}
                          className="absolute left-0 top-0 bottom-0 w-[28.5%] overflow-hidden z-20 shadow-lg border-r border-amber-900/60 bg-stone-900 cursor-pointer group/side transition-all duration-300 hover:brightness-110 hover:ring-2 hover:ring-amber-400"
                          role="button"
                          tabIndex={0}
                          title="Click to view Archer Before the Demon King"
                        >
                          <img
                            src={ramayanaSideImg}
                            alt="Archer Before the Demon King"
                            className="w-full h-full object-cover object-center group-hover/side:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40 group-hover/side:bg-amber-500/10 transition-colors" />
                        </div>

                        {/* Chapter I: Ramayana Center Card (White Side Part) */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenEpicPortal?.('ramayana');
                          }}
                          className="absolute left-[28.8%] w-[20.7%] top-[12%] bottom-[6%] bg-white flex flex-col items-center justify-center text-center px-1 cursor-pointer select-none z-20 shadow-xs hover:ring-2 hover:ring-amber-500 hover:bg-amber-50/90 transition-all group/ramayana"
                          role="button"
                          tabIndex={0}
                          title="Click to open Ramayana Page"
                        >
                          <span className="font-serif font-bold text-[10px] sm:text-xs md:text-sm text-stone-800 leading-none">
                            I
                          </span>
                          <h3 className="font-serif font-black text-[10px] sm:text-xs md:text-sm tracking-wide text-stone-950 uppercase mt-0.5 leading-tight group-hover/ramayana:text-amber-900">
                            Ramayana
                          </h3>
                          {/* Sanskrit Name Below Title */}
                          <p className="font-serif font-bold text-[10px] sm:text-xs md:text-[13px] text-amber-900 leading-tight mt-0.5">
                            रामायणम्
                          </p>
                          <p className="hidden sm:block text-[8px] md:text-[9px] font-serif text-stone-600 mt-0.5 leading-tight max-w-[95%]">
                            Adikavya · Maryada Purushottama · Dharma
                          </p>
                          <span className="text-[7.5px] uppercase tracking-wider font-mono text-amber-800 font-bold mt-0.5 group-hover/ramayana:underline">
                            (Open Ramayana ↗)
                          </span>
                        </div>

                        {/* Chapter II: Mahabharat Center Card (White Side Part) */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenEpicPortal?.('mahabharat');
                          }}
                          className="absolute left-[50.5%] w-[20.7%] top-[12%] bottom-[6%] bg-white flex flex-col items-center justify-center text-center px-1 cursor-pointer select-none z-20 shadow-xs hover:ring-2 hover:ring-amber-500 hover:bg-amber-50/90 transition-all group/mahabharat"
                          role="button"
                          tabIndex={0}
                          title="Click to open Mahabharat Page"
                        >
                          <span className="font-serif font-bold text-[10px] sm:text-xs md:text-sm text-stone-800 leading-none">
                            II
                          </span>
                          <h3 className="font-serif font-black text-[10px] sm:text-xs md:text-sm tracking-wide text-stone-950 uppercase mt-0.5 leading-tight group-hover/mahabharat:text-amber-900">
                            Mahabharat
                          </h3>
                          {/* Sanskrit Name Below Title */}
                          <p className="font-serif font-bold text-[10px] sm:text-xs md:text-[13px] text-amber-900 leading-tight mt-0.5">
                            महाभारतम्
                          </p>
                          <p className="hidden sm:block text-[8px] md:text-[9px] font-serif text-stone-600 mt-0.5 leading-tight max-w-[95%]">
                            Itihasa · Statecraft · Bhagavad Gita
                          </p>
                          <span className="text-[7.5px] uppercase tracking-wider font-mono text-amber-800 font-bold mt-0.5 group-hover/mahabharat:underline">
                            (Open Mahabharat ↗)
                          </span>
                        </div>

                        {/* Relevant Side Image 2 (Right): Mahabharat */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveArtworkModal({
                              src: mahabharatSideImg,
                              title: 'MAHABHARAT',
                              sanskritTitle: 'महाभारतम्',
                              subtitle: 'The Great Epic of Dharma, Moral Dilemmas & the Gita',
                              description:
                                'is one of the two major Sanskrit epics of ancient India in Hinduism, the other being the Ramayana. It narrates the struggle between two groups of cousins in the Kurukshetra War and the fates of the Kaurava and the Pandava princes and their successors. It also contains philosophical and devotional material, such as the Bhagavad Gita.',
                              wikiUrl: 'https://en.wikipedia.org/wiki/Mahabharata',
                              bookUrl: 'https://www.esahity.com/uploads/5/0/1/2/501218/mahabharata_esahity.pdf',
                            });
                          }}
                          className="absolute right-0 top-0 bottom-0 w-[28.5%] overflow-hidden z-20 shadow-lg border-l border-amber-900/60 bg-stone-900 cursor-pointer group/side transition-all duration-300 hover:brightness-110 hover:ring-2 hover:ring-amber-400"
                          role="button"
                          tabIndex={0}
                          title="Click to view Divine Flute Over the Battlefield"
                        >
                          <img
                            src={mahabharatSideImg}
                            alt="Divine Flute Over the Battlefield"
                            className="w-full h-full object-cover object-center group-hover/side:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40 group-hover/side:bg-amber-500/10 transition-colors" />
                        </div>
                      </>
                    )}

                    {/* In-Image Typography Replacements & Relevant Artwork for Group 2 (III. Swaraj & IV. Enemies) */}
                    {grp.id === 'group-2' && (
                      <>
                        {/* Relevant Side Image 3 (Left): Swaraj / House of Bhosale trigger */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            onOpenEpicPortal?.('bhosale');
                          }}
                          className="absolute left-0 top-0 bottom-0 w-[28.5%] overflow-hidden z-20 shadow-lg border-r border-amber-900/60 bg-stone-900 cursor-pointer group/side transition-all duration-300 hover:brightness-110 hover:ring-2 hover:ring-amber-400"
                          role="button"
                          tabIndex={0}
                          title="Click to open House of Bhosale Swarajya Triptych"
                        >
                          <img
                            src={swarajSideImg}
                            alt="Swaraj Sovereignty Artwork"
                            className="w-full h-full object-cover object-center group-hover/side:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40 group-hover/side:bg-amber-500/10 transition-colors" />
                        </div>

                        {/* Chapter III: Swaraj Center Card */}
                        <div className="absolute left-[28.8%] w-[20.7%] top-[12%] bottom-[6%] bg-white flex flex-col items-center justify-center text-center px-1 pointer-events-none select-none z-10 shadow-xs">
                          <span className="font-serif font-bold text-[10px] sm:text-xs md:text-sm text-stone-800 leading-none">
                            III
                          </span>
                          <h3 className="font-serif font-black text-[10px] sm:text-xs md:text-sm tracking-wide text-stone-950 uppercase mt-0.5 leading-tight">
                            Swaraj
                          </h3>
                          {/* Sanskrit Name Below Title */}
                          <p className="font-serif font-bold text-[10px] sm:text-xs md:text-[13px] text-amber-900 leading-tight mt-0.5">
                            स्वराज्यम्
                          </p>
                          <p className="hidden sm:block text-[8px] md:text-[9px] font-serif text-stone-600 mt-0.5 leading-tight max-w-[95%]">
                            Self-Rule · Sovereignty · Autonomy
                          </p>
                        </div>

                        {/* Chapter IV: Vedas Center Card */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsVedasModalOpen(true);
                          }}
                          className="absolute left-[50.5%] w-[20.7%] top-[12%] bottom-[6%] bg-white flex flex-col items-center justify-center text-center px-1 cursor-pointer select-none z-20 shadow-xs hover:ring-2 hover:ring-amber-500 hover:bg-amber-50/95 transition-all group/vedas"
                          role="button"
                          tabIndex={0}
                          title="Click to view the 4 Vedas (चत्वारो वेदाः) and Wikipedia information"
                        >
                          <span className="font-serif font-bold text-[10px] sm:text-xs md:text-sm text-stone-800 leading-none">
                            IV
                          </span>
                          <h3 className="font-serif font-black text-[10px] sm:text-xs md:text-sm tracking-wide text-stone-950 uppercase mt-0.5 leading-tight group-hover/vedas:text-amber-900">
                            Vedas
                          </h3>
                          {/* Sanskrit Name Below Title */}
                          <p className="font-serif font-bold text-[10px] sm:text-xs md:text-[13px] text-amber-900 leading-tight mt-0.5">
                            वेदाः
                          </p>
                          <p className="hidden sm:block text-[8px] md:text-[9px] font-serif text-stone-600 mt-0.5 leading-tight max-w-[95%]">
                            Sacred Knowledge · Rig, Sama, Yajur, Atharva
                          </p>
                          <span className="text-[7.5px] uppercase tracking-wider font-mono text-amber-800 font-bold mt-0.5 group-hover/vedas:underline">
                            (Explore 4 Vedas ↗)
                          </span>
                        </div>

                        {/* Relevant Side Image 4 (Right): Vedas Artwork Badge */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsVedasModalOpen(true);
                          }}
                          className="absolute right-0 top-0 bottom-0 w-[28.5%] overflow-hidden z-20 shadow-lg border-l border-amber-900/60 bg-stone-900 cursor-pointer group/side transition-all duration-300 hover:brightness-110 hover:ring-2 hover:ring-amber-400"
                          role="button"
                          tabIndex={0}
                          title="Click to open the 4 Vedas"
                        >
                          <img
                            src={vedasSideImg}
                            alt="Sacred Vedas Scriptures Artwork"
                            className="w-full h-full object-cover object-center group-hover/side:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40 group-hover/side:bg-amber-500/10 transition-colors" />
                        </div>
                      </>
                    )}

                    {/* In-Image Typography Replacements & Relevant Artwork for Group 3 (V. Indian Scientists & VI. Indian Universities) */}
                    {grp.id === 'group-3' && (
                      <>
                        {/* Relevant Side Image 5 (Left): Indian Scientists & Contributions Artwork trigger */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            openScientistsModal();
                          }}
                          className="absolute left-0 top-0 bottom-0 w-[28.5%] overflow-hidden z-20 shadow-lg border-r border-amber-900/60 bg-stone-900 cursor-pointer group/side transition-all duration-300 hover:brightness-110 hover:ring-2 hover:ring-amber-400"
                          role="button"
                          tabIndex={0}
                          title="Click to view Indian Scientists and Their Contribution"
                        >
                          <img
                            src={scientistsSideImg}
                            alt="Indian Scientists and Their Contribution Artwork"
                            className="w-full h-full object-cover object-center group-hover/side:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40 group-hover/side:bg-amber-500/10 transition-colors" />
                        </div>

                        {/* Chapter V: Indian Scientists and Their Contribution Center Card (White Box 5) */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            openScientistsModal();
                          }}
                          className="absolute left-[28.8%] w-[20.7%] top-[12%] bottom-[6%] bg-white flex flex-col items-center justify-center text-center px-1 cursor-pointer select-none z-20 shadow-xs hover:ring-2 hover:ring-amber-500 hover:bg-amber-50/90 transition-all group/scientists"
                          role="button"
                          tabIndex={0}
                          title="Click to open Indian Scientists and Their Contribution"
                        >
                          <span className="font-serif font-bold text-[10px] sm:text-xs md:text-sm text-stone-800 leading-none">
                            V
                          </span>
                          <h3 className="font-serif font-black text-[8px] sm:text-[10px] md:text-xs tracking-tight text-stone-950 uppercase mt-0.5 leading-tight group-hover/scientists:text-amber-900 line-clamp-2">
                            Indian Scientists & Their Contribution
                          </h3>
                          {/* Sanskrit Name Below Title */}
                          <p className="font-serif font-bold text-[9px] sm:text-[11px] md:text-xs text-amber-900 leading-tight mt-0.5">
                            भारतीयवैज्ञानिकाः
                          </p>
                          <p className="hidden sm:block text-[7.5px] md:text-[8.5px] font-serif text-stone-600 mt-0.5 leading-tight max-w-[95%]">
                            Aryabhata · Sushruta · Brahmagupta · Charaka
                          </p>
                          <span className="text-[7px] sm:text-[7.5px] uppercase tracking-wider font-mono text-amber-800 font-bold mt-0.5 group-hover/scientists:underline">
                            (Open Scientists ↗)
                          </span>
                        </div>

                        {/* Chapter VI: Indian Universities Center Card (White Box 6) */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            openUniversitiesModal();
                          }}
                          className="absolute left-[50.5%] w-[20.7%] top-[12%] bottom-[6%] bg-white flex flex-col items-center justify-center text-center px-1 cursor-pointer select-none z-20 shadow-xs hover:ring-2 hover:ring-amber-500 hover:bg-amber-50/90 transition-all group/universities"
                          role="button"
                          tabIndex={0}
                          title="Click to open Indian Universities"
                        >
                          <span className="font-serif font-bold text-[10px] sm:text-xs md:text-sm text-stone-800 leading-none">
                            VI
                          </span>
                          <h3 className="font-serif font-black text-[9px] sm:text-[11px] md:text-xs tracking-wide text-stone-950 uppercase mt-0.5 leading-tight group-hover/universities:text-amber-900">
                            Indian Universities
                          </h3>
                          {/* Sanskrit Name Below Title */}
                          <p className="font-serif font-bold text-[9px] sm:text-[11px] md:text-xs text-amber-900 leading-tight mt-0.5">
                            भारतीयविश्वविद्यालयाः
                          </p>
                          <p className="hidden sm:block text-[7.5px] md:text-[8.5px] font-serif text-stone-600 mt-0.5 leading-tight max-w-[95%]">
                            Nalanda · Takshashila · Vikramashila · Vallabhi
                          </p>
                          <span className="text-[7px] sm:text-[7.5px] uppercase tracking-wider font-mono text-amber-800 font-bold mt-0.5 group-hover/universities:underline">
                            (Open Universities ↗)
                          </span>
                        </div>

                        {/* Relevant Side Image 6 (Right): Indian Universities Artwork trigger */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            openUniversitiesModal();
                          }}
                          className="absolute right-0 top-0 bottom-0 w-[28.5%] overflow-hidden z-20 shadow-lg border-l border-amber-900/60 bg-stone-900 cursor-pointer group/side transition-all duration-300 hover:brightness-110 hover:ring-2 hover:ring-amber-400"
                          role="button"
                          tabIndex={0}
                          title="Click to view Indian Universities"
                        >
                          <img
                            src={universitiesSideImg}
                            alt="Ancient Indian Universities Artwork"
                            className="w-full h-full object-cover object-center group-hover/side:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40 group-hover/side:bg-amber-500/10 transition-colors" />
                        </div>
                      </>
                    )}

                    {/* In-Image Typography Replacements & Relevant Artwork for Group 4 (VII. Sanskrit & Computer Language & VIII. Sanskrit & Artificial Intelligence) */}
                    {grp.id === 'group-4' && (
                      <>
                        {/* Relevant Side Image 7 (Left): Acharya Pingala Artwork */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPingalaModalOpen(true);
                          }}
                          className="absolute left-0 top-0 bottom-0 w-[28.5%] overflow-hidden z-20 shadow-lg border-r border-amber-900/60 bg-stone-900 cursor-pointer group/side transition-all duration-300 hover:brightness-110 hover:ring-2 hover:ring-amber-400"
                          role="button"
                          tabIndex={0}
                          title="Click to view Relation Between Sanskrit and Computer Language"
                        >
                          <img
                            src={pingalaImg}
                            alt="Acharya Pingala and Sanskrit Poetic Binary System"
                            className="w-full h-full object-cover object-center group-hover/side:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/40 group-hover/side:bg-amber-500/10 transition-colors" />
                        </div>

                        {/* Chapter VII: Relation Between Sanskrit and Computer Language Center Card (White Box 7) */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsPingalaModalOpen(true);
                          }}
                          className="absolute left-[28.8%] w-[20.7%] top-[12%] bottom-[6%] bg-white flex flex-col items-center justify-center text-center px-1 cursor-pointer select-none z-20 shadow-xs hover:ring-2 hover:ring-amber-500 hover:bg-amber-50/90 transition-all group/box7"
                          role="button"
                          tabIndex={0}
                          title="Click to open Relation Between Sanskrit and Computer Language"
                        >
                          <span className="font-serif font-bold text-[10px] sm:text-xs md:text-sm text-stone-800 leading-none">
                            VII
                          </span>
                          <h3 className="font-serif font-black text-[7.5px] sm:text-[9.5px] md:text-[11px] tracking-tight text-stone-950 uppercase mt-0.5 leading-tight group-hover/box7:text-amber-900 line-clamp-2">
                            Relation Between Sanskrit & Computer Language
                          </h3>
                          {/* Sanskrit Name Below Title */}
                          <p className="font-serif font-bold text-[8.5px] sm:text-[10px] md:text-[11px] text-amber-900 leading-tight mt-0.5">
                            संस्कृतं सङ्गणकभाषा च
                          </p>
                          <p className="hidden sm:block text-[7px] md:text-[8px] font-serif text-stone-600 mt-0.5 leading-tight max-w-[95%]">
                            Acharya Pingala · Laghu & Guru · 2ⁿ Prastara
                          </p>
                          <span className="text-[7px] sm:text-[7.5px] uppercase tracking-wider font-mono text-amber-800 font-bold mt-0.5 group-hover/box7:underline">
                            (Open Dossier ↗)
                          </span>
                        </div>

                        {/* Chapter VIII: Relation Between Sanskrit and Artificial Intelligence Center Card (White Box 8) */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsSanskritAiModalOpen(true);
                          }}
                          className="absolute left-[50.5%] w-[20.7%] top-[12%] bottom-[6%] bg-white flex flex-col items-center justify-center text-center px-1 cursor-pointer select-none z-20 shadow-xs hover:ring-2 hover:ring-amber-500 hover:bg-amber-50/90 transition-all group/box8"
                          role="button"
                          tabIndex={0}
                          title="Click to open Relation Between Sanskrit and Artificial Intelligence"
                        >
                          <span className="font-serif font-bold text-[10px] sm:text-xs md:text-sm text-stone-800 leading-none">
                            VIII
                          </span>
                          <h3 className="font-serif font-black text-[7.5px] sm:text-[9.5px] md:text-[11px] tracking-tight text-stone-950 uppercase mt-0.5 leading-tight group-hover/box8:text-amber-900 line-clamp-2">
                            Relation Between Sanskrit & Artificial Intelligence
                          </h3>
                          {/* Sanskrit Name Below Title */}
                          <p className="font-serif font-bold text-[8.5px] sm:text-[10px] md:text-[11px] text-amber-900 leading-tight mt-0.5">
                            संस्कृतं कृत्रिमबुद्धिमत्ता च
                          </p>
                          <p className="hidden sm:block text-[7px] md:text-[8px] font-serif text-stone-600 mt-0.5 leading-tight max-w-[95%]">
                            Rick Briggs (NASA 1985) · Panini · AI Semantics
                          </p>
                          <span className="text-[7px] sm:text-[7.5px] uppercase tracking-wider font-mono text-amber-800 font-bold mt-0.5 group-hover/box8:underline">
                            (Open Dossier ↗)
                          </span>
                        </div>

                        {/* Relevant Side Image 8 (Right): Sanskrit & Artificial Intelligence Artwork */}
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsSanskritAiModalOpen(true);
                          }}
                          className="absolute right-0 top-0 bottom-0 w-[28.5%] overflow-hidden z-20 shadow-lg border-l border-amber-900/60 bg-stone-900 cursor-pointer group/side transition-all duration-300 hover:brightness-110 hover:ring-2 hover:ring-amber-400"
                          role="button"
                          tabIndex={0}
                          title="Click to view Relation Between Sanskrit and Artificial Intelligence"
                        >
                          <img
                            src={sanskritAiImg}
                            alt="Sanskrit and Artificial Intelligence Knowledge Representation"
                            className="w-full h-full object-cover object-center group-hover/side:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-black/40 group-hover/side:bg-amber-500/10 transition-colors" />
                        </div>
                      </>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Quick Return and Navigation at the bottom of the long scroll */}
          <div className="w-full max-w-3xl mt-12 p-6 rounded-xl bg-[#0c1018] border border-amber-900/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-serif text-base font-bold text-amber-200">
                Completed the Chronicles Visual Journey
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Return to the interactive spotlight portal or test historical principles in the lab.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold uppercase tracking-wider rounded-md transition-colors"
              >
                <ChevronUp className="w-3.5 h-3.5" />
                <span>Scroll to Top</span>
              </button>

              <button
                onClick={onBackToSpotlight}
                className="flex items-center gap-1.5 px-5 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-md transition-colors shadow-md"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Spotlight Portal</span>
              </button>
            </div>
          </div>

        </main>
      </div>

      {/* Detailed Modal when clicking any group on the long image */}
      {selectedGroupModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#0b0f17] border border-amber-500/40 rounded-xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedGroupModal(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold">
              Archival Monograph · Pages {selectedGroupModal.pages}
            </div>

            <h3 className="font-serif text-2xl font-bold text-white mt-1">
              {selectedGroupModal.title}
            </h3>
            <p className="text-xs text-amber-300/80 font-serif italic mt-0.5">
              {selectedGroupModal.subtitle}
            </p>

            {/* Chapters inside this group */}
            <div className="mt-6 space-y-4">
              {selectedGroupModal.chapters.map((ch, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-slate-900 border border-slate-800 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="font-serif text-amber-400 font-bold text-lg">
                        {ch.numeral}.
                      </span>
                      <h4 className="font-serif text-base font-bold text-slate-100">
                        {ch.title}
                      </h4>
                      {ch.sanskritTitle && (
                        <span className="font-serif text-amber-300 font-semibold text-sm">
                          ({ch.sanskritTitle})
                        </span>
                      )}
                    </div>
                  </div>

                  {ch.image && (
                    <div className="w-full h-36 sm:h-48 rounded-lg overflow-hidden border border-amber-800/40 relative shadow-md">
                      <img
                        src={ch.image}
                        alt={ch.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-3 text-xs font-serif text-amber-200 flex items-center gap-1.5">
                        <span className="text-amber-400">✦</span>
                        <span>{ch.sanskritTitle ? `${ch.sanskritTitle} · ${ch.title}` : ch.title}</span>
                      </div>
                    </div>
                  )}

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ch.description}
                  </p>

                  {(ch.numeral === 'I' || ch.numeral === 'II' || ch.numeral === 'III') && (
                    <div>
                      <button
                        onClick={() => {
                          setSelectedGroupModal(null);
                          onOpenEpicPortal?.(
                            ch.numeral === 'I' ? 'ramayana' : ch.numeral === 'II' ? 'mahabharat' : 'bhosale'
                          );
                        }}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/35 border border-amber-500/50 text-amber-300 hover:text-amber-100 text-xs font-serif font-bold transition-all shadow-sm"
                      >
                        <span className="text-amber-400">✦</span>
                        <span>Open {ch.title} Triptych Portal (House of Bhosale style) ↗</span>
                      </button>
                    </div>
                  )}

                  <div className="pt-2 border-t border-slate-800">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-amber-400/80 mb-1">
                      Curatorial Highlights:
                    </p>
                    <ul className="text-xs text-slate-400 space-y-1 list-disc list-inside">
                      {ch.topics.map((tpc, tIdx) => (
                        <li key={tIdx} className="leading-relaxed">
                          {tpc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Actions */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setSelectedGroupModal(null)}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-white"
              >
                Close Dossier
              </button>

              <button
                onClick={() => {
                  setSelectedGroupModal(null);
                  onOpenSimulator();
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow-sm"
              >
                <span>Open Interactive Lab</span>
                <Compass className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Fullscreen Artwork HD Viewer Modal when clicking the Ramayana Image */}
      {activeArtworkModal && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-6 overflow-y-auto animate-fadeIn"
          onClick={() => setActiveArtworkModal(null)}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between max-w-6xl w-full mx-auto pb-4 border-b border-amber-900/40"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/40">
                <ZoomIn className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-serif font-bold text-white tracking-wide">
                  {activeArtworkModal.title}
                </h3>
                <p className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  {activeArtworkModal.sanskritTitle}
                </p>
              </div>
            </div>

            <button
              onClick={() => setActiveArtworkModal(null)}
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors cursor-pointer"
              aria-label="Close HD viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Large Image Canvas with Names Inscribed at Top Right & Description at Bottom */}
          <div
            className="flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-auto py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-[0_0_80px_rgba(251,191,36,0.3)] bg-black max-h-[82vh] flex items-center justify-center">
              <img
                src={activeArtworkModal.src}
                alt={activeArtworkModal.title}
                className="max-h-[82vh] w-auto max-w-full object-contain block select-none"
              />

              {/* Name Box at Right Hand Side Top */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-black/75 backdrop-blur-md border border-amber-400/80 shadow-[0_10px_30px_rgba(0,0,0,0.9)] text-right z-20">
                <div className="text-base sm:text-2xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 tracking-wider drop-shadow-md">
                  {activeArtworkModal.sanskritTitle}
                </div>
                <div className="text-[11px] sm:text-sm font-serif font-extrabold text-white tracking-widest uppercase mt-0.5 drop-shadow">
                  {activeArtworkModal.title}
                </div>
              </div>

              {/* Transparent Background Description at Bottom Left */}
              <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 max-w-[290px] sm:max-w-[420px] p-2.5 sm:p-3 rounded-xl bg-transparent z-20">
                <p className="font-serif text-white text-[11px] sm:text-xs leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] text-left font-medium">
                  {activeArtworkModal.description}
                </p>

                {/* 2 Buttons: READ MORE and BOOK */}
                <div className="mt-2.5 pt-2 flex flex-col gap-2 items-start">
                  <div className="flex items-center gap-2 flex-wrap">
                    <a
                      href={activeArtworkModal.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-amber-300 hover:text-amber-100 border border-amber-400/50 backdrop-blur-sm text-xs font-serif font-bold tracking-wider transition-all cursor-pointer shadow-md"
                    >
                      <span>READ MORE</span>
                      <ExternalLink className="w-3 h-3 text-amber-400" />
                    </a>

                    <a
                      href={activeArtworkModal.bookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/40 hover:bg-black/60 text-amber-200 hover:text-white border border-amber-400/60 backdrop-blur-sm text-xs font-serif font-black tracking-wider transition-all cursor-pointer shadow-md"
                      title={`Open ${activeArtworkModal.title} E-Book (PDF)`}
                    >
                      <BookOpen className="w-3.5 h-3.5 text-amber-300" />
                      <span>BOOK</span>
                      <ExternalLink className="w-3 h-3 text-amber-400" />
                    </a>
                  </div>

                  <span className="text-[8.5px] text-amber-100/90 font-sans tracking-wider uppercase drop-shadow-[0_1px_4px_rgba(0,0,0,0.95)]">
                    INFORMATION REFERRED FROM WIKIPEDIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* The Four Vedas (चत्वारो वेदाः) Interactive Modal with 4 Options and Wikipedia Integration */}
      {isVedasModalOpen && (() => {
        const currentVeda = VEDAS_DATA[selectedVedaIndex] || VEDAS_DATA[0];
        const wikiExtract = liveWikiData[currentVeda.id]?.extract || currentVeda.fullWikipediaArticleExtract;
        const wikiDescription = liveWikiData[currentVeda.id]?.description;

        return (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-3 sm:p-6 overflow-y-auto animate-fadeIn"
            onClick={() => setIsVedasModalOpen(false)}
          >
            <div
              className="max-w-5xl w-full mx-auto my-auto bg-[#0d0f14] border border-amber-500/40 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-amber-900/40 bg-gradient-to-r from-stone-950 via-[#13110d] to-stone-950">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-inner">
                    <BookOpen className="w-5 h-5 text-amber-300" />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 tracking-wide">
                      चत्वारो वेदाः · The Four Vedas
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-400 font-sans mt-0.5">
                      Select any of the 4 Vedas below to view authentic information directly from Wikipedia
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsVedasModalOpen(false)}
                  className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors cursor-pointer"
                  aria-label="Close Vedas viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 4 Options of Vedas with Sanskrit and English Names */}
              <div className="p-4 bg-stone-950/80 border-b border-amber-900/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-serif font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Four Canonical Vedas (वेदचतुष्टयम्)</span>
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    Click to switch: {selectedVedaIndex + 1} of 4
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {VEDAS_DATA.map((veda, idx) => {
                    const isSelected = selectedVedaIndex === idx;
                    return (
                      <button
                        key={veda.id}
                        type="button"
                        onClick={() => setSelectedVedaIndex(idx)}
                        className={`group relative flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-b from-amber-500/25 via-[#231a0e] to-stone-950 border-amber-400 text-white shadow-[0_0_24px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/80'
                            : 'bg-stone-900/60 hover:bg-stone-900/90 border-amber-900/40 text-stone-300 hover:border-amber-600/70 hover:text-white'
                        }`}
                      >
                        {isSelected && (
                          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                        )}

                        <span className="text-[9px] uppercase font-mono tracking-widest text-amber-400/90 font-bold mb-0.5">
                          {veda.numeral}. Veda
                        </span>

                        {/* Sanskrit Name */}
                        <span className="font-serif text-lg sm:text-xl font-black text-amber-200 group-hover:text-amber-100 transition-colors">
                          {veda.sanskritName}
                        </span>

                        {/* English Name */}
                        <span className="text-xs sm:text-sm font-serif font-extrabold tracking-wide uppercase text-white mt-0.5">
                          {veda.englishName}
                        </span>

                        <span className="text-[8.5px] sm:text-[9.5px] text-stone-400 mt-1 line-clamp-1 leading-tight">
                          {veda.essence.replace('The Veda of ', '')}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Information from Wikipedia Panel */}
              <div className="p-4 sm:p-6 space-y-5 bg-[#090b10] flex-1">
                {/* Active Veda Banner */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-800">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold uppercase">
                        Book {currentVeda.numeral}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-serif font-black text-white">
                        <span className="text-amber-400">{currentVeda.sanskritName}</span>
                        <span className="mx-2 text-stone-500">·</span>
                        <span>{currentVeda.englishName}</span>
                      </h2>
                      <span className="text-xs text-stone-400 font-mono italic">
                        ({currentVeda.transliteration})
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-serif text-amber-200/90 mt-1">
                      {currentVeda.essence}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="px-3 py-1.5 rounded-lg bg-stone-900 border border-stone-700/80 flex items-center gap-2 text-[10px] text-stone-300 font-mono">
                      <Globe className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                      <span>Wikipedia (Live Web)</span>
                    </div>

                    <a
                      href={currentVeda.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-200 hover:text-white border border-amber-500/50 text-xs font-serif font-bold transition-all shadow-sm"
                      title={`Open full ${currentVeda.englishName} article on Wikipedia in new tab`}
                    >
                      <span>Open on Wikipedia</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                    </a>
                  </div>
                </div>

                {/* Wikipedia Information Box */}
                <div className="rounded-xl p-4 sm:p-5 bg-gradient-to-b from-[#14161f] to-[#0e1017] border border-amber-900/40 shadow-inner">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-stone-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-xs font-serif font-bold text-amber-300 tracking-wider uppercase">
                        Wikipedia Summary & Article Excerpt
                      </span>
                    </div>
                    {isLoadingWiki ? (
                      <span className="text-[10px] text-amber-400 font-mono animate-pulse">
                        Connecting to Wikipedia API...
                      </span>
                    ) : (
                      <span className="text-[10px] text-stone-400 font-mono">
                        en.wikipedia.org/wiki/{currentVeda.wikiPageTitle}
                      </span>
                    )}
                  </div>

                  {wikiDescription && (
                    <p className="text-xs font-serif italic text-amber-400/90 mb-2">
                      {wikiDescription}
                    </p>
                  )}

                  <p className="font-serif text-xs sm:text-sm text-stone-200 leading-relaxed drop-shadow-sm">
                    {wikiExtract}
                  </p>

                  <div className="mt-3 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[10px] text-stone-400">
                    <span className="flex items-center gap-1 text-amber-400">
                      <span>✦</span>
                      <span className="text-stone-300">Information referenced directly from the Wikipedia database</span>
                    </span>
                    <a
                      href={currentVeda.wikiUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-300 hover:text-amber-100 hover:underline inline-flex items-center gap-1"
                    >
                      <span>Verify at Wikipedia</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>
                </div>

                {/* Key Canonical Attributes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  <div className="p-3 rounded-lg bg-stone-900/70 border border-stone-800">
                    <span className="text-[9.5px] uppercase font-mono text-amber-400 tracking-wider block font-bold">
                      Composition
                    </span>
                    <span className="font-serif text-xs font-semibold text-stone-100 mt-1 block">
                      {currentVeda.keyAspects.composition}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-900/70 border border-stone-800">
                    <span className="text-[9.5px] uppercase font-mono text-amber-400 tracking-wider block font-bold">
                      Epistemic Focus
                    </span>
                    <span className="font-serif text-xs font-semibold text-stone-100 mt-1 block">
                      {currentVeda.keyAspects.focus}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-900/70 border border-stone-800">
                    <span className="text-[9.5px] uppercase font-mono text-amber-400 tracking-wider block font-bold">
                      Officiating Priest
                    </span>
                    <span className="font-serif text-xs font-semibold text-stone-100 mt-1 block">
                      {currentVeda.keyAspects.officiatingPriest}
                    </span>
                  </div>

                  <div className="p-3 rounded-lg bg-stone-900/70 border border-stone-800">
                    <span className="text-[9.5px] uppercase font-mono text-amber-400 tracking-wider block font-bold">
                      Major Upaniṣads
                    </span>
                    <span className="font-serif text-xs font-semibold text-stone-100 mt-1 block">
                      {currentVeda.keyAspects.prominentUpanishads}
                    </span>
                  </div>
                </div>

                {/* Sacred Hymn Highlight */}
                <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-800/40 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <Scroll className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span className="text-xs font-serif text-amber-200">
                      <strong className="text-amber-300">Sacred Hymns & Chants:</strong> {currentVeda.keyAspects.sacredHymn}
                    </span>
                  </div>
                  <span className="text-[10px] text-amber-400 font-mono hidden sm:inline">
                    {currentVeda.sanskritName}
                  </span>
                </div>
              </div>

              {/* Modal Navigation and Actions Footer */}
              <div className="px-5 py-3.5 bg-stone-950 border-t border-amber-900/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedVedaIndex((prev) => (prev > 0 ? prev - 1 : VEDAS_DATA.length - 1))
                    }
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 text-xs font-serif transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous Veda</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedVedaIndex((prev) => (prev < VEDAS_DATA.length - 1 ? prev + 1 : 0))
                    }
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 text-xs font-serif transition-colors cursor-pointer"
                  >
                    <span>Next Veda</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={currentVeda.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs font-serif uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read on Wikipedia ↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsVedasModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Indian Scientists & Their Contributions (भारतीयवैज्ञानिकाः) Interactive Modal with Contributions and Wikipedia Integration */}
      {isScientistsModalOpen && (() => {
        const currentScientist = INDIAN_SCIENTISTS_DATA[selectedScientistIndex] || INDIAN_SCIENTISTS_DATA[0];

        return (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-3 sm:p-6 overflow-y-auto animate-fadeIn"
            onClick={() => setIsScientistsModalOpen(false)}
          >
            <div
              className="max-w-5xl w-full mx-auto my-auto bg-[#0d0f14] border border-amber-500/40 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-amber-900/40 bg-gradient-to-r from-stone-950 via-[#13110d] to-stone-950">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-inner">
                    <Sparkles className="w-5 h-5 text-amber-300" />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 tracking-wide">
                      भारतीयवैज्ञानिकाः · Indian Scientists & Their Contribution
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-400 font-sans mt-0.5">
                      Pioneers of ancient Indian mathematics, astronomy, metallurgy, medicine & surgery
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsScientistsModalOpen(false)}
                  className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors cursor-pointer"
                  aria-label="Close Scientists viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scientists Selection Cards Grid */}
              <div className="p-4 bg-stone-950/80 border-b border-amber-900/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-serif font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ancient Indian Pioneers (शास्त्रज्ञाः)</span>
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    Select Scientist: {selectedScientistIndex + 1} of {INDIAN_SCIENTISTS_DATA.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2">
                  {INDIAN_SCIENTISTS_DATA.map((sci, idx) => {
                    const isSelected = selectedScientistIndex === idx;
                    return (
                      <button
                        key={sci.id}
                        type="button"
                        onClick={() => setSelectedScientistIndex(idx)}
                        className={`group relative flex flex-col items-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-b from-amber-500/25 via-[#231a0e] to-stone-950 border-amber-400 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/80'
                            : 'bg-stone-900/60 hover:bg-stone-900/90 border-amber-900/40 text-stone-300 hover:border-amber-600/70 hover:text-white'
                        }`}
                      >
                        {isSelected && (
                          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                        )}

                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-amber-500/30 mb-1.5 shadow-sm">
                          <img
                            src={sci.image}
                            alt={sci.englishName}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Sanskrit Name */}
                        <span className="font-serif text-xs font-black text-amber-200 group-hover:text-amber-100 transition-colors leading-tight">
                          {sci.sanskritName}
                        </span>

                        {/* English Name */}
                        <span className="text-[10px] sm:text-xs font-serif font-bold uppercase text-white mt-0.5 leading-tight">
                          {sci.englishName}
                        </span>

                        <span className="text-[8px] text-amber-400/80 font-mono mt-0.5 line-clamp-1">
                          {sci.numeral}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Content: Scientist Detail & Contributions */}
              <div className="p-4 sm:p-6 space-y-5 bg-[#090b10] flex-1">
                <div className="flex flex-col md:flex-row items-start gap-6 pb-4 border-b border-stone-800">
                  {/* Scientist Portrait with Click to Open Wikipedia and Zoom */}
                  <div
                    onClick={() => window.open(currentScientist.wikiUrl, '_blank', 'noopener,noreferrer')}
                    className="w-full md:w-56 h-52 sm:h-64 rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-[0_8px_30px_rgba(0,0,0,0.8)] relative group cursor-pointer shrink-0"
                    title="Click image to open Wikipedia article"
                  >
                    <img
                      src={currentScientist.image}
                      alt={currentScientist.englishName}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[10px] font-mono text-amber-300 flex items-center gap-1 group-hover:text-amber-100">
                        <ExternalLink className="w-3 h-3 text-amber-400" />
                        <span>Click Image for Wikipedia</span>
                      </span>
                    </div>
                  </div>

                  {/* Bio & Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold uppercase">
                        {currentScientist.numeral} · {currentScientist.era}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700 text-[10px] font-serif">
                        {currentScientist.field}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-serif font-black text-white mt-2">
                      <span className="text-amber-400">{currentScientist.sanskritName}</span>
                      <span className="mx-2 text-stone-500">·</span>
                      <span>{currentScientist.englishName}</span>
                      <span className="ml-2 text-xs text-stone-400 font-mono font-normal italic">
                        ({currentScientist.transliteration})
                      </span>
                    </h2>

                    <p className="text-xs sm:text-sm font-serif text-amber-100/90 mt-2 leading-relaxed">
                      {currentScientist.shortSummary}
                    </p>

                    {/* Dedicated READ MORE Button */}
                    <div className="mt-4 flex items-center gap-3 flex-wrap">
                      <a
                        href={currentScientist.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-serif font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer hover:shadow-amber-500/20"
                      >
                        <span>READ MORE</span>
                        <ExternalLink className="w-3.5 h-3.5 text-stone-950" />
                      </a>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-stone-400">
                        Official Wikipedia Article
                      </span>
                    </div>
                  </div>
                </div>

                {/* Major Scientific Contributions Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-serif font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <span>Key Scientific Contributions & Discoveries (योगदानानि)</span>
                    </h4>
                    <span className="text-[10px] text-stone-500 font-mono">
                      {currentScientist.contributions.length} Key Achievements
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentScientist.contributions.map((contribution, cIdx) => {
                      const parts = contribution.split(':');
                      const title = parts.length > 1 ? parts[0] : null;
                      const text = parts.length > 1 ? parts.slice(1).join(':') : contribution;

                      return (
                        <div
                          key={cIdx}
                          className="p-3 rounded-xl bg-stone-950/80 border border-amber-900/30 hover:border-amber-600/50 transition-colors flex items-start gap-2.5"
                        >
                          <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {cIdx + 1}
                          </span>
                          <div className="text-xs font-serif leading-relaxed">
                            {title && (
                              <strong className="text-amber-200 block mb-0.5 font-bold">
                                {title}
                              </strong>
                            )}
                            <span className="text-stone-300">{text}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Modal Navigation and Actions Footer */}
              <div className="px-5 py-3.5 bg-stone-950 border-t border-amber-900/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedScientistIndex((prev) =>
                        prev > 0 ? prev - 1 : INDIAN_SCIENTISTS_DATA.length - 1
                      )
                    }
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 text-xs font-serif transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous Scientist</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedScientistIndex((prev) =>
                        prev < INDIAN_SCIENTISTS_DATA.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 text-xs font-serif transition-colors cursor-pointer"
                  >
                    <span>Next Scientist</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={currentScientist.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs font-serif uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>READ MORE ↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsScientistsModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Indian Universities (भारतीयविश्वविद्यालयाः) Interactive Modal with Ideologies and Wikipedia Integration */}
      {isUniversitiesModalOpen && (() => {
        const currentUniversity = INDIAN_UNIVERSITIES_DATA[selectedUniversityIndex] || INDIAN_UNIVERSITIES_DATA[0];

        return (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-3 sm:p-6 overflow-y-auto animate-fadeIn"
            onClick={() => setIsUniversitiesModalOpen(false)}
          >
            <div
              className="max-w-5xl w-full mx-auto my-auto bg-[#0d0f14] border border-amber-500/40 rounded-2xl shadow-[0_20px_80px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-amber-900/40 bg-gradient-to-r from-stone-950 via-[#13110d] to-stone-950">
                <div className="flex items-center gap-3">
                  <span className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 shadow-inner">
                    <GraduationCap className="w-5 h-5 text-amber-300" />
                  </span>
                  <div>
                    <h3 className="text-base sm:text-xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-amber-100 tracking-wide">
                      भारतीयविश्वविद्यालयाः · Ancient Indian Universities
                    </h3>
                    <p className="text-[11px] sm:text-xs text-stone-400 font-sans mt-0.5">
                      World-renowned centers of higher learning, dialectics, universal pedagogy & intellectual ethos
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsUniversitiesModalOpen(false)}
                  className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors cursor-pointer"
                  aria-label="Close Universities viewer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Universities Selection Cards Grid */}
              <div className="p-4 bg-stone-950/80 border-b border-amber-900/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] sm:text-xs font-serif font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ancient Universities & Mahaviharas (विद्याकेन्द्राणि)</span>
                  </span>
                  <span className="text-[10px] text-stone-500 font-mono">
                    Select University: {selectedUniversityIndex + 1} of {INDIAN_UNIVERSITIES_DATA.length}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
                  {INDIAN_UNIVERSITIES_DATA.map((uni, idx) => {
                    const isSelected = selectedUniversityIndex === idx;
                    return (
                      <button
                        key={uni.id}
                        type="button"
                        onClick={() => setSelectedUniversityIndex(idx)}
                        className={`group relative flex flex-col items-center p-2 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-gradient-to-b from-amber-500/25 via-[#231a0e] to-stone-950 border-amber-400 text-white shadow-[0_0_20px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/80'
                            : 'bg-stone-900/60 hover:bg-stone-900/90 border-amber-900/40 text-stone-300 hover:border-amber-600/70 hover:text-white'
                        }`}
                      >
                        {isSelected && (
                          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400 shadow-[0_0_8px_#fbbf24]" />
                        )}

                        <div className="w-12 h-12 rounded-lg overflow-hidden border border-amber-500/30 mb-1.5 shadow-sm">
                          <img
                            src={uni.image}
                            alt={uni.englishName}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>

                        {/* Sanskrit Name */}
                        <span className="font-serif text-[11px] font-black text-amber-200 group-hover:text-amber-100 transition-colors leading-tight">
                          {uni.sanskritName}
                        </span>

                        {/* English Name */}
                        <span className="text-[9.5px] font-serif font-bold uppercase text-white mt-0.5 leading-tight line-clamp-1">
                          {uni.englishName}
                        </span>

                        <span className="text-[8px] text-amber-400/80 font-mono mt-0.5">
                          {uni.numeral}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Main Content: University Detail & Ideologies */}
              <div className="p-4 sm:p-6 space-y-5 bg-[#090b10] flex-1">
                <div className="flex flex-col md:flex-row items-start gap-6 pb-4 border-b border-stone-800">
                  {/* University Image with Click to Open Wikipedia and Zoom */}
                  <div
                    onClick={() => window.open(currentUniversity.wikiUrl, '_blank', 'noopener,noreferrer')}
                    className="w-full md:w-56 h-52 sm:h-64 rounded-xl overflow-hidden border-2 border-amber-500/50 shadow-[0_8px_30px_rgba(0,0,0,0.8)] relative group cursor-pointer shrink-0"
                    title="Click image to open Wikipedia article"
                  >
                    <img
                      src={currentUniversity.image}
                      alt={currentUniversity.englishName}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-3">
                      <span className="text-[10px] font-mono text-amber-300 flex items-center gap-1 group-hover:text-amber-100">
                        <ExternalLink className="w-3 h-3 text-amber-400" />
                        <span>Click Image for Wikipedia</span>
                      </span>
                    </div>
                  </div>

                  {/* Info & Ideology Headline */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-mono font-bold uppercase">
                        {currentUniversity.numeral} · {currentUniversity.era}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700 text-[10px] font-serif">
                        📍 {currentUniversity.location}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-serif font-black text-white mt-2">
                      <span className="text-amber-400">{currentUniversity.sanskritName}</span>
                      <span className="mx-2 text-stone-500">·</span>
                      <span>{currentUniversity.englishName}</span>
                      <span className="ml-2 text-xs text-stone-400 font-mono font-normal italic">
                        ({currentUniversity.transliteration})
                      </span>
                    </h2>

                    <p className="text-xs sm:text-sm font-serif text-amber-300/90 font-bold mt-1">
                      {currentUniversity.ideologyTitle}
                    </p>

                    <p className="text-xs sm:text-sm font-serif text-stone-300 mt-2 leading-relaxed">
                      {currentUniversity.shortSummary}
                    </p>

                    {/* Dedicated READ MORE Button */}
                    <div className="mt-4 flex items-center gap-3 flex-wrap">
                      <a
                        href={currentUniversity.wikiUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-serif font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer hover:shadow-amber-500/20"
                      >
                        <span>READ MORE</span>
                        <ExternalLink className="w-3.5 h-3.5 text-stone-950" />
                      </a>
                      <span className="text-[9px] uppercase tracking-wider font-mono text-stone-400">
                        Official Wikipedia Article
                      </span>
                    </div>
                  </div>
                </div>

                {/* Foundational Ideologies & Pedagogical Ethos Section */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs sm:text-sm font-serif font-bold text-amber-300 uppercase tracking-wider flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-amber-400" />
                      <span>Foundational Ideologies & Pedagogical Traditions (विचारधाराः)</span>
                    </h4>
                    <span className="text-[10px] text-stone-500 font-mono">
                      {currentUniversity.ideologies.length} Core Principles
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentUniversity.ideologies.map((ideology, iIdx) => {
                      const parts = ideology.split(':');
                      const title = parts.length > 1 ? parts[0] : null;
                      const text = parts.length > 1 ? parts.slice(1).join(':') : ideology;

                      return (
                        <div
                          key={iIdx}
                          className="p-3 rounded-xl bg-stone-950/80 border border-amber-900/30 hover:border-amber-600/50 transition-colors flex items-start gap-2.5"
                        >
                          <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 text-[10px] font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                            {iIdx + 1}
                          </span>
                          <div className="text-xs font-serif leading-relaxed">
                            {title && (
                              <strong className="text-amber-200 block mb-0.5 font-bold">
                                {title}
                              </strong>
                            )}
                            <span className="text-stone-300">{text}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Modal Navigation and Actions Footer */}
              <div className="px-5 py-3.5 bg-stone-950 border-t border-amber-900/40 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedUniversityIndex((prev) =>
                        prev > 0 ? prev - 1 : INDIAN_UNIVERSITIES_DATA.length - 1
                      )
                    }
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 text-xs font-serif transition-colors cursor-pointer"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous University</span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setSelectedUniversityIndex((prev) =>
                        prev < INDIAN_UNIVERSITIES_DATA.length - 1 ? prev + 1 : 0
                      )
                    }
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 text-xs font-serif transition-colors cursor-pointer"
                  >
                    <span>Next University</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={currentUniversity.wikiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-xs font-serif uppercase tracking-wider rounded-lg transition-all shadow-md cursor-pointer"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>READ MORE ↗</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setIsUniversitiesModalOpen(false)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-stone-400 hover:text-white cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })()}

      {/* ========================================================================= */}
      {/* BOX 7 MODAL: RELATION BETWEEN SANSKRIT AND COMPUTER LANGUAGE (ACHARYA PINGALA) */}
      {/* ========================================================================= */}
      {isPingalaModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsPingalaModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#0a0d14] border border-amber-500/50 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-hidden flex flex-col"
          >
            {/* Header Hero Banner with Pingala Artwork */}
            <div className="relative h-44 sm:h-56 w-full overflow-hidden shrink-0 border-b border-amber-900/50">
              <img
                src={pingalaImg}
                alt="Acharya Pingala and Sanskrit Binary System"
                className="w-full h-full object-cover object-center brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/60 to-black/30" />
              <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsPingalaModalOpen(false)}
                className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-stone-700 hover:border-amber-400 transition-all cursor-pointer z-20"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Meta Badges */}
              <div className="absolute top-3.5 left-4 flex items-center gap-2 flex-wrap z-10">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 backdrop-blur-sm">
                  <Binary className="w-3 h-3 text-amber-400" />
                  <span>Chapter VII · Box 7</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/70 text-stone-200 border border-stone-700 text-[10px] font-serif backdrop-blur-sm">
                  3rd Century BCE · Chandaḥśāstra
                </span>
              </div>

              {/* Title Overlay in Banner */}
              <div className="absolute bottom-3 left-4 right-4 z-10">
                <p className="font-serif font-black text-amber-400 text-base sm:text-lg tracking-wide drop-shadow-md">
                  संस्कृतं सङ्गणकभाषा च
                </p>
                <h2 className="font-serif font-black text-lg sm:text-2xl text-white tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mt-0.5">
                  RELATION BETWEEN SANSKRIT AND COMPUTER LANGUAGE
                </h2>
                <p className="text-xs text-amber-200/90 font-serif italic mt-0.5">
                  Acharya Pingala’s Chandaḥśāstra: The Ancient Roots of Binary Metrics & Algorithmic Combinatorics
                </p>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-[#0a0d14] to-[#07090e] flex-1">
              
              {/* Core Information Bullets as specified */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-1 border-b border-amber-900/30">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-amber-300 uppercase tracking-wider">
                    Core Insights & Mathematical Foundations
                  </h3>
                </div>

                {/* Bullet 1: Laghu and Guru */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/80 border border-amber-500/30 hover:border-amber-400/60 transition-all flex items-start gap-3 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    01
                  </div>
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-stone-200">
                    <strong className="text-amber-300 font-bold block mb-1">
                      • Laghu and Guru:
                    </strong>
                    <span>
                      In the 3rd century BCE, the ancient Indian scholar Acharya Pingala wrote the Chandaḥśāstra, a treatise on Sanskrit poetic meters.
                    </span>
                  </div>
                </div>

                {/* Bullet 2: Syllable Mapping */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/80 border border-amber-500/30 hover:border-amber-400/60 transition-all flex items-start gap-3 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    02
                  </div>
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-stone-200">
                    <strong className="text-amber-300 font-bold block mb-1">
                      • Syllable Mapping:
                    </strong>
                    <span>
                      He analyzed poetic rhythms using two types of syllables: laghu (light/short sound) and guru (heavy/long sound).
                    </span>
                  </div>
                </div>

                {/* Bullet 3: Powers of 2 and Combinatorics */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/80 border border-amber-500/30 hover:border-amber-400/60 transition-all flex items-start gap-3 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    03
                  </div>
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-stone-200">
                    <strong className="text-amber-300 font-bold block mb-1">
                      • Powers of 2 and Combinatorics:
                    </strong>
                    <span>
                      Pingala mapped these short and long sounds to a system that functions identically to binary 0s and 1s. He developed algorithmic procedures (Prastara) to find all possible combinations of these syllables for a given meter (2ⁿ combinations), which parallels modern binary mathematics and bit sequences (such as an 8-syllable verse mirroring an 8-bit byte).
                    </span>
                  </div>
                </div>
              </div>

              {/* Source of Info Citation Banner */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs font-serif text-amber-200">
                    <span className="font-bold text-amber-300">Source: </span>
                    <a
                      href="https://shikshanam.in/acharya-pingala-the-ancient-sage-who-paved-the-way-for-modern-computers/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-amber-100 transition-colors break-all"
                    >
                      Shikshanam (https://shikshanam.in/acharya-pingala-the-ancient-sage-who-paved-the-way-for-modern-computers/)
                    </a>
                  </div>
                </div>

                <a
                  href="https://shikshanam.in/acharya-pingala-the-ancient-sage-who-paved-the-way-for-modern-computers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-300 hover:text-amber-100 shrink-0"
                >
                  <span>Verify Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Footer with Dedicated READ MORE Button */}
            <div className="px-5 py-3.5 bg-stone-950 border-t border-amber-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-[11px] font-serif text-stone-400 text-center sm:text-left">
                Acharya Pingala · Chandaḥśāstra · Binary Mathematics in Ancient India
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setIsPingalaModalOpen(false)}
                  className="px-4 py-2 text-xs font-serif uppercase tracking-wider text-stone-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>

                <a
                  href="https://shikshanam.in/acharya-pingala-the-ancient-sage-who-paved-the-way-for-modern-computers/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-serif font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_15px_rgba(245,158,11,0.35)] cursor-pointer hover:shadow-amber-500/50"
                >
                  <span>READ MORE</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-950" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* BOX 8 MODAL: RELATION BETWEEN SANSKRIT AND ARTIFICIAL INTELLIGENCE (RICK BRIGGS) */}
      {/* ========================================================================= */}
      {isSanskritAiModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsSanskritAiModalOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-3xl bg-[#0a0d14] border border-amber-500/50 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.95)] max-h-[92vh] overflow-hidden flex flex-col"
          >
            {/* Header Hero Banner with Sanskrit & AI Artwork */}
            <div className="relative h-44 sm:h-56 w-full overflow-hidden shrink-0 border-b border-amber-900/50">
              <img
                src={sanskritAiImg}
                alt="Sanskrit and Artificial Intelligence Knowledge Representation"
                className="w-full h-full object-cover object-center brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-[#0a0d14]/60 to-black/30" />
              <div className="absolute inset-0 bg-radial from-amber-500/10 via-transparent to-transparent" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsSanskritAiModalOpen(false)}
                className="absolute top-3.5 right-3.5 p-2 rounded-full bg-black/70 hover:bg-black text-slate-300 hover:text-white border border-stone-700 hover:border-amber-400 transition-all cursor-pointer z-20"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Top Meta Badges */}
              <div className="absolute top-3.5 left-4 flex items-center gap-2 flex-wrap z-10">
                <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 backdrop-blur-sm">
                  <Cpu className="w-3 h-3 text-amber-400" />
                  <span>Chapter VIII · Box 8</span>
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/70 text-stone-200 border border-stone-700 text-[10px] font-serif backdrop-blur-sm">
                  NASA Ames Research Center · AI Magazine (1985)
                </span>
              </div>

              {/* Title Overlay in Banner */}
              <div className="absolute bottom-3 left-4 right-4 z-10">
                <p className="font-serif font-black text-amber-400 text-base sm:text-lg tracking-wide drop-shadow-md">
                  संस्कृतं कृत्रिमबुद्धिमत्ता च
                </p>
                <h2 className="font-serif font-black text-lg sm:text-2xl text-white tracking-wide uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] mt-0.5">
                  RELATION BETWEEN SANSKRIT AND ARTIFICIAL INTELLIGENCE
                </h2>
                <p className="text-xs text-amber-200/90 font-serif italic mt-0.5">
                  Knowledge Representation in Sanskrit and Artificial Intelligence · Paninian Generative Semantics
                </p>
              </div>
            </div>

            {/* Scrollable Content Body */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-gradient-to-b from-[#0a0d14] to-[#07090e] flex-1">
              
              {/* Core Information Bullets as specified */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 pb-1 border-b border-amber-900/30">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <h3 className="font-serif font-bold text-xs sm:text-sm text-amber-300 uppercase tracking-wider">
                    Core Insights & Research Analysis
                  </h3>
                </div>

                {/* Bullet 1: The 1985 Paper */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/80 border border-amber-500/30 hover:border-amber-400/60 transition-all flex items-start gap-3 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    01
                  </div>
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-stone-200">
                    <strong className="text-amber-300 font-bold block mb-1">
                      • The 1985 Paper:
                    </strong>
                    <span>
                      The claim traces back to a 1985 paper titled &quot;Knowledge Representation in Sanskrit and Artificial Intelligence&quot; published in AI Magazine.
                    </span>
                  </div>
                </div>

                {/* Bullet 2: The Author */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/80 border border-amber-500/30 hover:border-amber-400/60 transition-all flex items-start gap-3 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    02
                  </div>
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-stone-200">
                    <strong className="text-amber-300 font-bold block mb-1">
                      • The Author:
                    </strong>
                    <span>
                      It was written by Rick Briggs, a researcher associated with NASA Ames Research Center.
                    </span>
                  </div>
                </div>

                {/* Bullet 3: What Briggs Actually Said */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-stone-900/80 border border-amber-500/30 hover:border-amber-400/60 transition-all flex items-start gap-3 shadow-sm">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    03
                  </div>
                  <div className="text-xs sm:text-sm font-serif leading-relaxed text-stone-200">
                    <strong className="text-amber-300 font-bold block mb-1">
                      • What Briggs Actually Said:
                    </strong>
                    <span>
                      Briggs did not claim that Sanskrit is a computer programming language. Instead, he explored how ancient Indian grammarians—specifically Pāṇini (around 500 BCE)—created a highly structured, rule-based system of grammar that avoids ambiguity in ways similar to modern AI semantic networks.
                    </span>
                  </div>
                </div>
              </div>

              {/* Source of Info Citation Banner */}
              <div className="p-3 sm:p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs font-serif text-amber-200">
                    <span className="font-bold text-amber-300">Source: </span>
                    <a
                      href="https://x.com/typingvanara/status/1842678680784715892"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-amber-100 transition-colors break-all"
                    >
                      Rick Briggs (NASA Ames Research Center, 1985) · AI Magazine &amp; Typing Vanara (https://x.com/typingvanara/status/1842678680784715892)
                    </a>
                  </div>
                </div>

                <a
                  href="https://x.com/typingvanara/status/1842678680784715892"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-amber-300 hover:text-amber-100 shrink-0"
                >
                  <span>Verify Link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Footer with Dedicated READ MORE Button */}
            <div className="px-5 py-3.5 bg-stone-950 border-t border-amber-900/50 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
              <div className="text-[11px] font-serif text-stone-400 text-center sm:text-left">
                Rick Briggs · NASA Ames · Pāṇini &amp; Natural Language Processing
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setIsSanskritAiModalOpen(false)}
                  className="px-4 py-2 text-xs font-serif uppercase tracking-wider text-stone-400 hover:text-white cursor-pointer"
                >
                  Close
                </button>

                <a
                  href="https://x.com/typingvanara/status/1842678680784715892"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-serif font-black text-xs uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_15px_rgba(245,158,11,0.35)] cursor-pointer hover:shadow-amber-500/50"
                >
                  <span>READ MORE</span>
                  <ExternalLink className="w-3.5 h-3.5 text-stone-950" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
