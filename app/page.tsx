import Image from "next/image";

const APP = "https://apps.apple.com/pl/app/cmok/id6760717645";

export default function Home() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="hero-section" style={{ display:'flex',alignItems:'center',justifyContent:'center',padding:'80px 20px 40px',position:'relative',overflow:'clip' }}>
        <div style={{ position:'absolute',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(255,107,107,0.06) 0%,transparent 70%)',top:-200,left:-300,animation:'orb-drift 14s ease-in-out infinite' }}/>
        <div style={{ position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(46,196,182,0.06) 0%,transparent 70%)',bottom:-200,right:-250,animation:'orb-drift 18s ease-in-out infinite reverse' }}/>

        <div style={{ position:'relative',zIndex:10,display:'flex',alignItems:'center',gap:40,maxWidth:880,width:'100%',flexWrap:'wrap',justifyContent:'center' }}>
          <div style={{ flex:'1 1 300px',maxWidth:400,textAlign:'center' }}>
            <div className="anim-fade-up anim-d1" style={{ display:'flex',alignItems:'center',gap:10,marginBottom:24,justifyContent:'center' }}>
              <span style={{ fontSize:28,fontWeight:800,color:'#E85D3A' }}>cmok</span>
              <div style={{ animation:'breathe 3s ease-in-out infinite' }}>
                <svg width="40" height="16" viewBox="0 0 60 24" fill="none"><circle cx="10" cy="12" r="8" fill="#FF6B6B"/><line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="12" r="8" fill="#2EC4B6"/></svg>
              </div>
            </div>
            <h1 className="anim-fade-up anim-d2 hero-title" style={{ fontSize:42,fontWeight:800,lineHeight:1.12,marginBottom:16,color:'#2D2926' }}>
              Codzienny znak,<br/>że u bliskiej osoby<br/>wszystko OK
            </h1>
            <p className="anim-fade-up anim-d3 hero-sub" style={{ fontSize:17,color:'#6B6560',lineHeight:1.7,marginBottom:28 }}>
              Lekki gest między rozmowami. Dla osoby, która mieszka sama, i bliskich, którzy chcą wiedzieć, że jest OK.
            </p>
            <div className="anim-fade-up anim-d4" style={{ display:'flex',flexDirection:'column',gap:8,alignItems:'center' }}>
              <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#1a1a1a',color:'white',fontSize:15,fontWeight:600,padding:'13px 26px',borderRadius:12,textDecoration:'none' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Pobierz na iPhone
              </a>
              <span style={{ fontSize:12,color:'#AAA299' }}>Darmowa · Bez reklam · 2 min do startu</span>
            </div>
          </div>

          {/* Real app screenshot — hidden on mobile, shown in steps */}
          <div className="anim-fade-up anim-d3 hero-phone">
            <Image src="/screen-signaler.png" alt="cmok — ekran główny" width={220} height={476} className="phone-img" priority />
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section style={{ padding:'64px 24px',textAlign:'center' }}>
        <p style={{ fontSize:26,fontWeight:800,color:'#2D2926',maxWidth:460,margin:'0 auto',lineHeight:1.4 }}>
          Dzwonisz do mamy raz na tydzień.<br/>A myślisz o niej codziennie.
        </p>
        <p style={{ fontSize:16,color:'#6B6560',marginTop:16,maxWidth:380,margin:'16px auto 0',lineHeight:1.7 }}>
          cmok wypełnia te dni między rozmowami.<br/>Lekko, ciepło, bez presji.
        </p>
      </section>

      {/* ═══ 3 STEPS with real screenshots ═══ */}
      <section style={{ padding:'64px 24px 80px',background:'white' }}>
        <div style={{ maxWidth:780,margin:'0 auto' }}>
          <p style={{ fontSize:12,fontWeight:700,color:'#E85D3A',textAlign:'center',letterSpacing:2,textTransform:'uppercase',marginBottom:8 }}>Jak to działa</p>
          <h2 className="section-title" style={{ fontSize:32,fontWeight:800,textAlign:'center',marginBottom:56,color:'#2D2926' }}>Trzy kroki. Codziennie.</h2>

          {/* Step 1 */}
          <div className="step-row" style={{ display:'flex',alignItems:'center',gap:40,marginBottom:64,flexWrap:'wrap',justifyContent:'center' }}>
            <Image src="/screen-signaler.png" alt="Daj znak" width={200} height={434} className="phone-img" />
            <div style={{ flex:'1 1 250px',maxWidth:320 }}>
              <span style={{ fontSize:40,fontWeight:800,color:'#2EC4B6',opacity:0.12 }}>1</span>
              <h3 style={{ fontSize:22,fontWeight:700,color:'#2D2926',marginBottom:6 }}>Rano dajesz znak</h3>
              <p style={{ fontSize:15,color:'#6B6560',lineHeight:1.7 }}>Jedno tapnięcie. Dwie sekundy. Bliscy wiedzą, że jest OK.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-row" style={{ display:'flex',alignItems:'center',gap:40,marginBottom:64,flexWrap:'wrap-reverse',justifyContent:'center' }}>
            <div style={{ flex:'1 1 250px',maxWidth:320 }}>
              <span style={{ fontSize:40,fontWeight:800,color:'#FF6B6B',opacity:0.12 }}>2</span>
              <h3 style={{ fontSize:22,fontWeight:700,color:'#2D2926',marginBottom:6 }}>Bliscy widzą, że jest OK</h3>
              <p style={{ fontSize:15,color:'#6B6560',lineHeight:1.7 }}>Każdy z kręgu dostaje powiadomienie. Może odpowiedzieć jednym gestem.</p>
            </div>
            <Image src="/screen-recipient.png" alt="Znak od Mamy" width={200} height={434} className="phone-img" />
          </div>

          {/* Step 3 — real emergency screen */}
          <div className="step-row" style={{ display:'flex',alignItems:'center',gap:40,flexWrap:'wrap',justifyContent:'center' }}>
            <Image src="/screen-urgent.png" alt="Sygnał awaryjny" width={200} height={434} className="phone-img" />
            <div style={{ flex:'1 1 250px',maxWidth:320 }}>
              <span style={{ fontSize:40,fontWeight:800,color:'#E85D3A',opacity:0.12 }}>3</span>
              <h3 style={{ fontSize:22,fontWeight:700,color:'#2D2926',marginBottom:6 }}>A jeśli coś się dzieje</h3>
              <p style={{ fontSize:15,color:'#6B6560',lineHeight:1.7 }}>Mama źle się czuje. Tapuje "Potrzebuję pomocy". Cały krąg dostaje sygnał z lokalizacją. Najbliższa osoba reaguje w kilka minut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CIRCLE — big, prominent ═══ */}
      <section className="circle-section" style={{ padding:'100px 24px',textAlign:'center',background:'rgba(46,196,182,0.03)' }}>
        <h3 className="circle-title" style={{ fontSize:34,fontWeight:800,color:'#2D2926',marginBottom:12 }}>Stwórz swój krąg bliskich</h3>
        <p style={{ fontSize:17,color:'#6B6560',maxWidth:440,margin:'0 auto 48px',lineHeight:1.7 }}>
          Syn, córka, sąsiadka, wnuk. Każdy w kręgu widzi codzienny znak. Każdy może zareagować, gdy trzeba. Im więcej osób, tym lepiej.
        </p>

        <div style={{ display:'flex',justifyContent:'center',marginBottom:40 }}>
          <div style={{ position:'relative',width:260,height:260 }}>
            {/* Center: Mama */}
            <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:64,height:64,borderRadius:'50%',background:'linear-gradient(135deg,#2EC4B6,#23A99D)',boxShadow:'0 0 32px rgba(46,196,182,0.25)',animation:'breathe 3s ease-in-out infinite',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <span style={{ color:'white',fontSize:12,fontWeight:700 }}>Mama</span>
            </div>
            {/* Circle members */}
            {[
              {x:0,y:-100,c:'#FF6B6B',l:'Syn',d:'0s'},
              {x:87,y:-50,c:'#E85D3A',l:'Córka',d:'.6s'},
              {x:87,y:50,c:'#A78BFA',l:'Sąsiad',d:'1.2s'},
              {x:0,y:100,c:'#FFD93D',l:'Wnuk',d:'1.8s'},
              {x:-87,y:50,c:'#2EC4B6',l:'Koleż.',d:'2.4s'},
              {x:-87,y:-50,c:'#FF6B6B',l:'Brat',d:'3s'},
            ].map((m,i)=>(
              <div key={i} style={{ position:'absolute',top:`calc(50% + ${m.y}px)`,left:`calc(50% + ${m.x}px)`,transform:'translate(-50%,-50%)',width:44,height:44,borderRadius:'50%',background:m.c,opacity:.85,display:'flex',alignItems:'center',justifyContent:'center',animation:`float 4s ease-in-out infinite ${m.d}`,boxShadow:`0 4px 16px ${m.c}25` }}>
                <span style={{ color:'white',fontSize:9,fontWeight:700 }}>{m.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display:'flex',justifyContent:'center',gap:24,flexWrap:'wrap',maxWidth:600,margin:'0 auto' }}>
          {[
            {t:'Widzą codzienny znak',d:'Cały krąg wie, że jest OK.'},
            {t:'Reagują, gdy trzeba',d:'Najbliższa osoba sprawdza.'},
            {t:'Nikt się nie martwi',d:'Rodzina, sąsiedzi, znajomi.'},
          ].map(b=>(
            <div key={b.t} style={{ flex:'1 1 150px',maxWidth:180,textAlign:'center' }}>
              <h4 style={{ fontSize:14,fontWeight:700,color:'#2D2926',marginBottom:4 }}>{b.t}</h4>
              <p style={{ fontSize:12,color:'#6B6560',lineHeight:1.5 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TRUST ═══ */}
      <section style={{ padding:'56px 24px',background:'white' }}>
        <div style={{ maxWidth:520,margin:'0 auto' }}>
          <h3 style={{ fontSize:20,fontWeight:800,textAlign:'center',marginBottom:20,color:'#2D2926' }}>Twoje dane pod kontrolą</h3>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:10 }}>
            {[{t:'Bez reklam',d:'Zero śledzenia i profilowania.'},{t:'Lokalizacja za zgodą',d:'Tylko przy sygnale pomocy.'},{t:'Dane w Europie',d:'Serwery w EU. Szyfrowane.'},{t:'Usunięcie konta',d:'Jednym kliknięciem w apce.'}].map(t=>(
              <div key={t.t} className="glass" style={{ padding:14,borderRadius:12 }}>
                <h4 style={{ fontSize:13,fontWeight:700,color:'#2D2926',marginBottom:3 }}>{t.t}</h4>
                <p style={{ fontSize:11,color:'#6B6560',lineHeight:1.5 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ padding:'56px 24px' }}>
        <div style={{ maxWidth:680,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:12 }}>
          {[{q:'Nie zastanawiam się rano, czy u mamy okej. Dostaję znak i wiem.',w:'Darek, 34',r:'syn'},{q:'Daję znak i wiem, że syn nie musi się martwić. On też to czuje.',w:'Krystyna, 67',r:'mama'},{q:'Tata mieszka sam. cmok to jedyny sposób, żeby wiedzieć codziennie.',w:'Ania, 29',r:'córka'}].map(t=>(
            <div key={t.w} className="glass" style={{ padding:20,borderRadius:14 }}>
              <p style={{ fontSize:14,color:'#2D2926',lineHeight:1.6,marginBottom:10 }}>"{t.q}"</p>
              <p style={{ fontSize:11,color:'#6B6560' }}>{t.w}</p>
              <p style={{ fontSize:10,color:'#9B9490' }}>{t.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding:'64px 24px',textAlign:'center' }}>
        <h3 style={{ fontSize:28,fontWeight:800,color:'#2D2926',marginBottom:6 }}>Dwie minuty do pierwszego kręgu</h3>
        <p style={{ fontSize:14,color:'#6B6560',marginBottom:24 }}>Darmowa. Bez reklam. Bez zobowiązań.</p>
        <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#1a1a1a',color:'white',fontSize:15,fontWeight:600,padding:'13px 30px',borderRadius:12,textDecoration:'none' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          Pobierz na iPhone
        </a>
        <p style={{ fontSize:11,color:'#AAA299',marginTop:12 }}>Android? <a href="mailto:kontakt@cmok.app" style={{ color:'#2EC4B6',textDecoration:'none' }}>Zapisz się na listę</a></p>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding:'24px',borderTop:'1px solid rgba(224,218,211,0.3)',fontSize:12,color:'#AAA299' }}>
        <div style={{ maxWidth:480,margin:'0 auto',textAlign:'center' }}>
          <div style={{ display:'flex',justifyContent:'center',gap:16,marginBottom:8 }}>
            <a href="/polityka-prywatnosci" style={{ color:'#AAA299',textDecoration:'none' }}>Prywatność</a>
            <a href="/regulamin" style={{ color:'#AAA299',textDecoration:'none' }}>Regulamin</a>
            <a href="mailto:kontakt@cmok.app" style={{ color:'#AAA299',textDecoration:'none' }}>Kontakt</a>
          </div>
          <p><span style={{ fontWeight:700,color:'#E85D3A' }}>cmok</span> © 2026 · cmok nie zastępuje 112</p>
        </div>
      </footer>
    </main>
  );
}
