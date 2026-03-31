import ReaderBadge from '../components/ReaderBadge';
import MediaResources from '../components/MediaResources';
import { SEDER_MEDIA } from '../config/sederConfig';

export default function Maror() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">8</div>
        <div className="step-title-block">
          <h2>😤 Maror — מָרוֹר</h2>
          <p>Eat the bitter herbs</p>
        </div>
      </div>

      <ReaderBadge slotIndex={16} cue="recites the blessing" />

      <p>Take a portion of bitter herbs (horseradish) and recite:</p>

      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל אֲכִילַת מָרוֹר</span>
      <p><em>Baruch Atah Adonai, Eloheinu Melech haolam, asher kid'shanu b'mitzvotav v'tzivanu al achilat maror.</em></p>
      <p>Blessed are You, Lord our God, Ruler of the universe, who sanctified us with Your commandments and commanded us concerning the eating of bitter herbs.</p>

      <ReaderBadge slotIndex={17} cue="reads" />
      <blockquote>
        🌿 The maror reminds us of the bitterness of slavery. The Egyptians "embittered their lives with hard labor — with mortar and bricks and all kinds of work in the fields" (Exodus 1:14).
        <br /><br />
        😤 Eat the maror without reclining — there is nothing comfortable about bitterness.
      </blockquote>

      <p>
        Dip the bitter herbs in charoset before eating. The sweet charoset softens the bitterness slightly —
        a reminder that even in the darkest times, sweetness exists.
      </p>

      <MediaResources items={SEDER_MEDIA.maror} />
    </div>
  );
}
