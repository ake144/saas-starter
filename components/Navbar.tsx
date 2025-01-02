"use client";

import { ArrowRight, Sun, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-[55] transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg"
          : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-opacity-90"
      }`}
    >
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex-shrink-0">
            <span className="sr-only">Your Company</span>
            <svg
              className="h-8 w-auto text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="text-sm text-gray-100 hover:text-gray-200 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-100 hover:text-gray-200 transition-colors"
          >
            Services
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-100 hover:text-gray-200 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm text-gray-100 hover:text-gray-200 transition-colors"
          >
            About
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-white p-2 focus:outline-none"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-white">
            <Sun className="h-5 w-5" />
          </Button>
          <Link href="/sign-in">
            <Button className="bg-white text-purple-600 hover:bg-gray-100">
              Start Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-20 left-0 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg border-t border-purple-700">
          <ul className="flex flex-col items-center space-y-4 py-6">
            <li>
              <Link
                href="#"
                className="text-sm text-gray-100 hover:text-gray-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-100 hover:text-gray-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-100 hover:text-gray-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-sm text-gray-100 hover:text-gray-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link href="/sign-in">
                <Button className="bg-white text-purple-600 hover:bg-gray-100">
                  Start Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavBar;
