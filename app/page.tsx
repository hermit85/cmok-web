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

      {/* ═══ MAMA'S PERSPECTIVE — safety ═══ */}
      <section className="reveal" style={{ padding: '100px 24px', background: 'rgba(46,196,182,0.04)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h3 style={{ fontSize: 34, fontWeight: 800, textAlign: 'center', marginBottom: 16, color: '#2D2926' }}>Mama czuje się bezpieczniej</h3>
          <p style={{ fontSize: 16, color: '#9B9490', textAlign: 'center', marginBottom: 56, maxWidth: 500, margin: '0 auto 56px' }}>
            Bo wie, że nie jest sama. I że w razie czego — jeden gest wystarczy.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {/* Card 1: Circle */}
            <div style={{ background: '#FFF8F2', borderRadius: 20, padding: 28, border: '1px solid rgba(224,218,211,0.5)' }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 16 }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#FF6B6B', opacity: 0.7 }} />
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#2EC4B6', opacity: 0.7 }} />
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#E85D3A', opacity: 0.7 }} />
              </div>
              <h4 style={{ fontSize: 17, fontWeight: 700, color: '#2D2926', marginBottom: 8 }}>Mam swój krąg</h4>
              <p style={{ fontSize: 14, color: '#9B9490', lineHeight: 1.6 }}>
                Syn, sąsiadka, koleżanka. Trzy osoby, które widzą mój codzienny znak i wiedzą, że jest dobrze.
              </p>
            </div>

            {/* Card 2: Daily ritual */}
            <div style={{ background: '#FFF8F2', borderRadius: 20, padding: 28, border: '1px solid rgba(224,218,211,0.5)' }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: '#2EC4B6', marginBottom: 16, animation: 'breathe 3s ease-in-out infinite' }} />
              <h4 style={{ fontSize: 17, fontWeight: 700, color: '#2D2926', marginBottom: 8 }}>Daję znak, że jest OK</h4>
              <p style={{ fontSize: 14, color: '#9B9490', lineHeight: 1.6 }}>
                Rano tapuję jedno kółko. Nie muszę pisać ani dzwonić. Moi bliscy wiedzą, że u mnie dobrze.
              </p>
            </div>

            {/* Card 3: Emergency */}
            <div style={{ background: '#FFF8F2', borderRadius: 20, padding: 28, border: '1px solid rgba(224,218,211,0.5)' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(232,93,58,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#E85D3A" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4 style={{ fontSize: 17, fontWeight: 700, color: '#2D2926', marginBottom: 8 }}>A gdy coś się dzieje</h4>
              <p style={{ fontSize: 14, color: '#9B9490', lineHeight: 1.6 }}>
                Jedno kliknięcie i cały krąg dostaje sygnał z moją lokalizacją. Ktoś zareaguje w kilka minut.
              </p>
            </div>
          </div>

          {/* Scenario */}
          <div style={{ marginTop: 48, background: 'white', borderRadius: 20, padding: 32, maxWidth: 560, margin: '48px auto 0', border: '1px solid rgba(224,218,211,0.4)' }}>
            <div style={{ fontSize: 13, color: '#E85D3A', fontWeight: 600, marginBottom: 12, letterSpacing: 1, textTransform: 'uppercase' }}>Scenariusz</div>
            <p style={{ fontSize: 16, color: '#2D2926', lineHeight: 1.7, marginBottom: 16 }}>
              Mama źle się czuje. Boi się, że zemdleje. Tapuje <strong>"Potrzebuję pomocy"</strong>.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#2EC4B6', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>1</span>
                </div>
                <span style={{ fontSize: 14, color: '#9B9490' }}>Syn dostaje powiadomienie z lokalizacją</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#FF6B6B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>2</span>
                </div>
                <span style={{ fontSize: 14, color: '#9B9490' }}>Sąsiadka widzi sygnał, idzie sprawdzić</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#E85D3A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ color: 'white', fontSize: 14, fontWeight: 700 }}>3</span>
                </div>
                <span style={{ fontSize: 14, color: '#9B9490' }}>Sąsiadka potwierdza: "Zajmuję się tym"</span>
              </div>
            </div>
            <p style={{ fontSize: 14, color: '#2EC4B6', fontWeight: 600, marginTop: 16 }}>
              Reakcja w kilka minut. Nie w kilka dni.
            </p>
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

      {/* ═══ CIRCLE — main value prop ═══ */}
      <section className="reveal" style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Visual: growing circle */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
            <div style={{ position: 'relative', width: 180, height: 180 }}>
              {/* Center person */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 48, height: 48, borderRadius: '50%', background: '#2EC4B6', boxShadow: '0 0 30px rgba(46,196,182,0.3)', animation: 'breathe 3s ease-in-out infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: 20, fontWeight: 700 }}>M</span>
              </div>
              {/* Circle members floating around */}
              {[
                { x: 0, y: -70, color: '#FF6B6B', letter: 'S', delay: '0s' },
                { x: 60, y: -35, color: '#E85D3A', letter: 'C', delay: '0.5s' },
                { x: 60, y: 35, color: '#A78BFA', letter: 'K', delay: '1s' },
                { x: 0, y: 70, color: '#FFD93D', letter: 'W', delay: '1.5s' },
                { x: -60, y: 35, color: '#2EC4B6', letter: 'D', delay: '2s' },
                { x: -60, y: -35, color: '#FF6B6B', letter: 'A', delay: '2.5s' },
              ].map((m, i) => (
                <div key={i} style={{ position: 'absolute', top: `calc(50% + ${m.y}px)`, left: `calc(50% + ${m.x}px)`, transform: 'translate(-50%,-50%)', width: 34, height: 34, borderRadius: '50%', background: m.color, opacity: 0.8, display: 'flex', alignItems: 'center', justifyContent: 'center', animation: `float 4s ease-in-out infinite ${m.delay}`, boxShadow: `0 4px 12px ${m.color}40` }}>
                  <span style={{ color: 'white', fontSize: 13, fontWeight: 700 }}>{m.letter}</span>
                </div>
              ))}
              {/* Connection lines */}
              <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} viewBox="0 0 180 180">
                {[
                  [90,90,90,20], [90,90,150,55], [90,90,150,125],
                  [90,90,90,160], [90,90,30,125], [90,90,30,55],
                ].map(([x1,y1,x2,y2], i) => (
                  <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E0DAD3" strokeWidth="1" strokeDasharray="4 4" />
                ))}
              </svg>
            </div>
          </div>

          <h3 style={{ fontSize: 38, fontWeight: 800, textAlign: 'center', marginBottom: 16, color: '#2D2926' }}>
            Stwórz swój krąg bliskich
          </h3>
          <p style={{ fontSize: 20, color: '#9B9490', textAlign: 'center', lineHeight: 1.7, maxWidth: 520, margin: '0 auto 48px' }}>
            Syn, córka, sąsiadka, koleżanka z pracy, wnuk.
            <br/>
            <strong style={{ color: '#2D2926' }}>Im więcej osób w kręgu, tym większy spokój.</strong>
            <br/>Dla wszystkich.
          </p>

          {/* Benefits grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, maxWidth: 700, margin: '0 auto' }}>
            {[
              { title: 'Każdy widzi znak', desc: 'Cały krąg wie, że bliska osoba jest OK. Codziennie.', color: '#2EC4B6' },
              { title: 'Każdy może zareagować', desc: 'Gdy coś się dzieje, najbliższa osoba sprawdza. Reszta wie.', color: '#FF6B6B' },
              { title: 'Każdy ma spokój', desc: 'Nie tylko Ty. Cała rodzina, sąsiedzi, znajomi.', color: '#E85D3A' },
            ].map((b) => (
              <div key={b.title} style={{ padding: 24, borderRadius: 16, background: 'white', border: '1px solid rgba(224,218,211,0.4)' }}>
                <div style={{ width: 8, height: 8, borderRadius: 4, background: b.color, marginBottom: 12 }} />
                <h4 style={{ fontSize: 16, fontWeight: 700, color: '#2D2926', marginBottom: 6 }}>{b.title}</h4>
                <p style={{ fontSize: 13, color: '#9B9490', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Social proof */}
          <p style={{ fontSize: 15, color: '#9B9490', textAlign: 'center', marginTop: 40, fontStyle: 'italic' }}>
            "Moja mama ma w kręgu mnie, moją siostrę i sąsiadkę z dołu.
            <br/>Trzy osoby. Trzy razy większy spokój."
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
