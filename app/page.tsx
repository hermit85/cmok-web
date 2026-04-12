const APP_STORE = "https://apps.apple.com/pl/app/cmok/id6760717645";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-20 text-center">
        <div className="flex items-center gap-3 mb-8">
          <h1 className="text-5xl font-[var(--font-nunito)] font-bold text-[#E85D3A]">cmok</h1>
          <div className="flex items-center gap-1">
            <div className="w-5 h-5 rounded-full bg-[#FF6B6B]" />
            <div className="w-6 h-0.5 bg-[#E0DAD3]" />
            <div className="w-5 h-5 rounded-full bg-[#2EC4B6]" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-[var(--font-nunito)] font-bold leading-tight mb-4 max-w-lg">
          Codzienny znak,<br />że jest OK
        </h2>

        <p className="text-lg text-[#9B9490] max-w-md mb-10 leading-relaxed">
          Dla Ciebie i Twoich bliskich.<br />
          Bez dzwonienia, bez stresu.
        </p>

        <a
          href={APP_STORE}
          className="bg-[#E85D3A] text-white font-[var(--font-nunito)] font-bold text-lg px-10 py-4 rounded-2xl shadow-lg shadow-[#E85D3A]/30 hover:opacity-90 transition-opacity"
        >
          Pobierz za darmo
        </a>
      </section>

      {/* Problem */}
      <section className="px-6 py-16 text-center bg-white/60">
        <h3 className="text-2xl font-[var(--font-nunito)] font-bold mb-4">Ktoś bliski mieszka sam?</h3>
        <p className="text-[#9B9490] max-w-lg mx-auto leading-relaxed">
          Mama, tata, babcia, sąsiad — martwisz się, czy wszystko OK.
          Dzwonienie codziennie jest ciężkie. A strach zostaje.
        </p>
      </section>

      {/* How it works */}
      <section className="px-6 py-16">
        <h3 className="text-2xl font-[var(--font-nunito)] font-bold text-center mb-12">Jak to działa?</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#2EC4B6] flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <h4 className="font-[var(--font-nunito)] font-bold mb-2">Daj znak</h4>
            <p className="text-[#9B9490] text-sm">Jeden tap rano. Bliscy wiedzą, że jest OK.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#FF6B6B] flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <h4 className="font-[var(--font-nunito)] font-bold mb-2">Miej spokój</h4>
            <p className="text-[#9B9490] text-sm">Dostajesz powiadomienie. Bez dzwonienia.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-[#E85D3A] flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">3</span>
            </div>
            <h4 className="font-[var(--font-nunito)] font-bold mb-2">Bezpiecznik</h4>
            <p className="text-[#9B9490] text-sm">Gdy coś się dzieje — krąg bliskich wie natychmiast.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <p className="text-[#9B9490] mb-6">Darmowa. Bez reklam. Dla spokoju.</p>
        <a
          href={APP_STORE}
          className="bg-[#E85D3A] text-white font-[var(--font-nunito)] font-bold px-10 py-4 rounded-2xl shadow-lg shadow-[#E85D3A]/30 hover:opacity-90 transition-opacity"
        >
          Pobierz cmok
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 text-center text-sm text-[#AAA299] border-t border-[#E0DAD3]">
        <div className="flex justify-center gap-6 mb-4">
          <a href="/polityka-prywatnosci" className="hover:text-[#2D2926] transition-colors">Polityka prywatności</a>
          <a href="/regulamin" className="hover:text-[#2D2926] transition-colors">Regulamin</a>
        </div>
        <p>cmok © {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
