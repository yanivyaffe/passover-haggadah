import MediaResources from '../components/MediaResources';
import { SEDER_MEDIA } from '../config/sederConfig';

export default function Urchatz() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">2</div>
        <div className="step-title-block">
          <h2>💦 Urchatz — וּרְחַץ</h2>
          <p>Wash hands — no blessing recited</p>
        </div>
      </div>

      <p>
        Everyone washes their hands before eating the karpas (greens). Unlike the later handwashing (Rachtzah),
        <strong> no blessing is recited</strong> at this point.
      </p>

      <p>
        This unusual handwashing — done before a vegetable, without a blessing — is meant to prompt curiosity,
        especially from children. Why are we washing our hands now? What makes tonight different?
      </p>

      <blockquote>
        🌊 In ancient times, people washed their hands before eating any food dipped in liquid.
        We preserve this custom to stimulate questions and discussion.
      </blockquote>

      <p style={{ marginTop: 10, fontStyle: 'italic', color: '#666' }}>
        Wash your hands and return to the table.
      </p>

      <MediaResources items={SEDER_MEDIA.urchatz} />
    </div>
  );
}
