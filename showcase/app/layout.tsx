import './globals.css';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Lumen X | Luxury Instrument',
  description: 'An immersive 3D showcase crafted for cinematic commerce experiences.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-night text-white">
      <body className="min-h-screen bg-night font-body antialiased">{children}</body>
    </html>
  );
}
