import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-gray-50 font-sans">
        <Header />

        <main className="grow">
          <Outlet />
          {/* Header/Footer remain always present through different pages. Outlet is where the different pages are loaded.*/}
        </main>

        <Footer />
      </div>
    </>
  );
};
