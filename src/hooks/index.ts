import { useQuery } from "@tanstack/react-query"
import type { Film } from "../types"

const fetchFilms = async (): Promise<Film[]> => {
    const response = await fetch('https://ghibliapi.vercel.app/films')


    if(!response.ok) {
        throw new Error('Error connecting to Studio Ghibli API.')
    }

    const data: Film[] = await response.json()

    const sortedFilms = data.sort((a, b) => a.title.localeCompare(b.title))

    return sortedFilms.slice(0, 10)
}

export const useFilms = () => {
    return useQuery({
        queryKey: ['films'],
        queryFn: fetchFilms,
        staleTime: 1000 * 60 * 5
    })
}