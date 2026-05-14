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
    <main>
      <h1>Studio Ghibli Catalog</h1>

      <div>
        {films?.map((film) => (
          <Link to={`/films/${film.id}`} key={film.id}>
            <div>
              <img src={film.movie_banner} alt={`Banner for ${film.title}`} />
            </div>

            <div>
              <h2>{film.title}</h2>
              <p>Click to view details &rarr;</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
