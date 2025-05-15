import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Why MeetKats", href: "#whymeetkats" },
    { name: "Events", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-2 bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center z-10">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            alt="MeetKats Logo"
            src="./image-1.png"
          />
          <div className="ml-2">
            <div className="font-serif font-bold text-gray-800 text-xl sm:text-2xl leading-tight">
              Meetkats
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="p-2 rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24}/> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-sans font-semibold text-black text-base hover:text-gray-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="font-sans font-semibold text-gray-900 text-base hover:text-gray-600 transition-colors ml-2"
          >
            Sign In
          </a>
          <button className="bg-red-400 px-4 py-2 rounded-lg shadow-md font-sans font-bold text-white hover:bg-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-300">
            Join the wanted
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-8 space-y-8 pt-20">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans font-semibold text-black text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a
              href="#"
              className="font-sans font-semibold text-gray-900 text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Sign In
            </a>
            <button className="bg-red-400 w-full py-3 rounded-lg shadow-md font-sans font-bold text-white" onClick={() => setIsMenuOpen(false)}>
              Join the wanted
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;