"use client";

import { useState } from "react";
import Image from "next/image";

export default function CalculadoraPresupuesto() {
  const [tipoProyecto, setTipoProyecto] = useState<"landing" | "corporativo" | "ecommerce">("landing");
  const [necesitaPagos, setNecesitaPagos] = useState<boolean>(false);
  const [tramoProductos, setTramoProductos] = useState<"10-50" | "50-100" | "100+">("10-50");

  // Cálculo por tramos fijos
  const calcularTotal = () => {
    let base = 80000; // Landing Base

    if (tipoProyecto === "corporativo") base = 220000;
    if (tipoProyecto === "ecommerce") {
      base = 380000; // Base e-commerce incluye hasta 50 productos
      
      if (tramoProductos === "50-100") {
        base += 50000; // Incremento moderado
      } else if (tramoProductos === "100+") {
        base += 110000; // Tramo para más de 100 productos
      }
    }

    // Recargo por pasarela si no es E-commerce (el e-commerce ya la incluye)
    if (necesitaPagos && tipoProyecto !== "ecommerce") {
      base += 60000;
    }

    return base;
  };

  const totalEstimado = calcularTotal();

  const generarMensajeWhatsApp = () => {
    const proyectoNombres = {
      landing: "Landing Page / Web Express",
      corporativo: "Sitio Web Corporativo",
      ecommerce: "Tienda Online / E-commerce",
    };

    const texto = `Hola Kaeru Labs! 🐸 Coticé en su calculadora web:
- *Tipo de Proyecto:* ${proyectoNombres[tipoProyecto]}
- *Pasarela de Pagos:* ${necesitaPagos || tipoProyecto === "ecommerce" ? "Sí" : "No"}
${tipoProyecto === "ecommerce" ? `- *Rango de Productos:* ${tramoProductos}\n` : ""}
*Estimado aprox:* $${totalEstimado.toLocaleString("es-CL")} CLP

Me gustaría recibir más detalles para avanzar.`;

    return `https://wa.me/56945300403?text=${encodeURIComponent(texto)}`;
  };

  return (
    <section id="cotizador" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="bg-kaeru-card border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Adorno de fondo neón */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-kaeru-green/10 blur-3xl rounded-full pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* COLUMNA IZQUIERDA: Mascota e Identidad Visual */}
          <div className="lg:col-span-5 flex flex-col items-center text-center space-y-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
            
            <h3 className="text-2xl md:text-3xl font-extrabold text-white">
              Calcula tu proyecto en segundos
            </h3>

            {/* Ilustración de la Mascota */}
            <div className="relative w-60 h-60 md:w-72 md:h-72 my-2">
            <div className="absolute inset-0 bg-kaeru-green/20 blur-2xl rounded-full -z-10" />
            <Image
                src="/mascota-cotiza.png"
                alt="Kaeru Labs Mascota Cotizando"
                width={300}
                height={300}
                priority
                className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
            />
            </div>

            <p className="text-gray-400 text-xs md:text-sm max-w-xs">
              Sin costos sorpresas ni mensualidades obligatorias.
            </p>
          </div>

          {/* COLUMNA DERECHA: Opciones Interactivas */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Selección de Proyecto */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                1. Tipo de Solución Web:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: "landing", label: "Landing Page" },
                  { id: "corporativo", label: "Web Corporativa" },
                  { id: "ecommerce", label: "Tienda Online" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTipoProyecto(item.id as any)}
                    className={`py-3 px-3 rounded-xl border text-xs md:text-sm font-semibold transition ${
                      tipoProyecto === item.id
                        ? "border-kaeru-green bg-kaeru-green text-black shadow-lg shadow-kaeru-green/20"
                        : "border-white/10 bg-black/40 text-gray-300 hover:border-white/20"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Pasarela de Pagos (oculta o fijada para ecommerce) */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
                2. ¿Integrar pagos online (Webpay / Transbank)?
              </label>
              {tipoProyecto === "ecommerce" ? (
                <div className="p-3 bg-kaeru-green/10 border border-kaeru-green/30 rounded-xl text-xs text-kaeru-green font-medium flex items-center gap-2">
                  <span>✓</span> Incluido por defecto en el plan Tienda Online.
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setNecesitaPagos(true)}
                    className={`py-2.5 px-4 rounded-xl border text-xs md:text-sm transition ${
                      necesitaPagos
                        ? "border-kaeru-green bg-kaeru-green/10 text-kaeru-green font-bold"
                        : "border-white/10 bg-black/40 text-gray-400"
                    }`}
                  >
                    Sí, integrar pagos
                  </button>
                  <button
                    type="button"
                    onClick={() => setNecesitaPagos(false)}
                    className={`py-2.5 px-4 rounded-xl border text-xs md:text-sm transition ${
                      !necesitaPagos
                        ? "border-kaeru-green bg-kaeru-green/10 text-kaeru-green font-bold"
                        : "border-white/10 bg-black/40 text-gray-400"
                    }`}
                  >
                    No por el momento
                  </button>
                </div>
              )}
            </div>

            {/* 3. Tramos de Productos (Solo E-commerce) */}
            {tipoProyecto === "ecommerce" && (
              <div className="space-y-2 pt-1 animate-fadeIn">
                <label className="block text-xs font-mono uppercase tracking-wider text-gray-400">
                  3. Cantidad estimada de productos en catálogo:
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: "10-50", label: "10 a 50 pds.", desc: "Valor Base" },
                    { id: "50-100", label: "50 a 100 pds.", desc: "+$50.000" },
                    { id: "100+", label: "Más de 100", desc: "+$110.000" },
                  ].map((tramo) => (
                    <button
                      key={tramo.id}
                      type="button"
                      onClick={() => setTramoProductos(tramo.id as any)}
                      className={`p-2.5 rounded-xl border text-center transition ${
                        tramoProductos === tramo.id
                          ? "border-kaeru-green bg-kaeru-green/20 text-white"
                          : "border-white/10 bg-black/40 text-gray-400"
                      }`}
                    >
                      <div className="text-xs font-bold">{tramo.label}</div>
                      <div className="text-[10px] text-kaeru-green font-mono">{tramo.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Totalizador y Botón directo a WhatsApp */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-mono">
                  Presupuesto Estimado:
                </span>
                <div className="text-3xl font-extrabold text-kaeru-green">
                  ${totalEstimado.toLocaleString("es-CL")} <span className="text-xs font-normal text-gray-400">CLP</span>
                </div>
              </div>

              <a
                href={generarMensajeWhatsApp()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-kaeru-green text-black font-extrabold rounded-xl text-center hover:opacity-90 transition shadow-lg shadow-kaeru-green/20 hover:scale-[1.02]"
              >
                💬 Enviar a WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}