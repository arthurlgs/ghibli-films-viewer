import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout";

const Home = lazy(() => import("../pages/Home"));
const FilmDetails = lazy(() => import("../pages/FilmDetails"));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-xl font-bold text-gray-600">
            Loading page...
          </div>
        }
      >
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/films/:id" element={<FilmDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
