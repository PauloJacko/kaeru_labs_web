export default function Home() {
  return (
    <main className="min-h-screen bg-kaeru-dark text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-kaeru-green mb-4">
        Kaeru Labs 🐸
      </h1>
      <p className="text-gray-400 max-w-md text-center mb-6">
        Desarrollo de páginas web y sistemas informáticos a la medida.
      </p>
      <button className="bg-kaeru-accent hover:bg-kaeru-green text-black font-semibold px-6 py-3 rounded-xl transition-all">
        Ver Portafolio
      </button>
    </main>
  );
}