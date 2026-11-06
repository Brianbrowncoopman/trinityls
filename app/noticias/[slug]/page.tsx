import { Suspense } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { connection } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc, collection, getDocs, query, limit, where } from 'firebase/firestore';

interface PageProps {
  params: Promise<{ slug: string }>;
}

interface Noticia {
  title: string;
  content: string;
  imageUrl: string;
  date?: string;
  slug?: string;
}

async function getNoticiaData(slug: string) {
  try {
    // 1. Intentar buscar directamente por el ID del documento
    const docRef = doc(db, 'noticias', slug);
    const docSnap = await getDoc(docRef);

    let noticia: Noticia | null = null;

    if (docSnap.exists()) {
      noticia = docSnap.data() as Noticia;
    } else {
      // 2. Si no existe como ID, buscar por el campo 'slug'
      const qSlug = query(collection(db, 'noticias'), where('slug', '==', slug), limit(1));
      const querySnap = await getDocs(qSlug);
      
      if (!querySnap.empty) {
        noticia = querySnap.docs[0].data() as Noticia;
      }
    }

    if (!noticia) {
      return { noticia: null, recientes: [] };
    }

    // Obtener noticias recientes para la barra lateral
    const qRecientes = query(collection(db, 'noticias'), limit(5));
    const querySnapshot = await getDocs(qRecientes);
    const recientes = querySnapshot.docs.map(doc => ({
      slug: doc.data().slug || doc.id,
      title: doc.data().title,
      date: doc.data().date || 'Fecha reciente'
    }));

    return { noticia, recientes };
  } catch (error) {
    console.error('Error al conectar con Firestore:', error);
    return { noticia: null, recientes: [] };
  }
}

async function NoticiaDetalleContent({ params }: PageProps) {
  await connection();
  const { slug } = await params;
  const { noticia, recientes } = await getNoticiaData(slug);

  if (!noticia) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLUMNA IZQUIERDA: Artículo Principal */}
        <div className="lg:col-span-2 space-y-6 bg-white p-6 sm:p-8 rounded-xl border border-gray-200 shadow-sm">
          
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-950">
            {noticia.title}
          </h1>

          {/* Imagen Principal */}
          <div className="relative w-full h-80 sm:h-96 rounded-lg overflow-hidden bg-gray-100">
            <img 
              src={noticia.imageUrl && noticia.imageUrl.startsWith('http') ? noticia.imageUrl : '/images/logotrinity.png'} 
              alt={noticia.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cuerpo del Texto */}
          <div className="space-y-4 text-gray-700 leading-relaxed whitespace-pre-line">
            {noticia.content}
          </div>
        </div>

        {/* COLUMNA DERECHA: Barra Lateral (Widgets) */}
        <div className="space-y-6">
          
          {/* Widget: Noticias Recientes */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider border-b pb-2">
              Noticias Recientes
            </h4>
            <ul className="space-y-3 text-sm">
              {recientes.map((item) => (
                <li key={item.slug}>
                  <Link href={`/noticias/${item.slug}`} className="text-blue-900 hover:text-red-600 font-medium block">
                    › {item.title} <span className="text-xs text-gray-500 block font-normal">{item.date}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default function NoticiaDetallePage(props: PageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center text-blue-950 font-semibold">Cargando detalle de la noticia...</div>}>
      <NoticiaDetalleContent {...props} />
    </Suspense>
  );
}