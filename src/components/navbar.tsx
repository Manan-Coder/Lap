
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-space-darker bg-opacity-90' : 'bg-transparent'} backdrop-blur-md border-b border-white/10`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-bold text-2xl relative">
            MS<span className="text-white">.</span>
            <div className="absolute -bottom-1 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full"></div>
          </Link>

          {/*desktop*/}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: '/', label: 'Home' },
              { path: '/projects', label: 'Projects' },
              { path: '/skills', label: 'Skills' },
              { path: '/blog', label: 'Blog' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                className={`text-white hover:text-white transition-colors relative group ${location.pathname === item.path ? 'font-bold' : ''}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com/Manan-Coder" target="_blank" rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-full">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/manan-sharma-434091281/" target="_blank" rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-full">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com/Manan-Coder/manan.is.a-dev" target="_blank" rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-full">
              <Code size={18} />
            </a>
          </div>

          {/*mobile*/}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white hover:bg-white/10"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {

        }
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 bg-space-darker bg-opacity-95 backdrop-blur-lg pt-20">
            <div className="flex flex-col space-y-2 px-4 py-4">
              {[
                { path: '/', label: 'Home' },
                { path: '/projects', label: 'Projects' },
                { path: '/skills', label: 'Skills' },
                { path: '/blog', label: 'Blog' },
                { path: '/contact', label: 'Contact' }
              ].map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={`text-white hover:text-white transition-colors text-xl px-4 py-3 border-b border-white/10 ${location.pathname === item.path ? 'font-bold' : ''}`}
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="flex space-x-6 mt-6 px-4 py-4 border-t border-white/10">
                <a href="https://github.com/Manan-Coder" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/manan-sharma-434091281/" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Linkedin size={20} />
                </a>
                <a href="https://github.com/Manan-Coder/manan.is.a-dev" target="_blank" rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                  <Code size={20} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
