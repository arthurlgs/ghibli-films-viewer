import { useQuery } from "@tanstack/react-query"
import type { Film } from "../types"

export const base_URL = 'https://ghibliapi.vercel.app'

const fetchFilms = async (): Promise<Film[]> => {
    const response = await fetch(`${base_URL}/films`)


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