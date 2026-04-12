const APP_STORE = "https://apps.apple.com/pl/app/cmok/id6760717645";

/* ── Brand Motif SVG ── */
function BrandMotif({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size * 0.4} viewBox="0 0 60 24" fill="none">
      <circle cx="10" cy="12" r="8" fill="#FF6B6B" />
      <line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="50" cy="12" r="8" fill="#2EC4B6" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative">

      {/* ════════════════════════════════════════════
          HERO — Full viewport, emotionally powerful
         ════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-clip">
        {/* Background orbs */}
        <div className="orb w-[500px] h-[500px] bg-[#FF6B6B] -top-32 -left-48 animate-float" />
        <div className="orb w-[400px] h-[400px] bg-[#2EC4B6] -bottom-20 -right-32 animate-float-delayed" />
        <div className="orb w-[300px] h-[300px] bg-[#E85D3A] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-2xl">
          {/* Logo */}
          <div className="flex items-center gap-4 mb-10 animate-fade-up animate-fade-up-1">
            <h1
              className="text-6xl md:text-7xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif", color: "var(--terracotta)" }}
            >
              cmok
            </h1>
            <div className="animate-breathe">
              <BrandMotif size={70} />
            </div>
          </div>

          {/* Headline */}
          <h2
            className="text-4xl md:text-[3.5rem] font-bold leading-[1.15] mb-6 animate-fade-up animate-fade-up-2"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            Codzienny znak,<br />że jest OK
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-[#9B9490] leading-relaxed mb-12 max-w-md animate-fade-up animate-fade-up-3">
            Dla Ciebie i Twoich bliskich.<br />
            Bez dzwonienia, bez stresu.
          </p>

          {/* CTA */}
          <a
            href={APP_STORE}
            className="group relative inline-flex items-center gap-3 bg-[#E85D3A] text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-[0_8px_32px_rgba(232,93,58,0.35)] hover:shadow-[0_12px_48px_rgba(232,93,58,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-fade-up animate-fade-up-4"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            Pobierz za darmo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-hint">
          <span className="text-xs text-[#AAA299] tracking-widest uppercase">Przewiń</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#AAA299" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          PROBLEM — Emotional, relatable
         ════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-36 px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* Abstract shape — two circles drifting apart */}
          <div className="flex justify-center items-center gap-16 mb-14">
            <div className="w-20 h-20 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#FF6B6B]/40" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-8 bg-[#E0DAD3]" />
              <div className="w-2 h-2 rounded-full bg-[#E0DAD3]" />
              <div className="w-px h-8 bg-[#E0DAD3]" />
            </div>
            <div className="w-20 h-20 rounded-full bg-[#2EC4B6]/20 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#2EC4B6]/40" />
            </div>
          </div>

          <h3
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            Ktoś bliski mieszka sam?
          </h3>
          <p className="text-lg md:text-xl text-[#9B9490] leading-relaxed max-w-lg mx-auto">
            Mama w Nowym Sączu. Ty w Warszawie.
            Codziennie myślisz — <em>czy u niej wszystko dobrze?</em>
            <br /><br />
            Dzwonienie jest ciężkie. SMS-y giną.
            A niepokój zostaje.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          HOW IT WORKS — 3 visual cards
         ════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            Jak to działa?
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="step-card bg-[#FFF8F2] rounded-3xl p-8 border border-[#E0DAD3]/50">
              <div className="w-16 h-16 rounded-2xl bg-[#2EC4B6]/10 flex items-center justify-center mb-6">
                <div className="w-8 h-8 rounded-full bg-[#2EC4B6] shadow-[0_4px_16px_rgba(46,196,182,0.4)]" />
              </div>
              <h4 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}>
                Daj znak
              </h4>
              <p className="text-[#9B9490] leading-relaxed">
                Jeden tap rano. Nic nie pisz, nic nie mów. Bliscy od razu wiedzą, że jest OK.
              </p>
            </div>

            {/* Step 2 */}
            <div className="step-card bg-[#FFF8F2] rounded-3xl p-8 border border-[#E0DAD3]/50">
              <div className="w-16 h-16 rounded-2xl bg-[#FF6B6B]/10 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FF6B6B" strokeWidth="2" strokeLinecap="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}>
                Miej spokój
              </h4>
              <p className="text-[#9B9490] leading-relaxed">
                Dostajesz ciepłe powiadomienie. Bez dzwonienia, bez wymuszonej rozmowy. Spokój.
              </p>
            </div>

            {/* Step 3 */}
            <div className="step-card bg-[#FFF8F2] rounded-3xl p-8 border border-[#E0DAD3]/50">
              <div className="w-16 h-16 rounded-2xl bg-[#E85D3A]/10 flex items-center justify-center mb-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E85D3A" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}>
                Bezpiecznik
              </h4>
              <p className="text-[#9B9490] leading-relaxed">
                Gdy coś się dzieje — jeden gest i cały krąg bliskich wie natychmiast. Z lokalizacją.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          TESTIMONIAL — Emotional quote
         ════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6">
        <div className="max-w-3xl mx-auto text-center relative">
          <span className="quote-mark -top-16 left-0 md:left-12">„</span>
          <span className="quote-mark -bottom-24 right-0 md:right-12 rotate-180">„</span>

          <p
            className="text-2xl md:text-3xl font-bold leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            Od 30 dni codziennie dostaję znak od mamy.
            Nie muszę dzwonić. Mam spokój.
            <br />
            <span className="text-[#2EC4B6]">Ona też.</span>
          </p>
          <p className="text-[#AAA299]">— Darek, Warszawa</p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CIRCLE — Visual explanation of the circle
         ════════════════════════════════════════════ */}
      <section className="py-20 md:py-28 px-6 bg-white/50">
        <div className="max-w-xl mx-auto text-center">
          {/* Visual: connected dots forming a circle */}
          <div className="flex justify-center mb-10">
            <div className="relative w-40 h-40">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FF6B6B] shadow-[0_4px_20px_rgba(255,107,107,0.3)]" />
              <div className="absolute bottom-2 left-2 w-10 h-10 rounded-full bg-[#2EC4B6] shadow-[0_4px_20px_rgba(46,196,182,0.3)]" />
              <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#E85D3A] shadow-[0_4px_20px_rgba(232,93,58,0.3)]" />
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 160 160">
                <line x1="80" y1="20" x2="22" y2="128" stroke="#E0DAD3" strokeWidth="1.5" />
                <line x1="80" y1="20" x2="138" y2="128" stroke="#E0DAD3" strokeWidth="1.5" />
                <line x1="22" y1="128" x2="138" y2="128" stroke="#E0DAD3" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          <h3
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            Stwórz swój krąg
          </h3>
          <p className="text-lg text-[#9B9490] leading-relaxed">
            Syn, córka, sąsiadka. Im więcej osób w kręgu,
            tym większy spokój. Dla wszystkich.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FINAL CTA
         ════════════════════════════════════════════ */}
      <section className="py-28 md:py-36 px-6 text-center">
        <div>
          <p className="text-xl text-[#9B9490] mb-3">Darmowa. Bez reklam.</p>
          <p
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            Dla spokoju.
          </p>
          <a
            href={APP_STORE}
            className="inline-flex items-center gap-3 bg-[#E85D3A] text-white text-lg font-bold px-12 py-5 rounded-2xl shadow-[0_8px_32px_rgba(232,93,58,0.35)] hover:shadow-[0_12px_48px_rgba(232,93,58,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}
          >
            Pobierz cmok
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FOOTER
         ════════════════════════════════════════════ */}
      <footer className="py-12 px-6 border-t border-[#E0DAD3]/60">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#AAA299]">
          <div className="flex items-center gap-3">
            <span className="font-bold text-[#E85D3A] text-base" style={{ fontFamily: "var(--font-nunito), Nunito, sans-serif" }}>cmok</span>
            <BrandMotif size={36} />
          </div>

          <div className="flex items-center gap-6">
            <a href="/polityka-prywatnosci" className="hover:text-[#2D2926] transition-colors">Polityka prywatności</a>
            <a href="/regulamin" className="hover:text-[#2D2926] transition-colors">Regulamin</a>
            <a href="mailto:kontakt@cmok.app" className="hover:text-[#2D2926] transition-colors">kontakt@cmok.app</a>
          </div>

          <p>© 2026</p>
        </div>
      </footer>
    </main>
  );
}
