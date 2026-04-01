import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";

const WIN_STYLE = {
  fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
  fontSize: '11px',
  color: '#000000',
};

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const [tabActive, setTabActive] = useState('info');

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
        transition: 'transform 0.1s, box-shadow 0.1s',
      }}
    >
      {/* Title Bar */}
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
          <span style={{ fontSize: '12px' }}>🗂</span>
          {project.title}
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

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #808080', background: '#D4D0C8', padding: '4px 4px 0 4px', gap: '2px' }}>
        {['info', 'preview'].map((tab) => (
          <button
            key={tab}
            onClick={() => setTabActive(tab)}
            style={{
              ...WIN_STYLE,
              padding: '2px 12px',
              cursor: 'pointer',
              background: tabActive === tab ? '#D4D0C8' : '#B0ACA4',
              borderTop: '2px solid #FFFFFF',
              borderLeft: '2px solid #FFFFFF',
              borderRight: '2px solid #404040',
              borderBottom: tabActive === tab ? '2px solid #D4D0C8' : '2px solid #404040',
              marginBottom: tabActive === tab ? '-1px' : '0',
              zIndex: tabActive === tab ? 1 : 0,
              position: 'relative',
              fontWeight: tabActive === tab ? 'bold' : 'normal',
              textTransform: 'capitalize',
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div style={{ padding: '8px' }}>
        {tabActive === 'preview' ? (
          <div style={{
            borderTop: '2px solid #404040',
            borderLeft: '2px solid #404040',
            borderRight: '2px solid #FFFFFF',
            borderBottom: '2px solid #FFFFFF',
            overflow: 'hidden',
            height: '160px',
          }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {/* Description - like a text area */}
            <div style={{
              background: '#FFFFFF',
              borderTop: '2px solid #404040',
              borderLeft: '2px solid #404040',
              borderRight: '2px solid #FFFFFF',
              borderBottom: '2px solid #FFFFFF',
              padding: '6px',
              fontSize: '11px',
              lineHeight: '1.5',
              minHeight: '80px',
              color: '#000000',
            }}>
              {project.description}
            </div>

            {/* Tech tags */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '4px', color: '#000080' }}>
                Technologies:
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
                {project.tech.map((item, index) => (
                  <span key={index} style={{
                    display: 'inline-block',
                    background: '#FFFFFF',
                    borderTop: '2px solid #404040',
                    borderLeft: '2px solid #404040',
                    borderRight: '2px solid #FFFFFF',
                    borderBottom: '2px solid #FFFFFF',
                    padding: '1px 6px',
                    fontSize: '10px',
                    color: '#000080',
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div style={{
          display: 'flex',
          gap: '4px',
          marginTop: '8px',
          paddingTop: '8px',
          borderTop: '1px solid #808080',
          flexWrap: 'wrap',
        }}>
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                ...WIN_STYLE,
                background: '#D4D0C8',
                padding: '3px 10px',
                cursor: 'pointer',
                borderTop: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                borderRight: '2px solid #404040',
                borderBottom: '2px solid #404040',
              }}>
                🌐 Live Preview
              </button>
            </a>
          )}
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                ...WIN_STYLE,
                background: '#D4D0C8',
                padding: '3px 10px',
                cursor: 'pointer',
                borderTop: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                borderRight: '2px solid #404040',
                borderBottom: '2px solid #404040',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <FaGithub /> GitHub
              </button>
            </a>
          )}
          {project.figmaLink && (
            <a href={project.figmaLink} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                ...WIN_STYLE,
                background: '#D4D0C8',
                padding: '3px 10px',
                cursor: 'pointer',
                borderTop: '2px solid #FFFFFF',
                borderLeft: '2px solid #FFFFFF',
                borderRight: '2px solid #404040',
                borderBottom: '2px solid #404040',
              }}>
                🎨 Figma
              </button>
            </a>
          )}
        </div>
      </div>

      {/* Status bar at bottom of card */}
      <div style={{
        background: '#D4D0C8',
        borderTop: '1px solid #808080',
        padding: '2px 6px',
        fontSize: '11px',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        color: '#404040',
      }}>
        <span>📁</span> {project.tech[0]} project
      </div>
    </div>
  );
}

export default ProjectCard;
