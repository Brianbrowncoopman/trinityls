import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  MessageCircle, 
  Share2 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 pt-6 pb-4 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Grilla distribuida exactamente en 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-4">
          
          {/* Columna 1: Identidad del Colegio */}
          <div className="space-y-2">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logotrinity.png" 
                alt="Logo Colegio Trinity" 
                width={120} 
                height={36} 
                className="h-8 w-auto object-contain bg-white/10 p-1 rounded" 
                priority
              />
            </Link>
            <p className="text-[10px] font-bold tracking-wider text-white">
              RESPETO · EMPATÍA · RESILIENCIA 
            </p>
            <p className="text-xs text-gray-400 leading-snug">
              Formando líderes con valores y excelencia académica.
            </p>
            
            {/* Redes Sociales compactas */}
            <div className="flex space-x-2 pt-1">
              <a href="#" className="p-1.5 bg-blue-900/60 hover:bg-red-600 rounded-full text-white transition-colors" aria-label="Sitio Web">
                <Globe className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-1.5 bg-blue-900/60 hover:bg-red-600 rounded-full text-white transition-colors" aria-label="Comunidad">
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="p-1.5 bg-blue-900/60 hover:bg-red-600 rounded-full text-white transition-colors" aria-label="Compartir">
                <Share2 className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Columna 2: Información de Contacto */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-2 border-b border-blue-900 pb-1">
              Contacto
            </h3>
            <ul className="space-y-1.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="leading-tight">Av. Guillermo Ulriksen 5100, La Serena</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href="tel:+56223456789" className="hover:text-white transition-colors">+56 2 2345 6789</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href="mailto:secretaria@colegiotrinity.cl" className="hover:text-white transition-colors">secretaria@colegiotrinity.cl</a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Horarios y Atención */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-wider mb-2 border-b border-blue-900 pb-1">
              Horario
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-medium">Lunes a Viernes</p>
                  <p className="text-[11px] text-gray-400">08:00 - 17:30 hrs</p>
                </div>
              </div>
              <div>
                <Link
                  href="/contacto"
                  className="inline-block text-center w-full bg-red-600/50 hover:bg-red-700 text-white text-[11px] font-semibold py-1.5 px-3 rounded transition-colors"
                >
                  Agendar Visita
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Separador inferior reducido */}
        <div className="border-t border-blue-900 pt-3 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-2">
          <p>© 2026 Colegio Trinity. Todos los derechos reservados.</p>
          <div className="flex space-x-3">
            <a href="#" className="hover:text-gray-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Desarrollo @BRBC</a>
          </div>
        </div>

      </div>
    </footer>
  );
}