import { Link } from 'react-router-dom'
import { useFilms } from '../../hooks'

export default function Home() {
    const { data: films, isLoading, isError } = useFilms()

    if (isLoading) {
        return (
            <div>
                <p>Loading films...</p>
            </div>
        )
    }

    if (isError) {
        return (
            <div>
                <p>Error loading films. Please try again later.</p>
            </div>
        )
    }

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
    )
}