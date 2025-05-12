import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 font-bold hover:scale-125 duration-700">
            UnknownMind
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-x-6 items-center text-white">
            <NavLinks />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 text-white flex items-center flex-col gap-4">
          <NavLinks onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

// Reusable Link Component
const NavLinks = ({ onClick }) => (
  <>
    <Link to="/" onClick={onClick} className="hover:text-cyan-400 transition hover:scale-110">
      Home
    </Link>
    <Link to="/hero2" onClick={onClick} className="hover:text-cyan-400 transition hover:scale-110">
      About Us
    </Link>
    <Link to="/hero3" onClick={onClick} className="hover:text-cyan-400 transition hover:scale-110">
      Image Gallery
    </Link>
    <Link to="/hero4" onClick={onClick} className="hover:text-cyan-400 transition hover:scale-110">
      Our Services
    </Link>
    <Link to="/hero5" onClick={onClick} className="hover:text-cyan-400 transition hover:scale-110">
      Our Team
    </Link>
    <Link to="/hero6" onClick={onClick} className="hover:text-cyan-400 transition hover:scale-110">
      Contact Us
    </Link>
    <a href="#footer" onClick={onClick}>
      <button className="border-2 px-5 py-1 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold rounded-md transition hover:scale-110 mt-2 md:mt-0">
        Footer
      </button>
    </a>
  </>
);

export default Nav;
