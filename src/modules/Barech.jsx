import ReaderBadge from '../components/ReaderBadge';
import MediaResources from '../components/MediaResources';
import { SEDER_MEDIA } from '../config/sederConfig';

export default function Barech() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">12</div>
        <div className="step-title-block">
          <h2>🙏 Barech — בָּרֵךְ</h2>
          <p>Grace after meals & the third cup of wine</p>
        </div>
      </div>

      <h3>Birkat Hamazon — Grace After Meals</h3>
      <ReaderBadge slotIndex={21} cue="leads Birkat Hamazon" />

      <p>
        We recite Birkat Hamazon, the grace after meals, thanking God for the food we have eaten.
        On Shabbat and holidays, we add special insertions for the day.
      </p>

      <blockquote>
        🙏 The Torah commands: "You shall eat and be satisfied and bless the Lord your God" (Deut. 8:10).
        Birkat Hamazon fulfills this commandment.
      </blockquote>

      <h3>Elijah's Cup — כּוֹס אֵלִיָּהוּ</h3>
      <ReaderBadge slotIndex={22} cue="fills Elijah's cup and opens the door" />

      <p>
        Pour a special cup of wine for the prophet Elijah. Then open the front door — tradition holds that Elijah
        visits every Jewish home during the seder to herald the coming of the Messiah.
      </p>

      <div style={{ textAlign: 'center', fontSize: 36, padding: '8px 0' }}>🚪✨</div>

      <p>We recite <em>Shfoch Chamatcha</em> — an appeal to God to protect the righteous and pursue the wicked.
         Then close the door.</p>

      <h3>Third Cup of Wine</h3>
      <p>Fill the third cup. Recite the blessing and drink while reclining.</p>
      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן</span>
      <blockquote>🍷 Drink the third cup — the Cup of Redemption!</blockquote>

      <MediaResources items={SEDER_MEDIA.barech} />
    </div>
  );
}
