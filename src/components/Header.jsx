import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function useClock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function Header() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const clock = useClock();

  const menuItems = ["File", "Edit", "View", "Help"];
  const pageTitle = location.pathname === '/' ? 'Homepage' : location.pathname.replace('/', '').replace(/^\w/, c => c.toUpperCase());

  return (
    <header style={{ fontFamily: '"Tahoma", "MS Sans Serif", sans-serif', fontSize: '11px' }}>
      {/* Taskbar at top */}
      <div style={{
        background: 'linear-gradient(to bottom, #1F6BCC, #0A246A)',
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 8px',
        borderBottom: '1px solid #000080',
      }}>
        {/* Start Button */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <button style={{
            background: 'linear-gradient(to bottom, #3D8B37, #245F1E)',
            color: '#FFFFFF',
            fontWeight: 'bold',
            fontSize: '11px',
            padding: '2px 8px 2px 4px',
            border: '1px solid #1a4a10',
            borderTop: '1px solid #5cb857',
            borderLeft: '1px solid #5cb857',
            borderRadius: '0 10px 10px 0',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontFamily: '"Tahoma", sans-serif',
          }}>
            <span style={{ fontSize: '13px' }}>⊞</span> start
          </button>

          {/* Active window in taskbar */}
          <div style={{
            background: 'linear-gradient(to bottom, #1557AA, #2874D6)',
            color: '#FFFFFF',
            fontSize: '11px',
            padding: '2px 10px',
            border: '1px solid #0A246A',
            borderTop: '1px solid #6AACF0',
            height: '22px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            minWidth: '150px',
          }}>
            <span style={{ fontSize: '10px' }}>🖥</span>
            Eleanor Opolo - Portfolio
          </div>
        </div>

        {/* System tray */}
        <div style={{
          background: 'linear-gradient(to bottom, #1557AA, #0A246A)',
          border: '1px solid #0A246A',
          borderTop: '1px solid #4A90D9',
          height: '22px',
          display: 'flex',
          alignItems: 'center',
          padding: '0 8px',
          gap: '6px',
          fontSize: '10px',
          color: '#FFFFFF',
        }}>
          <span title="Network">🌐</span>
          <span title="Sound">🔊</span>
          <span style={{ borderLeft: '1px solid #4A90D9', paddingLeft: '6px' }}>
            {clock}
          </span>
        </div>
      </div>

      {/* Main Window Title Bar */}
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
          <span style={{ fontSize: '12px' }}>💼</span>
          Eleanor Opolo — Portfolio [{pageTitle}]
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {['_', '□', '✕'].map((btn, i) => (
            <button key={i} style={{
              width: '16px',
              height: '14px',
              background: '#D4D0C8',
              border: 'none',
              borderTop: '1px solid #FFFFFF',
              borderLeft: '1px solid #FFFFFF',
              borderRight: '1px solid #404040',
              borderBottom: '1px solid #404040',
              fontSize: '9px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
              fontFamily: 'monospace',
              color: '#000000',
              padding: 0,
            }}>
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Bar */}
      <div style={{
        background: '#D4D0C8',
        borderBottom: '1px solid #808080',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        gap: '0',
      }}>
        {menuItems.map((item) => (
          <button
            key={item}
            onMouseEnter={() => setActiveMenu(item)}
            onMouseLeave={() => setActiveMenu(null)}
            style={{
              background: activeMenu === item ? '#000080' : 'transparent',
              color: activeMenu === item ? '#FFFFFF' : '#000000',
              border: 'none',
              padding: '2px 8px',
              fontSize: '11px',
              fontFamily: '"Tahoma", sans-serif',
              cursor: 'pointer',
            }}
          >
            {item}
          </button>
        ))}

        <div style={{ width: '1px', background: '#808080', height: '16px', margin: '0 4px' }} />

        <Link
          to="/"
          style={{
            background: location.pathname === '/' ? '#000080' : 'transparent',
            color: location.pathname === '/' ? '#FFFFFF' : '#000000',
            border: 'none',
            padding: '2px 8px',
            fontSize: '11px',
            fontFamily: '"Tahoma", sans-serif',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            background: location.pathname === '/about' ? '#000080' : 'transparent',
            color: location.pathname === '/about' ? '#FFFFFF' : '#000000',
            border: 'none',
            padding: '2px 8px',
            fontSize: '11px',
            fontFamily: '"Tahoma", sans-serif',
            cursor: 'pointer',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          About
        </Link>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <a
            href="/src/assets/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            style={{
              background: '#D4D0C8',
              color: '#000000',
              fontSize: '11px',
              padding: '2px 12px',
              fontFamily: '"Tahoma", sans-serif',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
              borderTop: '2px solid #FFFFFF',
              borderLeft: '2px solid #FFFFFF',
              borderRight: '2px solid #404040',
              borderBottom: '2px solid #404040',
            }}
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Address / Toolbar bar */}
      <div style={{
        background: '#D4D0C8',
        borderBottom: '2px solid #808080',
        padding: '2px 6px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        fontSize: '11px',
      }}>
        <span style={{ color: '#404040', fontSize: '11px', whiteSpace: 'nowrap' }}>Address</span>
        <div style={{
          flex: 1,
          background: '#FFFFFF',
          borderTop: '2px solid #404040',
          borderLeft: '2px solid #404040',
          borderRight: '2px solid #FFFFFF',
          borderBottom: '2px solid #FFFFFF',
          padding: '1px 4px',
          fontSize: '11px',
          color: '#000080',
          fontFamily: '"Tahoma", sans-serif',
        }}>
          C:\Users\Visitor\Eleanor_Portfolio\{location.pathname === '/' ? 'index.htm' : location.pathname.replace('/', '') + '.htm'}
        </div>
        <button style={{
          background: '#D4D0C8',
          border: 'none',
          borderTop: '2px solid #FFFFFF',
          borderLeft: '2px solid #FFFFFF',
          borderRight: '2px solid #404040',
          borderBottom: '2px solid #404040',
          padding: '1px 8px',
          fontSize: '11px',
          fontFamily: '"Tahoma", sans-serif',
          cursor: 'pointer',
          color: '#000000',
        }}>
          Go
        </button>
      </div>
    </header>
  );
}

export default Header;
