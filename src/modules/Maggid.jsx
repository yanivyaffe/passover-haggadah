import ReaderBadge from '../components/ReaderBadge';

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
    </div>
  );
}
