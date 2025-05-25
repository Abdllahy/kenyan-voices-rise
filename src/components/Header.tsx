import { Link, useLocation } from 'react-router-dom';
import { Heart, BarChart3, Info, BookOpen } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 via-rose-800 to-purple-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Heart className="w-8 h-8 text-rose-300" />
            <span className="bg-gradient-to-r from-rose-200 to-purple-200 bg-clip-text text-transparent">
              Voices Unsilenced
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                ? 'bg-rose-600 text-white shadow-lg' 
                : 'hover:bg-rose-700/50 hover:text-rose-200'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Home</span>
            </Link>
            
            <Link 
              to="/about" 
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                ? 'bg-rose-600 text-white shadow-lg' 
                : 'hover:bg-rose-700/50 hover:text-rose-200'
              }`}
            >
              <Info className="w-4 h-4" />
              <span>About</span>
            </Link>
            
            <Link 
              to="/resources" 
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/resources') 
                ? 'bg-rose-600 text-white shadow-lg' 
                : 'hover:bg-rose-700/50 hover:text-rose-200'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Resources</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
