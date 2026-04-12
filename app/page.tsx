const APP_STORE = "https://apps.apple.com/pl/app/cmok/id6760717645";

export default function Home() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', position: 'relative', overflow: 'clip' }}>
        {/* Animated orbs */}
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: '#FF6B6B', opacity: 0.12, filter: 'blur(100px)', top: -120, left: -220, animation: 'orb-drift 12s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', width: 450, height: 450, borderRadius: '50%', background: '#2EC4B6', opacity: 0.12, filter: 'blur(100px)', bottom: -120, right: -180, animation: 'orb-drift 15s ease-in-out infinite reverse' }} />
        <div style={{ position: 'absolute', width: 300, height: 300, borderRadius: '50%', background: '#E85D3A', opacity: 0.06, filter: 'blur(80px)', top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }} />

        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: 600 }}>
          <div className="anim-fade-up anim-d1" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 40 }}>
            <h1 style={{ fontSize: 64, fontWeight: 800, color: '#E85D3A', margin: 0, letterSpacing: -2 }}>cmok</h1>
            <div style={{ animation: 'breathe 3s ease-in-out infinite' }}>
              <svg width="70" height="28" viewBox="0 0 60 24" fill="none">
                <circle cx="10" cy="12" r="8" fill="#FF6B6B" />
                <line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="50" cy="12" r="8" fill="#2EC4B6" />
              </svg>
            </div>
          </div>
          <h2 className="anim-fade-up anim-d2" style={{ fontSize: 48, fontWeight: 800, lineHeight: 1.15, marginBottom: 24, color: '#2D2926' }}>Codzienny znak,<br/>że jest OK</h2>
          <p className="anim-fade-up anim-d3" style={{ fontSize: 20, color: '#9B9490', lineHeight: 1.6, marginBottom: 40 }}>Dla Ciebie i Twoich bliskich.<br/>Bez dzwonienia, bez stresu.</p>
          <a className="anim-fade-up anim-d4" href={APP_STORE} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#E85D3A', color: 'white', fontSize: 18, fontWeight: 700, padding: '18px 40px', borderRadius: 18, textDecoration: 'none', boxShadow: '0 8px 32px rgba(232,93,58,0.35)', transition: 'transform 0.2s, box-shadow 0.2s' }}>
            Pobierz za darmo →
          </a>
        </div>

        {/* Scroll hint */}
        <div style={{ position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)', animation: 'scroll-hint 2.5s ease-in-out infinite', textAlign: 'center' }}>
          <div style={{ fontSize: 11, color: '#AAA299', letterSpacing: 3, textTransform: 'uppercase', marginBottom: 6 }}>przewiń</div>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#AAA299" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

      {/* ═══ PHONE MOCKUPS ═══ */}
      <section className="reveal" style={{ padding: '80px 24px 100px' }}>
        <h3 style={{ fontSize: 32, fontWeight: 800, textAlign: 'center', marginBottom: 8, color: '#2D2926' }}>Jak wygląda cmok</h3>
        <p style={{ fontSize: 16, color: '#9B9490', textAlign: 'center', marginBottom: 60 }}>Dwa ekrany. Dwie strony. Jeden spokój.</p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Phone 1: Signaler */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, animation: 'slide-in-left 0.8s ease-out both' }}>
            <div style={{ width: 270, height: 540, borderRadius: 40, background: '#FFF8F2', border: '6px solid #1a1a1a', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 90, height: 26, background: '#1a1a1a', borderRadius: '0 0 14px 14px', margin: '0 auto' }} />
              <div style={{ padding: '20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#E85D3A' }}>cmok</span>
                <span style={{ fontSize: 11, color: '#9B9490', marginTop: 2 }}>Mama</span>
                <div style={{ width: 140, height: 140, borderRadius: '50%', background: '#2EC4B6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 28, animation: 'pulse-glow 3s ease-in-out infinite, breathe 3s ease-in-out infinite' }}>
                  <span style={{ color: 'white', fontSize: 17, fontWeight: 700 }}>Daj znak</span>
                </div>
                <span style={{ fontSize: 12, color: '#9B9490', marginTop: 16 }}>Mama czeka na Twój znak</span>
                <div style={{ display: 'flex', gap: 5, marginTop: 14 }}>
                  {[1,1,0,1,1,0,0].map((ok, i) => (
                    <div key={i} style={{ width: 9, height: 9, borderRadius: 5, background: ok ? '#2EC4B6' : '#E0DAD3', transition: 'background 0.3s' }} />
                  ))}
                </div>
                {/* Urgent button hint */}
                <div style={{ marginTop: 24, padding: '10px 16px', borderRadius: 12, border: '1px solid #E0DAD3', background: 'white' }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: '#2D2926' }}>Potrzebuję pomocy</span>
                </div>
              </div>
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#2D2926' }}>Mama daje znak</span>
            <span style={{ fontSize: 13, color: '#9B9490' }}>Jeden tap rano</span>
          </div>

          {/* Phone 2: Recipient */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, animation: 'slide-in-right 0.8s ease-out both' }}>
            <div style={{ width: 270, height: 540, borderRadius: 40, background: '#FFF8F2', border: '6px solid #1a1a1a', position: 'relative', overflow: 'hidden', boxShadow: '0 24px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)' }}>
              <div style={{ width: 90, height: 26, background: '#1a1a1a', borderRadius: '0 0 14px 14px', margin: '0 auto' }} />
              <div style={{ padding: '20px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#E85D3A' }}>cmok</span>
                <span style={{ fontSize: 11, color: '#9B9490', marginTop: 2 }}>od Mamy</span>
                <div style={{ width: 130, height: 130, borderRadius: '50%', background: '#E0F7F5', border: '3px solid #2EC4B6', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 24 }}>
                  <span style={{ color: '#2EC4B6', fontSize: 36, fontWeight: 300 }}>✓</span>
                </div>
                <span style={{ fontSize: 16, fontWeight: 700, color: '#2D2926', marginTop: 12 }}>Znak od Mamy</span>
                <span style={{ fontSize: 11, color: '#9B9490', marginTop: 4 }}>Spokojnie · 08:14</span>
                <div style={{ display: 'flex', gap: 5, marginTop: 12 }}>
                  {[1,1,1,1,1,1,1].map((_, i) => (
                    <div key={i} style={{ width: 9, height: 9, borderRadius: 5, background: '#2EC4B6' }} />
                  ))}
                </div>
                <span style={{ fontSize: 10, color: '#2EC4B6', fontWeight: 600, marginTop: 4 }}>Pełny tydzień!</span>
                <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                  {[
                    { s: '♥', c: '#FF6B6B', l: 'Kocham' },
                    { s: '•', c: '#A78BFA', l: 'Dobranoc' },
                    { s: '✓', c: '#2EC4B6', l: 'OK!' },
                    { s: '★', c: '#FFD93D', l: 'Super!' },
                  ].map((r) => (
                    <div key={r.s} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                      <div style={{ width: 38, height: 38, borderRadius: 10, background: 'white', border: '1px solid #E0DAD3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, color: r.c }}>
                        {r.s}
                      </div>
                      <span style={{ fontSize: 7, color: '#AAA299' }}>{r.l}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#2D2926' }}>Syn ma spokój</span>
            <span style={{ fontSize: 13, color: '#9B9490' }}>Wie, że Mama jest OK</span>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section className="reveal" style={{ padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h3 style={{ fontSize: 34, fontWeight: 800, marginBottom: 24, color: '#2D2926' }}>Dzwonienie codziennie?<br/>Na to nie ma czasu.</h3>
          <p style={{ fontSize: 17, color: '#9B9490', lineHeight: 1.8 }}>
            W zabieganym świecie trudno dzwonić do mamy każdego dnia.
            SMS-y giną w powiadomieniach.
            A niepokój, czy u niej wszystko OK, zostaje.
          </p>
          <p style={{ fontSize: 17, color: '#9B9490', lineHeight: 1.8, marginTop: 20 }}>
            cmok zamienia ten ciężar w lekki, codzienny rytuał.
            <br/><strong style={{ color: '#2D2926' }}>Jeden gest. Spokój na cały dzień.</strong>
          </p>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="reveal" style={{ padding: '100px 24px', background: 'rgba(255,255,255,0.5)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h3 style={{ fontSize: 34, fontWeight: 800, textAlign: 'center', marginBottom: 60, color: '#2D2926' }}>Prosty jak cmok na dzień dobry</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 24 }}>
            {[
              { color: '#2EC4B6', icon: '●', title: 'Daj znak', desc: 'Rano otwierasz apkę i tapujesz jedno kółko. Trwa to 2 sekundy. Gotowe.' },
              { color: '#FF6B6B', icon: '♥', title: 'Bliscy wiedzą', desc: 'Syn, córka, sąsiadka dostaje ciepłe powiadomienie. Bez dzwonienia.' },
              { color: '#E85D3A', icon: '◆', title: 'A gdy coś się dzieje', desc: 'Jeden gest i cały krąg bliskich wie natychmiast. Z lokalizacją.' },
            ].map((step, i) => (
              <div key={step.title} style={{ background: '#FFF8F2', borderRadius: 24, padding: 32, border: '1px solid rgba(224,218,211,0.5)', transition: 'transform 0.3s, box-shadow 0.3s' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `${step.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, fontSize: 22, color: step.color }}>
                  {step.icon}
                </div>
                <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 10, color: '#2D2926' }}>{step.title}</h4>
                <p style={{ fontSize: 15, color: '#9B9490', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section className="reveal" style={{ padding: '100px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto', position: 'relative' }}>
          <div style={{ fontSize: 100, color: '#2EC4B6', opacity: 0.08, fontFamily: 'Georgia, serif', lineHeight: 0.8, marginBottom: 20 }}>„</div>
          <p style={{ fontSize: 26, fontWeight: 700, lineHeight: 1.5, marginBottom: 20, color: '#2D2926' }}>
            Od 30 dni codziennie dostaję znak od mamy.
            Nie muszę dzwonić. Nie muszę się martwić.
            <br/><span style={{ color: '#2EC4B6' }}>Mam spokój. Ona też.</span>
          </p>
          <p style={{ color: '#AAA299', fontSize: 14 }}>Darek, Warszawa</p>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ padding: '64px 24px', background: 'rgba(46,196,182,0.05)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: 56, flexWrap: 'wrap', textAlign: 'center' }}>
          {[
            { val: '1 tap', label: 'dziennie wystarczy', color: '#2EC4B6' },
            { val: '30s', label: 'cały rytuał', color: '#E85D3A' },
            { val: '24/7', label: 'bezpiecznik', color: '#FF6B6B' },
          ].map((s) => (
            <div key={s.val}>
              <div style={{ fontSize: 36, fontWeight: 800, color: s.color }}>{s.val}</div>
              <div style={{ fontSize: 14, color: '#9B9490', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CIRCLE ═══ */}
      <section className="reveal" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 500, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
            <div style={{ position: 'relative', width: 120, height: 120 }}>
              <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 36, height: 36, borderRadius: '50%', background: '#FF6B6B', boxShadow: '0 4px 16px rgba(255,107,107,0.3)', animation: 'float 4s ease-in-out infinite' }} />
              <div style={{ position: 'absolute', bottom: 4, left: 4, width: 36, height: 36, borderRadius: '50%', background: '#2EC4B6', boxShadow: '0 4px 16px rgba(46,196,182,0.3)', animation: 'float 4s ease-in-out infinite 1s' }} />
              <div style={{ position: 'absolute', bottom: 4, right: 4, width: 36, height: 36, borderRadius: '50%', background: '#E85D3A', boxShadow: '0 4px 16px rgba(232,93,58,0.3)', animation: 'float 4s ease-in-out infinite 2s' }} />
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 120 120"><line x1="60" y1="18" x2="22" y2="98" stroke="#E0DAD3" strokeWidth="1"/><line x1="60" y1="18" x2="98" y2="98" stroke="#E0DAD3" strokeWidth="1"/><line x1="22" y1="98" x2="98" y2="98" stroke="#E0DAD3" strokeWidth="1"/></svg>
            </div>
          </div>
          <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12, color: '#2D2926' }}>Stwórz swój krąg</h3>
          <p style={{ fontSize: 16, color: '#9B9490', lineHeight: 1.7 }}>
            Syn, córka, sąsiadka. Im więcej osób w kręgu,<br/>tym większy spokój. Dla wszystkich.
          </p>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section style={{ padding: '100px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 18, color: '#9B9490', marginBottom: 8 }}>Darmowa. Bez reklam.</p>
        <p style={{ fontSize: 36, fontWeight: 800, marginBottom: 40, color: '#2D2926' }}>Dla spokoju.</p>
        <a href={APP_STORE} style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#E85D3A', color: 'white', fontSize: 18, fontWeight: 700, padding: '18px 48px', borderRadius: 18, textDecoration: 'none', boxShadow: '0 8px 32px rgba(232,93,58,0.35)', transition: 'transform 0.2s' }}>
          Pobierz cmok →
        </a>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding: '40px 24px', borderTop: '1px solid rgba(224,218,211,0.6)', textAlign: 'center', fontSize: 13, color: '#AAA299' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 12 }}>
          <a href="/polityka-prywatnosci" style={{ color: '#AAA299', textDecoration: 'none' }}>Polityka prywatności</a>
          <a href="/regulamin" style={{ color: '#AAA299', textDecoration: 'none' }}>Regulamin</a>
          <a href="mailto:kontakt@cmok.app" style={{ color: '#AAA299', textDecoration: 'none' }}>kontakt@cmok.app</a>
        </div>
        <p>cmok © 2026</p>
      </footer>
    </main>
  );
}
