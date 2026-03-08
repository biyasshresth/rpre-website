const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] text-white text-center px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-300 mb-6">Page Not Found</p>
      <a
        href="/"
        className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 transition rounded-md"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default NotFound;
