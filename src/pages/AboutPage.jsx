import React from "react";
import Profile from "../assets/PROF.jpeg";
import Figma from "../assets/figma.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Design from "../assets/design.png";
import Code from "../assets/code.png";
import SkillsCard from "../components/SkillsCard";
import ServiceCard from "../components/ServiceCard";

const WIN_STYLE = {
  fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
  fontSize: '11px',
  color: '#000000',
};

const skills = [
  { id: "1", skill: Figma },
  { id: "2", skill: Html },
  { id: "3", skill: Css },
  { id: "4", skill: Js },
  { id: "5", skill: ReactImg },
  { id: "6", skill: Tailwind },
];

const services = [
  {
    id: "1",
    name: "Web Design",
    icon: Design,
    description:
      "I design modern, user-focused interfaces in Figma, creating layouts that are both visually appealing and easy to navigate.",
    button: "View Designs",
  },
  {
    id: "2",
    name: "Frontend Development",
    icon: Code,
    description:
      "I transform Figma designs into responsive and interactive web applications using React and Tailwind CSS, focusing on performance and user experience.",
    button: "Github",
  },
];

function WinWindow({ title, icon = "💻", children, style = {} }) {
  return (
    <div style={{
      background: '#D4D0C8',
      borderTop: '2px solid #FFFFFF',
      borderLeft: '2px solid #FFFFFF',
      borderRight: '2px solid #404040',
      borderBottom: '2px solid #404040',
      boxShadow: '2px 2px 0 #000000',
      ...style,
    }}>
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
          <span>{icon}</span> {title}
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
      <div style={{ padding: '10px' }}>
        {children}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={{
      ...WIN_STYLE,
      background: '#3A6EA5',
      minHeight: '100vh',
      padding: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    }}>

      {/* Page heading notification bar */}
      <div style={{
        background: '#D4D0C8',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        padding: '4px 8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#000080',
      }}>
        <span>👤</span> About Me — Eleanor Opolo
      </div>

      {/* Profile + Bio section */}
      <WinWindow title="Profile Information" icon="👤">
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Photo */}
          <div style={{
            borderTop: '2px solid #404040',
            borderLeft: '2px solid #404040',
            borderRight: '2px solid #FFFFFF',
            borderBottom: '2px solid #FFFFFF',
            overflow: 'hidden',
            width: '120px',
            height: '120px',
            flexShrink: 0,
          }}>
            <img
              src={Profile}
              alt="Eleanor Opolo"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* Bio text area */}
          <div style={{
            flex: 1,
            minWidth: '200px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}>
            <div style={{
              background: '#FFFFFF',
              borderTop: '2px solid #404040',
              borderLeft: '2px solid #404040',
              borderRight: '2px solid #FFFFFF',
              borderBottom: '2px solid #FFFFFF',
              padding: '8px',
              fontSize: '11px',
              lineHeight: '1.6',
              color: '#000000',
            }}>
              {"I'm a frontend developer with a passion for turning ideas into real, interactive experiences. I design clean and user-friendly interfaces in Figma and bring them to life using React and Tailwind CSS. As I continue to grow, I'm focused on improving my skills and building applications that are not only visually appealing but also practical and easy to use."}
            </div>

            {/* Properties rows */}
            <div style={{
              background: '#FFFFFF',
              borderTop: '2px solid #404040',
              borderLeft: '2px solid #404040',
              borderRight: '2px solid #FFFFFF',
              borderBottom: '2px solid #FFFFFF',
              fontSize: '11px',
            }}>
              {[
                { label: 'Name:', value: 'Eleanor Opolo' },
                { label: 'Role:', value: 'Frontend Engineer' },
                { label: 'Location:', value: 'Kenya' },
                { label: 'Email:', value: 'opololinda@gmail.com' },
              ].map(({ label, value }, i) => (
                <div key={label} style={{
                  display: 'flex',
                  borderBottom: i < 3 ? '1px solid #D4D0C8' : 'none',
                  padding: '3px 8px',
                }}>
                  <div style={{ width: '80px', fontWeight: 'bold', color: '#404040' }}>{label}</div>
                  <div style={{ color: '#000080' }}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WinWindow>

      {/* Skills window */}
      <WinWindow title="Skills — Control Panel" icon="⚙️">
        {/* Toolbar-style skills display */}
        <div style={{
          background: '#FFFFFF',
          borderTop: '2px solid #404040',
          borderLeft: '2px solid #404040',
          borderRight: '2px solid #FFFFFF',
          borderBottom: '2px solid #FFFFFF',
          padding: '8px',
          marginBottom: '8px',
          fontSize: '11px',
          color: '#000080',
          fontWeight: 'bold',
        }}>
          Installed Technologies
        </div>

        <div style={{
          display: 'flex',
          gap: '6px',
          flexWrap: 'wrap',
          padding: '4px',
          background: '#D4D0C8',
          borderTop: '2px solid #404040',
          borderLeft: '2px solid #404040',
          borderRight: '2px solid #FFFFFF',
          borderBottom: '2px solid #FFFFFF',
        }}>
          {skills.map((skill) => (
            <SkillsCard key={skill.id} skills={skill} />
          ))}
        </div>

        {/* Progress bars for each skill */}
        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ fontSize: '11px', fontWeight: 'bold', color: '#000080', marginBottom: '4px' }}>
            Proficiency Levels:
          </div>
          {[
            { name: 'HTML / CSS', pct: 92 },
            { name: 'JavaScript', pct: 80 },
            { name: 'React', pct: 88 },
            { name: 'Tailwind CSS', pct: 85 },
            { name: 'Figma', pct: 78 },
          ].map(({ name, pct }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '100px', fontSize: '11px', whiteSpace: 'nowrap' }}>{name}</span>
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
                  width: `${pct}%`,
                  height: '100%',
                  background: 'repeating-linear-gradient(90deg, #000080 0px, #000080 10px, #5078C8 10px, #5078C8 12px)',
                }} />
              </div>
              <span style={{ width: '32px', fontSize: '11px', textAlign: 'right' }}>{pct}%</span>
            </div>
          ))}
        </div>
      </WinWindow>

      {/* Services section */}
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
          height: '22px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFFFFF', fontWeight: 'bold', fontSize: '11px' }}>
            <span>🛠</span> Services — Programs
          </div>
        </div>

        <div style={{ padding: '10px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 'bold',
            color: '#000080',
            marginBottom: '8px',
            paddingBottom: '4px',
            borderBottom: '1px solid #808080',
          }}>
            Available Programs
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default AboutPage;
