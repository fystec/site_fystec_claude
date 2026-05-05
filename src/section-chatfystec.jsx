// Chatfystec section — intro + interactive demo + features

function SectionChatfystec({ mockupStyle = "realistic" }) {
  const [activeStyle, setActiveStyle] = React.useState(mockupStyle === "both" ? "realistic" : mockupStyle);

  React.useEffect(() => {
    if (mockupStyle !== "both") setActiveStyle(mockupStyle);
  }, [mockupStyle]);

  return (
    <section id="chatfystec" className="section section--tinted" data-screen-label="Chatfystec">
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 56,
          alignItems: "end",
          marginBottom: 56,
        }} className="cf-head">
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span className="eyebrow">
              <span className="marker-num">01</span> Plataforma principal
            </span>
            <div style={{
              fontFamily: "var(--serif)",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(48px, 6vw, 80px)",
              lineHeight: 0.95,
              color: "var(--accent)",
              letterSpacing: "-0.02em",
            }}>
              Chatfystec
            </div>
          </div>
          <div>
            <h2 className="h1" style={{ marginBottom: 18 }}>
              Um número de WhatsApp,<br/>
              <em>vários atendentes</em>, zero confusão.
            </h2>
            <p className="lead">
              Centralize WhatsApp, Instagram, e‑mail e chatbot do site numa caixa de entrada só. Cada atendente com permissões individuais, histórico completo, SLA monitorado e relatórios que cabem no seu negócio.
            </p>
          </div>
        </div>

        {/* Interactive demo */}
        <div style={{ position: "relative" }}>
          {mockupStyle === "both" && (
            <div style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 24,
            }}>
              <div style={{
                display: "inline-flex",
                background: "white",
                border: "1px solid var(--line)",
                borderRadius: 999,
                padding: 4,
                gap: 2,
              }}>
                {[
                  { id: "realistic", label: "Mockup do produto" },
                  { id: "abstract", label: "Visão conceitual" },
                ].map((t) => (
                  <button key={t.id}
                    onClick={() => setActiveStyle(t.id)}
                    style={{
                      padding: "8px 16px",
                      border: 0,
                      borderRadius: 999,
                      fontSize: 12.5, fontWeight: 500,
                      cursor: "pointer",
                      background: activeStyle === t.id ? "var(--ink)" : "transparent",
                      color: activeStyle === t.id ? "white" : "var(--ink-2)",
                      transition: "all 0.15s ease",
                    }}>
                    {t.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <ChatDemo style={activeStyle} />

          <div style={{
            marginTop: 18,
            textAlign: "center",
            fontSize: 12,
            color: "var(--ink-3)",
            fontFamily: "var(--serif)",
            fontStyle: "italic",
          }}>
            ↑ É demo interativa. Clique nas conversas, filtre, escreva uma resposta.
          </div>
        </div>

        {/* Feature grid */}
        <div style={{ marginTop: 100 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
            <h3 className="h2" style={{ maxWidth: "20ch" }}>
              Tudo que sua equipe precisa em <em style={{ color: "var(--accent)", fontStyle: "italic" }}>uma só tela</em>.
            </h3>
            <span className="tiny">10 recursos · plano único</span>
          </div>

          <div className="grid grid--3">
            {[
              { I: Users, t: "Permissões por atendente", d: "Cada usuário vê apenas o que precisa. Defina papéis, filas e quais tags pode atender." },
              { I: Clock, t: "SLA e tempo de resposta", d: "Acompanhe o tempo de primeira resposta, tempo médio e fila — em tempo real." },
              { I: Star, t: "Avaliação do atendimento", d: "Após o encerramento, o cliente avalia. CSAT e NPS no relatório, sem esforço." },
              { I: Chart, t: "Relatórios personalizados", d: "Exporte por atendente, tag, canal ou período. Agende envios automáticos." },
              { I: ChatBubble, t: "Histórico completo", d: "Toda conversa fica registrada — pesquise por número, palavra, atendente ou data." },
              { I: Bot, t: "Chatbot e respostas rápidas", d: "Pré‑atendimento automático, mensagens prontas e disparo de fluxos por palavra‑chave." },
              { I: Globe, t: "Multicanal de verdade", d: "WhatsApp, Instagram Direct, e‑mail e chat do site na mesma caixa de entrada." },
              { I: ShieldCheck, t: "API oficial e não oficial", d: "Use a API do WhatsApp Business homologada ou conexão via QR Code — você escolhe." },
              { I: Tag, t: "Etiquetas e segmentação", d: "Organize por departamento, prioridade, status. Filtros que sua equipe entende." },
            ].map((f, i) => (
              <div key={i} className="card" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <div style={{
                  width: 40, height: 40,
                  borderRadius: 10,
                  background: "var(--accent-soft)",
                  color: "var(--accent-deep)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <f.I size={18} />
                </div>
                <div className="h3">{f.t}</div>
                <p className="body" style={{ fontSize: 14, margin: 0 }}>{f.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Channels strip */}
        <div style={{
          marginTop: 80,
          padding: "32px clamp(20px, 4vw, 56px)",
          background: "white",
          border: "1px solid var(--line)",
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          gap: 32,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}>
          <div>
            <div className="tiny" style={{ marginBottom: 6 }}>Conecte seus canais</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em" }}>
              Tudo o que sua empresa fala — em um lugar só.
            </div>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            {[
              { I: WhatsApp, l: "WhatsApp" },
              { I: Instagram, l: "Instagram" },
              { I: Mail, l: "E‑mail" },
              { I: Globe, l: "Chat do site" },
              { I: Bot, l: "Chatbot" },
            ].map((c, i) => (
              <div key={i} style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "9px 14px",
                border: "1px solid var(--line)",
                borderRadius: 999,
                fontSize: 13, fontWeight: 500,
                color: "var(--ink-2)",
              }}>
                <c.I size={15} />
                {c.l}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cf-head { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { SectionChatfystec });
