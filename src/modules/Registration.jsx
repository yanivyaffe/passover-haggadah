import { useState } from 'react';
import { useSedar } from '../context/SedarContext';
import { PARTICIPANT_ICONS } from '../config/sederConfig';

export default function Registration() {
  const { participants, setParticipants } = useSedar();
  const [nameInput, setNameInput] = useState('');
  const [selectedIcon, setSelectedIcon] = useState(null);

  function addParticipant() {
    const name = nameInput.trim();
    if (!name || !selectedIcon) return;
    const newP = { id: Date.now().toString(), name, icon: selectedIcon };
    setParticipants([...participants, newP]);
    setNameInput('');
    setSelectedIcon(null);
  }

  function removeParticipant(id) {
    setParticipants(participants.filter((p) => p.id !== id));
  }

  function handleKey(e) {
    if (e.key === 'Enter') addParticipant();
  }

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <div style={{ fontSize: 20, fontFamily: 'var(--font-display)', color: '#000080', marginBottom: 4 }}>
          Welcome to Passover Seder 5785!
        </div>
        <div style={{ fontSize: 11, color: '#444', marginBottom: 10 }}>
          Each person: enter your name, pick your Passover avatar. Your icon will appear next to your assigned readings throughout the seder.
        </div>

        {/* Icon picker */}
        <div style={{ fontSize: 11, fontWeight: 'bold', marginBottom: 4 }}>Choose your avatar:</div>
        <div className="icon-picker">
          {PARTICIPANT_ICONS.map((ic) => {
            const taken = participants.some((p) => p.icon === ic.id);
            const takenBy = taken ? participants.find((p) => p.icon === ic.id) : null;
            return (
              <div
                key={ic.id}
                className={`icon-option ${selectedIcon === ic.id ? 'selected' : ''} ${taken ? 'taken' : ''}`}
                onClick={() => !taken && setSelectedIcon(ic.id)}
                title={taken ? `Taken by ${takenBy.name}` : ic.label}
              >
                <img src={ic.src} alt={ic.label} style={{ width: 32, height: 32, objectFit: 'contain', opacity: taken ? 0.35 : 1 }} />
                <span>{taken ? takenBy.name : ic.label}</span>
              </div>
            );
          })}
        </div>

        {/* Name input */}
        <div className="add-person-row">
          <input
            className="win-input"
            style={{ flex: 1 }}
            placeholder="Your name..."
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            onKeyDown={handleKey}
            maxLength={30}
          />
          <button
            className="win-btn"
            onClick={addParticipant}
            disabled={!nameInput.trim() || !selectedIcon}
          >
            Add →
          </button>
        </div>
        {!selectedIcon && nameInput.trim() && (
          <div style={{ fontSize: 10, color: 'red', marginTop: 2 }}>Please pick an avatar first.</div>
        )}
      </div>

      {/* Participant list */}
      {participants.length > 0 && (
        <>
          <div style={{ fontWeight: 'bold', fontSize: 11, marginBottom: 6, borderBottom: '1px solid #808080', paddingBottom: 4 }}>
            Tonight's Seder Participants ({participants.length})
          </div>
          <div className="registration-grid">
            {participants.map((p) => {
              const iconMeta = PARTICIPANT_ICONS.find((ic) => ic.id === p.icon);
              return (
                <div key={p.id} className="participant-card">
                  {iconMeta
                  ? <img src={iconMeta.src} alt={iconMeta.label} style={{ width: 36, height: 36, objectFit: 'contain' }} />
                  : <span style={{ fontSize: 32 }}>❓</span>
                }
                  <div className="participant-name" title={p.name}>{p.name}</div>
                  <div style={{ fontSize: 10, color: '#666' }}>{iconMeta?.label}</div>
                  <button
                    className="win-btn"
                    style={{ fontSize: 10, padding: '1px 6px', marginTop: 2 }}
                    onClick={() => removeParticipant(p.id)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}

      {participants.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '20px',
          color: '#808080',
          fontStyle: 'italic',
          fontSize: 12,
          border: '1px dashed #808080',
          marginTop: 10,
        }}>
          No participants yet — add people above to get started!
        </div>
      )}
    </div>
  );
}
