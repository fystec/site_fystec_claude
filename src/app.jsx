// Main app — orchestrates all sections (production version)

const SITE_CONFIG = {
  "accent": "#ea580c",
  "fontPair": "fraunces",
  "heroLayout": "editorial",
  "density": "regular",
  "mockupStyle": "realistic"
};

function App() {
  const t = SITE_CONFIG;

  // Apply theme tokens to <html>
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--accent", t.accent);
    // Derive soft + deep variants from accent
    root.style.setProperty("--accent-soft", hexToSoft(t.accent));
    root.style.setProperty("--accent-deep", hexToDeep(t.accent));
    root.dataset.fontpair = t.fontPair;
    root.dataset.density = t.density;
  }, [t.accent, t.fontPair, t.density]);

  return (
    <>
      <Nav />
      <main>
        <Hero layout={t.heroLayout} />
        <SectionChatfystec mockupStyle={t.mockupStyle} />
        <SectionCRM />
        <SectionServices />
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}

// ── Color helpers — derive soft and deep variants ─────────────────────────
function hexToRgb(hex) {
  const h = hex.replace("#", "");
  const n = h.length === 3
    ? h.split("").map(c => c + c).join("")
    : h;
  return {
    r: parseInt(n.slice(0, 2), 16),
    g: parseInt(n.slice(2, 4), 16),
    b: parseInt(n.slice(4, 6), 16),
  };
}
function hexToSoft(hex) {
  const { r, g, b } = hexToRgb(hex);
  // Mix 8% color + 92% off-white
  const mix = (c) => Math.round(c * 0.08 + 252 * 0.92);
  return `rgb(${mix(r)}, ${mix(g)}, ${mix(b)})`;
}
function hexToDeep(hex) {
  const { r, g, b } = hexToRgb(hex);
  const dim = (c) => Math.max(0, Math.round(c * 0.78));
  return `rgb(${dim(r)}, ${dim(g)}, ${dim(b)})`;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
