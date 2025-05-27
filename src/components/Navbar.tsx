import { useState, useEffect } from "react";
import "../styles/main.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            IB
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="nav-item">About</a>
            <a href="#skills" className="nav-item">Competenze</a>
            <a href="#education" className="nav-item">Formazione</a>
            <a href="#contact" className="nav-item">Contatti</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;