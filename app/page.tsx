const APP = "https://apps.apple.com/pl/app/cmok/id6760717645";

/* Reusable phone mockup */
function Phone({ children, label, sub }: { children: React.ReactNode; label: string; sub: string }) {
  return (
    <div style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:14 }}>
      <div style={{ width:240,height:480,borderRadius:36,background:'#FFF8F2',border:'5px solid #1a1a1a',overflow:'hidden',boxShadow:'0 24px 64px rgba(0,0,0,0.1)',position:'relative' }}>
        <div style={{ width:72,height:22,background:'#1a1a1a',borderRadius:'0 0 10px 10px',margin:'0 auto' }}/>
        <div style={{ padding:'16px 18px',display:'flex',flexDirection:'column',alignItems:'center' }}>
          {children}
        </div>
      </div>
      <p style={{ fontSize:14,fontWeight:700,color:'#2D2926' }}>{label}</p>
      <p style={{ fontSize:12,color:'#9B9490',marginTop:-8 }}>{sub}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main>

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'60px 24px',position:'relative',overflow:'clip' }}>
        <div style={{ position:'absolute',width:600,height:600,borderRadius:'50%',background:'#FF6B6B',opacity:0.05,filter:'blur(120px)',top:-200,left:-300,animation:'orb-drift 14s ease-in-out infinite' }}/>
        <div style={{ position:'absolute',width:500,height:500,borderRadius:'50%',background:'#2EC4B6',opacity:0.05,filter:'blur(120px)',bottom:-200,right:-250,animation:'orb-drift 18s ease-in-out infinite reverse' }}/>

        <div style={{ position:'relative',zIndex:10,display:'flex',alignItems:'center',gap:48,maxWidth:920,width:'100%',flexWrap:'wrap',justifyContent:'center' }}>
          <div style={{ flex:'1 1 340px',maxWidth:420 }}>
            <div className="anim-fade-up anim-d1" style={{ display:'flex',alignItems:'center',gap:10,marginBottom:28 }}>
              <span style={{ fontSize:32,fontWeight:800,color:'#E85D3A',letterSpacing:-1 }}>cmok</span>
              <div style={{ animation:'breathe 3s ease-in-out infinite' }}>
                <svg width="44" height="18" viewBox="0 0 60 24" fill="none"><circle cx="10" cy="12" r="8" fill="#FF6B6B"/><line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="12" r="8" fill="#2EC4B6"/></svg>
              </div>
            </div>
            <h1 className="anim-fade-up anim-d2" style={{ fontSize:42,fontWeight:800,lineHeight:1.14,marginBottom:18,color:'#2D2926' }}>
              Codzienny znak,<br/>że u bliskiej osoby<br/>wszystko OK
            </h1>
            <p className="anim-fade-up anim-d3" style={{ fontSize:17,color:'#6B6560',lineHeight:1.7,marginBottom:28 }}>
              Dla osoby, która mieszka sama, i bliskich, którzy chcą spokoju. Jeden gest dziennie między rozmowami.
            </p>
            <div className="anim-fade-up anim-d4" style={{ display:'flex',flexDirection:'column',gap:10,alignItems:'flex-start' }}>
              <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#1a1a1a',color:'white',fontSize:15,fontWeight:600,padding:'14px 28px',borderRadius:12,textDecoration:'none',transition:'opacity 0.2s' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Pobierz na iPhone
              </a>
              <span style={{ fontSize:12,color:'#AAA299' }}>Darmowa · Bez reklam · 2 min do startu</span>
            </div>
          </div>

          <div className="anim-fade-up anim-d3" style={{ flex:'0 0 auto' }}>
            <Phone label="" sub="">
              <span style={{ fontSize:14,fontWeight:700,color:'#E85D3A' }}>cmok</span>
              <span style={{ fontSize:10,color:'#9B9490',marginTop:1 }}>Mama</span>
              <div style={{ width:120,height:120,borderRadius:'50%',background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:24,animation:'pulse-glow 3s ease-in-out infinite, breathe 3s ease-in-out infinite' }}>
                <span style={{ color:'white',fontSize:15,fontWeight:700 }}>Daj znak</span>
              </div>
              <span style={{ fontSize:11,color:'#9B9490',marginTop:12 }}>Mama czeka na Twój znak</span>
              <div style={{ display:'flex',gap:4,marginTop:12 }}>
                {[1,1,0,1,1,0,0].map((ok,i)=><div key={i} style={{ width:7,height:7,borderRadius:4,background:ok?'#2EC4B6':'#E0DAD3' }}/>)}
              </div>
            </Phone>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section style={{ padding:'64px 24px',textAlign:'center' }}>
        <div style={{ maxWidth:520,margin:'0 auto' }}>
          <p style={{ fontSize:26,fontWeight:800,color:'#2D2926',lineHeight:1.4,marginBottom:16 }}>
            Dzwonisz do mamy raz na tydzień.<br/>A martwisz się codziennie.
          </p>
          <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.7 }}>
            cmok wypełnia te dni między rozmowami. Lekki gest, który daje spokój obu stronom. Bez presji, bez wyrzutów sumienia.
          </p>
        </div>
      </section>

      {/* ═══ 3 STEPS ═══ */}
      <section style={{ padding:'80px 24px',background:'white' }}>
        <div style={{ maxWidth:900,margin:'0 auto' }}>
          <p style={{ fontSize:12,fontWeight:700,color:'#E85D3A',textAlign:'center',letterSpacing:2,textTransform:'uppercase',marginBottom:10 }}>Jak to działa</p>
          <h2 style={{ fontSize:34,fontWeight:800,textAlign:'center',marginBottom:56,color:'#2D2926' }}>Trzy kroki. Codziennie.</h2>

          {/* Step 1 */}
          <div style={{ display:'flex',alignItems:'center',gap:40,marginBottom:56,flexWrap:'wrap',justifyContent:'center' }}>
            <Phone label="" sub="">
              <span style={{ fontSize:13,fontWeight:700,color:'#E85D3A' }}>cmok</span>
              <span style={{ fontSize:9,color:'#9B9490',marginTop:1 }}>Mama</span>
              <div style={{ width:110,height:110,borderRadius:'50%',background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:20,boxShadow:'0 0 20px rgba(46,196,182,0.25)' }}>
                <span style={{ color:'white',fontSize:14,fontWeight:700 }}>Daj znak</span>
              </div>
              <span style={{ fontSize:10,color:'#9B9490',marginTop:10 }}>Mama czeka na Twój znak</span>
              <div style={{ display:'flex',gap:3,marginTop:10 }}>{[1,1,0,1,1,0,0].map((ok,i)=><div key={i} style={{ width:6,height:6,borderRadius:3,background:ok?'#2EC4B6':'#E0DAD3' }}/>)}</div>
            </Phone>
            <div style={{ flex:'1 1 280px',maxWidth:360 }}>
              <span style={{ fontSize:40,fontWeight:800,color:'#2EC4B6',opacity:0.15 }}>1</span>
              <h3 style={{ fontSize:24,fontWeight:700,color:'#2D2926',marginBottom:8 }}>Rano dajesz znak</h3>
              <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.7 }}>Otwierasz apkę, tapujesz jedno kółko. Dwie sekundy. Możesz dodać jak się czujesz.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div style={{ display:'flex',alignItems:'center',gap:40,marginBottom:56,flexWrap:'wrap-reverse',justifyContent:'center' }}>
            <div style={{ flex:'1 1 280px',maxWidth:360 }}>
              <span style={{ fontSize:40,fontWeight:800,color:'#FF6B6B',opacity:0.15 }}>2</span>
              <h3 style={{ fontSize:24,fontWeight:700,color:'#2D2926',marginBottom:8 }}>Bliscy widzą, że jest OK</h3>
              <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.7 }}>Syn, córka, sąsiadka — każdy z kręgu dostaje ciepłe powiadomienie. Mogą odpowiedzieć jednym gestem.</p>
            </div>
            <Phone label="" sub="">
              <span style={{ fontSize:13,fontWeight:700,color:'#E85D3A' }}>cmok</span>
              <span style={{ fontSize:9,color:'#9B9490',marginTop:1 }}>od Mamy</span>
              <div style={{ width:100,height:100,borderRadius:'50%',background:'#E0F7F5',border:'3px solid #2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:16 }}>
                <span style={{ color:'#2EC4B6',fontSize:28 }}>✓</span>
              </div>
              <span style={{ fontSize:14,fontWeight:700,color:'#2D2926',marginTop:10 }}>Znak od Mamy</span>
              <span style={{ fontSize:10,color:'#9B9490',marginTop:2 }}>Spokojnie · 08:14</span>
              <div style={{ display:'flex',gap:6,marginTop:12 }}>
                {[{s:'♥',c:'#FF6B6B'},{s:'•',c:'#A78BFA'},{s:'✓',c:'#2EC4B6'},{s:'★',c:'#FFD93D'}].map(r=>(
                  <div key={r.s} style={{ width:32,height:32,borderRadius:8,background:'white',border:'1px solid #E0DAD3',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,color:r.c }}>{r.s}</div>
                ))}
              </div>
            </Phone>
          </div>

          {/* Step 3 */}
          <div style={{ display:'flex',alignItems:'center',gap:40,flexWrap:'wrap',justifyContent:'center' }}>
            <Phone label="" sub="">
              <span style={{ fontSize:13,fontWeight:700,color:'#E85D3A' }}>cmok</span>
              <div style={{ marginTop:16,padding:'12px 16px',borderRadius:16,background:'white',border:'1px solid #E0DAD3',width:'100%' }}>
                <span style={{ fontSize:11,fontWeight:700,color:'#2D2926' }}>Potrzebuję pomocy</span>
                <p style={{ fontSize:9,color:'#9B9490',marginTop:4 }}>Wyślij sygnał do kręgu bliskich</p>
              </div>
              <div style={{ marginTop:12,padding:'10px 14px',borderRadius:12,background:'rgba(46,196,182,0.06)',width:'100%' }}>
                <p style={{ fontSize:9,color:'#2EC4B6',fontWeight:600 }}>Sąsiadka potwierdza:</p>
                <p style={{ fontSize:10,color:'#2D2926',fontWeight:600 }}>"Zajmuję się tym"</p>
              </div>
              <div style={{ marginTop:10,display:'flex',gap:4 }}>
                <div style={{ width:20,height:20,borderRadius:10,background:'#FF6B6B',display:'flex',alignItems:'center',justifyContent:'center' }}><span style={{ color:'white',fontSize:7,fontWeight:700 }}>S</span></div>
                <div style={{ width:20,height:20,borderRadius:10,background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center' }}><span style={{ color:'white',fontSize:7,fontWeight:700 }}>C</span></div>
                <div style={{ width:20,height:20,borderRadius:10,background:'#E85D3A',display:'flex',alignItems:'center',justifyContent:'center' }}><span style={{ color:'white',fontSize:7,fontWeight:700 }}>A</span></div>
                <span style={{ fontSize:9,color:'#9B9490',marginLeft:4 }}>3 osoby wiedzą</span>
              </div>
            </Phone>
            <div style={{ flex:'1 1 280px',maxWidth:360 }}>
              <span style={{ fontSize:40,fontWeight:800,color:'#E85D3A',opacity:0.15 }}>3</span>
              <h3 style={{ fontSize:24,fontWeight:700,color:'#2D2926',marginBottom:8 }}>A jeśli coś się dzieje</h3>
              <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.7 }}>Jeden gest i cały krąg bliskich wie natychmiast. Z lokalizacją. Najbliższa osoba reaguje w kilka minut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CIRCLE ═══ */}
      <section style={{ padding:'80px 24px',textAlign:'center' }}>
        <div style={{ display:'flex',justifyContent:'center',marginBottom:28 }}>
          <div style={{ position:'relative',width:180,height:180 }}>
            <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:44,height:44,borderRadius:'50%',background:'#2EC4B6',boxShadow:'0 0 24px rgba(46,196,182,0.3)',animation:'breathe 3s ease-in-out infinite',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <span style={{ color:'white',fontSize:10,fontWeight:700 }}>Mama</span>
            </div>
            {[
              {x:0,y:-68,c:'#FF6B6B',l:'Syn',d:'0s'},
              {x:59,y:-34,c:'#E85D3A',l:'Córka',d:'0.7s'},
              {x:59,y:34,c:'#A78BFA',l:'Sąsiad',d:'1.4s'},
              {x:0,y:68,c:'#FFD93D',l:'Wnuk',d:'2.1s'},
              {x:-59,y:34,c:'#2EC4B6',l:'Koleż.',d:'2.8s'},
            ].map((m,i)=>(
              <div key={i} style={{ position:'absolute',top:`calc(50% + ${m.y}px)`,left:`calc(50% + ${m.x}px)`,transform:'translate(-50%,-50%)',width:32,height:32,borderRadius:'50%',background:m.c,opacity:0.8,display:'flex',alignItems:'center',justifyContent:'center',animation:`float 4s ease-in-out infinite ${m.d}` }}>
                <span style={{ color:'white',fontSize:7,fontWeight:700 }}>{m.l}</span>
              </div>
            ))}
          </div>
        </div>
        <h3 style={{ fontSize:30,fontWeight:800,color:'#2D2926',marginBottom:10 }}>Stwórz swój krąg</h3>
        <p style={{ fontSize:16,color:'#6B6560',maxWidth:380,margin:'0 auto',lineHeight:1.6 }}>
          Każdy w kręgu widzi codzienny znak. Każdy może zareagować, gdy trzeba. Im więcej osób, tym większy spokój.
        </p>
      </section>

      {/* ═══ TRUST ═══ */}
      <section style={{ padding:'60px 24px',background:'white' }}>
        <div style={{ maxWidth:640,margin:'0 auto' }}>
          <h3 style={{ fontSize:24,fontWeight:800,textAlign:'center',marginBottom:28,color:'#2D2926' }}>Twoje dane pod kontrolą</h3>
          <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:14 }}>
            {[
              {t:'Bez reklam',d:'Zero śledzenia. Zero profilowania.'},
              {t:'Lokalizacja za zgodą',d:'Tylko gdy wysyłasz sygnał pomocy.'},
              {t:'Dane w Europie',d:'Serwery w EU. Szyfrowane połączenie.'},
              {t:'Usunięcie konta',d:'Jednym kliknięciem, w każdej chwili.'},
            ].map(t=>(
              <div key={t.t} style={{ padding:18,borderRadius:14,background:'#FFF8F2',border:'1px solid rgba(224,218,211,0.4)' }}>
                <h4 style={{ fontSize:14,fontWeight:700,color:'#2D2926',marginBottom:4 }}>{t.t}</h4>
                <p style={{ fontSize:12,color:'#6B6560',lineHeight:1.5 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ padding:'72px 24px' }}>
        <div style={{ maxWidth:800,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',gap:16 }}>
          {[
            {q:'Nie zastanawiam się rano, czy u mamy wszystko OK. Dostaję znak i wiem.',w:'Darek, 34',r:'syn'},
            {q:'Nie muszę czekać na telefon od syna. Daję znak i on ma spokój. Ja też.',w:'Krystyna, 67',r:'mama'},
            {q:'Tata mieszka sam po rozwodzie. cmok to jedyny sposób, żebym wiedziała codziennie.',w:'Ania, 29',r:'córka'},
          ].map(t=>(
            <div key={t.w} style={{ padding:24,borderRadius:18,background:'white',border:'1px solid rgba(224,218,211,0.4)' }}>
              <p style={{ fontSize:15,color:'#2D2926',lineHeight:1.6,marginBottom:14 }}>"{t.q}"</p>
              <p style={{ fontSize:12,color:'#6B6560' }}>{t.w}</p>
              <p style={{ fontSize:11,color:'#9B9490' }}>{t.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding:'72px 24px',textAlign:'center',background:'rgba(46,196,182,0.03)' }}>
        <h3 style={{ fontSize:30,fontWeight:800,color:'#2D2926',marginBottom:8 }}>Dwie minuty do pierwszego kręgu</h3>
        <p style={{ fontSize:15,color:'#6B6560',marginBottom:28 }}>Darmowa. Bez reklam. Bez zobowiązań.</p>
        <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#1a1a1a',color:'white',fontSize:15,fontWeight:600,padding:'14px 32px',borderRadius:12,textDecoration:'none' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          Pobierz na iPhone
        </a>
        <p style={{ fontSize:12,color:'#AAA299',marginTop:14 }}>Android? <a href="mailto:kontakt@cmok.app" style={{ color:'#2EC4B6',textDecoration:'none' }}>Zapisz się na listę</a></p>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding:'24px 24px',borderTop:'1px solid rgba(224,218,211,0.3)',fontSize:12,color:'#AAA299' }}>
        <div style={{ maxWidth:640,margin:'0 auto',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:8 }}>
          <div style={{ display:'flex',alignItems:'center',gap:6 }}>
            <span style={{ fontWeight:700,color:'#E85D3A',fontSize:13 }}>cmok</span>
            <span>© 2026</span>
          </div>
          <div style={{ display:'flex',gap:14 }}>
            <a href="/polityka-prywatnosci" style={{ color:'#AAA299',textDecoration:'none' }}>Prywatność</a>
            <a href="/regulamin" style={{ color:'#AAA299',textDecoration:'none' }}>Regulamin</a>
            <a href="mailto:kontakt@cmok.app" style={{ color:'#AAA299',textDecoration:'none' }}>Kontakt</a>
          </div>
          <p style={{ width:'100%',marginTop:6,lineHeight:1.5 }}>cmok nie zastępuje 112. W nagłym zagrożeniu życia zawsze dzwoń na numer alarmowy.</p>
        </div>
      </footer>
    </main>
  );
}
