import { Link } from "react-router-dom";
import { base_URL } from "../../hooks";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors"
        >
          🎬 GhibliExplorer
        </Link>

        <nav>
          <ul className="flex gap-6 text-gray-600 font-medium">
            <li>
              <Link to="/" className="hover:text-indigo-600 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <a
                href={`${base_URL}/`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-600 transition-colors"
              >
                API Docs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
