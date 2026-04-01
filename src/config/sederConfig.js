// Seder configuration — edit content here without touching components

export const PARTICIPANT_ICONS = [
  { id: 'matzah', label: 'Matzah', src: '/icons/matzah.png' },
  { id: 'cup', label: 'Kiddush Cup', src: '/icons/wine-glasses.png' },
  { id: 'lamb', label: 'Shank Bone', src: '/icons/zeroa.png' },
  { id: 'herbs', label: 'Freedom', src: '/icons/freedom.png' },
  { id: 'scroll', label: 'Torah', src: '/icons/torah.png' },
  { id: 'moses', label: 'Moses', src: '/icons/moses_10292688.png' },
  { id: 'sheep', label: 'Lamb', src: '/icons/lamb.png' },
  { id: 'frog', label: 'Frog', src: '/icons/frog_6256351.png' },
  { id: 'locust', label: 'Locust', src: '/icons/locust.png' },
  { id: 'pharaoh', label: 'Pharaoh', src: '/icons/pharaoh_5156289.png' },
];

export const SEDER_STEPS = [
  {
    id: 'kadesh',
    number: 1,
    name: 'Kadesh',
    filename: '01_Kadesh',
    description: 'Recite Kiddush & drink the first cup of wine',
    icon: '🍷',
    readers: ['matzah', 'cup'], // icon IDs that read in this section
  },
  {
    id: 'urchatz',
    number: 2,
    name: 'Urchatz',
    filename: '02_Urchatz',
    description: 'Wash hands (no blessing)',
    icon: '💦',
    readers: [],
  },
  {
    id: 'karpas',
    number: 3,
    name: 'Karpas',
    filename: '03_Karpas',
    description: 'Dip greens in salt water',
    icon: '🌿',
    readers: ['herbs'],
  },
  {
    id: 'yachatz',
    number: 4,
    name: 'Yachatz',
    filename: '04_Yachatz',
    description: 'Break the middle matzah',
    icon: '🫓',
    readers: ['matzah'],
  },
  {
    id: 'maggid',
    number: 5,
    name: 'Maggid',
    filename: '05_Maggid',
    description: 'Tell the story of the Exodus',
    icon: '📖',
    readers: ['scroll', 'lamb', 'cup', 'matzah', 'herbs', 'moses'],
  },
  {
    id: 'rachtzah',
    number: 6,
    name: 'Rachtzah',
    filename: '06_Rachtzah',
    description: 'Wash hands with blessing',
    icon: '🧼',
    readers: ['moses'],
  },
  {
    id: 'motzi-matzah',
    number: 7,
    name: 'Motzi-Matzah',
    filename: '07_MotziMatzah',
    description: 'Say blessings and eat matzah',
    icon: '🫓',
    readers: ['matzah', 'cup'],
  },
  {
    id: 'maror',
    number: 8,
    name: 'Maror',
    filename: '08_Maror',
    description: 'Eat bitter herbs',
    icon: '😤',
    readers: ['herbs', 'scroll'],
  },
  {
    id: 'korech',
    number: 9,
    name: 'Korech',
    filename: '09_Korech',
    description: "The Hillel sandwich",
    icon: '🥪',
    readers: ['lamb'],
  },
  {
    id: 'shulchan-orech',
    number: 10,
    name: 'Shulchan Orech',
    filename: '10_ShulchanOrech',
    description: 'Dinner! 🎉',
    icon: '🍽️',
    readers: [],
  },
  {
    id: 'tzafun',
    number: 11,
    name: 'Tzafun',
    filename: '11_Tzafun',
    description: 'Find and eat the afikomen',
    icon: '🔍',
    readers: ['moses', 'matzah'],
  },
  {
    id: 'barech',
    number: 12,
    name: 'Barech',
    filename: '12_Barech',
    description: 'Grace after meals & third cup',
    icon: '🙏',
    readers: ['scroll', 'cup'],
  },
  {
    id: 'hallel',
    number: 13,
    name: 'Hallel',
    filename: '13_Hallel',
    description: 'Songs of praise',
    icon: '🎵',
    readers: ['herbs', 'lamb', 'moses'],
  },
  {
    id: 'nirtzah',
    number: 14,
    name: 'Nirtzah',
    filename: '14_Nirtzah',
    description: 'Conclusion — L\'Shana Haba\'ah!',
    icon: '✨',
    readers: ['scroll', 'cup', 'matzah', 'herbs', 'moses', 'lamb'],
  },
];

export const SPECIAL_MODULES = [
  {
    id: 'registration',
    name: 'Registration.exe',
    description: 'Sign in and choose your Passover avatar',
    icon: '👥',
    windowSize: { width: 500, height: 520 },
  },
  {
    id: 'wine-counter',
    name: 'WineCounter.exe',
    description: 'Track the four cups of wine',
    icon: '🍷',
    windowSize: { width: 520, height: 380 },
  },
  {
    id: 'seder-plate',
    name: 'SederPlate.exe',
    description: 'Explore the seder plate',
    icon: '🍽️',
    windowSize: { width: 620, height: 500 },
  },
  {
    id: 'games',
    name: 'Games.exe',
    description: 'Passover trivia & games',
    icon: '🎲',
    windowSize: { width: 560, height: 580 },
  },
];

export const SEDER_PLATE_ITEMS = [
  {
    id: 'maror',
    name: 'Maror',
    label: 'Bitter Herbs',
    emoji: '🌿',
    position: { top: '8%', left: '50%', transform: 'translateX(-50%)' },
    description:
      'Maror (usually horseradish or romaine) represents the bitterness of slavery in Egypt. We eat it to taste what our ancestors suffered.',
  },
  {
    id: 'charoset',
    name: 'Charoset',
    label: 'Sweet Paste',
    emoji: '🍎',
    position: { top: '28%', right: '8%' },
    description:
      'Charoset is a sweet mixture of apples, nuts, wine, and spices. Its texture symbolizes the mortar the enslaved Israelites used to build Pharaoh\'s cities.',
  },
  {
    id: 'karpas',
    name: 'Karpas',
    label: 'Greens',
    emoji: '🥬',
    position: { bottom: '28%', right: '8%' },
    description:
      'Karpas (parsley or celery) is dipped in salt water. The green represents springtime and new life; the salt water represents the tears of slavery.',
  },
  {
    id: 'zeroah',
    name: 'Zeroah',
    label: 'Shank Bone',
    emoji: '🦴',
    position: { bottom: '8%', left: '50%', transform: 'translateX(-50%)' },
    description:
      'The zeroah (shank bone or roasted chicken wing) represents the Paschal lamb sacrificed on the eve of the Exodus. It symbolizes God\'s outstretched arm.',
  },
  {
    id: 'beitzah',
    name: 'Beitzah',
    label: 'Roasted Egg',
    emoji: '🥚',
    position: { bottom: '28%', left: '8%' },
    description:
      'The roasted egg represents the festival sacrifice brought to the Temple in Jerusalem. It also symbolizes mourning for the destruction of the Temple, and the cycle of life.',
  },
  {
    id: 'chazeret',
    name: 'Chazeret',
    label: 'Romaine Lettuce',
    emoji: '🥗',
    position: { top: '28%', left: '8%' },
    description:
      'Chazeret is a second bitter herb (usually romaine lettuce). Like maror, it represents the bitterness of slavery. It is used in the Korech (Hillel) sandwich.',
  },
];

export const WINE_OCCASIONS = [
  'The Cup of Sanctification — Kadesh',
  'The Cup of Deliverance — Maggid',
  'The Cup of Redemption — Barech',
  'The Cup of Praise — Hallel',
];

export const HALLEL_SONGS = [
  {
    title: "Blowin' in the Wind — Bob Dylan",
    youtubeId: 'cQBVgtcR2rM',
    description: 'A protest anthem that asks the timeless questions of freedom and justice — sing the chorus together.',
  },
  {
    title: 'Mah Nishtanah — The Four Questions',
    youtubeId: 'xsWh4YaD3HE',
    description: 'The Four Questions sung in Hebrew — great for kids to join in.',
  },
  {
    title: 'Chad Gadya',
    youtubeId: 'UXCdAfOmMT4',
    description: 'A cumulative Aramaic song about a little goat — sung at the end of the seder',
  },
  {
    title: 'Echad Mi Yodea',
    youtubeId: 'LfFhXHBCaWo',
    description: 'Who Knows One? A counting song with Jewish themes',
  },
];

// Curated multimedia resources per seder section
export const SEDER_MEDIA = {
  kadesh: [
    { badge: 'Video', title: 'Opening Seder Clip', description: 'Begin the evening with this clip before the first section.', youtubeId: 'qKqIvv4DfIc' },
    { badge: 'Video', title: 'Global Refugee Trends (2:18)', description: 'Refugee and climate-displacement primer that frames the opening question about forced movement and safe belonging.', href: 'https://www.pbs.org/video/world-refugee-day-2024-solutions-largest-displacement-crisis-record' },
    { badge: 'Image', title: 'Refugees on a Boat — Wikimedia', description: 'Historical rescue image: migration has always mixed danger, policy, and survival.', href: 'https://commons.wikimedia.org/wiki/File%3ARefugees_on_a_boat.jpg' },
    { badge: 'Image', title: 'UNHCR Refugees & Migrants Video Portal', description: 'UN media index for refugee and migration stories.', href: 'https://refugeesmigrants.un.org/videos' },
  ],
  urchatz: [
    { badge: 'Video', title: 'WHO — Vaccine Equity (2:30)', description: 'WHO discussion on vaccine equity — useful for the public-health thread about unequal care.', href: 'https://www.pbs.org/video/urgent-plea-vaccine-equity-xtpirz/' },
    { badge: 'Image', title: 'UNICEF WASH Overview', description: 'UNICEF clean-water and hygiene overview for discussion and visual cue cards.', href: 'https://www.unicef.org/water-sanitation-and-hygiene-wash' },
  ],
  karpas: [
    { badge: 'Video', title: 'Global Refugee Trends (2:18)', description: 'Current-event reflection on climate, displacement, and life after crisis.', href: 'https://www.pbs.org/video/world-refugee-day-2024-solutions-largest-displacement-crisis-record' },
    { badge: 'Image', title: 'UNHCR: No Escape — Climate, Conflict & Displacement', description: 'Report connecting climate change, conflict, and forced displacement.', href: 'https://www.unhcr.org/publications/no-escape-frontlines-climate-change-conflict-and-forced-displacement' },
    { badge: 'Music', title: 'Hava Nagila — Traditional Klezmer', description: 'Traditional melody to keep the room in a celebratory, forward-moving rhythm.', youtubeId: 'jYCYa_eLhh0' },
  ],
  yachatz: [
    { badge: 'Video', title: 'FRONTLINE: Separated — Children at the Border', description: 'Family-separation framing for the hidden-piece concept.', href: 'https://www.pbs.org/video/separated-children-border-preview-qxotij/' },
    { badge: 'Image', title: 'Refugee Children — Image Archive', description: 'Photo page for grounding the grief in this section.', href: 'https://commons.wikimedia.org/wiki/File%3ARefugee_kids.jpg' },
    { badge: 'Music', title: 'Mah Nishtanah in Hebrew (2:45)', description: 'Optional song cue before the matzah break ritual.', youtubeId: 'xsWh4YaD3HE' },
  ],
  maggid: [
    { badge: 'Video', title: 'PBS — Iran Protests: Regime Crackdown', description: 'Modern speech-restriction narrative — who is allowed to speak?', href: 'https://www.pbs.org/video/inside-the-iranian-uprising-preview/' },
    { badge: 'Image', title: 'Amnesty: Iran Internet Shutdown Report', description: 'Rights report context for repression and naming who is silenced.', href: 'https://www.amnesty.org/en/latest/news/2026/01/internet-shutdown-in-iran-hides-violations-in-escalating-protests/' },
    { badge: 'Video', title: 'Dave Chappelle: Displaced People', description: 'Chappelle on displacement and powerlessness.', youtubeId: 'KhCbR_LpQjI' },
    { badge: 'Video', title: 'Dave Chappelle: Analogy of a Black Slave Owner to Israel', description: "Chappelle's perspective on oppression cycles and the Israel-Palestine dynamic.", youtubeId: '3P6692Bdy7U' },
    { badge: 'Video', title: 'Cancel Culture & Antisemitism', description: 'Exploring antisemitism and cancel culture in contemporary discourse.', youtubeId: 'R90_EeRP2wc' },
    { badge: 'Video', title: 'Growing Up With Israeli Parents', description: 'A personal perspective on Israeli-American identity.', youtubeId: 'Evx3KjaScPA' },
    { badge: 'Music', title: 'Maccabeats — Dayenu', description: 'A lively, family-friendly version of Dayenu.', href: 'https://maccabeats.bandcamp.com/track/dayenu' },
  ],
  rachtzah: [
    { badge: 'Video', title: 'UNICEF WASH in Life', description: 'Short sanitation and public-health messaging supporting the inequity reading.', href: 'https://www.unicefusa.org/videos/unicef-wont-stop-providing-safe-water-and-hygiene-1' },
    { badge: 'Image', title: 'UNICEF WASH Visual Hub', description: 'Infographic and image hub on water, sanitation, and child health.', href: 'https://www.unicef.org/wash' },
    { badge: 'Video', title: 'Hatzalah — The Jewish Emergency Volunteers', description: 'Story of the volunteer Jewish emergency response network.', youtubeId: 'zxpdMhA7ufE' },
  ],
  'motzi-matzah': [
    { badge: 'Video', title: 'What is Voter Suppression? (2:52)', description: 'Timeline on modern barriers to equal civic voice.', href: 'https://www.pbs.org/video/what-is-voter-suppression-ahfvlx/' },
    { badge: 'Document', title: 'Brennan Center: State Voting Laws Roundup', description: 'Detailed state-by-state survey of laws affecting voting access and enforcement.', href: 'https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review' },
    { badge: 'Document', title: 'Brennan Center: Redistricting Litigation Roundup', description: 'Federal and state map challenges on minority dilution and partisan advantage.', href: 'https://www.brennancenter.org/our-work/research-reports/redistricting-litigation-roundup-0' },
    { badge: 'Brief', title: 'ACLU Voting Rights Hub', description: 'State-and-campaign updates on voting rights policy and litigation.', href: 'https://www.aclu.org/issues/voting-rights' },
  ],
  maror: [
    { badge: 'Video', title: 'Stop the Violence March (2:15)', description: 'Short clip followed by data on police violence in American cities.', href: 'https://www.pbs.org/video/protesters-look-to-march-again-as-chicago-police-hold-them-back-zdin1k/' },
    { badge: 'Image', title: 'Mapping Police Violence', description: 'Data and city-level tools tracking police violence across the US.', href: 'https://mappingpoliceviolence.squarespace.com/' },
    { badge: 'Image', title: 'Historic Protest Imagery — Wikimedia', description: 'Visual reminder that policy pain has always been visible in public protest.', href: 'https://commons.wikimedia.org/wiki/File%3A2014-02-02_Patumwan_intersection_protest_site_fake_polling_station_01.jpg' },
  ],
  korech: [
    { badge: 'Video', title: 'UNHCR Refugees & Migrants Playlist', description: 'Short clips on policy contradictions across borders.', href: 'https://refugeesmigrants.un.org/videos' },
    { badge: 'Image', title: 'UNHCR: People-Focused Stories', description: 'Story landing page for quick fact-check context on displacement.', href: 'https://www.unhcr.org/refugees-and-migrants/' },
    { badge: 'Video', title: 'Dave Chappelle Questions Jimmy Carter', description: 'Chappelle on questions of power and accountability.', youtubeId: 'd_sUyGXTlJc' },
  ],
  'shulchan-orech': [
    { badge: 'Video', title: 'Rice and Beans — Dinner Clip', description: 'A fun opening clip for the meal.', youtubeId: '5A_9XD9uuC8' },
    { badge: 'Video', title: 'Sebastian Maniscalco — Comedy', description: 'Some laughs to enjoy with dinner.', youtubeId: 'bbGSI0Ahtac' },
    { badge: 'Image', title: 'World Central Kitchen — We Feed People', description: 'Food justice reflection for the meal table.', href: 'https://wck.org/wefeedpeople/' },
    { badge: 'Image', title: 'WFP: Escalating Hunger Crisis', description: 'UN media page on feeding gaps in conflict and crisis zones.', href: 'https://www.wfp.org/videos/wfp-news-video-new-report-warns-escalating-hunger-due-conflict-displacement-and-humanitarian-funding-shortfalls' },
  ],
  tzafun: [
    { badge: 'Video', title: 'PBS / FRONTLINE: Separated', description: 'FRONTLINE preview on family separation at the border.', href: 'https://www.pbs.org/video/separated-children-border-preview-qxotij/' },
    { badge: 'Image', title: 'UNHCR Media Stories', description: 'Media and stills for hidden families and legal invisibility themes.', href: 'https://www.unhcr.org/media/' },
    { badge: 'Music', title: 'Maccabeats — Dayenu', description: 'Optional musical bridge after the afikomen reveal.', href: 'https://maccabeats.bandcamp.com/track/dayenu' },
  ],
  barech: [
    { badge: 'Video', title: 'UNHCR Climate Displacement Explainer (2:18)', description: 'Translate gratitude into climate justice action.', href: 'https://www.pbs.org/video/world-refugee-day-2024-solutions-largest-displacement-crisis-record' },
    { badge: 'Image', title: 'UNHCR No Escape: Climate, Conflict & Displacement', description: 'Policy context for climate-linked displacement and adaptation.', href: 'https://www.unhcr.org/media/no-escape-frontlines-climate-change-conflict-and-forced-displacement' },
    { badge: 'Image', title: 'Harvard: State of the Nation\'s Housing 2025', description: 'Housing stress and affordability visuals for economic dignity conversation.', href: 'https://www.jchs.harvard.edu/state-nations-housing-2025' },
  ],
  hallel: [
    { badge: 'Video', title: 'Aish Music Video: Ma Nishtana', description: 'Modern family-facing song and lyric video for intergenerational participation.', href: 'https://aish.com/ma-nishtana-passover-music-video/' },
  ],
  nirtzah: [
    { badge: 'Video', title: 'FRONTLINE: Voter Suppression Short History', description: 'Closing civic segment anchor with voting-rights follow-up questions.', href: 'https://www.pbs.org/video/what-is-voter-suppression-ahfvlx/' },
    { badge: 'Image', title: 'Brennan Center 2026 Policy Update', description: 'Actionable data snapshot for your final movement plan.', href: 'https://www.brennancenter.org/our-work/research-reports/state-voting-laws-roundup-2025-review' },
    { badge: 'Image', title: 'Historic Polling Station — Wikimedia', description: 'Historical image bridging present civic obligations and memory.', href: 'https://commons.wikimedia.org/wiki/File%3APOLLING_STATION.jpg' },
  ],
};
