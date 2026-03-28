export default function ShulchanOrech() {
  return (
    <div className="reading-content">
      <div className="step-header">
        <div className="step-number">10</div>
        <div className="step-title-block">
          <h2>🍽️ Shulchan Orech — שֻׁלְחָן עוֹרֵךְ</h2>
          <p>The Festive Meal</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '20px 0' }}>
        <div style={{ fontSize: 64 }}>🍽️</div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: '#000080', marginTop: 8 }}>
          BON APPÉTIT!
        </div>
        <div style={{ fontSize: 14, marginTop: 8, fontStyle: 'italic' }}>
          Chag Sameach! Happy Holiday!
        </div>
      </div>

      <p style={{ textAlign: 'center' }}>
        It's time to eat the festive Passover meal! Enjoy, relax, and celebrate together.
      </p>

      <blockquote style={{ textAlign: 'center' }}>
        🥚 Traditionally, the meal begins with a hard-boiled egg dipped in salt water —
        symbolizing mourning for the Temple and the cycle of new life.
      </blockquote>

      <p style={{ textAlign: 'center', marginTop: 12, color: '#666' }}>
        Resume the seder after dinner with Step 11: Tzafun (finding the afikomen).
      </p>
    </div>
  );
}
