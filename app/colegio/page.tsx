import Link from 'next/link';
import { FileText, Download, BookOpen, ShieldCheck, HeartHandshake, Music } from 'lucide-react';

export default function ColegioPage() {
  const documents = [
    {
      title: 'Proyecto Educativo Institucional (PEI)',
      description: 'Documento fundamental que define la visión, misión, sellos educativos y principios valóricos que orientan la formación integral de nuestros estudiantes en el Colegio Trinity.',
      icon: BookOpen,
      fileUrl: '/docs/PEI-2025-2028.pdf', // Reemplaza con la ruta real de tu archivo en public/
      fileSize: '2.4 MB',
    },
    {
      title: 'Reglamento Interno de Convivencia Escolar',
      description: 'Normas y pautas de convivencia que promueven un ambiente de respeto mutuo, seguridad y sana convivencia para toda nuestra comunidad escolar.',
      icon: ShieldCheck,
      fileUrl: '/docs/Rice.pdf',
      fileSize: '1.8 MB',
    },
    {
      title: 'Plan Convivencia Educativa 2025-2026',
      description: 'Estrategias y actividades planificadas para fortalecer los vínculos positivos, la prevención y el desarrollo socioemocional durante el periodo actual.',
      icon: HeartHandshake,
      fileUrl: '/docs/Plan-Convivencia-Educativa-2025-2026.pdf',
      fileSize: '1.2 MB',
    },
    {
      title: 'Reglamento Interno de Orden, Higiene y Seguridad',
      description: 'Lineamientos normativos orientados a resguardar la seguridad, la prevención de riesgos y las condiciones óptimas de higiene en las dependencias del colegio.',
      icon: FileText,
      fileUrl: '/docs/Riohs.pdf',
      fileSize: '1.5 MB',
    },
    {
      title: 'Himno del Colegio',
      description: 'Letra oficial y partitura de nuestro himno institucional, símbolo de unión, orgullo y pertenencia a la comunidad del Colegio Trinity.',
      icon: Music,
      fileUrl: '/docs/Himno-Colegio-trinity-2022.pdf',
      fileSize: '850 KB',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Cabecera de la Sección */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-red-600/10 text-red-600 border border-red-200">
          Documentos Institucionales
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-950 tracking-tight">
          Nuestro Colegio
        </h1>
        <p className="text-gray-700 text-base sm:text-lg">
          Conoce en profundidad los pilares normativos, pedagógicos y valores que estructuran y guían el proyecto educativo del <strong>Colegio Trinity</strong>.
        </p>
      </div>

      {/* Cuadrícula de Documentos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {documents.map((doc, index) => {
          const IconComponent = doc.icon;
          return (
            <div 
              key={index} 
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-red-50 text-red-600 rounded-xl">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 leading-snug">
                    {doc.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500">
                  Formato PDF ({doc.fileSize})
                </span>
                <a
                  href={doc.fileUrl}
                  download
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors shadow"
                >
                  <Download className="w-4 h-4" /> Descargar
                </a>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}