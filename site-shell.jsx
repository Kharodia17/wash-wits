/* global React */
// WASH WordPress site — high-fidelity component library
// Shell (nav, footer) + page components: Home, ComingSoon, Contact, FindTutor
// Brand: deep teal + warm coral on a warm cream paper. Editorial type system
// (Instrument Serif display, Geist UI). All inline SVG, no external assets.

const SITE = {
  bg: '#F4EFE6',
  paper: '#FBF7EE',
  surface: '#FFFFFF',
  ink: '#1A1A1A',
  ink2: '#2D2D2D',
  muted: '#6F6A5F',
  muted2: '#A29D90',
  line: 'rgba(20,20,10,0.09)',
  lineStrong: 'rgba(20,20,10,0.18)',
  primary: '#114E48',
  primaryInk: '#0B2F2C',
  primarySoft: '#DDE9E5',
  primaryTint: '#EDF3F0',
  accent: '#D8593A',
  accentInk: '#7E3221',
  accentSoft: '#F8DDD2',
  writing: '#4E709A',
  writingSoft: '#E3EAF2',
  tutoring: '#6E8C46',
  tutoringSoft: '#E8EEDB',
  advising: '#A87633',
  advisingSoft: '#F2E5CC',
};

const sansFF = "'Geist', system-ui, -apple-system, sans-serif";
const dispFF = "'Instrument Serif', 'Times New Roman', serif";

// ─── icons (line, 1.6px, currentColor) ────────────────────────
function SIcon({ name, size = 18, stroke = 1.6 }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const map = {
    arrowRight: <><line x1="4" y1="12" x2="20" y2="12" {...p}/><polyline points="14 6 20 12 14 18" {...p}/></>,
    arrowUpRight: <><line x1="6" y1="18" x2="18" y2="6" {...p}/><polyline points="9 6 18 6 18 15" {...p}/></>,
    check: <polyline points="4 12 10 18 20 6" {...p}/>,
    plus: <><line x1="12" y1="5" x2="12" y2="19" {...p}/><line x1="5" y1="12" x2="19" y2="12" {...p}/></>,
    pencil: <><path d="M4 20l1-5L16 4l5 5L10 20H4z" {...p}/><line x1="14" y1="6" x2="19" y2="11" {...p}/></>,
    book: <><path d="M4 5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2V5z" {...p}/><line x1="18" y1="3" x2="18" y2="21" {...p}/></>,
    compass: <><circle cx="12" cy="12" r="9" {...p}/><polygon points="15 9 13 13 9 15 11 11" fill="currentColor" stroke="none"/></>,
    search: <><circle cx="11" cy="11" r="6" {...p}/><line x1="16" y1="16" x2="21" y2="21" {...p}/></>,
    calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2" {...p}/><line x1="3.5" y1="10" x2="20.5" y2="10" {...p}/><line x1="8" y1="3" x2="8" y2="6" {...p}/><line x1="16" y1="3" x2="16" y2="6" {...p}/></>,
    clock: <><circle cx="12" cy="12" r="9" {...p}/><polyline points="12 7 12 12 16 14" {...p}/></>,
    pin: <><path d="M12 22s8-7 8-13a8 8 0 0 0-16 0c0 6 8 13 8 13z" {...p}/><circle cx="12" cy="9" r="2.5" {...p}/></>,
    phone: <path d="M6 4l3 1 1 4-2 1c1 3 3 5 6 6l1-2 4 1 1 3c-9 1-16-6-15-15z" {...p}/>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" {...p}/><polyline points="3 7 12 13 21 7" {...p}/></>,
    video: <><rect x="3" y="6" width="13" height="12" rx="2" {...p}/><polygon points="16 10 22 7 22 17 16 14" {...p}/></>,
    bell: <><path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4l2-2z" {...p}/><path d="M10 20a2 2 0 0 0 4 0" {...p}/></>,
    user: <><circle cx="12" cy="8" r="4" {...p}/><path d="M4 20c1.5-4 5-6 8-6s6.5 2 8 6" {...p}/></>,
    chat: <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-8l-4 3v-3H6a2 2 0 0 1-2-2V6z" {...p}/>,
    sparkles: <><path d="M12 3l2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5z" {...p}/><path d="M19 14l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" {...p}/></>,
    zap: <polygon points="13 2 4 14 11 14 10 22 20 9 13 9" {...p}/>,
    star: <polygon points="12 3 14.5 9 21 9.5 16 14 17.5 20.5 12 17 6.5 20.5 8 14 3 9.5 9.5 9" {...p}/>,
    menu: <><line x1="4" y1="7" x2="20" y2="7" {...p}/><line x1="4" y1="12" x2="20" y2="12" {...p}/><line x1="4" y1="17" x2="14" y2="17" {...p}/></>,
    close: <><line x1="6" y1="6" x2="18" y2="18" {...p}/><line x1="18" y1="6" x2="6" y2="18" {...p}/></>,
    arrowDown: <><line x1="12" y1="4" x2="12" y2="20" {...p}/><polyline points="6 14 12 20 18 14" {...p}/></>,
    refresh: <><polyline points="4 4 4 10 10 10" {...p}/><path d="M4 10c2-4 7-6 11-4a8 8 0 0 1 4 11" {...p}/></>,
    globe: <><circle cx="12" cy="12" r="9" {...p}/><line x1="3" y1="12" x2="21" y2="12" {...p}/><path d="M12 3c3 3 4.5 6 4.5 9S15 18 12 21M12 3C9 6 7.5 9 7.5 12S9 18 12 21" {...p}/></>,
    whatsapp: <><path d="M4 20l1.4-4A8 8 0 1 1 8 19.6L4 20z" {...p}/><path d="M9 10c.5 2 2 3.5 4 4l1.2-1 2 1c-.5 1.5-2 2-3.5 1.5-2-.5-4-2.5-4.5-4.5C7.7 9.5 8.2 8 9.7 7.5l1 2L9.5 10.7" {...p}/></>,
    lock: <><rect x="5" y="11" width="14" height="9" rx="2" {...p}/><path d="M8 11V8a4 4 0 0 1 8 0v3" {...p}/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: 'block', flexShrink: 0 }}>
      {map[name]}
    </svg>
  );
}

// ─── small primitives ─────────────────────────────────────────
function Wordmark({ size = 22, color, withDot = true }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      fontFamily: dispFF, fontSize: size, lineHeight: 1,
      color: color || SITE.primary, letterSpacing: '-0.02em',
    }}>
      <span>wash<span style={{ color: SITE.accent }}>.</span></span>
      {withDot && (
        <span style={{
          fontFamily: sansFF, fontSize: size * 0.36, color: SITE.muted,
          fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
          paddingLeft: 10, marginLeft: 2, borderLeft: `1px solid ${SITE.lineStrong}`,
        }}>Wits Academic Support Hub</span>
      )}
    </div>
  );
}

function PillBadge({ children, tone = 'primary', style }) {
  const tones = {
    primary: { bg: SITE.primaryTint, fg: SITE.primary, dot: SITE.primary },
    accent:  { bg: SITE.accentSoft, fg: SITE.accentInk, dot: SITE.accent },
    paper:   { bg: SITE.paper, fg: SITE.ink2, dot: SITE.muted },
  };
  const t = tones[tone] || tones.primary;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      background: t.bg, color: t.fg, borderRadius: 999,
      padding: '6px 12px', fontSize: 12, fontWeight: 500,
      letterSpacing: '0.04em', textTransform: 'uppercase',
      ...style,
    }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.dot }} />
      {children}
    </span>
  );
}

function CTA({ children, variant = 'primary', icon = 'arrowRight', size = 'md', style, as = 'a' }) {
  const sizes = {
    sm: { pad: '8px 14px', fs: 13, gap: 6 },
    md: { pad: '12px 20px', fs: 14, gap: 8 },
    lg: { pad: '16px 26px', fs: 15, gap: 10 },
  }[size];
  const vs = {
    primary: { bg: SITE.accent, fg: '#fff', border: 'transparent' },
    dark:    { bg: SITE.primary, fg: '#fff', border: 'transparent' },
    ghost:   { bg: 'transparent', fg: SITE.ink, border: SITE.lineStrong },
    paper:   { bg: '#fff', fg: SITE.primary, border: 'transparent' },
  }[variant];
  return React.createElement(as, {
    style: {
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      gap: sizes.gap, fontFamily: sansFF, fontWeight: 500, fontSize: sizes.fs,
      padding: sizes.pad, borderRadius: 999, cursor: 'pointer',
      background: vs.bg, color: vs.fg, border: `1px solid ${vs.border}`,
      textDecoration: 'none', lineHeight: 1, whiteSpace: 'nowrap',
      transition: 'transform .08s ease',
      ...style,
    },
  }, children, icon && <SIcon name={icon} size={sizes.fs + 1} stroke={1.8} />);
}

// ─── site shell: announcement bar + nav + footer ────────────
function AnnouncementBar({ onComingSoon }) {
  return (
    <div style={{
      background: SITE.primaryInk, color: '#fff',
      padding: '10px 28px', fontSize: 12.5,
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14,
      fontFamily: sansFF, letterSpacing: 0.1,
    }}>
      <span style={{
        background: SITE.accent, color: '#fff', borderRadius: 4,
        padding: '2px 7px', fontSize: 10, fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase',
      }}>New</span>
      <span style={{ opacity: 0.92 }}>
        Self-service booking launches <b style={{ color: '#fff' }}>September 2026</b> — same-day slots for all three services.
      </span>
      <a onClick={onComingSoon} style={{
        color: '#fff', textDecoration: 'underline', textUnderlineOffset: 3,
        textDecorationColor: 'rgba(255,255,255,0.5)', cursor: 'pointer',
        display: 'inline-flex', alignItems: 'center', gap: 4,
      }}>
        Join the waitlist <SIcon name="arrowRight" size={12} />
      </a>
    </div>
  );
}

function SiteNav({ currentPage, onNavigate }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'coming', label: 'Coming soon' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <header style={{
      background: SITE.bg,
      borderBottom: `1px solid ${SITE.line}`,
      position: 'sticky', top: 0, zIndex: 30,
    }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto', padding: '18px 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
      }}>
        <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer', textDecoration: 'none' }}>
          <Wordmark size={26} />
        </a>
        <nav style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          {items.map(it => {
            const active = it.id === currentPage;
            return (
              <a key={it.id} onClick={() => onNavigate(it.id)} style={{
                fontFamily: sansFF, fontSize: 13.5, fontWeight: active ? 600 : 500,
                color: active ? SITE.ink : SITE.muted,
                padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
                background: active ? 'rgba(20,20,10,0.06)' : 'transparent',
                textDecoration: 'none',
              }}>{it.label}</a>
            );
          })}
        </nav>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <CTA size="sm" variant="dark" icon="arrowRight"
            onClick={() => onNavigate('coming')}>Join the waitlist</CTA>
        </div>
      </div>
    </header>
  );
}

function SiteFooter({ onNavigate }) {
  const cols = [
    { title: 'Services', items: ['Writing Centre', 'Peer Tutoring', 'Academic Advising'] },
    { title: 'Coming soon', items: ['Join the waitlist', 'Launching Sep 2026'] },
    { title: 'About WASH', items: ['How it works', 'Our consultants', 'Annual report (2025)'] },
    { title: 'Help', items: ['FAQs', 'Contact us', 'Accessibility'] },
  ];
  return (
    <footer style={{ background: SITE.primaryInk, color: '#fff', padding: '64px 32px 28px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr', gap: 40,
          paddingBottom: 48, borderBottom: '1px solid rgba(255,255,255,0.14)',
        }}>
          <div>
            <Wordmark size={30} color="#fff" withDot={false} />
            <div style={{ marginTop: 14, fontSize: 13, lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', maxWidth: 280 }}>
              The Wits Academic Support Hub — one place to find writing help, peer tutoring and academic advising.
              Free for every registered student.
            </div>
            <div style={{ marginTop: 18, display: 'flex', gap: 8 }}>
              {['globe', 'mail', 'whatsapp', 'chat'].map(i => (
                <div key={i} style={{
                  width: 34, height: 34, borderRadius: '50%',
                  border: '1px solid rgba(255,255,255,0.2)',
                  display: 'grid', placeItems: 'center', color: '#fff', cursor: 'pointer',
                }}>
                  <SIcon name={i} size={14} stroke={1.6} />
                </div>
              ))}
            </div>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{
                fontFamily: sansFF, fontSize: 11, letterSpacing: 0.6,
                color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', marginBottom: 14,
              }}>{c.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {c.items.map(i => (
                  <a key={i} onClick={() => i === 'Contact us' && onNavigate?.('contact')}
                    style={{ color: 'rgba(255,255,255,0.85)', fontSize: 13.5, textDecoration: 'none', cursor: 'pointer' }}>
                    {i}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{
          paddingTop: 24, display: 'flex', justifyContent: 'space-between',
          fontSize: 12, color: 'rgba(255,255,255,0.55)', flexWrap: 'wrap', gap: 12,
        }}>
          <div>© 2026 University of the Witwatersrand · Academic Support Hub</div>
          <div style={{ display: 'flex', gap: 22 }}>
            <span>POPIA compliant</span>
            <a style={{ color: 'inherit' }}>Privacy</a>
            <a style={{ color: 'inherit' }}>Cookies</a>
            <a style={{ color: 'inherit' }}>Wits.ac.za ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

window.SITE = SITE;
window.sansFF = sansFF;
window.dispFF = dispFF;
window.SIcon = SIcon;
window.Wordmark = Wordmark;
window.PillBadge = PillBadge;
window.CTA = CTA;
window.AnnouncementBar = AnnouncementBar;
window.SiteNav = SiteNav;
window.SiteFooter = SiteFooter;
