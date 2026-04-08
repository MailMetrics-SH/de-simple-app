function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Simple App
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          A modern React application built with TypeScript, Vite, and Tailwind CSS
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 max-w-2xl mx-auto">
          <p className="text-gray-700">
            This is a production-ready frontend application ready to be deployed to Azure App Services.
          </p>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-500 text-3xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">Fast Development</h3>
          <p className="text-gray-600">
            Built with Vite for lightning-fast hot module replacement and build times.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-500 text-3xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
          <p className="text-gray-600">
            Styled with Tailwind CSS for a modern and responsive user interface.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-blue-500 text-3xl mb-4">🔒</div>
          <h3 className="text-xl font-semibold mb-2">Type Safety</h3>
          <p className="text-gray-600">
            Powered by TypeScript to catch errors early and improve code quality.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
