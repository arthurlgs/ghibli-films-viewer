import { Link } from "react-router-dom";
import { useFilms } from "../../hooks";
import { ErrorMessage } from "../../components/ErrorMessage";
import { Loading } from "../../components/loading";

export default function Home() {
  const { data: films, isLoading, isError } = useFilms();

  if (isLoading) return <Loading message="Loading films..." />;
  if (isError)
    return (
      <ErrorMessage message="Error loading films. Please try again later" />
    );

  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Catálogo Studio Ghibli
      </h1>

      {/* Responsive grid: 1 collumn (mobile), 2 (tablet), 3 (desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {films?.map((film) => (
  
          <Link
            to={`/films/${film.id}`}
            key={film.id}
            className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={film.movie_banner}
                alt={`Film banner ${film.title}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {film.title}
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Click to view details &rarr;
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
