import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });
const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb app'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
