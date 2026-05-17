/* global React, SITE, sansFF, dispFF, SIcon, Wordmark, PillBadge, CTA, AnnouncementBar, SiteNav, SiteFooter */
// WASH WordPress site — Contact page

function ContactHero() {
  return (
    <section style={{ background: SITE.bg, padding: '64px 32px 28px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <PillBadge tone="primary">Contact us</PillBadge>
        <h1 style={{
          fontFamily: dispFF, fontWeight: 400, fontSize: 64, lineHeight: 1.05,
          letterSpacing: '-0.02em', color: SITE.ink, margin: '14px 0 14px', maxWidth: 880,
        }}>
          Got a question we couldn't answer online? <span style={{ fontStyle: 'italic', color: SITE.primary }}>Let's talk.</span>
        </h1>
        <p style={{ fontSize: 16.5, lineHeight: 1.6, color: SITE.ink2, maxWidth: 720, margin: 0 }}>
          For bookings, please use the platform — it's faster. This form is for
          everything else: feedback, accessibility requests, partnerships, or if
          something's gone wrong.
        </p>
      </div>
    </section>
  );
}

function ChannelStrip() {
  const channels = [
    { icon: 'whatsapp', l: 'WhatsApp', v: '+27 11 717 0000', sub: 'Mon–Fri · 8:00–17:00', tone: SITE.tutoring, soft: SITE.tutoringSoft },
    { icon: 'mail',     l: 'Email',    v: 'wash@wits.ac.za', sub: 'Reply within 1 working day', tone: SITE.writing, soft: SITE.writingSoft },
    { icon: 'phone',    l: 'Urgent line', v: '011 717 8200', sub: 'For appointment issues only', tone: SITE.accent, soft: SITE.accentSoft },
    { icon: 'pin',      l: 'Walk in', v: '1st Floor, Solomon Mahlangu House', sub: 'East Campus · Braamfontein', tone: SITE.advising, soft: SITE.advisingSoft },
  ];
  return (
    <section style={{ background: SITE.bg, padding: '8px 32px 48px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {channels.map((c, i) => (
            <a key={i} style={{
              display: 'flex', flexDirection: 'column', gap: 14,
              background: SITE.surface, border: `1px solid ${SITE.line}`,
              borderRadius: 18, padding: 22, cursor: 'pointer', textDecoration: 'none', color: 'inherit',
              transition: 'box-shadow .15s, transform .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px -8px rgba(20,20,10,0.14)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, background: c.soft, color: c.tone,
                display: 'grid', placeItems: 'center',
              }}>
                <SIcon name={c.icon} size={18} />
              </div>
              <div>
                <div style={{ fontFamily: sansFF, fontSize: 11, letterSpacing: 0.5, textTransform: 'uppercase', color: SITE.muted, marginBottom: 4 }}>{c.l}</div>
                <div style={{ fontFamily: dispFF, fontSize: 22, lineHeight: 1.15, color: SITE.ink }}>{c.v}</div>
                <div style={{ fontSize: 12, color: SITE.muted, marginTop: 6 }}>{c.sub}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Interactive contact form ──────────────────────────────────
function ContactMain() {
  const topics = ['A booking issue', 'Feedback on a session', 'Accessibility request', 'Partnership / staff', 'Something else'];
  const [topic, setTopic]       = React.useState(0);
  const [name, setName]         = React.useState('');
  const [studentNum, setStudent] = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [message, setMessage]   = React.useState('');
  const [copyMe, setCopyMe]     = React.useState(true);
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors]     = React.useState({});

  const inputStyle = (err) => ({
    width: '100%', padding: '12px 16px', borderRadius: 12,
    border: `1.5px solid ${err ? '#B91C1C' : SITE.lineStrong}`,
    background: '#fff', fontSize: 14, color: SITE.ink, fontFamily: sansFF,
    outline: 'none', transition: 'border-color .15s',
    boxSizing: 'border-box',
  });

  const validate = () => {
    const e = {};
    if (!name.trim())    e.name = true;
    if (!email.trim())   e.email = true;
    if (!message.trim()) e.message = true;
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section style={{ background: SITE.bg, padding: '20px 32px 88px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 28 }}>
          <div style={{
            background: SITE.surface, borderRadius: 24, padding: 56, border: `1px solid ${SITE.line}`,
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
            minHeight: 420,
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%', background: SITE.primaryTint, color: SITE.primary,
              display: 'grid', placeItems: 'center', marginBottom: 20,
            }}>
              <SIcon name="check" size={28} stroke={2} />
            </div>
            <div style={{ fontFamily: dispFF, fontSize: 36, lineHeight: 1.1, marginBottom: 10 }}>Message sent!</div>
            <p style={{ fontSize: 15, color: SITE.muted, lineHeight: 1.6, maxWidth: 360, margin: '0 0 28px' }}>
              We'll get back to you within one working day. Check your inbox{copyMe ? ' — we sent you a copy' : ''}.
            </p>
            <CTA size="md" variant="ghost" icon={null} as="button" onClick={() => { setSubmitted(false); setName(''); setStudent(''); setEmail(''); setMessage(''); setErrors({}); }}>
              Send another message
            </CTA>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <LocationCard />
            <HoursCard />
            <AccessibilityCard />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: SITE.bg, padding: '20px 32px 88px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.35fr 1fr', gap: 28 }}>
        <form onSubmit={handleSubmit} noValidate style={{ background: SITE.surface, borderRadius: 24, padding: 36, border: `1px solid ${SITE.line}` }}>
          <div style={{ fontFamily: dispFF, fontSize: 28, color: SITE.ink, marginBottom: 4 }}>Send us a message</div>
          <div style={{ fontSize: 13.5, color: SITE.muted, marginBottom: 24 }}>
            Replies come from a real person, usually within one working day.
          </div>

          {/* Topic selector */}
          <FormField label="What's this about?">
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {topics.map((t, i) => (
                <span key={i} onClick={() => setTopic(i)} style={{
                  padding: '8px 14px', borderRadius: 999, fontSize: 13,
                  border: `1px solid ${i === topic ? SITE.primary : SITE.lineStrong}`,
                  background: i === topic ? SITE.primaryTint : '#fff',
                  color: i === topic ? SITE.primary : SITE.ink2,
                  fontWeight: i === topic ? 600 : 500, cursor: 'pointer',
                  transition: 'background .12s, border-color .12s',
                  userSelect: 'none',
                }}>{t}</span>
              ))}
            </div>
          </FormField>

          {/* Name + student number */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <FormField label="Your name" required error={errors.name}>
              <input
                style={inputStyle(errors.name)}
                placeholder="e.g. Thandi Mbatha"
                value={name}
                onChange={e => { setName(e.target.value); setErrors(v => ({ ...v, name: false })); }}
                onFocus={e => e.target.style.borderColor = SITE.primary}
                onBlur={e => e.target.style.borderColor = errors.name ? '#B91C1C' : SITE.lineStrong}
              />
            </FormField>
            <FormField label="Student / staff number">
              <input
                style={inputStyle(false)}
                placeholder="e.g. 2245319"
                value={studentNum}
                onChange={e => setStudent(e.target.value)}
                onFocus={e => e.target.style.borderColor = SITE.primary}
                onBlur={e => e.target.style.borderColor = SITE.lineStrong}
              />
            </FormField>
          </div>

          <FormField label="Wits email" required error={errors.email}>
            <input
              type="email"
              style={inputStyle(errors.email)}
              placeholder="you@students.wits.ac.za"
              value={email}
              onChange={e => { setEmail(e.target.value); setErrors(v => ({ ...v, email: false })); }}
              onFocus={e => e.target.style.borderColor = SITE.primary}
              onBlur={e => e.target.style.borderColor = errors.email ? '#B91C1C' : SITE.lineStrong}
            />
          </FormField>

          <FormField label="Tell us what's going on" required error={errors.message}>
            <textarea
              style={{ ...inputStyle(errors.message), minHeight: 110, resize: 'vertical', lineHeight: 1.55 }}
              placeholder="Tell us what happened or what you need help with…"
              value={message}
              onChange={e => { setMessage(e.target.value); setErrors(v => ({ ...v, message: false })); }}
              onFocus={e => e.target.style.borderColor = SITE.primary}
              onBlur={e => e.target.style.borderColor = errors.message ? '#B91C1C' : SITE.lineStrong}
            />
          </FormField>

          {/* POPIA note */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '14px 16px',
            background: SITE.paper, borderRadius: 12, marginBottom: 22 }}>
            <SIcon name="lock" size={14} />
            <div style={{ fontSize: 12.5, color: SITE.ink2, lineHeight: 1.5 }}>
              We only share what you write with the WASH coordinator. Stored under <b>POPIA</b> for 12 months, then deleted.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'space-between' }}>
            <label onClick={() => setCopyMe(v => !v)} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: SITE.ink2, cursor: 'pointer', userSelect: 'none' }}>
              <span style={{
                width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                border: `1.5px solid ${copyMe ? SITE.primary : SITE.lineStrong}`,
                display: 'grid', placeItems: 'center',
                background: copyMe ? SITE.primary : '#fff', color: '#fff',
                transition: 'background .12s, border-color .12s',
              }}>
                {copyMe && <SIcon name="check" size={11} stroke={2.4} />}
              </span>
              Email me a copy of this message
            </label>
            <button type="submit" style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: sansFF, fontWeight: 500, fontSize: 15,
              padding: '16px 26px', borderRadius: 999, cursor: 'pointer',
              background: SITE.primary, color: '#fff', border: 'none',
              transition: 'background .15s, transform .06s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = SITE.primaryInk}
            onMouseLeave={e => e.currentTarget.style.background = SITE.primary}
            onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
            onMouseUp={e => e.currentTarget.style.transform = ''}>
              Send message <SIcon name="arrowRight" size={16} stroke={1.8} />
            </button>
          </div>
        </form>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <LocationCard />
          <HoursCard />
          <AccessibilityCard />
        </div>
      </div>
    </section>
  );
}

function FormField({ label, children, required, error }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ fontFamily: sansFF, fontSize: 12.5, fontWeight: 500, color: error ? '#B91C1C' : SITE.ink2,
        marginBottom: 8, letterSpacing: 0.1, display: 'flex', gap: 4 }}>
        {label}{required && <span style={{ color: SITE.accent }}>*</span>}
      </div>
      {children}
      {error && <div style={{ fontSize: 11.5, color: '#B91C1C', marginTop: 5 }}>This field is required.</div>}
    </div>
  );
}

function LocationCard() {
  return (
    <div style={{ background: SITE.surface, borderRadius: 24, border: `1px solid ${SITE.line}`, overflow: 'hidden' }}>
      <MapDoodle />
      <div style={{ padding: 22 }}>
        <div style={{ fontFamily: dispFF, fontSize: 22, color: SITE.ink, marginBottom: 6 }}>Solomon Mahlangu House</div>
        <div style={{ fontSize: 13.5, color: SITE.muted, lineHeight: 1.55 }}>
          1st Floor · East Campus<br/>
          University of the Witwatersrand · Braamfontein, 2050
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
          <CTA size="sm" variant="ghost" icon="arrowUpRight" as="a" href="https://maps.google.com/?q=Solomon+Mahlangu+House+Wits+University" target="_blank">Open in Maps</CTA>
          <CTA size="sm" variant="ghost" icon={null}>Campus shuttle stops</CTA>
        </div>
      </div>
    </div>
  );
}

function MapDoodle() {
  return (
    <div style={{ height: 180, background: SITE.primaryTint, position: 'relative', overflow: 'hidden' }}>
      <svg viewBox="0 0 400 180" width="100%" height="100%" preserveAspectRatio="none">
        <path d="M0 40 L400 60" stroke={SITE.lineStrong} strokeWidth="14" opacity="0.35" />
        <path d="M0 120 L400 130" stroke={SITE.lineStrong} strokeWidth="10" opacity="0.3" />
        <path d="M120 0 L150 180" stroke={SITE.lineStrong} strokeWidth="12" opacity="0.3" />
        <path d="M260 0 L300 180" stroke={SITE.lineStrong} strokeWidth="8" opacity="0.25" />
        {[[20,80,60,20],[170,80,70,30],[330,80,50,30],[40,140,60,30],[200,150,80,20]].map((b,i) => (
          <rect key={i} x={b[0]} y={b[1]} width={b[2]} height={b[3]} fill={SITE.primary} opacity={0.08} />
        ))}
        <circle cx="80" cy="20" r="14" fill={SITE.tutoring} opacity={0.18} />
        <circle cx="345" cy="155" r="18" fill={SITE.tutoring} opacity={0.18} />
      </svg>
      <div style={{
        position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -100%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{
          background: SITE.accent, color: '#fff', padding: '8px 12px',
          borderRadius: 999, fontFamily: sansFF, fontSize: 12, fontWeight: 500,
          display: 'flex', alignItems: 'center', gap: 6,
          boxShadow: '0 6px 14px -4px rgba(216,89,58,0.5)',
        }}>
          <SIcon name="pin" size={13} /> WASH · 1st Floor
        </div>
        <div style={{ width: 1, height: 14, background: SITE.accent }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: SITE.accent, border: '2px solid #fff' }} />
      </div>
    </div>
  );
}

function HoursCard() {
  const now = new Date();
  const day = now.getDay(); // 0=Sun,6=Sat
  const h = now.getHours() + now.getMinutes() / 60;
  const isOpen = day >= 1 && day <= 5 && h >= 8 && h < (day === 4 ? 19.5 : day === 5 ? 15 : 17);

  const days = [
    { d: 'Mon – Wed', h: '08:00 – 17:00' },
    { d: 'Thursday',  h: '08:00 – 19:30', tag: 'Late' },
    { d: 'Friday',    h: '08:00 – 15:00' },
    { d: 'Saturday',  h: '09:00 – 12:00', tag: 'Virtual only' },
    { d: 'Sunday',    h: 'Closed' },
  ];
  return (
    <div style={{ background: SITE.primaryInk, color: '#fff', borderRadius: 24, padding: 24 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ fontFamily: dispFF, fontSize: 22 }}>Office hours</div>
        <span style={{
          padding: '4px 10px', borderRadius: 999, fontSize: 11, fontWeight: 500,
          background: isOpen ? 'rgba(110,140,70,0.25)' : 'rgba(255,255,255,0.1)',
          color: isOpen ? '#A5C078' : 'rgba(255,255,255,0.55)',
          display: 'inline-flex', alignItems: 'center', gap: 6,
        }}>
          <span style={{ width: 6, height: 6, background: isOpen ? '#A5C078' : 'rgba(255,255,255,0.4)', borderRadius: '50%' }} />
          {isOpen ? 'Open now' : 'Closed'}
        </span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {days.map((row, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '11px 0', borderBottom: i < days.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 0,
            fontSize: 13.5,
          }}>
            <span style={{ color: 'rgba(255,255,255,0.78)' }}>{row.d}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff' }}>
              {row.tag && (
                <span style={{
                  fontSize: 10, letterSpacing: 0.4, textTransform: 'uppercase',
                  background: row.tag === 'Late' ? SITE.accent : 'rgba(255,255,255,0.14)',
                  color: '#fff', padding: '2px 7px', borderRadius: 4, fontWeight: 600,
                }}>{row.tag}</span>
              )}
              {row.h}
            </span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
        Virtual consultations available 7 days/week, 07:00 – 22:00 SAST.
      </div>
    </div>
  );
}

function AccessibilityCard() {
  const items = [
    'Wheelchair access via Senate House lift',
    'Sign-language interpretation on request',
    'Sessions in English, isiZulu, Sesotho, Afrikaans',
    'Quiet rooms for neuro-divergent students',
  ];
  return (
    <div style={{ background: SITE.surface, borderRadius: 24, border: `1px solid ${SITE.line}`, padding: 22 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: SITE.accentSoft, color: SITE.accent, display: 'grid', placeItems: 'center' }}>
          <SIcon name="sparkles" size={16} />
        </div>
        <div style={{ fontFamily: dispFF, fontSize: 20, color: SITE.ink }}>Accessibility</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
        {items.map((t, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: SITE.ink2 }}>
            <span style={{ width: 18, height: 18, borderRadius: '50%', background: SITE.primaryTint, color: SITE.primary, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
              <SIcon name="check" size={11} stroke={2.4} />
            </span>
            <span style={{ lineHeight: 1.45 }}>{t}</span>
          </div>
        ))}
      </div>
      <a style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 13, color: SITE.primary, fontWeight: 500, cursor: 'pointer', textDecoration: 'none' }}>
        Request specific support <SIcon name="arrowRight" size={13} />
      </a>
    </div>
  );
}

// ── Interactive FAQ accordion ─────────────────────────────────
function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: 'Is WASH really free?', a: 'Yes. Funded by Wits and the student fee. There is no cap on sessions per semester.' },
    { q: 'I missed my session. Can I still rebook?', a: 'Yes — after two no-shows in a semester you'll be asked to confirm 1 hour ahead, but nothing blocks rebooking.' },
    { q: 'Are sessions confidential?', a: 'Yes. Advisors and consultants don't share notes with your lecturers or appear on your transcript.' },
    { q: 'Can postgrad students use peer tutoring?', a: 'Peer tutoring covers 1st and 2nd-year subjects. Postgrads should book Writing or Advising sessions instead.' },
    { q: 'Will my tutor have my draft beforehand?', a: 'If you upload it during booking, yes. They'll get it 24h before the session.' },
  ];
  return (
    <section style={{ background: SITE.paper, padding: '88px 32px', borderTop: `1px solid ${SITE.line}` }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64 }}>
        <div>
          <PillBadge tone="primary">Common questions</PillBadge>
          <h2 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.02em', margin: '14px 0 12px' }}>
            Before you reach out, <span style={{ fontStyle: 'italic', color: SITE.primary }}>have a look here.</span>
          </h2>
          <p style={{ fontSize: 14.5, color: SITE.muted, lineHeight: 1.6, margin: 0 }}>
            We answer the same five questions 80% of the time. If yours isn't here, the form takes 30 seconds.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: `1px solid ${SITE.line}`, padding: '20px 4px' }}>
                <div
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    cursor: 'pointer', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 16,
                    fontFamily: dispFF, fontSize: 22, color: SITE.ink, lineHeight: 1.25,
                    userSelect: 'none',
                  }}>
                  <span>{it.q}</span>
                  <span style={{
                    width: 28, height: 28, borderRadius: '50%', border: `1px solid ${SITE.lineStrong}`,
                    display: 'grid', placeItems: 'center', color: SITE.ink, flexShrink: 0,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform .2s ease',
                  }}>
                    <SIcon name="plus" size={14} />
                  </span>
                </div>
                {isOpen && (
                  <div style={{ marginTop: 10, fontSize: 14.5, color: SITE.muted, lineHeight: 1.6, maxWidth: 560 }}>
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactPage({ onNavigate }) {
  return (
    <div style={{ background: SITE.bg, color: SITE.ink, fontFamily: sansFF }}>
      <AnnouncementBar onComingSoon={() => onNavigate('coming')} />
      <SiteNav currentPage="contact" onNavigate={onNavigate} />
      <ContactHero />
      <ChannelStrip />
      <ContactMain />
      <FAQ />
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}

window.ContactPage = ContactPage;
