import { Link, useLocation } from "react-router-dom";
import { BarChart3, Info, BookOpen } from "lucide-react";
import HeartBeatIcon from "./HeartBeatIcon";
import { useState } from "react";

const Header = () => {
  const location = useLocation();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gradient-to-r from-purple-900 via-rose-800 to-purple-900 text-white shadow-lg sticky top-0 z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-rose-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center space-x-2 text-2xl font-bold group"
            onMouseEnter={() => setHoveredLink("logo")}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <HeartBeatIcon
              size={32}
              className="text-rose-300 group-hover:text-rose-200 transition-colors"
              interval={hoveredLink === "logo" ? 800 : 2000}
            />
            <span className="bg-gradient-to-r from-rose-200 to-purple-200 bg-clip-text text-transparent relative">
              Voices Unsilenced
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-300/50 group-hover:w-full transition-all duration-500"></span>
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/")
                  ? "bg-rose-600 text-white shadow-lg"
                  : "hover:bg-rose-700/50 hover:text-rose-200"
              }`}
              onMouseEnter={() => setHoveredLink("home")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <HeartBeatIcon
                size={16}
                interval={hoveredLink === "home" || isActive("/") ? 800 : 2000}
              />
              <span>Home</span>
            </Link>

            <Link
              to="/about"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/about")
                  ? "bg-rose-600 text-white shadow-lg"
                  : "hover:bg-rose-700/50 hover:text-rose-200"
              }`}
              onMouseEnter={() => setHoveredLink("about")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <Info
                className={`w-4 h-4 ${hoveredLink === "about" ? "animate-bounce-gentle" : ""}`}
              />
              <span>About</span>
            </Link>

            <Link
              to="/resources"
              className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive("/resources")
                  ? "bg-rose-600 text-white shadow-lg"
                  : "hover:bg-rose-700/50 hover:text-rose-200"
              }`}
              onMouseEnter={() => setHoveredLink("resources")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              <BookOpen
                className={`w-4 h-4 ${hoveredLink === "resources" ? "animate-bounce-gentle" : ""}`}
              />
              <span>Resources</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
