import ReaderBadge from '../components/ReaderBadge';
import MediaResources from '../components/MediaResources';
import { SEDER_MEDIA } from '../config/sederConfig';

export default function Karpas() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">3</div>
        <div className="step-title-block">
          <h2>🌿 Karpas — כַּרְפַּס</h2>
          <p>Dip the greens in salt water</p>
        </div>
      </div>

      <ReaderBadge slotIndex={2} cue="recites the blessing" />

      <p>
        Take a small piece of parsley (or celery) and dip it in salt water. Before eating, recite:
      </p>

      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הָאֲדָמָה</span>
      <p><em>Baruch Atah Adonai, Eloheinu Melech haolam, borei p'ri ha'adamah.</em></p>
      <p>Blessed are You, Lord our God, Ruler of the universe, who creates the fruit of the earth.</p>

      <blockquote>
        🌿 The green vegetable represents springtime and new life.<br />
        🥣 The salt water represents the tears shed by our enslaved ancestors in Egypt.
      </blockquote>

      <p>
        Eat the karpas. This small act of dipping is one of the things that makes the seder night different —
        and is meant to intrigue the children into asking questions.
      </p>

      <MediaResources items={SEDER_MEDIA.karpas} />
    </div>
  );
}
