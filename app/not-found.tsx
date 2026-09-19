import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-kaeru-dark text-white flex flex-col items-center justify-center p-6 text-center">
      {/* Resplandor Neón */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-kaeru-green/20 blur-3xl rounded-full -z-10" />
        <Image
          src="/mascota.png"
          alt="Kaeru Labs 404"
          width={220}
          height={220}
          priority
          className="object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)] animate-bounce"
        />
      </div>

      <span className="text-kaeru-green font-mono text-sm tracking-widest uppercase font-bold mb-2">
        Error 404 • Página No Encontrada
      </span>

      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        ¡Ups! Te saliste de la ruta
      </h1>

      <p className="text-gray-400 max-w-md text-sm md:text-base mb-8 leading-relaxed">
        La página que estás buscando no existe o ha sido movida. Regresa al inicio para seguir explorando nuestras soluciones.
      </p>

      <Link
        href="/"
        className="bg-kaeru-green hover:bg-emerald-400 text-black font-extrabold px-8 py-3.5 rounded-full transition-all shadow-[0_0_20px_rgba(56,239,125,0.4)] hover:shadow-[0_0_25px_rgba(56,239,125,0.6)]"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}