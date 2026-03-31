import { useState } from 'react';

const BADGE_COLORS = {
  Video:    '#3d5c77',
  Image:    '#4a7a3d',
  Music:    '#7a3d5c',
  Document: '#5c4d3d',
  Brief:    '#3d5c4d',
};

function MediaCard({ badge, title, description, href, youtubeId }) {
  const [loaded, setLoaded] = useState(false);
  const color = BADGE_COLORS[badge] || '#555';

  return (
    <div style={{
      background: '#fff',
      borderTop: '2px solid #808080',
      borderLeft: '2px solid #808080',
      borderRight: '2px solid #fff',
      borderBottom: '2px solid #fff',
      padding: '7px 9px',
      marginBottom: 6,
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 3 }}>
        <span style={{
          background: color, color: '#fff', fontSize: 9, padding: '1px 6px',
          fontFamily: 'var(--font-ui)', flexShrink: 0,
        }}>{badge}</span>
        <strong style={{ fontSize: 11, fontFamily: 'var(--font-ui)' }}>{title}</strong>
      </div>
      {description && (
        <p style={{ fontSize: 11, color: '#555', marginBottom: 5, lineHeight: 1.4, fontFamily: 'var(--font-ui)' }}>
          {description}
        </p>
      )}
      {youtubeId && !loaded && (
        <div
          onClick={() => setLoaded(true)}
          style={{
            background: '#000', height: 44, display: 'flex', alignItems: 'center',
            justifyContent: 'center', cursor: 'pointer', marginBottom: href ? 4 : 0,
          }}
        >
          <span style={{ color: '#fff', fontSize: 11, fontFamily: 'var(--font-ui)' }}>▶ Click to play</span>
        </div>
      )}
      {youtubeId && loaded && (
        <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, marginBottom: href ? 4 : 0 }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: 10, color: '#000080', fontFamily: 'var(--font-ui)' }}
        >
          Open link ↗
        </a>
      )}
    </div>
  );
}

export default function MediaResources({ items }) {
  const [open, setOpen] = useState(false);
  if (!items || items.length === 0) return null;

  return (
    <div style={{ marginTop: 16, borderTop: '1px solid #c0c0c0', paddingTop: 8 }}>
      <button
        className="win-btn"
        onClick={() => setOpen((o) => !o)}
        style={{ width: '100%', textAlign: 'left', marginBottom: open ? 8 : 0 }}
      >
        {open ? '▼' : '▶'} 📺 Multimedia Resources ({items.length})
      </button>
      {open && items.map((item, i) => <MediaCard key={i} {...item} />)}
    </div>
  );
}
