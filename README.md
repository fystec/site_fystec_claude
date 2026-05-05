# 🚀 Fystec — Site Institucional

Site institucional da **Fystec**, empresa de tecnologia sediada em Patos de Minas/MG. Apresenta a plataforma **Chatfystec** (atendimento multicanal), **CRM nativo**, e os serviços de sites, automação, segurança e infraestrutura.

## ✨ Tecnologias

- **React 18** (via CDN)
- **Babel Standalone** (transpilação JSX no client)
- **CSS puro** (design system editorial moderno)
- **Google Fonts** (Fraunces, Inter, Instrument Serif, Newsreader, DM Sans)

## 📁 Estrutura

```
├── index.html          # Página principal (ponto de entrada)
├── styles.css          # Design system + layout
├── chat-styles.css     # Estilos do demo interativo Chatfystec
├── favicon.svg         # Ícone do site
├── netlify.toml        # Configuração de deploy Netlify
├── _redirects          # Redirects Netlify (fallback)
├── robots.txt          # SEO crawler rules
└── src/
    ├── app.jsx                # Componente raiz
    ├── nav.jsx                # Navegação fixa
    ├── hero.jsx               # Seção hero (3 layouts)
    ├── icons.jsx              # Biblioteca de ícones SVG
    ├── logo.jsx               # Logo Fystec (mark + wordmark)
    ├── chat-demo.jsx          # Demo interativa do Chatfystec
    ├── section-chatfystec.jsx # Seção Chatfystec
    ├── section-crm.jsx        # Seção CRM com kanban interativo
    ├── section-services.jsx   # Seção de serviços
    ├── section-contact.jsx    # Seção de contato (CTA WhatsApp)
    └── footer.jsx             # Rodapé
```

## 🌐 Deploy (Netlify)

1. Conecte o repositório ao Netlify
2. **Publish directory**: `.` (raiz do projeto)
3. **Build command**: não é necessário (site estático puro)
4. O `netlify.toml` já configura headers de segurança e cache

## 🛠 Desenvolvimento Local

Basta abrir o `index.html` no navegador ou usar um servidor local:

```bash
npx serve .
```

## 📬 Contato

- **WhatsApp**: +55 34 99777-0505
- **Escritório**: Patos de Minas, MG

---

© 2026 Fystec — Tecnologia. Todos os direitos reservados.
