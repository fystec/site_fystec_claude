// Contact section — WhatsApp CTA

function SectionContact() {
  return (
    <section id="contato" className="section" data-screen-label="Contato">
      <div className="container">
        <div style={{
          background: "var(--ink)",
          color: "var(--bg)",
          borderRadius: 24,
          padding: "clamp(40px, 6vw, 80px)",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative serif accent */}
          <div style={{
            position: "absolute",
            top: -60, right: -40,
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: 320,
            color: "rgba(234,88,12,0.18)",
            lineHeight: 1,
            pointerEvents: "none",
          }}>
            f
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr",
            gap: 56,
            alignItems: "end",
            position: "relative",
            zIndex: 1,
          }} className="contact-grid">
            <div>
              <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, display: "inline-flex" }}>
                Vamos conversar
              </span>
              <h2 className="h1" style={{
                color: "var(--bg)",
                fontSize: "clamp(36px, 5.5vw, 72px)",
                marginBottom: 24,
              }}>
                Toda proposta começa<br/>
                com um <em style={{ color: "var(--accent)" }}>“oi”</em>.
              </h2>
              <p className="lead" style={{ color: "rgba(255,255,255,0.7)", maxWidth: "48ch" }}>
                Valores, escopo, prazo, plano sob medida — chame no WhatsApp e a gente entende o que você precisa antes de propor qualquer coisa.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <a href="https://wa.me/5534997770505"
                target="_blank" rel="noopener"
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "22px 28px",
                  background: "var(--accent)",
                  color: "white",
                  borderRadius: 14,
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 500,
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <WhatsApp size={22} />
                  <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                    <span style={{ fontSize: 12, opacity: 0.85, fontWeight: 400, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                      WhatsApp direto
                    </span>
                    <span style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em" }}>
                      +55 34 99777‑0505
                    </span>
                  </div>
                </div>
                <ArrowUpRight size={22} />
              </a>

              <div style={{
                padding: "20px 24px",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 14,
                fontSize: 13.5,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.55,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 999, background: "#28c840", boxShadow: "0 0 0 4px rgba(40,200,64,0.2)" }}></span>
                  <span style={{ color: "white", fontWeight: 500 }}>Atendimento agora</span>
                </div>
                Resposta em minutos, em horário comercial. Atendemos todo o Brasil — escritório em Patos de Minas/MG.
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}

Object.assign(window, { SectionContact });
