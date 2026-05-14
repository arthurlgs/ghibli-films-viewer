interface LoadingProps {
  message?: string;
}

export const Loading = ({ message = "Loading..." }: LoadingProps) => {
  return (
    <div className="py-32 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* This div creates a spinning circle using just Tailwind borders */}
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>


        <p className="text-xl font-semibold text-indigo-600 animate-pulse">
          {message}
        </p>
      </div>
    </div>
  );
};
