import { LegalLayout, legalStyles as ls } from "../components/LegalLayout";

export const metadata = { title: "Regulamin — cmok" };

export default function Terms() {
  return (
    <LegalLayout title="Regulamin aplikacji cmok" subtitle="Data wejścia w życie: 13.04.2026 · Wersja 1.0">
      <div style={ls.section}>
        <h2 style={ls.heading}>1. Postanowienia ogólne</h2>
        <ol style={ls.list}>
          <li style={ls.listItem}>Regulamin określa zasady korzystania z aplikacji mobilnej cmok.</li>
          <li style={ls.listItem}>Usługodawcą aplikacji jest Cybird Consulting Dariusz Ptaszek, ul. Chmielna 2/31, 00-020 Warszawa, NIP: 7343126589, e-mail: cmok.app@gmail.com.</li>
          <li style={ls.listItem}>Aplikacja jest przeznaczona wyłącznie dla osób, które ukończyły 18 lat.</li>
        </ol>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>2. Charakter usługi</h2>
        <ol style={ls.list}>
          <li style={ls.listItem}>cmok jest aplikacją służącą do codziennego kontaktu z bliskimi oraz wysyłania sygnałów, reakcji i alertów SOS do wskazanych osób.</li>
          <li style={ls.listItem}>cmok nie jest usługą ratowniczą, alarmową, medyczną ani telemedyczną.</li>
          <li style={ls.listItem}>cmok nie zastępuje numeru 112 ani innych służb ratunkowych.</li>
          <li style={ls.listItem}>W razie realnego zagrożenia życia lub zdrowia należy niezwłocznie skontaktować się z właściwymi służbami ratunkowymi.</li>
        </ol>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>3. Konto użytkownika</h2>
        <ol style={ls.list}>
          <li style={ls.listItem}>Korzystanie z aplikacji wymaga utworzenia konta i potwierdzenia numeru telefonu przy użyciu kodu SMS OTP.</li>
          <li style={ls.listItem}>Użytkownik zobowiązuje się do podawania prawdziwych i aktualnych danych.</li>
          <li style={ls.listItem}>Użytkownik odpowiada za bezpieczeństwo urządzenia, z którego korzysta.</li>
        </ol>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>4. Funkcje aplikacji</h2>
        <p style={ls.paragraph}>W ramach aplikacji użytkownik może korzystać w szczególności z następujących funkcji:</p>
        <ul style={ls.list}>
          <li style={ls.listItem}>codzienny znak,</li>
          <li style={ls.listItem}>reakcje,</li>
          <li style={ls.listItem}>poranne gesty,</li>
          <li style={ls.listItem}>delikatne przypomnienie,</li>
          <li style={ls.listItem}>sygnał awaryjny SOS,</li>
          <li style={ls.listItem}>krąg bliskich,</li>
          <li style={ls.listItem}>zaproszenia do aplikacji,</li>
          <li style={ls.listItem}>streaki i milestone'y,</li>
          <li style={ls.listItem}>edycja imienia,</li>
          <li style={ls.listItem}>wylogowanie,</li>
          <li style={ls.listItem}>usunięcie konta.</li>
        </ul>
        <p style={ls.paragraph}>Usługodawca może rozwijać, zmieniać albo wycofywać poszczególne funkcje, o ile nie narusza to praw użytkowników wynikających z przepisów prawa.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>5. Uprawnienia urządzenia</h2>
        <ol style={ls.list}>
          <li style={ls.listItem}>Aplikacja może poprosić użytkownika o zgodę na otrzymywanie powiadomień push.</li>
          <li style={ls.listItem}>Aplikacja może poprosić użytkownika o zgodę na dostęp do lokalizacji wyłącznie przy korzystaniu z funkcji SOS.</li>
          <li style={ls.listItem}>Brak udzielenia zgody na określone uprawnienia może ograniczyć działanie części funkcji.</li>
        </ol>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>6. Krąg bliskich i zaproszenia</h2>
        <ol style={ls.list}>
          <li style={ls.listItem}>Użytkownik może tworzyć relacje z innymi użytkownikami aplikacji i dodawać ich do kręgu bliskich.</li>
          <li style={ls.listItem}>Dodanie osoby do kręgu bliskich wymaga, aby ta osoba posiadała konto w aplikacji cmok.</li>
          <li style={ls.listItem}>Zabronione jest wykorzystywanie funkcji zaproszeń do spamu, nękania lub działań niezgodnych z prawem.</li>
        </ol>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>7. Funkcja SOS</h2>
        <ol style={ls.list}>
          <li style={ls.listItem}>Funkcja SOS umożliwia wysłanie sygnału do wskazanych osób.</li>
          <li style={ls.listItem}>Funkcja SOS może, na żądanie użytkownika, dołączyć aktualną lokalizację urządzenia.</li>
          <li style={ls.listItem}>Skuteczność dostarczenia alertu zależy m.in. od działania urządzenia, systemu operacyjnego, usług push, połączenia internetowego i ustawień odbiorcy.</li>
          <li style={ls.listItem}>Usługodawca nie gwarantuje natychmiastowego odczytania alertu przez odbiorcę ani skutecznej interwencji.</li>
          <li style={ls.listItem}>Użytkownik przyjmuje do wiadomości, że w sytuacji zagrożenia powinien skorzystać z numeru 112 lub innych właściwych służb.</li>
        </ol>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>8. Zasady korzystania</h2>
        <p style={ls.paragraph}>Użytkownik zobowiązuje się korzystać z aplikacji zgodnie z prawem, dobrymi obyczajami oraz niniejszym regulaminem. Zabronione jest w szczególności:</p>
        <ul style={ls.list}>
          <li style={ls.listItem}>podszywanie się pod inne osoby,</li>
          <li style={ls.listItem}>wykorzystywanie aplikacji do nękania, spamu albo wywoływania fałszywych alarmów,</li>
          <li style={ls.listItem}>podejmowanie prób naruszania bezpieczeństwa aplikacji,</li>
          <li style={ls.listItem}>używanie aplikacji w sposób sprzeczny z jej przeznaczeniem.</li>
        </ul>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>9. Odpowiedzialność</h2>
        <ol style={ls.list}>
          <li style={ls.listItem}>Usługodawca dokłada należytej staranności, aby aplikacja działała poprawnie.</li>
          <li style={ls.listItem}>Usługodawca nie odpowiada za: brak dostępu do internetu po stronie użytkownika, niedostępność usług zewnętrznych, nieprawidłowe działanie urządzenia użytkownika, brak reakcji odbiorców alertów, skutki podania nieprawidłowych danych, zdarzenia wynikające z siły wyższej.</li>
          <li style={ls.listItem}>Nic w regulaminie nie wyłącza odpowiedzialności, której nie można wyłączyć na podstawie prawa.</li>
        </ol>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>10. Usunięcie konta</h2>
        <ol style={ls.list}>
          <li style={ls.listItem}>Użytkownik może w każdej chwili usunąć konto z poziomu aplikacji.</li>
          <li style={ls.listItem}>Usunięcie konta powoduje rozpoczęcie procesu usunięcia danych użytkownika zgodnie z polityką prywatności.</li>
          <li style={ls.listItem}>Usługodawca może ograniczyć lub zablokować konto użytkownika w przypadku naruszenia prawa lub niniejszego regulaminu.</li>
        </ol>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>11. Reklamacje i kontakt</h2>
        <p style={ls.paragraph}>Wszelkie reklamacje, zgłoszenia i pytania związane z działaniem aplikacji można przesyłać na adres: cmok.app@gmail.com.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>12. Zmiany regulaminu</h2>
        <ol style={ls.list}>
          <li style={ls.listItem}>Regulamin może być aktualizowany w przypadku zmian prawnych, technicznych lub organizacyjnych.</li>
          <li style={ls.listItem}>O istotnych zmianach użytkownik zostanie poinformowany w aplikacji lub na stronie internetowej powiązanej z usługą.</li>
        </ol>
      </div>

      <div style={{...ls.section, marginBottom: 0}}>
        <h2 style={ls.heading}>13. Prawo właściwe</h2>
        <p style={ls.paragraph}>Do regulaminu stosuje się prawo polskie, z uwzględnieniem bezwzględnie obowiązujących przepisów prawa chroniących konsumentów.</p>
      </div>
    </LegalLayout>
  );
}
