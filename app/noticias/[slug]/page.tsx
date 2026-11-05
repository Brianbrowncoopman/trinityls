import { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function NoticiaDetalleContent({ params }: PageProps) {
  const { slug } = await params;

  // Aquí harías la consulta a Firestore usando el `slug` para traer el documento exacto:
  // const docRef = doc(db, 'noticias', slug); o buscar por campo slug.

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: Artículo Principal (2 de 3 columnas) */}
        <div className="lg:col-span-2 space-y-6 bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
          
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-950">
            PRUEBAS PENDIENTES
          </h1>

          {/* Imagen Principal */}
          <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden bg-gray-100">
            <Image 
              src="/images/logotrinity.png" // Reemplaza con la imagen de Firestore
              alt="Pruebas pendientes"
              fill
              className="object-cover"
            />
          </div>

          {/* Cuerpo del Texto */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <h3 className="font-bold text-lg text-blue-950">INFORMACION:</h3>
            <p><strong>1° básico a 4° básico:</strong> Cada profesor jefe tomará evaluación pendiente previo aviso al apoderado.</p>
            <p><strong>5° básico a 8° básico:</strong> Evaluaciones pendientes serán tomadas en biblio CRA, miércoles 15:30 a 17:00 apoyados por miss Paola Araya.</p>
            <p><strong>1° medio a 4° medio:</strong> Día jueves 16:30 a 18:00.</p>
            <p>Desde 5° básico a 4to medio cada profesor citará a cada estudiante vía mail para rendir cada evaluación pendiente.</p>
          </div>
        </div>

        {/* COLUMNA DERECHA: Barra Lateral (Widgets: Archivos y Calendario como en Imagen 2) */}
        <div className="space-y-6">
          
          {/* Widget: Entradas / Noticias Recientes */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider border-b pb-2">
              agosto de 2026
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/noticias/campeona-trinitaria" className="text-blue-900 hover:text-red-600 font-medium block">
                  › CAMPEONA TRINITARIA <span className="text-xs text-gray-500 block font-normal">6 de mayo de 2026</span>
                </Link>
              </li>
              <li>
                <Link href="/noticias/pruebas-pendientes" className="text-blue-900 hover:text-red-600 font-medium block">
                  › PRUEBAS PENDIENTES <span className="text-xs text-gray-500 block font-normal">16 de abril de 2026</span>
                </Link>
              </li>
              <li>
                <Link href="/noticias/cuenta-publica" className="text-blue-900 hover:text-red-600 font-medium block">
                  › CUENTA PUBLICA <span className="text-xs text-gray-500 block font-normal">15 de abril de 2026</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Widget: Calendario Institucional */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <div className="text-center font-bold text-blue-950 border-b pb-2">
              noviembre 2026
            </div>
            {/* Tabla simple de calendario */}
            <div className="grid grid-cols-7 text-center text-xs gap-1 text-gray-600 font-semibold">
              <span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>
            </div>
            <div className="grid grid-cols-7 text-center text-xs gap-y-2 text-gray-700">
              <span className="text-gray-300">26</span><span className="text-gray-300">27</span><span className="text-gray-300">28</span><span className="text-gray-300">29</span><span className="text-gray-300">30</span><span className="text-gray-300">31</span><span>1</span>
              <span>2</span><span>3</span><span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mx-auto">4</span><span>5</span><span>6</span><span>7</span><span>8</span>
              <span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span>
              <span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span>
              <span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span>
              <span>30</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function NoticiaDetallePage(props: PageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center">Cargando detalle de la noticia...</div>}>
      <NoticiaDetalleContent {...props} />
    </Suspense>
  );
}