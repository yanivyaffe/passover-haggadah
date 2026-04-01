import { useState, useMemo } from 'react';
import { useSedar } from '../context/SedarContext';
import { PARTICIPANT_ICONS } from '../config/sederConfig';

const QUESTIONS = [
  {
    q: 'How many plagues did God bring upon Egypt?',
    options: ['7', '10', '12', '40'],
    answer: 1,
    fact: 'The Ten Plagues: blood, frogs, lice, flies, livestock disease, boils, hail, locusts, darkness, and death of the firstborn.',
  },
  {
    q: 'What is the Hebrew word for the hidden piece of matzah that children search for at the end of the seder?',
    options: ['Charoset', 'Karpas', 'Afikomen', 'Korech'],
    answer: 2,
    fact: 'Afikomen comes from the Greek word for "dessert." The seder cannot end until it is found and eaten!',
  },
  {
    q: 'How many years were the Israelites enslaved in Egypt according to tradition?',
    options: ['40 years', '100 years', '210 years', '400 years'],
    answer: 2,
    fact: 'The Torah says 430 years, but rabbinic tradition often cites 210 years as the actual time of slavery (not including earlier sojourning).',
  },
  {
    q: 'What does "Dayenu" mean?',
    options: ['Thank you', 'It would have been enough', 'Let my people go', 'Next year in Jerusalem'],
    answer: 1,
    fact: 'Dayenu lists 15 gifts God gave the Jewish people, saying after each: had God done only this, it would have been enough!',
  },
  {
    q: "What does Moses say to Pharaoh on God's behalf?",
    options: ['Let my people go', 'Bring me water', 'Build me a pyramid', 'Open the sea'],
    answer: 0,
    fact: '"Let my people go" (שַׁלַּח אֶת-עַמִּי) is the central demand repeated throughout the Book of Exodus.',
  },
  {
    q: 'The seder plate has 6 items. Which of these is NOT one of them?',
    options: ['Charoset', 'Matzah', 'Zeroah (shank bone)', 'Beitzah (egg)'],
    answer: 1,
    fact: 'Matzah is on the table but not on the seder plate itself! The six plate items are: maror, charoset, karpas, zeroah, beitzah, and chazeret.',
  },
  {
    q: 'What does "Pesach" (Passover) refer to?',
    options: [
      "God's angel passing over the Israelites' homes",
      'The crossing of the Red Sea',
      'Moses passing through the desert',
      "Pharaoh passing laws against the Israelites",
    ],
    answer: 0,
    fact: 'The word Pesach means "to pass over" — referring to God passing over the homes of the Israelites (marked with lamb\'s blood) when smiting the firstborn of Egypt.',
  },
  {
    q: 'What is chametz?',
    options: ['Leavened grain products', 'Bitter herbs', 'The seder plate', 'Salt water'],
    answer: 0,
    fact: 'Chametz refers to any food made from the five grains (wheat, barley, oats, spelt, rye) that has risen. It is forbidden on Passover — we remove it completely from our homes.',
  },
  {
    q: 'Who is Elijah (Eliyahu) in relation to the Passover seder?',
    options: [
      'The prophet whose cup is filled and door opened at the seder',
      "Moses's brother",
      "The Pharaoh's advisor",
      'The writer of the Haggadah',
    ],
    answer: 0,
    fact: 'A cup of wine is poured for Elijah the Prophet and the front door is opened to welcome him. He is said to visit every seder, heralding the coming of the Messiah.',
  },
  {
    q: 'Which of these is NOT one of the "Four Children" described in the Haggadah?',
    options: ['The Wise Child', 'The Wicked Child', 'The Grateful Child', 'The Simple Child'],
    answer: 2,
    fact: 'The Four Children are the Wise, Wicked, Simple, and the one who does not know how to ask. Each represents a different way of relating to the Passover story.',
  },
  {
    q: "What is the name of Moses's sister?",
    options: ['Rachel', 'Miriam', 'Deborah', 'Esther'],
    answer: 1,
    fact: 'Miriam watched over baby Moses in the Nile and led the women in song and dance after crossing the sea. Many modern seders include a cup of water in her honor.',
  },
  {
    q: 'What does "Haggadah" mean in Hebrew?',
    options: ['Freedom', 'Prayer', 'Telling', 'Exodus'],
    answer: 2,
    fact: 'Haggadah means "telling" in Hebrew. It comes from the commandment to tell your children the story of the Exodus — "V\'higadeta l\'vincha."',
  },
  {
    q: 'What grain is matzah made from?',
    options: ['Corn', 'Rice', 'Wheat', 'Barley'],
    answer: 2,
    fact: 'Matzah is made from wheat flour and water, baked within 18 minutes so it cannot rise. The 18-minute limit is taken very seriously — it corresponds to the word "chai" (life).',
  },
  {
    q: 'What is the "Korech" sandwich made of?',
    options: ['Charoset and maror between matzah', 'Egg and onion', 'Lamb and herbs', 'Chicken and matzah'],
    answer: 0,
    fact: 'The Korech (Hillel) sandwich combines bitter herbs and charoset between two pieces of matzah, recreating how the Talmudic sage Hillel ate them together at the Temple.',
  },
  {
    q: 'What does "Tzafun" mean?',
    options: ['Hidden', 'Blessed', 'Remembered', 'Praised'],
    answer: 0,
    fact: 'Tzafun means "hidden" — it\'s the step where the afikomen is retrieved and eaten as the last food of the night. The seder cannot conclude without it.',
  },
  {
    q: 'In the song "Chad Gadya," what does "Chad Gadya" mean?',
    options: ['One little goat', 'Ten plagues', 'Let my people go', 'Four cups'],
    answer: 0,
    fact: '"Chad Gadya" is Aramaic for "One Little Goat." The cumulative chain — cat eats goat, dog bites cat, etc. — ends with God restoring order, symbolizing divine justice in history.',
  },
  {
    q: "What does Moses's name mean?",
    options: ['Drawn from the water', 'Leader of the people', 'Servant of God', 'Voice in the wilderness'],
    answer: 0,
    fact: '"Moshe" means "drawn from the water," reflecting how Pharaoh\'s daughter found him floating in the Nile. Ironically, Pharaoh\'s own household saved the child he had decreed must die.',
  },
  {
    q: 'Which body of water did the Israelites cross when fleeing Egypt?',
    options: ['The Mediterranean Sea', 'The Yam Suph (Sea of Reeds)', 'The Dead Sea', 'The Nile River'],
    answer: 1,
    fact: 'The Hebrew "Yam Suph" is often translated "Red Sea" but may mean "Sea of Reeds." The Midrash says Nachshon ben Amminadab bravely walked in first — and only then did the waters part.',
  },
  {
    q: 'What is the traditional Passover greeting?',
    options: ['Shabbat Shalom', 'Mazel Tov', 'Chag Sameach', 'L\'Shanah Tovah'],
    answer: 2,
    fact: '"Chag Sameach" means "Happy Holiday." For Passover you might also hear "Chag Kasher v\'Sameach" — a Kosher and Happy Passover.',
  },
  {
    q: 'What are the final words of the seder?',
    options: ['Next year in Jerusalem!', 'Let my people go!', 'Dayenu!', 'L\'Chaim!'],
    answer: 0,
    fact: '"L\'Shanah Haba\'ah b\'Yerushalayim" — "Next Year in Jerusalem!" — is the traditional seder closing, expressing hope for messianic redemption and the rebuilding of the Temple.',
  },
  {
    q: 'How many steps (simanim) are in the traditional seder?',
    options: ['10', '12', '14', '16'],
    answer: 2,
    fact: 'There are 14 steps, from Kadesh (Kiddush) to Nirtzah (conclusion). Families often memorize them with the traditional rhyme beginning "Kadesh, Urchatz, Karpas, Yachatz..."',
  },
  {
    q: 'Who parted the sea for the Israelites?',
    options: ['Aaron', 'Miriam', 'Moses', 'Joshua'],
    answer: 2,
    fact: 'Moses stretched his staff over the sea, and God split it. The Midrash adds that Nachshon of the tribe of Judah waded in first up to his neck before the waters parted.',
  },
  {
    q: 'What is "Bedikat Chametz"?',
    options: [
      'The search for leavened bread on the night before Passover',
      'A prayer recited at the seder',
      'The breaking of the middle matzah',
      'Washing hands before the meal',
    ],
    answer: 0,
    fact: 'Bedikat chametz is the candlelight search for chametz the night before Passover. Any found chametz is burned the next morning in "biur chametz."',
  },
  {
    q: "What is the name of Moses's brother?",
    options: ['Joshua', 'Caleb', 'Aaron', 'Levi'],
    answer: 2,
    fact: 'Aaron was Moses\'s older brother and his spokesperson to Pharaoh. He later became the first Kohen Gadol (High Priest) of Israel.',
  },
  {
    q: 'What was the first plague God brought upon Egypt?',
    options: ['Frogs', 'Blood', 'Darkness', 'Lice'],
    answer: 1,
    fact: 'The first plague turned the Nile and all water in Egypt to blood. The fish died, the river stank, and Egyptians could not drink from it. Aaron struck the water with his staff.',
  },
  {
    q: 'What was the tenth and final plague?',
    options: ['Locusts', 'Darkness', 'Death of the firstborn', 'Hail'],
    answer: 2,
    fact: 'The death of the firstborn was the plague that finally broke Pharaoh. Israelite homes were protected by lamb\'s blood on their doorposts — the origin of Passover\'s name.',
  },
  {
    q: 'What does charoset symbolize?',
    options: ['The tears of slavery', 'The mortar used to build Pharaoh\'s cities', 'The Nile River', 'Manna in the desert'],
    answer: 1,
    fact: 'Charoset\'s paste-like texture symbolizes the mortar used to make bricks for Pharaoh\'s buildings. Its sweetness is a counterpoint to the bitter maror.',
  },
  {
    q: 'What is "Hallel"?',
    options: ['A collection of Psalms of praise', 'A type of matzah', 'The grace after meals', 'The search for chametz'],
    answer: 0,
    fact: 'Hallel (from the root meaning "praise") is a set of Psalms 113–118. Half is sung before the meal, half after. It includes the famous "This is the day God made; let us rejoice."',
  },
  {
    q: 'How many gifts does the song "Dayenu" list?',
    options: ['10', '12', '14', '15'],
    answer: 3,
    fact: 'Dayenu lists 15 acts of kindness — from the Exodus through receiving the Torah and entering the Land of Israel — saying after each that it alone would have been enough.',
  },
  {
    q: 'What was Moses doing when God appeared to him in the burning bush?',
    options: ['Praying in the desert', 'Herding sheep', 'Building a house', 'Crossing the Nile'],
    answer: 1,
    fact: 'Moses was tending the flock of his father-in-law Jethro when he noticed a bush burning without being consumed. He turned aside to look — and God called to him.',
  },
  {
    q: 'What does "Urchatz" mean?',
    options: ['You shall tell', 'And you shall wash', 'Break', 'Sanctify'],
    answer: 1,
    fact: 'Urchatz means "and you shall wash." It\'s the first hand-washing — done without a blessing, which is unusual and prompts children to ask why.',
  },
  {
    q: 'How many matzot are traditionally placed on the seder table?',
    options: ['1', '2', '3', '4'],
    answer: 2,
    fact: 'Three matzot represent the Kohen, Levi, and Israel. The middle matzah is broken during Yachatz — one half becomes the afikomen, the other stays on the plate.',
  },
  {
    q: 'What number plague was total darkness?',
    options: ['7th', '8th', '9th', '10th'],
    answer: 2,
    fact: 'The ninth plague was three days of absolute darkness "that could be felt." Only the Israelites had light — symbolizing the defeat of Ra, Egypt\'s sun god.',
  },
  {
    q: 'What is "Nirtzah"?',
    options: ['The opening blessing', 'The conclusion and acceptance of the seder', 'The search for chametz', 'Eating the matzah'],
    answer: 1,
    fact: 'Nirtzah means "acceptance" — the final seder step expressing hope that our observance has been accepted by God. It\'s followed by "Next Year in Jerusalem!"',
  },
  {
    q: 'What is the significance of the number 4 throughout the Passover seder?',
    options: [
      'It represents the four matriarchs',
      "It represents God's four promises of redemption in Exodus",
      'It represents the four corners of the earth',
      'It represents the four seasons',
    ],
    answer: 1,
    fact: "Four cups, four questions, four children — all rooted in God's four promises in Exodus 6:6–7: \"I will bring you out... I will deliver you... I will redeem you... I will take you.\"",
  },
  {
    q: 'What is "Maot Chitim"?',
    options: [
      'A Passover prayer',
      'Pre-Passover charity to help the poor afford food',
      'The search for chametz',
      'The Passover sacrifice',
    ],
    answer: 1,
    fact: 'Maot Chitim ("wheat money") is a charity drive before Passover to ensure poor families can afford matzah, wine, and food for the holiday. It\'s one of the oldest Jewish charitable traditions.',
  },
  {
    q: 'In "Echad Mi Yodea" (Who Knows One?), what does the number 2 represent?',
    options: ['Two tablets of the law', 'Two cups of wine', 'Two patriarchs', 'Two temples'],
    answer: 0,
    fact: 'Two represents the two tablets of the law (Luchot HaBrit) given to Moses at Mount Sinai. The song counts up to 13 — 13 attributes of God.',
  },
  {
    q: 'What does "Motzi" mean in the seder step "Motzi-Matzah"?',
    options: ['Who brings forth bread from the earth', 'Who sanctifies the holiday', 'Who redeems us', 'Who created the fruit of the vine'],
    answer: 0,
    fact: '"HaMotzi lechem min ha\'aretz" — "Who brings forth bread from the earth" — is the blessing said over all bread. On Passover, it\'s said over matzah, followed by a second blessing specifically for matzah.',
  },
  {
    q: 'What does reclining at the seder table symbolize?',
    options: ['Mourning for the Temple', 'Freedom — only free people reclined in ancient times', 'Tiredness after the long seder', 'Respect for the elders'],
    answer: 1,
    fact: 'In Greco-Roman times, free people reclined on cushions while eating; slaves ate standing or sitting upright. Reclining at the seder is a physical enactment of our freedom.',
  },
  {
    q: 'Which plague came just before the death of the firstborn?',
    options: ['Hail', 'Locusts', 'Darkness', 'Boils'],
    answer: 2,
    fact: 'Darkness was the ninth plague, immediately preceding the tenth and final plague — the death of the firstborn. The escalating severity of the plagues was meant to demonstrate God\'s power to all of Egypt.',
  },
  {
    q: "What city did the Israelites help build for Pharaoh?",
    options: ['Thebes and Memphis', 'Alexandria and Cairo', 'Pithom and Raamses', 'Luxor and Karnak'],
    answer: 2,
    fact: 'The Book of Exodus names Pithom and Raamses as the "store cities" built by the Israelites. Raamses is believed to be Pi-Ramesses, the capital built by Ramesses II.',
  },
  {
    q: 'What object did God give Moses to perform miracles?',
    options: ['A sword', 'A staff (mateh)', 'A trumpet', 'A flame'],
    answer: 1,
    fact: "Moses's staff (mateh) was used to part the sea, strike water from a rock, and initiate several plagues. Aaron also had his own staff, which famously turned into a serpent before Pharaoh.",
  },
  {
    q: 'How long did the Israelites wander in the desert after leaving Egypt?',
    options: ['10 years', '20 years', '40 years', '50 years'],
    answer: 2,
    fact: "The Israelites wandered for 40 years — one year for each day the spies spent in Canaan and returned with a faithless report. Of the original adults who left Egypt, only Joshua and Caleb entered the Promised Land.",
  },
  {
    q: 'What is the name of the special bread eaten on Passover?',
    options: ['Challah', 'Pita', 'Matzah', 'Babka'],
    answer: 2,
    fact: 'Matzah ("unleavened bread") is eaten because the Israelites left Egypt in such haste they had no time for their bread to rise. It is both a symbol of slavery (poor man\'s bread) and freedom.',
  },
  {
    q: 'What is "Barech"?',
    options: ['Grace after meals and the third cup of wine', 'The opening Kiddush', 'Singing Hallel', 'Breaking the matzah'],
    answer: 0,
    fact: 'Barech is the Grace After Meals (Birkat Hamazon), followed by the third cup of wine. It\'s also when Elijah\'s cup is poured and the door is opened for him.',
  },
  {
    q: 'What does "Kadesh" mean?',
    options: ['Sanctify', 'Wash', 'Tell', 'Praise'],
    answer: 0,
    fact: '"Kadesh" means to sanctify — the first step of the seder involves reciting Kiddush over the first cup of wine, sanctifying the holiday.',
  },
  {
    q: 'What insect was the eighth plague?',
    options: ['Ants', 'Beetles', 'Locusts', 'Mosquitoes'],
    answer: 2,
    fact: 'The eighth plague was locusts, which devoured every plant remaining after the hail. Pharaoh\'s advisors begged him to let the Israelites go before Egypt was destroyed, but he refused.',
  },
  {
    q: 'What is the traditional Passover seder plate item that is an egg?',
    options: ['Karpas', 'Charoset', 'Beitzah', 'Maror'],
    answer: 2,
    fact: 'The Beitzah (roasted egg) represents the festival sacrifice brought to the Temple. It also symbolizes mourning for the Temple\'s destruction and the cycle of life — eggs are a symbol of both mourning and renewal.',
  },
  {
    q: 'In which book of the Bible is the Exodus story found?',
    options: ['Genesis', 'Exodus', 'Leviticus', 'Numbers'],
    answer: 1,
    fact: 'The Book of Exodus (Shemot — "Names" in Hebrew) is the second book of the Torah. It begins with the Israelites enslaved in Egypt and ends with the construction of the Tabernacle.',
  },
  {
    q: 'What does "Shulchan Orech" mean?',
    options: ['The set table — it\'s when you eat dinner!', 'The grace after meals', 'Eating the bitter herbs', 'Hiding the afikomen'],
    answer: 0,
    fact: '"Shulchan Orech" means "set table" — this is simply the dinner step! After all the rituals, the family sits down to eat their Passover meal together.',
  },
  {
    q: 'Who was the first person to walk into the sea before it split?',
    options: ['Moses', 'Aaron', 'Nachshon ben Amminadab', 'Miriam'],
    answer: 2,
    fact: 'According to the Midrash, Nachshon ben Amminadab of the tribe of Judah bravely walked into the sea up to his nose before it parted. His courage is celebrated as a model of faith.',
  },
];

// ── 20 Questions words ──
const TWENTY_Q_WORDS = [
  { word: 'Moses', hint: 'Person' },
  { word: 'Pharaoh', hint: 'Person' },
  { word: 'Miriam', hint: 'Person' },
  { word: 'Aaron', hint: 'Person' },
  { word: "Pharaoh's Daughter", hint: 'Person' },
  { word: 'Nachshon', hint: 'Person' },
  { word: 'Joseph', hint: 'Person' },
  { word: 'The Burning Bush', hint: 'Place/Thing' },
  { word: 'The Red Sea', hint: 'Place' },
  { word: 'The Nile River', hint: 'Place' },
  { word: 'Egypt', hint: 'Place' },
  { word: 'Jerusalem', hint: 'Place' },
  { word: 'Matzah', hint: 'Thing' },
  { word: 'The Afikomen', hint: 'Thing' },
  { word: 'The Seder Plate', hint: 'Thing' },
  { word: 'A Wine Cup', hint: 'Thing' },
  { word: 'The Haggadah', hint: 'Thing' },
  { word: 'Charoset', hint: 'Thing' },
  { word: 'Horseradish', hint: 'Thing' },
  { word: 'Parsley', hint: 'Thing' },
  { word: 'Salt Water', hint: 'Thing' },
  { word: 'A Shank Bone', hint: 'Thing' },
  { word: 'Elijah\'s Cup', hint: 'Thing' },
  { word: 'The Ten Commandments', hint: 'Thing' },
  { word: 'A Frog', hint: 'Animal' },
  { word: 'A Locust', hint: 'Animal' },
  { word: 'The Passover Lamb', hint: 'Animal' },
  { word: 'Darkness', hint: 'Plague' },
  { word: 'Hail', hint: 'Plague' },
  { word: 'Dayenu', hint: 'Song' },
];

function TwentyQuestions() {
  const [wordIndex, setWordIndex] = useState(() => Math.floor(Math.random() * TWENTY_Q_WORDS.length));
  const [count, setCount] = useState(0);

  const { word } = TWENTY_Q_WORDS[wordIndex];

  function newWord() {
    setWordIndex(Math.floor(Math.random() * TWENTY_Q_WORDS.length));
    setCount(0);
  }

  return (
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#000080', marginBottom: 12 }}>
        🤔 10 Questions
      </div>

      {/* Word card */}
      <div style={{
        background: '#fff',
        borderTop: '2px solid #808080', borderLeft: '2px solid #808080',
        borderRight: '2px solid #fff', borderBottom: '2px solid #fff',
        padding: '16px 12px', textAlign: 'center', marginBottom: 12,
      }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 36, color: '#000080', letterSpacing: 1 }}>
          {word}
        </div>
      </div>

      {/* Question counter */}
      <div style={{ textAlign: 'center', marginBottom: 12 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, color: count >= 10 ? '#cc0000' : '#000080' }}>
          {count} / 10
        </div>
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
          <button
            className="win-btn"
            onClick={() => setCount((c) => Math.max(0, c - 1))}
            disabled={count === 0}
            style={{ width: 36 }}
          >
            −
          </button>
          <button
            className="win-btn"
            onClick={() => setCount((c) => Math.min(10, c + 1))}
            disabled={count === 10}
            style={{ width: 36 }}
          >
            +
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="win-btn" onClick={newWord}>↺ New Word</button>
      </div>
    </div>
  );
}

// ── Confetti ──
function Confetti() {
  const pieces = useMemo(() =>
    Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2.5 + Math.random() * 2.5,
      color: ['#ff6b6b', '#ffd93d', '#6bcb77', '#4d96ff', '#ff922b', '#cc5de8', '#f06595'][i % 7],
      width: 7 + Math.random() * 7,
      height: 5 + Math.random() * 6,
      isCircle: i % 3 === 0,
    })), []
  );

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 99998, overflow: 'hidden' }}>
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            width: p.width,
            height: p.height,
            background: p.color,
            borderRadius: p.isCircle ? '50%' : 2,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

// ── Podium spot ──
function PodiumSpot({ participant, position, score }) {
  const iconMeta = PARTICIPANT_ICONS.find((ic) => ic.id === participant.icon);
  const blockHeight = position === 1 ? 90 : position === 2 ? 65 : 48;
  const blockColor  = position === 1 ? '#ffd700' : position === 2 ? '#c0c0c0' : '#cd7f32';
  const blockLight  = position === 1 ? '#ffe87a' : position === 2 ? '#e8e8e8' : '#e0a060';
  const medals = { 1: '🥇', 2: '🥈', 3: '🥉' };
  const avatarSize = position === 1 ? 56 : 42;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 90 }}>
      <div className={position === 1 ? 'podium-winner' : ''} style={{ marginBottom: 4 }}>
        <img
          src={iconMeta?.src}
          alt={participant.name}
          style={{ width: avatarSize, height: avatarSize, objectFit: 'contain' }}
        />
      </div>
      <div style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', maxWidth: 86, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {participant.name}
      </div>
      <div style={{ fontSize: 11, color: '#000080', marginBottom: 4 }}>{score} pt{score !== 1 ? 's' : ''}</div>
      <div style={{
        width: 80, height: blockHeight,
        background: blockColor,
        borderTop: `2px solid ${blockLight}`,
        borderLeft: `2px solid ${blockLight}`,
        borderRight: '2px solid #808080',
        borderBottom: '2px solid #808080',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 28,
      }}>
        {medals[position]}
      </div>
    </div>
  );
}

// ── Podium ──
function Podium({ participants, scores }) {
  const sorted = [...participants]
    .sort((a, b) => (scores[b.id] ?? 0) - (scores[a.id] ?? 0));
  const [p1, p2, p3] = sorted;

  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: 4, marginTop: 12 }}>
      {p2 ? <PodiumSpot participant={p2} position={2} score={scores[p2.id] ?? 0} /> : <div style={{ width: 90 }} />}
      {p1 && <PodiumSpot participant={p1} position={1} score={scores[p1.id] ?? 0} />}
      {p3 ? <PodiumSpot participant={p3} position={3} score={scores[p3.id] ?? 0} /> : <div style={{ width: 90 }} />}
    </div>
  );
}

// ── Leaderboard ──
function Leaderboard({ participants, scores, currentPlayerId }) {
  const sorted = [...participants].sort((a, b) => (scores[b.id] ?? 0) - (scores[a.id] ?? 0));
  return (
    <div style={{ marginTop: 14, borderTop: '1px solid #808080', paddingTop: 8 }}>
      <div style={{ fontSize: 11, fontWeight: 'bold', color: '#000080', marginBottom: 5, fontFamily: 'var(--font-ui)' }}>
        🏅 Leaderboard
      </div>
      {sorted.map((p, i) => {
        const iconMeta = PARTICIPANT_ICONS.find((ic) => ic.id === p.icon);
        const isCurrent = p.id === currentPlayerId;
        return (
          <div key={p.id} style={{
            display: 'flex', alignItems: 'center', gap: 6,
            padding: '3px 5px',
            background: isCurrent ? '#e8e8ff' : 'transparent',
            border: isCurrent ? '1px solid #000080' : '1px solid transparent',
            marginBottom: 2,
            fontSize: 12, fontFamily: 'var(--font-ui)',
          }}>
            <span style={{ width: 14, color: '#888', fontSize: 11 }}>{i + 1}.</span>
            <img src={iconMeta?.src} alt={p.name} style={{ width: 20, height: 20, objectFit: 'contain' }} />
            <span style={{ flex: 1 }}>{p.name}</span>
            <span style={{ fontWeight: 'bold', color: '#000080', minWidth: 28, textAlign: 'right' }}>
              {scores[p.id] ?? 0}
            </span>
          </div>
        );
      })}
    </div>
  );
}

// ── Main component ──
export default function Games() {
  const { participants } = useSedar();
  const [tab, setTab]             = useState('trivia');
  const [current, setCurrent]     = useState(0);
  const [selected, setSelected]   = useState(null);
  const [showFact, setShowFact]   = useState(false);
  const [scores, setScores]       = useState({});
  const [done, setDone]           = useState(false);

  const tabs = [
    { id: 'trivia', label: '🎲 Trivia' },
    { id: '20q', label: '🤔 10 Questions' },
  ];

  const tabBar = (
    <div style={{ display: 'flex', gap: 2, marginBottom: 10 }}>
      {tabs.map((t) => (
        <button
          key={t.id}
          className="win-btn"
          onClick={() => setTab(t.id)}
          style={{
            borderTop: tab === t.id ? '2px solid #808080' : undefined,
            borderLeft: tab === t.id ? '2px solid #808080' : undefined,
            borderRight: tab === t.id ? '2px solid #fff' : undefined,
            borderBottom: tab === t.id ? '2px solid #fff' : undefined,
            background: tab === t.id ? '#fff' : undefined,
            fontWeight: tab === t.id ? 'bold' : undefined,
          }}
        >
          {t.label}
        </button>
      ))}
    </div>
  );

  if (tab === '20q') {
    return <div>{tabBar}<TwentyQuestions /></div>;
  }

  if (participants.length === 0) {
    return (
      <div>
        {tabBar}
        <div style={{ textAlign: 'center', padding: 32 }}>
          <div style={{ fontSize: 40, marginBottom: 10 }}>👥</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 18, color: '#000080', marginBottom: 8 }}>
            No players registered
          </div>
          <div style={{ fontSize: 12, color: '#555' }}>
            Open Registration.exe first to add players.
          </div>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[current];
  const currentPlayer = participants[current % participants.length];
  const iconMeta = PARTICIPANT_ICONS.find((ic) => ic.id === currentPlayer.icon);

  function handleAnswer(idx) {
    if (selected !== null) return;
    setSelected(idx);
    setShowFact(true);
    if (idx === q.answer) {
      setScores((prev) => ({ ...prev, [currentPlayer.id]: (prev[currentPlayer.id] ?? 0) + 1 }));
    }
  }

  function next() {
    if (current + 1 >= QUESTIONS.length) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setSelected(null);
      setShowFact(false);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setShowFact(false);
    setScores({});
    setDone(false);
  }

  // ── Done screen ──
  if (done) {
    return (
      <>
        <Confetti />
        {tabBar}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 24, color: '#000080', marginBottom: 2 }}>
            🏆 Game Over!
          </div>
          <div style={{ fontSize: 12, color: '#555', marginBottom: 4 }}>
            Final scores — congratulations to all players!
          </div>
          <Podium participants={participants} scores={scores} />
          <button className="win-btn" style={{ marginTop: 16 }} onClick={restart}>
            Play Again
          </button>
        </div>
      </>
    );
  }

  // ── Game screen ──
  return (
    <div>
      {tabBar}
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#000080' }}>
          🎲 Passover Trivia
        </div>
        <span style={{ fontSize: 11, color: '#666', fontFamily: 'var(--font-ui)' }}>
          {current + 1} / {QUESTIONS.length}
        </span>
      </div>

      {/* Current player badge */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '6px 10px', marginBottom: 10,
        background: '#e8e8ff',
        borderTop: '2px solid #fff', borderLeft: '2px solid #fff',
        borderRight: '2px solid #808080', borderBottom: '2px solid #808080',
        fontFamily: 'var(--font-ui)',
      }}>
        <img src={iconMeta?.src} alt={currentPlayer.name} style={{ width: 28, height: 28, objectFit: 'contain' }} />
        <div>
          <span style={{ fontWeight: 'bold', fontSize: 13 }}>{currentPlayer.name}</span>
          <span style={{ fontSize: 12, color: '#444' }}> — your turn to answer!</span>
        </div>
      </div>

      {/* Question */}
      <div className="trivia-question">{q.q}</div>

      {/* Options */}
      <div className="trivia-options">
        {q.options.map((opt, i) => {
          let cls = 'trivia-option';
          if (selected !== null) {
            if (i === q.answer) cls += ' correct';
            else if (i === selected && selected !== q.answer) cls += ' wrong';
          }
          return (
            <div key={i} className={cls} onClick={() => handleAnswer(i)}>
              <span style={{ fontWeight: 'bold', color: '#000080', minWidth: 16 }}>
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
              {selected !== null && i === q.answer && <span style={{ marginLeft: 6 }}>✓</span>}
              {selected !== null && i === selected && selected !== q.answer && <span style={{ marginLeft: 6 }}>✗</span>}
            </div>
          );
        })}
      </div>

      {/* Fun fact */}
      {showFact && (
        <div style={{
          background: '#fff8e1', border: '1px solid #e6c870',
          padding: '6px 10px', fontSize: 11, marginBottom: 10, lineHeight: 1.4,
        }}>
          <strong>📖 Fun fact:</strong> {q.fact}
        </div>
      )}

      {selected !== null && (
        <button className="win-btn" onClick={next}>
          {current + 1 < QUESTIONS.length ? 'Next Question →' : 'See Results 🏆'}
        </button>
      )}

      {/* Leaderboard */}
      <div style={{ marginTop: 8 }} />
      <Leaderboard participants={participants} scores={scores} currentPlayerId={currentPlayer.id} />
    </div>
  );
}
