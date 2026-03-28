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
    title: 'Dayenu',
    youtubeId: 'sLG1bYtCFgk',
    description: 'The classic Passover song of gratitude — "It would have been enough!"',
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
