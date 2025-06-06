import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/NavBar';
import './globals.css';
import './style.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Professor (Dr.) Manik Saha - Chief Minister of Tripura',
  description: 'Chief Minister of Tripura',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        
        {children}
      </body>
    </html>
  );
}
