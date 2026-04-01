import React from "react";
import ProjectCard from "./ProjectCard";
import BingeImg from "../assets/bingeBox.png";
import BeatBoxImg from "../assets/beatbox.png";

const projects = [
  {
    id: 1,
    title: "BingeBox",
    description:
      "BingeBox is a frontend movie discovery application that integrates the TMDB API to display trending, popular, and top-rated films. It includes dynamic search, genre filtering, and a watchlist feature implemented with localStorage for client-side persistence.",
    image: BingeImg,
    tech: [
      "React",
      "React Router DOM",
      "TanStack React Query",
      "Tailwind CSS",
      "TMDB API",
      "LocalStorage",
    ],
    liveLink: "https://binge-box-chi.vercel.app/",
    githubLink: "https://github.com/lindaopolo7896/BingeBox",
    figmaLink:
      "https://www.figma.com/design/aqe5q8C6hkRWzCB6E8EOni/BingeBox?node-id=3-46&t=F35NHyTUEGoraRCt-1",
  },
  {
    id: 2,
    title: "Beat Box",
    description:
      "BeatBox is a music discovery web application that allows users to explore trending tracks, search for artists and songs, and browse music by genre. The app integrates with a music API to display real-time data and presents it through a responsive interface with both light and dark modes.",
    image: BeatBoxImg,
    tech: ["React", "Tailwind CSS"],
    liveLink: "https://your-portfolio.com",
    githubLink: "https://github.com/yourusername/portfolio",
  },
];

function Projects() {
  return (
    <div
      id="projects"
      style={{
        fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
        fontSize: '11px',
        background: '#3A6EA5',
        padding: '16px',
      }}
    >
      {/* Section window */}
      <div style={{
        background: '#D4D0C8',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        boxShadow: '2px 2px 0 #000000',
      }}>
        {/* Title bar */}
        <div style={{
          background: 'linear-gradient(to right, #0A246A, #A6CAF0)',
          padding: '3px 6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '22px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFFFFF', fontWeight: 'bold', fontSize: '11px' }}>
            <span>📁</span> My Work — Windows Explorer
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

        {/* Toolbar */}
        <div style={{
          background: '#D4D0C8',
          borderBottom: '1px solid #808080',
          padding: '3px 6px',
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
          fontSize: '11px',
        }}>
          <button style={{
            background: '#D4D0C8',
            borderTop: '2px solid #FFFFFF', borderLeft: '2px solid #FFFFFF',
            borderRight: '2px solid #404040', borderBottom: '2px solid #404040',
            padding: '2px 8px', fontSize: '11px',
            fontFamily: '"Tahoma", sans-serif', cursor: 'pointer',
          }}>⬅ Back</button>
          <button style={{
            background: '#D4D0C8',
            borderTop: '2px solid #FFFFFF', borderLeft: '2px solid #FFFFFF',
            borderRight: '2px solid #404040', borderBottom: '2px solid #404040',
            padding: '2px 8px', fontSize: '11px',
            fontFamily: '"Tahoma", sans-serif', cursor: 'pointer',
            color: '#808080',
          }}>➡ Forward</button>
          <div style={{ width: '1px', background: '#808080', height: '16px', margin: '0 2px' }} />
          <button style={{
            background: '#D4D0C8',
            borderTop: '2px solid #FFFFFF', borderLeft: '2px solid #FFFFFF',
            borderRight: '2px solid #404040', borderBottom: '2px solid #404040',
            padding: '2px 8px', fontSize: '11px',
            fontFamily: '"Tahoma", sans-serif', cursor: 'pointer',
          }}>🏠 Home</button>
        </div>

        {/* Explorer layout */}
        <div style={{ display: 'flex', minHeight: '400px' }}>
          {/* Sidebar */}
          <div style={{
            width: '160px',
            minWidth: '160px',
            borderRight: '2px solid #808080',
            background: '#D4D0C8',
            padding: '8px',
            fontSize: '11px',
          }}>
            <div style={{ fontWeight: 'bold', color: '#000080', marginBottom: '8px', fontSize: '11px' }}>
              File and Folder Tasks
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {['Make a new folder', 'Publish folder', 'Share folder'].map(item => (
                <div key={item} style={{ color: '#000080', fontSize: '11px', cursor: 'pointer', textDecoration: 'underline', paddingLeft: '8px' }}>
                  {item}
                </div>
              ))}
            </div>

            <div style={{ height: '1px', background: '#808080', margin: '12px 0' }} />

            <div style={{ fontWeight: 'bold', color: '#000080', marginBottom: '8px', fontSize: '11px' }}>
              Other Places
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {['My Computer', 'My Documents', 'Desktop'].map(item => (
                <div key={item} style={{ color: '#000080', fontSize: '11px', cursor: 'pointer', textDecoration: 'underline', paddingLeft: '8px' }}>
                  🗂 {item}
                </div>
              ))}
            </div>

            <div style={{ height: '1px', background: '#808080', margin: '12px 0' }} />

            <div style={{ fontWeight: 'bold', color: '#000080', marginBottom: '8px', fontSize: '11px' }}>
              Details
            </div>
            <div style={{
              background: '#FFFFFF',
              borderTop: '2px solid #404040',
              borderLeft: '2px solid #404040',
              borderRight: '2px solid #FFFFFF',
              borderBottom: '2px solid #FFFFFF',
              padding: '6px',
              fontSize: '11px',
            }}>
              <div style={{ fontWeight: 'bold' }}>Projects Folder</div>
              <div style={{ color: '#404040', marginTop: '4px' }}>{projects.length} items</div>
            </div>
          </div>

          {/* Main content area */}
          <div style={{ flex: 1, padding: '12px', background: '#FFFFFF', borderTop: '2px solid #404040', borderLeft: '2px solid #404040' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '16px',
            }}>
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>

        {/* Status bar */}
        <div style={{
          background: '#D4D0C8',
          borderTop: '1px solid #808080',
          padding: '2px 8px',
          display: 'flex',
          gap: '8px',
          fontSize: '11px',
          fontFamily: '"Tahoma", sans-serif',
        }}>
          <div style={{ borderRight: '1px solid #808080', paddingRight: '8px' }}>
            {projects.length} object(s)
          </div>
          <div>Ready</div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
