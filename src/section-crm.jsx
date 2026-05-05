// CRM Fystec section — extension of Chatfystec, with INTERACTIVE kanban

const INITIAL_STAGES = [
  { id: "novo", name: "Novo lead", color: "#f5e6d6", deals: [
    { id: "d1", t: "Loja Verão SP", v: 4500 },
    { id: "d2", t: "Tiago Almeida", v: 2200 },
    { id: "d3", t: "Luiza Pacheco", v: 3100 },
  ] },
  { id: "qualif", name: "Qualificado", color: "#e8e3d9", deals: [
    { id: "d4", t: "Boutique Cintia", v: 2800 },
    { id: "d5", t: "Pedro Mendes", v: 5400 },
  ] },
  { id: "prop", name: "Proposta enviada", color: "#fde9d6", deals: [
    { id: "d6", t: "Ana Beatriz", v: 1900 },
    { id: "d7", t: "Mercado Bom Preço", v: 8700 },
  ] },
  { id: "neg", name: "Negociação", color: "#fcd7be", deals: [
    { id: "d8", t: "Construtora Líder", v: 12500 },
  ] },
  { id: "fim", name: "Fechado", color: "#d8f0d4", deals: [
    { id: "d9", t: "Hotel Aurora", v: 8200 },
    { id: "d10", t: "Padaria Dona Léa", v: 1400 },
  ] },
];

function SectionCRM() {
  const [stages, setStages] = React.useState(INITIAL_STAGES);
  const [dragId, setDragId] = React.useState(null);
  const [hoverStage, setHoverStage] = React.useState(null);

  const total = stages.reduce((sum, s) =>
    sum + s.deals.reduce((a, d) => a + d.v, 0), 0);
  const totalDeals = stages.reduce((n, s) => n + s.deals.length, 0);

  const moveDeal = (dealId, dir) => {
    setStages((prev) => {
      const next = prev.map((s) => ({ ...s, deals: [...s.deals] }));
      let from = -1, deal = null;
      for (let i = 0; i < next.length; i++) {
        const idx = next[i].deals.findIndex((d) => d.id === dealId);
        if (idx >= 0) { from = i; deal = next[i].deals[idx]; next[i].deals.splice(idx, 1); break; }
      }
      const to = Math.max(0, Math.min(next.length - 1, from + dir));
      next[to].deals.push(deal);
      return next;
    });
  };

  const dropOn = (stageId) => {
    if (!dragId) return;
    setStages((prev) => {
      const next = prev.map((s) => ({ ...s, deals: [...s.deals] }));
      let deal = null;
      for (const s of next) {
        const idx = s.deals.findIndex((d) => d.id === dragId);
        if (idx >= 0) { deal = s.deals[idx]; s.deals.splice(idx, 1); break; }
      }
      const target = next.find((s) => s.id === stageId);
      if (target && deal) target.deals.push(deal);
      return next;
    });
    setDragId(null);
    setHoverStage(null);
  };

  return (
    <section id="crm" className="section" data-screen-label="CRM">
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr 1fr",
          gap: 56,
          alignItems: "end",
          marginBottom: 56,
        }} className="crm-head">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="eyebrow">
              <span className="marker-num">02</span> Extensão do Chatfystec
            </span>
            <h2 className="h1">
              CRM <em>nativo</em> — funis,<br/>etapas e automações.
            </h2>
            <p className="lead">
              Cada conversa do Chatfystec vira um card no funil. Crie pipelines do jeito que sua equipe vende, com etapas customizáveis, automações por gatilho e integração total com o atendimento.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { I: Funnel, t: "Funis e pipelines personalizados", d: "Crie quantos funis precisar — vendas, suporte, onboarding, parcerias." },
              { I: Sparkle, t: "Automações por gatilho", d: "Mover etapa, enviar mensagem, atribuir responsável, notificar — tudo automático." },
              { I: ChatBubble, t: "Tudo dentro do chat", d: "Veja o card do CRM ao lado da conversa. Avance etapas sem trocar de tela." },
            ].map((f, i) => (
              <div key={i} style={{
                display: "flex", gap: 14, alignItems: "flex-start",
                padding: "16px 18px",
                borderTop: "1px solid var(--line)",
              }}>
                <div style={{
                  width: 34, height: 34, borderRadius: 9,
                  background: "var(--accent-soft)", color: "var(--accent-deep)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0,
                }}>
                  <f.I size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14.5, marginBottom: 3 }}>{f.t}</div>
                  <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{f.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Kanban */}
        <div style={{
          background: "white",
          border: "1px solid var(--line)",
          borderRadius: 16,
          padding: "20px 18px 24px",
          boxShadow: "0 30px 60px -40px rgba(0,0,0,0.18)",
          overflow: "hidden",
        }}>
          <div style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            marginBottom: 16, flexWrap: "wrap", gap: 12,
          }}>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 18, fontWeight: 400 }}>Funil — Vendas comerciais</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", marginTop: 2 }}>
                {totalDeals} negócios · R$ {total.toLocaleString("pt-BR")} em pipeline
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span className="pill" style={{ fontSize: 11 }}><Filter size={11}/> Mês atual</span>
              <span className="pill pill--accent" style={{ fontSize: 11 }}>+ Novo card</span>
            </div>
          </div>

          <div className="crm-kanban-full">
            {stages.map((s) => (
              <div key={s.id}
                className={"crm-col" + (hoverStage === s.id ? " is-hover" : "")}
                onDragOver={(e) => { e.preventDefault(); setHoverStage(s.id); }}
                onDragLeave={() => setHoverStage(null)}
                onDrop={() => dropOn(s.id)}>
                <div className="crm-col__head">
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: s.color, border: "1px solid var(--line-strong)" }}></span>
                  <span style={{ fontWeight: 600, fontSize: 12.5 }}>{s.name}</span>
                  <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--ink-3)" }}>{s.deals.length}</span>
                </div>

                {s.deals.map((d) => {
                  const stageIdx = stages.findIndex((x) => x.id === s.id);
                  return (
                    <div key={d.id}
                      className={"crm-card" + (dragId === d.id ? " is-dragging" : "")}
                      draggable
                      onDragStart={() => setDragId(d.id)}
                      onDragEnd={() => { setDragId(null); setHoverStage(null); }}>
                      <div style={{ fontWeight: 600, fontSize: 12.5, marginBottom: 4 }}>{d.t}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                        <span style={{ fontSize: 11, color: "var(--ink-3)" }}>R$ {d.v.toLocaleString("pt-BR")}</span>
                        <div style={{
                          width: 18, height: 18, borderRadius: 999,
                          background: s.color, fontSize: 9, fontWeight: 600,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "var(--ink)",
                        }}>
                          {d.t.split(" ").map(w => w[0]).slice(0,2).join("")}
                        </div>
                      </div>
                      <div style={{ display: "flex", gap: 4 }}>
                        <button className="crm-mv"
                          onClick={() => moveDeal(d.id, -1)}
                          disabled={stageIdx === 0}
                          aria-label="Voltar etapa">←</button>
                        <button className="crm-mv"
                          onClick={() => moveDeal(d.id, 1)}
                          disabled={stageIdx === stages.length - 1}
                          aria-label="Avançar etapa">→</button>
                      </div>
                    </div>
                  );
                })}
                {s.deals.length === 0 && (
                  <div style={{ fontSize: 11, color: "var(--ink-3)", padding: "6px 4px", textAlign: "center" }}>
                    Solte um card aqui
                  </div>
                )}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 14, textAlign: "center",
            fontSize: 12, color: "var(--ink-3)",
            fontFamily: "var(--serif)", fontStyle: "italic",
          }}>
            ↑ Demo interativa. Arraste os cards entre etapas, ou use as setas.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .crm-head { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { SectionCRM });
