// Footer

function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid var(--line)",
      paddingTop: 56,
      paddingBottom: 40,
      background: "var(--bg)",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 40,
          marginBottom: 56,
        }} className="footer-grid">
          <div>
            <FystecLogo size={28} />
            <p style={{
              marginTop: 18,
              fontSize: 14,
              color: "var(--ink-2)",
              lineHeight: 1.6,
              maxWidth: "32ch",
            }}>
              Plataforma Chatfystec, CRM, sites, aplicativos, automação, segurança e infraestrutura — em um único parceiro de tecnologia.
            </p>
          </div>

          <FooterCol title="Plataforma" links={[
            { l: "Chatfystec", h: "#chatfystec" },
            { l: "CRM Fystec", h: "#crm" },
          ]} />

          <FooterCol title="Serviços" links={[
            { l: "Sites e apps", h: "#servicos" },
            { l: "Automação", h: "#servicos" },
            { l: "Segurança", h: "#servicos" },
            { l: "Infraestrutura", h: "#servicos" },
          ]} />

          <FooterCol title="Fale com a gente" links={[
            { l: "WhatsApp", h: "https://wa.me/5534997770505", ext: true },
            { l: "Pedir proposta", h: "#contato" },
          ]} />
        </div>

        <div style={{
          paddingTop: 24,
          borderTop: "1px solid var(--line)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 12,
          color: "var(--ink-3)",
          flexWrap: "wrap",
          gap: 12,
        }}>
          <span>© {new Date().getFullYear()} Fystec — Tecnologia. Todos os direitos reservados.</span>
          <span style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>
            Feito com cuidado em Patos de Minas, MG.
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <div className="tiny" style={{ marginBottom: 4 }}>{title}</div>
      {links.map((l, i) => (
        <a key={i} href={l.h}
          target={l.ext ? "_blank" : undefined}
          rel={l.ext ? "noopener" : undefined}
          style={{
            fontSize: 14,
            color: "var(--ink)",
            textDecoration: "none",
            transition: "color 0.15s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = "var(--accent)"}
          onMouseLeave={(e) => e.currentTarget.style.color = "var(--ink)"}>
          {l.l}
        </a>
      ))}
    </div>
  );
}

Object.assign(window, { Footer });
