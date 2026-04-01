import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const WIN_STYLE = {
  fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
  fontSize: '11px',
  color: '#000000',
};

function WelcomeDialog({ onClose }) {
  const [pressed, setPressed] = useState(false);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.35)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        ...WIN_STYLE,
        background: '#D4D0C8',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        boxShadow: '4px 4px 0 #000000',
        width: '360px',
        maxWidth: '95vw',
      }}>
        {/* Title bar */}
        <div style={{
          background: 'linear-gradient(to right, #0A246A, #A6CAF0)',
          padding: '3px 6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '22px',
          userSelect: 'none',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFFFFF', fontWeight: 'bold', fontSize: '11px' }}>
            <span>ℹ️</span> Welcome to Eleanor&apos;s Portfolio
          </div>
          <button
            onClick={onClose}
            style={{
              width: '16px', height: '14px',
              background: '#D4D0C8',
              borderTop: '1px solid #FFFFFF', borderLeft: '1px solid #FFFFFF',
              borderRight: '1px solid #404040', borderBottom: '1px solid #404040',
              fontSize: '9px', cursor: 'pointer',
              fontFamily: 'monospace', color: '#000000', padding: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>✕</button>
        </div>

        {/* Body */}
        <div style={{ padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '36px', flexShrink: 0 }}>💼</div>
          <div>
            <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '8px' }}>
              Eleanor Opolo — Portfolio v1.0
            </div>
            <div style={{ fontSize: '11px', lineHeight: '1.6' }}>
              Welcome! This portfolio is best experienced with Tahoma font, a 800x600 monitor, and a warm cup of tea.
            </div>
            <div style={{ fontSize: '11px', marginTop: '8px', color: '#000080' }}>
              Click OK to continue.
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: '#808080', margin: '0 8px' }} />

        {/* Buttons */}
        <div style={{ padding: '10px 12px', display: 'flex', justifyContent: 'center', gap: '8px' }}>
          <button
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => { setPressed(false); onClose(); }}
            onMouseLeave={() => setPressed(false)}
            onClick={onClose}
            style={{
              ...WIN_STYLE,
              background: '#D4D0C8',
              padding: '3px 24px',
              cursor: 'pointer',
              borderTop: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
              borderLeft: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
              borderRight: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
              borderBottom: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
              minWidth: '75px',
              fontWeight: 'bold',
              outline: '1px dotted #000000',
              outlineOffset: '-4px',
            }}
          >
            OK
          </button>
          <button
            onClick={onClose}
            style={{
              ...WIN_STYLE,
              background: '#D4D0C8',
              padding: '3px 24px',
              cursor: 'pointer',
              borderTop: '2px solid #FFFFFF',
              borderLeft: '2px solid #FFFFFF',
              borderRight: '2px solid #404040',
              borderBottom: '2px solid #404040',
              minWidth: '75px',
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div style={{
      background: '#3A6EA5',
      minHeight: '100vh',
      fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
      fontSize: '11px',
    }}>
      {showWelcome && <WelcomeDialog onClose={() => setShowWelcome(false)} />}

      <Header />

      <Routes>
        <Route element={<HomePage />} index />
        <Route element={<AboutPage />} path="/about" />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
