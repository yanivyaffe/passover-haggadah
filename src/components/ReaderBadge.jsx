import { useSedar } from '../context/SedarContext';
import { PARTICIPANT_ICONS } from '../config/sederConfig';

/**
 * Each reading slot has a globally unique slotIndex (0, 1, 2, ...) assigned
 * in seder order. Assignment = participants[slotIndex % participants.length],
 * so readings loop evenly through the registered roster.
 */
export default function ReaderBadge({ slotIndex, cue = 'reads this part' }) {
  const { participants } = useSedar();

  if (participants.length === 0) return null;

  const participant = participants[slotIndex % participants.length];
  const iconMeta = PARTICIPANT_ICONS.find((ic) => ic.id === participant.icon);

  const iconEl = iconMeta?.src
    ? <img src={iconMeta.src} alt={iconMeta.label} style={{ width: 18, height: 18, objectFit: 'contain' }} />
    : <span className="badge-icon">📖</span>;

  return (
    <div className="reader-badge">
      {iconEl}
      <span className="badge-name">{participant.name}</span>
      <span className="badge-cue">— {cue}</span>
    </div>
  );
}
