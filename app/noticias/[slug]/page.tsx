export const dynamic = 'force-dynamic';

export default async function NoticiaDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-blue-950">Noticia: {slug}</h1>
      <p className="mt-2 text-gray-700">Contenido detallado de la noticia...</p>
    </div>
  );
}