import { useRef } from 'react';
import { Rnd } from 'react-rnd';
import { useSedar } from '../context/SedarContext';

export default function Window({ id, title, icon, children, defaultSize }) {
  const { openWindows, closeWindow, minimizeWindow, focusWindow, updateWindowBounds } = useSedar();
  const win = openWindows.find((w) => w.id === id);

  if (!win || win.minimized) return null;

  const { x, y, width, height, zIndex } = win;

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
        <div className="window-body">
          {children}
        </div>
      </div>
    </Rnd>
  );
}
