const APP = "https://apps.apple.com/pl/app/cmok/id6760717645";

export default function Home() {
  return (
    <main>

      {/* ═══ HERO ═══ */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 24px', position: 'relative', overflow: 'clip' }}>
        <div style={{ position:'absolute',width:600,height:600,borderRadius:'50%',background:'#FF6B6B',opacity:0.08,filter:'blur(120px)',top:-150,left:-250,animation:'orb-drift 14s ease-in-out infinite' }}/>
        <div style={{ position:'absolute',width:500,height:500,borderRadius:'50%',background:'#2EC4B6',opacity:0.08,filter:'blur(120px)',bottom:-150,right:-200,animation:'orb-drift 18s ease-in-out infinite reverse' }}/>

        <div style={{ position:'relative',zIndex:10,textAlign:'center',maxWidth:560 }}>
          <div className="anim-fade-up anim-d1" style={{ display:'flex',alignItems:'center',justifyContent:'center',gap:14,marginBottom:48 }}>
            <h1 style={{ fontSize:72,fontWeight:800,color:'#E85D3A',margin:0,letterSpacing:-3 }}>cmok</h1>
            <div style={{ animation:'breathe 3s ease-in-out infinite' }}>
              <svg width="80" height="32" viewBox="0 0 60 24" fill="none">
                <circle cx="10" cy="12" r="8" fill="#FF6B6B"/>
                <line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round"/>
                <circle cx="50" cy="12" r="8" fill="#2EC4B6"/>
              </svg>
            </div>
          </div>
          <h2 className="anim-fade-up anim-d2" style={{ fontSize:52,fontWeight:800,lineHeight:1.1,marginBottom:20,color:'#2D2926',letterSpacing:-1 }}>Codzienny znak,<br/>że jest OK</h2>
          <p className="anim-fade-up anim-d3" style={{ fontSize:19,color:'#9B9490',lineHeight:1.6,marginBottom:44 }}>Lekki gest między rozmowami.<br/>Spokój na co dzień.</p>
          <a className="anim-fade-up anim-d4" href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#E85D3A',color:'white',fontSize:17,fontWeight:700,padding:'16px 36px',borderRadius:16,textDecoration:'none',boxShadow:'0 8px 32px rgba(232,93,58,0.3)',transition:'transform 0.2s' }}>
            Pobierz za darmo →
          </a>
        </div>

        <div style={{ position:'absolute',bottom:28,left:'50%',transform:'translateX(-50%)',animation:'scroll-hint 2.5s ease-in-out infinite' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#AAA299" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

      {/* ═══ PHONES ═══ */}
      <section style={{ padding:'60px 24px 80px' }}>
        <div style={{ display:'flex',justifyContent:'center',gap:32,flexWrap:'wrap',alignItems:'flex-start' }}>
          {/* Signaler phone */}
          <div style={{ animation:'slide-in-left 0.8s ease-out both' }}>
            <div style={{ width:280,height:560,borderRadius:44,background:'#FFF8F2',border:'6px solid #1a1a1a',overflow:'hidden',boxShadow:'0 30px 90px rgba(0,0,0,0.14)',position:'relative' }}>
              <div style={{ width:90,height:26,background:'#1a1a1a',borderRadius:'0 0 14px 14px',margin:'0 auto' }}/>
              <div style={{ padding:'28px 24px',display:'flex',flexDirection:'column',alignItems:'center' }}>
                <span style={{ fontSize:16,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                <span style={{ fontSize:11,color:'#9B9490',marginTop:2 }}>Mama</span>
                <div style={{ width:150,height:150,borderRadius:'50%',background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:36,animation:'pulse-glow 3s ease-in-out infinite, breathe 3s ease-in-out infinite' }}>
                  <span style={{ color:'white',fontSize:19,fontWeight:700 }}>Daj znak</span>
                </div>
                <span style={{ fontSize:13,color:'#9B9490',marginTop:20 }}>Mama czeka na Twój znak</span>
                <div style={{ display:'flex',gap:5,marginTop:18 }}>
                  {[1,1,0,1,1,0,0].map((ok,i) => <div key={i} style={{ width:10,height:10,borderRadius:5,background:ok?'#2EC4B6':'#E0DAD3' }}/>)}
                </div>
              </div>
            </div>
            <p style={{ textAlign:'center',marginTop:20,fontSize:15,fontWeight:700,color:'#2D2926' }}>Mama daje znak</p>
            <p style={{ textAlign:'center',fontSize:13,color:'#9B9490',marginTop:4 }}>Jeden tap. Dwie sekundy.</p>
          </div>

          {/* Recipient phone */}
          <div style={{ animation:'slide-in-right 0.8s ease-out both' }}>
            <div style={{ width:280,height:560,borderRadius:44,background:'#FFF8F2',border:'6px solid #1a1a1a',overflow:'hidden',boxShadow:'0 30px 90px rgba(0,0,0,0.14)',position:'relative' }}>
              <div style={{ width:90,height:26,background:'#1a1a1a',borderRadius:'0 0 14px 14px',margin:'0 auto' }}/>
              <div style={{ padding:'28px 24px',display:'flex',flexDirection:'column',alignItems:'center' }}>
                <span style={{ fontSize:16,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                <span style={{ fontSize:11,color:'#9B9490',marginTop:2 }}>od Mamy</span>
                <div style={{ width:140,height:140,borderRadius:'50%',background:'#E0F7F5',border:'3px solid #2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:30 }}>
                  <span style={{ color:'#2EC4B6',fontSize:40,fontWeight:300 }}>✓</span>
                </div>
                <span style={{ fontSize:18,fontWeight:700,color:'#2D2926',marginTop:16 }}>Znak od Mamy</span>
                <span style={{ fontSize:12,color:'#9B9490',marginTop:4 }}>Spokojnie · 08:14</span>
                <div style={{ display:'flex',gap:5,marginTop:14 }}>
                  {[1,1,1,1,1,1,1].map((_,i) => <div key={i} style={{ width:10,height:10,borderRadius:5,background:'#2EC4B6' }}/>)}
                </div>
                <span style={{ fontSize:11,color:'#2EC4B6',fontWeight:600,marginTop:6 }}>Pełny tydzień!</span>
                <div style={{ display:'flex',gap:10,marginTop:16 }}>
                  {[{s:'♥',c:'#FF6B6B'},{s:'•',c:'#A78BFA'},{s:'✓',c:'#2EC4B6'},{s:'★',c:'#FFD93D'}].map(r => (
                    <div key={r.s} style={{ width:42,height:42,borderRadius:12,background:'white',border:'1px solid #E0DAD3',display:'flex',alignItems:'center',justifyContent:'center',fontSize:17,color:r.c }}>{r.s}</div>
                  ))}
                </div>
              </div>
            </div>
            <p style={{ textAlign:'center',marginTop:20,fontSize:15,fontWeight:700,color:'#2D2926' }}>Syn ma spokój</p>
            <p style={{ textAlign:'center',fontSize:13,color:'#9B9490',marginTop:4 }}>Wie, że Mama jest OK</p>
          </div>
        </div>
      </section>

      {/* ═══ ONE LINER ═══ */}
      <section style={{ padding:'80px 24px',textAlign:'center' }}>
        <p style={{ fontSize:28,fontWeight:800,color:'#2D2926',maxWidth:480,margin:'0 auto',lineHeight:1.4 }}>
          Dzwonienie jest fajne.<br/>Ale nie da się dzwonić każdego dnia.
        </p>
        <p style={{ fontSize:18,color:'#9B9490',marginTop:16,maxWidth:380,margin:'16px auto 0' }}>cmok wypełnia te dni między rozmowami. Lekko, bez presji.</p>
      </section>

      {/* ═══ 3 STEPS — visual, minimal text ═══ */}
      <section style={{ padding:'60px 24px 80px',background:'rgba(255,255,255,0.5)' }}>
        <div style={{ maxWidth:900,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:20 }}>
          {[
            { color:'#2EC4B6', title:'Daj znak', desc:'Jedno tapnięcie rano. Dwie sekundy i bliscy wiedzą, że jest OK.', visual: <div style={{ width:64,height:64,borderRadius:'50%',background:'#2EC4B6',animation:'breathe 3s ease-in-out infinite',boxShadow:'0 0 24px rgba(46,196,182,0.3)' }}/> },
            { color:'#FF6B6B', title:'Bliscy wiedzą', desc:'Ciepłe powiadomienie. Bez wymuszonej rozmowy, bez presji.', visual: <div style={{ width:64,height:64,borderRadius:'50%',background:'#E0F7F5',border:'3px solid #2EC4B6',display:'flex',alignItems:'center',justifyContent:'center' }}><span style={{ color:'#2EC4B6',fontSize:24 }}>✓</span></div> },
            { color:'#E85D3A', title:'A w razie czego', desc:'Jeden gest i cały krąg bliskich wie natychmiast. Z lokalizacją.', visual: <div style={{ width:64,height:64,borderRadius:16,background:'rgba(232,93,58,0.08)',display:'flex',alignItems:'center',justifyContent:'center' }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E85D3A" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div> },
          ].map(step => (
            <div key={step.title} style={{ background:'#FFF8F2',borderRadius:24,padding:'36px 28px',border:'1px solid rgba(224,218,211,0.4)',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',gap:16 }}>
              {step.visual}
              <h4 style={{ fontSize:20,fontWeight:700,color:'#2D2926' }}>{step.title}</h4>
              <p style={{ fontSize:15,color:'#9B9490' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CIRCLE — large visual ═══ */}
      <section style={{ padding:'100px 24px',textAlign:'center' }}>
        <div style={{ display:'flex',justifyContent:'center',marginBottom:36 }}>
          <div style={{ position:'relative',width:200,height:200 }}>
            <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:56,height:56,borderRadius:'50%',background:'#2EC4B6',boxShadow:'0 0 40px rgba(46,196,182,0.3)',animation:'breathe 3s ease-in-out infinite',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <span style={{ color:'white',fontSize:22,fontWeight:700 }}>M</span>
            </div>
            {[
              {x:0,y:-80,c:'#FF6B6B',l:'S',d:'0s'},
              {x:69,y:-40,c:'#E85D3A',l:'C',d:'0.6s'},
              {x:69,y:40,c:'#A78BFA',l:'K',d:'1.2s'},
              {x:0,y:80,c:'#FFD93D',l:'W',d:'1.8s'},
              {x:-69,y:40,c:'#2EC4B6',l:'D',d:'2.4s'},
              {x:-69,y:-40,c:'#FF6B6B',l:'A',d:'3s'},
            ].map((m,i) => (
              <div key={i} style={{ position:'absolute',top:`calc(50% + ${m.y}px)`,left:`calc(50% + ${m.x}px)`,transform:'translate(-50%,-50%)',width:38,height:38,borderRadius:'50%',background:m.c,opacity:0.85,display:'flex',alignItems:'center',justifyContent:'center',animation:`float 4s ease-in-out infinite ${m.d}`,boxShadow:`0 4px 16px ${m.c}30` }}>
                <span style={{ color:'white',fontSize:14,fontWeight:700 }}>{m.l}</span>
              </div>
            ))}
          </div>
        </div>
        <h3 style={{ fontSize:36,fontWeight:800,marginBottom:12,color:'#2D2926' }}>Stwórz swój krąg</h3>
        <p style={{ fontSize:18,color:'#9B9490',maxWidth:400,margin:'0 auto',lineHeight:1.6 }}>
          Im więcej osób w kręgu,<br/><strong style={{ color:'#2D2926' }}>tym większy spokój.</strong>
        </p>
      </section>

      {/* ═══ TESTIMONIAL ═══ */}
      <section style={{ padding:'80px 24px',textAlign:'center',background:'rgba(46,196,182,0.04)' }}>
        <div style={{ maxWidth:560,margin:'0 auto' }}>
          <div style={{ fontSize:80,color:'#2EC4B6',opacity:0.1,fontFamily:'Georgia,serif',lineHeight:0.6,marginBottom:16 }}>„</div>
          <p style={{ fontSize:24,fontWeight:700,lineHeight:1.5,color:'#2D2926',marginBottom:16 }}>
            Rano dostaję znak od mamy. Wiem, że jest OK.
            Wieczorem dzwonimy i gadamy na spokojnie.
            <br/><span style={{ color:'#2EC4B6' }}>cmok wypełnia resztę.</span>
          </p>
          <p style={{ color:'#AAA299',fontSize:14 }}>Darek, Warszawa</p>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section style={{ padding:'56px 24px' }}>
        <div style={{ maxWidth:600,margin:'0 auto',display:'flex',justifyContent:'center',gap:48,flexWrap:'wrap',textAlign:'center' }}>
          {[
            {v:'1 tap',l:'dziennie',c:'#2EC4B6'},
            {v:'30s',l:'cały rytuał',c:'#E85D3A'},
            {v:'24/7',l:'bezpiecznik',c:'#FF6B6B'},
          ].map(s => (
            <div key={s.v}>
              <div style={{ fontSize:40,fontWeight:800,color:s.c }}>{s.v}</div>
              <div style={{ fontSize:13,color:'#9B9490',marginTop:4 }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding:'80px 24px',textAlign:'center' }}>
        <p style={{ fontSize:17,color:'#9B9490',marginBottom:8 }}>Darmowa. Bez reklam. Bez zobowiązań.</p>
        <p style={{ fontSize:36,fontWeight:800,marginBottom:40,color:'#2D2926' }}>Wypróbuj cmok</p>
        <div style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:16 }}>
          <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#E85D3A',color:'white',fontSize:17,fontWeight:700,padding:'16px 44px',borderRadius:16,textDecoration:'none',boxShadow:'0 8px 32px rgba(232,93,58,0.3)' }}>
            Pobierz na iPhone →
          </a>
          <p style={{ fontSize:13,color:'#AAA299' }}>Android wkrótce</p>
        </div>
      </section>

      {/* ═══ 112 DISCLAIMER ═══ */}
      <section style={{ padding:'40px 24px',textAlign:'center' }}>
        <div style={{ maxWidth:480,margin:'0 auto',padding:'24px 28px',borderRadius:16,background:'rgba(232,93,58,0.04)',border:'1px solid rgba(232,93,58,0.1)' }}>
          <p style={{ fontSize:13,color:'#9B9490',lineHeight:1.7 }}>
            <strong style={{ color:'#E85D3A' }}>cmok nie zastępuje 112.</strong>
            {' '}W nagłym zagrożeniu życia zawsze dzwoń na 112. cmok to codzienny rytuał bliskości i szybki sygnał do kręgu bliskich, gdy potrzebujesz pomocy.
          </p>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding:'32px 24px',borderTop:'1px solid rgba(224,218,211,0.5)',textAlign:'center',fontSize:13,color:'#AAA299' }}>
        <div style={{ display:'flex',justifyContent:'center',gap:20,marginBottom:10 }}>
          <a href="/polityka-prywatnosci" style={{ color:'#AAA299',textDecoration:'none' }}>Polityka prywatności</a>
          <a href="/regulamin" style={{ color:'#AAA299',textDecoration:'none' }}>Regulamin</a>
          <a href="mailto:kontakt@cmok.app" style={{ color:'#AAA299',textDecoration:'none' }}>kontakt@cmok.app</a>
        </div>
        <p>cmok © 2026</p>
      </footer>
    </main>
  );
}
