import React, { useState, useEffect, useRef } from 'react';
import { Clock, ExternalLink, ChevronLeft, ChevronRight, Newspaper, PauseCircle, PlayCircle } from 'lucide-react';

// Configuración de feeds
const RSS_FEEDS = [
  {
    id: 'sms',
    nombre: 'SMS',
    url: 'https://www.sms.com.ar/feed/',
    color: 'blue'
  }
];

export default function NewsSlider() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPorPantalla, setItemsPorPantalla] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const timeoutRef = useRef(null);

  // --- LÓGICA DE CARGA DE DATOS (Igual que antes) ---
  useEffect(() => {
    fetchNews();
  }, []);

  // --- LÓGICA RESPONSIVA DEL SLIDER ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPorPantalla(1);
      else if (window.innerWidth < 1024) setItemsPorPantalla(2);
      else setItemsPorPantalla(3);
    };

    handleResize(); // Inicializar
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- LÓGICA DE AUTOPLAY ---
  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    
    if (!cargando && noticias.length > 0 && !isPaused) {
      timeoutRef.current = setTimeout(() => {
        nextSlide();
      }, 5000); // Cambia cada 5 segundos
    }

    return () => resetTimeout();
  }, [currentIndex, noticias.length, isPaused, cargando, itemsPorPantalla]);

  // --- FUNCIONES DE NAVEGACIÓN ---
  const maxIndex = Math.max(0, noticias.length - itemsPorPantalla);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  // --- FETCHING ---
  const fetchNews = async () => {
    setCargando(true);
    try {
      const allNews = [];
      const promises = RSS_FEEDS.map(async feedConfig => {
        try {
          const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedConfig.url)}`;
          const res = await fetch(apiUrl);
          const data = await res.json();
          if (data.status === 'ok') {
            return data.items.map(item => ({
              source: feedConfig.nombre,
              title: cleanHTML(item.title),
              description: cleanHTML(item.description || item.content || '').substring(0, 140) + '...',
              link: item.link,
              fecha: item.pubDate,
            }));
          }
        } catch (e) { return []; }
        return [];
      });

      const results = await Promise.all(promises);
      results.flat().forEach(n => n && allNews.push(n));
      
      allNews.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
      setNoticias(allNews);
    } catch (err) {
      console.error(err);
    } finally {
      setCargando(false);
    }
  };

  const cleanHTML = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const diff = Math.floor((new Date() - date) / 1000);
    if (diff < 86400) return 'Hoy';
    if (diff < 172800) return 'Ayer';
    return date.toLocaleDateString('es-AR', { day: 'numeric', month: 'short' });
  };

  // --- RENDER ---
  return (
    <div id="novedades" className="w-full bg-slate-50 border-y border-slate-200 py-8">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header del Slider */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-600 p-2 rounded-lg shadow-sm">
              <Newspaper className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Novedades</h2>
              <p className="text-xs text-slate-500">Desliza para ver más</p>
            </div>
          </div>
          
          {/* Controles Manuales */}
          <div className="flex items-center gap-2">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors shadow-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Área del Slider */}
        <div 
          className="relative overflow-hidden group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Indicador de Pausa (Visual Feedback) */}
          {/* <div className={`absolute top-2 right-2 z-10 transition-opacity duration-300 ${isPaused ? 'opacity-100' : 'opacity-0'}`}>
            <span className="bg-black/50 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1 backdrop-blur-sm">
              <PauseCircle className="w-3 h-3" /> Pausado
            </span>
          </div> */}

          {cargando ? (
            // Skeleton Loader (Carrusel)
            <div className="flex gap-4">
              {[...Array(itemsPorPantalla)].map((_, i) => (
                <div key={i} className="flex-1 bg-white h-64 rounded-xl border border-slate-200 p-5 animate-pulse">
                  <div className="h-4 w-20 bg-slate-200 rounded mb-4"></div>
                  <div className="h-6 w-full bg-slate-200 rounded mb-2"></div>
                  <div className="h-6 w-2/3 bg-slate-200 rounded mb-4"></div>
                  <div className="h-20 w-full bg-slate-100 rounded"></div>
                </div>
              ))}
            </div>
          ) : (
            // Track del Slider
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPorPantalla)}%)` }}
            >
              {noticias.map((item, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-2 box-border"
                  style={{ width: `${100 / itemsPorPantalla}%` }}
                >
                  <article className="h-full bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-red-300 transition-all flex flex-col justify-between group/card">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-red-600 bg-blue-50 px-2 py-1 rounded-md">
                          {item.source}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {getTimeAgo(item.fecha)}
                        </span>
                      </div>
                      
                      <h3 className="font-bold text-slate-800 mb-2 line-clamp-2 group-hover/card:text-red-700 transition-colors">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.title}
                        </a>
                      </h3>
                      
                      <p className="text-sm text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-800 mt-auto"
                    >
                      Leer más <ExternalLink className="w-3 h-3" />
                    </a>
                  </article>
                </div>
              ))}
            </div>
          )}
          
          {/* Mensaje si no hay noticias */}
          {!cargando && noticias.length === 0 && (
            <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-300">
              <p className="text-slate-500">No hay noticias disponibles en este momento.</p>
            </div>
          )}
        </div>

        {/* Indicadores (Puntitos) */}
        {!cargando && noticias.length > 0 && (
          <div className="flex justify-center gap-1.5 mt-6">
            {Array.from({ length: Math.ceil(noticias.length / itemsPorPantalla) }).map((_, idx) => {
               // Mapeamos los puntos para que coincidan con la paginación aproximada
               const active = Math.floor(currentIndex / itemsPorPantalla) === idx;
               return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * itemsPorPantalla)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    active ? 'w-6 bg-red-600' : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir a grupo ${idx + 1}`}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}