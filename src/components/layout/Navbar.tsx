import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import "../../css/navbar.css"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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

  const handleHomeClick = () => {
    navigate('/', { replace: true });
    closeMenu(); // Also close mobile menu if open
  };

  const navbarClasses = `fixed bg-white w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const navLinks = [
    { to: "/", label: "Home", onClick: handleHomeClick },
    { to: "/about", label: "About Us" },
    { to: "/facility", label: "Our Facility" },
    { to: "/activities", label: "Curricular Activities" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact Us" }
  ];

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center space-x-2" onClick={handleHomeClick}>
          <img 
            src="https://littlestarintschool.in/wp-content/uploads/2021/07/little-star-international-school-1-e1625121318243.jpg" 
            alt="" 
            height={40} 
            width={30} 
          />
          <div>
            <h1 className="font-bold text-lg md:text-xl">STAR Educational Trust</h1>
            <p className="text-xs text-black hidden md:block">Inspiring minds, shaping futures</p>
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map(({ to, label, onClick }) => (
            <NavLink 
              key={to}
              to={to}
              onClick={onClick}
              className={({ isActive }) => 
                isActive 
                  ? "text-blue-600 font-medium" 
                  : "text-gray-700 hover:text-[#054c9f]"
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-[#054c9f] focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4 px-4 py-6">
            {navLinks.map(({ to, label, onClick }) => (
              <NavLink 
                key={to}
                to={to}
                onClick={onClick ?? closeMenu}
                className={({ isActive }) => 
                  isActive 
                    ? "text-[#054c9f] font-medium" 
                    : "text-gray-700 hover:text-[#054c9f]"
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
