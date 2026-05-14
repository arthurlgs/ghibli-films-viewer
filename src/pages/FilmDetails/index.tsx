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
    <main>
      <Link to="/">&larr; Back to Home</Link>

      <div>
        <div>
          <img src={film.image} alt={`Poster for ${film.title}`} />
        </div>

        <div>
          <div>
            <h1>{film.title}</h1>
            <span>🍅 {film.rt_score}%</span>
          </div>

          <p>{film.description}</p>

          <div>
            <div>
              <p>Director</p>
              <p>{film.director}</p>
            </div>

            <div>
              <p>Producer</p>
              <p>{film.producer}</p>
            </div>

            <div>
              <p>Release Date</p>
              <p>{film.release_date}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
