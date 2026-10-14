"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../../public/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPinned, setIsPinned] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Set mounted flag to prevent hydration mismatch
    setIsMounted(true);

    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsPinned(true);
      } else {
        setIsPinned(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", name: "HOME", href: "/" },
    { id: "books", name: "BOOKS", href: "/books" },
    { id: "products", name: "PRODUCTS", href: "/products" },
    { id: "about", name: "WHO WE ARE", href: "/about" },
    { id: "contact", name: "CONTACT US", href: "/contact" },
    { id: "login", name: "LOGIN", href: "/login" },
    { id: "register", name: "REGISTER", href: "/register" },
  ];

  return (
    <nav
      className={`fixed left-0 right-0 z-50 flex items-center justify-center px-5 py-6 transition-all duration-300 vintage-dark ${
        isMounted && isPinned
          ? "top-0 rounded-none shadow-lg"
          : "top-4 left-4 right-4 rounded-xl shadow-md"
      }`}
    >
      {/* Logo */}
      <div className="absolute left-5">
        <Link href="/" className="flex items-center gap-2">
          <Image
            alt="ElECTECH Logo"
            src={Logo}
            width={70}
            height={50}
            priority
            style={{ width: "auto", height: "auto" }}
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="text-sm font-medium text-[var(--paper-bg)] hover:text-[var(--vintage-gold)] transition-colors duration-200"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden ml-auto p-2 vintage-dark-btn rounded-lg hover:opacity-80 transition-opacity"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          // Close Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-900"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          // Menu Icon
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-gray-900"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 lg:hidden vintage-dark transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } ${isMounted && isPinned ? "rounded-none shadow-lg" : "rounded-xl shadow-md mt-2"}`}
      >
        <div className="flex flex-col gap-4 p-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-medium text-gray-900 hover:text-orange-600 transition-colors duration-200 py-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
