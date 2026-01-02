// components/Testimonials.tsx
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } });
    }
    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: subtitleRef.current, start: 'top 85%' } });
    }

    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.2, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  const testimonials = [
    { 
      name: 'Sarah Mitchell', 
      role: 'Founder & CEO, BrightTech', 
      quote: 'Working with him transformed our website. Our signup rate jumped 60% within the first month!' 
    },
    { 
      name: 'David Lee', 
      role: 'Head of Marketing, EcoGoods', 
      quote: 'The UX and funnel improvements were next level. Customers are converting like never before.' 
    },
    { 
      name: 'Priya Sharma', 
      role: 'Product Manager, SaaSFlow', 
      quote: 'Extremely professional and results-driven. The website looks amazing and converts beautifully.' 
    },
  ];

  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-green-500">What Clients Say</h2>
        <p ref={subtitleRef} className="text-gray-400 text-lg md:text-xl">
          Hear from some of the clients who saw their conversions skyrocket.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <div key={i} ref={addToRefs} className="bg-[#111111] p-6 rounded-2xl shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
            <p className="text-gray-300 mb-4">&quot;{t.quote}&quot;</p>
            <h4 className="text-green-500 font-semibold">{t.name}</h4>
            <p className="text-gray-400 text-sm">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a href="#contact" className="px-10 py-4 rounded-2xl bg-green-500 text-black font-semibold shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
          Work With Me
        </a>
      </div>
    </section>
  );
}
