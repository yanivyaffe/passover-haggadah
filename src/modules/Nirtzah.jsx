import ReaderBadge from '../components/ReaderBadge';
import MediaResources from '../components/MediaResources';
import { SEDER_MEDIA } from '../config/sederConfig';

export default function Nirtzah() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">14</div>
        <div className="step-title-block">
          <h2>✨ Nirtzah — נִרְצָה</h2>
          <p>Conclusion — The seder is complete!</p>
        </div>
      </div>

      <ReaderBadge slotIndex={27} cue="leads Nirtzah" />
      <ReaderBadge slotIndex={28} cue="reads" />
      <ReaderBadge slotIndex={29} cue="reads" />
      <ReaderBadge slotIndex={30} cue="reads" />
      <ReaderBadge slotIndex={31} cue="reads" />
      <ReaderBadge slotIndex={32} cue="reads" />

      <div style={{ textAlign: 'center', padding: '16px 0' }}>
        <div style={{ fontSize: 48 }}>🎉✡️🎉</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: '#000080', marginTop: 8 }}>
          The Seder is Complete!
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>
        The Passover seder has been completed in accordance with all its laws, statutes, and customs.
        Just as we were privileged to celebrate it this year, may we merit to celebrate it in years to come.
      </p>

      <blockquote style={{ textAlign: 'center', fontSize: 16, margin: '16px auto', maxWidth: 400 }}>
        <span className="hebrew" style={{ fontSize: 22, display: 'block', textAlign: 'center' }}>
          לְשָׁנָה הַבָּאָה בִּירוּשָׁלַיִם
        </span>
        <br />
        <strong>L'Shanah Haba'ah B'Yerushalayim!</strong>
        <br />
        <em>Next year in Jerusalem!</em>
      </blockquote>

      <div style={{ textAlign: 'center', marginTop: 16 }}>
        <div style={{ fontSize: 14, color: '#666', marginBottom: 12 }}>
          🎵 Sing Chad Gadya to close the seder!
        </div>
        <p style={{ fontSize: 12, lineHeight: 1.6, maxWidth: 400, margin: '0 auto' }}>
          <strong>Chad gadya, chad gadya...</strong><br />
          One little goat, one little goat that my father bought for two zuzim...
        </p>
      </div>

      <div style={{ textAlign: 'center', marginTop: 20, padding: 12, background: '#fff8e1', border: '1px solid #e6c870' }}>
        <strong>Chag Sameach! חַג שָׂמֵחַ</strong><br />
        Happy Passover from our family to yours! 🫓🍷✨
      </div>

      <MediaResources items={SEDER_MEDIA.nirtzah} />
    </div>
  );
}
