const APP = "https://apps.apple.com/pl/app/cmok/id6760717645";

export default function Home() {
  return (
    <main>

      {/* ═══ HERO — text left, phone right ═══ */}
      <section style={{ minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'60px 24px',position:'relative',overflow:'clip' }}>
        <div style={{ position:'absolute',width:600,height:600,borderRadius:'50%',background:'#FF6B6B',opacity:0.06,filter:'blur(120px)',top:-200,left:-300,animation:'orb-drift 14s ease-in-out infinite' }}/>
        <div style={{ position:'absolute',width:500,height:500,borderRadius:'50%',background:'#2EC4B6',opacity:0.06,filter:'blur(120px)',bottom:-200,right:-250,animation:'orb-drift 18s ease-in-out infinite reverse' }}/>

        <div style={{ position:'relative',zIndex:10,display:'flex',alignItems:'center',gap:56,maxWidth:960,width:'100%',flexWrap:'wrap',justifyContent:'center' }}>
          {/* Left: copy */}
          <div style={{ flex:'1 1 340px',maxWidth:440 }}>
            <div className="anim-fade-up anim-d1" style={{ display:'flex',alignItems:'center',gap:12,marginBottom:32 }}>
              <span style={{ fontSize:36,fontWeight:800,color:'#E85D3A',letterSpacing:-1 }}>cmok</span>
              <div style={{ animation:'breathe 3s ease-in-out infinite' }}>
                <svg width="48" height="20" viewBox="0 0 60 24" fill="none"><circle cx="10" cy="12" r="8" fill="#FF6B6B"/><line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="12" r="8" fill="#2EC4B6"/></svg>
              </div>
            </div>
            <h1 className="anim-fade-up anim-d2" style={{ fontSize:44,fontWeight:800,lineHeight:1.12,marginBottom:20,color:'#2D2926',letterSpacing:-0.5 }}>
              Codzienny znak,<br/>że u bliskiej osoby<br/>wszystko OK
            </h1>
            <p className="anim-fade-up anim-d3" style={{ fontSize:17,color:'#9B9490',lineHeight:1.7,marginBottom:32 }}>
              Dla osoby, która mieszka sama, i bliskich, którzy chcą spokoju bez codziennego wydzwaniania.
            </p>
            <div className="anim-fade-up anim-d4" style={{ display:'flex',flexDirection:'column',gap:12,alignItems:'flex-start' }}>
              <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#2D2926',color:'white',fontSize:15,fontWeight:600,padding:'14px 28px',borderRadius:12,textDecoration:'none' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Pobierz na iPhone
              </a>
              <span style={{ fontSize:13,color:'#AAA299' }}>Darmowa. Bez reklam.</span>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className="anim-fade-up anim-d3" style={{ flex:'0 0 auto' }}>
            <div style={{ width:260,height:520,borderRadius:40,background:'#FFF8F2',border:'6px solid #1a1a1a',overflow:'hidden',boxShadow:'0 30px 80px rgba(0,0,0,0.12)',position:'relative' }}>
              <div style={{ width:80,height:24,background:'#1a1a1a',borderRadius:'0 0 12px 12px',margin:'0 auto' }}/>
              <div style={{ padding:'20px 20px',display:'flex',flexDirection:'column',alignItems:'center' }}>
                <span style={{ fontSize:15,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                <span style={{ fontSize:10,color:'#9B9490',marginTop:2 }}>Mama</span>
                <div style={{ width:130,height:130,borderRadius:'50%',background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:28,animation:'pulse-glow 3s ease-in-out infinite, breathe 3s ease-in-out infinite' }}>
                  <span style={{ color:'white',fontSize:16,fontWeight:700 }}>Daj znak</span>
                </div>
                <span style={{ fontSize:12,color:'#9B9490',marginTop:14 }}>Mama czeka na Twój znak</span>
                <div style={{ display:'flex',gap:4,marginTop:14 }}>
                  {[1,1,0,1,1,0,0].map((ok,i) => <div key={i} style={{ width:8,height:8,borderRadius:4,background:ok?'#2EC4B6':'#E0DAD3' }}/>)}
                </div>
                <div style={{ marginTop:20,padding:'8px 14px',borderRadius:10,border:'1px solid #E0DAD3',background:'white' }}>
                  <span style={{ fontSize:10,fontWeight:600,color:'#2D2926' }}>Potrzebuję pomocy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS — 3 steps with big screens ═══ */}
      <section style={{ padding:'80px 24px 100px',background:'white' }}>
        <div style={{ maxWidth:800,margin:'0 auto' }}>
          <p style={{ fontSize:13,fontWeight:700,color:'#E85D3A',textAlign:'center',letterSpacing:2,textTransform:'uppercase',marginBottom:12 }}>Jak to działa</p>
          <h2 style={{ fontSize:36,fontWeight:800,textAlign:'center',marginBottom:56,color:'#2D2926' }}>Trzy kroki. Codziennie.</h2>

          <div style={{ display:'flex',flexDirection:'column',gap:48 }}>
            {[
              { num:'1', title:'Rano dajesz znak', desc:'Otwierasz apkę, tapujesz jedno kółko. Dwie sekundy. Bliscy wiedzą, że jest OK.', color:'#2EC4B6', visual: <div style={{ width:80,height:80,borderRadius:'50%',background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',animation:'breathe 3s ease-in-out infinite',boxShadow:'0 0 30px rgba(46,196,182,0.25)' }}><span style={{ color:'white',fontSize:14,fontWeight:700 }}>Daj znak</span></div> },
              { num:'2', title:'Bliscy widzą, że jest OK', desc:'Syn, córka, sąsiadka — każdy z kręgu dostaje ciepłe powiadomienie. Bez dzwonienia.', color:'#FF6B6B', visual: <div style={{ width:80,height:80,borderRadius:'50%',background:'#E0F7F5',border:'3px solid #2EC4B6',display:'flex',alignItems:'center',justifyContent:'center' }}><span style={{ color:'#2EC4B6',fontSize:28 }}>✓</span></div> },
              { num:'3', title:'A jeśli coś się dzieje', desc:'Jeden gest i cały krąg bliskich wie natychmiast. Z lokalizacją. Ktoś zareaguje w kilka minut.', color:'#E85D3A', visual: <div style={{ width:80,height:80,borderRadius:20,background:'rgba(232,93,58,0.06)',display:'flex',alignItems:'center',justifyContent:'center' }}><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#E85D3A" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div> },
            ].map(step => (
              <div key={step.num} style={{ display:'flex',alignItems:'center',gap:32,flexWrap:'wrap' }}>
                <div style={{ flex:'0 0 auto',display:'flex',alignItems:'center',gap:20 }}>
                  <span style={{ fontSize:48,fontWeight:800,color:step.color,opacity:0.15 }}>{step.num}</span>
                  {step.visual}
                </div>
                <div style={{ flex:'1 1 300px' }}>
                  <h3 style={{ fontSize:22,fontWeight:700,color:'#2D2926',marginBottom:6 }}>{step.title}</h3>
                  <p style={{ fontSize:16,color:'#9B9490',lineHeight:1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CIRCLE ═══ */}
      <section style={{ padding:'80px 24px',textAlign:'center' }}>
        <div style={{ display:'flex',justifyContent:'center',marginBottom:32 }}>
          <div style={{ position:'relative',width:180,height:180 }}>
            <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:48,height:48,borderRadius:'50%',background:'#2EC4B6',boxShadow:'0 0 30px rgba(46,196,182,0.3)',animation:'breathe 3s ease-in-out infinite',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <span style={{ color:'white',fontSize:13,fontWeight:700 }}>Mama</span>
            </div>
            {[
              {x:0,y:-72,c:'#FF6B6B',l:'Syn',d:'0s'},
              {x:62,y:-36,c:'#E85D3A',l:'Córka',d:'0.7s'},
              {x:62,y:36,c:'#A78BFA',l:'Sąsiad',d:'1.4s'},
              {x:0,y:72,c:'#FFD93D',l:'Wnuk',d:'2.1s'},
              {x:-62,y:36,c:'#2EC4B6',l:'Koleż.',d:'2.8s'},
            ].map((m,i) => (
              <div key={i} style={{ position:'absolute',top:`calc(50% + ${m.y}px)`,left:`calc(50% + ${m.x}px)`,transform:'translate(-50%,-50%)',width:36,height:36,borderRadius:'50%',background:m.c,opacity:0.8,display:'flex',alignItems:'center',justifyContent:'center',animation:`float 4s ease-in-out infinite ${m.d}`,boxShadow:`0 3px 12px ${m.c}25` }}>
                <span style={{ color:'white',fontSize:8,fontWeight:700 }}>{m.l}</span>
              </div>
            ))}
          </div>
        </div>
        <h3 style={{ fontSize:32,fontWeight:800,color:'#2D2926',marginBottom:12 }}>Stwórz swój krąg</h3>
        <p style={{ fontSize:17,color:'#9B9490',maxWidth:400,margin:'0 auto',lineHeight:1.6 }}>
          Im więcej osób w kręgu, tym większy spokój.<br/>Dla wszystkich.
        </p>
      </section>

      {/* ═══ TRUST — privacy & safety ═══ */}
      <section style={{ padding:'64px 24px',background:'white' }}>
        <div style={{ maxWidth:700,margin:'0 auto' }}>
          <p style={{ fontSize:13,fontWeight:700,color:'#2EC4B6',textAlign:'center',letterSpacing:2,textTransform:'uppercase',marginBottom:12 }}>Prywatność i bezpieczeństwo</p>
          <h3 style={{ fontSize:28,fontWeight:800,textAlign:'center',marginBottom:36,color:'#2D2926' }}>Twoje dane pod kontrolą</h3>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',gap:16 }}>
            {[
              {title:'Bez reklam',desc:'Zero śledzenia, zero profilowania. Nigdy.'},
              {title:'Bez ciągłej lokalizacji',desc:'Lokalizacja tylko gdy wysyłasz sygnał pomocy. Za Twoją zgodą.'},
              {title:'Dane w EU',desc:'Serwery w Irlandii. Szyfrowane połączenie.'},
              {title:'Usunięcie konta',desc:'W każdej chwili, jednym kliknięciem w aplikacji.'},
            ].map(t => (
              <div key={t.title} style={{ padding:20,borderRadius:14,background:'#FFF8F2',border:'1px solid rgba(224,218,211,0.4)' }}>
                <div style={{ width:6,height:6,borderRadius:3,background:'#2EC4B6',marginBottom:10 }}/>
                <h4 style={{ fontSize:15,fontWeight:700,color:'#2D2926',marginBottom:4 }}>{t.title}</h4>
                <p style={{ fontSize:13,color:'#9B9490',lineHeight:1.5 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS — 3 perspectives ═══ */}
      <section style={{ padding:'80px 24px' }}>
        <div style={{ maxWidth:800,margin:'0 auto' }}>
          <div style={{ display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(230px, 1fr))',gap:20 }}>
            {[
              {quote:'Rano dostaję znak od mamy. Wiem, że jest OK. Wieczorem dzwonimy spokojnie.',who:'Darek, 34 lata',rel:'syn',color:'#2EC4B6'},
              {quote:'Nie muszę czekać, aż syn zadzwoni. Daję znak i wiem, że wie.',who:'Krystyna, 67 lat',rel:'mama',color:'#FF6B6B'},
              {quote:'Mam w kręgu mamę i sąsiadkę z dołu. Trzy osoby, trzy razy większy spokój.',who:'Ania, 29 lat',rel:'córka',color:'#E85D3A'},
            ].map(t => (
              <div key={t.who} style={{ padding:28,borderRadius:20,background:'white',border:'1px solid rgba(224,218,211,0.4)' }}>
                <div style={{ width:8,height:8,borderRadius:4,background:t.color,marginBottom:16 }}/>
                <p style={{ fontSize:16,color:'#2D2926',lineHeight:1.6,marginBottom:16,fontWeight:500 }}>"{t.quote}"</p>
                <p style={{ fontSize:13,color:'#9B9490' }}>{t.who}</p>
                <p style={{ fontSize:11,color:'#AAA299' }}>{t.rel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding:'80px 24px',textAlign:'center',background:'rgba(46,196,182,0.04)' }}>
        <h3 style={{ fontSize:32,fontWeight:800,color:'#2D2926',marginBottom:8 }}>Wypróbuj cmok</h3>
        <p style={{ fontSize:16,color:'#9B9490',marginBottom:32 }}>Darmowa. Bez reklam. Bez zobowiązań.</p>
        <div style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:16 }}>
          <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#2D2926',color:'white',fontSize:15,fontWeight:600,padding:'14px 32px',borderRadius:12,textDecoration:'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Pobierz na iPhone
          </a>
          <p style={{ fontSize:13,color:'#AAA299' }}>Android? <a href="mailto:kontakt@cmok.app" style={{ color:'#2EC4B6',textDecoration:'none' }}>Daj znać</a>, powiemy gdy będzie gotowy.</p>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding:'28px 24px',borderTop:'1px solid rgba(224,218,211,0.4)',fontSize:12,color:'#AAA299' }}>
        <div style={{ maxWidth:700,margin:'0 auto',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:12 }}>
          <div style={{ display:'flex',alignItems:'center',gap:8 }}>
            <span style={{ fontWeight:700,color:'#E85D3A',fontSize:14 }}>cmok</span>
            <span>© 2026</span>
          </div>
          <div style={{ display:'flex',gap:16 }}>
            <a href="/polityka-prywatnosci" style={{ color:'#AAA299',textDecoration:'none' }}>Prywatność</a>
            <a href="/regulamin" style={{ color:'#AAA299',textDecoration:'none' }}>Regulamin</a>
            <a href="mailto:kontakt@cmok.app" style={{ color:'#AAA299',textDecoration:'none' }}>Kontakt</a>
          </div>
          <p style={{ width:'100%',marginTop:8,lineHeight:1.6 }}>cmok nie zastępuje 112. W nagłym zagrożeniu życia zawsze dzwoń na 112.</p>
        </div>
      </footer>
    </main>
  );
}
