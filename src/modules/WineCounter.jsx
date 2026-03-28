import { useSedar } from '../context/SedarContext';
import { WINE_OCCASIONS } from '../config/sederConfig';

const DRUNK_STATES = [
  { emoji: '😊'},
  { emoji: '🥳'},
  { emoji: '🤪'},
  { emoji: '😵‍💫'},
  { emoji: '🥴', label: 'L\'Chaim!!' },
];

function WineCup({ index, filled, onClick }) {
  return (
    <div className="wine-cup-wrapper" onClick={onClick} title={`Cup ${index + 1}: ${WINE_OCCASIONS[index]}`}>
      <svg width="50" height="80" viewBox="0 0 50 80" className="wine-cup">
        {/* Cup outline */}
        <path
          d="M10 5 L40 5 L35 45 Q25 52 15 45 Z"
          fill={filled ? '#6b21a8' : 'none'}
          stroke="#4a0e8f"
          strokeWidth="2"
          style={{ transition: 'fill 0.4s ease' }}
        />
        {/* Wine fill animation layer */}
        {filled && (
          <path
            d="M11 8 L39 8 L34.5 43 Q25 50 15.5 43 Z"
            fill="url(#wineGradient)"
            opacity="0.9"
          />
        )}
        {/* Stem */}
        <line x1="25" y1="45" x2="25" y2="68" stroke="#4a0e8f" strokeWidth="2.5" />
        {/* Base */}
        <line x1="12" y1="68" x2="38" y2="68" stroke="#4a0e8f" strokeWidth="3" />
        {/* Cup rim */}
        <line x1="10" y1="5" x2="40" y2="5" stroke="#4a0e8f" strokeWidth="2" />
        <defs>
          <linearGradient id="wineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#581c87" />
          </linearGradient>
        </defs>
      </svg>
      <div className="wine-cup-label">
        <strong>Cup {index + 1}</strong><br />
        {filled ? '🍷 Filled!' : '○ Empty'}
      </div>
    </div>
  );
}

export default function WineCounter() {
  const { wineCount, setWineCount } = useSedar();
  const drunkState = DRUNK_STATES[wineCount];

  function handleCupClick(index) {
    // Clicking a filled cup empties from that cup onward; clicking empty fills up to that cup
    if (index < wineCount) {
      setWineCount(index); // undo back to this cup
    } else {
      setWineCount(index + 1); // fill up to this cup
    }
  }

  return (
    <div style={{ padding: '8px 0' }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 22, color: '#000080', marginBottom: 10 }}>
        🍷 The Four Cups of Wine
      </div>
      <div style={{ fontSize: 11, color: '#444', marginBottom: 16 }}>
        Click a cup to fill it. Click a filled cup to undo. There are four cups total — one for each promise God made to the Israelites.
      </div>

      <div className="wine-counter">
        <div className="wine-cups">
          {WINE_OCCASIONS.map((occasion, i) => (
            <WineCup
              key={i}
              index={i}
              filled={i < wineCount}
              onClick={() => handleCupClick(i)}
            />
          ))}
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

      <div style={{ marginTop: 12, borderTop: '1px solid #808080', paddingTop: 8 }}>
        {WINE_OCCASIONS.map((occ, i) => (
          <div key={i} style={{ fontSize: 11, padding: '2px 0', color: i < wineCount ? '#000080' : '#888' }}>
            {i < wineCount ? '✓' : '○'} Cup {i + 1}: {occ}
          </div>
        ))}
      </div>
    </div>
  );
}
