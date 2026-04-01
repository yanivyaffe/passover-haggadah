import { useState } from 'react';
import ReaderBadge from '../components/ReaderBadge';
import MediaResources from '../components/MediaResources';
import { SEDER_MEDIA } from '../config/sederConfig';

function VideoEmbed({ youtubeId, label }) {
  const [loaded, setLoaded] = useState(false);
  return loaded ? (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, margin: '8px 0' }}>
      <iframe
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
        title={label}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  ) : (
    <div
      onClick={() => setLoaded(true)}
      style={{ background: '#000', height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', margin: '8px 0' }}
    >
      <span style={{ color: '#fff', fontSize: 11, fontFamily: 'var(--font-ui)' }}>▶ Click to play</span>
    </div>
  );
}

const HaLachmaVideo = () => <VideoEmbed youtubeId="ZrjclpiVaEc" label="Ha Lachma Anya" />;

const DayenuPlayer = () => <VideoEmbed youtubeId="sLG1bYtCFgk" label="Dayenu" />;

export default function Maggid() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">5</div>
        <div className="step-title-block">
          <h2>📖 Maggid — מַגִּיד</h2>
          <p>Tell the story of the Exodus from Egypt</p>
        </div>
      </div>

      <h3>Ha Lachma Anya — This is the Bread of Affliction</h3>
      <ReaderBadge slotIndex={4} cue="reads Ha Lachma Anya" />
      <span className="hebrew">הָא לַחְמָא עַנְיָא דִּי אֲכָלוּ אַבְהָתָנָא בְּאַרְעָא דְמִצְרָיִם</span>
      <p>
        This is the bread of affliction which our ancestors ate in the land of Egypt.
        Let all who are hungry come and eat. Let all who are in need come and celebrate Passover with us.
        This year we are here; next year may we be in the Land of Israel.
        This year we are slaves; next year may we be free.
      </p>
      <HaLachmaVideo />

      <h3>The Four Questions — מַה נִּשְׁתַּנָּה</h3>
      <ReaderBadge slotIndex={5} cue="asks the Four Questions" />
      <p>The youngest person at the table asks:</p>
      <blockquote>
        <strong>Mah nishtanah halailah hazeh mikol haleilot?</strong><br />
        Why is this night different from all other nights?
        <ol style={{ paddingLeft: 20, marginTop: 8, lineHeight: 2 }}>
          <li>On all other nights we eat leavened bread or matzah. On this night — only matzah.</li>
          <li>On all other nights we eat all vegetables. On this night — bitter herbs.</li>
          <li>On all other nights we do not dip even once. On this night — twice.</li>
          <li>On all other nights we eat sitting or reclining. On this night — we all recline.</li>
        </ol>
      </blockquote>

      <h3>We Were Slaves — עֲבָדִים הָיִינוּ</h3>
      <ReaderBadge slotIndex={6} cue="reads" />
      <p>
        We were slaves to Pharaoh in Egypt, and the Lord our God brought us out from there with a mighty hand and an outstretched arm.
        Had the Holy One not brought our ancestors out of Egypt, then we, our children, and our children's children would still be enslaved to Pharaoh in Egypt.
      </p>

      <h3>The Four Sons — אַרְבָּעָה בָּנִים</h3>
      <p>
        The Torah speaks of four types of children — and teaches us to meet each one where they are.
      </p>
      {[
        {
          emoji: '🧠',
          type: 'The Wise Son',
          hebrew: 'חָכָם',
          asks: '"What are the testimonies, statutes, and laws that God has commanded us?"',
          answer: 'Teach him all the laws of Passover in full detail — he wants to understand deeply.',
          slotIndex: 33,
          videoId: 'KhCbR_LpQjI',
        },
        {
          emoji: '😤',
          type: 'The Wicked Son',
          hebrew: 'רָשָׁע',
          asks: '"What does this service mean to you?" — saying you, not us.',
          answer: 'By excluding himself from the community, he has denied a core truth. Tell him: "It is because of what God did for me when I left Egypt — for me, not for him."',
          slotIndex: 34,
        },
        {
          emoji: '😶',
          type: 'The Simple Son',
          hebrew: 'תָּם',
          asks: '"What is this?"',
          answer: '"With a strong hand God took us out of Egypt, out of the house of slavery."',
          slotIndex: 35,
          videoId: 'R90_EeRP2wc',
        },
        {
          emoji: '🤐',
          type: 'The One Who Does Not Know How to Ask',
          hebrew: 'שֶׁאֵינוֹ יוֹדֵעַ לִשְׁאוֹל',
          asks: null,
          answer: 'You open the conversation for them. As it is written: "You shall tell your child on that day."',
          slotIndex: 36,
        },
      ].map(({ emoji, type, hebrew, asks, answer, slotIndex, videoId }) => (
        <div key={type} style={{
          background: '#fff',
          borderTop: '2px solid #808080',
          borderLeft: '2px solid #808080',
          borderRight: '2px solid #fff',
          borderBottom: '2px solid #fff',
          padding: '8px 10px',
          marginBottom: 8,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ fontSize: 20 }}>{emoji}</span>
            <strong style={{ fontSize: 13 }}>{type}</strong>
            <span style={{ fontFamily: "'David', serif", fontSize: 14, color: '#400000', marginLeft: 4 }}>{hebrew}</span>
          </div>
          <ReaderBadge slotIndex={slotIndex} cue={`reads the ${type}`} />
          {asks && <p style={{ fontStyle: 'italic', marginBottom: 4 }}>{asks}</p>}
          <p style={{ color: '#333' }}>{answer}</p>
          {videoId && <VideoEmbed youtubeId={videoId} label={type} />}
        </div>
      ))}

      <h3>The Ten Plagues</h3>
      <ReaderBadge slotIndex={7} cue="leads the plagues" />
      <p>
        As we recite each plague, we remove a drop of wine from our cups — because our joy cannot be complete while others suffered.
        Dip your finger into your wine glass and let a drop fall for each plague:
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '10px 0' }}>
        {[
          ['🩸','Blood'], ['🐸','Frogs'], ['🦟','Lice'], ['🪰','Flies'],
          ['🐄','Livestock'], ['🤕','Boils'], ['🌨️','Hail'], ['🦗','Locusts'],
          ['🌑','Darkness'], ['😢','Firstborn'],
        ].map(([em, name]) => (
          <div key={name} style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            padding: '4px 8px', background: '#fff8e1', border: '1px solid #e6c870',
            fontSize: 10, gap: 2,
          }}>
            <span style={{ fontSize: 20 }}>{em}</span>
            <span>{name}</span>
          </div>
        ))}
      </div>

      <h3>A Contemporary Reading</h3>
      <p style={{ fontStyle: 'italic', fontSize: 12, color: '#666', marginBottom: 6 }}>
        — Contributed by Steve Moss
      </p>
      <blockquote style={{ lineHeight: 1.7 }}>
        And there arose another Pharaoh who knew not Joseph. And he accused the Hebrews of malign intent and fraud upon the nation.
        And he sent his masked agents to terrorize them, separating them from their neighbors before casting them out and maligning them in word and deed.
        <br /><br />
        At this table, we remember not only Egypt, but every place where fear shadows dignity.
        In the land of lakes, there arose a decree: strangers would be taken, families divided, voices silenced.
        And the people asked, <em>"Are we not commanded to remember that we were once strangers?"</em>
        <br /><br />
        So, they told the story. They set extra chairs, not for Elijah alone, but for neighbors in hiding.
        They spoke names softly, then boldly. They lit candles not only for freedom long ago, but for courage now.
        <br /><br />
        And, like the midwives who defied Pharaoh, there were those who chose conscience over command.
        They organized, they sheltered, they bore witness. Not with swords, but with presence, red whistles and iPhones.
        Older men from the land of the lakes drove home the children of their neighbors who didn't look like them,
        to keep them safe. And they died at the hands of a 79-year-old Pharaoh's minions for following their north star.
        <br /><br />
        <strong>"Dayenu,"</strong> they said — this would be enough: to stand, to refuse indifference.
        And the youngest asked, <em>"Why is this night different?"</em> Because tonight, we remember that
        liberation is unfinished — and we are part of the telling.
      </blockquote>

      <h3>Dayenu — דַּיֵּנוּ</h3>
      <ReaderBadge slotIndex={8} cue="leads Dayenu" />
      <ReaderBadge slotIndex={9} cue="joins in Dayenu" />
      <p>
        <em>Dayenu</em> means "it would have been enough." This song celebrates the many gifts God gave us,
        saying after each: even if God had done only this one thing, it would have been sufficient.
      </p>
      <blockquote>
        🎵 Sing together: <strong>Dai-dai-yenu, dai-dai-yenu, dai-dai-yenu, dayenu dayenu!</strong>
      </blockquote>
      <DayenuPlayer />

      <h3>Pesach, Matzah, and Maror</h3>
      <ReaderBadge slotIndex={10} cue="explains the three essentials" />
      <p>
        Rabban Gamliel teaches that whoever does not explain these three things on Passover has not fulfilled their obligation:
      </p>
      <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
        <li><strong>🦴 Pesach (Passover Lamb)</strong> — because God passed over the houses of our ancestors in Egypt</li>
        <li><strong>🫓 Matzah</strong> — because our ancestors' dough did not have time to rise before God redeemed them</li>
        <li><strong>🌿 Maror (Bitter Herbs)</strong> — because the Egyptians embittered our ancestors' lives</li>
      </ul>

      <h3>In Every Generation</h3>
      <ReaderBadge slotIndex={11} cue="reads" />
      <blockquote>
        In every generation, each person is obligated to see themselves as if they personally left Egypt.
        As it is written: "You shall tell your child on that day: it is because of what God did for <em>me</em> when I left Egypt."
      </blockquote>

      <h3>Second Cup of Wine</h3>
      <ReaderBadge slotIndex={12} cue="leads the blessing" />
      <p>Fill the second cup and recite the blessing. Drink while reclining.</p>
      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן</span>
      <blockquote>🍷 Drink the second cup of wine — the Cup of Deliverance!</blockquote>

      <MediaResources items={SEDER_MEDIA.maggid} />
    </div>
  );
}
