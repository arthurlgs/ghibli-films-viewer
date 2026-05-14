export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
      <div>
        <p>
          &copy; {currentYear} GhibliExplorer. Developed during the DevQuest
          course.
        </p>
        <p className="mt-2 text-gray-400 text-xs">
          Data provided by Studio Ghibli API. Not affiliated with Studio Ghibli.
        </p>
      </div>
    </footer>
  );
};
