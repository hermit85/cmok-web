import { LegalLayout, legalStyles as ls } from "../components/LegalLayout";

export const metadata = { title: "Polityka prywatności — cmok" };

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Polityka prywatności cmok" subtitle="Data wejścia w życie: 13.04.2026 · Wersja 1.0">
      <div style={ls.section}>
        <h2 style={ls.heading}>1. Administrator danych</h2>
        <p style={ls.paragraph}>
          Administratorem danych osobowych przetwarzanych w związku z korzystaniem z aplikacji mobilnej cmok jest Cybird Consulting Dariusz Ptaszek, ul. Chmielna 2/31, 00-020 Warszawa, NIP: 7343126589, e-mail: cmok.app@gmail.com.
        </p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>2. Czym jest cmok</h2>
        <p style={ls.paragraph}>cmok to aplikacja mobilna służąca do codziennego kontaktu z bliskimi, wysyłania prostych sygnałów, reakcji oraz alertów SOS do wskazanych przez użytkownika osób.</p>
        <p style={ls.paragraph}>cmok nie jest usługą ratowniczą, medyczną ani telemedyczną i nie zastępuje numeru 112 ani innych służb ratunkowych.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>3. Jakie dane przetwarzamy</h2>
        <p style={ls.paragraph}>W zależności od sposobu korzystania z aplikacji możemy przetwarzać następujące dane:</p>
        <ul style={ls.list}>
          <li style={ls.listItem}>numer telefonu,</li>
          <li style={ls.listItem}>imię,</li>
          <li style={ls.listItem}>rola użytkownika w aplikacji,</li>
          <li style={ls.listItem}>informacje o codziennych check-inach, w tym samopoczucie wybrane z gotowych opcji,</li>
          <li style={ls.listItem}>reakcje emoji,</li>
          <li style={ls.listItem}>informacje o porannych gestach wybieranych z gotowych presetów,</li>
          <li style={ls.listItem}>informacje o przypomnieniach, streakach i milestone'ach,</li>
          <li style={ls.listItem}>lokalizacja GPS przekazana przy użyciu funkcji SOS,</li>
          <li style={ls.listItem}>token push urządzenia,</li>
          <li style={ls.listItem}>kod zaproszenia i dane relacyjne potrzebne do połączenia użytkowników w aplikacji,</li>
          <li style={ls.listItem}>podstawowe dane techniczne niezbędne do prawidłowego działania i bezpieczeństwa usługi, w tym wersja aplikacji i data ostatniej aktywności urządzenia.</li>
        </ul>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>4. Źródło danych</h2>
        <p style={ls.paragraph}>Dane otrzymujemy:</p>
        <ul style={ls.list}>
          <li style={ls.listItem}>bezpośrednio od użytkownika podczas rejestracji, logowania, konfiguracji profilu i korzystania z aplikacji,</li>
          <li style={ls.listItem}>od innego użytkownika, wyłącznie w zakresie niezbędnym do wysłania zaproszenia lub połączenia kont w aplikacji.</li>
        </ul>
        <p style={ls.paragraph}>Dodanie osoby do kręgu bliskich wymaga, aby osoba ta posiadała konto w cmok.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>5. Cele i podstawy przetwarzania</h2>
        <p style={ls.paragraph}>Dane przetwarzamy w następujących celach:</p>
        <ul style={ls.list}>
          <li style={ls.listItem}>utworzenie i obsługa konta użytkownika,</li>
          <li style={ls.listItem}>weryfikacja numeru telefonu przy użyciu kodu SMS OTP,</li>
          <li style={ls.listItem}>realizacja podstawowych funkcji aplikacji, w tym codziennego znaku, reakcji, porannych gestów, delikatnych przypomnień, streaków, milestone'ów oraz kręgu bliskich,</li>
          <li style={ls.listItem}>wysyłka alertu SOS do wskazanych osób,</li>
          <li style={ls.listItem}>dostarczanie powiadomień push,</li>
          <li style={ls.listItem}>zapewnienie bezpieczeństwa działania usługi,</li>
          <li style={ls.listItem}>dochodzenie lub obrona przed roszczeniami,</li>
          <li style={ls.listItem}>realizacja obowiązków wynikających z przepisów prawa.</li>
        </ul>
        <p style={{...ls.paragraph, marginTop: 12}}>Podstawą przetwarzania jest w szczególności:</p>
        <ul style={ls.list}>
          <li style={ls.listItem}>wykonanie umowy o świadczenie usług drogą elektroniczną,</li>
          <li style={ls.listItem}>działania podejmowane na żądanie użytkownika przed zawarciem umowy,</li>
          <li style={ls.listItem}>prawnie uzasadniony interes administratora,</li>
          <li style={ls.listItem}>zgoda użytkownika lub zgoda udzielona w ustawieniach urządzenia, w zakresie, w jakim jest wymagana.</li>
        </ul>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>6. Lokalizacja GPS</h2>
        <p style={ls.paragraph}>cmok nie śledzi lokalizacji użytkownika w tle.</p>
        <p style={ls.paragraph}>Dostęp do lokalizacji jest wykorzystywany wyłącznie wtedy, gdy użytkownik sam uruchomi funkcję SOS i zezwoli na udostępnienie lokalizacji na poziomie urządzenia.</p>
        <p style={ls.paragraph}>Pobranie lokalizacji zależy od możliwości technicznych urządzenia, systemu operacyjnego i połączenia. Jeżeli lokalizacja nie zostanie pobrana w odpowiednim czasie, alert SOS może zostać wysłany bez lokalizacji.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>7. Powiadomienia push</h2>
        <p style={ls.paragraph}>Aplikacja może wysyłać powiadomienia push związane z działaniem usługi, w szczególności:</p>
        <ul style={ls.list}>
          <li style={ls.listItem}>przypomnienia o codziennym znaku,</li>
          <li style={ls.listItem}>reakcje od bliskich,</li>
          <li style={ls.listItem}>delikatne przypomnienia,</li>
          <li style={ls.listItem}>alerty SOS,</li>
          <li style={ls.listItem}>podsumowania tygodnia,</li>
          <li style={ls.listItem}>komunikaty funkcjonalne dotyczące działania aplikacji.</li>
        </ul>
        <p style={ls.paragraph}>Użytkownik może wyłączyć powiadomienia w ustawieniach urządzenia.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>8. Odbiorcy danych i podmioty przetwarzające</h2>
        <p style={ls.paragraph}>Dane mogą być powierzane podmiotom wspierającym nas technicznie, w szczególności:</p>
        <ul style={ls.list}>
          <li style={ls.listItem}>Supabase, hosting bazy danych, autoryzacja i funkcje backendowe,</li>
          <li style={ls.listItem}>PostHog (EU), analityka produktowa służąca poprawie jakości usługi,</li>
          <li style={ls.listItem}>Expo Push Service, obsługa dostarczania powiadomień push,</li>
          <li style={ls.listItem}>Twilio Verify (jako dostawca SMS wykorzystywany przez Supabase Auth), wysyłka kodów SMS OTP,</li>
          <li style={ls.listItem}>Apple APNs, dostarczanie powiadomień na urządzenia Apple,</li>
          <li style={ls.listItem}>Google FCM, dostarczanie powiadomień na urządzenia Android.</li>
        </ul>
        <p style={ls.paragraph}>Dane mogą być również udostępniane innym użytkownikom wskazanym przez Ciebie w ramach funkcji aplikacji, w zakresie niezbędnym do działania relacji, reakcji, zaproszeń i funkcji SOS.</p>
        <p style={ls.paragraph}>Korzystając z funkcji udostępniania (np. zaproszenia, udostępnianie osiągnięć), użytkownik sam decyduje o przesłaniu wybranych informacji za pośrednictwem systemowego arkusza udostępniania na swoim urządzeniu.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>9. Miejsce przetwarzania danych</h2>
        <p style={ls.paragraph}>Dane użytkowników są przechowywane z wykorzystaniem infrastruktury Supabase w regionie UE (Irlandia). Niektóre operacje techniczne związane z dostarczaniem wiadomości lub powiadomień mogą wiązać się z udziałem zewnętrznych dostawców technologicznych zgodnie z ich architekturą usług.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>10. Jak długo przechowujemy dane</h2>
        <ul style={ls.list}>
          <li style={ls.listItem}>dane konta, profilu, relacji, historii check-inów, reakcji i streaków: do usunięcia konta,</li>
          <li style={ls.listItem}>lokalizacja z alertu SOS: do usunięcia konta,</li>
          <li style={ls.listItem}>kody zaproszeń: do czasu wygaśnięcia lub wykorzystania, nie dłużej niż 24 godziny,</li>
          <li style={ls.listItem}>tokeny push: do usunięcia konta albo do ich technicznej dezaktualizacji,</li>
          <li style={ls.listItem}>kopie zapasowe po usunięciu danych: maksymalnie do 7 dni, zgodnie z technicznym cyklem backupów.</li>
        </ul>
        <p style={ls.paragraph}>Usunięcie konta uruchamia niezwłoczny proces usunięcia danych poprzez funkcję backendową odpowiedzialną za kasowanie danych użytkownika.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>11. Usunięcie konta</h2>
        <p style={ls.paragraph}>Użytkownik może usunąć konto bezpośrednio w aplikacji w sekcji ustawień poprzez funkcję &bdquo;Usuń konto i dane&rdquo;.</p>
        <p style={ls.paragraph}>Usunięcie konta powoduje rozpoczęcie procesu usunięcia danych przypisanych do użytkownika, z zastrzeżeniem krótkotrwałego przechowywania danych w kopiach zapasowych oraz danych, które muszą zostać zachowane z przyczyn prawnych lub technicznych.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>12. Prawa użytkownika</h2>
        <p style={ls.paragraph}>Użytkownik ma prawo do:</p>
        <ul style={ls.list}>
          <li style={ls.listItem}>dostępu do swoich danych,</li>
          <li style={ls.listItem}>sprostowania danych,</li>
          <li style={ls.listItem}>usunięcia danych,</li>
          <li style={ls.listItem}>ograniczenia przetwarzania,</li>
          <li style={ls.listItem}>przenoszenia danych,</li>
          <li style={ls.listItem}>wniesienia sprzeciwu wobec przetwarzania danych, gdy podstawą jest uzasadniony interes administratora,</li>
          <li style={ls.listItem}>cofnięcia zgody, w zakresie, w jakim przetwarzanie odbywa się na podstawie zgody.</li>
        </ul>
        <p style={ls.paragraph}>W sprawach dotyczących danych osobowych można skontaktować się pod adresem: cmok.app@gmail.com.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>13. Dane osób zapraszanych</h2>
        <p style={ls.paragraph}>Jeżeli użytkownik zaprasza inną osobę do korzystania z cmok, przetwarzamy dane niezbędne do obsługi zaproszenia i połączenia relacji. Użytkownik powinien podawać wyłącznie dane osób, z którymi pozostaje w rzeczywistej relacji i ma podstawę do przekazania ich danych kontaktowych na potrzeby działania aplikacji.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>14. Bezpieczeństwo</h2>
        <p style={ls.paragraph}>Stosujemy odpowiednie środki techniczne i organizacyjne służące ochronie danych, adekwatne do charakteru usługi i ryzyk związanych z przetwarzaniem danych.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>15. Reklamacje i kontakt</h2>
        <p style={ls.paragraph}>Wszelkie pytania dotyczące prywatności i działania aplikacji można kierować na adres: cmok.app@gmail.com.</p>
      </div>

      <div style={ls.section}>
        <h2 style={ls.heading}>16. Skarga do organu nadzorczego</h2>
        <p style={ls.paragraph}>Użytkownik ma prawo wnieść skargę do właściwego organu nadzorczego do spraw ochrony danych osobowych.</p>
      </div>

      <div style={{...ls.section, marginBottom: 0}}>
        <h2 style={ls.heading}>17. Zmiany polityki prywatności</h2>
        <p style={ls.paragraph}>Polityka prywatności może być aktualizowana w przypadku zmian prawnych, technicznych lub produktowych. Aktualna wersja będzie dostępna w aplikacji oraz na stronie internetowej powiązanej z usługą.</p>
      </div>
    </LegalLayout>
  );
}
