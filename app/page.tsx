import Image from "next/image";
import type { Metadata } from "next";
import Portafolio from "@/components/Portafolio";

export const metadata: Metadata = {
  title: "Kaeru Labs | Desarrollo Web y Sistemas Informáticos a Medida",
  description: "Desarrollamos páginas web profesionales, tiendas online con Webpay y sistemas informáticos a medida. Entregas ultra rápidas y sin costos mensuales ocultos.",
  keywords: ["Desarrollo Web", "Sistemas Informáticos", "Next.js", "Webpay", "Creación de Páginas Web", "Kaeru Labs", "Chile"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-kaeru-dark text-white font-sans selection:bg-kaeru-green selection:text-black">
{/* 1. HEADER / NAVBAR FLOTANTE CON CRISTAL CLARO */}
<header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300">
  <div className="px-6 py-2 flex justify-between items-center">
    
    {/* Logo */}
    <a href="#" className="flex items-center">
      <Image
        src="/logo-kaeru.png"
        alt="Kaeru Labs Logo"
        width={140}
        height={50}
        priority
        className="h-12 md:h-14 w-auto object-contain hover:scale-105 transition-transform"
      />
    </a>

    {/* Navegación con Texto Blanco/Gris Claro de Alto Contraste */}
    <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-200">
      <a href="#precios" className="hover:text-kaeru-green transition-colors">Planes Web</a>
      <a href="#sistemas" className="hover:text-kaeru-green transition-colors">Sistemas Informáticos</a>
      <a href="#portafolio" className="hover:text-kaeru-green transition-colors">Portafolio</a>
    </nav>

    {/* Botón WhatsApp Destacado */}
    <a
      href="https://wa.me/56945300403?text=Hola!%20Me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20con%20Kaeru%20Labs"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-kaeru-green hover:bg-emerald-400 text-black font-extrabold px-5 py-2 rounded-full text-xs md:text-sm transition-all shadow-[0_0_20px_rgba(56,239,125,0.4)] hover:shadow-[0_0_25px_rgba(56,239,125,0.6)] flex items-center gap-2"
    >
      Hablar por WhatsApp
    </a>
  </div>
</header>

{/* 2. HERO SECTION */}
<section className="pt-36 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
  
  {/* Textos y Botones */}
  <div className="flex-1 space-y-6">
    
    {/* ÚNICO H1 DE LA PÁGINA */}
    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
      Desarrollo Web y <span className="text-kaeru-green">Sistemas Informáticos</span>
    </h1>

    <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
      Construimos tu sitio web o sistema con código de alto rendimiento. Infraestructura ordenada, hosting gratuito incluido y pasarelas de pago.
    </p>

    <div className="flex flex-wrap gap-4 pt-4">
      <a
        href="#precios"
        className="bg-kaeru-green text-black font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition shadow-[0_0_20px_rgba(56,239,125,0.4)]"
      >
        Ver Planes y Precios
      </a>
      <a
        href="#sistemas"
        className="bg-kaeru-card border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:border-kaeru-green hover:text-kaeru-green transition"
      >
        Cotizar Sistema
      </a>
    </div>
  </div>

  {/* Mascota */}
  <div className="flex-1 flex justify-center relative">

    <div className="absolute inset-0 bg-kaeru-green/15 blur-3xl rounded-full -z-10 transform scale-90"></div>

    <div className="flex-1 flex justify-center relative">

      <div className="absolute inset-0 bg-kaeru-green/15 blur-3xl rounded-full -z-10 transform scale-90"></div>

      <Image
        src="/mascota.png"
        alt="Mascota de Kaeru Labs - Rana informática"
        width={420}
        height={420}
        priority
        className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)] scale-x-[-1]"
      />

        </div>
      </div>
    </section>

    {/* 3. PLANES Y PRECIOS PÁGINAS WEB */}
    <section id="precios" className="py-24 px-6 bg-gradient-to-b from-kaeru-card via-[#0e1e17] to-kaeru-card border-y border-kaeru-green/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Encabezado limpio */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Desarrollo Web: <span className="text-kaeru-green">Precios Claros</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base">
            Elige el plan que se adapte a tu empresa.
          </p>
        </div>

        {/* Grilla de Planes Simétricos e Interactivos */}
        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Plan 1: Web Express */}
          <div className="bg-kaeru-dark border border-white/10 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:border-kaeru-green hover:shadow-[0_0_30px_rgba(56,239,125,0.2)] group cursor-pointer">
            <div>
              <span className="text-xs font-bold text-kaeru-green tracking-widest uppercase">Entrega Rápida</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-2 group-hover:text-kaeru-green transition">Web Express</h3>
              <p className="text-gray-400 text-sm mb-6">Página única o de pocas páginas. Perfecta para campañas, lanzamientos o servicios específicos.</p>
              
              <div className="mb-6">
                <span className="text-xs text-gray-400 block">Desde</span>
                <div className="text-4xl font-extrabold text-kaeru-green">
                  $80.000 <span className="text-xs font-normal text-gray-400">CLP</span>
                </div>
                <span className="text-xs text-gray-500 italic mt-1 block">*Valor varía según secciones e interacciones requeridas.</span>
              </div>

              <ul className="space-y-3 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> <strong>Hosting Gratuito de por vida</strong></li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> 100% Adaptable a Celulares y Tablets</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Botón de contacto a WhatsApp, correo y redes sociales</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Formulario de Contacto</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Certificado de Seguridad SSL (HTTPS)</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> SEO optimizado para motores de busqueda</li>
              </ul>
            </div>
            <a 
              href="https://wa.me/56945300403?text=Hola,%20me%20interesa%20la%20Web%20Express" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center py-3.5 bg-white/10 group-hover:bg-kaeru-green group-hover:text-black font-semibold rounded-2xl transition duration-300"
            >
              Cotizar Landing
            </a>
          </div>

          {/* Plan 2: Corporativo */}
          <div className="bg-kaeru-dark border border-white/10 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:border-kaeru-green hover:shadow-[0_0_30px_rgba(56,239,125,0.2)] group cursor-pointer">
            <div>
              <span className="text-xs font-bold text-kaeru-green tracking-widest uppercase">Multi-Página</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-2 group-hover:text-kaeru-green transition">Sitio Web Corporativo</h3>
              <p className="text-gray-400 text-sm mb-6">Para empresas o profesionales que necesitan mostrar múltiples servicios y catálogo de información.</p>
              
              <div className="mb-6">
                <span className="text-xs text-gray-400 block">Desde</span>
                <div className="text-4xl font-extrabold text-kaeru-green">
                  $220.000 <span className="text-xs font-normal text-gray-400">CLP</span>
                </div>
                <span className="text-xs text-gray-500 italic mt-1 block">*Depende del número total de páginas internas y contenido.</span>
              </div>

              <ul className="space-y-3 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> <strong>Hosting Gratuito de por vida</strong></li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Múltiples Ventanas (Inicio, Nosotros, Servicios, etc.)</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> SEO optimizado para motores de busqueda </li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Formularios de Cotización Personalizados</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Botón de contacto a WhatsApp, correo y redes sociales</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Certificado de Seguridad SSL (HTTPS)</li>
              </ul>
            </div>
            <a 
              href="https://wa.me/56945300403?text=Hola,%20me%20interesa%20un%20Sitio%20Web%20Corporativo" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center py-3.5 bg-white/10 group-hover:bg-kaeru-green group-hover:text-black font-semibold rounded-2xl transition duration-300"
            >
              Cotizar Sitio Web
            </a>
          </div>

          {/* Plan 3: E-Commerce */}
          <div className="bg-kaeru-dark border border-white/10 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:scale-105 hover:border-kaeru-green hover:shadow-[0_0_30px_rgba(56,239,125,0.2)] group cursor-pointer">
            <div>
              <span className="text-xs font-bold text-kaeru-green tracking-widest uppercase">Tienda Online</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-2 group-hover:text-kaeru-green transition">E-commerce / Tienda</h3>
              <p className="text-gray-400 text-sm mb-6">Vende tus productos en automático con pagos en línea seguros y gestión de catálogo.</p>
              
              <div className="mb-6">
                <span className="text-xs text-gray-400 block">Desde</span>
                <div className="text-4xl font-extrabold text-kaeru-green">
                  $380.000 <span className="text-xs font-normal text-gray-400">CLP</span>
                </div>
                <span className="text-xs text-gray-500 italic mt-1 block">*Precio base. Varía según la cantidad de productos a ingresar (ej: 50 o 500+).</span>
              </div>

              <ul className="space-y-3 text-sm text-gray-300 mb-8 border-t border-white/10 pt-6">
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> <strong>Integración Webpay Plus (Transbank) / Pasarelas</strong></li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Carrito de Compras y Check-out Seguro</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Carga de Productos (Manual o Importación Masiva)</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Panel de Control para Inventario</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Notificaciones de Venta por Correo</li>
                <li className="flex items-center gap-2"><span className="text-kaeru-green">✓</span> Todo los servicios de los planes anteriores</li>
              </ul>
            </div>
            <a 
              href="https://wa.me/56945300403?text=Hola,%20cotizo%20una%20Tienda%20Online" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-full text-center py-3.5 bg-white/10 group-hover:bg-kaeru-green group-hover:text-black font-semibold rounded-2xl transition duration-300"
            >
              Cotizar E-commerce
            </a>
          </div>

        </div>
      </div>
    </section>

    {/* 4. SECCIÓN SISTEMAS INFORMÁTICOS A MEDIDA */}
    <section id="sistemas" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="bg-kaeru-card border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
        
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* Columna Izquierda: Información Concisa */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-white">
              Software <span className="text-kaeru-green">a Medida</span>
            </h2>
            
            <p className="text-gray-300 text-base leading-relaxed">
              Desarrollamos sistemas ajustados al 100% a la lógica y procesos de tu empresa.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-300 pt-1">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-kaeru-green"></span> Dashboards y Paneles
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-kaeru-green"></span> Gestores de Inventario
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-kaeru-green"></span> Automatizaciones
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-kaeru-green"></span> Integración de APIs
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/56945300403?text=Hola,%20quiero%20evaluar%20un%20sistema%20informatico"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-kaeru-green text-black font-extrabold px-8 py-4 rounded-xl hover:opacity-90 transition shadow-lg"
              >
                Evaluar mi Proyecto Gratis
              </a>
            </div>
          </div>

          {/* Columna Derecha: Cuadro de Código Más Amplo */}
          <div className="lg:col-span-6 bg-kaeru-dark border border-white/10 rounded-2xl overflow-hidden font-mono text-xs md:text-sm shadow-inner">
            
            {/* Barra superior del editor */}
            <div className="bg-black/60 px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-gray-500 text-[11px]">kaeru-system.config.ts</span>
            </div>

            {/* Líneas de código estilizadas */}
            <div className="p-6 text-gray-300 space-y-2.5 leading-relaxed">
              <p className="text-gray-500">// Arquitectura del sistema</p>
              <p><span className="text-purple-400">const</span> <span className="text-blue-400">proyecto</span> = &#123;</p>
              <p className="pl-6"><span className="text-red-400">cliente</span>: <span className="text-emerald-400">"Tu Empresa"</span>,</p>
              <p className="pl-6"><span className="text-red-400">tipo</span>: <span className="text-emerald-400">"Software a Medida"</span>,</p>
              <p className="pl-6"><span className="text-red-400">escalabilidad</span>: <span className="text-amber-400">true</span>,</p>
              <p className="pl-6"><span className="text-red-400">mantenimientoObligatorio</span>: <span className="text-amber-400">false</span>,</p>
              <p>&#125;;</p>
              <p className="pt-3 text-emerald-400 font-semibold flex items-center gap-2">
                <span className="animate-pulse">●</span> &gt; Sistema listo para producción.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>


    {/* 5. SECCIÓN PORTAFOLIO CON VIDEOS (Llamada al componente) */}

    <Portafolio />

    </div>
  );
}