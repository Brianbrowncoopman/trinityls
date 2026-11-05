'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { User, MessageSquare, ArrowRight } from 'lucide-react';
// Importa tu configuración de Firebase
// import { db } from '@/lib/firebase';
// import { collection, getDocs, orderBy, query } from 'firebase/firestore';

interface Noticia {
  id: string;
  slug: string;
  title: string;
  imageUrl: string;
  monthBadge: string;
  dayBadge: string;
  author: string;
  summary: string;
}

export default function NoticiasListadoPage() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNoticias() {
      try {
        // Simulación de datos (Aquí conectarías con Firebase Firestore: getDocs, query, etc.)
        // const q = query(collection(db, 'noticias'), orderBy('createdAt', 'desc'));
        // const querySnapshot = await getDocs(q);
        // const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Noticia[];
        
        // Datos de prueba basados en tu imagen:
        const data: Noticia[] = [
          {
            id: '1',
            slug: 'pruebas-pendientes',
            title: 'PRUEBAS PENDIENTES',
            imageUrl: '/images/logotrinity.png', // Reemplaza con la imagen real de Firebase Storage
            monthBadge: 'ABR',
            dayBadge: '16',
            author: 'colegiotrinity',
            summary: 'INFORMACION: 1° básico a 4° básico Cada profesor jefe tomará evaluación pendiente previo aviso al apoderado...',
          }
        ];
        setNoticias(data);
      } catch (error) {
        console.error('Error al cargar noticias:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNoticias();
  }, []);

  if (loading) {
    return <div className="text-center py-12 text-blue-950 font-semibold">Cargando noticias...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      {noticias.map((item) => (
        <article key={item.id} className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden transition-all hover:shadow-lg">
          {/* Imagen de la Noticia */}
          <div className="relative w-full h-72 bg-gray-100">
            <Image 
              src={item.imageUrl} 
              alt={item.title} 
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 flex gap-6 items-start">
            {/* Cuadro de Fecha estilo Blog (Ej: ABR 16) */}
            <div className="flex flex-col items-center bg-gray-100 border border-gray-300 rounded-lg overflow-hidden min-w-[70px] shadow-sm">
              <span className="bg-blue-950 text-white text-xs font-bold py-1 w-full text-center uppercase tracking-wider">
                {item.monthBadge}
              </span>
              <span className="text-2xl font-black text-gray-800 py-2">
                {item.dayBadge}
              </span>
            </div>

            {/* Contenido de la Tarjeta */}
            <div className="space-y-3 flex-1">
              <h2 className="text-2xl font-bold text-blue-950 hover:text-red-600 transition-colors">
                <Link href={`/noticias/${item.slug}`}>{item.title}</Link>
              </h2>

              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-gray-400" /> {item.author}
                </span>
                <span className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                  <MessageSquare className="w-3.5 h-3.5 text-gray-400" /> Leave a comment
                </span>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.summary}
              </p>

              <div className="pt-2">
                <Link 
                  href={`/noticias/${item.slug}`}
                  className="inline-flex items-center gap-1 text-red-600 font-semibold text-sm hover:underline"
                >
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}