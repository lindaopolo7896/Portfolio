import React, { useState, useEffect } from "react";
import Profile from "../assets/PROF.jpeg";

const WIN_STYLE = {
  fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
  fontSize: '11px',
  color: '#000000',
};

function WinWindow({ title, icon = "💻", children, style = {} }) {
  return (
    <div style={{
      background: '#D4D0C8',
      border: '2px solid',
      borderTopColor: '#FFFFFF',
      borderLeftColor: '#FFFFFF',
      borderRightColor: '#404040',
      borderBottomColor: '#404040',
      boxShadow: '2px 2px 0 #000000',
      ...style,
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
          <span style={{ fontSize: '12px' }}>{icon}</span>
          {title}
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {['_', '□', '✕'].map((btn, i) => (
            <button key={i} style={{
              width: '16px', height: '14px',
              background: '#D4D0C8',
              borderTop: '1px solid #FFFFFF', borderLeft: '1px solid #FFFFFF',
              borderRight: '1px solid #404040', borderBottom: '1px solid #404040',
              fontSize: '9px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'monospace', color: '#000000', padding: 0, lineHeight: 1,
            }}>{btn}</button>
          ))}
        </div>
      </div>
      {/* Content */}
      <div style={{ padding: '8px' }}>
        {children}
      </div>
    </div>
  );
}

function WinButton({ children, primary = false, onClick, style = {} }) {
  const [pressed, setPressed] = useState(false);
  return (
    <button
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      onClick={onClick}
      style={{
        ...WIN_STYLE,
        background: primary ? '#000080' : '#D4D0C8',
        color: primary ? '#FFFFFF' : '#000000',
        padding: '3px 12px',
        cursor: 'pointer',
        borderTop: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
        borderLeft: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
        borderRight: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
        borderBottom: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
        minWidth: '80px',
        textAlign: 'center',
        paddingTop: pressed ? '4px' : '3px',
        paddingLeft: pressed ? '13px' : '12px',
        ...style,
      }}
    >
      {children}
    </button>
  );
}

const marqueeKeyframes = `
@keyframes marqueeScroll {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
`;

function MarqueeText() {
  const text = "Welcome to Eleanor Opolo's Portfolio!   |   Frontend Engineer & Web Designer   |   Available for freelance work   |   React • Tailwind • Figma   |   ";
  const doubled = text + text;
  return (
    <>
      <style>{marqueeKeyframes}</style>
      <div style={{
        background: '#000080',
        color: '#FFFFFF',
        padding: '2px 0',
        fontSize: '11px',
        fontFamily: '"Tahoma", sans-serif',
        overflow: 'hidden',
        borderTop: '2px solid #404040',
        borderLeft: '2px solid #404040',
        borderRight: '2px solid #FFFFFF',
        borderBottom: '2px solid #FFFFFF',
        whiteSpace: 'nowrap',
      }}>
        <span style={{
          display: 'inline-block',
          animation: 'marqueeScroll 22s linear infinite',
          paddingLeft: '100%',
        }}>
          {doubled}
        </span>
      </div>
    </>
  );
}

function Hero() {
  const [counter, setCounter] = useState(1337);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      ...WIN_STYLE,
      background: '#3A6EA5',
      minHeight: 'calc(100vh - 80px)',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>

      {/* Marquee welcome bar */}
      <MarqueeText />

      {/* Main hero layout - two-column like a Windows dialog */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>

        {/* Left column: Profile window */}
        <WinWindow title="Eleanor_Opolo.exe" icon="👤" style={{ flex: '0 0 200px', minWidth: '180px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '130px',
              height: '130px',
              overflow: 'hidden',
              borderTop: '2px solid #404040',
              borderLeft: '2px solid #404040',
              borderRight: '2px solid #FFFFFF',
              borderBottom: '2px solid #FFFFFF',
            }}>
              <img
                src={Profile}
                alt="Eleanor Opolo"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', fontSize: '12px' }}>Eleanor Opolo</div>
              <div style={{ fontSize: '11px', color: '#404040' }}>Frontend Engineer</div>
            </div>
            {/* Fake status indicator */}
            <div style={{
              background: '#FFFFFF',
              border: '2px solid',
              borderTopColor: '#404040',
              borderLeftColor: '#404040',
              borderRightColor: '#FFFFFF',
              borderBottomColor: '#FFFFFF',
              padding: '4px 8px',
              width: '100%',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}>
              <span style={{ color: '#008000', fontWeight: 'bold' }}>●</span> Online
            </div>
            {/* Visitor counter */}
            <div style={{
              background: '#000000',
              color: '#00FF00',
              fontFamily: '"Courier New", monospace',
              fontSize: '14px',
              padding: '4px 8px',
              width: '100%',
              textAlign: 'center',
              letterSpacing: '2px',
              border: '2px inset #404040',
            }}>
              {String(counter).padStart(7, '0')}
            </div>
            <div style={{ fontSize: '10px', color: '#404040' }}>Visitor #{counter}</div>
          </div>
        </WinWindow>

        {/* Right column: Info + CTA */}
        <div style={{ flex: '1', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '10px' }}>

          {/* Welcome dialog box */}
          <WinWindow title="Welcome.txt - Notepad" icon="📄">
            <div style={{
              background: '#FFFFFF',
              borderTop: '2px solid #404040',
              borderLeft: '2px solid #404040',
              borderRight: '2px solid #FFFFFF',
              borderBottom: '2px solid #FFFFFF',
              padding: '12px',
              minHeight: '100px',
              fontFamily: '"Courier New", monospace',
              fontSize: '12px',
              lineHeight: '1.6',
              color: '#000000',
            }}>
              <div style={{ color: '#000080', fontWeight: 'bold', marginBottom: '8px' }}>
                *** ELEANOR OPOLO PORTFOLIO v1.0 ***
              </div>
              <div>Hi! I am a Frontend Developer with a</div>
              <div>passion for turning ideas into real,</div>
              <div>interactive web experiences.</div>
              <div style={{ marginTop: '8px' }}>I design clean, user-friendly interfaces</div>
              <div>in Figma and build them with React &amp;</div>
              <div>Tailwind CSS.</div>
            </div>
          </WinWindow>

          {/* Skills progress bars - classic Windows style */}
          <WinWindow title="Skills.ini" icon="⚙️">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {[
                { skill: 'React', level: 90 },
                { skill: 'Tailwind CSS', level: 85 },
                { skill: 'JavaScript', level: 80 },
                { skill: 'Figma / UI Design', level: 75 },
              ].map(({ skill, level }) => (
                <div key={skill} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: '110px', fontSize: '11px', whiteSpace: 'nowrap' }}>{skill}</span>
                  <div style={{
                    flex: 1,
                    height: '14px',
                    background: '#FFFFFF',
                    borderTop: '2px solid #404040',
                    borderLeft: '2px solid #404040',
                    borderRight: '2px solid #FFFFFF',
                    borderBottom: '2px solid #FFFFFF',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: `${level}%`,
                      height: '100%',
                      background: 'repeating-linear-gradient(90deg, #000080 0px, #000080 10px, #5078C8 10px, #5078C8 12px)',
                    }} />
                  </div>
                  <span style={{ fontSize: '11px', width: '32px', textAlign: 'right' }}>{level}%</span>
                </div>
              ))}
            </div>
          </WinWindow>

        </div>
      </div>

      {/* Action buttons - Windows dialog buttons */}
      <WinWindow title="Options" icon="🔧" style={{ maxWidth: '500px' }}>
        <div style={{ display: 'flex', gap: '8px', padding: '4px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#projects" style={{ textDecoration: 'none' }}>
            <WinButton primary style={{ minWidth: '120px' }}>
              View Projects
            </WinButton>
          </a>
          <a href="mailto:opololinda@gmail.com" style={{ textDecoration: 'none' }}>
            <WinButton style={{ minWidth: '120px' }}>
              Contact Me
            </WinButton>
          </a>
          <a href="/src/assets/cv.pdf" download target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
            <WinButton style={{ minWidth: '120px' }}>
              Download CV
            </WinButton>
          </a>
        </div>
      </WinWindow>

      {/* Status bar at bottom */}
      <div style={{
        background: '#D4D0C8',
        borderTop: '2px solid #404040',
        borderLeft: '2px solid #404040',
        borderRight: '2px solid #FFFFFF',
        borderBottom: '2px solid #FFFFFF',
        padding: '2px 8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '11px',
        fontFamily: '"Tahoma", sans-serif',
      }}>
        <div style={{
          borderRight: '1px solid #808080',
          paddingRight: '8px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <span style={{ color: '#008000' }}>●</span> Ready
        </div>
        <div style={{ borderRight: '1px solid #808080', paddingRight: '8px' }}>
          Frontend Engineer
        </div>
        <div style={{ borderRight: '1px solid #808080', paddingRight: '8px' }}>
          React | Tailwind | Figma
        </div>
        <div style={{ marginLeft: 'auto' }}>
          {new Date().toLocaleDateString()}
        </div>
      </div>

    </div>
  );
}

export default Hero;
