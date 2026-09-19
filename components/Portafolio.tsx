"use client";
import { useState } from "react";

export default function Portafolio() {
  const [videoActivo, setVideoActivo] = useState<{ src: string; titulo: string } | null>(null);

  const sistemas = [
    {
      id: "auditiva",
      titulo: "Evaluación Auditiva",
      tag: "Sistema Informático",
      desc: "Software clínico para registro de audiometrías, historial de pacientes y generación de reportes.",
      video: "/videos/demo-auditiva.mp4",
    },
    {
      id: "optica",
      titulo: "Evaluación Óptica",
      tag: "Sistema Informático",
      desc: "Plataforma de gestión clínica y recetas ópticas con cálculo automático de parámetros.",
      video: "/videos/demo-optica.mp4",
    },
    {
      id: "reposicion",
      titulo: "Sistema de Reposición",
      tag: "Sistema Informático",
      desc: "Control de stock e inventario con alertas automatizadas para reabastecimiento de productos.",
      video: "/videos/demo-reposicion.mp4",
    },
  ];

  return (
    <section id="portafolio" className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center space-y-3 mb-14">
        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
          Nuestros <span className="text-kaeru-green">Proyectos Destacados</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base">
          Explora algunas de las páginas web y sistemas informáticos desarrollados por nuestro equipo.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* --- PÁGINAS WEB --- */}
        <div className="bg-kaeru-card border border-white/10 rounded-2xl overflow-hidden hover:border-kaeru-green/50 transition duration-300 flex flex-col justify-between group">
          <div>
            <div className="relative aspect-video bg-black/60 overflow-hidden border-b border-white/5">
              <iframe
                src="https://www.fantasmedia.cl"
                title="Fantas Media"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300 pointer-events-none"
                loading="lazy"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs text-kaeru-green font-bold uppercase tracking-wider">Sitio Web Corporativo</span>
              <h3 className="text-xl font-bold text-white group-hover:text-kaeru-green transition">Fantasmedia</h3>
              <p className="text-gray-400 text-sm">Plataforma web para productora audiovisual con catálogo de servicios y portafolio de video.</p>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://www.fantasmedia.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-kaeru-green hover:underline"
            >
              Visitar sitio web <span>➔</span>
            </a>
          </div>
        </div>

        <div className="bg-kaeru-card border border-white/10 rounded-2xl overflow-hidden hover:border-kaeru-green/50 transition duration-300 flex flex-col justify-between group">
          <div>
            <div className="relative aspect-video bg-black/60 overflow-hidden border-b border-white/5">
              <iframe
                src="https://www.opticanexo.cl"
                title="Óptica Nexo"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300 pointer-events-none"
                loading="lazy"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs text-kaeru-green font-bold uppercase tracking-wider">E-commerce / Catálogo</span>
              <h3 className="text-xl font-bold text-white group-hover:text-kaeru-green transition">Óptica Nexo</h3>
              <p className="text-gray-400 text-sm">Página comercial para venta de lentes, catálogo óptico y reserva de atenciones.</p>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://www.opticanexo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-kaeru-green hover:underline"
            >
              Visitar sitio web <span>➔</span>
            </a>
          </div>
        </div>

        <div className="bg-kaeru-card border border-white/10 rounded-2xl overflow-hidden hover:border-kaeru-green/50 transition duration-300 flex flex-col justify-between group">
          <div>
            <div className="relative aspect-video bg-black/60 overflow-hidden border-b border-white/5">
              <iframe
                src="https://fallingframes.vercel.app"
                title="Falling Frames"
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition duration-300 pointer-events-none"
                loading="lazy"
              />
            </div>
            <div className="p-6 space-y-2">
              <span className="text-xs text-kaeru-green font-bold uppercase tracking-wider">Web Express / Landing</span>
              <h3 className="text-xl font-bold text-white group-hover:text-kaeru-green transition">Falling Frames</h3>
              <p className="text-gray-400 text-sm">Landing page para banda de metal progresivo experimental con reproductor multimedia.</p>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a
              href="https://fallingframes.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-kaeru-green hover:underline"
            >
              Visitar demo en Vercel <span>➔</span>
            </a>
          </div>
        </div>

        {/* --- SISTEMAS INFORMÁTICOS --- */}
        {sistemas.map((item) => (
          <div
            key={item.id}
            onClick={() => setVideoActivo({ src: item.video, titulo: item.titulo })}
            className="bg-kaeru-card border border-white/10 rounded-2xl overflow-hidden hover:border-kaeru-green/50 transition duration-300 group cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="relative aspect-video bg-black/60 border-b border-white/5 overflow-hidden">
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition duration-500"
                />
                
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2 text-white font-semibold text-xs">
                  <span className="bg-black/80 px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-lg">
                    <span>🔍</span> Ver en Pantalla Completa
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <span className="text-xs text-kaeru-green font-bold uppercase tracking-wider">{item.tag}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-kaeru-green transition">{item.titulo}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button className="text-xs font-bold text-kaeru-green flex items-center gap-1.5 group-hover:translate-x-1 transition duration-300">
                <span>▶ Abrir Demostración</span>
              </button>
            </div>
          </div>
        ))}

      </div>

      {/* --- MODAL PANTALLA COMPLETA --- */}
      {videoActivo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0" onClick={() => setVideoActivo(null)}></div>

          <div className="relative w-full max-w-5xl bg-kaeru-dark border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col">
            
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-black/50">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-kaeru-green animate-pulse"></span>
                {videoActivo.titulo}
              </h3>
              <button
                onClick={() => setVideoActivo(null)}
                className="text-gray-400 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition text-xs font-mono"
              >
                ✕ Cerrar
              </button>
            </div>

            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                src={videoActivo.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="px-6 py-3 bg-black/40 border-t border-white/5 text-center text-xs text-gray-400">
              💡 <span className="text-gray-300">Tip en celulares:</span> Gira tu teléfono en horizontal para apreciar mejor los detalles de la interfaz.
            </div>

          </div>
        </div>
      )}
    </section>
  );
}