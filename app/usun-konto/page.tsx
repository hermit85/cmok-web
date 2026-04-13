import { LegalLayout, legalStyles as ls } from "../components/LegalLayout";

export const metadata = { title: "Usuń konto — cmok" };

export default function DeleteAccount() {
  return (
    <LegalLayout title="Usuń konto cmok">
      <p style={ls.paragraph}>
        Jeżeli chcesz usunąć konto i dane powiązane z aplikacją cmok, możesz zrobić to bezpośrednio w aplikacji:
      </p>

      <div style={{
        background: '#F0EBE5',
        borderRadius: 16,
        padding: '24px 32px',
        textAlign: 'center' as const,
        margin: '24px 0',
      }}>
        <p style={{ fontSize: 18, fontWeight: 700, color: '#2D2926', fontFamily: 'var(--font-nunito), Nunito, sans-serif' }}>
          Ustawienia → Usuń konto i dane
        </p>
      </div>

      <p style={ls.paragraph}>
        Jeżeli nie masz już dostępu do aplikacji, skontaktuj się z nami pod adresem{' '}
        <a href="mailto:cmok.app@gmail.com" style={{ color: '#E85D3A', fontWeight: 500 }}>cmok.app@gmail.com</a>
        {' '}i podaj numer telefonu przypisany do konta.
      </p>

      <p style={ls.paragraph}>
        Po otrzymaniu zgłoszenia rozpoczniemy proces usunięcia konta i danych. Dane są usuwane niezwłocznie, z zastrzeżeniem krótkiego okresu przechowywania kopii zapasowych, nie dłuższego niż 7 dni.
      </p>
    </LegalLayout>
  );
}
