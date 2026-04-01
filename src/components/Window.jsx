import { useRef, useState } from 'react';
import { Rnd } from 'react-rnd';
import { useSedar } from '../context/SedarContext';

const ZOOM_STEPS = [0.8, 1, 1.25, 1.5, 1.75, 2];
const DEFAULT_ZOOM = 1;

export default function Window({ id, title, icon, children, defaultSize }) {
  const { openWindows, closeWindow, minimizeWindow, focusWindow, updateWindowBounds } = useSedar();
  const [zoomIndex, setZoomIndex] = useState(ZOOM_STEPS.indexOf(DEFAULT_ZOOM));
  const win = openWindows.find((w) => w.id === id);

  if (!win || win.minimized) return null;

  const { x, y, width, height, zIndex } = win;
  const zoom = ZOOM_STEPS[zoomIndex];

  return (
    <Rnd
      style={{ zIndex, position: 'absolute' }}
      size={{ width, height }}
      position={{ x, y }}
      minWidth={280}
      minHeight={200}
      bounds="parent"
      dragHandleClassName="window-titlebar"
      onDragStop={(_e, d) => updateWindowBounds(id, { x: d.x, y: d.y })}
      onResizeStop={(_e, _dir, ref, _delta, pos) =>
        updateWindowBounds(id, {
          width: parseInt(ref.style.width),
          height: parseInt(ref.style.height),
          x: pos.x,
          y: pos.y,
        })
      }
      onMouseDown={() => focusWindow(id)}
      enableResizing
    >
      <div className="window" style={{ width: '100%', height: '100%' }}>
        <div className="window-titlebar" onMouseDown={() => focusWindow(id)}>
          <span className="window-title-icon">{icon}</span>
          <span className="window-title-text">{title}</span>
          <div className="window-controls">
            <button
              className="window-ctrl-btn"
              title="Zoom out"
              onClick={(e) => { e.stopPropagation(); setZoomIndex((i) => Math.max(0, i - 1)); }}
              disabled={zoomIndex === 0}
              style={{ fontSize: 9, fontFamily: 'var(--font-ui)', width: 22 }}
            >
              A-
            </button>
            <button
              className="window-ctrl-btn"
              title="Zoom in"
              onClick={(e) => { e.stopPropagation(); setZoomIndex((i) => Math.min(ZOOM_STEPS.length - 1, i + 1)); }}
              disabled={zoomIndex === ZOOM_STEPS.length - 1}
              style={{ fontSize: 9, fontFamily: 'var(--font-ui)', width: 22 }}
            >
              A+
            </button>
            <button
              className="window-ctrl-btn"
              title="Minimize"
              onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
            >
              _
            </button>
            <button
              className="window-ctrl-btn"
              title="Close"
              onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
            >
              ✕
            </button>
          </div>
        </div>
        <div className="window-body" style={{ zoom }}>
          {children}
        </div>
      </div>
    </Rnd>
  );
}
