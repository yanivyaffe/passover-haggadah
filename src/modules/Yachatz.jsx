import ReaderBadge from '../components/ReaderBadge';

export default function Yachatz() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">4</div>
        <div className="step-title-block">
          <h2>🫓 Yachatz — יַחַץ</h2>
          <p>Break the middle matzah</p>
        </div>
      </div>

      <ReaderBadge slotIndex={3} cue="breaks and hides the afikomen" />

      <p>
        There are three matzot on the seder table. The leader takes the <strong>middle matzah</strong> and breaks it into two pieces.
      </p>

      <ul style={{ paddingLeft: 20, lineHeight: 1.8, marginBottom: 10 }}>
        <li>The <strong>smaller piece</strong> is returned between the two whole matzot.</li>
        <li>The <strong>larger piece</strong> is the <em>afikomen</em> — it is wrapped and hidden for children to find later (Step 11: Tzafun).</li>
      </ul>

      <blockquote>
        🍞 Breaking the matzah represents the bread of poverty — we do not eat a whole, perfect loaf, but a broken one.
        <br /><br />
        🔍 The afikomen must be found and eaten at the end of the seder. Children traditionally hold it ransom in exchange for a gift!
      </blockquote>

      <p style={{ fontStyle: 'italic', color: '#444' }}>
        Hide the afikomen somewhere in the room. The children will search for it later!
      </p>
    </div>
  );
}
