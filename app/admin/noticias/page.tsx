'use client';

import { useState } from 'react';
import { PlusCircle, Image as ImageIcon, CheckCircle, AlertCircle } from 'lucide-react';
import { db, storage } from '../../../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function AdminNoticiasPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [monthBadge, setMonthBadge] = useState('NOV');
  const [dayBadge, setDayBadge] = useState('05');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const generateSlug = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/[\s_-]+/g, '-')
      .replace(/^-+|-+$/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      setMessage({ type: 'error', text: 'El título y el contenido son obligatorios.' });
      return;
    }

    setLoading(true);
    setMessage(null);
    console.log('1. Iniciando proceso de publicación...');

    try {
      let imageUrl = 'https://firebasestorage.googleapis.com/v0/b/trinity-48be3.firebasestorage.app/o/WhatsApp%20Image%202026-10-24%20at%204.14.32%20PM.jpeg?alt=media&token=0e19d5c9-9972-4c8a-bdfb-c5db477d6460';

      if (imageFile) {
        console.log('2. Intentando subir imagen a Storage...');
        try {
          const imageRef = ref(storage, `noticias/${Date.now()}_${imageFile.name}`);
          await uploadBytes(imageRef, imageFile);
          imageUrl = await getDownloadURL(imageRef);
        } catch (storageError) {
          console.warn('Aviso: Falló Storage (CORS), usando imagen por defecto.');
        }
      }

      const slug = generateSlug(title);
      const newNews = {
        title,
        slug,
        content,
        summary: content.substring(0, 150) + '...',
        monthBadge: monthBadge.toUpperCase(),
        dayBadge,
        author: 'colegiotrinity',
        imageUrl,
        createdAt: new Date().toISOString(),
      };

      console.log('4. Enviando datos a Firestore...', newNews);

      // Creamos una promesa con límite de tiempo de 8 segundos para evitar que se quede colgado
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Tiempo de espera agotado al conectar con Firestore')), 8000)
      );

      await Promise.race([
        addDoc(collection(db, 'noticias'), newNews),
        timeoutPromise
      ]);

      console.log('5. ¡Documento guardado en Firestore correctamente!');
      setMessage({ type: 'success', text: '¡Noticia publicada con éxito!' });
      
      setTitle('');
      setContent('');
      setImageFile(null);
    } catch (err: any) {
      console.error('❌ Error detallado:', err);
      setMessage({ type: 'error', text: `Error al guardar: ${err.message || 'Comueba tu conexión'}` });
    } finally {
      setLoading(false);
      console.log('6. Fin del proceso.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      
      {/* Header del Panel */}
      <div className="bg-blue-950 text-white p-6 rounded-2xl shadow-md flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Panel de Administración</h1>
          <p className="text-sm text-gray-300">Gestor de Noticias y Publicaciones - Colegio Trinity</p>
        </div>
        <span className="bg-red-600 text-xs px-3 py-1 rounded-full font-semibold">Admin</span>
      </div>

      {/* Formulario */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 shadow-md space-y-6">
        <h2 className="text-xl font-bold text-blue-950 flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-red-600" /> Publicar Nueva Noticia
        </h2>

        {message && (
          <div className={`p-4 rounded-lg flex items-center gap-3 text-sm font-medium ${
            message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message.type === 'success' ? <CheckCircle className="w-5 h-5 text-green-600" /> : <AlertCircle className="w-5 h-5 text-red-600" />}
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Título de la Noticia</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: PRUEBAS PENDIENTES"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-950 outline-none text-gray-900"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Mes (Abreviado)</label>
              <input 
                type="text" 
                maxLength={3}
                value={monthBadge}
                onChange={(e) => setMonthBadge(e.target.value)}
                placeholder="NOV"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 uppercase focus:ring-2 focus:ring-blue-950 outline-none text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Día</label>
              <input 
                type="text" 
                maxLength={2}
                value={dayBadge}
                onChange={(e) => setDayBadge(e.target.value)}
                placeholder="05"
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-950 outline-none text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Imagen de la Noticia (Opcional en pruebas)</label>
            <div className="flex items-center gap-4 border border-dashed border-gray-300 p-4 rounded-lg bg-gray-50">
              <ImageIcon className="w-8 h-8 text-gray-400" />
              <input 
                type="file" 
                accept="image/*"
                onChange={(e) => setImageFile(e.target.files ? e.target.files[0] : null)}
                className="text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-950 file:text-white hover:file:bg-blue-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Cuerpo / Contenido Detallado</label>
            <textarea 
              rows={6}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Escribe la información detallada aquí..."
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-950 outline-none text-gray-900"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg shadow transition-colors disabled:opacity-50"
          >
            {loading ? 'Publicando en Firestore...' : 'Publicar Noticia'}
          </button>
        </form>
      </div>

    </div>
  );
}