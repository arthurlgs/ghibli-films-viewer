import { Link } from "react-router-dom";

interface ErrorMessageProps {
  message?: string;
  showHomeLink?: boolean;
}

export const ErrorMessage = ({
  message = "An error occurred. Please try again.",
  showHomeLink = false,
}: ErrorMessageProps) => {
  return (
    <div className="py-32 flex flex-col items-center justify-center gap-5 text-center px-4">
      <p className="text-2xl font-bold text-red-500">{message}</p>

      {showHomeLink && (
        <Link
          to="/"
          className="text-indigo-600 hover:text-indigo-800 hover:underline font-medium transition-colors bg-indigo-50 px-6 py-2 rounded-full border border-indigo-100"
        >
          &larr; Back to catalog
        </Link>
      )}
    </div>
  );
};
