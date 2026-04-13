export const metadata = { title: "Usuń konto — cmok" };

export default function DeleteAccount() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <a href="/" className="text-[#E85D3A] font-bold text-lg">cmok</a>
      <h1 className="text-3xl font-bold mt-8 mb-6">Usuń konto cmok</h1>

      <div className="space-y-6 text-[15px] text-[#6B6560] leading-relaxed">
        <p>
          Jeżeli chcesz usunąć konto i dane powiązane z aplikacją cmok, możesz zrobić to bezpośrednio w aplikacji:
        </p>

        <div className="bg-[#F0EBE5] rounded-2xl p-6 text-center">
          <p className="text-[#2D2926] font-bold text-lg">Ustawienia → Usuń konto i dane</p>
        </div>

        <p>
          Jeżeli nie masz już dostępu do aplikacji, skontaktuj się z nami pod adresem{' '}
          <a href="mailto:cmok.app@gmail.com" className="text-[#E85D3A] font-medium">cmok.app@gmail.com</a>
          {' '}i podaj numer telefonu przypisany do konta.
        </p>

        <p>
          Po otrzymaniu zgłoszenia rozpoczniemy proces usunięcia konta i danych. Dane są usuwane niezwłocznie, z zastrzeżeniem krótkiego okresu przechowywania kopii zapasowych, nie dłuższego niż 7 dni.
        </p>
      </div>

      <footer className="mt-16 pt-6 border-t border-[#E0DAD3]/30 text-center text-xs text-[#AAA299]">
        <a href="/" className="text-[#E85D3A] font-bold">cmok</a> · <a href="/regulamin" className="hover:underline">Regulamin</a> · <a href="/polityka-prywatnosci" className="hover:underline">Polityka prywatności</a> · <a href="mailto:cmok.app@gmail.com" className="hover:underline">Kontakt</a>
      </footer>
    </main>
  );
}
