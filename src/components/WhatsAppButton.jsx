import React, { useState } from 'react';
import ReactDOM from 'react-dom';

/* ─── WhatsApp SVG Icon ────────────────────────────────────── */
function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{ width: '26px', height: '26px', flexShrink: 0, display: 'block' }}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─── WhatsApp Floating Button ─────────────────────────────── */
export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  // Pakistani number 03472661808 → international wa.me format
  const phoneNumber = '923472661808';
  const message = encodeURIComponent("Hello! I'm interested in NaeemAbaya collection. Please assist me.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  /* Rendered via Portal directly into document.body so
     no parent transform / overflow / z-index can interfere */
  const button = (
    <>
      {/* Inject keyframes once into <head> via a style tag inside the portal */}
      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);    opacity: 0.75; }
          70%  { transform: scale(1.65); opacity: 0;    }
          100% { transform: scale(1.65); opacity: 0;    }
        }
        .wa-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 2.5px solid #25D366;
          animation: wa-pulse 2.2s ease-out infinite;
          pointer-events: none;
        }
        .wa-label-text {
          font-size: 0.78rem;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          letter-spacing: 0.02em;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          transition: opacity 0.3s ease, max-width 0.4s cubic-bezier(0.16,1,0.3,1);
        }
      `}</style>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp — 03472661808"
        title="Chat with us on WhatsApp: 03472661808"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          /* Always visible, fixed to bottom-right of the viewport */
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          zIndex: 99999,

          display: 'flex',
          alignItems: 'center',
          gap: hovered ? '10px' : '0px',

          backgroundColor: '#25D366',
          color: '#ffffff',
          textDecoration: 'none',

          /* Pill when hovered, circle when resting */
          borderRadius: hovered ? '50px' : '50%',
          padding: hovered ? '14px 22px 14px 16px' : '14px',
          maxWidth: hovered ? '240px' : '54px',
          width: hovered ? 'auto' : '54px',
          height: '54px',

          boxShadow: hovered
            ? '0 8px 28px rgba(37,211,102,0.55)'
            : '0 6px 22px rgba(37,211,102,0.40)',

          overflow: 'hidden',
          whiteSpace: 'nowrap',
          transition: 'all 0.38s cubic-bezier(0.16,1,0.3,1)',

          /* Ensure it's above modals */
          isolation: 'isolate',
        }}
      >
        {/* WhatsApp icon */}
        <WhatsAppIcon />

        {/* Slide-in text label */}
        <span
          className="wa-label-text"
          style={{
            opacity: hovered ? 1 : 0,
            maxWidth: hovered ? '160px' : '0px',
            paddingLeft: hovered ? '2px' : '0px',
          }}
        >
          <span style={{
            display: 'block',
            fontSize: '0.63rem',
            opacity: 0.85,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1px',
          }}>
            Chat with us
          </span>
          +92 347 266 1808
        </span>

        {/* Animated pulse ring */}
        <span className="wa-pulse-ring" />
      </a>
    </>
  );

  // Portal renders the button directly into document.body
  return ReactDOM.createPortal(button, document.body);
}
