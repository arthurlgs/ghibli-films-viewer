import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('../pages/Home'))
const FilmDetails = lazy (() => import ('../pages/FilmDetails'))

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/films/:id" element={<FilmDetails />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}