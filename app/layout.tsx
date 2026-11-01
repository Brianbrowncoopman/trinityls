import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Colegio Trinity',
  description: 'Comunidad educativa orientada a la excelencia y valores.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col justify-between relative`}>
        {/* Imagen de fondo global con overlay translúcido para no perder legibilidad */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-20"
          style={{ backgroundImage: "url('/images/frontis.jpg')" }} // <-- Revisa el nombre exacto de tu archivo en public/images/
        />
        <div className="fixed inset-0 bg-white/20 backdrop-blur-[1px] -z-10" />

        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}