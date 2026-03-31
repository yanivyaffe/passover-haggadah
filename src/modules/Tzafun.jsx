import ReaderBadge from '../components/ReaderBadge';
import MediaResources from '../components/MediaResources';
import { SEDER_MEDIA } from '../config/sederConfig';

export default function Tzafun() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">11</div>
        <div className="step-title-block">
          <h2>🔍 Tzafun — צָפוּן</h2>
          <p>Find and eat the afikomen</p>
        </div>
      </div>

      <ReaderBadge slotIndex={19} cue="leads the afikomen search" />
      <ReaderBadge slotIndex={20} cue="negotiates the ransom 😄" />

      <p>
        <em>Tzafun</em> means "hidden." Now it's time for the children to find the afikomen
        (the piece of matzah that was hidden in Step 4: Yachatz).
      </p>

      <div style={{ textAlign: 'center', padding: '12px 0', fontSize: 32 }}>🔍 🏃 👀</div>

      <blockquote>
        🎯 The afikomen must be found and eaten before midnight to complete the seder.
        <br /><br />
        💰 Children traditionally hold the afikomen "hostage" and bargain with the adults
        for a prize before returning it. Negotiate wisely!
      </blockquote>

      <p>
        Once the afikomen is retrieved, everyone gets a small piece. Eat it while reclining —
        it is the last food of the night, and its taste should linger.
      </p>

      <p style={{ fontStyle: 'italic', color: '#444', marginTop: 8 }}>
        After eating the afikomen, nothing else is eaten for the rest of the seder.
      </p>

      <MediaResources items={SEDER_MEDIA.tzafun} />
    </div>
  );
}
