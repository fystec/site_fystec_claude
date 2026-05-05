// Services section — sites, automação, segurança, antivírus, infraestrutura

function SectionServices() {
  const services = [
    {
      num: "03",
      title: "Sites e aplicativos sob medida",
      lead: "Do briefing ao deploy: site institucional, e‑commerce, sistema interno, app mobile. Construído do jeito que o seu negócio funciona.",
      bullets: ["Design e código sob medida", "Painel administrativo próprio", "Hospedagem e manutenção inclusas"],
      Icon: Code,
    },
    {
      num: "04",
      title: "Automação empresarial",
      lead: "Eliminamos tarefas repetitivas. Integramos seus sistemas, planilhas, ERPs e canais — para que sua equipe foque no que importa.",
      bullets: ["Integração entre sistemas", "Robôs de processo (RPA)", "Fluxos com WhatsApp e e‑mail"],
      Icon: Bolt,
    },
    {
      num: "05",
      title: "Consultoria em segurança",
      lead: "Avaliação técnica do seu ambiente, políticas, riscos e recomendações práticas. Sem jargão — com plano de ação claro.",
      bullets: ["Diagnóstico completo", "Plano de mitigação", "Acompanhamento contínuo"],
      Icon: Shield,
    },
    {
      num: "06",
      title: "Antivírus e firewall gerenciados",
      lead: "Implantação, monitoramento e gestão das ferramentas que protegem seus computadores e sua rede — 24h por dia.",
      bullets: ["Antivírus corporativo", "Firewall de borda", "Alertas e resposta a incidentes"],
      Icon: ShieldCheck,
    },
    {
      num: "07",
      title: "Contratos de infraestrutura",
      lead: "Servidores, rede, backup e suporte técnico em contrato mensal. Sua TI rodando sem você precisar pensar nela.",
      bullets: ["Suporte recorrente", "Backup e redundância", "Servidores e estações"],
      Icon: Server,
    },
  ];

  return (
    <section id="servicos" className="section section--tinted" data-screen-label="Serviços">
      <div className="container">
        <div style={{ marginBottom: 64, maxWidth: 720 }}>
          <span className="eyebrow" style={{ marginBottom: 18, display: "inline-flex" }}>Serviços Fystec</span>
          <h2 className="h1">
            Mais que uma plataforma —<br/>
            um <em>time de tecnologia</em> ao seu lado.
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {services.map((s, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "80px 1.2fr 1.5fr 0.6fr",
              gap: 32,
              alignItems: "start",
              padding: "32px 0",
              borderTop: "1px solid var(--line-strong)",
            }} className="svc-row">
              <div className="marker-num" style={{ fontSize: 28, paddingTop: 4 }}>
                {s.num}
              </div>
              <div>
                <div style={{
                  width: 44, height: 44,
                  borderRadius: 11,
                  background: "white",
                  border: "1px solid var(--line)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                  color: "var(--accent-deep)",
                }}>
                  <s.Icon size={20} />
                </div>
                <h3 className="h2" style={{ fontSize: "clamp(22px, 2.4vw, 30px)", maxWidth: "16ch" }}>
                  {s.title}
                </h3>
              </div>
              <div>
                <p className="body" style={{ marginBottom: 16, fontSize: 15.5 }}>{s.lead}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.bullets.map((b, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 14, color: "var(--ink-2)" }}>
                      <span style={{ color: "var(--accent)" }}><Check size={15}/></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div style={{ textAlign: "right" }}>
                <a href="https://wa.me/5534997770505" target="_blank" rel="noopener"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    fontSize: 13, fontWeight: 500,
                    color: "var(--ink)", textDecoration: "none",
                    padding: "8px 0",
                    borderBottom: "1px solid var(--ink)",
                  }}>
                  Conversar <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid var(--line-strong)" }}></div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .svc-row {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .svc-row > div:last-child { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { SectionServices });
