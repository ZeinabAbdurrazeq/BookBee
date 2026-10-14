'use client';

import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="vintage-dark">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Main */}
        <div className="footer-main flex flex-col md:flex-row justify-around items-center py-16 gap-8 md:gap-0">
          {/* Logo */}
          {/* <span className="text-2xl font-bold text-gray-900">ElECTECH For Industries</span> */}

          {/* Social Icons */}
          <div className="social flex gap-3">
            {/* LinkedIn */}
            <a
              href="#"
              className="soc-icon w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:opacity-70 transition-opacity"
              title="LinkedIn"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              className="soc-icon w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:opacity-70 transition-opacity"
              title="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="#"
              className="soc-icon w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:opacity-70 transition-opacity"
              title="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              className="soc-icon w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:opacity-70 transition-opacity"
              title="YouTube"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-4 h-4"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href="#"
              className="soc-icon w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:opacity-70 transition-opacity text-xs font-bold"
              title="Twitter"
            >
              𝕏
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom border-t border-gray-900 border-opacity-20 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <span className="text-xs text-gray-900">©ElECTECH 2026 All rights reserved.</span>

          <div className="fb-links flex flex-col md:flex-row items-center justify-center md:justify-end gap-8 flex-wrap">
            <a
              href="#"
              className="text-xs text-gray-900 hover:opacity-70 transition-opacity"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#"
              className="text-xs text-gray-900 hover:opacity-70 transition-opacity"
            >
              Privacy &amp; Cookie Policy
            </a>
            <a
              href="#"
              className="text-xs text-gray-900 hover:opacity-70 transition-opacity"
            >
              Modern Slavery Statement
            </a>

            {/* Scroll to Top Button */}
            {showScrollTop && (
              <button
                onClick={scrollToTop}
                className="scroll-top w-10 h-10 rounded-full border border-gray-900 flex items-center justify-center text-gray-900 hover:opacity-70 transition-opacity"
                title="Scroll to top"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4"
                >
                  <path d="M18 15l-6-6-6 6" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
