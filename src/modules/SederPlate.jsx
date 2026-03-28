import { useState, useRef, useEffect } from 'react';
import { Rnd } from 'react-rnd';
import { SEDER_PLATE_ITEMS } from '../config/sederConfig';

const PLATE_STORAGE_KEY = 'haggadah_plate';
const PLATE_SIZE = 320;

function loadPlateState() {
  try {
    const saved = localStorage.getItem(PLATE_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return null;
}

const DEFAULT_SIDEBAR = SEDER_PLATE_ITEMS.map(({ id, name, label, emoji, description }) => ({
  id, name, label, emoji, description, isCustom: false,
}));

export default function SederPlate() {
  const saved = loadPlateState();

  const [sidebarItems, setSidebarItems] = useState(() => saved?.sidebarItems ?? DEFAULT_SIDEBAR);
  const [plateItems, setPlateItems]     = useState(() => saved?.plateItems   ?? []);

  // Popup state
  const [popup, setPopup] = useState(null); // { item, source, x, y, desc, dirty }
  const popupRef = useRef(null);

  // Add dialog state
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [newItem, setNewItem] = useState({ emoji: '', name: '', description: '' });

  // Drag state
  const [isDragOver, setIsDragOver] = useState(false);
  const plateRef    = useRef(null);
  const dragIdRef   = useRef(null);
  const wasDragged  = useRef(false);

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(PLATE_STORAGE_KEY, JSON.stringify({ sidebarItems, plateItems }));
    } catch {}
  }, [sidebarItems, plateItems]);

  // Close popup on outside click
  useEffect(() => {
    function onDown(e) {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setPopup(null);
      }
    }
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, []);

  // ── Open popup near clicked element ──
  function openPopup(item, source, anchorEl) {
    const rect = anchorEl.getBoundingClientRect();
    const x = Math.min(rect.right + 8, window.innerWidth - 230);
    const y = Math.max(8, Math.min(rect.top, window.innerHeight - 260));
    setPopup({ item, source, x, y, desc: item.description, dirty: false });
  }

  function updatePopupDesc(desc) {
    setPopup((p) => ({ ...p, desc, dirty: desc !== p.item.description }));
  }

  function savePopup() {
    if (!popup) return;
    const { item, source, desc } = popup;
    if (source === 'plate') {
      setPlateItems((prev) => prev.map((i) => i.id === item.id ? { ...i, description: desc } : i));
    } else {
      setSidebarItems((prev) => prev.map((i) => i.id === item.id ? { ...i, description: desc } : i));
    }
    setPopup(null);
  }

  function removeFromPlate() {
    if (!popup || popup.source !== 'plate') return;
    const { x, y, ...rest } = plateItems.find((i) => i.id === popup.item.id) ?? popup.item;
    setPlateItems((prev) => prev.filter((i) => i.id !== popup.item.id));
    setSidebarItems((prev) => [...prev, rest]);
    setPopup(null);
  }

  // ── Drag: sidebar → plate ──
  function handleSidebarDragStart(e, item) {
    dragIdRef.current = item.id;
    e.dataTransfer.effectAllowed = 'move';
  }

  function handlePlateDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDragOver(true);
  }

  function handlePlateDragLeave(e) {
    if (!plateRef.current?.contains(e.relatedTarget)) setIsDragOver(false);
  }

  function handlePlateDrop(e) {
    e.preventDefault();
    setIsDragOver(false);
    const id = dragIdRef.current;
    if (!id) return;
    const item = sidebarItems.find((i) => i.id === id);
    if (!item) return;
    const rect = plateRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(PLATE_SIZE - 72, e.clientX - rect.left - 36));
    const y = Math.max(0, Math.min(PLATE_SIZE - 72, e.clientY - rect.top - 36));
    setSidebarItems((prev) => prev.filter((i) => i.id !== id));
    setPlateItems((prev) => [...prev, { ...item, x, y }]);
    dragIdRef.current = null;
  }

  // ── Add custom item ──
  function handleAddItem() {
    const emoji = newItem.emoji.trim();
    const name  = newItem.name.trim();
    if (!emoji || !name) return;
    setSidebarItems((prev) => [
      ...prev,
      { id: `custom-${Date.now()}`, emoji, name, label: name, description: newItem.description.trim(), isCustom: true },
    ]);
    setNewItem({ emoji: '', name: '', description: '' });
    setShowAddDialog(false);
  }

  function deleteSidebarItem(id) {
    if (popup?.item.id === id) setPopup(null);
    setSidebarItems((prev) => prev.filter((i) => i.id !== id));
  }

  return (
    <div style={{ userSelect: 'none' }}>
      {/* Header */}
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 20, color: '#000080', marginBottom: 4 }}>
        🍽️ The Seder Plate
      </div>
      <div style={{ fontSize: 11, color: '#444', marginBottom: 10 }}>
        Drag items onto the plate. Click any item for its description.
      </div>

      {/* ── Two-column layout ── */}
      <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>

        {/* ── Sidebar ── */}
        <div style={{ width: 180, flexShrink: 0 }}>
          <div style={{
            fontSize: 11, fontWeight: 'bold', color: '#000080',
            borderBottom: '1px solid #808080', paddingBottom: 3, marginBottom: 6,
            fontFamily: 'var(--font-ui)',
          }}>
            Items — drag to plate
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginBottom: 8 }}>
            {sidebarItems.length === 0 && (
              <div style={{ fontSize: 10, color: '#888', fontFamily: 'var(--font-ui)', padding: '4px 0' }}>
                All items are on the plate.
              </div>
            )}
            {sidebarItems.map((item) => (
              <div
                key={item.id}
                draggable
                onDragStart={(e) => handleSidebarDragStart(e, item)}
                onClick={(e) => { e.stopPropagation(); openPopup(item, 'sidebar', e.currentTarget); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '4px 6px',
                  background: popup?.item.id === item.id ? '#e8e8ff' : 'white',
                  borderTop: '2px solid #808080', borderLeft: '2px solid #808080',
                  borderRight: '2px solid #fff', borderBottom: '2px solid #fff',
                  cursor: 'pointer', fontSize: 11, fontFamily: 'var(--font-ui)',
                  outline: popup?.item.id === item.id ? '1px solid #000080' : 'none',
                }}
              >
                <span style={{ fontSize: 20, lineHeight: 1, flexShrink: 0 }}>{item.emoji}</span>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <div style={{ fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {item.name}
                  </div>
                  {item.label && item.label !== item.name && (
                    <div style={{ color: '#666', fontSize: 10 }}>{item.label}</div>
                  )}
                </div>
                {item.isCustom && (
                  <button
                    className="window-ctrl-btn"
                    style={{ fontSize: 9, flexShrink: 0, padding: '1px 3px' }}
                    onClick={(e) => { e.stopPropagation(); deleteSidebarItem(item.id); }}
                    title="Delete"
                  >✕</button>
                )}
              </div>
            ))}
          </div>

          <button
            className="win-btn"
            style={{ width: '100%', fontSize: 11, padding: '4px 0' }}
            onClick={() => setShowAddDialog(true)}
          >
            + Add Custom Item
          </button>
        </div>

        {/* ── Plate ── */}
        <div
          ref={plateRef}
          style={{
            position: 'relative',
            width: PLATE_SIZE, height: PLATE_SIZE,
            borderRadius: '50%',
            background: isDragOver
              ? 'radial-gradient(circle, #f0e8d0 0%, #e0cc90 60%, #b89040 100%)'
              : 'radial-gradient(circle, #f5e6c8 0%, #e8d5a3 60%, #c4a45a 100%)',
            border: `8px solid ${isDragOver ? '#6b4a00' : '#8b6914'}`,
            boxSizing: 'border-box',
            boxShadow: isDragOver
              ? 'inset 0 0 30px rgba(0,0,0,0.3), 0 4px 16px rgba(0,0,0,0.4)'
              : 'inset 0 0 20px rgba(0,0,0,0.2), 0 4px 12px rgba(0,0,0,0.3)',
            transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
            overflow: 'hidden',
            flexShrink: 0,
          }}
          onDragOver={handlePlateDragOver}
          onDragLeave={handlePlateDragLeave}
          onDrop={handlePlateDrop}
        >
          <div style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: 11, color: '#8b6914', fontWeight: 'bold',
            textAlign: 'center', lineHeight: 1.6,
            fontFamily: 'var(--font-ui)', pointerEvents: 'none',
            opacity: plateItems.length === 0 ? 0.7 : 0.2,
            transition: 'opacity 0.3s',
          }}>
            SEDER<br />PLATE
            {plateItems.length === 0 && (
              <><br /><span style={{ fontSize: 9, fontWeight: 'normal' }}>drag items here</span></>
            )}
          </div>

          {plateItems.map((item) => (
            <Rnd
              key={item.id}
              position={{ x: item.x, y: item.y }}
              size={{ width: 72, height: 72 }}
              bounds="parent"
              enableResizing={false}
              onDrag={() => { wasDragged.current = true; }}
              onDragStop={(e, d) => {
                setPlateItems((prev) => prev.map((i) => i.id === item.id ? { ...i, x: d.x, y: d.y } : i));
              }}
              onClick={(e) => {
                e.stopPropagation();
                if (!wasDragged.current) openPopup(item, 'plate', e.currentTarget);
                wasDragged.current = false;
              }}
              style={{ cursor: 'pointer', zIndex: popup?.item.id === item.id ? 10 : 1 }}
            >
              <div style={{
                width: 72, height: 72,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                background: popup?.item.id === item.id ? 'rgba(0,0,128,0.12)' : 'transparent',
                border: popup?.item.id === item.id ? '1px dashed #000080' : '1px dashed transparent',
                borderRadius: 4, userSelect: 'none',
              }}>
                <div style={{ fontSize: 34, lineHeight: 1, filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.35))' }}>
                  {item.emoji}
                </div>
                <div style={{
                  fontSize: 8, fontFamily: 'var(--font-ui)', color: '#3a0000',
                  fontWeight: 'bold', textAlign: 'center', marginTop: 2,
                  whiteSpace: 'nowrap', textShadow: '0 0 4px #f5e6c8, 0 0 4px #f5e6c8',
                }}>
                  {item.name}
                </div>
              </div>
            </Rnd>
          ))}
        </div>
      </div>

      {/* ── Popup ── */}
      {popup && (
        <div
          ref={popupRef}
          style={{
            position: 'fixed',
            left: popup.x, top: popup.y,
            width: 220,
            background: '#ffffcc',
            borderTop: '2px solid #fff', borderLeft: '2px solid #fff',
            borderRight: '2px solid #808080', borderBottom: '2px solid #808080',
            padding: '8px 10px',
            zIndex: 99999,
            boxShadow: '2px 2px 6px rgba(0,0,0,0.25)',
            fontFamily: 'var(--font-ui)', fontSize: 11,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
            <strong style={{ fontSize: 12 }}>{popup.item.emoji} {popup.item.name}</strong>
            <button className="window-ctrl-btn" onClick={() => setPopup(null)}>✕</button>
          </div>

          <textarea
            value={popup.desc}
            onChange={(e) => updatePopupDesc(e.target.value)}
            style={{
              width: '100%', height: 120, fontSize: 11, lineHeight: 1.5,
              padding: '3px 5px', boxSizing: 'border-box', resize: 'vertical',
              background: '#fffff0', border: '1px inset #808080',
            }}
          />

          <div style={{ display: 'flex', gap: 4, marginTop: 6 }}>
            {popup.dirty && (
              <button className="win-btn" style={{ flex: 1, fontSize: 11 }} onClick={savePopup}>
                Save
              </button>
            )}
            {popup.source === 'plate' && (
              <button className="win-btn" style={{ flex: 1, fontSize: 11 }} onClick={removeFromPlate}>
                ← Remove
              </button>
            )}
          </div>
        </div>
      )}

      {/* ── Add custom item dialog ── */}
      {showAddDialog && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 99999,
        }}>
          <div style={{
            background: '#c0c0c0',
            borderTop: '2px solid #fff', borderLeft: '2px solid #fff',
            borderRight: '2px solid #000', borderBottom: '2px solid #000',
            width: 280, padding: '0 0 12px',
            boxShadow: '4px 4px 0 #000',
            fontFamily: 'var(--font-ui)',
          }}>
            {/* Title bar */}
            <div style={{
              background: '#000080', color: '#fff', padding: '3px 6px',
              fontSize: 11, fontWeight: 'bold', display: 'flex',
              justifyContent: 'space-between', alignItems: 'center',
              marginBottom: 12,
            }}>
              <span>Add Seder Plate Item</span>
              <button
                className="window-ctrl-btn"
                style={{ color: '#fff', borderColor: '#fff #808080 #808080 #fff' }}
                onClick={() => setShowAddDialog(false)}
              >✕</button>
            </div>

            <div style={{ padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div>
                <div style={{ fontSize: 11, marginBottom: 2 }}>Emoji</div>
                <input
                  placeholder="🫙"
                  value={newItem.emoji}
                  onChange={(e) => setNewItem((p) => ({ ...p, emoji: e.target.value }))}
                  style={{ width: 52, fontSize: 20, padding: '2px 4px', textAlign: 'center' }}
                  maxLength={2}
                  autoFocus
                />
              </div>
              <div>
                <div style={{ fontSize: 11, marginBottom: 2 }}>Name</div>
                <input
                  placeholder="Salt Water"
                  value={newItem.name}
                  onChange={(e) => setNewItem((p) => ({ ...p, name: e.target.value }))}
                  style={{ width: '100%', fontSize: 12, padding: '2px 4px', boxSizing: 'border-box' }}
                />
              </div>
              <div>
                <div style={{ fontSize: 11, marginBottom: 2 }}>Description</div>
                <textarea
                  placeholder="What does it symbolize?"
                  value={newItem.description}
                  onChange={(e) => setNewItem((p) => ({ ...p, description: e.target.value }))}
                  style={{ width: '100%', height: 60, fontSize: 11, padding: '3px 5px', boxSizing: 'border-box', resize: 'none' }}
                />
              </div>
              <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end', marginTop: 2 }}>
                <button className="win-btn" onClick={handleAddItem}>Add to List</button>
                <button className="win-btn" onClick={() => { setShowAddDialog(false); setNewItem({ emoji: '', name: '', description: '' }); }}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
