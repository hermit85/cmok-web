"use client";

import Image from "next/image";
import { useEffect } from "react";

const APP = "https://apps.apple.com/pl/app/cmok/id6760717645";

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal,.reveal-scale,.reveal-left,.reveal-right");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

export default function Home() {
  useScrollReveal();

  return (
    <main>
      {/* ═══ HERO ═══ */}
      <section className="hero-section" style={{ display:'flex',alignItems:'center',justifyContent:'center',padding:'100px 24px 60px',position:'relative',overflow:'clip',minHeight:'85vh' }}>
        {/* Animated orbs */}
        <div className="orb" style={{ width:700,height:700,background:'radial-gradient(circle,rgba(255,107,107,0.07) 0%,transparent 65%)',top:-250,left:-350,animation:'orb-drift 16s ease-in-out infinite' }}/>
        <div className="orb" style={{ width:600,height:600,background:'radial-gradient(circle,rgba(46,196,182,0.07) 0%,transparent 65%)',bottom:-200,right:-300,animation:'orb-drift 20s ease-in-out infinite reverse' }}/>
        <div className="orb" style={{ width:400,height:400,background:'radial-gradient(circle,rgba(167,139,250,0.04) 0%,transparent 65%)',top:'40%',left:'60%',animation:'orb-drift 12s ease-in-out infinite 3s' }}/>

        <div style={{ position:'relative',zIndex:10,display:'flex',alignItems:'center',gap:48,maxWidth:920,width:'100%',flexWrap:'wrap',justifyContent:'center' }}>
          <div style={{ flex:'1 1 320px',maxWidth:420,textAlign:'center' }}>
            {/* Logo */}
            <div className="hero-enter hero-enter-d1" style={{ display:'flex',alignItems:'center',gap:10,marginBottom:28,justifyContent:'center' }}>
              <span className="font-display" style={{ fontSize:30,fontWeight:800,color:'#E85D3A' }}>cmok</span>
              <div style={{ animation:'breathe 3s ease-in-out infinite' }}>
                <svg width="44" height="18" viewBox="0 0 60 24" fill="none">
                  <circle cx="10" cy="12" r="8" fill="#FF6B6B"/>
                  <line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="100" style={{ animation:'line-draw 2s ease-out .5s both' }}/>
                  <circle cx="50" cy="12" r="8" fill="#2EC4B6"/>
                </svg>
              </div>
            </div>

            {/* Headline */}
            <h1 className="hero-enter hero-enter-d2 hero-title font-display" style={{ fontSize:46,fontWeight:800,lineHeight:1.08,marginBottom:20,color:'#2D2926',letterSpacing:'-0.02em' }}>
              Codzienny znak,<br/>że u bliskiej osoby<br/>wszystko OK
            </h1>

            {/* Subhead */}
            <p className="hero-enter hero-enter-d3 hero-sub" style={{ fontSize:17,color:'#6B6560',lineHeight:1.75,marginBottom:32,maxWidth:340,margin:'0 auto 32px' }}>
              Lekki gest między rozmowami. Dla osoby, która mieszka sama, i bliskich, którzy chcą wiedzieć, że jest OK.
            </p>

            {/* CTA */}
            <div className="hero-enter hero-enter-d4" style={{ display:'flex',flexDirection:'column',gap:10,alignItems:'center' }}>
              <a href={APP} className="cta-button">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                Pobierz na iPhone
              </a>
              <span style={{ fontSize:12,color:'#AAA299' }}>Darmowa · Bez reklam · 2 min do startu</span>
            </div>
          </div>

          {/* Hero phone */}
          <div className="hero-phone hero-phone-enter">
            <Image src="/screen-signaler.png" alt="cmok — ekran główny" width={240} height={520} className="phone-img" priority />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-hint-wrap" style={{ position:'absolute',bottom:24,left:'50%',transform:'translateX(-50%)',zIndex:10 }}>
          <svg className="scroll-hint" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#AAA299" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* ═══ PROBLEM — cinematic quote ═══ */}
      <section className="problem-section" style={{ padding:'80px 24px',textAlign:'center',position:'relative' }}>
        <div className="gradient-divider reveal" style={{ marginBottom:40 }}/>
        <p className="reveal reveal-delay-1 font-display problem-text" style={{ fontSize:24,fontWeight:700,color:'#2D2926',maxWidth:440,margin:'0 auto',lineHeight:1.45,letterSpacing:'-0.01em' }}>
          Dzwonisz raz na tydzień.<br/>A myślisz o&nbsp;niej codziennie.
        </p>
        <p className="reveal reveal-delay-2" style={{ fontSize:15,color:'#9B9490',marginTop:16,maxWidth:340,margin:'16px auto 0',lineHeight:1.7 }}>
          cmok wypełnia te dni między rozmowami.<br/>Lekko, ciepło, bez presji.
        </p>
      </section>

      {/* ═══ 3 STEPS — cinematic scroll ═══ */}
      <section className="steps-section" style={{ padding:'80px 24px 100px',background:'white',position:'relative',overflow:'hidden' }}>
        <div style={{ maxWidth:820,margin:'0 auto' }}>
          <p className="reveal" style={{ fontSize:12,fontWeight:700,color:'#E85D3A',textAlign:'center',letterSpacing:3,textTransform:'uppercase',marginBottom:10 }}>Jak to działa</p>
          <h2 className="reveal reveal-delay-1 section-title font-display" style={{ fontSize:36,fontWeight:800,textAlign:'center',marginBottom:72,color:'#2D2926',letterSpacing:'-0.02em' }}>Trzy kroki. Codziennie.</h2>

          {/* Step 1 */}
          <div className="step-row" style={{ display:'flex',alignItems:'center',gap:48,marginBottom:80,flexWrap:'wrap',justifyContent:'center',position:'relative' }}>
            <div className="reveal-left">
              <Image src="/screen-signaler.png" alt="Daj znak" width={220} height={476} className="phone-img" />
            </div>
            <div className="reveal-right" style={{ flex:'1 1 260px',maxWidth:340,position:'relative' }}>
              <span className="step-number" style={{ color:'#2EC4B6' }}>1</span>
              <h3 className="font-display" style={{ fontSize:24,fontWeight:700,color:'#2D2926',marginBottom:8 }}>Rano dajesz znak</h3>
              <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.75 }}>Jedno tapnięcie. Dwie sekundy. Bliscy wiedzą, że jest OK.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-row" style={{ display:'flex',alignItems:'center',gap:48,marginBottom:80,flexWrap:'wrap-reverse',justifyContent:'center',position:'relative' }}>
            <div className="reveal-left" style={{ flex:'1 1 260px',maxWidth:340,position:'relative' }}>
              <span className="step-number" style={{ color:'#FF6B6B' }}>2</span>
              <h3 className="font-display" style={{ fontSize:24,fontWeight:700,color:'#2D2926',marginBottom:8 }}>Bliscy widzą, że jest OK</h3>
              <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.75 }}>Każdy z kręgu dostaje powiadomienie. Może odpowiedzieć jednym gestem.</p>
            </div>
            <div className="reveal-right">
              <Image src="/screen-recipient.png" alt="Znak od Mamy" width={220} height={476} className="phone-img" />
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-row" style={{ display:'flex',alignItems:'center',gap:48,flexWrap:'wrap',justifyContent:'center',position:'relative' }}>
            <div className="reveal-left">
              <Image src="/screen-urgent.png" alt="Sygnał awaryjny" width={220} height={476} className="phone-img" />
            </div>
            <div className="reveal-right" style={{ flex:'1 1 260px',maxWidth:340,position:'relative' }}>
              <span className="step-number" style={{ color:'#E85D3A' }}>3</span>
              <h3 className="font-display" style={{ fontSize:24,fontWeight:700,color:'#2D2926',marginBottom:8 }}>A jeśli coś się dzieje</h3>
              <p style={{ fontSize:16,color:'#6B6560',lineHeight:1.75 }}>Bliska osoba źle się czuje. Tapuje &ldquo;Potrzebuję pomocy&rdquo;. Cały krąg dostaje sygnał. Najbliższa osoba reaguje w kilka minut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CIRCLE — big, prominent ═══ */}
      <section className="circle-section" style={{ padding:'100px 24px',textAlign:'center',background:'linear-gradient(180deg,rgba(46,196,182,0.03) 0%,rgba(46,196,182,0.08) 100%)',position:'relative',overflow:'clip' }}>
        <div className="orb" style={{ width:500,height:500,background:'radial-gradient(circle,rgba(46,196,182,0.06) 0%,transparent 65%)',top:-100,right:-200,animation:'orb-drift 14s ease-in-out infinite' }}/>
        <h3 className="reveal circle-title font-display" style={{ fontSize:36,fontWeight:800,color:'#2D2926',marginBottom:14,letterSpacing:'-0.02em' }}>Stwórz swój krąg bliskich</h3>
        <p className="reveal reveal-delay-1 circle-desc" style={{ fontSize:17,color:'#6B6560',maxWidth:440,margin:'0 auto 56px',lineHeight:1.75 }}>
          Syn, córka, sąsiadka, wnuk. Każdy w kręgu widzi codzienny znak. Każdy może zareagować, gdy trzeba.
        </p>

        <div className="reveal-scale circle-wrap" style={{ display:'flex',justifyContent:'center',marginBottom:48 }}>
          <div className="circle-viz" style={{ position:'relative',width:280,height:280,margin:'0 auto' }}>
            {/* Center: Mama */}
            <div className="circle-center" style={{ position:'absolute',inset:0,margin:'auto',width:72,height:72,borderRadius:'50%',background:'linear-gradient(135deg,#2EC4B6,#23A99D)',boxShadow:'0 0 40px rgba(46,196,182,0.3)',animation:'glow-pulse 3s ease-in-out infinite',display:'flex',alignItems:'center',justifyContent:'center' }}>
              <span className="font-display" style={{ color:'white',fontSize:13,fontWeight:700 }}>Mama</span>
            </div>
            {[
              {pct:50,  py:5,  c:'#FF6B6B',l:'Syn',d:'0s'},
              {pct:84,  py:25, c:'#E85D3A',l:'Córka',d:'.5s'},
              {pct:84,  py:75, c:'#A78BFA',l:'Sąsiad',d:'1s'},
              {pct:50,  py:95, c:'#FFD93D',l:'Wnuk',d:'1.5s'},
              {pct:16,  py:75, c:'#2EC4B6',l:'Koleż.',d:'2s'},
              {pct:16,  py:25, c:'#FF6B6B',l:'Brat',d:'2.5s'},
            ].map((m,i)=>(
              <div key={i} className="circle-member" style={{ position:'absolute',top:`${m.py}%`,left:`${m.pct}%`,transform:'translate(-50%,-50%)',width:48,height:48,borderRadius:'50%',background:m.c,opacity:.9,display:'flex',alignItems:'center',justifyContent:'center',animation:`float-y 4s ease-in-out infinite ${m.d}`,boxShadow:`0 6px 20px ${m.c}30` }}>
                <span style={{ color:'white',fontSize:10,fontWeight:700 }}>{m.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal reveal-delay-2 circle-features" style={{ display:'flex',justifyContent:'center',gap:32,flexWrap:'wrap',maxWidth:600,margin:'0 auto' }}>
          {[
            {t:'Widzą codzienny znak',d:'Cały krąg wie, że jest OK.'},
            {t:'Reagują, gdy trzeba',d:'Najbliższa osoba sprawdza.'},
            {t:'Nikt się nie martwi',d:'Rodzina, sąsiedzi, znajomi.'},
          ].map(b=>(
            <div key={b.t} style={{ flex:'1 1 150px',maxWidth:180,textAlign:'center' }}>
              <h4 className="font-display" style={{ fontSize:15,fontWeight:700,color:'#2D2926',marginBottom:4 }}>{b.t}</h4>
              <p style={{ fontSize:13,color:'#6B6560',lineHeight:1.6 }}>{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ TRUST ═══ */}
      <section className="trust-section" style={{ padding:'72px 24px',background:'white' }}>
        <div style={{ maxWidth:560,margin:'0 auto' }}>
          <div className="gradient-divider reveal" style={{ marginBottom:32 }}/>
          <h3 className="reveal reveal-delay-1 font-display" style={{ fontSize:24,fontWeight:800,textAlign:'center',marginBottom:28,color:'#2D2926' }}>Twoje dane pod kontrolą</h3>
          <div className="trust-grid" style={{ display:'grid',gridTemplateColumns:'1fr 1fr',gap:12 }}>
            {[
              {t:'Bez reklam',d:'Zero śledzenia i profilowania.',i:0},
              {t:'Lokalizacja za zgodą',d:'Tylko przy sygnale pomocy.',i:1},
              {t:'Dane w Europie',d:'Serwery w EU. Szyfrowane.',i:2},
              {t:'Usunięcie konta',d:'Jednym kliknięciem w apce.',i:3},
            ].map(t=>(
              <div key={t.t} className={`glass reveal reveal-delay-${t.i+1}`} style={{ padding:16,borderRadius:14 }}>
                <h4 className="font-display" style={{ fontSize:14,fontWeight:700,color:'#2D2926',marginBottom:4 }}>{t.t}</h4>
                <p style={{ fontSize:12,color:'#6B6560',lineHeight:1.6 }}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="testimonial-section" style={{ padding:'72px 24px',position:'relative' }}>
        <div className="orb" style={{ width:400,height:400,background:'radial-gradient(circle,rgba(255,107,107,0.04) 0%,transparent 65%)',bottom:-100,left:-150,animation:'orb-drift 18s ease-in-out infinite' }}/>
        <div className="testimonial-grid" style={{ maxWidth:720,margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:14 }}>
          {[
            {q:'Nie zastanawiam się rano, czy u mamy okej. Dostaję znak i wiem.',w:'Darek, 34',r:'syn',i:0},
            {q:'Daję znak i wiem, że syn nie musi się martwić. On też to czuje.',w:'Krystyna, 67',r:'mama',i:1},
            {q:'Tata mieszka sam. cmok to jedyny sposób, żeby wiedzieć codziennie.',w:'Ania, 29',r:'córka',i:2},
          ].map(t=>(
            <div key={t.w} className={`glass reveal reveal-delay-${t.i+1}`} style={{ padding:22,borderRadius:16,position:'relative' }}>
              <div style={{ fontSize:32,color:'#E0DAD3',lineHeight:1,marginBottom:4,fontFamily:'Georgia,serif' }}>&ldquo;</div>
              <p style={{ fontSize:14,color:'#2D2926',lineHeight:1.7,marginBottom:12 }}>{t.q}</p>
              <p style={{ fontSize:12,fontWeight:600,color:'#6B6560' }}>{t.w}</p>
              <p style={{ fontSize:11,color:'#9B9490' }}>{t.r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="reveal cta-final" style={{ padding:'80px 24px',textAlign:'center' }}>
        <div className="gradient-divider" style={{ marginBottom:32 }}/>
        <h3 className="font-display" style={{ fontSize:30,fontWeight:800,color:'#2D2926',marginBottom:8,letterSpacing:'-0.01em' }}>Dwie minuty do pierwszego kręgu</h3>
        <p style={{ fontSize:15,color:'#6B6560',marginBottom:28 }}>Darmowa. Bez reklam. Bez zobowiązań.</p>
        <a href={APP} className="cta-button">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
          Pobierz na iPhone
        </a>
        <p style={{ fontSize:12,color:'#AAA299',marginTop:14 }}>Android? <a href="mailto:cmok.app@gmail.com" style={{ color:'#2EC4B6',textDecoration:'none',fontWeight:500 }}>Zapisz się na listę</a></p>
      </section>

      {/* ═══ LEGAL NOTE ═══ */}
      <section style={{ padding:'32px 24px',textAlign:'center',background:'rgba(46,196,182,0.03)' }}>
        <p style={{ fontSize:12,fontWeight:600,color:'#6B6560',marginBottom:6 }}>Polityka i bezpieczeństwo</p>
        <p style={{ fontSize:11,color:'#9B9490',maxWidth:440,margin:'0 auto',lineHeight:1.6 }}>
          cmok to aplikacja do codziennego kontaktu z bliskimi. Nie wyświetla reklam i nie śledzi użytkowników między aplikacjami. Analityka służy wyłącznie poprawie jakości usługi, dane są przetwarzane w UE. Lokalizacja jest używana wyłącznie wtedy, gdy użytkownik sam uruchomi funkcję SOS. cmok nie zastępuje numeru 112 ani służb ratunkowych.
        </p>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ padding:'28px 24px',borderTop:'1px solid rgba(224,218,211,0.3)',fontSize:12,color:'#AAA299' }}>
        <div style={{ maxWidth:520,margin:'0 auto',textAlign:'center' }}>
          <div style={{ display:'flex',justifyContent:'center',gap:16,flexWrap:'wrap',marginBottom:10 }}>
            <a href="/regulamin" style={{ color:'#AAA299',textDecoration:'none',transition:'color .2s' }}>Regulamin</a>
            <a href="/polityka-prywatnosci" style={{ color:'#AAA299',textDecoration:'none',transition:'color .2s' }}>Polityka prywatności</a>
            <a href="/usun-konto" style={{ color:'#AAA299',textDecoration:'none',transition:'color .2s' }}>Usuń konto</a>
            <a href="mailto:cmok.app@gmail.com" style={{ color:'#AAA299',textDecoration:'none',transition:'color .2s' }}>Kontakt</a>
          </div>
          <p><span className="font-display" style={{ fontWeight:700,color:'#E85D3A' }}>cmok</span> © 2026 · cmok nie zastępuje 112</p>
        </div>
      </footer>
    </main>
  );
}
