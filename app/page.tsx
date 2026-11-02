import Link from 'next/link';
import Image from 'next/image';
import { 
  BookOpen, 
  Users, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Calendar, 
  Sparkles 
} from 'lucide-react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col">
      
      {/* ------------------------------------------------------------- */}
      {/* CAPA DE IMAGEN DE FONDO EXCLUSIVA DE LA HOME                  */}
      {/* ------------------------------------------------------------- */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-30 z-0" 
        style={{ backgroundImage: "url('/images/bg-colegio.jpg')" }} 
      />

      {/* Capa de matiz gris institucional */}
      <div className="absolute inset-0 bg-[#d2d3d5]/20 pointer-events-none z-0" />


      {/* ------------------------------------------------------------- */}
      {/* CONTENIDO DE LA PÁGINA (Z-INDEX SUPERIOR)                     */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 flex flex-col flex-grow">
        
        {/* 1. SECCIÓN HERO (BIENVENIDA) */}
        <section className="relative  text-white overflow-hidden py-16 md:py-24">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Texto Principal */}
              <div className="space-y-6 text-center lg:text-left">
                {/*<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-red-600/20 text-red-400 border border-red-500/30">
                  <Sparkles className="w-3.5 h-3.5" /> Admisiones Abiertas 2026
                </span>*/}
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                  Formando líderes con valores y excelencia
                </h1>
                
                <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
                  En el <strong>Colegio Trinity</strong> impulsamos el desarrollo integral de nuestros estudiantes a través de la innovación educativa, un ambiente seguro y el cultivo de sólidos principios humanos.
                </p>
                
                {/* Botones de Acción */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  {/*<Link
                    href="/admisiones"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all"
                  >
                    Proceso de Admisión <ArrowRight className="w-4 h-4" />
                  </Link>*/}
                  <Link
                    href="/colegio"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg border border-blue-800 transition-all"
                  >
                    Conoce el Colegio
                  </Link>
                </div>
              </div>

              {/* Tarjeta Visual Destacada */}
              <div className="relative flex justify-center">
                <div className="relative w-full max-w-md  p-2 rounded-2xl  border border-grey-800">
                  <div className="bg-white/80 rounded-xl p-6 text-gray-800 space-y-4">
                    <div className="flex items-center justify-between border-b pb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-3 bg-red-50 text-red-600 rounded-lg">
                          <Award className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900">Excelencia Académica</h3>
                          <p className="text-xs text-gray-500">Formación integral garantizada</p>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" /> Metodología enfocada en competencias del siglo XXI
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" /> Deportes, arte y tecnología integrados
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" /> Cuerpo docente altamente calificado
                      </li>
                    </ul>
                    <div className="pt-2">
                      <Link
                        href="/contacto"
                        className="block text-center w-full bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-bold py-2.5 rounded-lg transition-colors"
                      >
                        Agendar Visita Guiada
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. SECCIÓN PILARES INSTITUCIONALES */}
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Nuestros Pilares</h2>
              <p className="text-3xl font-bold text-blue-950">Los valores que nos guían cada día</p>
              <p className="text-sm text-gray-800 font-medium mt-2">
                Formamos personas íntegras capaces de transformar positivamente su entorno social y cultural.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Pilar 1 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                  01
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Respeto</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Valoramos la diversidad, fomentando la sana convivencia, la tolerancia y la valoración por la dignidad de cada miembro de nuestra comunidad educativa.
                </p>
              </div>

              {/* Pilar 2 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                  02
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Empatía</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Cultivamos la capacidad de comprender y conectar con las necesidades y sentimientos de los demás, promoviendo la colaboración y el compañerismo.
                </p>
              </div>

              {/* Pilar 3 */}
              <div className="bg-white p-8 rounded-2xl border border-gray-300 shadow-lg hover:shadow-xl transition-all group">
                <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6 group-hover:scale-110 transition-transform">
                  03
                </div>
                <h3 className="text-xl font-bold text-blue-950 mb-3">Resiliencia</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Preparamos a nuestros estudiantes para superar desafíos con optimismo, perseverancia y flexibilidad, convirtiendo los obstáculos en oportunidades de aprendizaje.
                </p>
              </div>

            </div>

          </div>
        </section>

        {/* 3. SECCIÓN LLAMADO A LA ACCIÓN (CTA) */}
        <section className="py-12  text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">¿Quieres formar parte de nuestra comunidad?</h2>
            <p className="text-sm sm:text-base text-red-100 max-w-xl mx-auto">
              Inicia tu proceso de postulación hoy mismo o agenda una reunión con nuestro equipo directivo.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/admisiones"
                className="bg-white text-red-600 hover:bg-gray-100 font-semibold px-6 py-2.5 rounded-lg text-sm shadow transition-colors"
              >
                Ver Proceso de Admisión
              </Link>
              <Link
                href="/contacto"
                className="bg-red-700 hover:bg-red-800 text-white font-semibold px-6 py-2.5 rounded-lg text-sm border border-red-500 transition-colors"
              >
                Contáctanos
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}