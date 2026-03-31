import ReaderBadge from '../components/ReaderBadge';
import MediaResources from '../components/MediaResources';
import { SEDER_MEDIA } from '../config/sederConfig';

export default function Korech() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">9</div>
        <div className="step-title-block">
          <h2>🥪 Korech — כּוֹרֵךְ</h2>
          <p>The Hillel Sandwich</p>
        </div>
      </div>

      <ReaderBadge slotIndex={18} cue="reads and assembles the sandwich" />

      <p>
        The great sage <strong>Hillel</strong> (1st century BCE) used to eat the Passover lamb, matzah, and bitter herbs together
        as a sandwich, fulfilling the Torah's commandment: <em>"They shall eat it with matzot and bitter herbs."</em> (Numbers 9:11)
      </p>

      <p>
        In memory of Hillel's practice, we make a sandwich:
      </p>

      <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
        <li>🫓 Place bitter herbs (maror) between two pieces of matzah</li>
        <li>🍎 Add a little charoset</li>
        <li>Eat the sandwich while reclining</li>
      </ul>

      <blockquote>
        🥪 This is the original sandwich, created 2,000 years before the Earl of Sandwich was born!
        <br /><br />
        Some say the charoset represents the mortar, and the bitter herbs — despite the sweetness — remind us
        that even comfort cannot fully mask the taste of oppression.
      </blockquote>

      <MediaResources items={SEDER_MEDIA.korech} />
    </div>
  );
}
