import { useState, useEffect } from 'react';
import { useSedar } from '../context/SedarContext';
import { SEDER_STEPS, SPECIAL_MODULES } from '../config/sederConfig';


const ALL_MODULES = [
  ...SPECIAL_MODULES,
  ...SEDER_STEPS.map((s) => ({
    id: s.id,
    name: s.filename,
    icon: s.icon,
  })),
];

function getModuleMeta(id) {
  return ALL_MODULES.find((m) => m.id === id) || { name: id, icon: '📄' };
}

export default function Taskbar() {
  const { openWindows, openWindow, focusWindow, minimizeWindow, resetState } = useSedar();
  const [time, setTime] = useState(new Date());
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const timeStr = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  function handleTaskbarBtn(win) {
    if (win.minimized) {
      focusWindow(win.id);
    } else {
      minimizeWindow(win.id);
    }
  }

  return (
    <div className="taskbar" onClick={() => setShowMenu(false)}>
      {/* Start button */}
      <button
        className="win-btn taskbar-start raised"
        onClick={(e) => { e.stopPropagation(); setShowMenu((v) => !v); }}
      >
        <strong style={{ marginLeft: 4 }}>Start</strong>
      </button>

      {showMenu && (
        <div
          style={{
            position: 'absolute',
            bottom: 36,
            left: 0,
            background: '#c0c0c0',
            borderTop: '2px solid #fff',
            borderLeft: '2px solid #fff',
            borderRight: '2px solid #000',
            borderBottom: '2px solid #000',
            minWidth: 180,
            zIndex: 99999,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ padding: '6px 12px', fontSize: 11, color: '#666', borderBottom: '1px solid #808080' }}>
            Passover Seder 5785
          </div>
          <button
            className="win-btn"
            style={{ width: '100%', textAlign: 'left', padding: '5px 12px', fontSize: 12 }}
            onClick={() => {
              if (window.confirm('Reset all seder progress? This will clear all participants, wine count, and open windows.')) {
                resetState();
              }
              setShowMenu(false);
            }}
          >
            🔄 Reset Seder
          </button>
        </div>
      )}

      <div className="taskbar-divider" />

      {/* Quick-launch utils */}
      {SPECIAL_MODULES.map((mod) => (
        <button
          key={mod.id}
          className="win-btn taskbar-quicklaunch"
          title={mod.name}
          onClick={() => openWindow(mod.id, mod.windowSize)}
        >
          <span style={{ fontSize: 16 }}>{mod.icon}</span>
        </button>
      ))}

      <div className="taskbar-divider" />

      {/* Open windows */}
      <div className="taskbar-windows">
        {openWindows.map((win) => {
          const meta = getModuleMeta(win.id);
          const isActive = !win.minimized;
          return (
            <button
              key={win.id}
              className={`win-btn taskbar-window-btn ${isActive ? 'active' : ''}`}
              onClick={() => handleTaskbarBtn(win)}
              title={meta.name}
            >
              <span style={{ fontSize: 12 }}>{meta.icon}</span>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', fontSize: 11 }}>
                {meta.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Clock */}
      <div className="taskbar-clock" title={time.toLocaleDateString()}>
        {timeStr}
      </div>
    </div>
  );
}
