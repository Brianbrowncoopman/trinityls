import { Suspense } from 'react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function NoticiaContent({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-950">Noticia: {slug}</h1>
      <p className="mt-2 text-gray-700">Contenido detallado de la noticia...</p>
    </div>
  );
}

export default function NoticiaDetallePage(props: PageProps) {
  return (
    <Suspense fallback={<div className="p-8 text-center">Cargando noticia...</div>}>
      <NoticiaContent {...props} />
    </Suspense>
  );
}