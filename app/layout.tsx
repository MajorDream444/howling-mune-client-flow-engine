import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Howling MUNE — Giving you back to you',
  description: 'A client flow engine for embodied clarity, visual transformation, and self-relationship work.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
