import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFF8F2',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Brand motif */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 32 }}>
          <span style={{ fontSize: 64, fontWeight: 800, color: '#E85D3A' }}>cmok</span>
          <svg width="80" height="32" viewBox="0 0 60 24">
            <circle cx="10" cy="12" r="8" fill="#FF6B6B" />
            <line x1="18" y1="12" x2="42" y2="12" stroke="#E0DAD3" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="50" cy="12" r="8" fill="#2EC4B6" />
          </svg>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: '#2D2926',
            textAlign: 'center',
            lineHeight: 1.2,
            maxWidth: 800,
            marginBottom: 20,
          }}
        >
          Codzienny znak, że u bliskiej osoby wszystko OK
        </div>

        {/* Subhead */}
        <div
          style={{
            fontSize: 24,
            color: '#6B6560',
            textAlign: 'center',
          }}
        >
          Jeden gest zamiast dzwonienia. Darmowa, bez reklam.
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
