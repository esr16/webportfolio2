import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mon Portfolio',
  description: 'Portfolio de projets techniques',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-slate-900 text-slate-200 min-h-screen" style={{ fontFamily: 'Verdana, sans-serif' }}>
        
        <nav className="menu">
          <Link href="/accueil">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        
        {/* Plus de div ici ! */}
        {children}

      </body>
    </html>
  );
}