import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const WIN_STYLE = {
  fontFamily: '"Tahoma", "MS Sans Serif", sans-serif',
  fontSize: '11px',
  color: '#000000',
};

function ContactButton({ href, icon, label, newWindow = true }) {
  const [pressed, setPressed] = useState(false);

  return (
    <a
      href={href}
      target={newWindow ? "_blank" : undefined}
      rel={newWindow ? "noopener noreferrer" : undefined}
      style={{ textDecoration: 'none' }}
    >
      <button
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        onMouseLeave={() => setPressed(false)}
        style={{
          ...WIN_STYLE,
          background: '#D4D0C8',
          padding: '8px 12px',
          cursor: 'pointer',
          borderTop: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
          borderLeft: pressed ? '2px solid #404040' : '2px solid #FFFFFF',
          borderRight: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
          borderBottom: pressed ? '2px solid #FFFFFF' : '2px solid #404040',
          minWidth: '100px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          paddingTop: pressed ? '9px' : '8px',
          paddingLeft: pressed ? '13px' : '12px',
        }}
      >
        <div style={{ fontSize: '24px', color: '#000080' }}>{icon}</div>
        <div style={{ fontSize: '11px' }}>{label}</div>
      </button>
    </a>
  );
}

function Footer() {
  return (
    <div style={{
      ...WIN_STYLE,
      background: '#3A6EA5',
      padding: '16px',
    }}>
      {/* Contact Window */}
      <div style={{
        background: '#D4D0C8',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        boxShadow: '2px 2px 0 #000000',
        maxWidth: '600px',
        margin: '0 auto',
      }}>
        {/* Title Bar */}
        <div style={{
          background: 'linear-gradient(to right, #0A246A, #A6CAF0)',
          padding: '3px 6px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '22px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FFFFFF', fontWeight: 'bold', fontSize: '11px' }}>
            <span>📧</span> Contact Me — Dialog
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

        {/* Content */}
        <div style={{ padding: '16px' }}>
          {/* Info icon + text */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
            <div style={{ fontSize: '32px' }}>ℹ️</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 'bold', fontSize: '12px', marginBottom: '4px' }}>
                Feel free to reach out
              </div>
              <div style={{ fontSize: '11px', lineHeight: '1.5' }}>
                Connect with me through any of the following platforms. I'm always happy to discuss projects, opportunities, or just chat about web development.
              </div>
            </div>
          </div>

          {/* Group box with buttons */}
          <fieldset style={{
            border: '1px solid #808080',
            borderTop: 'none',
            padding: '12px 8px 8px 8px',
            position: 'relative',
            marginTop: '8px',
          }}>
            <legend style={{
              position: 'absolute',
              top: '-9px',
              left: '8px',
              background: '#D4D0C8',
              padding: '0 4px',
              fontSize: '11px',
              fontWeight: 'bold',
              color: '#000080',
            }}>
              Contact Options
            </legend>

            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              marginTop: '4px',
            }}>
              <ContactButton
                href="mailto:opololinda@gmail.com"
                icon={<MdEmail />}
                label="Email"
                newWindow={false}
              />
              <ContactButton
                href="https://wa.me/254711852605"
                icon={<IoLogoWhatsapp />}
                label="WhatsApp"
              />
              <ContactButton
                href="https://www.linkedin.com/in/linda-opolo-91a0992bb/"
                icon={<FaLinkedin />}
                label="LinkedIn"
              />
              <ContactButton
                href="https://github.com/lindaopolo7896"
                icon={<FaGithub />}
                label="GitHub"
              />
            </div>
          </fieldset>

          {/* Divider */}
          <div style={{ height: '1px', background: '#808080', margin: '12px 0' }} />

          {/* Copyright notice */}
          <div style={{
            background: '#FFFFFF',
            borderTop: '2px solid #404040',
            borderLeft: '2px solid #404040',
            borderRight: '2px solid #FFFFFF',
            borderBottom: '2px solid #FFFFFF',
            padding: '6px 8px',
            fontSize: '11px',
            textAlign: 'center',
            color: '#404040',
          }}>
            &copy; {new Date().getFullYear()} Eleanor Opolo. All rights reserved. | Made with Windows 2000
          </div>

          {/* OK button at bottom right (classic dialog style) */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
            <button style={{
              ...WIN_STYLE,
              background: '#D4D0C8',
              padding: '3px 16px',
              cursor: 'pointer',
              borderTop: '2px solid #FFFFFF',
              borderLeft: '2px solid #FFFFFF',
              borderRight: '2px solid #404040',
              borderBottom: '2px solid #404040',
              minWidth: '75px',
              fontWeight: 'bold',
            }}>
              OK
            </button>
          </div>
        </div>
      </div>

      {/* Bottom taskbar-style info */}
      <div style={{
        background: '#D4D0C8',
        borderTop: '2px solid #FFFFFF',
        borderLeft: '2px solid #FFFFFF',
        borderRight: '2px solid #404040',
        borderBottom: '2px solid #404040',
        padding: '4px 8px',
        marginTop: '8px',
        fontSize: '11px',
        textAlign: 'center',
        color: '#404040',
      }}>
        Best viewed in Internet Explorer 5.5 or higher at 800x600 resolution
      </div>
    </div>
  );
}

export default Footer;
