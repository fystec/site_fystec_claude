// Top navigation

function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#chatfystec", label: "Chatfystec" },
    { href: "#crm", label: "CRM" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header style={{
      position: "fixed",
      top: 0, left: 0, right: 0,
      zIndex: 100,
      transition: "all 0.25s ease",
      background: scrolled ? "rgba(251, 250, 247, 0.78)" : "transparent",
      backdropFilter: scrolled ? "blur(14px) saturate(160%)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(14px) saturate(160%)" : "none",
      borderBottom: scrolled ? "1px solid var(--line)" : "1px solid transparent",
    }}>
      <div className="container" style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: scrolled ? 64 : 78,
        transition: "height 0.25s ease",
      }}>
        <a href="#top" style={{ textDecoration: "none", color: "var(--ink)" }}>
          <FystecLogo size={26} />
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{
              padding: "10px 14px",
              fontSize: 14,
              fontWeight: 500,
              color: "var(--ink-2)",
              textDecoration: "none",
              borderRadius: 999,
              transition: "color 0.15s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = "var(--ink)"}
            onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink-2)"}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="https://wa.me/5534997770505" target="_blank" rel="noopener"
           className="btn btn--primary"
           style={{ padding: "11px 18px", fontSize: 13.5 }}>
          <WhatsApp size={16} />
          Falar conosco
        </a>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}

Object.assign(window, { Nav });
