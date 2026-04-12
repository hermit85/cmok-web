export const metadata = { title: "Polityka prywatności — cmok" };

export default function PrivacyPolicy() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <a href="/" className="text-[#E85D3A] font-bold text-lg">cmok</a>
      <h1 className="text-3xl font-[var(--font-nunito)] font-bold mt-8 mb-6">Polityka prywatności</h1>
      <p className="text-sm text-[#9B9490] mb-8">Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}</p>

      <div className="space-y-6 text-[#2D2926] leading-relaxed">
        <section>
          <h2 className="font-bold text-lg mb-2">1. Jakie dane zbieramy</h2>
          <ul className="list-disc pl-6 space-y-1 text-[#9B9490]">
            <li>Numer telefonu (do logowania przez SMS)</li>
            <li>Imię lub pseudonim (podane przez użytkownika)</li>
            <li>Codzienny status check-in (data i godzina)</li>
            <li>Lokalizacja — tylko przy pilnym sygnale, za zgodą użytkownika</li>
            <li>Token push notification (do wysyłania powiadomień)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">2. Jak używamy danych</h2>
          <p className="text-[#9B9490]">
            Dane używamy wyłącznie do działania aplikacji: powiadamiania bliskich o codziennym znaku,
            wysyłania pilnych sygnałów i powiadomień push. Nie sprzedajemy danych. Nie pokazujemy reklam.
            Nie udostępniamy danych podmiotom trzecim w celach marketingowych.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">3. Gdzie przechowujemy dane</h2>
          <p className="text-[#9B9490]">
            Dane przechowywane są w Supabase w regionie EU (Irlandia). Połączenie z serwerem
            jest szyfrowane (HTTPS/TLS).
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">4. Twoje prawa</h2>
          <ul className="list-disc pl-6 space-y-1 text-[#9B9490]">
            <li>Możesz usunąć konto i wszystkie dane w aplikacji (Ustawienia → Usuń konto i dane)</li>
            <li>Możesz zażądać kopii swoich danych kontaktując się z nami</li>
            <li>Możesz cofnąć zgodę na powiadomienia w ustawieniach telefonu</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">5. Kontakt</h2>
          <p className="text-[#9B9490]">
            Pytania dotyczące prywatności: kontakt@cmok.app
          </p>
        </section>
      </div>
    </main>
  );
}
