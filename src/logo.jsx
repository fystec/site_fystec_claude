// Fystec wordmark + symbol
//
// Concept: a rounded square "speech-tile" containing a stylized 'F' formed by
// two arcs that double as conversation curves — connecting the company name
// to its core product (Chatfystec). Accent dot is the "ping" / live indicator.

function FystecMark({ size = 28, color = "currentColor" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-label="Fystec"
         style={{ display: "block" }}>
      {/* Outer rounded square — the "tile" */}
      <rect x="2" y="2" width="28" height="28" rx="8" fill={color} />
      {/* Speech-bubble tail */}
      <path d="M8 26 L6 30 L11 27.5 Z" fill={color} />
      {/* Stylized F — top arc + middle arc */}
      <path d="M10 10 H 22"
            stroke="var(--bg, #fbfaf7)" strokeWidth="2.6"
            strokeLinecap="round" />
      <path d="M10 10 V 22"
            stroke="var(--bg, #fbfaf7)" strokeWidth="2.6"
            strokeLinecap="round" />
      <path d="M10 16 H 18"
            stroke="var(--bg, #fbfaf7)" strokeWidth="2.6"
            strokeLinecap="round" />
      {/* Accent ping */}
      <circle cx="23" cy="9" r="2.4" fill="var(--accent)" />
    </svg>
  );
}

function FystecLogo({ size = 26, color = "currentColor" }) {
  return (
    <span style={{
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      color: color,
    }}>
      <FystecMark size={size} color={color} />
      <span style={{
        fontFamily: "var(--serif)",
        fontWeight: 400,
        fontSize: size * 0.78,
        letterSpacing: "-0.02em",
        lineHeight: 1,
      }}>
        Fystec
      </span>
    </span>
  );
}

Object.assign(window, { FystecMark, FystecLogo });
