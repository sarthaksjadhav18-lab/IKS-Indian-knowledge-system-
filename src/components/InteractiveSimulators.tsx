import React, { useState } from 'react';
import { Sun, Compass, Code, ShieldCheck, Play, ArrowRight, RotateCcw } from 'lucide-react';

export const InteractiveSimulators: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sundial' | 'baudhayana' | 'panini' | 'ironPillar'>('sundial');

  // 1. Konark Sundial State
  const [solarTimeMinutes, setSolarTimeMinutes] = useState<number>(720); // 12:00 PM = 720 minutes from midnight

  // Calculate hours & minutes from solarTimeMinutes
  const hours = Math.floor(solarTimeMinutes / 60);
  const minutes = solarTimeMinutes % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = hours % 12 === 0 ? 12 : hours % 12;
  const timeFormatted = `${displayHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${period}`;

  // Solar angle & Prahar calculations
  // Daylight assumes 6:00 AM (360 min) to 6:00 PM (1080 min)
  const isDaylight = solarTimeMinutes >= 360 && solarTimeMinutes <= 1080;
  const daylightProgress = Math.max(0, Math.min(1, (solarTimeMinutes - 360) / 720));
  // Shadow angle in degrees (from West at dawn to East at dusk)
  const shadowAngle = (daylightProgress - 0.5) * 160; // -80 to +80 deg
  const prahar = Math.floor((solarTimeMinutes / 1440) * 8) + 1; // 8 Prahars in 24 hours
  const ghati = Math.floor((solarTimeMinutes % 1440) / 24); // 60 Ghatis in 24 hours (1 Ghati = 24 mins)
  const pala = Math.floor(((solarTimeMinutes % 24) * 60) / 24); // 60 Palas per Ghati (1 Pala = 24 secs)

  // 2. Baudhayana Rectangle State
  const [rectWidth, setRectWidth] = useState<number>(4);
  const [rectHeight, setRectHeight] = useState<number>(3);
  const diagonal = Math.sqrt(rectWidth * rectWidth + rectHeight * rectHeight);
  const areaA = rectWidth * rectWidth;
  const areaB = rectHeight * rectHeight;
  const areaC = diagonal * diagonal;

  // 3. Panini Shiva Sutras Data & State
  const shivaSutras = [
    { num: 1, sutra: 'अ इ उ ण्', sound: ['अ', 'इ', 'उ'], marker: 'ण्' },
    { num: 2, sutra: 'ऋ ऌ क्', sound: ['ऋ', 'ऌ'], marker: 'क्' },
    { num: 3, sutra: 'ए ओ ङ्', sound: ['ए', 'ओ'], marker: 'ङ्' },
    { num: 4, sutra: 'ऐ औ च्', sound: ['ऐ', 'औ'], marker: 'च्' },
    { num: 5, sutra: 'ह य व र ट्', sound: ['ह', 'य', 'व', 'र'], marker: 'ट्' },
    { num: 6, sutra: 'लँ ण्', sound: ['ल'], marker: 'ण्' },
    { num: 7, sutra: 'ञ म ङ ण न म्', sound: ['ञ', 'म', 'ङ', 'ण', 'न'], marker: 'म्' },
    { num: 8, sutra: 'झ भ ञ्', sound: ['झ', 'भ'], marker: 'ञ्' },
    { num: 9, sutra: 'घ ढ ध ष्', sound: ['घ', 'ढ', 'ध'], marker: 'ष्' },
    { num: 10, sutra: 'ज ब ग ड द श्', sound: ['ज', 'ब', 'ग', 'ड', 'द'], marker: 'श्' },
    { num: 11, sutra: 'ख फ छ ठ थ च ट त व्', sound: ['ख', 'फ', 'छ', 'ठ', 'थ', 'च', 'ट', 'त'], marker: 'व्' },
    { num: 12, sutra: 'क प य्', sound: ['क', 'प'], marker: 'य्' },
    { num: 13, sutra: 'श ष स र्', sound: ['श', 'ष', 'स'], marker: 'र्' },
    { num: 14, sutra: 'ह ल्', sound: ['ह'], marker: 'ल्' },
  ];

  const [selectedPratyahara, setSelectedPratyahara] = useState<'अच्' | 'हल्' | 'यण्' | 'अल्'>('अच्');

  const pratyaharaDetails = {
    'अच्': {
      meaning: 'All Vowels (Svaras)',
      phonemes: 'अ, इ, उ, ऋ, ऌ, ए, ओ, ऐ, औ',
      formula: 'From "अ" in Sutra 1 to marker "च्" in Sutra 4',
      modernAnalogy: 'Vowel set definition in regex / tokenizer [aeiou...]',
    },
    'हल्': {
      meaning: 'All Consonants (Vyanjanas)',
      phonemes: 'ह, य, व, र, ल, ञ, म, ङ, ण, न, झ, भ, घ, ढ, ध, ज, ब, ग, ड, द, ख, फ, छ, ठ, थ, च, ट, त, क, प, श, ष, स, ह',
      formula: 'From "ह" in Sutra 5 to marker "ल्" in Sutra 14',
      modernAnalogy: 'Consonant class definition in formal language grammars',
    },
    'यण्': {
      meaning: 'Semivowels (Antastha)',
      phonemes: 'य, व, र, ल',
      formula: 'From "य" in Sutra 5 to marker "ण्" in Sutra 6',
      modernAnalogy: 'Phonetic sub-array transformation (e.g., i -> y before vowel)',
    },
    'अल्': {
      meaning: 'All Phonemes (Complete Alphabet)',
      phonemes: 'All 9 vowels + 33 consonants (42 sounds total)',
      formula: 'From "अ" in Sutra 1 to marker "ल्" in Sutra 14',
      modernAnalogy: 'Universal character set / wildcard token .*',
    },
  };

  // 4. Delhi Iron Pillar State
  const [pillarYears, setPillarYears] = useState<number>(1600);
  const passivationThicknessMicrons = Math.min(200, Math.round(15 + Math.sqrt(pillarYears) * 4.6));
  const rustProtectionPercent = Math.min(99.8, 85 + (pillarYears / 1600) * 14.8);

  return (
    <section id="simulations" className="py-16 bg-[#090d15] border-t border-b border-amber-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
            Empirical Laboratory
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mt-1">
            Interactive Ancient Science Simulators
          </h2>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Test the exact mathematical, astronomical, linguistic, and metallurgical principles engineered by ancient Indian masters through hands-on computational models.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex p-1 bg-slate-900 border border-slate-800 rounded-lg max-w-full overflow-x-auto">
            <button
              onClick={() => setActiveTab('sundial')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeTab === 'sundial'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              1. Konark Sun Sundial
            </button>
            <button
              onClick={() => setActiveTab('baudhayana')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeTab === 'baudhayana'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              2. Baudhayana's Theorem (800 BCE)
            </button>
            <button
              onClick={() => setActiveTab('panini')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeTab === 'panini'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              3. Panini Grammar Engine
            </button>
            <button
              onClick={() => setActiveTab('ironPillar')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap ${
                activeTab === 'ironPillar'
                  ? 'bg-amber-400 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              4. Delhi Iron Pillar Metallurgy
            </button>
          </div>
        </div>

        {/* Tab 1: Konark Sundial */}
        {activeTab === 'sundial' && (
          <div className="bg-slate-950 border border-amber-900/30 rounded-xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            {/* Visual Wheel Representation */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 flex items-center justify-center">
                {/* Stone Wheel Outer Rim */}
                <svg viewBox="0 0 400 400" className="w-full h-full select-none">
                  {/* Outer carved rim */}
                  <circle cx="200" cy="200" r="190" fill="#1e1813" stroke="#d97706" strokeWidth="4" />
                  <circle cx="200" cy="200" r="175" fill="#2d221a" stroke="#78350f" strokeWidth="3" />
                  
                  {/* Decorative beads along the rim (representing 60 sub-divisions) */}
                  {Array.from({ length: 60 }).map((_, i) => {
                    const angle = (i * 6 * Math.PI) / 180;
                    const x = 200 + 182 * Math.cos(angle);
                    const y = 200 + 182 * Math.sin(angle);
                    return (
                      <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r={i % 5 === 0 ? "3" : "1.5"}
                        fill={i % 5 === 0 ? "#fbbf24" : "#92400e"}
                      />
                    );
                  })}

                  {/* 8 Primary Major Spokes (Each marking 3 hours = 1 Prahar) */}
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const x2 = 200 + 175 * Math.cos(angle);
                    const y2 = 200 + 175 * Math.sin(angle);
                    return (
                      <line
                        key={`major-${i}`}
                        x1="200"
                        y1="200"
                        x2={x2}
                        y2={y2}
                        stroke="#f59e0b"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    );
                  })}

                  {/* 8 Secondary Minor Spokes */}
                  {Array.from({ length: 8 }).map((_, i) => {
                    const angle = ((i * 45 + 22.5) * Math.PI) / 180;
                    const x2 = 200 + 175 * Math.cos(angle);
                    const y2 = 200 + 175 * Math.sin(angle);
                    return (
                      <line
                        key={`minor-${i}`}
                        x1="200"
                        y1="200"
                        x2={x2}
                        y2={y2}
                        stroke="#b45309"
                        strokeWidth="2.5"
                        strokeDasharray="4,4"
                      />
                    );
                  })}

                  {/* Central Axle / Hub (Gnomon) */}
                  <circle cx="200" cy="200" r="32" fill="#78350f" stroke="#fbbf24" strokeWidth="3" />
                  <circle cx="200" cy="200" r="14" fill="#fbbf24" />

                  {/* Dynamic Shadow Cast by the Axle */}
                  {isDaylight ? (
                    <g transform={`rotate(${shadowAngle + 90}, 200, 200)`}>
                      {/* Shadow polygon widening outwards */}
                      <polygon
                        points="196,200 204,200 208,375 192,375"
                        fill="rgba(0, 0, 0, 0.75)"
                      />
                      <line
                        x1="200"
                        y1="200"
                        x2="200"
                        y2="375"
                        stroke="#ef4444"
                        strokeWidth="2"
                        strokeDasharray="3,3"
                      />
                    </g>
                  ) : (
                    <text
                      x="200"
                      y="150"
                      fill="#94a3b8"
                      fontSize="14"
                      fontFamily="serif"
                      textAnchor="middle"
                    >
                      Nighttime (No Solar Shadow)
                    </text>
                  )}
                </svg>

                {/* Sun position indicator */}
                {isDaylight && (
                  <div
                    className="absolute text-amber-400 font-bold transition-all duration-300"
                    style={{
                      left: `${50 - Math.sin((shadowAngle * Math.PI) / 180) * 44}%`,
                      top: `${20 - Math.cos((shadowAngle * Math.PI) / 180) * 15}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="flex flex-col items-center">
                      <Sun className="w-7 h-7 text-amber-300 animate-spin" style={{ animationDuration: '20s' }} />
                      <span className="text-[10px] text-amber-200 uppercase tracking-wider font-mono">Sun</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Slider to manipulate time */}
              <div className="w-full max-w-md mt-6">
                <div className="flex justify-between text-xs text-slate-300 mb-2">
                  <span>Dawn (6:00 AM)</span>
                  <span className="font-bold text-amber-400 font-mono text-sm">{timeFormatted}</span>
                  <span>Dusk (6:00 PM)</span>
                </div>
                <input
                  type="range"
                  min="360"
                  max="1080"
                  step="5"
                  value={solarTimeMinutes}
                  onChange={(e) => setSolarTimeMinutes(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                  <button onClick={() => setSolarTimeMinutes(360)} className="hover:text-amber-300">06:00 AM</button>
                  <button onClick={() => setSolarTimeMinutes(540)} className="hover:text-amber-300">09:00 AM</button>
                  <button onClick={() => setSolarTimeMinutes(720)} className="hover:text-amber-300">12:00 PM (Noon)</button>
                  <button onClick={() => setSolarTimeMinutes(900)} className="hover:text-amber-300">03:00 PM</button>
                  <button onClick={() => setSolarTimeMinutes(1080)} className="hover:text-amber-300">06:00 PM</button>
                </div>
              </div>
            </div>

            {/* Explanation & Units Column */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider font-mono text-amber-400">
                  Konark Sun Temple (13th Century CE, Odisha)
                </p>
                <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                  Astronomical Timekeeping with Stone Chariot Wheels
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  The Konark Sun Temple features 24 colossal chariot wheels carved into stone. Each wheel is an operational horizontal sundial. By observing where the shadow of the central axle falls across the 8 primary spokes and 30 rim beads, ancient astronomers measured time down to minutes and seconds.
                </p>
              </div>

              {/* Calculated Ancient Units Grid */}
              <div className="grid grid-cols-3 gap-3 p-4 bg-slate-900 border border-slate-800 rounded-lg">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Prahar (प्रहर)</div>
                  <div className="text-xl font-bold text-amber-400 font-serif mt-1">
                    {prahar} <span className="text-xs font-normal text-slate-400">/ 8</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">1 Prahar = 3 Hours</div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Ghati (घटी)</div>
                  <div className="text-xl font-bold text-amber-400 font-serif mt-1">
                    {ghati} <span className="text-xs font-normal text-slate-400">/ 60</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">1 Ghati = 24 Minutes</div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">Pala (पल)</div>
                  <div className="text-xl font-bold text-amber-400 font-serif mt-1">
                    {pala} <span className="text-xs font-normal text-slate-400">/ 60</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">1 Pala = 24 Seconds</div>
                </div>
              </div>

              {/* Scientific Mechanism Breakdown */}
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 bg-amber-950/20 border border-amber-900/30 rounded">
                  <span className="font-semibold text-amber-300">24 Wheels = 24 Fortnights:</span> The 24 wheels correspond to the 24 Pakshas (lunar fortnights) constituting the Hindu solar calendar year.
                </div>
                <div className="p-3 bg-amber-950/20 border border-amber-900/30 rounded">
                  <span className="font-semibold text-amber-300">Sub-Spoke Beading:</span> The space between two major spokes contains 30 carved beads. As the shadow travels 1 spoke in 180 minutes, each bead represents exactly 6 minutes of solar time.
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Baudhayana Theorem */}
        {activeTab === 'baudhayana' && (
          <div className="bg-slate-950 border border-amber-900/30 rounded-xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            {/* Visual Geometric Proof */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 bg-slate-900 border border-slate-800 rounded-lg p-4 flex items-center justify-center">
                <svg viewBox="0 0 300 300" className="w-full h-full">
                  {/* Origin shifted to bottom-left */}
                  {/* Triangle side A (horizontal) */}
                  <line
                    x1="40"
                    y1="240"
                    x2={40 + rectWidth * 25}
                    y2="240"
                    stroke="#38bdf8"
                    strokeWidth="3"
                  />
                  {/* Triangle side B (vertical) */}
                  <line
                    x1={40 + rectWidth * 25}
                    y1="240"
                    x2={40 + rectWidth * 25}
                    y2={240 - rectHeight * 25}
                    stroke="#f59e0b"
                    strokeWidth="3"
                  />
                  {/* Hypotenuse Diagonal C (Rope / Rajju) */}
                  <line
                    x1="40"
                    y1="240"
                    x2={40 + rectWidth * 25}
                    y2={240 - rectHeight * 25}
                    stroke="#22c55e"
                    strokeWidth="4"
                    strokeDasharray="6,3"
                  />

                  {/* Filled right-angle rectangle */}
                  <rect
                    x="40"
                    y={240 - rectHeight * 25}
                    width={rectWidth * 25}
                    height={rectHeight * 25}
                    fill="rgba(245, 158, 11, 0.15)"
                    stroke="#f59e0b"
                    strokeWidth="1.5"
                  />

                  {/* Dimension labels */}
                  <text
                    x={40 + (rectWidth * 25) / 2}
                    y="258"
                    fill="#38bdf8"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    Width a = {rectWidth}
                  </text>
                  <text
                    x={55 + rectWidth * 25}
                    y={240 - (rectHeight * 25) / 2}
                    fill="#f59e0b"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    Height b = {rectHeight}
                  </text>
                  <text
                    x={20 + (rectWidth * 25) / 2}
                    y={230 - (rectHeight * 25) / 2}
                    fill="#22c55e"
                    fontSize="12"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    Diagonal c = {diagonal.toFixed(2)}
                  </text>
                </svg>
              </div>

              {/* Sliders for Width and Height */}
              <div className="w-full max-w-md mt-6 space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Width a (Pārśvamānī)</span>
                    <span className="font-bold text-sky-400 font-mono">{rectWidth} units</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="8"
                    value={rectWidth}
                    onChange={(e) => setRectWidth(parseInt(e.target.value))}
                    className="w-full accent-sky-400 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Height b (Tiryaṅmānī)</span>
                    <span className="font-bold text-amber-400 font-mono">{rectHeight} units</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="6"
                    value={rectHeight}
                    onChange={(e) => setRectHeight(parseInt(e.target.value))}
                    className="w-full accent-amber-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Baudhayana Manuscript & Proof text */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-mono text-amber-400">
                  Baudhayana Sulba Sutra 1.48 (c. 800 BCE)
                </p>
                <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                  The Diagonal Cord Theorem (Pre-Pythagorean)
                </h3>
              </div>

              {/* Sanskrit Shloka Box */}
              <div className="p-4 bg-amber-950/30 border border-amber-700/40 rounded-lg">
                <p className="font-serif text-sm text-amber-200 italic leading-relaxed">
                  "दीर्घचतुरश्रस्याक्ष्णया रज्जुः पार्श्वमानी तिर्यङ्मानी च यत्पृथग्भूते कुरुतस्तदुभयं करोति ॥"
                </p>
                <p className="text-xs text-slate-300 mt-2 font-sans">
                  <strong className="text-amber-400">Translation:</strong> "The cord stretched along the diagonal of a rectangle produces an area equal to the sum of the areas produced separately by its length and its breadth."
                </p>
              </div>

              {/* Real-time Math Proof */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Area of Width Square (a²):</span>
                  <span className="font-mono text-sky-400 font-bold">{rectWidth}² = {areaA}</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Area of Height Square (b²):</span>
                  <span className="font-mono text-amber-400 font-bold">{rectHeight}² = {areaB}</span>
                </div>
                <div className="border-t border-slate-800 pt-2 flex justify-between text-xs text-emerald-400 font-semibold">
                  <span>Diagonal Square (c² = a² + b²):</span>
                  <span className="font-mono">{areaA} + {areaB} = {areaC} (Diagonal = {diagonal.toFixed(2)})</span>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                <strong className="text-slate-200">Historical Significance:</strong> Baudhayana formulated this rule for the exact geometric construction of sacred Vedic fire altars (Vedi and Chiti, such as the falcon-shaped <em>Shyena-chiti</em>) requiring identical surface areas while transforming rectangles into equivalent squares.
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: Panini Generative Grammar */}
        {activeTab === 'panini' && (
          <div className="bg-slate-950 border border-amber-900/30 rounded-xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            {/* The 14 Shiva Sutras Matrix */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs uppercase tracking-wider font-mono text-amber-400">
                  Māheśvara Sūtrāṇi (The 14 Phonetic Formulas)
                </p>
                <span className="text-xs text-slate-400">Ashtadhyayi Foundation</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
                {shivaSutras.map((s) => (
                  <div
                    key={s.num}
                    className="p-2.5 bg-slate-900 border border-slate-800 rounded hover:border-amber-400/50 transition-colors"
                  >
                    <span className="text-[10px] text-amber-400 font-bold mr-1.5">{s.num}.</span>
                    <span className="text-slate-100 font-serif text-sm">{s.sutra}</span>
                  </div>
                ))}
              </div>

              {/* Selector Buttons for Pratyaharas */}
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="text-xs text-slate-400 self-center mr-2">Sample Pratyāhāra:</span>
                {(['अच्', 'हल्', 'यण्', 'अल्'] as const).map((prat) => (
                  <button
                    key={prat}
                    onClick={() => setSelectedPratyahara(prat)}
                    className={`px-3 py-1 text-xs font-bold rounded transition-all ${
                      selectedPratyahara === prat
                        ? 'bg-amber-400 text-slate-950 shadow-sm'
                        : 'bg-slate-850 text-slate-300 hover:bg-slate-800 border border-slate-700'
                    }`}
                  >
                    {prat}
                  </button>
                ))}
              </div>
            </div>

            {/* Pratyahara Explanation */}
            <div className="lg:col-span-5 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-mono text-amber-400">
                  Algorithmic Token Generation
                </p>
                <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                  Pratyāhāra: {selectedPratyahara}
                </h3>
              </div>

              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-3">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Semantic Meaning:</span>
                  <p className="text-sm font-semibold text-amber-300 mt-0.5">
                    {pratyaharaDetails[selectedPratyahara].meaning}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Expanded Sound Array:</span>
                  <p className="text-xs font-mono text-slate-200 mt-1 leading-relaxed bg-black/40 p-2 rounded border border-slate-800">
                    {pratyaharaDetails[selectedPratyahara].phonemes}
                  </p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider">Derivation Rule (Sutra 1.1.71):</span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {pratyaharaDetails[selectedPratyahara].formula}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs text-emerald-400 uppercase tracking-wider font-semibold">Computer Science Equivalence:</span>
                  <p className="text-xs text-slate-300 mt-0.5">
                    {pratyaharaDetails[selectedPratyahara].modernAnalogy}
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Panini used auxiliary marker tokens (<em>it-samjna</em>) to form compressed ranges containing all intervening elements without repeating them—the exact principle formalized 2,500 years later as Backus-Naur Form (BNF) in computer compilers.
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Delhi Iron Pillar Metallurgy */}
        {activeTab === 'ironPillar' && (
          <div className="bg-slate-950 border border-amber-900/30 rounded-xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
            {/* Visual Diagram */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div className="relative w-72 h-80 bg-slate-900 border border-slate-800 rounded-lg p-4 flex flex-col items-center justify-between">
                
                {/* Visual Pillar Rendering */}
                <div className="relative w-24 h-56 flex flex-col items-center">
                  {/* Fluted Capital & Ashoka Bell */}
                  <div className="w-16 h-7 bg-amber-700/80 rounded-t border-t-2 border-amber-400" />
                  <div className="w-12 h-3 bg-amber-800" />
                  {/* Pillar Shaft with dynamic patina color */}
                  <div
                    className="w-10 h-44 border-x border-slate-700 transition-colors duration-500 rounded-b shadow-inner flex flex-col justify-end p-1 text-[9px] text-center font-mono font-bold"
                    style={{
                      backgroundColor:
                        pillarYears < 200
                          ? '#713f12'
                          : pillarYears < 800
                          ? '#451a03'
                          : '#1c1917',
                      color: pillarYears > 1000 ? '#f59e0b' : '#fdba74',
                    }}
                  >
                    <span>{pillarYears} CE</span>
                  </div>
                </div>

                {/* Microscopic Protective Layer Cutout */}
                <div className="w-full bg-slate-950 p-2.5 rounded border border-amber-500/30 text-xs">
                  <div className="flex justify-between text-slate-300 text-[11px] mb-1">
                    <span>Misawite Film Thickness:</span>
                    <span className="font-mono text-amber-400 font-bold">{passivationThicknessMicrons} µm</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-amber-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${(passivationThicknessMicrons / 200) * 100}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Corrosion Barrier:</span>
                    <span className="text-emerald-400 font-bold">{rustProtectionPercent.toFixed(1)}% Active</span>
                  </div>
                </div>
              </div>

              {/* Slider for Years */}
              <div className="w-full max-w-md mt-6">
                <div className="flex justify-between text-xs text-slate-300 mb-1">
                  <span>Year Erected (c. 400 CE)</span>
                  <span className="font-bold text-amber-400 font-mono">{pillarYears} Years of Weathering</span>
                  <span>Modern Day</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1625"
                  step="25"
                  value={pillarYears}
                  onChange={(e) => setPillarYears(parseInt(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Metallurgical Science Column */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <p className="text-xs uppercase tracking-wider font-mono text-amber-400">
                  Dhatuvidya: 4th Century CE, Chandragupta II
                </p>
                <h3 className="font-serif text-2xl font-bold text-white mt-0.5">
                  The Rustless Iron Pillar of Delhi
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Standing 7.2 meters tall and weighing over 6,000 kg, the Iron Pillar of Delhi has stood outdoors in monsoon rains and extreme temperature shifts for over 1,600 years without rusting.
              </p>

              {/* Discovery by IIT Kanpur */}
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg space-y-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400">
                  Archaeometallurgical Discovery (IIT Kanpur):
                </h4>
                <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                  <li>
                    <strong className="text-slate-100">High Phosphorus Content (0.11%):</strong> Ancient Indian bloomery furnaces used wood charcoal without limestone, retaining phosphorus in the iron.
                  </li>
                  <li>
                    <strong className="text-slate-100">Protective Misawite Film:</strong> Phosphorus catalysts react with moisture to form a passive crystalline film of <em>iron hydrogen phosphate hydrate (FePO₄·H₂O)</em> that self-heals if scratched.
                  </li>
                  <li>
                    <strong className="text-slate-100">Zero Slag Trapping:</strong> Forge-welding by hammer compaction extruded residual porosity, creating an impervious surface.
                  </li>
                </ul>
              </div>

              <p className="text-xs text-slate-400">
                This ancient nanocoating technology is studied today by the Bhabha Atomic Research Centre (BARC) for creating corrosion-resistant containers for nuclear waste disposal.
              </p>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
