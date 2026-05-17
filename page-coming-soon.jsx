/* global React, SITE, sansFF, dispFF, SIcon, PillBadge, CTA, AnnouncementBar, SiteNav, SiteFooter, useIsMobile */
// WASH WordPress site — Coming Soon page (launch announcement)

// ── Live countdown to 1 Sep 2026 ─────────────────────────────
function CountdownGrid() {
  const m = useIsMobile();
  const LAUNCH = new Date('2026-09-01T00:00:00').getTime();

  const calc = () => {
    const diff = Math.max(0, LAUNCH - Date.now());
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };

  const [time, setTime] = React.useState(calc);

  React.useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { v: String(time.days),    l: 'Days' },
    { v: String(time.hours).padStart(2, '0'),   l: 'Hours' },
    { v: String(time.minutes).padStart(2, '0'), l: 'Minutes' },
    { v: String(time.seconds).padStart(2, '0'), l: 'Seconds' },
  ];

  return (
    <div style={{ display: 'flex', gap: m ? 8 : 12, flexWrap: 'wrap' }}>
      {blocks.map((b, i) => (
        <div key={i} style={{
          background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.16)',
          borderRadius: 18, padding: m ? '12px 14px' : '18px 20px', minWidth: m ? 68 : 92, textAlign: 'center',
        }}>
          <div style={{ fontFamily: dispFF, fontSize: m ? 36 : 46, lineHeight: 1, color: '#fff' }}>{b.v}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.6, textTransform: 'uppercase', marginTop: 8 }}>{b.l}</div>
        </div>
      ))}
    </div>
  );
}

// ── Interactive email signup card ─────────────────────────────
function SignupCard() {
  const interests = ['Writing', 'Tutoring', 'Advising', 'All three'];
  const [selected, setSelected] = React.useState(3);
  const [email, setEmail]       = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError]       = React.useState(false);

  const handleSubmit = () => {
    if (!email.trim() || !email.includes('@')) { setError(true); return; }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{
        background: '#fff', color: SITE.ink, borderRadius: 24, padding: 28,
        boxShadow: '0 30px 80px -20px rgba(0,0,0,0.5)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', minHeight: 280,
      }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%', background: SITE.primaryTint, color: SITE.primary,
          display: 'grid', placeItems: 'center', marginBottom: 16,
        }}>
          <SIcon name="check" size={24} stroke={2} />
        </div>
        <div style={{ fontFamily: dispFF, fontSize: 26, lineHeight: 1.15, marginBottom: 8 }}>
          You're on the list!
        </div>
        <div style={{ fontSize: 13.5, color: SITE.muted, lineHeight: 1.6, maxWidth: 260 }}>
          We'll email <b>{email}</b> the moment bookings open in September 2026.
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: '#fff', color: SITE.ink, borderRadius: 24, padding: 28,
      boxShadow: '0 30px 80px -20px rgba(0,0,0,0.5)',
    }}>
      <div style={{ fontFamily: dispFF, fontSize: 28, lineHeight: 1.15, marginBottom: 8 }}>
        Get an email <span style={{ fontStyle: 'italic', color: SITE.primary }}>the day we go live.</span>
      </div>
      <div style={{ fontSize: 13.5, color: SITE.muted, marginBottom: 22 }}>
        One message. No marketing. We'll also let you know if same-day slots open for your subjects.
      </div>

      <div style={{ marginBottom: 12 }}>
        <div style={{ fontSize: 12, color: SITE.muted, marginBottom: 6, fontWeight: 500 }}>Wits email</div>
        <input
          type="email"
          placeholder="you@students.wits.ac.za"
          value={email}
          onChange={e => { setEmail(e.target.value); setError(false); }}
          onKeyDown={e => e.key === 'Enter' && handleSubmit()}
          style={{
            width: '100%', padding: '12px 16px', borderRadius: 12, boxSizing: 'border-box',
            border: `1.5px solid ${error ? '#B91C1C' : SITE.lineStrong}`,
            fontSize: 14, color: SITE.ink, fontFamily: sansFF, outline: 'none',
            transition: 'border-color .15s',
          }}
          onFocus={e => e.target.style.borderColor = SITE.primary}
          onBlur={e => e.target.style.borderColor = error ? '#B91C1C' : SITE.lineStrong}
        />
        {error && <div style={{ fontSize: 11.5, color: '#B91C1C', marginTop: 5 }}>Please enter a valid email address.</div>}
      </div>

      <div style={{ marginBottom: 18 }}>
        <div style={{ fontSize: 12, color: SITE.muted, marginBottom: 8, fontWeight: 500 }}>I'm most interested in</div>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {interests.map((t, i) => (
            <span key={i} onClick={() => setSelected(i)} style={{
              padding: '8px 12px', borderRadius: 999, fontSize: 12.5, cursor: 'pointer',
              border: `1px solid ${i === selected ? SITE.primary : SITE.lineStrong}`,
              background: i === selected ? SITE.primaryTint : '#fff',
              color: i === selected ? SITE.primary : SITE.ink2,
              fontWeight: i === selected ? 600 : 500,
              transition: 'background .12s, border-color .12s',
              userSelect: 'none',
            }}>{t}</span>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} style={{
        width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        fontFamily: sansFF, fontWeight: 500, fontSize: 15, padding: '16px',
        borderRadius: 999, cursor: 'pointer',
        background: SITE.accent, color: '#fff', border: 'none',
        transition: 'background .15s, transform .06s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = SITE.accentInk}
      onMouseLeave={e => e.currentTarget.style.background = SITE.accent}
      onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
      onMouseUp={e => e.currentTarget.style.transform = ''}>
        Add me to the waitlist <SIcon name="arrowRight" size={16} stroke={1.8} />
      </button>

      <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: SITE.muted }}>
        <SIcon name="lock" size={12} />
        <span>POPIA-compliant · we never share your email · unsubscribe any time</span>
      </div>
    </div>
  );
}

function CSHero() {
  const m = useIsMobile();
  return (
    <section style={{
      background: SITE.primaryInk, color: '#fff',
      padding: m ? '56px 20px 40px' : '88px 32px 64px',
      position: 'relative', overflow: 'hidden',
    }}>
      {!m && (
        <svg width="800" height="800" style={{ position: 'absolute', right: -240, top: -140, opacity: 0.12 }}>
          <circle cx="400" cy="400" r="380" fill="none" stroke="#fff" strokeDasharray="2 6" />
          <circle cx="400" cy="400" r="290" fill="none" stroke="#fff" strokeDasharray="2 6" />
          <circle cx="400" cy="400" r="200" fill="none" stroke="#fff" strokeDasharray="2 6" />
          <circle cx="400" cy="400" r="120" fill="none" stroke="#fff" strokeDasharray="2 6" />
        </svg>
      )}

      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid',
        gridTemplateColumns: m ? '1fr' : '1.2fr 1fr', gap: m ? 36 : 56, alignItems: 'center', position: 'relative' }}>
        <div>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(216,89,58,0.18)', color: SITE.accent, padding: '6px 12px',
            borderRadius: 999, fontSize: 12, fontWeight: 600, letterSpacing: 0.5, textTransform: 'uppercase',
          }}>
            <span style={{ width: 6, height: 6, background: SITE.accent, borderRadius: '50%', animation: 'pulse 2s infinite' }} />
            Launching Semester 2 · September 2026
          </span>
          <h1 style={{
            fontFamily: dispFF, fontWeight: 400, fontSize: m ? 48 : 86, lineHeight: 1, letterSpacing: '-0.025em',
            color: '#fff', margin: '20px 0 22px',
          }}>
            The new way to get academic help is <span style={{ fontStyle: 'italic', color: SITE.accent }}>almost here.</span>
          </h1>
          <p style={{
            fontFamily: sansFF, fontSize: m ? 15 : 17.5, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)',
            margin: '0 0 32px', maxWidth: 560,
          }}>
            We're rebuilding WASH from the booking flow up. One central platform.
            Real availability. WhatsApp reminders. Same-day slots. Drop your email and
            we'll tell you the moment it's live.
          </p>
          <CountdownGrid />
        </div>
        <SignupCard />
      </div>
    </section>
  );
}

function FeatureShowcase() {
  const m = useIsMobile();
  return (
    <section style={{ background: SITE.bg, padding: m ? '56px 20px' : '88px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <PillBadge tone="primary">What's launching</PillBadge>
            <h2 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: m ? 32 : 48, letterSpacing: '-0.02em', margin: '14px 0 0', maxWidth: 700, lineHeight: 1.05 }}>
              Six features that fix the things students hate about WASH today.
            </h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: 18 }}>
          {[
            { n: '01', t: 'Find a tutor by subject',      b: 'Filter 50+ peer tutors by course code, day, in-person or virtual. See their rating, last session date, and live availability.', v: 'find' },
            { n: '02', t: 'Book in under 2 minutes',      b: 'Pick a slot, confirm. No email back-and-forth. Calendar invite, Zoom link and a confirmation come back in one tap.',            v: 'book' },
            { n: '03', t: 'Cancel or reschedule easily',  b: 'Life happens. Cancel up to 1 hour ahead, your slot opens up automatically for the next student on the waitlist.',               v: 'cancel' },
            { n: '04', t: 'WhatsApp reminders',           b: 'One free message 1 hour before — both sides. Pilot data shows no-shows drop from 30% to under 9%.',                            v: 'whatsapp' },
            { n: '05', t: 'Virtual consultations',        b: 'Off-campus, working a part-time job, or just sick? Same booking flow, Zoom or Google Meet link auto-generated.',               v: 'virtual' },
            { n: '06', t: 'Rate every session',           b: '5-second rating after each session. Tutors with consistent 4+ stars get more slots. Bad consultants are reassigned.',          v: 'rate' },
          ].map((f, i) => (
            <div key={i} style={{
              background: SITE.surface, border: `1px solid ${SITE.line}`, borderRadius: 22,
              padding: 26, display: 'flex', flexDirection: 'column', gap: 16,
              transition: 'box-shadow .15s, transform .15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 24px -8px rgba(20,20,10,0.14)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = ''; e.currentTarget.style.transform = ''; }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: dispFF, fontSize: 28, color: SITE.accent }}>{f.n}</span>
                <span style={{
                  fontFamily: sansFF, fontSize: 10.5, letterSpacing: 0.5,
                  textTransform: 'uppercase', color: SITE.muted,
                  padding: '4px 9px', border: `1px solid ${SITE.lineStrong}`, borderRadius: 999,
                }}>Day 1 feature</span>
              </div>
              <FeatureVisual variant={f.v} />
              <div>
                <h3 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: 22, lineHeight: 1.15, color: SITE.ink, margin: '0 0 6px' }}>{f.t}</h3>
                <p style={{ fontSize: 13.5, color: SITE.muted, lineHeight: 1.55, margin: 0 }}>{f.b}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureVisual({ variant }) {
  const base = { height: 140, background: SITE.paper, borderRadius: 14, border: `1px solid ${SITE.line}`, padding: 14, position: 'relative', overflow: 'hidden' };
  if (variant === 'find') return (
    <div style={base}>
      <div style={{ display: 'flex', gap: 6, marginBottom: 10 }}>
        {['Stats', 'Maths', 'Today', 'Virtual'].map((t, i) => (
          <span key={i} style={{ padding: '4px 10px', borderRadius: 999, fontSize: 10, fontWeight: 500, background: i === 0 ? SITE.primary : '#fff', color: i === 0 ? '#fff' : SITE.muted, border: `1px solid ${i === 0 ? SITE.primary : SITE.line}` }}>{t}</span>
        ))}
      </div>
      {[['TK','Thabo K.','4.9 ★ · STAT1003A'], ['LS','Lerato S.','4.8 ★ · MATH1036']].map((r, i) => (
        <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '6px 8px', background: '#fff', borderRadius: 10, marginBottom: 6, border: `1px solid ${SITE.line}` }}>
          <div style={{ width: 24, height: 24, borderRadius: '50%', background: SITE.tutoringSoft, color: SITE.tutoring, fontSize: 10, fontWeight: 600, display: 'grid', placeItems: 'center' }}>{r[0]}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, color: SITE.ink, fontWeight: 500 }}>{r[1]}</div>
            <div style={{ fontSize: 10, color: SITE.muted }}>{r[2]}</div>
          </div>
          <span style={{ fontSize: 9, color: SITE.tutoring, fontWeight: 600 }}>● open</span>
        </div>
      ))}
    </div>
  );
  if (variant === 'book') return (
    <div style={base}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
        {['08','10','12','14','16','18'].map((t, i) => (
          <div key={i} style={{ padding: '8px 4px', textAlign: 'center', borderRadius: 8, fontSize: 11, background: i === 3 ? SITE.primary : '#fff', color: i === 3 ? '#fff' : SITE.ink2, border: `1px solid ${i === 3 ? SITE.primary : SITE.line}`, fontWeight: i === 3 ? 600 : 500 }}>{t}:00</div>
        ))}
      </div>
      <div style={{ marginTop: 10, padding: '8px 10px', background: '#fff', borderRadius: 10, border: `1px solid ${SITE.line}`, fontSize: 11.5, color: SITE.ink2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span>Tomorrow · 14:00 with Thabo K.</span>
        <span style={{ color: SITE.tutoring, fontWeight: 600 }}>Confirm →</span>
      </div>
    </div>
  );
  if (variant === 'cancel') return (
    <div style={{ ...base, background: SITE.accentSoft }}>
      <div style={{ fontSize: 11, color: SITE.accentInk, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase' }}>Slot reopened</div>
      <div style={{ fontFamily: dispFF, fontSize: 22, color: SITE.accentInk, marginTop: 4, lineHeight: 1.2 }}>14:00 Stats with Thabo</div>
      <div style={{ marginTop: 12, fontSize: 11.5, color: SITE.accentInk, opacity: 0.85 }}>Sent to 3 students on waitlist · 1 already booked</div>
    </div>
  );
  if (variant === 'whatsapp') return (
    <div style={{ ...base, background: '#E7F4EA' }}>
      <div style={{ background: '#fff', borderRadius: 12, padding: '8px 12px', boxShadow: '0 2px 6px rgba(0,0,0,0.06)', maxWidth: 240, fontSize: 11.5, color: SITE.ink, lineHeight: 1.4 }}>
        <b>WASH · Wits</b><br/>Quick reminder: tutoring with <b>Thabo K.</b> in 1 hour.<br/>Tap to join Zoom →
        <div style={{ marginTop: 4, fontSize: 9, color: SITE.muted, textAlign: 'right' }}>13:00 ✓✓</div>
      </div>
    </div>
  );
  if (variant === 'virtual') return (
    <div style={base}>
      <div style={{ height: 90, background: SITE.primary, borderRadius: 10, position: 'relative', display: 'grid', placeItems: 'center', color: '#fff' }}>
        <SIcon name="video" size={28} stroke={1.4} />
        <div style={{ position: 'absolute', top: 8, right: 8, background: SITE.accent, padding: '2px 7px', borderRadius: 4, fontSize: 9, fontWeight: 600, letterSpacing: 0.4, textTransform: 'uppercase' }}>● Live</div>
        <div style={{ position: 'absolute', bottom: 6, left: 8, fontSize: 10, color: 'rgba(255,255,255,0.7)' }}>Zoom · MATH1036 review</div>
      </div>
      <div style={{ marginTop: 8, fontSize: 11, color: SITE.muted }}>Link auto-generated · stored in your calendar</div>
    </div>
  );
  if (variant === 'rate') return (
    <div style={base}>
      <div style={{ fontSize: 11.5, color: SITE.muted, marginBottom: 8 }}>How was your session with Thabo?</div>
      <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
        {[1,2,3,4,5].map(i => <div key={i} style={{ color: '#C99A2C' }}><SIcon name="star" size={22} /></div>)}
      </div>
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {['Knew the material', 'On time', 'Patient', 'Would rebook'].map((t, i) => (
          <span key={i} style={{ padding: '4px 9px', borderRadius: 999, fontSize: 10, color: SITE.tutoring, background: SITE.tutoringSoft }}>{t}</span>
        ))}
      </div>
    </div>
  );
  return <div style={base} />;
}

function Roadmap() {
  const m = useIsMobile();
  const milestones = [
    { d: 'May 2026', s: 'done',    t: 'User research with 240 students',     b: 'Survey + interviews completed. Findings shared with the SRC.' },
    { d: 'Jun 2026', s: 'done',    t: 'Pilot booking flow tested',           b: 'Closed pilot with 50 students booking Writing & Stats sessions.' },
    { d: 'Jul 2026', s: 'current', t: 'WhatsApp reminder integration',       b: 'Live now in test mode — joins commercial sandbox next month.' },
    { d: 'Aug 2026', s: 'next',    t: 'Tutor onboarding for 50 seniors',     b: 'Calendar sync, profile setup, payment integration with Wits HR.' },
    { d: 'Sep 2026', s: 'next',    t: 'Public launch · all three services',  b: 'Bookings open to every registered student.' },
  ];
  return (
    <section style={{ background: SITE.paper, padding: m ? '56px 20px' : '88px 32px', borderTop: `1px solid ${SITE.line}`, borderBottom: `1px solid ${SITE.line}` }}>
      <div style={{ maxWidth: 980, margin: '0 auto' }}>
        <PillBadge tone="primary">The road to launch</PillBadge>
        <h2 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: m ? 30 : 44, lineHeight: 1.08, letterSpacing: '-0.02em', margin: '14px 0 40px', maxWidth: 700 }}>
          We're not waiting until September to figure it out.
        </h2>
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 11, top: 8, bottom: 8, width: 2,
            background: `linear-gradient(to bottom, ${SITE.primary} 0%, ${SITE.primary} 40%, ${SITE.lineStrong} 40%, ${SITE.lineStrong} 100%)`,
          }} />
          {milestones.map((mi, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: m ? '24px 100px 1fr' : '24px 140px 1fr', gap: m ? 12 : 20, padding: '14px 0', alignItems: 'flex-start', position: 'relative' }}>
              <div style={{
                width: 24, height: 24, borderRadius: '50%',
                background: mi.s === 'done' ? SITE.primary : mi.s === 'current' ? SITE.accent : '#fff',
                border: `2px solid ${mi.s === 'next' ? SITE.lineStrong : 'transparent'}`,
                display: 'grid', placeItems: 'center', color: '#fff', zIndex: 2,
                boxShadow: mi.s === 'current' ? `0 0 0 6px rgba(216,89,58,0.15)` : 'none',
              }}>
                {mi.s === 'done'    && <SIcon name="check" size={12} stroke={2.4} />}
                {mi.s === 'current' && <span style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%' }} />}
              </div>
              <div style={{ fontFamily: sansFF, fontSize: 12, fontWeight: 500, color: SITE.muted, letterSpacing: 0.4, textTransform: 'uppercase', paddingTop: 4 }}>{mi.d}</div>
              <div>
                <div style={{ fontFamily: dispFF, fontSize: m ? 18 : 22, lineHeight: 1.2, color: SITE.ink, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
                  {mi.t}
                  {mi.s === 'current' && (
                    <span style={{ fontFamily: sansFF, fontSize: 10.5, fontWeight: 600, background: SITE.accent, color: '#fff', padding: '2px 8px', borderRadius: 4, letterSpacing: 0.4, textTransform: 'uppercase' }}>In progress</span>
                  )}
                </div>
                <div style={{ fontSize: 14, color: SITE.muted, marginTop: 4, lineHeight: 1.55 }}>{mi.b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MeantimeStrip({ onNavigate }) {
  const m = useIsMobile();
  return (
    <section style={{ background: SITE.bg, padding: m ? '40px 20px' : '60px 32px' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        background: '#fff', borderRadius: 22, border: `1px solid ${SITE.line}`,
        padding: m ? '24px 20px' : '28px 32px',
        display: 'flex', alignItems: m ? 'flex-start' : 'center',
        justifyContent: 'space-between', gap: 24,
        flexDirection: m ? 'column' : 'row',
      }}>
        <div>
          <div style={{ fontFamily: dispFF, fontSize: m ? 22 : 26, lineHeight: 1.2 }}>
            Need help <span style={{ fontStyle: 'italic', color: SITE.primary }}>right now?</span>
          </div>
          <div style={{ fontSize: 14, color: SITE.muted, marginTop: 6 }}>
            The current system still works — slower, but it works. Or pop in to Solomon Mahlangu House.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 10, flexDirection: m ? 'column' : 'row', width: m ? '100%' : 'auto' }}>
          <CTA variant="ghost" icon={null} onClick={() => onNavigate('contact')}>Contact a coordinator</CTA>
          <CTA variant="dark" onClick={() => onNavigate('contact')}>Get directions</CTA>
        </div>
      </div>
    </section>
  );
}

function ComingSoonPage({ onNavigate }) {
  return (
    <div style={{ background: SITE.bg, color: SITE.ink, fontFamily: sansFF }}>
      <AnnouncementBar onComingSoon={() => onNavigate('coming')} />
      <SiteNav currentPage="coming" onNavigate={onNavigate} />
      <CSHero />
      <FeatureShowcase />
      <Roadmap />
      <MeantimeStrip onNavigate={onNavigate} />
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}

window.ComingSoonPage = ComingSoonPage;
