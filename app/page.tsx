"use client";
import { useEffect, useRef } from "react";

const APP = "https://apps.apple.com/pl/app/cmok/id6760717645";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add("visible"); obs.disconnect(); } }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const ref = useReveal();
  return <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}s` } : undefined}>{children}</div>;
}

export default function Home() {
  return (
    <main>

      {/* ═══════════════════════════════════════
          HERO — cinematic product scene
         ═══════════════════════════════════════ */}
      <section style={{ minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'40px 20px',position:'relative',overflow:'clip' }}>
        {/* Ambient light */}
        <div style={{ position:'absolute',width:700,height:700,borderRadius:'50%',background:'radial-gradient(circle,rgba(255,107,107,0.08) 0%,transparent 70%)',top:-250,left:-350,animation:'orb-drift 16s ease-in-out infinite' }}/>
        <div style={{ position:'absolute',width:600,height:600,borderRadius:'50%',background:'radial-gradient(circle,rgba(46,196,182,0.08) 0%,transparent 70%)',bottom:-250,right:-300,animation:'orb-drift 20s ease-in-out infinite reverse' }}/>
        <div style={{ position:'absolute',width:400,height:400,borderRadius:'50%',background:'radial-gradient(circle,rgba(232,93,58,0.04) 0%,transparent 70%)',top:'45%',left:'50%',transform:'translate(-50%,-50%)' }}/>

        <div style={{ position:'relative',zIndex:10,display:'flex',alignItems:'center',gap:56,maxWidth:980,width:'100%',flexWrap:'wrap',justifyContent:'center' }}>
          {/* Copy */}
          <div style={{ flex:'1 1 320px',maxWidth:400 }}>
            <div className="anim-fade-up anim-d1" style={{ display:'flex',alignItems:'center',gap:10,marginBottom:28 }}>
              <span style={{ fontSize:28,fontWeight:800,color:'#E85D3A',letterSpacing:-0.5 }}>cmok</span>
              <div style={{ animation:'breathe 3s ease-in-out infinite' }}>
                <svg width="40" height="16" viewBox="0 0 60 24" fill="none"><circle cx="10" cy="12" r="8" fill="#FF6B6B"/><line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round"/><circle cx="50" cy="12" r="8" fill="#2EC4B6"/></svg>
              </div>
            </div>
            <h1 className="anim-fade-up anim-d2" style={{ fontSize:44,fontWeight:800,lineHeight:1.12,marginBottom:18,color:'#2D2926' }}>
              Codzienny znak,<br/>że u bliskiej osoby<br/>wszystko OK
            </h1>
            <p className="anim-fade-up anim-d3" style={{ fontSize:17,color:'#6B6560',lineHeight:1.7,marginBottom:30 }}>
              Lekki gest między rozmowami. Dla osoby, która mieszka sama, i bliskich, którzy chcą spokoju.
            </p>
            <div className="anim-fade-up anim-d4" style={{ display:'flex',flexDirection:'column',gap:10 }}>
              <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#1a1a1a',color:'white',fontSize:15,fontWeight:600,padding:'14px 28px',borderRadius:12,textDecoration:'none',alignSelf:'flex-start' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Pobierz na iPhone
              </a>
              <span style={{ fontSize:12,color:'#AAA299' }}>Darmowa · Bez reklam · 2 min do startu</span>
            </div>
          </div>

          {/* BIG phone — the hero object */}
          <div className="anim-fade-up anim-d3" style={{ flex:'0 0 auto',position:'relative' }}>
            {/* Ambient glow behind phone */}
            <div style={{ position:'absolute',inset:-40,borderRadius:'50%',background:'radial-gradient(circle,rgba(46,196,182,0.12) 0%,transparent 70%)',animation:'breathe 4s ease-in-out infinite',zIndex:0 }}/>

            <div className="phone-frame" style={{ width:280,height:560,background:'#FFF8F2',position:'relative',zIndex:1 }}>
              <div className="phone-notch"/>
              <div className="phone-screen">
                <span style={{ fontSize:16,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                <span style={{ fontSize:11,color:'#9B9490',marginTop:2 }}>Mama</span>

                {/* The circle — hero object */}
                <div style={{ position:'relative',marginTop:28 }}>
                  {/* Signal ring */}
                  <div style={{ position:'absolute',inset:0,borderRadius:'50%',border:'2px solid rgba(46,196,182,0.2)',animation:'pulse-ring 2.5s ease-out infinite' }}/>
                  <div style={{ width:140,height:140,borderRadius:'50%',background:'linear-gradient(135deg,#2EC4B6 0%,#23A99D 100%)',display:'flex',alignItems:'center',justifyContent:'center',animation:'glow 3s ease-in-out infinite',position:'relative',zIndex:1 }}>
                    <span style={{ color:'white',fontSize:17,fontWeight:700 }}>Daj znak</span>
                  </div>
                </div>

                <span style={{ fontSize:12,color:'#6B6560',marginTop:16 }}>Mama czeka na Twój znak</span>
                <div style={{ display:'flex',gap:5,marginTop:14 }}>
                  {[1,1,0,1,1,0,0].map((ok,i) => <div key={i} style={{ width:9,height:9,borderRadius:5,background:ok?'#2EC4B6':'#E0DAD3',transition:'all .3s' }}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ position:'absolute',bottom:24,left:'50%',transform:'translateX(-50%)',animation:'scroll-hint 2.5s ease-in-out infinite' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#AAA299" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          PROBLEM — emotional gravity
         ═══════════════════════════════════════ */}
      <section style={{ padding:'72px 24px',textAlign:'center' }}>
        <Reveal>
          <p style={{ fontSize:28,fontWeight:800,color:'#2D2926',maxWidth:480,margin:'0 auto',lineHeight:1.4 }}>
            Dzwonisz do mamy raz na tydzień.<br/>A myślisz o niej codziennie.
          </p>
          <p style={{ fontSize:16,color:'#6B6560',marginTop:18,maxWidth:400,margin:'18px auto 0',lineHeight:1.7 }}>
            cmok wypełnia te dni między rozmowami.<br/>Lekko, ciepło, bez presji.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          3 STEPS — product story with phones
         ═══════════════════════════════════════ */}
      <section style={{ padding:'64px 24px 80px',background:'white' }}>
        <Reveal>
          <p style={{ fontSize:12,fontWeight:700,color:'#E85D3A',textAlign:'center',letterSpacing:2,textTransform:'uppercase',marginBottom:10 }}>Jak to działa</p>
          <h2 style={{ fontSize:34,fontWeight:800,textAlign:'center',marginBottom:56,color:'#2D2926' }}>Trzy kroki. Codziennie.</h2>
        </Reveal>

        <div style={{ maxWidth:840,margin:'0 auto',display:'flex',flexDirection:'column',gap:72 }}>
          {/* Step 1 */}
          <Reveal>
            <div style={{ display:'flex',alignItems:'center',gap:48,flexWrap:'wrap',justifyContent:'center' }}>
              <div className="phone-frame" style={{ width:220,height:440,background:'#FFF8F2',flex:'0 0 auto' }}>
                <div className="phone-notch"/>
                <div className="phone-screen">
                  <span style={{ fontSize:13,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                  <span style={{ fontSize:9,color:'#9B9490',marginTop:1 }}>Mama</span>
                  <div style={{ position:'relative',marginTop:20 }}>
                    <div style={{ position:'absolute',inset:0,borderRadius:'50%',border:'2px solid rgba(46,196,182,0.15)',animation:'pulse-ring 2.5s ease-out infinite' }}/>
                    <div style={{ width:100,height:100,borderRadius:'50%',background:'linear-gradient(135deg,#2EC4B6,#23A99D)',display:'flex',alignItems:'center',justifyContent:'center',animation:'glow 3s ease-in-out infinite' }}>
                      <span style={{ color:'white',fontSize:13,fontWeight:700 }}>Daj znak</span>
                    </div>
                  </div>
                  <span style={{ fontSize:10,color:'#6B6560',marginTop:10 }}>Mama czeka na Twój znak</span>
                  <div style={{ display:'flex',gap:3,marginTop:8 }}>{[1,1,0,1,1,0,0].map((ok,i)=><div key={i} style={{ width:6,height:6,borderRadius:3,background:ok?'#2EC4B6':'#E0DAD3' }}/>)}</div>
                </div>
              </div>
              <div style={{ flex:'1 1 260px',maxWidth:340 }}>
                <span style={{ fontSize:44,fontWeight:800,color:'#2EC4B6',opacity:0.12,lineHeight:1 }}>1</span>
                <h3 style={{ fontSize:24,fontWeight:700,color:'#2D2926',marginBottom:8 }}>Rano dajesz znak</h3>
                <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.7 }}>Jedno tapnięcie. Dwie sekundy. Możesz też dodać, jak się dziś czujesz.</p>
              </div>
            </div>
          </Reveal>

          {/* Step 2 */}
          <Reveal>
            <div style={{ display:'flex',alignItems:'center',gap:48,flexWrap:'wrap-reverse',justifyContent:'center' }}>
              <div style={{ flex:'1 1 260px',maxWidth:340 }}>
                <span style={{ fontSize:44,fontWeight:800,color:'#FF6B6B',opacity:0.12,lineHeight:1 }}>2</span>
                <h3 style={{ fontSize:24,fontWeight:700,color:'#2D2926',marginBottom:8 }}>Bliscy widzą, że jest OK</h3>
                <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.7 }}>Każdy z kręgu dostaje ciepłe powiadomienie. Może odpowiedzieć jednym gestem.</p>
              </div>
              <div className="phone-frame" style={{ width:220,height:440,background:'#FFF8F2',flex:'0 0 auto' }}>
                <div className="phone-notch"/>
                <div className="phone-screen">
                  <span style={{ fontSize:13,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                  <span style={{ fontSize:9,color:'#9B9490',marginTop:1 }}>od Mamy</span>
                  <div style={{ width:100,height:100,borderRadius:'50%',background:'#E0F7F5',border:'3px solid #2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',marginTop:16 }}>
                    <span style={{ color:'#2EC4B6',fontSize:28,fontWeight:300 }}>✓</span>
                  </div>
                  <span style={{ fontSize:14,fontWeight:700,color:'#2D2926',marginTop:10 }}>Znak od Mamy</span>
                  <span style={{ fontSize:10,color:'#6B6560',marginTop:2 }}>Spokojnie · 08:14</span>
                  <div style={{ display:'flex',gap:6,marginTop:12 }}>
                    {[{s:'♥',c:'#FF6B6B'},{s:'•',c:'#A78BFA'},{s:'✓',c:'#2EC4B6'},{s:'★',c:'#FFD93D'}].map((r,i)=>(
                      <div key={r.s} style={{ width:30,height:30,borderRadius:8,background:'white',border:'1px solid #E0DAD3',display:'flex',alignItems:'center',justifyContent:'center',fontSize:12,color:r.c,animation:`chip-in .4s ease-out both ${0.6+i*0.1}s` }}>{r.s}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Step 3 */}
          <Reveal>
            <div style={{ display:'flex',alignItems:'center',gap:48,flexWrap:'wrap',justifyContent:'center' }}>
              <div className="phone-frame" style={{ width:220,height:440,background:'#FFF8F2',flex:'0 0 auto' }}>
                <div className="phone-notch"/>
                <div className="phone-screen">
                  <span style={{ fontSize:13,fontWeight:700,color:'#E85D3A' }}>cmok</span>
                  <div style={{ marginTop:14,padding:'12px 14px',borderRadius:14,background:'white',border:'1px solid #E0DAD3',width:'100%',textAlign:'left' }}>
                    <span style={{ fontSize:12,fontWeight:700,color:'#2D2926' }}>Potrzebuję pomocy</span>
                    <p style={{ fontSize:9,color:'#6B6560',marginTop:3 }}>Wyślij sygnał do kręgu</p>
                  </div>
                  {/* Signal propagation */}
                  <div style={{ position:'relative',width:140,height:80,marginTop:12 }}>
                    <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:8,height:8,borderRadius:4,background:'#E85D3A' }}/>
                    <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:8,height:8,borderRadius:4,border:'2px solid #E85D3A',animation:'signal-out 2s ease-out infinite' }}/>
                    <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:8,height:8,borderRadius:4,border:'2px solid #E85D3A',animation:'signal-out 2s ease-out infinite .6s' }}/>
                    <div style={{ position:'absolute',top:4,left:20,width:24,height:24,borderRadius:12,background:'#FF6B6B',display:'flex',alignItems:'center',justifyContent:'center',animation:'float 3s ease-in-out infinite' }}><span style={{ color:'white',fontSize:8,fontWeight:700 }}>Syn</span></div>
                    <div style={{ position:'absolute',top:4,right:20,width:24,height:24,borderRadius:12,background:'#2EC4B6',display:'flex',alignItems:'center',justifyContent:'center',animation:'float 3s ease-in-out infinite .5s' }}><span style={{ color:'white',fontSize:8,fontWeight:700 }}>Córka</span></div>
                    <div style={{ position:'absolute',bottom:4,left:'50%',transform:'translateX(-50%)',width:24,height:24,borderRadius:12,background:'#E85D3A',display:'flex',alignItems:'center',justifyContent:'center',animation:'float 3s ease-in-out infinite 1s' }}><span style={{ color:'white',fontSize:7,fontWeight:700 }}>Sąsiad</span></div>
                  </div>
                  <div style={{ padding:'8px 12px',borderRadius:10,background:'rgba(46,196,182,0.06)',width:'100%',textAlign:'left',marginTop:4 }}>
                    <span style={{ fontSize:9,color:'#2EC4B6',fontWeight:600 }}>Sąsiadka:</span>
                    <span style={{ fontSize:10,color:'#2D2926',fontWeight:600,marginLeft:4 }}>"Zajmuję się tym"</span>
                  </div>
                </div>
              </div>
              <div style={{ flex:'1 1 260px',maxWidth:340 }}>
                <span style={{ fontSize:44,fontWeight:800,color:'#E85D3A',opacity:0.12,lineHeight:1 }}>3</span>
                <h3 style={{ fontSize:24,fontWeight:700,color:'#2D2926',marginBottom:8 }}>A jeśli coś się dzieje</h3>
                <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.7 }}>Jeden gest. Sygnał rozchodzi się do całego kręgu z lokalizacją. Najbliższa osoba reaguje w kilka minut.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CIRCLE — warm, social
         ═══════════════════════════════════════ */}
      <section style={{ padding:'80px 24px',textAlign:'center',background:'rgba(46,196,182,0.03)' }}>
        <Reveal>
          <div style={{ display:'flex',justifyContent:'center',marginBottom:28 }}>
            <div style={{ position:'relative',width:180,height:180 }}>
              <div style={{ position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',width:44,height:44,borderRadius:'50%',background:'linear-gradient(135deg,#2EC4B6,#23A99D)',boxShadow:'0 0 30px rgba(46,196,182,0.25)',animation:'breathe 3s ease-in-out infinite',display:'flex',alignItems:'center',justifyContent:'center' }}>
                <span style={{ color:'white',fontSize:10,fontWeight:700 }}>Mama</span>
              </div>
              {[
                {x:0,y:-68,c:'#FF6B6B',l:'Syn',d:'0s'},
                {x:59,y:-34,c:'#E85D3A',l:'Córka',d:'.7s'},
                {x:59,y:34,c:'#A78BFA',l:'Sąsiad',d:'1.4s'},
                {x:0,y:68,c:'#FFD93D',l:'Wnuk',d:'2.1s'},
                {x:-59,y:34,c:'#2EC4B6',l:'Koleż.',d:'2.8s'},
              ].map((m,i)=>(
                <div key={i} style={{ position:'absolute',top:`calc(50%+${m.y}px)`,left:`calc(50%+${m.x}px)`,transform:'translate(-50%,-50%)',width:32,height:32,borderRadius:'50%',background:m.c,opacity:.8,display:'flex',alignItems:'center',justifyContent:'center',animation:`float 4s ease-in-out infinite ${m.d}` }}>
                  <span style={{ color:'white',fontSize:7,fontWeight:700 }}>{m.l}</span>
                </div>
              ))}
            </div>
          </div>
          <h3 style={{ fontSize:30,fontWeight:800,color:'#2D2926',marginBottom:10 }}>Stwórz swój krąg</h3>
          <p style={{ fontSize:16,color:'#6B6560',maxWidth:380,margin:'0 auto',lineHeight:1.6 }}>
            Każdy w kręgu widzi codzienny znak. Każdy może zareagować. Im więcej osób, tym większy spokój.
          </p>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          TRUST — clean, controlled
         ═══════════════════════════════════════ */}
      <section style={{ padding:'60px 24px' }}>
        <Reveal>
          <div style={{ maxWidth:580,margin:'0 auto' }}>
            <h3 style={{ fontSize:22,fontWeight:800,textAlign:'center',marginBottom:24,color:'#2D2926' }}>Twoje dane pod kontrolą</h3>
            <div style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:12 }}>
              {[
                {t:'Bez reklam',d:'Zero śledzenia. Zero profilowania.'},
                {t:'Lokalizacja za zgodą',d:'Tylko gdy wysyłasz sygnał pomocy.'},
                {t:'Dane w Europie',d:'Serwery w EU. Szyfrowane.'},
                {t:'Usunięcie konta',d:'Jednym kliknięciem w apce.'},
              ].map(t=>(
                <div key={t.t} className="glass" style={{ padding:16,borderRadius:14 }}>
                  <h4 style={{ fontSize:13,fontWeight:700,color:'#2D2926',marginBottom:3 }}>{t.t}</h4>
                  <p style={{ fontSize:12,color:'#6B6560',lineHeight:1.5 }}>{t.d}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          TESTIMONIALS — warm fragments
         ═══════════════════════════════════════ */}
      <section style={{ padding:'60px 24px',background:'white' }}>
        <Reveal>
          <div style={{ maxWidth:720,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:14 }}>
            {[
              {q:'Nie zastanawiam się rano, czy u mamy okej. Dostaję znak i wiem.',w:'Darek, 34',r:'syn'},
              {q:'Daję znak i wiem, że syn nie musi się martwić. On też to czuje.',w:'Krystyna, 67',r:'mama'},
              {q:'Tata mieszka sam. cmok to jedyny sposób, żeby wiedzieć codziennie.',w:'Ania, 29',r:'córka'},
            ].map(t=>(
              <div key={t.w} className="glass" style={{ padding:22,borderRadius:16 }}>
                <p style={{ fontSize:15,color:'#2D2926',lineHeight:1.6,marginBottom:12 }}>"{t.q}"</p>
                <p style={{ fontSize:12,color:'#6B6560' }}>{t.w}</p>
                <p style={{ fontSize:11,color:'#9B9490' }}>{t.r}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ═══════════════════════════════════════
          CTA — final conversion
         ═══════════════════════════════════════ */}
      <section style={{ padding:'72px 24px',textAlign:'center' }}>
        <Reveal>
          <h3 style={{ fontSize:30,fontWeight:800,color:'#2D2926',marginBottom:8 }}>Dwie minuty do pierwszego kręgu</h3>
          <p style={{ fontSize:15,color:'#6B6560',marginBottom:28 }}>Darmowa. Bez reklam. Bez zobowiązań.</p>
          <a href={APP} style={{ display:'inline-flex',alignItems:'center',gap:10,background:'#1a1a1a',color:'white',fontSize:15,fontWeight:600,padding:'14px 32px',borderRadius:12,textDecoration:'none' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            Pobierz na iPhone
          </a>
          <p style={{ fontSize:12,color:'#AAA299',marginTop:14 }}>Android? <a href="mailto:kontakt@cmok.app" style={{ color:'#2EC4B6',textDecoration:'none' }}>Zapisz się na listę</a></p>
        </Reveal>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding:'24px 24px',borderTop:'1px solid rgba(224,218,211,0.3)',fontSize:12,color:'#AAA299' }}>
        <div style={{ maxWidth:600,margin:'0 auto',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:8 }}>
          <div style={{ display:'flex',alignItems:'center',gap:6 }}><span style={{ fontWeight:700,color:'#E85D3A',fontSize:13 }}>cmok</span><span>© 2026</span></div>
          <div style={{ display:'flex',gap:14 }}>
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
