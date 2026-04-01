import React, { useState } from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const WIN_STYLE = {
  fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
  fontSize: '11px',
  color: '#000000',
};

const desktopIcons = [
  { id: 1, icon: '💼', label: 'My Portfolio', href: '#projects' },
  { id: 2, icon: '📄', label: 'Resume.pdf', href: '/src/assets/cv.pdf' },
  { id: 3, icon: '📧', label: 'Email Me', href: 'mailto:opololinda@gmail.com' },
  { id: 4, icon: '🐙', label: 'GitHub', href: 'https://github.com/lindaopolo7896' },
  { id: 5, icon: '💼', label: 'LinkedIn', href: 'https://www.linkedin.com/in/linda-opolo-91a0992bb/' },
  { id: 6, icon: '🗑', label: 'Recycle Bin', href: '#' },
];

function DesktopIcon({ icon, label, href }) {
  const [selected, setSelected] = useState(false);

  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      onClick={() => setSelected(true)}
      style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', width: '64px' }}
    >
      <div
        onMouseEnter={() => setSelected(true)}
        onMouseLeave={() => setSelected(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3px',
          cursor: 'pointer',
          padding: '4px',
          background: selected ? 'rgba(0,0,128,0.4)' : 'transparent',
          outline: selected ? '1px dotted #FFFFFF' : 'none',
        }}
      >
        <span style={{ fontSize: '28px', filter: selected ? 'brightness(1.3)' : 'none' }}>{icon}</span>
        <span style={{
          ...WIN_STYLE,
          color: '#FFFFFF',
          fontSize: '11px',
          textShadow: '1px 1px 2px #000000',
          textAlign: 'center',
          lineHeight: '1.2',
          background: selected ? '#000080' : 'transparent',
          padding: '1px 2px',
          maxWidth: '60px',
          wordBreak: 'break-word',
        }}>
          {label}
        </span>
      </div>
    </a>
  );
}

function HomePage() {
  return (
    <div style={{ background: '#3A6EA5', position: 'relative' }}>
      {/* Desktop icon strip on the left side */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 10,
      }}>
        {desktopIcons.map((item) => (
          <DesktopIcon key={item.id} icon={item.icon} label={item.label} href={item.href} />
        ))}
      </div>

      {/* Main content, padded to avoid the desktop icons */}
      <div style={{ paddingLeft: '80px' }}>
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

export default HomePage;
