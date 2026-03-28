import { useState } from 'react';

const QUESTIONS = [
  {
    q: 'How many plagues did God bring upon Egypt?',
    options: ['7', '10', '12', '40'],
    answer: 1,
    fact: 'The Ten Plagues: blood, frogs, lice, flies, livestock disease, boils, hail, locusts, darkness, and death of the firstborn.',
  },
  {
    q: "What is the Hebrew word for the hidden piece of matzah that children search for at the end of the seder?",
    options: ['Charoset', 'Karpas', 'Afikomen', 'Korech'],
    answer: 2,
    fact: "Afikomen comes from the Greek word for \"dessert.\" The seder cannot end until it is found and eaten!",
  },
  {
    q: 'How many years were the Israelites enslaved in Egypt according to tradition?',
    options: ['40 years', '100 years', '210 years', '400 years'],
    answer: 3,
    fact: 'The Torah says 430 years, but rabbinic tradition often cites 210 years as the actual time of slavery (not including earlier sojourning).',
  },
  {
    q: "What does \"Dayenu\" mean?",
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
      'Pharaoh passing laws against the Israelites',
    ],
    answer: 0,
    fact: "The word Pesach means \"to pass over\" — referring to God passing over the homes of the Israelites (marked with lamb's blood) when smiting the firstborn of Egypt.",
  },
];

export default function Games() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [showFact, setShowFact] = useState(false);

  const q = QUESTIONS[current];

  function handleAnswer(idx) {
    if (selected !== null) return;
    setSelected(idx);
    setShowFact(true);
    if (idx === q.answer) setScore((s) => s + 1);
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
    setScore(0);
    setDone(false);
    setShowFact(false);
  }

  if (done) {
    const pct = Math.round((score / QUESTIONS.length) * 100);
    return (
      <div style={{ textAlign: 'center', padding: 16 }}>
        <div style={{ fontSize: 36, marginBottom: 8 }}>
          {pct >= 80 ? '🏆' : pct >= 50 ? '🌟' : '🙈'}
        </div>
        <div className="score-display">{score} / {QUESTIONS.length}</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, marginBottom: 8 }}>
          {pct >= 80
            ? 'Excellent! You know your Passover!'
            : pct >= 50
            ? 'Not bad! Keep studying the Haggadah!'
            : 'Next year, more study! L\'Shanah Haba\'ah!'}
        </div>
        <div style={{ fontSize: 11, color: '#666', marginBottom: 16 }}>
          You answered {score} out of {QUESTIONS.length} questions correctly ({pct}%)
        </div>
        <button className="win-btn" onClick={restart}>Play Again</button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#000080', marginBottom: 8 }}>
        🎲 Passover Trivia
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
        <span style={{ fontSize: 11, color: '#666' }}>
          Question {current + 1} of {QUESTIONS.length}
        </span>
        <span className="score-display" style={{ fontSize: 18 }}>
          Score: {score}
        </span>
      </div>

      <div className="trivia-question">{q.q}</div>

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
              {selected !== null && i === selected && selected !== q.answer && (
                <span style={{ marginLeft: 6 }}>✗</span>
              )}
            </div>
          );
        })}
      </div>

      {showFact && (
        <div style={{
          background: '#fff8e1',
          border: '1px solid #e6c870',
          padding: '6px 10px',
          fontSize: 11,
          marginBottom: 10,
          lineHeight: 1.4,
        }}>
          <strong>📖 Fun fact:</strong> {q.fact}
        </div>
      )}

      {selected !== null && (
        <button className="win-btn" onClick={next}>
          {current + 1 < QUESTIONS.length ? 'Next Question →' : 'See Results'}
        </button>
      )}
    </div>
  );
}
