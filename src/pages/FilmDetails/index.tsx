import { useParams, Link } from "react-router-dom";
import { useFilm } from "../../hooks";
import { Loading } from "../../components/loading";
import { ErrorMessage } from "../../components/ErrorMessage";

export default function FilmDetails() {
  const { id } = useParams<{ id: string }>();
  const { data: film, isLoading, isError } = useFilm(id);

  if (isLoading) return <Loading message="Fetching details..." />;
  if (isError || !film)
    return (
      <ErrorMessage
        message="Oops! We couldn't find this film."
        showHomeLink={true}
      />
    );

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Link
        to="/"
        className="inline-flex items-center text-gray-500 hover:text-indigo-600 font-medium mb-8 transition-colors"
      >
        &larr; Return to home
      </Link>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
        <div className="md:w-1/3 shrink-0">
          <img
            src={film.image}
            alt={`film poster ${film.title}`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 md:w-2/3 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <h1 className="text-4xl font-extrabold text-gray-800">
              {film.title}
            </h1>
            <span className="bg-green-100 text-green-800 text-sm font-bold px-3 py-1 rounded-full border border-green-200">
              🍅 {film.rt_score}%
            </span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {film.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-gray-50 p-6 rounded-xl border border-gray-100">
            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                Director
              </p>
              <p className="text-gray-900 font-medium text-lg">
                {film.director}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                Producer
              </p>
              <p className="text-gray-900 font-medium text-lg">
                {film.producer}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                Release date
              </p>
              <p className="text-gray-900 font-medium text-lg">
                {film.release_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
