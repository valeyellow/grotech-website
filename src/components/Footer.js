import React from 'react';

export default function Footer() {
  return (
    <footer className="container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10, flexWrap: 'wrap', color: "#A0B2C0" }}>
        <div>© Sri Neelkanth Impex Pvt. Ltd. — GROTECH</div>
        <div className="muted">Built for export-quality tools | Ludhiana, India [test]</div>
      </div>
    </footer>
  );
}
