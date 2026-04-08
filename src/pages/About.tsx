function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
        
        <div className="prose prose-lg">
          <p className="text-gray-700 mb-4">
            This is a simple frontend application demonstrating the power of modern web technologies.
          </p>
          
          <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Tech Stack</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>React 18:</strong> A JavaScript library for building user interfaces
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>TypeScript:</strong> Typed superset of JavaScript for better development experience
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Vite:</strong> Next-generation frontend tooling for faster development
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>React Router:</strong> Declarative routing for React applications
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-700">
                  <strong>Tailwind CSS:</strong> Utility-first CSS framework for rapid UI development
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Production Ready</h3>
            <p className="text-gray-700">
              This application is configured for production deployment to Azure App Services with 
              optimized build settings, proper routing configuration, and production-grade dependencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
