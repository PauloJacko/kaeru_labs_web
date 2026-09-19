import Image from "next/image";
import Portafolio from "@/components/Portafolio";
import CalculadoraPresupuesto from "@/components/CalculadoraPresupuesto";


export default function Home() {
  return (
    <div className="min-h-screen bg-kaeru-dark text-white font-sans selection:bg-kaeru-green selection:text-black">
      {/* 1. HEADER / NAVBAR FLOTANTE CON CRISTAL MÁS CLARO */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 bg-white/20 backdrop-blur-xl backdrop-brightness-125 border border-white/30 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] transition-all duration-300">
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

          {/* Navegación con Texto Blanco puro para máximo contraste */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white">
            <a href="#precios" className="hover:text-kaeru-green transition-colors drop-shadow-sm">Planes Web</a>
            <a href="#sistemas" className="hover:text-kaeru-green transition-colors drop-shadow-sm">Sistemas Informáticos</a>
            <a href="#cotizador" className="hover:text-kaeru-green transition-colors drop-shadow-sm">Cotizador Express</a>
            <a href="#portafolio" className="hover:text-kaeru-green transition-colors drop-shadow-sm">Portafolio</a>
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
      <section className="relative pt-44 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between min-h-[580px] overflow-hidden">
        
        {/* Imagen de la Mascota de Fondo (Achicada, bajada y clara) */}
        <div className="absolute top-0 right-0 w-full md:w-3/5 h-full pointer-events-none flex justify-end items-center z-0 pt-12 md:pt-16">
          
          {/* Gradiente Oscuro SOLO en el lado izquierdo donde chocan las letras */}
          <div className="absolute left-0 top-0 bottom-0 w-1/2 md:w-2/5 bg-gradient-to-r from-kaeru-dark via-kaeru-dark/80 to-transparent z-10 pointer-events-none"></div>

          <Image
            src="/mascota-programando.png"
            alt="Mascota de Kaeru Labs - Rana informática"
            width={750}
            height={750}
            priority
            className="object-contain w-auto h-full max-h-[460px] md:max-h-[500px] drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Textos y Botones (Con z-20 para estar por encima del degradado) */}
        <div className="flex-1 max-w-xl space-y-6 z-20 relative">
          
          {/* ÚNICO H1 DE LA PÁGINA */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-md">
            Desarrollo Web y <span className="text-kaeru-green">Sistemas Informáticos</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed drop-shadow-md">
            Construimos tu sitio web y sistema con código de alto rendimiento. Infraestructura ordenada, hosting gratuito incluido y pasarelas de pago.
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
              className="bg-kaeru-card/90 backdrop-blur-sm border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl hover:border-kaeru-green hover:text-kaeru-green transition"
            >
              Cotizar Sistema
            </a>
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

    {/* 4. SECCIÓN SISTEMAS INFORMÁTICOS */}
    <section id="sistemas" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="bg-kaeru-card border border-white/10 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
        
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Columna Izquierda */}
          <div className="lg:col-span-6 space-y-6 z-10">
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

            {/* Nota pequeña + Botón de Cotizar */}
            <div className="pt-2 space-y-2">
              <p className="text-[11px] text-gray-400 italic">
                *El valor dependerá del tamaño y requerimiento del sistema.
              </p>
              <div>
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
          </div>

          {/* Columna Derecha: Mascota*/}
          <div className="lg:col-span-6 relative pt-12 md:pt-16">
            
            {/* RANA DE FRENTE */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
              <Image
                src="/mascota.png"
                alt="Mascota de Kaeru Labs sosteniendo el monitor"
                width={200}
                height={200}
                priority
                className="object-contain w-36 md:w-44 h-auto drop-shadow-xl"
              />
            </div>

            {/* PANTALLA / EDITOR DE CÓDIGO */}
            <div className="relative z-10 bg-kaeru-dark border border-white/15 rounded-2xl overflow-hidden font-mono text-xs md:text-sm shadow-2xl backdrop-blur-sm">
              
              {/* Barra superior de la Pantalla */}
              <div className="bg-black/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-gray-400 text-[11px] font-medium tracking-wide">kaeru-system.config.ts</span>
              </div>

              {/* Código escrito en la Pantalla */}
              <div className="p-6 text-gray-300 space-y-2.5 leading-relaxed bg-black/40">
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
      </div>
    </section>

    {/* 4. CALCULADORA INTERACTIVA  */}
      <CalculadoraPresupuesto />

    {/* 5. SECCIÓN PORTAFOLIO CON VIDEOS */}

      <Portafolio />

    {/* FOOTER Y CONTACTO */}
<footer className="bg-black border-t border-white/10 pt-16 pb-8 text-gray-400">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
    
    {/* Columna 1: Marca y Propósito */}
    <div className="space-y-4">
      <Image
        src="/logo-kaeru.png"
        alt="Kaeru Labs Logo"
        width={140}
        height={50}
        className="h-12 w-auto object-contain"
      />
      <p className="text-sm text-gray-400 leading-relaxed">
        Desarrollo web de alto rendimiento, e-commerce y sistemas informáticos a medida. Tecnología moderna, rápida y sin costos mensuales forzados.
      </p>
      <div className="flex items-center gap-2 text-xs text-kaeru-green font-mono">
        <span className="w-2 h-2 rounded-full bg-kaeru-green animate-pulse"></span>
        Servidores Operativos 100% Uptime
      </div>
    </div>

    {/* Columna 2: Navegación Rápida */}
    <div className="space-y-3">
      <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Navegación</h4>
      <ul className="space-y-2 text-sm">
        <li><a href="#precios" className="hover:text-kaeru-green transition">Planes Web</a></li>
        <li><a href="#sistemas" className="hover:text-kaeru-green transition">Sistemas a Medida</a></li>
        <li><a href="#cotizador" className="hover:text-kaeru-green transition">Cotizador Express</a></li>
        <li><a href="#portafolio" className="hover:text-kaeru-green transition">Portafolio</a></li>
      </ul>
    </div>

{/* Columna 3: Stack Tecnológico */}
    <div className="space-y-3">
      <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Tecnología</h4>
      <ul className="space-y-2 text-sm text-gray-400 font-mono">
        <li>⚡ Next.js / React / Django</li>
        <li>🎨 Tailwind / Bootstrap / CSS</li>
        <li>💳 Webpay Plus / Transbank</li>
        <li>☁️ Vercel / Render Hosting</li>
        <li>🗄️ Supabase / PostgreSQL</li>
      </ul>
    </div>

    {/* Columna 4: Contacto Directo */}
    <div className="space-y-3">
      <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Contacto</h4>
      <p className="text-sm">¿Tienes un proyecto en mente? Hablemos directamente por WhatsApp.</p>
      <a
        href="https://wa.me/56945300403?text=Hola!%20Me%20gustar%C3%ADa%20cotizar%20un%20proyecto%20con%20Kaeru%20Labs"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-kaeru-green text-black font-bold px-4 py-2.5 rounded-xl text-sm hover:opacity-90 transition"
      >
        <span>💬</span> Contactar por WhatsApp
      </a>
    </div>

  </div>

  {/* Barra Inferior del Footer */}
  <div className="max-w-7xl mx-auto px-6 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
    <p>© {new Date().getFullYear()} Kaeru Labs. Todos los derechos reservados.</p>
    <p className="font-mono text-gray-500">
      Desarrollado con <span className="text-kaeru-green">♥</span> en Chile 🇨🇱
    </p>
  </div>
</footer>

    </div>
  );
}