import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'haggadah_state';

const defaultState = {
  participants: [],
  wineCount: 0,
  openWindows: [],   // [{ id, zIndex, x, y, width, height, minimized }]
  topZIndex: 100,
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return { ...defaultState, ...JSON.parse(saved) };
  } catch {
    // ignore
  }
  return defaultState;
}

const SedarContext = createContext(null);

export function SedarProvider({ children }) {
  const [state, setState] = useState(loadState);

  // Persist to localStorage on every change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore quota errors
    }
  }, [state]);

  const setParticipants = useCallback((participants) => {
    setState((s) => ({ ...s, participants }));
  }, []);

  const setWineCount = useCallback((count) => {
    setState((s) => ({ ...s, wineCount: Math.max(0, Math.min(4, count)) }));
  }, []);

  const openWindow = useCallback((id, defaultSize = { width: 600, height: 450 }) => {
    setState((s) => {
      const exists = s.openWindows.find((w) => w.id === id);
      const newZ = s.topZIndex + 1;
      if (exists) {
        // Bring to front and un-minimize
        return {
          ...s,
          topZIndex: newZ,
          openWindows: s.openWindows.map((w) =>
            w.id === id ? { ...w, zIndex: newZ, minimized: false } : w
          ),
        };
      }
      // Random offset so windows stack naturally
      const offset = (s.openWindows.length % 8) * 30;
      return {
        ...s,
        topZIndex: newZ,
        openWindows: [
          ...s.openWindows,
          {
            id,
            zIndex: newZ,
            x: 60 + offset,
            y: 40 + offset,
            width: defaultSize.width,
            height: defaultSize.height,
            minimized: false,
          },
        ],
      };
    });
  }, []);

  const closeWindow = useCallback((id) => {
    setState((s) => ({
      ...s,
      openWindows: s.openWindows.filter((w) => w.id !== id),
    }));
  }, []);

  const minimizeWindow = useCallback((id) => {
    setState((s) => ({
      ...s,
      openWindows: s.openWindows.map((w) =>
        w.id === id ? { ...w, minimized: true } : w
      ),
    }));
  }, []);

  const focusWindow = useCallback((id) => {
    setState((s) => {
      const newZ = s.topZIndex + 1;
      return {
        ...s,
        topZIndex: newZ,
        openWindows: s.openWindows.map((w) =>
          w.id === id ? { ...w, zIndex: newZ, minimized: false } : w
        ),
      };
    });
  }, []);

  const updateWindowBounds = useCallback((id, bounds) => {
    setState((s) => ({
      ...s,
      openWindows: s.openWindows.map((w) =>
        w.id === id ? { ...w, ...bounds } : w
      ),
    }));
  }, []);

  const resetState = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem('haggadah_plate');
    setState(defaultState);
  }, []);

  return (
    <SedarContext.Provider
      value={{
        ...state,
        setParticipants,
        setWineCount,
        openWindow,
        closeWindow,
        minimizeWindow,
        focusWindow,
        updateWindowBounds,
        resetState,
      }}
    >
      {children}
    </SedarContext.Provider>
  );
}

export function useSedar() {
  const ctx = useContext(SedarContext);
  if (!ctx) throw new Error('useSedar must be used inside SedarProvider');
  return ctx;
}
