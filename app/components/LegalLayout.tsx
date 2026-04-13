import Link from "next/link";

interface LegalLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export function LegalLayout({ children, title, subtitle }: LegalLayoutProps) {
  return (
    <main style={{ minHeight: '100vh', background: '#FFF8F2' }}>
      {/* Header */}
      <header style={{ maxWidth: 720, margin: '0 auto', padding: '32px 24px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 48 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: '#E85D3A', fontFamily: 'var(--font-nunito), Nunito, sans-serif' }}>cmok</span>
            <svg width="32" height="12" viewBox="0 0 60 24" fill="none"><circle cx="10" cy="12" r="7" fill="#FF6B6B"/><line x1="17" y1="12" x2="43" y2="12" stroke="#E0DAD3" strokeWidth="2" strokeLinecap="round"/><circle cx="50" cy="12" r="7" fill="#2EC4B6"/></svg>
          </Link>
          <Link href="/" style={{ fontSize: 13, color: '#9B9490', textDecoration: 'none' }}>← Strona główna</Link>
        </div>
      </header>

      {/* Content card */}
      <article style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 64px' }}>
        <div style={{
          background: '#FFFFFF',
          borderRadius: 24,
          padding: '48px 40px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.04)',
          border: '1px solid rgba(224,218,211,0.3)',
        }}>
          <h1 style={{
            fontSize: 28,
            fontWeight: 800,
            color: '#2D2926',
            marginBottom: 8,
            fontFamily: 'var(--font-nunito), Nunito, sans-serif',
            letterSpacing: '-0.01em',
          }}>{title}</h1>

          {subtitle && (
            <p style={{ fontSize: 13, color: '#9B9490', marginBottom: 40 }}>{subtitle}</p>
          )}

          <div style={{ borderTop: '2px solid #E0DAD3', opacity: 0.3, marginBottom: 32 }} />

          {children}
        </div>
      </article>

      {/* Footer */}
      <footer style={{ padding: '24px', textAlign: 'center', fontSize: 12, color: '#AAA299' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 8 }}>
          <Link href="/regulamin" style={{ color: '#AAA299', textDecoration: 'none' }}>Regulamin</Link>
          <Link href="/polityka-prywatnosci" style={{ color: '#AAA299', textDecoration: 'none' }}>Polityka prywatności</Link>
          <Link href="/usun-konto" style={{ color: '#AAA299', textDecoration: 'none' }}>Usuń konto</Link>
          <a href="mailto:cmok.app@gmail.com" style={{ color: '#AAA299', textDecoration: 'none' }}>Kontakt</a>
        </div>
        <p><span style={{ fontWeight: 700, color: '#E85D3A' }}>cmok</span> © 2026</p>
      </footer>
    </main>
  );
}

/* Shared styles for legal content */
export const legalStyles = {
  section: { marginBottom: 28 } as React.CSSProperties,
  heading: {
    fontSize: 16,
    fontWeight: 700,
    color: '#2D2926',
    marginBottom: 10,
    fontFamily: 'var(--font-nunito), Nunito, sans-serif',
  } as React.CSSProperties,
  paragraph: {
    fontSize: 14,
    color: '#6B6560',
    lineHeight: 1.75,
    marginBottom: 8,
  } as React.CSSProperties,
  list: {
    fontSize: 14,
    color: '#6B6560',
    lineHeight: 1.75,
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8,
  } as React.CSSProperties,
  listItem: {
    marginBottom: 4,
  } as React.CSSProperties,
};
