import { useState, useRef } from 'react';

export default function DesktopIcon({ icon, label, onDoubleClick }) {
  const [selected, setSelected] = useState(false);
  const clickTimeout = useRef(null);
  const clickCount = useRef(0);

  function handleClick() {
    clickCount.current += 1;
    if (clickCount.current === 1) {
      setSelected(true);
      clickTimeout.current = setTimeout(() => {
        clickCount.current = 0;
      }, 300);
    } else if (clickCount.current === 2) {
      clearTimeout(clickTimeout.current);
      clickCount.current = 0;
      onDoubleClick();
    }
  }

  return (
    <div
      className={`desktop-icon ${selected ? 'selected' : ''}`}
      onClick={handleClick}
      onBlur={() => setSelected(false)}
      tabIndex={0}
    >
      <div className="icon-img" aria-hidden="true">{icon}</div>
      <div className="icon-label">{label}</div>
    </div>
  );
}
