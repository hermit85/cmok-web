export const metadata = { title: "Regulamin — cmok" };

export default function Terms() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <a href="/" className="text-[#E85D3A] font-bold text-lg">cmok</a>
      <h1 className="text-3xl font-[var(--font-nunito)] font-bold mt-8 mb-6">Regulamin</h1>
      <p className="text-sm text-[#9B9490] mb-8">Ostatnia aktualizacja: {new Date().toLocaleDateString("pl-PL")}</p>

      <div className="space-y-6 text-[#2D2926] leading-relaxed">
        <section>
          <h2 className="font-bold text-lg mb-2">1. Czym jest cmok</h2>
          <p className="text-[#9B9490]">
            cmok to darmowa aplikacja mobilna umożliwiająca codzienny kontakt między bliskimi osobami
            poprzez prosty gest („znak"). Aplikacja nie jest usługą medyczną, alarmową ani ratunkową.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">2. cmok nie zastępuje 112</h2>
          <p className="text-[#9B9490]">
            Funkcja pilnego sygnału w aplikacji służy do powiadamiania kręgu bliskich osób.
            Nie jest to zamiennik numeru alarmowego 112 ani służb ratunkowych.
            W sytuacji zagrożenia życia zawsze dzwoń na 112.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">3. Konto i dane</h2>
          <ul className="list-disc pl-6 space-y-1 text-[#9B9490]">
            <li>Rejestracja wymaga numeru telefonu i weryfikacji SMS</li>
            <li>Użytkownik odpowiada za prawdziwość podanych danych</li>
            <li>Konto można usunąć w każdej chwili w ustawieniach aplikacji</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">4. Zasady korzystania</h2>
          <ul className="list-disc pl-6 space-y-1 text-[#9B9490]">
            <li>Aplikacja jest darmowa i nie zawiera reklam</li>
            <li>Zabrania się używania aplikacji do nękania lub spamowania</li>
            <li>Zabrania się tworzenia fałszywych kont lub podszywania się pod inne osoby</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">5. Odpowiedzialność</h2>
          <p className="text-[#9B9490]">
            cmok nie gwarantuje ciągłości działania usługi. Nie ponosimy odpowiedzialności
            za szkody wynikające z opóźnień w dostarczeniu powiadomień, awarii serwerów
            lub problemów z łącznością. Aplikacja jest udostępniana „tak jak jest" (as-is).
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg mb-2">6. Kontakt</h2>
          <p className="text-[#9B9490]">kontakt@cmok.app</p>
        </section>
      </div>
    </main>
  );
}
