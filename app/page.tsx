"use client";
import { useEffect, useRef } from "react";

const APP = "https://apps.apple.com/pl/app/cmok/id6760717645";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
function R({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}s` } : undefined}>{children}</div>;
}

/* ── Accurate phone mockup matching real app ── */
function Phone({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width:240,borderRadius:36,border:'5px solid #1a1a1a',overflow:'hidden',boxShadow:'0 24px 64px rgba(0,0,0,0.1)',background:'#FFF8F2' }}>
      <div style={{ width:72,height:22,background:'#1a1a1a',borderRadius:'0 0 10px 10px',margin:'0 auto' }}/>
      <div style={{ padding:'14px 16px',display:'flex',flexDirection:'column',alignItems:'center',minHeight:380 }}>
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section style={{ minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'60px 20px',position:'relative',overflow:'clip' }}>
        <div style={{ position:'absolute',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(255,107,107,0.06) 0%,transparent 70%)',top:-200,left:-300,animation:'orb-drift 14s ease-in-out infinite' }}/>
        <div style={{ position:'absolute',width:500,height:500,borderRadius:'50%',background:'radial-gradient(circle,rgba(46,196,182,0.06) 0%,transparent 70%)',bottom:-200,right:-250,animation:'orb-drift 18s ease-in-out infinite reverse' }}/>

        <div style={{ position:'relative',zIndex:10,display:'flex',alignItems:'center',gap:48,maxWidth:900,width:'100%',flexWrap:'wrap',justifyContent:'center' }}>
          <div style={{ flex:'1 1 320px',maxWidth:400 }}>
            <div className="anim-fade-up anim-d1" style={{ display:'flex',alignItems:'center',gap:10,marginBottom:24 }}>
              <span style={{ fontSize:28,fontWeight:800,color:'#E85D3A' }}>cmok</span>
              <div style={{ animation:'breathe 3s ease-in-out infinite' }}>
                <svg width="40" height="16" viewBox="0 0 60 24" fill="none"><circle cx="10" cy="12" r="8" fill="#FF6B6B"/><line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="12" r="8" fill="#2EC4B6"/></svg>
              </div>
            </div>
            <h1 className="anim-fade-up anim-d2" style={{ fontSize:42,fontWeight:800,lineHeight:1.12,marginBottom:16,color:'#2D2926' }}>
              Codzienny znak,<br/>że u bliskiej osoby<br/>wszystko OK
            </h1>
            <p className="anim-fade-up anim-d3" style={{ fontSize:17,color:'#6B6560',lineHeight:1.7,marginBottom:28 }}>
              Lekki gest między rozmowami. Dla osoby, która mieszka sama, i bliskich, którzy chcą spokoju.
            </p>
            <div className="anim-fade-up anim-d4" style={{ display:'flex',flexDirection:'column',gap:8 }}>
              <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#1a1a1a',color:'white',fontSize:15,fontWeight:600,padding:'13px 26px',borderRadius:12,textDecoration:'none',alignSelf:'flex-start' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Pobierz na iPhone
              </a>
              <span style={{ fontSize:12,color:'#AAA299' }}>Darmowa · Bez reklam · 2 min do startu</span>
            </div>
          </div>

          {/* Phone: REAL signaler before screen */}
          <div className="anim-fade-up anim-d3">
            <Phone>
              <span style={{ fontSize:14,fontWeight:700,color:'#E85D3A' }}>cmok</span>
              <span style={{ fontSize:10,color:'#9B9490',marginTop:1 }}>Mama</span>
              <div style={{ width:130,height:130,borderRadius:'50%',background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:32,animation:'glow 3s ease-in-out infinite' }}>
                <span style={{ color:'white',fontSize:16,fontWeight:700 }}>Daj znak</span>
              </div>
              <span style={{ fontSize:12,color:'#6B6560',marginTop:14 }}>Mama czeka na Twój znak</span>
              <div style={{ display:'flex',gap:4,marginTop:12 }}>
                {[1,1,0,1,1,0,0].map((ok,i)=><div key={i} style={{ width:8,height:8,borderRadius:4,background:ok?'#2EC4B6':'#E0DAD3' }}/>)}
              </div>
              <div style={{ marginTop:24,padding:'8px 14px',borderRadius:10,border:'1px solid #E0DAD3',background:'white' }}>
                <span style={{ fontSize:10,fontWeight:600,color:'#2D2926' }}>Potrzebuję pomocy</span>
              </div>
            </Phone>
          </div>
        </div>
      </section>

      {/* ═══ PROBLEM ═══ */}
      <section style={{ padding:'64px 24px',textAlign:'center' }}>
        <R>
          <p style={{ fontSize:26,fontWeight:800,color:'#2D2926',maxWidth:460,margin:'0 auto',lineHeight:1.4 }}>
            Dzwonisz do mamy raz na tydzień.<br/>A myślisz o niej codziennie.
          </p>
          <p style={{ fontSize:16,color:'#6B6560',marginTop:16,maxWidth:380,margin:'16px auto 0',lineHeight:1.7 }}>
            cmok wypełnia te dni między rozmowami.<br/>Lekko, ciepło, bez presji.
          </p>
        </R>
      </section>

      {/* ═══ 3 STEPS ═══ */}
      <section style={{ padding:'64px 24px 80px',background:'white' }}>
        <R>
          <p style={{ fontSize:12,fontWeight:700,color:'#E85D3A',textAlign:'center',letterSpacing:2,textTransform:'uppercase',marginBottom:8 }}>Jak to działa</p>
          <h2 style={{ fontSize:32,fontWeight:800,textAlign:'center',marginBottom:48,color:'#2D2926' }}>Trzy kroki. Codziennie.</h2>
        </R>

        <div style={{ maxWidth:780,margin:'0 auto',display:'flex',flexDirection:'column',gap:64 }}>
          {/* Step 1: Signaler before (real) */}
          <R>
            <div style={{ display:'flex',alignItems:'center',gap:40,flexWrap:'wrap',justifyContent:'center' }}>
              <Phone>
                <span style={{ fontSize:13,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                <span style={{ fontSize:9,color:'#9B9490',marginTop:1 }}>Mama</span>
                <div style={{ width:110,height:110,borderRadius:'50%',background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:24,boxShadow:'0 0 20px rgba(46,196,182,0.2)' }}>
                  <span style={{ color:'white',fontSize:14,fontWeight:700 }}>Daj znak</span>
                </div>
                <span style={{ fontSize:11,color:'#6B6560',marginTop:10 }}>Mama czeka na Twój znak</span>
                <div style={{ display:'flex',gap:3,marginTop:10 }}>{[1,1,0,1,1,0,0].map((ok,i)=><div key={i} style={{ width:7,height:7,borderRadius:4,background:ok?'#2EC4B6':'#E0DAD3' }}/>)}</div>
              </Phone>
              <div style={{ flex:'1 1 250px',maxWidth:320 }}>
                <span style={{ fontSize:40,fontWeight:800,color:'#2EC4B6',opacity:0.1 }}>1</span>
                <h3 style={{ fontSize:22,fontWeight:700,color:'#2D2926',marginBottom:6 }}>Rano dajesz znak</h3>
                <p style={{ fontSize:15,color:'#6B6560',lineHeight:1.7 }}>Jedno tapnięcie. Dwie sekundy. Możesz dodać jak się czujesz.</p>
              </div>
            </div>
          </R>

          {/* Step 2: Recipient after (real) */}
          <R>
            <div style={{ display:'flex',alignItems:'center',gap:40,flexWrap:'wrap-reverse',justifyContent:'center' }}>
              <div style={{ flex:'1 1 250px',maxWidth:320 }}>
                <span style={{ fontSize:40,fontWeight:800,color:'#FF6B6B',opacity:0.1 }}>2</span>
                <h3 style={{ fontSize:22,fontWeight:700,color:'#2D2926',marginBottom:6 }}>Bliscy widzą, że jest OK</h3>
                <p style={{ fontSize:15,color:'#6B6560',lineHeight:1.7 }}>Każdy z kręgu dostaje powiadomienie. Może odpowiedzieć jednym gestem.</p>
              </div>
              <Phone>
                <span style={{ fontSize:13,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                <span style={{ fontSize:9,color:'#9B9490',marginTop:1 }}>od Mamy</span>
                <div style={{ width:100,height:100,borderRadius:'50%',background:'#E0F7F5',border:'3px solid #2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:16 }}>
                  <span style={{ color:'#2EC4B6',fontSize:28 }}>✓</span>
                </div>
                <span style={{ fontSize:14,fontWeight:700,color:'#2D2926',marginTop:8 }}>Znak od Mamy</span>
                <span style={{ fontSize:10,color:'#6B6560',marginTop:2 }}>Na dziś jest kontakt · 07:55</span>
                <span style={{ fontSize:9,color:'#2EC4B6',fontWeight:600,marginTop:4 }}>Pełny tydzień!</span>
                <p style={{ fontSize:10,color:'#9B9490',marginTop:10 }}>Odpowiedz jednym gestem</p>
                <div style={{ display:'flex',gap:6,marginTop:6 }}>
                  {[{s:'♥',c:'#FF6B6B',l:'Kocham'},{s:'•',c:'#A78BFA',l:'Dobranoc'},{s:'✓',c:'#2EC4B6',l:'OK!'},{s:'★',c:'#FFD93D',l:'Super!'}].map(r=>(
                    <div key={r.s} style={{ display:'flex',flexDirection:'column',alignItems:'center',gap:2 }}>
                      <div style={{ width:32,height:32,borderRadius:8,background:'white',border:'1px solid #E0DAD3',display:'flex',alignItems:'center',justifyContent:'center',fontSize:13,color:r.c }}>{r.s}</div>
                      <span style={{ fontSize:7,color:'#9B9490' }}>{r.l}</span>
                    </div>
                  ))}
                </div>
              </Phone>
            </div>
          </R>

          {/* Step 3: Urgent — real "Potrzebuję pomocy" */}
          <R>
            <div style={{ display:'flex',alignItems:'center',gap:40,flexWrap:'wrap',justifyContent:'center' }}>
              <Phone>
                <span style={{ fontSize:13,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                <span style={{ fontSize:9,color:'#9B9490',marginTop:1 }}>Mama</span>
                <div style={{ width:110,height:110,borderRadius:'50%',background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:20,opacity:0.5 }}>
                  <span style={{ color:'white',fontSize:14,fontWeight:700 }}>Daj znak</span>
                </div>
                <div style={{ marginTop:20,padding:'10px 16px',borderRadius:12,border:'1.5px solid #E0DAD3',background:'white',width:'100%',textAlign:'center' }}>
                  <span style={{ fontSize:12,fontWeight:700,color:'#2D2926' }}>Potrzebuję pomocy</span>
                  <p style={{ fontSize:9,color:'#6B6560',marginTop:2 }}>Wyślij sygnał do kręgu bliskich</p>
                </div>
              </Phone>
              <div style={{ flex:'1 1 250px',maxWidth:320 }}>
                <span style={{ fontSize:40,fontWeight:800,color:'#E85D3A',opacity:0.1 }}>3</span>
                <h3 style={{ fontSize:22,fontWeight:700,color:'#2D2926',marginBottom:6 }}>A jeśli coś się dzieje</h3>
                <p style={{ fontSize:15,color:'#6B6560',lineHeight:1.7 }}>Jeden gest i cały krąg bliskich wie natychmiast. Z lokalizacją. Najbliższa osoba reaguje w kilka minut.</p>
              </div>
            </div>
          </R>
        </div>
      </section>

      {/* ═══ CIRCLE ═══ */}
      <section style={{ padding:'72px 24px',textAlign:'center' }}>
        <R>
          <div style={{ display:'flex',justifyContent:'center',marginBottom:24 }}>
            <div style={{ position:'relative',width:160,height:160 }}>
              <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:40,height:40,borderRadius:'50%',background:'#2EC4B6',animation:'breathe 3s ease-in-out infinite',display:'flex',alignItems:'center',justifyContent:'center' }}>
                <span style={{ color:'white',fontSize:9,fontWeight:700 }}>Mama</span>
              </div>
              {[{x:0,y:-60,c:'#FF6B6B',l:'Syn',d:'0s'},{x:52,y:-30,c:'#E85D3A',l:'Córka',d:'.7s'},{x:52,y:30,c:'#A78BFA',l:'Sąsiad',d:'1.4s'},{x:0,y:60,c:'#FFD93D',l:'Wnuk',d:'2.1s'},{x:-52,y:30,c:'#2EC4B6',l:'Koleż.',d:'2.8s'}].map((m,i)=>(
                <div key={i} style={{ position:'absolute',top:`calc(50% + ${m.y}px)`,left:`calc(50% + ${m.x}px)`,transform:'translate(-50%,-50%)',width:28,height:28,borderRadius:'50%',background:m.c,opacity:.8,display:'flex',alignItems:'center',justifyContent:'center',animation:`float 4s ease-in-out infinite ${m.d}` }}>
                  <span style={{ color:'white',fontSize:7,fontWeight:700 }}>{m.l}</span>
                </div>
              ))}
            </div>
          </div>
          <h3 style={{ fontSize:28,fontWeight:800,color:'#2D2926',marginBottom:10 }}>Stwórz swój krąg</h3>
          <p style={{ fontSize:15,color:'#6B6560',maxWidth:360,margin:'0 auto',lineHeight:1.6 }}>
            Każdy w kręgu widzi codzienny znak. Każdy może zareagować. Im więcej osób, tym większy spokój.
          </p>
        </R>
      </section>

      {/* ═══ TRUST ═══ */}
      <section style={{ padding:'56px 24px',background:'white' }}>
        <R>
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
        </R>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section style={{ padding:'56px 24px' }}>
        <R>
          <div style={{ maxWidth:680,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(190px,1fr))',gap:12 }}>
            {[{q:'Nie zastanawiam się rano, czy u mamy okej. Dostaję znak i wiem.',w:'Darek, 34',r:'syn'},{q:'Daję znak i wiem, że syn nie musi się martwić. On też to czuje.',w:'Krystyna, 67',r:'mama'},{q:'Tata mieszka sam. cmok to jedyny sposób, żeby wiedzieć codziennie.',w:'Ania, 29',r:'córka'}].map(t=>(
              <div key={t.w} className="glass" style={{ padding:20,borderRadius:14 }}>
                <p style={{ fontSize:14,color:'#2D2926',lineHeight:1.6,marginBottom:10 }}>"{t.q}"</p>
                <p style={{ fontSize:11,color:'#6B6560' }}>{t.w}</p>
                <p style={{ fontSize:10,color:'#9B9490' }}>{t.r}</p>
              </div>
            ))}
          </div>
        </R>
      </section>

      {/* ═══ CTA ═══ */}
      <section style={{ padding:'64px 24px',textAlign:'center' }}>
        <R>
          <h3 style={{ fontSize:28,fontWeight:800,color:'#2D2926',marginBottom:6 }}>Dwie minuty do pierwszego kręgu</h3>
          <p style={{ fontSize:14,color:'#6B6560',marginBottom:24 }}>Darmowa. Bez reklam. Bez zobowiązań.</p>
          <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#1a1a1a',color:'white',fontSize:15,fontWeight:600,padding:'13px 30px',borderRadius:12,textDecoration:'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Pobierz na iPhone
          </a>
          <p style={{ fontSize:11,color:'#AAA299',marginTop:12 }}>Android? <a href="mailto:kontakt@cmok.app" style={{ color:'#2EC4B6',textDecoration:'none' }}>Zapisz się na listę</a></p>
        </R>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding:'20px 24px',borderTop:'1px solid rgba(224,218,211,0.3)',fontSize:11,color:'#AAA299' }}>
        <div style={{ maxWidth:560,margin:'0 auto',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:6 }}>
          <div style={{ display:'flex',alignItems:'center',gap:6 }}><span style={{ fontWeight:700,color:'#E85D3A',fontSize:12 }}>cmok</span><span>© 2026</span></div>
          <div style={{ display:'flex',gap:12 }}>
            <a href="/polityka-prywatnosci" style={{ color:'#AAA299',textDecoration:'none' }}>Prywatność</a>
            <a href="/regulamin" style={{ color:'#AAA299',textDecoration:'none' }}>Regulamin</a>
            <a href="mailto:kontakt@cmok.app" style={{ color:'#AAA299',textDecoration:'none' }}>Kontakt</a>
          </div>
          <p style={{ width:'100%',marginTop:4 }}>cmok nie zastępuje 112. W nagłym zagrożeniu życia dzwoń na numer alarmowy.</p>
        </div>
      </footer>
    </main>
  );
}
