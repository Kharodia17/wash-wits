/* global React, SITE, sansFF, dispFF, SIcon, Wordmark, PillBadge, CTA, AnnouncementBar, SiteNav, SiteFooter, useIsMobile */

function HeroSection({ onNavigate }) {
  const m = useIsMobile();
  return (
    <section style={{ background: SITE.bg, padding: m ? '40px 20px 48px' : '64px 32px 80px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? '1fr' : '1.15fr 1fr', gap: 64, alignItems: 'center' }}>
        <div>
          <PillBadge tone="primary">Free for every Wits student</PillBadge>
          <h1 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: m ? 44 : 76, lineHeight: 1.02, letterSpacing: '-0.02em', color: SITE.ink, margin: '20px 0 18px' }}>
            Academic help,<br/>
            <span style={{ fontStyle: 'italic', color: SITE.primary }}>in one place.</span>
          </h1>
          <p style={{ fontFamily: sansFF, fontSize: m ? 16 : 17.5, lineHeight: 1.55, color: SITE.ink2, maxWidth: 520, margin: '0 0 28px' }}>
            Writing consultations, peer tutoring and academic advising — one website, one booking flow, real availability. Book in under two minutes from your phone, get a WhatsApp reminder before you go.
          </p>
          <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 12, alignItems: m ? 'stretch' : 'center', flexWrap: 'wrap' }}>
            <CTA size="lg" variant="primary" style={m ? { justifyContent: 'center' } : {}} onClick={() => onNavigate('coming')}>
              Join the waitlist
            </CTA>
            <CTA size="lg" variant="ghost" icon={null} style={m ? { justifyContent: 'center' } : {}} onClick={() => onNavigate('contact')}>
              Contact us
            </CTA>
            {!m && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 6, fontSize: 13, color: SITE.muted, fontFamily: sansFF }}>
                <span style={{ display: 'flex' }}>
                  {[0,1,2].map(i => (
                    <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', background: [SITE.tutoringSoft, SITE.writingSoft, SITE.advisingSoft][i], border: '2px solid ' + SITE.bg, marginLeft: i ? -10 : 0, display: 'grid', placeItems: 'center', fontSize: 11, fontWeight: 600, color: [SITE.tutoring, SITE.writing, SITE.advising][i] }}>{['TK','MN','PD'][i]}</div>
                  ))}
                </span>
                <span>50+ peer tutors · 10 consultants</span>
              </div>
            )}
          </div>
          {m && <div style={{ marginTop: 16, fontSize: 13, color: SITE.muted, fontFamily: sansFF }}>50+ peer tutors · 10 consultants · free for all Wits students</div>}
        </div>
        {!m && <HeroVisual />}
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div style={{ position: 'relative', height: 540 }}>
      <svg width="540" height="540" style={{ position: 'absolute', right: -90, top: -30, opacity: 0.4 }}>
        <circle cx="270" cy="270" r="240" fill="none" stroke={SITE.lineStrong} strokeDasharray="2 6" />
        <circle cx="270" cy="270" r="170" fill="none" stroke={SITE.lineStrong} strokeDasharray="2 6" />
      </svg>
      <div style={{ position: 'absolute', right: 0, top: 30, width: 360, background: SITE.primary, color: '#fff', borderRadius: 22, padding: 22, boxShadow: '0 30px 80px -20px rgba(11,47,44,0.45)', transform: 'rotate(2deg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <span style={{ background: 'rgba(255,255,255,0.14)', padding: '5px 10px', borderRadius: 999, fontSize: 11, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ width: 6, height: 6, background: SITE.tutoring, borderRadius: '50%' }} /> Peer tutoring
          </span>
          <span style={{ fontSize: 11.5, color: SITE.accent, fontWeight: 500 }}>● in 21h</span>
        </div>
        <div style={{ fontFamily: dispFF, fontSize: 26, lineHeight: 1.1, marginBottom: 4 }}>STAT1003A · Probability</div>
        <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)' }}>with Thabo K. · Senior tutor · 4.9 ★</div>
        <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(255,255,255,0.16)', display: 'flex', gap: 18, fontSize: 13 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><SIcon name="calendar" size={13} /> Tomorrow</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><SIcon name="clock" size={13} /> 14:00 – 14:45</span>
        </div>
        <button style={{ marginTop: 14, width: '100%', background: '#fff', color: SITE.primary, border: 0, borderRadius: 999, padding: '11px 16px', fontWeight: 600, fontFamily: sansFF, fontSize: 13.5, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, cursor: 'pointer' }}>
          <SIcon name="video" size={14} /> Join with Zoom
        </button>
      </div>
      <div style={{ position: 'absolute', left: 0, top: 230, width: 280, background: '#fff', borderRadius: 18, padding: 18, boxShadow: '0 20px 50px -15px rgba(20,20,10,0.25)', border: '1px solid ' + SITE.line, transform: 'rotate(-4deg)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: SITE.tutoringSoft, color: SITE.tutoring, display: 'grid', placeItems: 'center' }}><SIcon name="check" size={16} /></div>
          <div><div style={{ fontSize: 13, fontWeight: 600, color: SITE.ink }}>Booked!</div><div style={{ fontSize: 11, color: SITE.muted }}>Confirmation #WX-2841</div></div>
        </div>
        <div style={{ padding: '10px 12px', background: SITE.tutoringSoft, borderRadius: 10, fontSize: 12, color: '#3D5223', display: 'flex', gap: 8, alignItems: 'center' }}>
          <SIcon name="whatsapp" size={13} /><span>WhatsApp reminder set for 13:00</span>
        </div>
      </div>
      <div style={{ position: 'absolute', right: 30, bottom: 30, padding: '10px 14px', background: SITE.accent, color: '#fff', borderRadius: 999, boxShadow: '0 14px 30px -10px rgba(216,89,58,0.55)', fontSize: 13, fontWeight: 500, fontFamily: sansFF, display: 'flex', alignItems: 'center', gap: 8 }}>
        <SIcon name="zap" size={14} /> 3 slots open today
      </div>
    </div>
  );
}

function StatStrip() {
  const m = useIsMobile();
  const stats = [
    { n: '4,000+', l: 'Students supported / yr' },
    { n: '50+',    l: 'Senior peer tutors' },
    { n: '24',     l: 'First & second-year subjects' },
    { n: '< 2 min',l: 'Average booking time' },
    { n: 'Free',   l: 'For all registered Wits students' },
  ];
  return (
    <section style={{ background: SITE.paper, borderTop: `1px solid ${SITE.line}`, borderBottom: `1px solid ${SITE.line}`, padding: m ? '20px' : '28px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(5, 1fr)', gap: m ? 16 : 0 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ padding: m ? '8px 0' : '6px 18px', borderLeft: (!m && i > 0) ? `1px solid ${SITE.line}` : 0, borderBottom: m && i < 4 ? `1px solid ${SITE.line}` : 0 }}>
            <div style={{ fontFamily: dispFF, fontSize: m ? 24 : 30, color: SITE.ink, lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: 11.5, color: SITE.muted, marginTop: 6, letterSpacing: 0.2 }}>{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection({ onNavigate }) {
  const m = useIsMobile();
  const services = [
    { key: 'writing',  label: 'Writing Centre',    tag: 'Service 01', ink: '#2F4866', dot: SITE.writing,  soft: SITE.writingSoft,  headline: 'Essays, reports & referencing.',        body: "One-on-one consultations with professional writing consultants. Bring a draft, walk away with a plan. Harvard, APA, OSCOLA — every style covered.", meta: ['45 min sessions','Virtual or Solomon Mahlangu House','10 consultants'], icon: 'pencil' },
    { key: 'tutoring', label: 'Peer Tutoring',     tag: 'Service 02', ink: '#3D5223', dot: SITE.tutoring, soft: SITE.tutoringSoft, headline: 'Subject help from seniors who passed.',  body: "First and second-year Maths, Stats, Accounting, Physics, Computer Science and Law. Senior students who scored 75%+ in the course you're struggling with.", meta: ['30 or 45 min','Same-day slots often available','24 subjects'], icon: 'book' },
    { key: 'advising', label: 'Academic Advising', tag: 'Service 03', ink: '#6E4912', dot: SITE.advising, soft: SITE.advisingSoft, headline: 'Course planning & probation support.',   body: 'Talk to a professional advisor about course registration, switching majors, exclusion appeals and probation recovery. Confidential, judgement-free.', meta: ['20 min sessions','Virtual or in-person','Mon–Fri, plus Thu evenings'], icon: 'compass' },
  ];
  return (
    <section style={{ background: SITE.bg, padding: m ? '48px 20px' : '88px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 36, flexWrap: 'wrap', gap: 16 }}>
          <div>
            <PillBadge tone="primary">Three services · one platform</PillBadge>
            <h2 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: m ? 32 : 48, lineHeight: 1.08, letterSpacing: '-0.02em', color: SITE.ink, margin: '14px 0 8px', maxWidth: 720 }}>
              Whatever kind of help you need, it lives here.
            </h2>
            <p style={{ fontFamily: sansFF, fontSize: 15, color: SITE.muted, maxWidth: 560, margin: 0 }}>
              No more emailing three different offices. Pick a service, find someone with open slots, book it.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
          {services.map(s => (
            <article key={s.key} style={{ background: SITE.surface, border: `1px solid ${SITE.line}`, borderRadius: 24, padding: 28, display: 'flex', flexDirection: 'column', minHeight: m ? 'auto' : 460 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: s.soft, color: s.dot, display: 'grid', placeItems: 'center' }}>
                  <SIcon name={s.icon} size={26} stroke={1.6} />
                </div>
                <span style={{ fontFamily: sansFF, fontSize: 11, color: SITE.muted2, letterSpacing: 0.4, textTransform: 'uppercase' }}>{s.tag}</span>
              </div>
              <div style={{ fontFamily: sansFF, fontSize: 12.5, fontWeight: 600, color: s.ink, marginTop: 32, letterSpacing: 0.4, textTransform: 'uppercase' }}>{s.label}</div>
              <h3 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: 28, lineHeight: 1.1, color: SITE.ink, margin: '8px 0 12px' }}>{s.headline}</h3>
              <p style={{ fontFamily: sansFF, fontSize: 14, color: SITE.muted, lineHeight: 1.55, margin: 0 }}>{s.body}</p>
              <div style={{ marginTop: 'auto', paddingTop: 22, borderTop: `1px dashed ${SITE.line}`, display: 'flex', flexDirection: 'column', gap: 7 }}>
                {s.meta.map((mm, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, color: SITE.ink2 }}>
                    <SIcon name="check" size={12} stroke={2} /><span>{mm}</span>
                  </div>
                ))}
              </div>
              <CTA size="md" variant="ghost" style={{ marginTop: 20 }} onClick={() => onNavigate('coming')}>Coming soon</CTA>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const m = useIsMobile();
  const steps = [
    { n: '01', t: 'Find someone with open time',          b: 'Filter by subject, day, virtual or in-person. See real-time availability — no PDFs, no spreadsheets.', icon: 'search' },
    { n: '02', t: 'Book in under two minutes',            b: 'Pick a slot, confirm. Calendar invite, Zoom link and WhatsApp reminder go out automatically.',          icon: 'calendar' },
    { n: '03', t: 'Show up — or reschedule, no shame',    b: 'Join from your phone, walk into Solomon Mahlangu, or cancel and free up the slot for someone else.',    icon: 'check' },
  ];
  return (
    <section style={{ background: SITE.primaryInk, color: '#fff', padding: m ? '56px 20px' : '88px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <PillBadge tone="paper" style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)' }}>How it works</PillBadge>
        <h2 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: m ? 34 : 52, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', margin: '16px 0 40px', maxWidth: 760 }}>
          Three taps from <span style={{ fontStyle: 'italic', color: SITE.accent }}>"I need help"</span><br/>to a confirmed session.
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: m ? 16 : 24 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 24, padding: 28, position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
                <span style={{ fontFamily: dispFF, fontSize: 50, color: SITE.accent, lineHeight: 1 }}>{s.n}</span>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(255,255,255,0.08)', display: 'grid', placeItems: 'center', color: '#fff' }}>
                  <SIcon name={s.icon} size={20} />
                </div>
              </div>
              <h3 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: 24, lineHeight: 1.15, margin: '0 0 10px' }}>{s.t}</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.55, margin: 0 }}>{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyItWorks() {
  const m = useIsMobile();
  return (
    <section style={{ background: SITE.bg, padding: m ? '56px 20px' : '88px 32px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : '1fr 1fr', gap: m ? 32 : 80, alignItems: 'center', marginBottom: 56 }}>
          <div>
            <PillBadge tone="accent">Built around the 62%</PillBadge>
            <h2 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: m ? 32 : 48, lineHeight: 1.05, letterSpacing: '-0.02em', margin: '14px 0 16px' }}>
              We asked students <span style={{ fontStyle: 'italic' }}>why they gave up.</span>
            </h2>
            <p style={{ fontFamily: sansFF, fontSize: 15.5, lineHeight: 1.6, color: SITE.muted, margin: 0 }}>
              In the 2024 SRC survey, 62% of students who tried WASH never got help. Slow email replies. Outdated tutor lists. No-shows. We rebuilt every one of those moments.
            </p>
          </div>
          <ProblemList />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? 'repeat(2,1fr)' : 'repeat(4, 1fr)', gap: 16 }}>
          {[
            { t: 'Real-time availability', b: 'Synced from Google Calendar — what you see is bookable right now.',      icon: 'calendar' },
            { t: 'WhatsApp reminders',     b: 'Free SMS-style reminders 1 hour before. No-shows drop ~70%.',            icon: 'whatsapp' },
            { t: 'Virtual or in-person',   b: 'Zoom for off-campus or evening students. Solomon Mahlangu for face-to-face.', icon: 'video' },
            { t: 'POPIA-compliant',        b: "Tutors only see their own bookings. No public lists of student names.",   icon: 'lock' },
          ].map((f, i) => (
            <div key={i} style={{ background: SITE.paper, border: `1px solid ${SITE.line}`, borderRadius: 18, padding: 22 }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: '#fff', color: SITE.primary, display: 'grid', placeItems: 'center', marginBottom: 16, border: `1px solid ${SITE.line}` }}>
                <SIcon name={f.icon} size={18} />
              </div>
              <div style={{ fontFamily: sansFF, fontSize: 14.5, fontWeight: 600, color: SITE.ink, marginBottom: 6 }}>{f.t}</div>
              <div style={{ fontSize: 12.5, color: SITE.muted, lineHeight: 1.55 }}>{f.b}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemList() {
  const rows = [
    { old: '"I emailed twice. Never heard back."',           fix: 'Self-service booking. No email required.' },
    { old: '"Have to book two weeks in advance."',           fix: 'Same-day & next-day slots, all services.' },
    { old: '"No central place to see who tutors what."',     fix: '24 subjects, every tutor profile, one search.' },
    { old: '"Showed up. No one came. No reply."',            fix: 'Live reminders both sides + escalation in 5 min.' },
  ];
  return (
    <div style={{ background: '#fff', border: `1px solid ${SITE.line}`, borderRadius: 22, overflow: 'hidden' }}>
      {rows.map((r, i) => (
        <div key={i} style={{ padding: '16px 22px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, borderBottom: i < rows.length - 1 ? `1px solid ${SITE.line}` : 0, alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: SITE.accent, paddingTop: 2, letterSpacing: 0.2, flexShrink: 0 }}>BEFORE</span>
            <span style={{ fontFamily: dispFF, fontSize: 17, lineHeight: 1.25, color: SITE.muted, fontStyle: 'italic' }}>{r.old}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, paddingLeft: 16, borderLeft: `1px dashed ${SITE.line}` }}>
            <span style={{ fontSize: 11, fontWeight: 600, color: SITE.primary, paddingTop: 2, letterSpacing: 0.2, flexShrink: 0 }}>NOW</span>
            <span style={{ fontFamily: sansFF, fontSize: 14, lineHeight: 1.4, color: SITE.ink }}>{r.fix}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Testimonials() {
  const m = useIsMobile();
  const quotes = [
    { q: 'Booked a writing slot at 11pm the night before my essay was due. Walked into Solomon Mahlangu at 9am, walked out with my Harvard refs done.', n: 'Lerato M.', r: '3rd-year Law',    tone: SITE.writing,  soft: SITE.writingSoft },
    { q: 'Found a stats tutor who actually got 92% in STAT1003A last year. Did one 45-min session. Passed my prac.',                                       n: 'Aaliyah J.', r: '1st-year BSc Eng', tone: SITE.tutoring, soft: SITE.tutoringSoft },
    { q: 'Was on academic probation. Booked an advising session at 6pm — virtual, from home. They walked me through the appeal step by step.',             n: 'Sipho D.',   r: '2nd-year BCom',   tone: SITE.advising, soft: SITE.advisingSoft },
  ];
  return (
    <section style={{ background: SITE.paper, padding: m ? '56px 20px' : '88px 32px', borderTop: `1px solid ${SITE.line}`, borderBottom: `1px solid ${SITE.line}` }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: m ? 'flex-start' : 'flex-end', justifyContent: 'space-between', marginBottom: 32, flexDirection: m ? 'column' : 'row', gap: 16 }}>
          <div>
            <PillBadge tone="primary">From the pilot group</PillBadge>
            <h2 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: m ? 30 : 44, margin: '14px 0 0', letterSpacing: '-0.02em' }}>
              Students who got the help they needed.
            </h2>
          </div>
          {!m && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: dispFF, fontSize: 38, color: SITE.primary, lineHeight: 1 }}>4.7 / 5</div>
                <div style={{ fontSize: 12, color: SITE.muted, marginTop: 4 }}>From 312 pilot reviews</div>
              </div>
              <div style={{ display: 'flex', gap: 2, color: '#C99A2C' }}>
                {[0,1,2,3,4].map(i => <SIcon key={i} name="star" size={18} />)}
              </div>
            </div>
          )}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: m ? '1fr' : 'repeat(3, 1fr)', gap: 16 }}>
          {quotes.map((qu, i) => (
            <figure key={i} style={{ margin: 0, background: SITE.surface, border: `1px solid ${SITE.line}`, borderRadius: 22, padding: 26, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: dispFF, fontSize: 44, color: qu.tone, lineHeight: 1, marginBottom: 8 }}>"</div>
              <blockquote style={{ margin: 0, fontFamily: dispFF, fontSize: 21, lineHeight: 1.35, color: SITE.ink, flex: 1 }}>{qu.q}</blockquote>
              <figcaption style={{ marginTop: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: qu.soft, color: qu.tone, display: 'grid', placeItems: 'center', fontFamily: sansFF, fontWeight: 600, fontSize: 13 }}>
                  {qu.n.split(' ').map(p => p[0]).join('')}
                </div>
                <div>
                  <div style={{ fontSize: 13.5, fontWeight: 600, color: SITE.ink }}>{qu.n}</div>
                  <div style={{ fontSize: 12, color: SITE.muted }}>{qu.r}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ onNavigate }) {
  const m = useIsMobile();
  return (
    <section style={{ background: SITE.bg, padding: m ? '40px 20px' : '88px 32px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', background: SITE.primary, color: '#fff', borderRadius: 28, padding: m ? '40px 24px' : '72px 56px', display: 'grid', gridTemplateColumns: m ? '1fr' : '1.4fr 1fr', gap: 56, alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        <svg width="540" height="540" style={{ position: 'absolute', right: -120, bottom: -200, opacity: 0.18 }}>
          <circle cx="270" cy="270" r="240" fill="none" stroke="#fff" strokeDasharray="2 6" />
          <circle cx="270" cy="270" r="170" fill="none" stroke="#fff" strokeDasharray="2 6" />
          <circle cx="270" cy="270" r="100" fill="none" stroke="#fff" strokeDasharray="2 6" />
        </svg>
        <div style={{ position: 'relative' }}>
          <h2 style={{ fontFamily: dispFF, fontWeight: 400, fontSize: m ? 36 : 54, lineHeight: 1.05, letterSpacing: '-0.02em', color: '#fff', margin: '0 0 18px' }}>
            One door for every kind of help.
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.78)', maxWidth: 460, margin: '0 0 26px', lineHeight: 1.55 }}>
            Free for every registered Wits student. Same-day slots, virtual options, no email tag.
          </p>
          <div style={{ display: 'flex', flexDirection: m ? 'column' : 'row', gap: 12, alignItems: m ? 'stretch' : 'center', flexWrap: 'wrap' }}>
            <CTA size="lg" variant="primary" style={m ? { justifyContent: 'center' } : {}} onClick={() => onNavigate('coming')}>Join the waitlist</CTA>
            <CTA size="lg" variant="paper" icon={null} style={m ? { justifyContent: 'center' } : {}} onClick={() => onNavigate('contact')}>Contact us</CTA>
          </div>
        </div>
        {!m && (
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 20, padding: 24, width: 280 }}>
              <div style={{ fontFamily: sansFF, fontSize: 11, color: 'rgba(255,255,255,0.6)', letterSpacing: 0.6, textTransform: 'uppercase' }}>Open today</div>
              <div style={{ fontFamily: dispFF, fontSize: 36, lineHeight: 1.05, margin: '8px 0 14px' }}>
                17 slots<br/><span style={{ fontStyle: 'italic', color: SITE.accent }}>this afternoon</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 9, fontSize: 13 }}>
                {[{ l: 'Stats tutoring', n: '5 slots', c: SITE.tutoring }, { l: 'Writing consult', n: '8 slots', c: SITE.writing }, { l: 'Advising', n: '4 slots', c: SITE.advising }].map((r, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 9, borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.12)' : 0 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.85)' }}>
                      <span style={{ width: 6, height: 6, background: r.c, borderRadius: '50%' }} />{r.l}
                    </span>
                    <span style={{ color: '#fff', fontWeight: 500 }}>{r.n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function HomePage({ onNavigate }) {
  return (
    <div style={{ background: SITE.bg, color: SITE.ink, fontFamily: sansFF }}>
      <AnnouncementBar onComingSoon={() => onNavigate('coming')} />
      <SiteNav currentPage="home" onNavigate={onNavigate} />
      <HeroSection onNavigate={onNavigate} />
      <StatStrip />
      <ServicesSection onNavigate={onNavigate} />
      <HowItWorks />
      <WhyItWorks />
      <Testimonials />
      <FinalCTA onNavigate={onNavigate} />
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}

window.HomePage = HomePage;
