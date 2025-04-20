import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, School } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navbarClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <School className="text-orange-600 h-8 w-8" />
          <div>
            <h1 className="text-orange-600 font-bold text-lg md:text-xl">STAR Educational Trust</h1>
            <p className="text-xs text-orange-500 hidden md:block">Inspiring minds, shaping futures</p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive 
              ? "text-orange-600 font-medium" 
              : "text-gray-700 hover:text-orange-500"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive 
              ? "text-orange-600 font-medium" 
              : "text-gray-700 hover:text-orange-500"
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/facility" 
            className={({ isActive }) => 
              isActive 
              ? "text-orange-600 font-medium" 
              : "text-gray-700 hover:text-orange-500"
            }
          >
            Our Facility
          </NavLink>
          <NavLink 
            to="/activities" 
            className={({ isActive }) => 
              isActive 
              ? "text-orange-600 font-medium" 
              : "text-gray-700 hover:text-orange-500"
            }
          >
            Curricular Activities
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({ isActive }) => 
              isActive 
              ? "text-orange-600 font-medium" 
              : "text-gray-700 hover:text-orange-500"
            }
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive 
              ? "text-orange-600 font-medium" 
              : "text-gray-700 hover:text-orange-500"
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-orange-500 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 px-4 py-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive 
                ? "text-orange-600 font-medium" 
                : "text-gray-700 hover:text-orange-500"
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive 
                ? "text-orange-600 font-medium" 
                : "text-gray-700 hover:text-orange-500"
              }
              onClick={closeMenu}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/facility" 
              className={({ isActive }) => 
                isActive 
                ? "text-orange-600 font-medium" 
                : "text-gray-700 hover:text-orange-500"
              }
              onClick={closeMenu}
            >
              Our Facility
            </NavLink>
            <NavLink 
              to="/activities" 
              className={({ isActive }) => 
                isActive 
                ? "text-orange-600 font-medium" 
                : "text-gray-700 hover:text-orange-500"
              }
              onClick={closeMenu}
            >
              Curricular Activities
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                isActive 
                ? "text-orange-600 font-medium" 
                : "text-gray-700 hover:text-orange-500"
              }
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                isActive 
                ? "text-orange-600 font-medium" 
                : "text-gray-700 hover:text-orange-500"
              }
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;