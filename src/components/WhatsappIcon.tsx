// components/FloatingWhatsApp.tsx
"use client";

import { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { gsap } from 'gsap';

export default function FloatingWhatsApp() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  const hoverIn = () => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        scale: 1.1,
        boxShadow: '0 10px 20px rgba(34,197,94,0.6)',
        duration: 0.15,
        ease: 'power2.out',
      });
    }
  };

  const hoverOut = () => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        scale: 1,
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        duration: 0.15,
        ease: 'power2.out',
      });
    }
  };

  return (
    <a
      ref={btnRef}
      href="https://wa.me/923168021003"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 z-50"
    >
      <FaWhatsapp size={28} />
    </a>
  );
}