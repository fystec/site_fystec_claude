// Chatfystec demo — multi-tab interactive (Conversas, Contatos, CRM, Relatórios, Chatbot)
// Simplified for clarity: fewer messages, clearer labels, guided hints.

const DEMO_CONTACTS = [
  {
    id: "ana", name: "Ana Beatriz", phone: "+55 34 9 9817-2231",
    avatar: "AB", color: "#fde9d6",
    status: "open", sla: "08:42",
    last: "Perfeito, já recebi o boleto. Obrigada!",
    time: "agora", unread: 2, tag: "Vendas", agent: "Camila",
    messages: [
      { from: "them", text: "Oi! Vocês ainda têm a versão pro disponível?", time: "10:32" },
      { from: "us", text: "Oi Ana! Sim, temos pronta entrega 🙂", time: "10:34", agent: "Camila" },
      { from: "them", text: "Show. Pode me mandar o boleto?", time: "10:36" },
      { from: "us", text: "Claro, segue em anexo.", time: "10:38", agent: "Camila", attached: true },
      { from: "them", text: "Perfeito, já recebi o boleto. Obrigada!", time: "10:41" },
    ],
  },
  {
    id: "ricardo", name: "Ricardo Mendes", phone: "+55 34 9 9112-0099",
    avatar: "RM", color: "#e3eaf5",
    status: "waiting", sla: "00:34",
    last: "Bom dia, queria tirar uma dúvida...",
    time: "5 min", unread: 1, tag: "Suporte", agent: null,
    messages: [
      { from: "them", text: "Bom dia, queria tirar uma dúvida sobre o plano anual.", time: "08:55" },
    ],
  },
  {
    id: "loja", name: "Loja Verão SP", phone: "+55 11 3 4422-1100",
    avatar: "LV", color: "#e6f0e9",
    status: "open", sla: "12:10",
    last: "Pode confirmar o horário da entrega?",
    time: "12 min", unread: 0, tag: "Logística", agent: "João",
    messages: [
      { from: "them", text: "Bom dia, pode confirmar o horário da entrega?", time: "08:40" },
      { from: "us", text: "A entrega está prevista para 14h.", time: "08:48", agent: "João" },
    ],
  },
  {
    id: "marina", name: "Marina Costa", phone: "+55 21 9 9988-5544",
    avatar: "MC", color: "#f3e6ee",
    status: "resolved", sla: "—",
    last: "Resolvido, muito obrigada equipe ✨",
    time: "1h", unread: 0, tag: "Financeiro", agent: "Ricardo",
    messages: [
      { from: "them", text: "Tive um problema com a fatura desse mês.", time: "07:10" },
      { from: "us", text: "Vamos verificar agora, Marina.", time: "07:12", agent: "Ricardo" },
      { from: "them", text: "Resolvido, muito obrigada equipe ✨", time: "07:55" },
    ],
  },
];

const TABS = [
  { id: "conversas", label: "Conversas", Icon: () => <ChatBubble size={18}/>, badge: 3 },
  { id: "contatos", label: "Contatos", Icon: () => <Users size={18}/> },
  { id: "crm", label: "CRM", Icon: () => <Funnel size={18}/> },
  { id: "relatorios", label: "Relatórios", Icon: () => <Chart size={18}/> },
  { id: "chatbot", label: "Chatbot", Icon: () => <Bot size={18}/> },
];

function ChatDemo({ style = "realistic" }) {
  const [tab, setTab] = React.useState("conversas");

  if (style === "abstract") return <ChatAbstract />;

  return (
    <div className="chat-frame">
      <div className="chat-chrome">
        <div className="chat-dots">
          <span style={{ background: "#ff6058" }}></span>
          <span style={{ background: "#febc2e" }}></span>
          <span style={{ background: "#28c840" }}></span>
        </div>
        <div className="chat-url">
          <Lock size={11} /> chat.fystec.com.br
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span className="pill" style={{ padding: "2px 8px", fontSize: 10 }}>
            <span className="dot" style={{ background: "#28c840" }}></span>
            Online
          </span>
        </div>
      </div>

      <div className="chat-body">
        {/* Sidebar */}
        <aside className="chat-rail-v2">
          <div className="chat-rail__logo"><FystecMark size={22} /></div>
          <div className="chat-rail-v2__items">
            {TABS.map((t) => (
              <button key={t.id}
                className={"chat-rail-v2__btn" + (tab === t.id ? " is-active" : "")}
                onClick={() => setTab(t.id)}>
                <span className="chat-rail-v2__icon">
                  <t.Icon />
                  {t.badge && tab !== t.id && <span className="chat-rail-v2__dot"></span>}
                </span>
                <span className="chat-rail-v2__label">{t.label}</span>
              </button>
            ))}
          </div>
        </aside>

        <div className="chat-tab-content">
          {tab === "conversas" && <TabConversas />}
          {tab === "contatos" && <TabContatos />}
          {tab === "crm" && <TabCRM />}
          {tab === "relatorios" && <TabRelatorios />}
          {tab === "chatbot" && <TabChatbot />}
        </div>
      </div>
    </div>
  );
}

// ── Tab: Conversas ─────────────────────────────────────────────────────────
function TabConversas() {
  const [selected, setSelected] = React.useState("ana");
  const [filter, setFilter] = React.useState("Todas");
  const [draft, setDraft] = React.useState("");
  const [conversations, setConversations] = React.useState(DEMO_CONTACTS);

  const filtered = conversations.filter((c) => {
    if (filter === "Todas") return true;
    if (filter === "Não lidas") return c.unread > 0;
    if (filter === "Aguardando") return c.status === "waiting";
    if (filter === "Resolvidas") return c.status === "resolved";
    return true;
  });

  const current = conversations.find((c) => c.id === selected) || conversations[0];

  const send = () => {
    if (!draft.trim()) return;
    setConversations((cs) => cs.map((c) => c.id === current.id ? {
      ...c,
      messages: [...c.messages, { from: "us", text: draft, time: "agora", agent: "Você" }],
      last: draft, time: "agora",
    } : c));
    setDraft("");
  };

  return (
    <div className="chat-grid-conv">
      <div className="chat-list">
        <div className="chat-list__head">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div className="chat-list__title">Caixa de entrada</div>
            <span className="pill" style={{ fontSize: 10 }}>{filtered.length}</span>
          </div>
          <div className="chat-search">
            <Search size={14}/>
            <input placeholder="Buscar conversa..." />
          </div>
          <div className="chat-tabs">
            {["Todas", "Não lidas", "Aguardando", "Resolvidas"].map((t) => (
              <button key={t}
                className={"chat-tab" + (filter === t ? " is-active" : "")}
                onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="chat-list__body">
          {filtered.map((c) => (
            <button key={c.id}
              className={"chat-row" + (c.id === selected ? " is-selected" : "")}
              onClick={() => setSelected(c.id)}>
              <div className="chat-avatar" style={{ background: c.color }}>{c.avatar}</div>
              <div className="chat-row__main">
                <div className="chat-row__top">
                  <span className="chat-row__name">{c.name}</span>
                  <span className="chat-row__time">{c.time}</span>
                </div>
                <div className="chat-row__bottom">
                  <span className="chat-row__last">{c.last}</span>
                  {c.unread > 0 && <span className="chat-row__unread">{c.unread}</span>}
                </div>
                <div className="chat-row__meta">
                  <span className={"chat-tag chat-tag--" + c.status}>
                    {c.status === "open" && "Em atendimento"}
                    {c.status === "waiting" && "Aguardando"}
                    {c.status === "resolved" && "Resolvido"}
                  </span>
                  <span className="chat-row__tag">#{c.tag}</span>
                </div>
              </div>
            </button>
          ))}
          {filtered.length === 0 && (
            <div style={{ padding: 32, textAlign: "center", color: "var(--ink-3)", fontSize: 13 }}>
              Nenhuma conversa neste filtro.
            </div>
          )}
        </div>
      </div>

      <main className="chat-thread">
        <div className="chat-thread__head">
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div className="chat-avatar chat-avatar--sm" style={{ background: current.color }}>{current.avatar}</div>
            <div>
              <div style={{ fontWeight: 600, fontSize: 14 }}>{current.name}</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)", display: "flex", alignItems: "center", gap: 6 }}>
                <WhatsApp size={11}/> {current.phone}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <span className="pill" style={{ fontSize: 11 }}>
              <Clock size={11}/> SLA {current.sla}
            </span>
            <span className="pill" style={{ fontSize: 11 }}>{current.agent || "— atribuir —"}</span>
          </div>
        </div>

        <div className="chat-thread__body">
          <div className="chat-day">— Hoje —</div>
          {current.messages.map((m, i) => (
            <div key={i} className={"chat-msg chat-msg--" + m.from}>
              {m.from === "us" && m.agent && (
                <span className="chat-msg__agent">{m.agent}</span>
              )}
              <div className="chat-msg__bubble">
                {m.attached && (
                  <div className="chat-attached"><Paperclip size={12}/> boleto-2026-04.pdf</div>
                )}
                {m.text}
                <span className="chat-msg__time">
                  {m.time}
                  {m.from === "us" && <span style={{ marginLeft: 4, color: "var(--accent)" }}>✓✓</span>}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="chat-composer">
          <button className="chat-icon-btn"><Paperclip size={16}/></button>
          <button className="chat-icon-btn"><Smile size={16}/></button>
          <input
            placeholder="Escreva uma resposta…"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
          />
          <button className="chat-send" onClick={send} aria-label="Enviar"><Send size={15}/></button>
        </div>
      </main>
    </div>
  );
}

// ── Tab: Contatos ──────────────────────────────────────────────────────────
function TabContatos() {
  const [selected, setSelected] = React.useState(0);
  const contacts = DEMO_CONTACTS;
  const c = contacts[selected];
  return (
    <div className="chat-tab-pane">
      <PaneHeader title="Contatos" subtitle="Toda pessoa que falou com sua empresa, em um só lugar." />
      <div className="contacts-grid">
        <div className="contacts-list">
          {contacts.map((p, i) => (
            <button key={p.id} onClick={() => setSelected(i)}
              className={"contact-card" + (i === selected ? " is-selected" : "")}>
              <div className="chat-avatar" style={{ background: p.color }}>{p.avatar}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: "var(--ink-3)" }}>{p.phone}</div>
              </div>
              <span className="pill" style={{ fontSize: 10 }}>{p.tag}</span>
            </button>
          ))}
        </div>
        <div className="contact-detail">
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
            <div className="chat-avatar chat-avatar--lg" style={{ background: c.color }}>{c.avatar}</div>
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 20 }}>{c.name}</div>
              <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{c.phone}</div>
            </div>
          </div>
          <div className="detail-rows">
            <DetailRow label="Tag" value={c.tag} />
            <DetailRow label="Atendente" value={c.agent || "Não atribuído"} />
            <DetailRow label="Status" value={c.status === "open" ? "Em atendimento" : c.status === "waiting" ? "Aguardando" : "Resolvido"} />
            <DetailRow label="Mensagens" value={`${c.messages.length} no histórico`} />
          </div>
          <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
            <button className="chat-mini-btn">Ver conversa</button>
            <button className="chat-mini-btn chat-mini-btn--ghost">Editar tags</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="detail-row">
      <span style={{ fontSize: 11, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-3)" }}>{label}</span>
      <span style={{ fontSize: 13 }}>{value}</span>
    </div>
  );
}

// ── Tab: CRM (mini) ────────────────────────────────────────────────────────
function TabCRM() {
  return (
    <div className="chat-tab-pane">
      <PaneHeader title="CRM integrado" subtitle="Cada conversa vira um card. Veja o funil sem trocar de tela." />
      <CRMMini />
    </div>
  );
}

// ── Tab: Relatórios ────────────────────────────────────────────────────────
function TabRelatorios() {
  const [period, setPeriod] = React.useState("Esta semana");

  const stats = {
    "Hoje": { atend: 24, resp: "1m 12s", csat: 4.8, sla: 98 },
    "Esta semana": { atend: 187, resp: "1m 54s", csat: 4.6, sla: 96 },
    "Este mês": { atend: 842, resp: "2m 08s", csat: 4.5, sla: 94 },
  };
  const s = stats[period];

  // Simulated bar data per day
  const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
  const bars = period === "Hoje" ? [4,8,12,9,6,3,2]
            : period === "Este mês" ? [120, 145, 132, 158, 121, 98]
            : [28, 36, 32, 41, 28, 22];

  return (
    <div className="chat-tab-pane">
      <PaneHeader title="Relatórios" subtitle="Atendimentos, SLA, CSAT — em tempo real." />

      <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
        {Object.keys(stats).map((p) => (
          <button key={p} onClick={() => setPeriod(p)}
            className={"period-btn" + (period === p ? " is-active" : "")}>
            {p}
          </button>
        ))}
      </div>

      <div className="stats-grid">
        <Stat label="Atendimentos" value={s.atend} />
        <Stat label="Tempo de resposta" value={s.resp} />
        <Stat label="CSAT médio" value={s.csat} suffix="/ 5,0" />
        <Stat label="SLA cumprido" value={s.sla + "%"} />
      </div>

      <div className="chart-card">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
          <div style={{ fontFamily: "var(--serif)", fontSize: 16 }}>Atendimentos por dia</div>
          <span className="pill" style={{ fontSize: 11 }}>+12% vs anterior</span>
        </div>
        <div className="bars">
          {bars.map((v, i) => {
            const max = Math.max(...bars);
            return (
              <div key={i} className="bar-col">
                <div className="bar" style={{ height: `${(v/max)*100}%` }}>
                  <span className="bar-val">{v}</span>
                </div>
                <span className="bar-lbl">{days[i] || `D${i+1}`}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, suffix }) {
  return (
    <div className="stat-card">
      <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--ink-3)", marginBottom: 6 }}>{label}</div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
        <span style={{ fontFamily: "var(--serif)", fontSize: 32, fontWeight: 300, letterSpacing: "-0.02em" }}>{value}</span>
        {suffix && <span style={{ fontSize: 12, color: "var(--ink-3)" }}>{suffix}</span>}
      </div>
    </div>
  );
}

// ── Tab: Chatbot ───────────────────────────────────────────────────────────
function TabChatbot() {
  const [active, setActive] = React.useState(true);
  const [step, setStep] = React.useState(null);

  const flow = [
    { id: "saudacao", t: "Saudação", d: "Olá! Sou o assistente da Fystec.", branches: 1 },
    { id: "menu", t: "Menu de opções", d: "Vendas · Suporte · Financeiro", branches: 3 },
    { id: "rotear", t: "Roteamento", d: "Encaminha para o atendente certo." },
    { id: "fim", t: "Encerramento ou avaliação", d: "Pede CSAT após resposta." },
  ];

  return (
    <div className="chat-tab-pane">
      <PaneHeader title="Chatbot" subtitle="Pré-atendimento automático e respostas rápidas." />

      <div className="bot-toggle">
        <div>
          <div style={{ fontWeight: 600, fontSize: 14 }}>Bot principal — WhatsApp</div>
          <div style={{ fontSize: 12, color: "var(--ink-3)" }}>
            {active ? "Ativo · respondendo automaticamente em < 2s" : "Pausado"}
          </div>
        </div>
        <button className={"chat-toggle" + (active ? " is-on" : "")}
          onClick={() => setActive(!active)}>
          <span></span>
        </button>
      </div>

      <div className="bot-flow">
        {flow.map((s, i) => (
          <div key={s.id} className="bot-step-wrap">
            <button className={"bot-step" + (step === s.id ? " is-active" : "")}
              onClick={() => setStep(step === s.id ? null : s.id)}>
              <span className="bot-step-num">{i + 1}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{s.t}</div>
                <div style={{ fontSize: 12, color: "var(--ink-3)" }}>{s.d}</div>
              </div>
              <Plus size={14} style={{ transform: step === s.id ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}/>
            </button>
            {i < flow.length - 1 && <div className="bot-connector"></div>}
          </div>
        ))}
        <button className="bot-add"><Plus size={14}/> Adicionar etapa</button>
      </div>
    </div>
  );
}

function PaneHeader({ title, subtitle }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: "var(--serif)", fontSize: 22, fontWeight: 400, letterSpacing: "-0.01em" }}>{title}</div>
      <div style={{ fontSize: 13, color: "var(--ink-3)", marginTop: 2 }}>{subtitle}</div>
    </div>
  );
}

// ── Mini CRM (used in Chatfystec demo's CRM tab) ────────────────────────────
function CRMMini() {
  const [stages, setStages] = React.useState([
    { id: "novo", name: "Novo lead", color: "#f5e6d6", deals: [{ id: "d1", t: "Loja Verão SP", v: 4500 }] },
    { id: "qualif", name: "Qualificado", color: "#e8e3d9", deals: [{ id: "d2", t: "Boutique Cintia", v: 2800 }] },
    { id: "prop", name: "Proposta enviada", color: "#fde9d6", deals: [{ id: "d3", t: "Ana Beatriz", v: 1900 }] },
    { id: "fim", name: "Fechado", color: "#d8f0d4", deals: [{ id: "d4", t: "Hotel Aurora", v: 8200 }] },
  ]);

  const move = (dealId, dir) => {
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

  return (
    <div className="kanban-mini">
      {stages.map((s) => (
        <div key={s.id} className="kanban-col">
          <div className="kanban-col__head">
            <span style={{ width: 8, height: 8, borderRadius: 2, background: s.color, border: "1px solid var(--line-strong)" }}></span>
            <span style={{ fontWeight: 600, fontSize: 12.5 }}>{s.name}</span>
            <span style={{ marginLeft: "auto", fontSize: 11, color: "var(--ink-3)" }}>{s.deals.length}</span>
          </div>
          {s.deals.map((d) => (
            <div key={d.id} className="kanban-card">
              <div style={{ fontWeight: 600, fontSize: 12.5 }}>{d.t}</div>
              <div style={{ fontSize: 11, color: "var(--ink-3)", marginBottom: 8 }}>R$ {d.v.toLocaleString("pt-BR")}</div>
              <div style={{ display: "flex", gap: 4 }}>
                <button className="kanban-mv" onClick={() => move(d.id, -1)} aria-label="Voltar etapa">←</button>
                <button className="kanban-mv" onClick={() => move(d.id, 1)} aria-label="Avançar etapa">→</button>
              </div>
            </div>
          ))}
          {s.deals.length === 0 && (
            <div style={{ fontSize: 11, color: "var(--ink-3)", padding: "6px 4px" }}>—</div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Abstract / conceptual visual ───────────────────────────────────────────
function ChatAbstract() {
  return (
    <div style={{
      background: "var(--bg-warm)",
      border: "1px solid var(--line)",
      borderRadius: 20,
      padding: "clamp(28px, 5vw, 64px)",
      position: "relative",
      minHeight: 460,
      overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", top: 40, left: "8%", width: 220, padding: 18,
        background: "white", border: "1px solid var(--line)", borderRadius: 14,
        boxShadow: "0 24px 50px -28px rgba(0,0,0,0.25)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#fde9d6", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: 13 }}>AB</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Ana Beatriz</div>
            <div style={{ fontSize: 11, color: "var(--ink-3)" }}>+55 34 9 9817-2231</div>
          </div>
        </div>
        <div style={{ marginTop: 12, fontSize: 12, color: "var(--ink-2)", lineHeight: 1.5 }}>
          “Perfeito, já recebi o boleto. Obrigada!”
        </div>
      </div>

      <div style={{
        position: "absolute", top: "30%", right: "8%", width: 260, padding: 18,
        background: "white", border: "1px solid var(--line)", borderRadius: 14,
        boxShadow: "0 24px 50px -28px rgba(0,0,0,0.25)",
      }}>
        <div style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>SLA — hoje</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: "var(--serif)", fontSize: 42, fontWeight: 300 }}>96<span style={{ color: "var(--accent)" }}>%</span></span>
          <span style={{ fontSize: 12, color: "var(--ink-3)" }}>dentro do prazo</span>
        </div>
        <div style={{ marginTop: 10, height: 6, borderRadius: 999, background: "var(--bg-warm)", overflow: "hidden" }}>
          <div style={{ width: "96%", height: "100%", background: "var(--accent)" }}></div>
        </div>
      </div>

      <div style={{
        position: "absolute", bottom: 40, left: "30%", width: 260, padding: 18,
        background: "white", border: "1px solid var(--line)", borderRadius: 14,
        boxShadow: "0 24px 50px -28px rgba(0,0,0,0.25)",
      }}>
        <div style={{ fontSize: 11, color: "var(--ink-3)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>Canais conectados</div>
        <div style={{ display: "flex", gap: 10 }}>
          {[WhatsApp, Instagram, Mail, Bot, Globe].map((I, i) => (
            <div key={i} style={{ width: 36, height: 36, borderRadius: 10, background: "var(--bg-warm)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink-2)" }}>
              <I size={16}/>
            </div>
          ))}
        </div>
      </div>

      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 70% 30%, rgba(234,88,12,0.08), transparent 50%)",
        pointerEvents: "none",
      }}></div>
    </div>
  );
}

Object.assign(window, { ChatDemo });
