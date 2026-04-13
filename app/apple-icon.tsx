import { ImageResponse } from 'next/og';

export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFF8F2',
          borderRadius: 40,
        }}
      >
        <svg width="120" height="48" viewBox="0 0 120 48">
          <circle cx="24" cy="24" r="18" fill="#FF6B6B" />
          <line x1="42" y1="24" x2="78" y2="24" stroke="#E0DAD3" strokeWidth="5" strokeLinecap="round" />
          <circle cx="96" cy="24" r="18" fill="#2EC4B6" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
