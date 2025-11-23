export default function ChainsawmanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
          🔥 Chainsawman Demo Player
        </h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 mb-8">
            <p className="text-xl text-gray-300 text-center mb-4">
              Interaktywny player demonstracyjny
            </p>
            <p className="text-gray-400 text-center">
              🚧 W trakcie budowy - wkrótce dostępny!
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Funkcje (planowane):</h2>
            <ul className="space-y-2 text-gray-300">
              <li>✅ Wyświetlanie paneli manga</li>
              <li>✅ Synchronizacja z audio narracją</li>
              <li>✅ Kontrolki playera (play, pause, next, prev)</li>
              <li>✅ Progress bar z timestampami</li>
              <li>✅ Panel highlighting podczas czytania</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <a 
              href="/"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              ← Powrót do strony głównej
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
