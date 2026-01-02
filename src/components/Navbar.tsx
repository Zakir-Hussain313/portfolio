// components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { gsap } from 'gsap';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      });
    }
  }, []);

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (isOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: 'auto', opacity: 1, duration: 0.5, ease: 'power3.out' }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.4,
        ease: 'power3.in',
      });
    }
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0B0B0B]/80 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-green-500 transition-colors duration-300"
        >
          Zakir Hussain
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-white">
          {['Home', 'Demo', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="relative group">
              <Link
                href={`#${item.toLowerCase()}`}
                className="transition-colors duration-300 hover:text-green-500"
              >
                {item}
              </Link>
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div
          className="md:hidden cursor-pointer text-white"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        ref={mobileMenuRef}
        className="md:hidden overflow-hidden px-6 font-medium bg-[#0B0B0B] border-t border-white/10"
        style={{ height: 0, opacity: 0 }}
      >
        {['Home', 'Demo', 'Projects', 'Contact'].map((item) => (
          <li
            key={item}
            className="py-4 border-b border-white/10 last:border-none"
          >
            <Link
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block w-full text-white hover:text-green-500 transition-colors duration-300"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}