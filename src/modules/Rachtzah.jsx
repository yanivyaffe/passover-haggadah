import ReaderBadge from '../components/ReaderBadge';
import MediaResources from '../components/MediaResources';
import { SEDER_MEDIA } from '../config/sederConfig';

export default function Rachtzah() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">6</div>
        <div className="step-title-block">
          <h2>🧼 Rachtzah — רָחְצָה</h2>
          <p>Wash hands — with blessing</p>
        </div>
      </div>

      <ReaderBadge slotIndex={13} cue="recites the blessing" />

      <p>
        Everyone washes their hands again, this time <strong>with the blessing</strong>, in preparation for eating matzah.
      </p>

      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל נְטִילַת יָדַיִם</span>
      <p><em>Baruch Atah Adonai, Eloheinu Melech haolam, asher kid'shanu b'mitzvotav v'tzivanu al n'tilat yadayim.</em></p>
      <p>Blessed are You, Lord our God, Ruler of the universe, who sanctified us with Your commandments and commanded us concerning the washing of hands.</p>

      <blockquote>
        🚿 After washing, do not speak until after eating the matzah — go straight to Motzi-Matzah!
      </blockquote>

      <MediaResources items={SEDER_MEDIA.rachtzah} />
    </div>
  );
}
