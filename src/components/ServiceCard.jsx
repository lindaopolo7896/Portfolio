import React, { useState } from "react";

const WIN_STYLE = {
  fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
  fontSize: '11px',
  color: '#000000',
};

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...WIN_STYLE,
        background: '#D4D0C8',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        boxShadow: hovered ? '3px 3px 0 #000000' : '2px 2px 0 #000000',
        transform: hovered ? 'translate(-1px, -1px)' : 'none',
        transition: 'transform 0.1s',
        flex: '1',
        minWidth: '220px',
      }}
    >
      {/* Title bar */}
      <div style={{
        background: hovered
          ? 'linear-gradient(to right, #0A246A, #A6CAF0)'
          : 'linear-gradient(to right, #808080, #A0A0A0)',
        padding: '3px 6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '22px',
        userSelect: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFFFFF', fontWeight: 'bold', fontSize: '11px' }}>
          <img src={service.icon} alt={service.name} style={{ width: '14px', height: '14px', imageRendering: 'pixelated' }} />
          {service.name}
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {['_', '□', '✕'].map((btn, i) => (
            <button key={i} style={{
              width: '16px', height: '14px',
              background: '#D4D0C8',
              borderTop: '1px solid #FFFFFF', borderLeft: '1px solid #FFFFFF',
              borderRight: '1px solid #404040', borderBottom: '1px solid #404040',
              fontSize: '9px', cursor: 'pointer',
              fontFamily: 'monospace', color: '#000000', padding: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>{btn}</button>
          ))}
        </div>
      </div>

      {/* Content area */}
      <div style={{ padding: '10px' }}>
        <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
          <img
            src={service.icon}
            alt={service.name}
            style={{ width: '32px', height: '32px', imageRendering: 'pixelated', objectFit: 'contain', flexShrink: 0 }}
          />
          <div style={{
            background: '#FFFFFF',
            flex: 1,
            borderTop: '2px solid #404040',
            borderLeft: '2px solid #404040',
            borderRight: '2px solid #FFFFFF',
            borderBottom: '2px solid #FFFFFF',
            padding: '6px',
            fontSize: '11px',
            lineHeight: '1.5',
          }}>
            {service.description}
          </div>
        </div>

        {/* Button */}
        <button
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onMouseLeave={() => setPressed(false)}
          style={{
            ...WIN_STYLE,
            background: '#D4D0C8',
            padding: '3px 16px',
            cursor: 'pointer',
            borderTop: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
            borderLeft: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
            borderRight: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
            borderBottom: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
            paddingTop: pressed ? '4px' : '3px',
            paddingLeft: pressed ? '17px' : '16px',
          }}
        >
          {service.button}
        </button>
      </div>

      {/* Status bar */}
      <div style={{
        borderTop: '1px solid #808080',
        padding: '2px 6px',
        fontSize: '11px',
        color: '#404040',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}>
        <span>📄</span> {service.name} service
      </div>
    </div>
  );
}

export default ServiceCard;
