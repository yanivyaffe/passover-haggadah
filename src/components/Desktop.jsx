import DesktopIcon from './DesktopIcon';
import { useSedar } from '../context/SedarContext';
import { SEDER_STEPS } from '../config/sederConfig';

export default function Desktop() {
  const { openWindow } = useSedar();

  return (
    <div className="desktop">
      <div className="desktop-icons">
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
