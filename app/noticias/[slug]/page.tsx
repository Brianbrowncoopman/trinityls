export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NoticiaDetallePage({ params }: PageProps) {
  const { slug } = await params;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-950">Noticia: {slug}</h1>
      <p className="mt-2 text-gray-700">Contenido detallado de la noticia...</p>
    </div>
  );
}