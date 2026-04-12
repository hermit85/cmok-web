const APP_STORE = "https://apps.apple.com/pl/app/cmok/id6760717645";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: '#FF6B6B', opacity: 0.15, filter: 'blur(80px)', top: -100, left: -200 }} />
        <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: '#2EC4B6', opacity: 0.15, filter: 'blur(80px)', bottom: -100, right: -150 }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 600 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
            <h1 style={{ fontSize: 64, fontWeight: 800, color: '#E85D3A', margin: 0 }}>cmok</h1>
            <svg width="70" height="28" viewBox="0 0 60 24" fill="none">
              <circle cx="10" cy="12" r="8" fill="#FF6B6B" />
              <line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round" />
              <circle cx="50" cy="12" r="8" fill="#2EC4B6" />
            </svg>
          </div>
          <h2 style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, marginBottom: 24, color: '#2D2926' }}>Codzienny znak,<br/>że jest OK</h2>
          <p style={{ fontSize: 20, color: '#9B9490', lineHeight: 1.6, marginBottom: 40 }}>Dla Ciebie i Twoich bliskich.<br/>Bez dzwonienia, bez stresu.</p>
          <a href={APP_STORE} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#E85D3A', color: 'white', fontSize: 18, fontWeight: 700, padding: '18px 40px', borderRadius: 18, textDecoration: 'none', boxShadow: '0 8px 32px rgba(232,93,58,0.35)' }}>
            Pobierz za darmo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 48, marginBottom: 48 }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(255,107,107,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,107,107,0.3)' }} />
            </div>
            <div style={{ width: 1, height: 60, background: '#E0DAD3' }} />
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(46,196,182,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(46,196,182,0.3)' }} />
            </div>
          </div>
          <h3 style={{ fontSize: 36, fontWeight: 800, marginBottom: 20, color: '#2D2926' }}>Ktoś bliski mieszka sam?</h3>
          <p style={{ fontSize: 18, color: '#9B9490', lineHeight: 1.7, maxWidth: 480, margin: '0 auto' }}>
            Mama w Nowym Sączu. Ty w Warszawie. Codziennie myślisz — <em>czy u niej wszystko dobrze?</em>
            <br/><br/>
            Dzwonienie jest ciężkie. SMS-y giną. A niepokój zostaje.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: '100px 24px', background: 'rgba(255,255,255,0.5)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h3 style={{ fontSize: 36, fontWeight: 800, textAlign: 'center', marginBottom: 60, color: '#2D2926' }}>Jak to działa?</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {[
              { color: '#2EC4B6', icon: '●', title: 'Daj znak', desc: 'Jeden tap rano. Nic nie pisz, nic nie mów. Bliscy od razu wiedzą, że jest OK.' },
              { color: '#FF6B6B', icon: '♥', title: 'Miej spokój', desc: 'Dostajesz ciepłe powiadomienie. Bez dzwonienia, bez wymuszonej rozmowy.' },
              { color: '#E85D3A', icon: '◆', title: 'Bezpiecznik', desc: 'Gdy coś się dzieje — jeden gest i cały krąg bliskich wie natychmiast.' },
            ].map((step) => (
              <div key={step.title} style={{ background: '#FFF8F2', borderRadius: 24, padding: 32, border: '1px solid rgba(224,218,211,0.5)' }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: `${step.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, fontSize: 24, color: step.color }}>
                  {step.icon}
                </div>
                <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: '#2D2926' }}>{step.title}</h4>
                <p style={{ fontSize: 15, color: '#9B9490', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{ padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
          <span style={{ position: 'absolute', top: -40, left: 20, fontSize: 120, color: '#2EC4B6', opacity: 0.1, fontFamily: 'Georgia, serif', lineHeight: 0 }}>„</span>
          <p style={{ fontSize: 28, fontWeight: 700, lineHeight: 1.5, marginBottom: 24, color: '#2D2926' }}>
            Od 30 dni codziennie dostaję znak od mamy. Nie muszę dzwonić. Mam spokój.
            <br/><span style={{ color: '#2EC4B6' }}>Ona też.</span>
          </p>
          <p style={{ color: '#AAA299', fontSize: 15 }}>— Darek, Warszawa</p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: '100px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 20, color: '#9B9490', marginBottom: 12 }}>Darmowa. Bez reklam.</p>
        <p style={{ fontSize: 36, fontWeight: 800, marginBottom: 40, color: '#2D2926' }}>Dla spokoju.</p>
        <a href={APP_STORE} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#E85D3A', color: 'white', fontSize: 18, fontWeight: 700, padding: '18px 48px', borderRadius: 18, textDecoration: 'none', boxShadow: '0 8px 32px rgba(232,93,58,0.35)' }}>
          Pobierz cmok
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '40px 24px', borderTop: '1px solid #E0DAD3', textAlign: 'center', fontSize: 14, color: '#AAA299' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 16 }}>
          <a href="/polityka-prywatnosci" style={{ color: '#AAA299', textDecoration: 'none' }}>Polityka prywatności</a>
          <a href="/regulamin" style={{ color: '#AAA299', textDecoration: 'none' }}>Regulamin</a>
          <a href="mailto:kontakt@cmok.app" style={{ color: '#AAA299', textDecoration: 'none' }}>kontakt@cmok.app</a>
        </div>
        <p>cmok © 2026</p>
      </footer>
    </main>
  );
}
