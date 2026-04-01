import React, { useState } from "react";

function SkillsCard({ skills }) {
  const [pressed, setPressed] = useState(false);

  return (
    <div
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onMouseLeave={() => setPressed(false)}
      title={`Skill ${skills.id}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
        cursor: 'pointer',
        padding: '8px',
        background: pressed ? '#000080' : '#D4D0C8',
        borderTop: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
        borderLeft: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
        borderRight: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
        borderBottom: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
        minWidth: '60px',
        fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
        fontSize: '10px',
        color: pressed ? '#FFFFFF' : '#000000',
        userSelect: 'none',
      }}
    >
      <img
        src={skills.skill}
        alt={`Skill icon ${skills.id}`}
        style={{
          width: '32px',
          height: '32px',
          imageRendering: 'pixelated',
          objectFit: 'contain',
        }}
      />
    </div>
  );
}

export default SkillsCard;
