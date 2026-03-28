import ReaderBadge from '../components/ReaderBadge';

export default function MotziMatzah() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">7</div>
        <div className="step-title-block">
          <h2>🫓 Motzi-Matzah — מוֹצִיא מַצָּה</h2>
          <p>Blessings over matzah — eat the matzah</p>
        </div>
      </div>

      <ReaderBadge slotIndex={14} cue="holds the matzot and leads blessings" />

      <p>
        The leader holds all three matzot (two whole + one broken) and recites two blessings:
      </p>

      <h3>First Blessing — Hamotzi (on bread)</h3>
      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, הַמּוֹצִיא לֶחֶם מִן הָאָרֶץ</span>
      <p>Blessed are You, Lord our God, Ruler of the universe, who brings forth bread from the earth.</p>

      <h3>Second Blessing — On Eating Matzah</h3>
      <ReaderBadge slotIndex={15} cue="leads the second blessing" />
      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, אֲשֶׁר קִדְּשָׁנוּ בְּמִצְוֹתָיו וְצִוָּנוּ עַל אֲכִילַת מַצָּה</span>
      <p>Blessed are You, Lord our God, Ruler of the universe, who sanctified us with Your commandments and commanded us concerning the eating of matzah.</p>

      <blockquote>
        🫓 The leader breaks pieces from the top and middle matzah and distributes to everyone at the table.
        Eat the matzah while reclining to the left — savoring the taste of freedom!
      </blockquote>
    </div>
  );
}
