import ReaderBadge from '../components/ReaderBadge';

export default function Kadesh() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">1</div>
        <div className="step-title-block">
          <h2>🍷 Kadesh — קַדֵּשׁ</h2>
          <p>Sanctification — Recite Kiddush and drink the first cup of wine</p>
        </div>
      </div>

      <ReaderBadge slotIndex={0} cue="leads Kiddush" />

      <h3>Kiddush — The Blessing over Wine</h3>
      <p>Fill your first cup of wine (or grape juice). Hold it and recite:</p>
      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן</span>
      <p><em>Baruch Atah Adonai, Eloheinu Melech haolam, borei p'ri hagafen.</em></p>
      <p>Blessed are You, Lord our God, Ruler of the universe, who creates the fruit of the vine.</p>

      <ReaderBadge slotIndex={1} cue="reads the Shehecheyanu" />

      <h3>Shehecheyanu — Blessing for New Occasions</h3>
      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, שֶׁהֶחֱיָנוּ וְקִיְּמָנוּ וְהִגִּיעָנוּ לַזְּמַן הַזֶּה</span>
      <p><em>Baruch Atah Adonai, Eloheinu Melech haolam, shehecheyanu v'kiy'manu v'higianu laz'man hazeh.</em></p>
      <p>Blessed are You, Lord our God, Ruler of the universe, who has kept us alive, sustained us, and brought us to this season.</p>

      <blockquote>🍷 Drink the first cup of wine while reclining to the left — a sign of freedom!</blockquote>
    </div>
  );
}
