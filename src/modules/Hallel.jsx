import { useState } from 'react';
import ReaderBadge from '../components/ReaderBadge';
import { HALLEL_SONGS } from '../config/sederConfig';

export default function Hallel() {
  const [loadedSong, setLoadedSong] = useState(null);

  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">13</div>
        <div className="step-title-block">
          <h2>🎵 Hallel — הַלֵּל</h2>
          <p>Songs of praise — Psalms of thanksgiving</p>
        </div>
      </div>

      <ReaderBadge slotIndex={23} cue="leads Hallel" />
      <ReaderBadge slotIndex={24} cue="joins in songs" />
      <ReaderBadge slotIndex={25} cue="joins in songs" />

      <p>
        <em>Hallel</em> means "praise." We recite Psalms 115–118 and sing songs of gratitude to God
        for our redemption. This is the joyful, musical heart of the seder!
      </p>

      <h3>🎶 Passover Songs</h3>
      <div className="songs-list">
        {HALLEL_SONGS.map((song) => (
          <div key={song.youtubeId} className="song-item">
            <h4>{song.title}</h4>
            <p>{song.description}</p>
            {loadedSong === song.youtubeId ? (
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  src={`https://www.youtube.com/embed/${song.youtubeId}?autoplay=1`}
                  title={song.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div
                className="song-embed-area"
                style={{ cursor: 'pointer', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => setLoadedSong(song.youtubeId)}
              >
                <span style={{ color: '#fff', fontSize: 12 }}>▶ Click to play {song.title}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <h3 style={{ marginTop: 16 }}>Fourth Cup of Wine</h3>
      <ReaderBadge slotIndex={26} cue="leads the final blessing" />
      <p>After Hallel, fill the fourth and final cup of wine. Recite the blessing and drink.</p>
      <span className="hebrew">בָּרוּךְ אַתָּה יְיָ אֱלֹהֵינוּ מֶלֶךְ הָעוֹלָם, בּוֹרֵא פְּרִי הַגָּפֶן</span>
      <blockquote>🍷 Drink the fourth cup — the Cup of Praise! L'Chaim!</blockquote>
    </div>
  );
}
