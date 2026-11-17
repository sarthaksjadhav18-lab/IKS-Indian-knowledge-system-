import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  X,
  ZoomIn,
  ExternalLink,
} from 'lucide-react';
import { LotusIcon } from './LotusIcon';
import ramayanaTriptych from '../assets/images/ramayana_triptych_hero_1792917889468.jpg';
import ramayanaArt from '../assets/images/ramayana_epic_art_1792917264531.jpg';
import mahabharatTriptych from '../assets/images/mahabharat_triptych_hero_1792917889726.jpg';
import mahabharatArt from '../assets/images/mahabharat_gita_art_1792917265308.jpg';
import swarajArt from '../assets/images/swaraj_sovereignty_art_1792917266524.jpg';
import palmLeafArt from '../assets/images/iks_manuscript_palm_leaf_1792901038298.jpg';

export type EpicType = 'ramayana' | 'mahabharat' | 'bhosale';

interface PanelDossier {
  id: string;
  columnTitle: string;
  sanskritTitle: string;
  archetype: string;
  figureName: string;
  tagline: string;
  shloka: string;
  shlokaMeaning: string;
  lineage: string;
  primaryWeapon: string;
  battleTechnique: string;
  keyFeats: string[];
  philosophicalPrinciple: string;
  thumbnailSrc?: string;
  thumbnailPosition?: string;
  wikiUrl?: string;
}

interface EpicManifest {
  id: EpicType;
  title: string;
  artworkBadge: string;
  sanskritTitle: string;
  dynasty: string;
  era: string;
  imageSrc: string;
  imageAlt: string;
  aspectRatioClass: string;
  description: string;
  coreMotto: string;
  panels: PanelDossier[];
}

const EPIC_DATA: Record<EpicType, EpicManifest> = {
  ramayana: {
    id: 'ramayana',
    title: 'THE PILLARS OF RAMAYANA',
    artworkBadge: 'THE PILLARS OF RAMAYANA',
    sanskritTitle: 'श्रीमद्वाल्मीकिरामायणम् · षड्रूपम्',
    dynasty: 'Surya Vamsha (The Solar Ikshvaku Dynasty)',
    era: 'Treta Yuga · Epoch of Maryada Purushottama',
    imageSrc: '/assets/aistudio/Archer_Before_the_Demon_King_e7e13863.jpg',
    imageAlt: 'The Pillars of Ramayana: Archer Before the Demon King',
    aspectRatioClass: 'aspect-[9/16]',
    description:
      'A majestic 6-pillar visual matrix inspired by the House of Bhosale aesthetic: capturing Laximan, Prabhu Shree Ram, Hanuman, Ravan, Sugreev, and Dasharatha.',
    coreMotto: 'रामो विग्रहवान् धर्मः (Rama is Dharma Personified)',
    panels: [
      {
        id: 'box-1',
        columnTitle: 'Box 1: LAXIMAN',
        sanskritTitle: 'लक्ष्मणः',
        archetype: 'The Fierce Protector & Armed Vanguard',
        figureName: 'LAXIMAN',
        tagline: 'Saumitra, and Ramanuja, is the younger half-brother of Rama in the Hindu epic Ramayana. He is considered as an incarnation of Shesha, the lord of serpents. Lakshmana was married to Urmila, and is known for his loyalty and dedication towards Rama.',
        shloka: 'आत्मानं मानुषं मन्ये रामं दशरथात्मजम् । भ्रातरौ रामलक्ष्मणौ धर्मात्मानौ महाबलौ ॥',
        shlokaMeaning: 'Considered mortal sons of Dasharatha, Rama and Lakshmana are the embodiment of righteous might on earth.',
        lineage: 'Sheshanaga Avatara · Inseparable fraternal ally & solar protector',
        primaryWeapon: 'Chandrahas Bow, Celestial Agneyastra & Nagastra',
        battleTechnique: 'Nirantar Raksha: Constant 360-degree shielding of Dharma and precision archery',
        keyFeats: [
          'Conquering Meghanada (Indrajit) through unimpeachable celibacy and focus',
          'Carving the impenetrable Lakshman Rekha for moral boundary protection',
          'Commanding the defensive tactical flanks across the ocean bridge (Setu)',
        ],
        philosophicalPrinciple: 'Nishtha: Uncompromising loyalty to moral integrity and fraternal duty in all circumstances.',
        thumbnailSrc: '/assets/aistudio/Warrior_Over_the_Golden_Himalayan_Valley_33d4d687.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Lakshmana',
      },
      {
        id: 'box-2',
        columnTitle: 'Box 2: PRABHU SHREE RAM',
        sanskritTitle: 'प्रभु श्रीरामः',
        archetype: 'The Crowned King of Righteousness',
        figureName: 'PRABHU SHREE RAM',
        tagline: 'Often respectfully referred to as Sri Rama, his life is celebrated through several festivals: birth on Rama Navami, victory in battle on Vijayadashami, and return to Ayodhya on Diwali, which is marked by lights and fireworks. Legends of Rama also feature in the texts of Jainism and Buddhism.',
        shloka: 'धर्मो रक्षति रक्षितः । रामो विग्रहवान् धर्मः साधुः सत्यपराक्रमः ॥',
        shlokaMeaning: 'Dharma protects those who protect Dharma. Rama is the very personification of Dharma, truth, and supreme valor.',
        lineage: 'Ikshvaku Surya-Vamsha · Lineage of King Harishchandra and Raghu',
        primaryWeapon: 'Kodanda Dhanush & Brahmashira Astra',
        battleTechnique: 'Dharmic Warfare: Flawless target precision without collateral malice',
        keyFeats: [
          'Breaking the Pinaka bow of Shiva at Janakpuri Swayamvara',
          'Upholding moral oath through 14 years in Dandakaranya exile',
          'Releasing the decisive Brahmastra that ended the reign of adharmic terror',
        ],
        philosophicalPrinciple: 'Satyameva Jayate: Sovereign authority derives not from coercion, but from moral supremacy.',
        thumbnailSrc: '/assets/aistudio/PRABHU_SHREE_RAM_e66e311e.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Rama',
      },
      {
        id: 'box-3',
        columnTitle: 'Box 3: PAVAN PUTRA SHRI HANUMAN',
        sanskritTitle: 'पवनपुत्रः श्रीहनुमान्',
        archetype: 'The Guardian of Dharma & Devotion',
        figureName: 'PAVAN PUTRA SHRI HANUMAN',
        tagline: 'Unshakable courage, selfless devotion, and the unyielding strength to conquer impossible trials.',
        shloka: 'यत्र यत्र रघुनाथकीर्तनं तत्र तत्र कृतमस्तकाञ्जलिम् । बाष्पवारिपरिपूर्णलोचनं मारुतिं नमत राक्षसान्तकम् ॥',
        shlokaMeaning: 'Wherever the glory of Raghunatha is recited, there stands Maruti with folded hands and tears of bliss, slayer of the demons.',
        lineage: 'Rudra Avatara · Vayu-Putra · Eternal Guardian of Dharma',
        primaryWeapon: 'Gada (Celestial Mace) & Ashta-Siddhi Bodily Might',
        battleTechnique: 'Vayu-Gati (Supersonic Momentum) & Mountain Uplifting Resilience',
        keyFeats: [
          'Leaping across the southern ocean to Lanka in a single bound',
          'Uplifting Mount Dronagiri to fetch the life-saving Sanjeevani herb',
          'Leading the Vanara battle formation with impenetrable courage',
        ],
        philosophicalPrinciple: 'Bhakti-Yukta Shauryam: Strength without ego, consecrated completely to righteousness.',
        thumbnailSrc: '/assets/aistudio/Golden_Hanuman_at_Sunrise_f8bc7104.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Hanuman',
      },
      {
        id: 'box-4',
        columnTitle: 'Box 4: RAVAN',
        sanskritTitle: 'रावणः · लङ्केशः',
        archetype: 'The Titan Sovereign of Lanka & Ten-Headed Scholar',
        figureName: 'RAVAN',
        tagline: 'Master of the four Vedas and celestial sciences, whose cosmic tapas shook Mount Kailash, yet whose unchecked ego sparked his downfall.',
        shloka: 'जटाटवीगलज्जलप्रवाहपावितस्थले गलेऽवलम्ब्य लम्बितां भुजङ्गतुङ्गमालिकाम् । डमड्डमड्डमड्डमन्निनादवड्डमर्वयं चकार चण्डताण्डवं तनोतु नः शिवः शिवम् ॥',
        shlokaMeaning: 'From the forest of his matted hair waters flow, around his neck is the mighty serpent; as his drum beats damad-damad, may Shiva who performs the intense Tandava bestow auspiciousness upon us.',
        lineage: 'Pulastya Brahmarshi Gotra & Vishrava-Putra · Emperor of Golden Lanka',
        primaryWeapon: 'Chandrahas Divine Sword & Celestial Brahmashira',
        battleTechnique: 'Mayavi Warfare & Ten-Fold Cosmic Invincibility',
        keyFeats: [
          'Composing the majestic Shiva Tandava Stotram while lifting Mount Kailash',
          'Attaining boons of invulnerability from Brahma through supreme austerities',
          'Ruling the golden island bastion of Lanka across oceans and continents',
        ],
        philosophicalPrinciple: 'Vidya-Ahankara: Boundless intellect and power collapse into ruin when decoupled from humility and Dharma.',
        thumbnailSrc: '/assets/aistudio/Archer_Before_the_Demon_King_e7e13863.jpg',
        thumbnailPosition: 'object-right',
        wikiUrl: 'https://en.wikipedia.org/wiki/Ravana',
      },
      {
        id: 'box-5',
        columnTitle: 'Box 5: SUGREEV',
        sanskritTitle: 'सुग्रीवः · वानरराजः',
        archetype: 'The Sovereign Ally of Kishkindha',
        figureName: 'SUGREEV',
        tagline: 'Rightful king of Kishkindha whose sacred fire-oath with Sri Rama mobilized millions of Vanaras to search the four quarters of the earth.',
        shloka: 'वयस्या बहुला लोके दुर्लभास्त्वात्मसंमिताः । त्वं च मे परमं मित्रं प्राणैरपि विशिष्यते ॥',
        shlokaMeaning: 'Many are the acquaintances in this world, but rare are friends equal to one\'s own soul; you are my supreme friend, dearer than life itself.',
        lineage: 'Surya-Putra · Ruler of the Mountain Citadel of Kishkindha',
        primaryWeapon: 'Celestial Gada, Colossal Boulders & Pranic Might',
        battleTechnique: 'Mass Reconnaissance Mobilization & Close-Quarters Duel Tactics',
        keyFeats: [
          'Entering sacred Agni-Sakshi friendship with Sri Rama at Rishyamukha mountain',
          'Deploying millions of scouts across the four cardinal directions to locate Mata Sita',
          'Engaging Kumbhakarna and foremost titan commanders on the battlefield of Lanka',
        ],
        philosophicalPrinciple: 'Mitra-Dharma: An ally\'s pledge consecrated before the sacred flame is inviolable even unto death.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_25__2026__10_52_18_PM_0696c645.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Sugriva',
      },
      {
        id: 'box-6',
        columnTitle: 'Box 6: DASHARATHA',
        sanskritTitle: 'दशरथः · चक्रवर्ती महाराजः',
        archetype: 'The Chakravartin Monarch of Ayodhya',
        figureName: 'DASHARATHA',
        tagline: 'Lord of the ten directions whose steadfast righteousness, royal honor, and paternal devotion anchored the Kosala Empire.',
        shloka: 'रघुकुल रीति सदा चलि आई । प्राण जाहुँ बरु बचनु न जाई ॥',
        shlokaMeaning: 'Such has ever been the eternal ethos of the Raghu dynasty: life may depart, but one\'s sacred word shall never fail.',
        lineage: 'Ikshvaku Surya-Vamsha · Emperor of Ayodhya & Father of Sri Rama',
        primaryWeapon: 'Shabdabhedi Dhanush (Archery by Sound) & Imperial Royal Chariot',
        battleTechnique: 'Ten-Directional Chariot Warfare & Celestial Devasura Alliances',
        keyFeats: [
          'Assisting Indra and the Devas in celestial wars, mastering charioteering across ten directions',
          'Conducting the sacred Putrakameshti Yajna bringing the four divine princes to earth',
          'Upholding the royal vow of truth (*Satya-Palana*) above personal grief and life itself',
        ],
        philosophicalPrinciple: 'Satya-Vrata: Integrity of word is the bedrock of righteous governance and civilizational order.',
        thumbnailSrc: '/assets/aistudio/The_Golden_Throne_of_Ancient_India_0447b4d3.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Dasharatha',
      },
    ],
  },
  mahabharat: {
    id: 'mahabharat',
    title: 'The Mahabharat Epic Enneaptych',
    artworkBadge: '9-Pillar House of Bhosale Style Matrix',
    sanskritTitle: 'श्रीमन्महाभारतम् · नवरूपम्',
    dynasty: 'Chandra Vamsha (The Lunar Kuru Dynasty)',
    era: 'Dvapara Yuga · Epoch of Kurukshetra & The Bhagavad Gita',
    imageSrc: '/assets/aistudio/Divine_Flute_Over_the_Battlefield_f8a77299.jpg',
    imageAlt: 'Mahabharat 9 Pillars: ARJUN, KRISHNA, BHIM, YUDHISTIR, NAKUL, SAHADEV, DROPATI, BHISHMA, and DRONACHARYA',
    aspectRatioClass: 'aspect-[9/16]',
    description:
      'A commanding 9-pillar visual matrix: ARJUN, KRISHNA, BHIM, YUDHISTIR, NAKUL, SAHADEV, DROPATI, BHISHMA, and DRONACHARYA.',
    coreMotto: 'यतो धर्मस्ततो जयः (Where there is Dharma, there is Victory)',
    panels: [
      {
        id: 'box-1',
        columnTitle: 'Box 1: ARJUN',
        sanskritTitle: 'अर्जुनः',
        archetype: 'The Gilded Gandiva Archer & Savyasachin',
        figureName: 'ARJUN',
        tagline: 'The peerless marksman and Pandava champion who wielded the Gandiva bow and received the divine wisdom of the Bhagavad Gita.',
        shloka: 'यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः । तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम ॥',
        shlokaMeaning: 'Wherever is Krishna, the Lord of Yoga, and wherever is Arjuna, the wielder of the bow, there will surely be fortune, victory, and prosperity.',
        lineage: 'Pandava Chandra-Vamsha · Kunti-Putra · Indra-Avatara',
        primaryWeapon: 'Gandiva Dhanush & Pashupatastra',
        battleTechnique: 'Savyasachin (Two-handed continuous arrow barrage with pinpoint focus)',
        keyFeats: [
          'Piercing the rotating fish eye solely by gazing at the water reflection in Draupadi’s Swayamvara',
          'Receiving the celestial Pashupatastra after severe penance to Lord Shiva in the Himalayas',
          'Attaining the divine realization of the Vishwaroopa directly from Lord Sri Krishna',
        ],
        philosophicalPrinciple: 'Ekagrata: One-pointed focus and surrender of results to Dharma.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_27__2026__09_11_18_PM_918b84a2.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Arjuna',
      },
      {
        id: 'box-2',
        columnTitle: 'Box 2: KRISHNA',
        sanskritTitle: 'श्रीकृष्णः',
        archetype: 'The Cosmic Charioteer & Universal Jagadguru',
        figureName: 'KRISHNA',
        tagline: 'The Supreme Lord and cosmic guide who held the reins of Arjuna’s chariot and revealed the eternal Gita amidst the battlefield.',
        shloka: 'कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥',
        shlokaMeaning: 'You have a right only to perform your duty, never to its fruits. Let not the fruit of action be your motive, nor be attached to inaction.',
        lineage: 'Yaduvamsha · Avatara of Lord Vishnu · Universal Preceptor (Jagadguru)',
        primaryWeapon: 'Sudarshana Chakra & Divine Omniscience (Jnana)',
        battleTechnique: 'Anahata Niti: Spiritual sovereignty, divine strategy, and cosmic alignment',
        keyFeats: [
          'Imparting the 700 sacred verses of the Bhagavad Gita to Arjuna on Kurukshetra',
          'Revealing the Vishwaroopa (Cosmic Universal Form) in the center of the battlefield',
          'Leading righteousness to victory through supreme wisdom, compassion, and truth',
        ],
        philosophicalPrinciple: 'Nishkama Karma: Dedicate all actions to the Divine without existential anxiety or attachment.',
        thumbnailSrc: '/assets/aistudio/Krishna_Beneath_the_Cosmic_Chakra_23a1e529.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Krishna',
      },
      {
        id: 'box-3',
        columnTitle: 'Box 3: BHIM',
        sanskritTitle: 'भीमः',
        archetype: 'The Colossal Titan of Strength & Unbreakable Vows',
        figureName: 'BHIM',
        tagline: 'The invincible second Pandava with the strength of ten thousand elephants, protector of righteousness and master of the mace.',
        shloka: 'भीमार्जुनौ च सहितौ युयुधानेन संयुते । सर्वे महारथा राजन् धर्मपक्षमाश्रिताः ॥',
        shlokaMeaning: 'Bhima and Arjuna together with Yuyudhana, all mighty car-warriors, stood firmly established on the side of Dharma.',
        lineage: 'Pandava Chandra-Vamsha · Kunti-Putra · Vayu-Putra',
        primaryWeapon: 'Vajra Gada (Thunderbolt Mace)',
        battleTechnique: 'Gada Yuddha (Unstoppable rotational impact combat and raw physical might)',
        keyFeats: [
          'Slaying the ruthless tyrants Bakasura, Hidimba, Kirmira, and Jarasandha in single combat',
          'Surviving deadly kalakuta poison and returning with multi-fold celestial vigor',
          'Fulfilling his solemn vows of retribution against tyranny to restore dignity to Draupadi',
        ],
        philosophicalPrinciple: 'Nyaya-Pratishta: Righteous physical might dedicated solely to dismantling oppression.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_27__2026__09_14_53_PM_c36dded5.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Bhima',
      },
      {
        id: 'box-4',
        columnTitle: 'Box 4: YUDHISTIR',
        sanskritTitle: 'युधिष्ठिरः',
        archetype: 'Dharmaraja · Emperor of Truth & Moral Jurisprudence',
        figureName: 'YUDHISTIR',
        tagline: 'The eldest Pandava and sovereign of Indraprastha, incarnation of Dharma, celebrated across the ages for truthfulness and justice.',
        shloka: 'न जातु कामान्न भयान्न लोभाद्धर्मं त्यजेज्जीवितस्यापि हेतोः । नित्यो धर्मः सुखदुःखे त्वनित्ये जीवो नित्यो हेतुरस्य त्वनित्यः ॥',
        shlokaMeaning: 'Never abandon Dharma for desire, fear, or greed, nor even to save one’s life. Dharma is eternal; earthly pleasure and pain are transient.',
        lineage: 'Pandava Chandra-Vamsha · Kunti-Putra · Yama-Dharma Avatara',
        primaryWeapon: 'Golden Spear (Tomara) & Shastra-Yukti (Legal Philosophy)',
        battleTechnique: 'Rajadharma Phalanx & Unflinching Truthfulness',
        keyFeats: [
          'Answering the cosmic enigmas of the Yaksha at the enchanted lake to revive his fallen brothers',
          'Uniting kingdoms under universal righteousness through the historic Rajasuya sacrifice',
          'Ascending Mount Meru in mortal bodily form accompanied by Dharma in canine guise',
        ],
        philosophicalPrinciple: 'Satya-Niti: Power derives legitimacy exclusively from adherence to truth and universal law.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_27__2026__09_16_52_PM_6a32ac20.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Yudhishthira',
      },
      {
        id: 'box-5',
        columnTitle: 'Box 5: NAKUL',
        sanskritTitle: 'नकुलः',
        archetype: 'The Graceful Swordsman & Master of Equine Lore',
        figureName: 'NAKUL',
        tagline: 'The fourth Pandava, son of Madri, renowned as the most handsome warrior, supreme equestrian, and lightning swordsman.',
        shloka: 'नकुलो रूपसम्पन्नो युधिष्ठिरप्रियङ्करः । असियुद्धे महारथी सर्वशस्त्रविशारदः ॥',
        shlokaMeaning: 'Nakula, possessed of peerless grace, loyal to Yudhishthira, a great warrior in sword combat and versed in all martial sciences.',
        lineage: 'Pandava Chandra-Vamsha · Madri-Putra · Ashwini Kumara Avatara',
        primaryWeapon: 'Asidhenu Dual Scimitars & Celestial Javelin',
        battleTechnique: 'Rapid Equestrian Flanking & High-Precision Dual Blade Combat',
        keyFeats: [
          'Authoring and applying the veterinary and equestrian treatise of Ashva-Shastra',
          'Vanquishing rival warlords across the western territories during the Rajasuya military expansion',
          'Decimating the vanguard forces of Uluka and defending the central royal chariot',
        ],
        philosophicalPrinciple: 'Ashva-Vidya: The synthesis of grace, physical poise, and rapid-response martial mastery.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_27__2026__09_18_26_PM_0e256951.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Nakula',
      },
      {
        id: 'box-6',
        columnTitle: 'Box 6: SAHADEV',
        sanskritTitle: 'सहदेवः',
        archetype: 'The Silent Strategist & Astrological Seer',
        figureName: 'SAHADEV',
        tagline: 'The youngest Pandava brother, profound astrologer and seer who foresaw the cosmic outcome of Kurukshetra yet spoke only when sought.',
        shloka: 'सहदेवश्च मतिमान् बृहस्पतिसमो नृप । ज्योतिःशास्त्रप्रणेता च सर्वशास्त्रविशारदः ॥',
        shlokaMeaning: 'Sahadeva, possessed of intellect equal to Brihaspati, master of astronomical sciences and versed in all sacred disciplines.',
        lineage: 'Pandava Chandra-Vamsha · Madri-Putra · Ashwini Kumara Avatara',
        primaryWeapon: 'Asi (Spada Sword), Celestial Gada & Jyotisha Vijnana',
        battleTechnique: 'Forecasting Enemy Trajectories & Counter-Vyuha Tactical Defense',
        keyFeats: [
          'Neutralizing the deceitful King Shakuni on the eighteenth day of the Kurukshetra war',
          'Leading the victorious southern campaign during the Pandava Rajasuya expansion',
          'Preserving the sacred astrological, astronomical, and natural sciences of ancient Bharata',
        ],
        philosophicalPrinciple: 'Prajna & Mauna: Infinite foresight preserved with patient humility and divine restraint.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_27__2026__09_19_57_PM_e07615e8.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Sahadeva',
      },
      {
        id: 'box-7',
        columnTitle: 'Box 7: DROPATI',
        sanskritTitle: 'द्रौपदी',
        archetype: 'Yajnaseni · The Empress Born of Sacred Fire',
        figureName: 'DROPATI',
        tagline: 'Born from sacrificial fire, Queen Draupadi is the embodiment of dignity, moral courage, and righteous fire who ignited the victory of Dharma.',
        shloka: 'या जाता पावकज्वालात्तप्तकाञ्चनसप्रभा । द्रौपदी सर्वकल्याणी धर्मपत्नी यशस्विनी ॥',
        shlokaMeaning: 'She who was born radiant as molten gold from sacrificial fire, Draupadi, auspicious, illustrious, and eternal protector of Dharma.',
        lineage: 'Panchala Royal Dynasty · Daughter of King Drupada · Born of Sacred Agni Yajna',
        primaryWeapon: 'Vak-Shakti (Sovereign Moral Voice) & Impeccable Dignity',
        battleTechnique: 'Unshakable Moral Indictment & Dharmic Resilience',
        keyFeats: [
          'Confronting the assembly of elders and kings in Hastinapura on the constitutional ethics of justice',
          'Enduring thirteen arduous years of wilderness and incognito trial with majestic royalty',
          'Inspiring the restoration of cosmic Dharma and the defeat of adharma across Aryavarta',
        ],
        philosophicalPrinciple: 'Atma-Sammana: The inviolable sanctity and moral authority of righteous womanhood.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_27__2026__09_21_22_PM_45b1340b.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Draupadi',
      },
      {
        id: 'box-8',
        columnTitle: 'Box 8: BHISHMA',
        sanskritTitle: 'भीष्मः',
        archetype: 'Devavrata · Grand Patriarch of the Kurus & Iccha-Mrityu',
        figureName: 'BHISHMA',
        tagline: 'The towering patriarch bound by his ferocious vow, master of astras with the boon of choosing the moment of his own passing.',
        shloka: 'यतो धर्मस्ततो जयः । न ह्यहं पार्थ धर्मस्य व्यभिचारं चरो क्वचित् ॥',
        shlokaMeaning: 'Where there is Dharma, there is Victory. Never do I knowingly stray from the dictates of supreme duty.',
        lineage: 'Kuru Dynasty · Son of Shantanu & Devi Ganga · Disciple of Parashurama',
        primaryWeapon: 'Celestial Chariot Bow & Prasvapastra',
        battleTechnique: 'Sarvatomukha Vyuha: Multi-directional fortress formations',
        keyFeats: [
          'Undertaking the immortal vow of lifelong celibacy and state service out of filial devotion',
          'Holding back the entire Pandava vanguard for ten grueling days at over a century of age',
          'Delivering the monumental Shanti Parva discourses on governance from his bed of arrows',
        ],
        philosophicalPrinciple: 'Vrata-Nishtha & Rajadharma: Uncompromising personal discipline subordinated to civilizational duty.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_27__2026__09_22_44_PM_6f6c5b7d.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Bhishma',
      },
      {
        id: 'box-9',
        columnTitle: 'Box 9: DRONACHARYA',
        sanskritTitle: 'द्रोणाचार्यः',
        archetype: 'The Supreme Preceptor of Archery & Martial Science',
        figureName: 'DRONACHARYA',
        tagline: 'The royal guru of both Pandavas and Kauravas, architect of the Chakravyuha and supreme master of divine astras.',
        shloka: 'अस्त्राणि विविधानि च दिव्यानि मानुषाणि च । शिक्षयामास पार्थाय द्रोणः शस्त्रभृतां वरः ॥',
        shlokaMeaning: 'Drona, foremost among the wielders of arms, trained the princes in divine and earthly disciplines of combat.',
        lineage: 'Bharadvaja Rishi Gotra · Disciple of Agnivesha and Parashurama',
        primaryWeapon: 'Brahmashira Astra & Divya Dhanush',
        battleTechnique: 'Chakravyuha Geometrical Engineering & Multi-tiered Phalanxes',
        keyFeats: [
          'Formulating the seven-tiered rotating Chakravyuha on the thirteenth day of Kurukshetra',
          'Training Arjuna to master auditory target archery in utter pitch darkness',
          'Commanding the combined Kuru legions through five days of unprecedented tactical intensity',
        ],
        philosophicalPrinciple: 'Guru-Parampara: Mastery of destructive celestial power requires total mastery over the ego.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_27__2026__09_24_17_PM_b994093a.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Drona',
      },
    ],
  },
  bhosale: {
    id: 'bhosale',
    title: 'SWARAJ AND ITS ENEMIES',
    artworkBadge: 'SWARAJ AND ITS ENEMIES',
    sanskritTitle: 'छत्रपती भोसले साम्राज्यम् · नवरूपम्',
    dynasty: 'Bhosale Royal Maratha Dynasty (Hindavi Swarajya)',
    era: '17th Century CE · Epoch of Sovereign Reclamation & Fortresses',
    imageSrc: '/assets/aistudio/HOUSE_OF_BHOSALE_f11fbab9.jpg',
    imageAlt: 'Swaraj and Its Enemies 9 Figures: Chhatrapati Shivaji Maharaj, Chhatrapati Sambhaji Maharaj, Jija Mata, Tanhaji Malusare, Ram Raje, Afzal Khan, Aurangzeb, Nizamshah, and Adilshah',
    aspectRatioClass: 'aspect-[9/16]',
    description:
      'The historic 9-figure matrix of Maratha sovereignty and Deccan politics: Chhatrapati Shivaji Maharaj, Chhatrapati Sambhaji Maharaj, Rajmata Jija Mata, Subhedar Tanhaji Malusare, Chhatrapati Ram Raje, Afzal Khan, Emperor Aurangzeb, Nizamshah, and Adilshah.',
    coreMotto: 'प्रतिपच्चन्द्रलेखेव वर्धिष्णुर्विश्ववन्दिता (Ever-growing like the crescent moon, praised by the entire universe)',
    panels: [
      {
        id: 'box-1',
        columnTitle: 'Box 1: Chhatrapati Shivaji Maharaj',
        sanskritTitle: 'छत्रपति शिवाजी महाराजः',
        archetype: 'The Sovereign Founder of Hindavi Swarajya',
        figureName: 'Chhatrapati Shivaji Maharaj',
        tagline: 'The visionary founder of the Maratha Empire who resurrected civilizational pride, naval sovereignty, and righteous governance across the Deccan.',
        shloka: 'प्रतिपच्चन्द्रलेखेव वर्धिष्णुर्विश्ववन्दिता शाहसूनोः शिवस्यैषा मुद्रा भद्राय राजते ॥',
        shlokaMeaning: 'This Royal Seal of Shivaji, son of Shahaji, growing like the first crescent of the moon, is venerated by all and shines for the welfare of mankind.',
        lineage: 'Bhosale Dynasty of Verul & Deccan · Crowned Chhatrapati at Raigad (1674 CE)',
        primaryWeapon: 'Bhavani Talwar, Wagh Nakh (Tiger Claws) & Firangi Blade',
        battleTechnique: 'Ganimi Kava (Guerrilla Warfare, Rapid Cavalry Maneuvers & Hill Citadel Defense)',
        keyFeats: [
          'Subduing the massive Afzal Khan expedition at the foot of Pratapgad fort',
          'Establishing sovereign Hindavi Swarajya with vernacular statecraft and civil protection',
          'Building over 300 mountain fortresses and an indigenous naval armada guarding the coastline',
        ],
        philosophicalPrinciple: 'Swarajya: Freedom and self-rule is the inherent birthright of people, guarded by righteous vigilance.',
        thumbnailSrc: '/assets/aistudio/shivaji_maharaj_9d14854d.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Shivaji',
      },
      {
        id: 'box-2',
        columnTitle: 'Box 2: Chhatrapati Sambhaji Maharaj',
        sanskritTitle: 'छत्रपति सम्भाजी महाराजः',
        archetype: 'The Dharmaveer & Unyielding Scholar-King',
        figureName: 'Chhatrapati Sambhaji Maharaj',
        tagline: 'The second Chhatrapati of the Maratha Empire: Sanskrit scholar, undefeated general in over 120 military engagements, and steadfast martyr for Dharma.',
        shloka: 'शौर्यं तेजो धृतिर्दाक्ष्यं युद्धे चाप्यपलायनम् । दानमीश्वरभावश्च क्षात्रं कर्म स्वभावजम् ॥',
        shlokaMeaning: 'Heroism, majesty, firmness, dexterity, never retreating from battle, generosity, and leadership are the natural qualities of the Kshatriya.',
        lineage: 'Second Chhatrapati of the Maratha Empire · Author of the Sanskrit treatise "Budhbhushanam"',
        primaryWeapon: 'Pata (Gauntlet Sword) & Heavy Maratha Cavalry Lance',
        battleTechnique: 'High-Velocity Blitzkrieg & Decisive Counter-Offensives Across Western Ghats',
        keyFeats: [
          'Repelling full-scale Mughal imperial invasions across a grueling decade without losing a single fortress',
          'Authoring classical philosophical and statecraft treatises in Sanskrit in his early youth',
          'Enduring supreme martyrdom rather than compromising civilizational honor and religious faith',
        ],
        philosophicalPrinciple: 'Dharmaveer: Principled valor that remains unbroken even under the fiercest adversity.',
        thumbnailSrc: '/assets/aistudio/Chhatrapati_Sambhaji_Maharaj__Rise_for_a_Greater_Cause_32b09a84.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Sambhaji',
      },
      {
        id: 'box-3',
        columnTitle: 'Box 3: Jija Mata',
        sanskritTitle: 'राजमाता जिजामाता',
        archetype: 'The Sovereign Guiding Light & Mother of Swarajya',
        figureName: 'Jija Mata',
        tagline: 'Rajmata Jijabai Bhosale, the visionary matriarch whose unyielding resolve, wisdom, and moral mentorship nurtured the foundation of Swarajya.',
        shloka: 'शिवस्य जननी धीरा जिजाऊ राजमातृका । स्वराज्यबीजसंस्थात्री वन्द्यते सकलैर्जनैः ॥',
        shlokaMeaning: 'The valiant mother of Shiva, Rajmata Jijau, founder of the seed of Swarajya, is reverently saluted by all humankind.',
        lineage: 'Jadhav Dynasty of Sindkhed Raja · Royal Matriarch of the Bhosale Dynasty',
        primaryWeapon: 'Strategic Statecraft (Rajaniti) & Moral Integrity',
        battleTechnique: 'Geopolitical Mentorship, Citadel Administration & Peasant Welfare',
        keyFeats: [
          'Pioneering the reconstruction of war-torn Pune with a ceremonial golden plough to inspire hope',
          'Presiding over judicial assemblies (Nivad Sabha) to guarantee justice for common subjects',
          'Nurturing Shivaji Maharaj with civilizational epics and high ideals of sovereign righteousness',
        ],
        philosophicalPrinciple: 'Matri-Shakti: A civilization’s liberty is sustained by the courage and ethical clarity of its mothers.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_28__2026__06_04_53_PM_efc846cc.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Jijabai',
      },
      {
        id: 'box-4',
        columnTitle: 'Box 4: Tanhaji Malusare',
        sanskritTitle: 'तानाजी मालुसरे',
        archetype: 'The Lion of Sinhagad & Supreme Selflessness',
        figureName: 'Tanhaji Malusare',
        tagline: 'Subhedar Tanaji Malusare: "Aadhi lagin Kondhanyacha, mag majhya Raybache" — Scaling the sheer cliffs of Kondhana and securing eternal glory.',
        shloka: 'आधी लग्न कोंढाण्याचे मग माझ्या रायबाचे । इति ब्रुवाणः शूरोऽसौ प्राणांस्तत्याज संयुगे ॥',
        shlokaMeaning: 'First the wedding of Kondhana fort, then my son Rayba’s wedding — so declaring, this hero gave his life in battle.',
        lineage: 'Malusare Clan of Umrathe · Trusted Commander and Lifelong Companion to Shivaji Maharaj',
        primaryWeapon: 'Heavy Talwar & Scaling Ropes (Kondhana Assault)',
        battleTechnique: 'Night Amphibious & Perpendicular Cliff Infiltration',
        keyFeats: [
          'Scaling the 300-meter perpendicular western cliff of Kondhana citadel in pitch darkness',
          'Leading the daring storming of the fort against formidable garrison defenders',
          'Recapturing Sinhagad fortress, immortalized in the words "Gad aala, pan Sinha gela"',
        ],
        philosophicalPrinciple: 'Kartavya-Nishtha: Selfless dedication to the motherland comes before any personal celebration.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_28__2026__06_09_03_PM_55bae13a.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Tanaji_Malusare',
      },
      {
        id: 'box-5',
        columnTitle: 'Box 5: Ram Raje',
        sanskritTitle: 'रामराजे छत्रपति',
        archetype: 'Chhatrapati of Satara & Maratha Sovereign',
        figureName: 'Ram Raje',
        tagline: 'Chhatrapati Rajaram II (Ram Raje), grandson of Rajaram I and Queen Tarabai, sovereign titular head of the Maratha Empire centered at Satara.',
        shloka: 'राजधर्मपरो राजा प्रजापालनतत्परः । सातारानगरेशानः छत्रपतिविराजितः ॥',
        shlokaMeaning: 'A monarch dedicated to royal dharma and devoted to the protection of his subjects, the Chhatrapati resplendent at Satara.',
        lineage: 'Royal Bhosale Dynasty of Satara · Grandson of Chhatrapati Rajaram I and Maharani Tarabai',
        primaryWeapon: 'Ceremonial Royal Khanda & Maratha Scepter',
        battleTechnique: 'Imperial Statecraft & Coordination of Maratha Confederacy Commanders',
        keyFeats: [
          'Preserving the supreme royal throne (Gadi) of the Chhatrapatis at Satara citadel',
          'Ratifying the Sangola Agreement of 1750 formalizing confederal administration under the Peshwas',
          'Sustaining continuity of royal sovereignty during the peak expansion of the Maratha Empire',
        ],
        philosophicalPrinciple: 'Sovereign Continuity: Preserving the civilizational seat of authority through turbulent tides.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_28__2026__06_20_15_PM_cabcabe0.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Ramraja',
      },
      {
        id: 'box-6',
        columnTitle: 'Box 6: Afzal Khan',
        sanskritTitle: 'अफजल खानः',
        archetype: 'Bijapur Commander & Challenger at Pratapgad',
        figureName: 'Afzal Khan',
        tagline: 'The veteran heavyweight commander of the Adilshahi Sultanate of Bijapur who marched against Swarajya and met his fate at the foot of Pratapgad.',
        shloka: 'प्रतापगढयुद्धे च शिवहस्ते पराजितः । रणकुञ्जरतुल्योऽपि गतः कालस्य गोचरम् ॥',
        shlokaMeaning: 'Vanquished at Pratapgad by the vigilant hand of Shivaji, despite matching a ferocious war elephant, he was claimed by destiny.',
        lineage: 'Adilshahi General of Bijapur · Governor of Wai',
        primaryWeapon: 'Heavy Katar Dagger, Curved Shamshir & Battle Bow',
        battleTechnique: 'Heavy Siege Warfare & Subterfuge Diplomacy',
        keyFeats: [
          'Leading a vast armada of artillery and armored cavalry into the rugged Sahyadri passes',
          'Attempting a covert assassination of Shivaji Maharaj during the historic peace conference',
          'His defeat marked the decisive turning point cementing Maratha dominance in the Deccan',
        ],
        philosophicalPrinciple: 'Vigilance over Treachery: Arrogance and deceit inevitably collapse before righteous preparedness.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_28__2026__06_22_04_PM_7823f6e6.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Afzal_Khan_(general)',
      },
      {
        id: 'box-7',
        columnTitle: 'Box 7: Aurangzeb',
        sanskritTitle: 'औरङ्गजेबः',
        archetype: 'Mughal Padishah & 27-Year Deccan Adversary',
        figureName: 'Aurangzeb',
        tagline: 'The sixth Mughal Emperor (Alamgir) who led the imperial forces in a twenty-seven-year campaign in the Deccan against the relentless Maratha resistance.',
        shloka: 'दक्खणभूमिपर्यन्ते युद्धमानः सुदीर्घतः । अलमगीरो नृपश्रेष्ठः स्वराज्यं नैव जितवान् ॥',
        shlokaMeaning: 'Campaigning relentlessly till his final breath across the Deccan plateau, Alamgir could never extinguish the fire of Swarajya.',
        lineage: 'Mughal Dynasty of Delhi · Padishah of Hindustan (1658–1707 CE)',
        primaryWeapon: 'Heavy Composite Bow, Tegha Curved Blade & Imperial Artillery',
        battleTechnique: 'Vast Imperial Siege Warfare, Fortress Encirclement & Attrition',
        keyFeats: [
          'Marshalling the largest standing military force of the seventeenth century into Maharashtra',
          'Engaging in an exhausting twenty-five year war of sieges that fractured imperial resources',
          'His inability to conquer the decentralized Marathas marked the decline of Mughal hegemony',
        ],
        philosophicalPrinciple: 'The Limit of Imperial Might: Vast empires crumble when resisting a people fighting for their freedom.',
        thumbnailSrc: '/assets/aistudio/aurangzeb_chatgpt_shared.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Aurangzeb',
      },
      {
        id: 'box-8',
        columnTitle: 'Box 8: Nizamshah',
        sanskritTitle: 'निजामशाहः',
        archetype: 'Sovereign of the Ahmadnagar Sultanate',
        figureName: 'Nizamshah',
        tagline: 'The dynasty of the Nizamshahi Sultanate of Ahmadnagar, under whose service early Maratha commanders like Shahaji Raje rose to prominence.',
        shloka: 'अहमदनगराधीशो निजामशाहकुलध्वजः । दक्खणसमरभूमौ यः स्वबलं प्रदर्शितवान् ॥',
        shlokaMeaning: 'The sovereign of Ahmadnagar, flag-bearer of the Nizamshahi house, who demonstrated his martial prowess in the Deccan.',
        lineage: 'Nizamshahi Dynasty of Ahmadnagar (1490–1636 CE)',
        primaryWeapon: 'Gilded Firangi Saber & Deccan Steel Armor',
        battleTechnique: 'Deccan Cavalry Tactics & Combined Maratha-Habshi Defense',
        keyFeats: [
          'Resisting northern Mughal expansion through the defensive genius of Malik Ambar and Shahaji Raje',
          'Fostering early indigenous Maratha military commands and administrative fiefdoms',
          'Constructing impregnable bastions like Daulatabad and Ahmadnagar fortresses',
        ],
        philosophicalPrinciple: 'Deccan Autonomy: Regional sultanates provided the crucible where Maratha military strategy was refined.',
        thumbnailSrc: '/assets/aistudio/ChatGPT_Image_Oct_28__2026__06_16_02_PM_c1bab151.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Ahmadnagar_Sultanate',
      },
      {
        id: 'box-9',
        columnTitle: 'Box 9: Adilshah',
        sanskritTitle: 'आदिलशाहः',
        archetype: 'Sovereign of the Bijapur Sultanate',
        figureName: 'Adilshah',
        tagline: 'The Adilshahi dynasty of Bijapur, the Deccan sultanate from whose domain Chhatrapati Shivaji carved out the independent realm of Hindavi Swarajya.',
        shloka: 'विजापुरपुराधीशो विशालेक्षणसंयुतः । आदिलशाहनृपतिः स्वराज्येनाभिभूयते ॥',
        shlokaMeaning: 'The lord of Bijapur city, monarch of the Adilshahi dynasty, whose frontiers were reshaped by the triumph of Swarajya.',
        lineage: 'Adilshahi Dynasty of Bijapur (1489–1686 CE)',
        primaryWeapon: 'Bijapuri Talwar & Massive Fort Siege Cannons (Malik-e-Maidan)',
        battleTechnique: 'Cavalry Charges, Monumental Fortress Engineering & Defensive Alliances',
        keyFeats: [
          'Ruling the extensive Bijapur kingdom and erecting the architectural marvel of Gol Gumbaz',
          'Deploying elite generals across the Western Ghats to contest Maratha hill forts',
          'Conceding key territories that became the geographic cradle of Maratha sovereignty',
        ],
        philosophicalPrinciple: 'Civilizational Transformation: Traditional sultanates gave way to indigenous self-rule and justice.',
        thumbnailSrc: '/assets/aistudio/adilshah_bijapur_sultan.jpg',
        thumbnailPosition: 'object-center',
        wikiUrl: 'https://en.wikipedia.org/wiki/Bijapur_Sultanate',
      },
    ],
  },
};

interface HouseOfBhosaleEpicViewProps {
  initialEpic?: EpicType;
  onBackToChronicles: () => void;
  onOpenSimulator: () => void;
}

export const HouseOfBhosaleEpicView: React.FC<HouseOfBhosaleEpicViewProps> = ({
  initialEpic = 'bhosale',
  onBackToChronicles,
  onOpenSimulator,
}) => {
  const [currentEpic, setCurrentEpic] = useState<EpicType>(initialEpic);
  const [activePanelIndex, setActivePanelIndex] = useState<number>(1); // Default to center panel
  const [isAudioEnabled, setIsAudioEnabled] = useState<boolean>(true);
  const [selectedCharacterModal, setSelectedCharacterModal] = useState<PanelDossier | null>(null);

  // Play subtle bell/conch audio synth feedback
  const playSfx = (freq: number, type: OscillatorType = 'sine') => {
    if (!isAudioEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.8);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.8);
    } catch {
      // AudioContext muted/unsupported
    }
  };

  const handleEpicChange = (epic: EpicType) => {
    setCurrentEpic(epic);
    setActivePanelIndex(1);
    playSfx(epic === 'ramayana' ? 440 : epic === 'mahabharat' ? 528 : 432, 'triangle');
  };

  const activeEpicData = EPIC_DATA[currentEpic];
  const safePanelIndex = activePanelIndex < activeEpicData.panels.length ? activePanelIndex : 0;
  const activePanel = activeEpicData.panels[safePanelIndex] || activeEpicData.panels[0];

  // Update hash when epic changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.hash = `#/epic/${currentEpic}`;
    }
  }, [currentEpic]);

  // Sync if initialEpic prop changes
  useEffect(() => {
    if (initialEpic && initialEpic !== currentEpic) {
      setCurrentEpic(initialEpic);
    }
  }, [initialEpic]);

  return (
    <div className="min-h-screen bg-[#06080d] text-slate-100 select-none pb-24">
      {/* Top Banner Navigation & Breadcrumbs */}
      <header className="sticky top-0 z-40 bg-[#090d15]/95 backdrop-blur-md border-b border-amber-900/40 px-4 sm:px-8 py-3.5 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Left: Back */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={onBackToChronicles}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-900 hover:bg-stone-800 border border-stone-700 text-amber-200 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm cursor-pointer"
              aria-label="Back to continuous chronicles"
            >
              <ArrowLeft className="w-4 h-4 text-amber-400" />
              <span>Back to Chronicles</span>
            </button>
          </div>

          {/* Right: Sound & Action */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-400 transition-colors cursor-pointer"
              title={isAudioEnabled ? 'Mute Chimes' : 'Enable Chimes'}
            >
              {isAudioEnabled ? (
                <Volume2 className="w-4 h-4 text-amber-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-stone-500" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Epic Portal Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        
        {/* Hero Section with Subtitle and Core Philosophy */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-serif tracking-wider shadow-inner">
            <LotusIcon className="w-3.5 h-3.5 text-amber-400" />
            <span>{activeEpicData.sanskritTitle}</span>
            <span className="text-amber-500">✦</span>
            <span>{activeEpicData.era}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 tracking-wide uppercase drop-shadow-md">
            {activeEpicData.title}
          </h1>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-stone-900/80 border border-amber-900/50 text-amber-300 text-xs font-serif font-bold italic shadow-inner">
            <span>{activeEpicData.coreMotto}</span>
          </div>
        </div>

        {/* Showcase: Interactive 6 Pillars Showcase */}
        <div className="w-full flex flex-col items-center">
          
          {/* Interactive Character & Strategy Boxes */}
          <div className="relative w-full rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.9)] bg-[#070a10]">
            
            {/* Grid containing the Boxes */}
            <div className="grid grid-cols-3 gap-2 sm:gap-2.5 w-full p-2 sm:p-2.5 z-20">
              {activeEpicData.panels.map((panel, idx) => {
                const isSelected = activePanelIndex === idx;
                const thumbSrc =
                  panel.thumbnailSrc ||
                  (idx === 0 || idx === 1 || idx === 2
                    ? activeEpicData.imageSrc
                    : idx % 2 === 0
                    ? ramayanaArt
                    : mahabharatArt);

                const thumbPos =
                  panel.thumbnailPosition ||
                  (idx === 0
                    ? 'object-left'
                    : idx === 1
                    ? 'object-center'
                    : idx === 2
                    ? 'object-right'
                    : 'object-center');

                return (
                  <button
                    key={panel.id}
                    onClick={() => {
                      setActivePanelIndex(idx);
                      playSfx(260 + idx * 40, 'sine');
                      setSelectedCharacterModal(panel);
                    }}
                    className={`relative aspect-[3/4] rounded-xl overflow-hidden border transition-all duration-300 flex flex-col justify-between p-2 text-left cursor-pointer group/box ${
                      isSelected
                        ? 'border-2 border-amber-400 bg-amber-500/20 shadow-[0_0_24px_rgba(251,191,36,0.45)] ring-2 ring-amber-400/50 scale-[1.02] z-10'
                        : 'border-stone-800/80 bg-stone-900/80 hover:border-amber-500/60 hover:bg-stone-850 hover:shadow-lg'
                    }`}
                    aria-label={`Inspect ${panel.archetype}`}
                  >
                    {/* Background Artwork Image */}
                    <img
                      src={thumbSrc}
                      alt={panel.figureName}
                      className={`absolute inset-0 w-full h-full object-cover select-none transition-transform duration-500 group-hover/box:scale-105 ${thumbPos}`}
                    />

                    {/* Scrim Overlay */}
                    <div
                      className={`absolute inset-0 transition-colors ${
                        isSelected
                          ? 'bg-gradient-to-t from-black via-stone-950/60 to-amber-950/30'
                          : 'bg-gradient-to-t from-black/95 via-black/55 to-black/30 group-hover/box:from-black/85'
                      }`}
                    />

                    {/* Top Column Indicator & Read More Prompt */}
                    <div className="relative z-10 flex justify-between items-center w-full">
                      <span
                        className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-wider backdrop-blur-md transition-all shadow-sm ${
                          isSelected
                            ? 'bg-amber-400 text-stone-950 font-black shadow-md shadow-amber-500/30'
                            : 'bg-black/80 text-amber-200 border border-amber-500/30'
                        }`}
                      >
                        Box {idx + 1}
                      </span>

                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/75 border border-amber-400/40 text-[8.5px] font-serif text-amber-300 backdrop-blur-sm group-hover/box:bg-amber-500 group-hover/box:text-stone-950 transition-colors">
                        <span>Read More</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    </div>

                    {/* Bottom Banner on Image: Sanskrit and English written at appropriate place */}
                    <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-stone-950/85 to-transparent p-1.5 pt-3 rounded-b text-center">
                      <div className="text-[10px] sm:text-[11px] font-serif font-bold text-amber-300 truncate drop-shadow">
                        {panel.sanskritTitle.split('·')[0].trim()}
                      </div>
                      <div className="text-[9px] sm:text-[10px] text-slate-100 truncate font-semibold drop-shadow">
                        {panel.figureName.split('·')[0].trim()}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quick Column Switch Buttons for Mobile & Accessibility */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full mt-4">
            {activeEpicData.panels.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => {
                  setActivePanelIndex(idx);
                  playSfx(260 + idx * 40);
                  setSelectedCharacterModal(p);
                }}
                className={`px-2 py-1.5 rounded-lg text-xs font-serif font-bold border transition-all text-center cursor-pointer ${
                  activePanelIndex === idx
                    ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md font-black'
                    : 'bg-stone-900/90 text-stone-300 border-stone-800 hover:border-amber-700'
                }`}
              >
                <div className="text-[8.5px] uppercase tracking-widest text-stone-400 font-mono">
                  Box {idx + 1}
                </div>
                <div className="truncate text-[10px] mt-0.5">
                  {p.figureName.split('·')[0]}
                </div>
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Fullscreen Character Artwork Modal with Sanskrit and English Inscription */}
      {selectedCharacterModal && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col p-4 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedCharacterModal(null)}
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
                  {selectedCharacterModal.figureName}
                </h3>
                <p className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  {selectedCharacterModal.sanskritTitle}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedCharacterModal(null)}
              className="p-2 rounded-lg bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-700 transition-colors cursor-pointer"
              aria-label="Close HD viewer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Large Image Canvas with Names Inscribed at Top Right & Transparent Bio with Read More at Bottom */}
          <div
            className="flex-1 flex items-center justify-center max-w-6xl w-full mx-auto my-auto py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-[0_0_80px_rgba(251,191,36,0.3)] bg-black max-h-[82vh] flex items-center justify-center">
              <img
                src={selectedCharacterModal.thumbnailSrc || activeEpicData.imageSrc}
                alt={selectedCharacterModal.figureName}
                className="max-h-[82vh] w-auto max-w-full object-contain block select-none"
              />

              {/* 1) Name Box at Right Hand Side Top */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-black/75 backdrop-blur-md border border-amber-400/80 shadow-[0_10px_30px_rgba(0,0,0,0.9)] text-right z-20">
                <div className="text-base sm:text-2xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 tracking-wider drop-shadow-md">
                  {selectedCharacterModal.sanskritTitle.split('·')[0].trim()}
                </div>
                <div className="text-[11px] sm:text-sm font-serif font-extrabold text-white tracking-widest uppercase mt-0.5 drop-shadow">
                  {selectedCharacterModal.figureName.split('·')[0].trim()}
                </div>
              </div>

              {/* 2) Transparent Background Description: Left corner for Sugreev (Ramayana Box 5), Right corner for others */}
              <div
                className={`absolute bottom-2 sm:bottom-4 max-w-[270px] sm:max-w-[330px] p-3 sm:p-4 rounded-xl bg-black/70 backdrop-blur-md border border-amber-500/35 shadow-[0_15px_40px_rgba(0,0,0,0.9)] z-20 ${
                  currentEpic === 'ramayana' && selectedCharacterModal.id === 'box-5'
                    ? 'left-2 sm:left-4'
                    : 'right-2 sm:right-4'
                }`}
              >
                <p className="font-serif text-slate-200 text-[11px] sm:text-xs leading-relaxed drop-shadow text-left">
                  {currentEpic === 'ramayana' && selectedCharacterModal.id === 'box-1'
                    ? "Saumitra, and Ramanuja, is the younger half-brother of Rama in the Hindu epic Ramayana. He is considered as an incarnation of Shesha, the lord of serpents.[2] Lakshmana was married to Urmila, and is known for his loyalty and dedication towards Rama."
                    : currentEpic === 'ramayana' && selectedCharacterModal.id === 'box-2'
                    ? "Often respectfully referred to as Sri Rama, his life is celebrated through several festivals: birth on Rama Navami, victory in battle on Vijayadashami, and return to Ayodhya on Diwali, which is marked by lights and fireworks. Legends of Rama also feature in the texts of Jainism and Buddhism."
                    : selectedCharacterModal.tagline}
                </p>

                {/* Read More button opening Wikipedia and Reference Text */}
                <div
                  className={`mt-3 pt-2.5 border-t border-amber-500/20 flex flex-col gap-1.5 ${
                    currentEpic === 'ramayana' && selectedCharacterModal.id === 'box-5' ? 'items-start' : 'items-end'
                  }`}
                >
                  <a
                    href={
                      selectedCharacterModal.wikiUrl ||
                      (currentEpic === 'mahabharat'
                        ? 'https://en.wikipedia.org/wiki/Mahabharata'
                        : selectedCharacterModal.id === 'box-1'
                        ? 'https://en.wikipedia.org/wiki/Lakshmana'
                        : selectedCharacterModal.id === 'box-2'
                        ? 'https://en.wikipedia.org/wiki/Rama'
                        : selectedCharacterModal.id === 'box-3'
                        ? 'https://en.wikipedia.org/wiki/Hanuman'
                        : selectedCharacterModal.id === 'box-4'
                        ? 'https://en.wikipedia.org/wiki/Ravana'
                        : selectedCharacterModal.id === 'box-5'
                        ? 'https://en.wikipedia.org/wiki/Sugriva'
                        : selectedCharacterModal.id === 'box-6'
                        ? 'https://en.wikipedia.org/wiki/Dasharatha'
                        : 'https://en.wikipedia.org/wiki/Ramayana')
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 hover:text-amber-100 border border-amber-400/50 text-xs font-serif font-bold tracking-wider transition-all cursor-pointer shadow-sm"
                  >
                    <span>Read More</span>
                    <ExternalLink className="w-3 h-3 text-amber-400" />
                  </a>

                  <span className="text-[8.5px] text-stone-400/80 font-sans tracking-wider uppercase">
                    INFORMATION REFERRED FROM WIKIPEDIA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
