// Hero — 3 layout variations

function Hero({ layout = "editorial" }) {
  return (
    <section id="top" style={{
      paddingTop: "calc(var(--section-y) + 40px)",
      paddingBottom: "var(--section-y)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div className="container">
        {layout === "editorial" && <HeroEditorial />}
        {layout === "centered" && <HeroCentered />}
        {layout === "split" && <HeroSplit />}
      </div>
    </section>
  );
}

function HeroEditorial() {
  return (
    <div>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 56,
        flexWrap: "wrap",
        gap: 16,
      }} className="rise">
        <span className="eyebrow">Fystec — desde 2019</span>
        <span className="tiny" style={{ color: "var(--ink-3)" }}>
          Tecnologia • Atendimento • Infraestrutura
        </span>
      </div>

      <h1 className="display rise-2" style={{ maxWidth: "16ch" }}>
        Tecnologia que <em>conversa</em><br/>
        com o seu negócio.
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1.1fr 1fr",
        gap: 48,
        marginTop: 64,
        alignItems: "end",
      }} className="hero-grid">
        <p className="lead rise-3" style={{ maxWidth: "44ch" }}>
          Centralize WhatsApp, Instagram, e‑mail e chatbot no <em style={{ color: "var(--accent)", fontStyle: "italic", fontFamily: "var(--serif)" }}>Chatfystec</em> — um número, vários atendentes, histórico completo e relatórios sob medida. Mais um time de tecnologia para o que vier depois.
        </p>

        <div className="rise-4" style={{ display: "flex", flexDirection: "column", gap: 24, alignItems: "flex-start" }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="#chatfystec" className="btn btn--primary">
              Conhecer o Chatfystec <ArrowRight size={16} className="arrow" />
            </a>
            <a href="https://wa.me/5534997770505" target="_blank" rel="noopener" className="btn btn--ghost">
              <WhatsApp size={16} /> Pedir proposta
            </a>
          </div>
          <div className="scroll-cue">
            <span className="line"></span>
            Role para explorar
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </div>
  );
}

function HeroCentered() {
  return (
    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 28 }}>
      <span className="eyebrow rise" style={{ justifyContent: "center" }}>Fystec — Plataforma & Serviços</span>
      <h1 className="display rise-2" style={{ maxWidth: "18ch" }}>
        Atendimento, automação e <em>infraestrutura</em> em um só lugar.
      </h1>
      <p className="lead rise-3" style={{ textAlign: "center", margin: "0 auto" }}>
        Do WhatsApp da empresa ao firewall do servidor — tudo cuidado por um time só.
      </p>
      <div className="rise-4" style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginTop: 8 }}>
        <a href="#chatfystec" className="btn btn--primary">
          Conhecer o Chatfystec <ArrowRight size={16} className="arrow" />
        </a>
        <a href="https://wa.me/5534997770505" target="_blank" rel="noopener" className="btn btn--ghost">
          <WhatsApp size={16} /> Pedir proposta
        </a>
      </div>
    </div>
  );
}

function HeroSplit() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 56,
      alignItems: "center",
    }} className="hero-grid">
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <span className="eyebrow rise">Fystec</span>
        <h1 className="display rise-2" style={{ fontSize: "clamp(40px, 5.5vw, 80px)" }}>
          Um número.<br/>Um time.<br/><em>Tudo conectado.</em>
        </h1>
        <p className="lead rise-3">
          O Chatfystec organiza o WhatsApp da sua empresa com permissões por atendente, SLA, histórico completo e relatórios — e a Fystec cuida do resto da sua tecnologia.
        </p>
        <div className="rise-4" style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#chatfystec" className="btn btn--primary">Ver demo <ArrowRight size={16} className="arrow"/></a>
          <a href="https://wa.me/5534997770505" target="_blank" rel="noopener" className="btn btn--ghost">
            <WhatsApp size={16}/> Falar agora
          </a>
        </div>
      </div>
      <div className="rise-3" style={{ aspectRatio: "4/5", maxHeight: 540, justifySelf: "end", width: "100%" }}>
        <HeroVisual />
      </div>
      <style>{`
        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function HeroVisual() {
  return (
    <div style={{
      width: "100%", height: "100%",
      background: "var(--bg-warm)",
      borderRadius: 20,
      border: "1px solid var(--line)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 32, left: 32, right: 32,
        fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink-2)",
      }}>
        “Atendimento que não esquece ninguém.”
      </div>
      <div style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
        <FystecMark size={48} color="var(--ink)" />
      </div>
    </div>
  );
}

Object.assign(window, { Hero });
