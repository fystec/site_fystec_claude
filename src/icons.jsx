// Icons — line, 1.5px, currentColor

const Icon = ({ children, size = 20, ...rest }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
       stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
       strokeLinejoin="round" {...rest}>
    {children}
  </svg>
);

const ArrowRight = (p) => (<Icon {...p}><path d="M5 12h14M13 5l7 7-7 7" /></Icon>);
const ArrowUpRight = (p) => (<Icon {...p}><path d="M7 17 17 7M8 7h9v9" /></Icon>);
const ArrowDown = (p) => (<Icon {...p}><path d="M12 5v14M5 13l7 7 7-7" /></Icon>);
const Check = (p) => (<Icon {...p}><path d="M5 12l4 4 10-10" /></Icon>);
const Plus = (p) => (<Icon {...p}><path d="M12 5v14M5 12h14" /></Icon>);

const ChatBubble = (p) => (<Icon {...p}>
  <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.5A8 8 0 1 1 21 12Z" />
</Icon>);

const Funnel = (p) => (<Icon {...p}>
  <path d="M3 5h18l-7 9v6l-4-2v-4L3 5Z" />
</Icon>);

const Code = (p) => (<Icon {...p}>
  <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />
</Icon>);

const Bolt = (p) => (<Icon {...p}>
  <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
</Icon>);

const Shield = (p) => (<Icon {...p}>
  <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
</Icon>);

const ShieldCheck = (p) => (<Icon {...p}>
  <path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" />
  <path d="m9 12 2 2 4-4" />
</Icon>);

const Server = (p) => (<Icon {...p}>
  <rect x="3" y="4" width="18" height="7" rx="1.5" />
  <rect x="3" y="13" width="18" height="7" rx="1.5" />
  <path d="M7 7.5h.01M7 16.5h.01" />
</Icon>);

const Phone = (p) => (<Icon {...p}>
  <path d="M22 17v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8 9.6a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6A2 2 0 0 1 22 17Z" />
</Icon>);

const WhatsApp = (p) => (<Icon {...p}>
  <path d="M3 21l1.6-5A8 8 0 1 1 8 19l-5 2Z" />
  <path d="M8.5 9.5c.5 2.5 2.5 4.5 5 5l1.2-1.2a1 1 0 0 1 1-.3l2 .6a1 1 0 0 1 .7 1v1.6a1 1 0 0 1-1.1 1c-3.5-.2-8-3-9.4-7.5A1 1 0 0 1 9 8.5h1.5a1 1 0 0 1 1 .7l.6 2a1 1 0 0 1-.3 1L10.5 13" strokeWidth="1.2"/>
</Icon>);

const Mail = (p) => (<Icon {...p}>
  <rect x="3" y="5" width="18" height="14" rx="2" />
  <path d="m4 7 8 6 8-6" />
</Icon>);

const Instagram = (p) => (<Icon {...p}>
  <rect x="3" y="3" width="18" height="18" rx="5" />
  <circle cx="12" cy="12" r="4" />
  <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" />
</Icon>);

const Globe = (p) => (<Icon {...p}>
  <circle cx="12" cy="12" r="9" />
  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
</Icon>);

const Bot = (p) => (<Icon {...p}>
  <rect x="4" y="7" width="16" height="12" rx="3" />
  <path d="M12 3v4M9 13h.01M15 13h.01M9 17h6" />
</Icon>);

const Star = (p) => (<Icon {...p}>
  <path d="m12 3 2.7 5.5 6 .9-4.4 4.3 1 6L12 17l-5.4 2.7 1-6L3.3 9.4l6-.9L12 3Z" />
</Icon>);

const Clock = (p) => (<Icon {...p}>
  <circle cx="12" cy="12" r="9" />
  <path d="M12 7v5l3 2" />
</Icon>);

const Users = (p) => (<Icon {...p}>
  <circle cx="9" cy="8" r="3.5" />
  <path d="M3 20a6 6 0 0 1 12 0" />
  <path d="M16 4.5a3.5 3.5 0 0 1 0 7M21 20a6 6 0 0 0-3.5-5.5" />
</Icon>);

const Chart = (p) => (<Icon {...p}>
  <path d="M3 21h18" />
  <path d="M7 17v-5M12 17V7M17 17v-9" />
</Icon>);

const Lock = (p) => (<Icon {...p}>
  <rect x="4" y="11" width="16" height="10" rx="2" />
  <path d="M8 11V8a4 4 0 0 1 8 0v3" />
</Icon>);

const Search = (p) => (<Icon {...p}>
  <circle cx="11" cy="11" r="7" />
  <path d="m20 20-3.5-3.5" />
</Icon>);

const Send = (p) => (<Icon {...p}>
  <path d="M22 2 11 13" />
  <path d="M22 2l-7 20-4-9-9-4 20-7Z" />
</Icon>);

const Paperclip = (p) => (<Icon {...p}>
  <path d="m21 12-9 9a5 5 0 0 1-7-7l9-9a3.5 3.5 0 0 1 5 5l-9 9a2 2 0 0 1-3-3l8-8" />
</Icon>);

const Smile = (p) => (<Icon {...p}>
  <circle cx="12" cy="12" r="9" />
  <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
</Icon>);

const MoreVert = (p) => (<Icon {...p}>
  <circle cx="12" cy="6" r="1" fill="currentColor" />
  <circle cx="12" cy="12" r="1" fill="currentColor" />
  <circle cx="12" cy="18" r="1" fill="currentColor" />
</Icon>);

const Filter = (p) => (<Icon {...p}>
  <path d="M3 5h18l-7 9v5l-4 2v-7L3 5Z" />
</Icon>);

const Tag = (p) => (<Icon {...p}>
  <path d="M3 12V4h8l10 10-8 8L3 12Z" />
  <circle cx="7.5" cy="7.5" r="1" fill="currentColor"/>
</Icon>);

const Sparkle = (p) => (<Icon {...p}>
  <path d="M12 3v6M12 15v6M3 12h6M15 12h6" />
  <path d="m6 6 3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
</Icon>);

Object.assign(window, {
  Icon, ArrowRight, ArrowUpRight, ArrowDown, Check, Plus,
  ChatBubble, Funnel, Code, Bolt, Shield, ShieldCheck, Server,
  Phone, WhatsApp, Mail, Instagram, Globe, Bot,
  Star, Clock, Users, Chart, Lock, Search, Send,
  Paperclip, Smile, MoreVert, Filter, Tag, Sparkle,
});
