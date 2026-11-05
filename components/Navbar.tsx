'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nuestro Colegio', href: '/colegio' },
    { name: 'Oferta Académica', href: '/oferta-academica' },
    { name: 'Noticias', href: '/noticias' },
    { name: 'Contacto', href: '/contacto' },
    { name : 'Pagos', href: '/pagos'},
    { name: 'Corporacion', href: '/corporacion'},
    {name: 'Admin', href:'/admin/noticias'}
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo del Colegio */}
          <Link href="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Image 
              src="/images/logotrinity.png" 
              alt="Logo Colegio Trinity" 
              width={150} 
              height={45} 
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Navegación Desktop (Oculta en móviles) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admisiones"
              className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors shadow-sm"
            >
              Admisiones
            </Link>
          </div>

          {/* Botón Menú Hamburguesa (Solo Móvil) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-700 hover:text-red-600 hover:bg-gray-100/50 focus:outline-none transition-colors"
              aria-label="Abrir menú de navegación"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú Desplegable Móvil (Semi-transparente para ver el fondo con excelente lectura) */}
      {isOpen && (
        <div className="md:hidden bg-blue-900 text-gray-200 border-b border-blue-900 px-4 pt-2 pb-6 space-y-3 shadow-xl backdrop-blur-sm">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-gray-100 hover:bg-white/10 hover:text-red-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Botón Destacado en Menú Móvil */}
          <div className="pt-2">
            <Link
              href="/admisiones"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-red-600/50 text-white text-base font-semibold py-3 rounded-lg shadow hover:bg-red-700 transition-colors"
            >
              Postula Aquí / Admisiones
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}