import DesktopIcon from './DesktopIcon';
import { useSedar } from '../context/SedarContext';
import { SEDER_STEPS, SPECIAL_MODULES } from '../config/sederConfig';

export default function Desktop() {
  const { openWindow } = useSedar();

  return (
    <div className="desktop">
      <div className="desktop-icons">
        {/* ── Special utilities ── */}
        <div className="icon-group-label">Utils</div>
        {SPECIAL_MODULES.map((mod) => (
          <DesktopIcon
            key={mod.id}
            icon={mod.icon}
            label={mod.name}
            onDoubleClick={() => openWindow(mod.id, mod.windowSize)}
          />
        ))}

        {/* ── Seder steps ── */}
        <div className="icon-group-label" style={{ marginTop: 8 }}>Seder</div>
        {SEDER_STEPS.map((step) => (
          <DesktopIcon
            key={step.id}
            icon={step.icon}
            label={step.filename}
            onDoubleClick={() => openWindow(step.id, { width: 620, height: 480 })}
          />
        ))}
      </div>
    </div>
  );
}
