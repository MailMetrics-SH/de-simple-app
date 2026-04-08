import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'bg-blue-700 text-white'
      : 'text-blue-100 hover:bg-blue-600'
  }

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-4 items-center">
              <Link
                to="/"
                className="text-white text-xl font-bold hover:text-blue-100 transition"
              >
                Simple App
              </Link>
              <div className="flex space-x-2 ml-8">
                <Link
                  to="/"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition ${isActive('/')}`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition ${isActive('/about')}`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`px-4 py-2 rounded-md text-sm font-medium transition ${isActive('/contact')}`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} Simple App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
