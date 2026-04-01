import { useState } from 'react';
import { useSedar } from '../context/SedarContext';
import { WINE_OCCASIONS } from '../config/sederConfig';

const DRUNK_STATES = [
  { emoji: '😊' },
  { emoji: '🥳' },
  { emoji: '🤪' },
  { emoji: '😵‍💫' },
  { emoji: '🥴', label: "L'Chaim!!" },
];

function WineCup({ index, filled, onClick, elijah }) {
  const stroke = elijah ? '#92610a' : '#4a0e8f';
  const fillColor = elijah ? '#b8860b' : '#6b21a8';
  const gradientId = elijah ? 'elijahGradient' : 'wineGradient';

  return (
    <div className="wine-cup-wrapper" onClick={onClick} title={WINE_OCCASIONS[index]}>
      <svg width="50" height="80" viewBox="0 0 50 80" className="wine-cup">
        <path
          d="M10 5 L40 5 L35 45 Q25 52 15 45 Z"
          fill={filled ? fillColor : 'none'}
          stroke={stroke}
          strokeWidth="2"
          style={{ transition: 'fill 0.4s ease' }}
        />
        {filled && (
          <path
            d="M11 8 L39 8 L34.5 43 Q25 50 15.5 43 Z"
            fill={`url(#${gradientId})`}
            opacity="0.9"
          />
        )}
        <line x1="25" y1="45" x2="25" y2="68" stroke={stroke} strokeWidth="2.5" />
        <line x1="12" y1="68" x2="38" y2="68" stroke={stroke} strokeWidth="3" />
        <line x1="10" y1="5" x2="40" y2="5" stroke={stroke} strokeWidth="2" />
        <defs>
          <linearGradient id="wineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#581c87" />
          </linearGradient>
          <linearGradient id="elijahGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function WineCounter() {
  const { wineCount, setWineCount } = useSedar();
  const [elijahPoured, setElijahPoured] = useState(false);
  const drunkState = DRUNK_STATES[wineCount];

  function handleCupClick(index) {
    if (index < wineCount) {
      setWineCount(index);
    } else {
      setWineCount(index + 1);
    }
  }

  return (
    <div style={{ padding: '8px 0' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#000080', marginBottom: 16 }}>
        🍷 The Four Cups of Wine
      </div>

      <div className="wine-counter" style={{ alignItems: 'center' }}>
        <div className="wine-cups">
          {/* The four participant cups */}
          {WINE_OCCASIONS.slice(0, 4).map((occasion, i) => (
            <WineCup
              key={i}
              index={i}
              filled={i < wineCount}
              onClick={() => handleCupClick(i)}
            />
          ))}

          {/* Elijah's cup — separated with a small gap */}
          <div style={{ width: 1, background: '#c0c0c0', alignSelf: 'stretch', margin: '0 8px' }} />
          <WineCup
            index={4}
            filled={elijahPoured}
            onClick={() => setElijahPoured((p) => !p)}
            elijah
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: 8 }}>
          <div className="drunk-character">{drunkState.emoji}</div>
          <div className="drunk-character-label">{drunkState.label}</div>
        </div>
      </div>

      {wineCount > 0 && (
        <div style={{
          marginTop: 12,
          padding: '6px 10px',
          background: '#fff8e1',
          border: '1px solid #e6c870',
          fontSize: 11,
        }}>
          <strong>Current cup:</strong> {WINE_OCCASIONS[wineCount - 1]}
        </div>
      )}
    </div>
  );
}
