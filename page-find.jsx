/* global React, SITE, sansFF, dispFF, SIcon, PillBadge, CTA, AnnouncementBar, SiteNav, SiteFooter */
// WASH WordPress site — Find a Tutor (bonus page) — also doubles as Screen B mockup

function FindHero() {
  return (
    <section style={{ background: SITE.bg, padding: '48px 32px 24px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <PillBadge tone="primary">Real-time availability · 50+ tutors</PillBadge>
        <h1 style={{
          fontFamily: dispFF, fontWeight: 400, fontSize: 56, lineHeight: 1.05,
          letterSpacing: '-0.02em', margin: '14px 0 14px', maxWidth: 880,
        }}>
          Find someone <span style={{ fontStyle: 'italic', color: SITE.primary }}>who can help you this week.</span>
        </h1>
        <p style={{ fontSize: 16, color: SITE.muted, maxWidth: 640, margin: 0, lineHeight: 1.55 }}>
          Filter by subject, day or mode. Profiles show real ratings and live availability —
          synced from each tutor's Google Calendar.
        </p>
      </div>
    </section>
  );
}

function SearchBar() {
  return (
    <section style={{ background: SITE.bg, padding: '12px 32px 24px', position: 'sticky', top: 76, zIndex: 20 }}>
      <div style={{
        maxWidth: 1240, margin: '0 auto', background: '#fff',
        borderRadius: 18, padding: '8px 8px 8px 20px',
        border: `1px solid ${SITE.line}`, boxShadow: '0 8px 24px -16px rgba(20,20,10,0.18)',
        display: 'flex', alignItems: 'center', gap: 14,
      }}>
        <SIcon name="search" size={18} stroke={1.8} />
        <input style={{
          flex: 1, border: 0, outline: 0, fontFamily: sansFF, fontSize: 15, color: SITE.ink,
          background: 'transparent',
        }} defaultValue="STAT1003A · Probability" />
        <div style={{ height: 28, width: 1, background: SITE.line }} />
        {[
          { l: 'Service', v: 'Peer Tutoring' },
          { l: 'When', v: 'This week' },
          { l: 'Mode', v: 'Any' },
        ].map((f, i) => (
          <button key={i} style={{
            background: 'transparent', border: 0, cursor: 'pointer',
            display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
            padding: '4px 12px', borderRight: i < 2 ? `1px solid ${SITE.line}` : 0,
          }}>
            <span style={{ fontSize: 10.5, color: SITE.muted, letterSpacing: 0.5, textTransform: 'uppercase' }}>{f.l}</span>
            <span style={{ fontSize: 13.5, color: SITE.ink, fontWeight: 500, marginTop: 2 }}>{f.v}</span>
          </button>
        ))}
        <CTA size="md" variant="dark" icon="search">Search</CTA>
      </div>
    </section>
  );
}

// Sidebar filters + result grid
function FindMain() {
  return (
    <section style={{ background: SITE.bg, padding: '24px 32px 88px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid',
        gridTemplateColumns: '260px 1fr', gap: 28 }}>
        <Filters />
        <ResultsGrid />
      </div>
    </section>
  );
}

function Filters() {
  return (
    <aside style={{ position: 'sticky', top: 160, alignSelf: 'flex-start' }}>
      <FilterGroup title="Subject area" defaultExpanded>
        {['Maths & Stats (12)', 'Accounting & Finance (8)', 'Physics & Chem (6)', 'Computer Science (9)', 'Law (4)', 'Engineering (11)'].map((t, i) => (
          <Checkbox key={i} label={t} checked={i === 0 || i === 3} />
        ))}
      </FilterGroup>
      <FilterGroup title="Course code">
        <Input value="STAT1003A" />
      </FilterGroup>
      <FilterGroup title="When">
        {['Today', 'Tomorrow', 'This week', 'Pick a date'].map((t, i) => (
          <Radio key={i} label={t} checked={i === 2} />
        ))}
      </FilterGroup>
      <FilterGroup title="Mode">
        {['Virtual (Zoom)', 'In-person · Solomon Mahlangu', 'Either'].map((t, i) => (
          <Checkbox key={i} label={t} checked={i === 2} />
        ))}
      </FilterGroup>
      <FilterGroup title="Tutor rating">
        <Slider />
      </FilterGroup>
      <button style={{
        marginTop: 10, width: '100%', background: 'transparent', border: 0,
        fontFamily: sansFF, fontSize: 13, color: SITE.muted,
        textDecoration: 'underline', textUnderlineOffset: 4, cursor: 'pointer',
        textAlign: 'left',
      }}>Reset all filters</button>
    </aside>
  );
}

function FilterGroup({ title, children, defaultExpanded }) {
  return (
    <div style={{ paddingBottom: 16, marginBottom: 16, borderBottom: `1px solid ${SITE.line}` }}>
      <div style={{
        fontFamily: sansFF, fontSize: 11.5, fontWeight: 600, color: SITE.ink,
        letterSpacing: 0.4, textTransform: 'uppercase', marginBottom: 12,
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      }}>
        <span>{title}</span>
        <SIcon name="arrowDown" size={11} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>{children}</div>
    </div>
  );
}

function Checkbox({ label, checked }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
      fontSize: 13.5, color: SITE.ink2 }}>
      <span style={{
        width: 16, height: 16, borderRadius: 4, flexShrink: 0,
        border: `1.5px solid ${checked ? SITE.primary : SITE.lineStrong}`,
        background: checked ? SITE.primary : '#fff',
        display: 'grid', placeItems: 'center', color: '#fff',
      }}>{checked && <SIcon name="check" size={10} stroke={2.6} />}</span>
      {label}
    </label>
  );
}
function Radio({ label, checked }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer',
      fontSize: 13.5, color: SITE.ink2 }}>
      <span style={{
        width: 16, height: 16, borderRadius: '50%', flexShrink: 0,
        border: `1.5px solid ${checked ? SITE.primary : SITE.lineStrong}`,
        background: '#fff', display: 'grid', placeItems: 'center',
      }}>{checked && <span style={{ width: 8, height: 8, borderRadius: '50%', background: SITE.primary }} />}</span>
      {label}
    </label>
  );
}
function Input({ value }) {
  return (
    <div style={{
      width: '100%', padding: '8px 12px', borderRadius: 10,
      border: `1px solid ${SITE.lineStrong}`, background: '#fff',
      fontSize: 13.5, color: SITE.ink, fontFamily: sansFF,
    }}>{value}</div>
  );
}
function Slider() {
  return (
    <div>
      <div style={{ height: 4, background: SITE.line, borderRadius: 2, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 0, right: '14%', top: 0, bottom: 0, background: SITE.primary, borderRadius: 2 }} />
        <div style={{ position: 'absolute', left: '36%', top: -4, width: 12, height: 12, borderRadius: '50%', background: '#fff', border: `2px solid ${SITE.primary}` }} />
        <div style={{ position: 'absolute', right: '14%', top: -4, width: 12, height: 12, borderRadius: '50%', background: '#fff', border: `2px solid ${SITE.primary}` }} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11.5, color: SITE.muted }}>
        <span>4.0 ★</span><span>4.8 ★</span>
      </div>
    </div>
  );
}

// Tutor grid
const TUTORS = [
  {
    n: 'Thabo K.', i: 'TK', tone: SITE.tutoring, soft: SITE.tutoringSoft,
    role: 'Senior tutor · 3rd yr BSc',
    subjects: ['STAT1003A', 'STAT2000A', 'MATH1036'],
    rating: 4.9, sessions: 184,
    blurb: 'Got 92% in STAT1003A last year. Specialises in probability theory & R.',
    next: { day: 'Today', time: '15:30', open: 3 },
    mode: 'both',
  },
  {
    n: 'Lerato S.', i: 'LS', tone: SITE.tutoring, soft: SITE.tutoringSoft,
    role: 'Senior tutor · 4th yr BCom',
    subjects: ['STAT1003A', 'ECON1004A', 'BUSE1015A'],
    rating: 4.8, sessions: 142,
    blurb: 'Calm explainer. Patient with students new to stat notation.',
    next: { day: 'Tomorrow', time: '10:00', open: 5 },
    mode: 'virtual',
  },
  {
    n: 'Aaliyah J.', i: 'AJ', tone: SITE.writing, soft: SITE.writingSoft,
    role: 'Senior tutor · 3rd yr BEng',
    subjects: ['STAT1003A', 'MATH1036', 'PHYS1015A'],
    rating: 4.7, sessions: 96,
    blurb: 'Loves working through past papers. Brings a laptop with sims for binomial walks.',
    next: { day: 'Thu', time: '14:00', open: 1 },
    mode: 'in-person',
  },
  {
    n: 'Sipho D.', i: 'SD', tone: SITE.advising, soft: SITE.advisingSoft,
    role: 'Senior tutor · 4th yr BSc',
    subjects: ['STAT1003A', 'STAT2002A', 'COMS1015A'],
    rating: 4.6, sessions: 71,
    blurb: 'Strong on Bayesian basics. Brings examples from current research.',
    next: { day: 'Fri', time: '11:30', open: 2 },
    mode: 'virtual',
  },
  {
    n: 'Naledi M.', i: 'NM', tone: SITE.tutoring, soft: SITE.tutoringSoft,
    role: 'Senior tutor · 3rd yr BSc',
    subjects: ['STAT1003A', 'MATH1036'],
    rating: 4.9, sessions: 110,
    blurb: 'Friendly. Great for first-years who think "they hate stats".',
    next: { day: 'Mon', time: '09:00', open: 4 },
    mode: 'both',
  },
  {
    n: 'Khaya B.', i: 'KB', tone: SITE.writing, soft: SITE.writingSoft,
    role: 'Senior tutor · 4th yr BSc Eng',
    subjects: ['STAT1003A', 'PHYS1015A'],
    rating: 4.5, sessions: 58,
    blurb: 'Engineering-first explanations. Good with practicals & Python.',
    next: null, // fully booked
    mode: 'in-person',
  },
];

function ResultsGrid() {
  return (
    <div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        marginBottom: 16, paddingBottom: 14, borderBottom: `1px solid ${SITE.line}`,
      }}>
        <div style={{ fontFamily: sansFF, fontSize: 14, color: SITE.ink }}>
          <b>{TUTORS.length} tutors</b> match — <span style={{ color: SITE.muted }}>5 with slots this week</span>
        </div>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <span style={{ fontSize: 12.5, color: SITE.muted }}>Sort by</span>
          <button style={{
            background: '#fff', border: `1px solid ${SITE.line}`, padding: '6px 12px',
            borderRadius: 999, fontSize: 13, color: SITE.ink, display: 'flex', alignItems: 'center', gap: 6,
            cursor: 'pointer', fontFamily: sansFF,
          }}>
            Earliest available <SIcon name="arrowDown" size={11} />
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {TUTORS.map((t, i) => <TutorCard key={i} t={t} />)}
      </div>
    </div>
  );
}

function TutorCard({ t }) {
  const ModeIcon = t.mode === 'virtual' ? 'video' : t.mode === 'in-person' ? 'pin' : 'globe';
  const modeLabel = t.mode === 'virtual' ? 'Virtual only' : t.mode === 'in-person' ? 'In-person' : 'Virtual + in-person';
  return (
    <article style={{
      background: '#fff', borderRadius: 20, border: `1px solid ${SITE.line}`, padding: 22,
      display: 'flex', flexDirection: 'column', gap: 14,
    }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
        <div style={{
          width: 52, height: 52, borderRadius: '50%', background: t.soft, color: t.tone,
          fontFamily: sansFF, fontWeight: 600, fontSize: 17,
          display: 'grid', placeItems: 'center', flexShrink: 0,
        }}>{t.i}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <div style={{ fontFamily: dispFF, fontSize: 22, color: SITE.ink, lineHeight: 1.1 }}>{t.n}</div>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 3,
              fontSize: 12, color: '#C99A2C', fontWeight: 600,
            }}>
              <SIcon name="star" size={12} /> {t.rating}
            </span>
            <span style={{ fontSize: 11.5, color: SITE.muted }}>· {t.sessions} sessions</span>
          </div>
          <div style={{ fontSize: 12.5, color: SITE.muted, marginTop: 3 }}>{t.role}</div>
        </div>
        <button style={{
          background: 'transparent', border: 0, cursor: 'pointer',
          color: SITE.muted, padding: 4,
        }} title="Save">
          <SIcon name="bell" size={16} />
        </button>
      </div>

      <p style={{ fontSize: 13.5, color: SITE.ink2, lineHeight: 1.55, margin: 0 }}>{t.blurb}</p>

      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
        {t.subjects.map((s, i) => (
          <span key={i} style={{
            padding: '4px 10px', borderRadius: 6, fontSize: 11.5,
            background: i === 0 ? SITE.primaryTint : SITE.paper,
            color: i === 0 ? SITE.primary : SITE.ink2,
            fontWeight: i === 0 ? 600 : 500, fontFamily: sansFF, letterSpacing: 0.2,
            border: `1px solid ${i === 0 ? SITE.primaryTint : SITE.line}`,
          }}>{s}</span>
        ))}
      </div>

      <div style={{
        marginTop: 'auto', paddingTop: 14, borderTop: `1px solid ${SITE.line}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5,
            fontSize: 12, color: SITE.muted }}>
            <SIcon name={ModeIcon} size={12} /> {modeLabel}
          </span>
          {t.next ? (
            <span style={{
              display: 'flex', alignItems: 'center', gap: 5, fontSize: 12,
              color: t.tone, fontWeight: 600,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: t.tone }} />
              Next: {t.next.day} · {t.next.time}
            </span>
          ) : (
            <span style={{ fontSize: 12, color: SITE.muted2, fontWeight: 500 }}>
              ○ Fully booked this week
            </span>
          )}
        </div>
        {t.next
          ? <CTA size="sm" variant="dark" icon="arrowRight">Book {t.next.open} slot{t.next.open > 1 ? 's' : ''}</CTA>
          : <CTA size="sm" variant="ghost" icon="bell">Notify me</CTA>}
      </div>
    </article>
  );
}

function FindPage({ onNavigate }) {
  return (
    <div style={{ background: SITE.bg, color: SITE.ink, fontFamily: sansFF }}>
      <AnnouncementBar onComingSoon={() => onNavigate('coming')} />
      <SiteNav currentPage="find" onNavigate={onNavigate} />
      <FindHero />
      <SearchBar />
      <FindMain />
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}

window.FindPage = FindPage;
