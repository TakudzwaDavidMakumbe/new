import React, { useState } from "react";
import Logo from "../assets/SVG (2).png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full flex px-6 md:px-16 py-6 justify-between items-center h-full bg-white shadow">
            <div className="h-full flex items-center">
                <img src={Logo} alt="Logo" className="h-10 w-auto" />
            </div>

            {/* Hamburger Icon */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block h-0.5 w-6 bg-gray-700 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
            </button>

            {/* Desktop Menu */}
            <nav className="hidden md:flex justify-center items-center space-x-4">
                <a href="#home" className="text-gray-700 hover:text-blue-500">Startups</a>
                <a href="#about" className="text-gray-700 hover:text-blue-500">Enterprise</a>
                <a href="#services" className="text-gray-700 hover:text-blue-500">Pricing</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-500">Resources</a>
                <a href="#blog" className="text-gray-700 hover:text-blue-500">Login</a>
                <button className="bg-[#213c88] text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300 ml-2">
                    Contact Us
                </button>
            </nav>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-md z-50 md:hidden">
                    <nav className="flex flex-col items-center space-y-4 py-6">
                        <a href="#home" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Startups</a>
                        <a href="#about" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Enterprise</a>
                        <a href="#services" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Pricing</a>
                        <a href="#contact" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Resources</a>
                        <a href="#blog" className="text-gray-700 hover:text-blue-500" onClick={() => setMenuOpen(false)}>Login</a>
                        <button className="bg-[#213c88] text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" onClick={() => setMenuOpen(false)}>
                            Contact Us
                        </button>
                    </nav>
                </div>
            )}
        </div>
    );
};

export default Navbar;
