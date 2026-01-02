// components/ConversionDemo.tsx
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ConversionDemo() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate title
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } });
    }

    // Animate subtitle
    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: subtitleRef.current, start: 'top 85%' } });
    }

    // Animate cards
    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.2, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
    });
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="bg-[#0B0B0B] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-4 -mt-6 text-green-500">
          Websites That Actually Sell
        </h2>
        <p ref={subtitleRef} className="text-gray-400 text-lg md:text-xl">
          Check out a live example of how I turn clicks into paying customers with high-converting UX.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {[
          {
            title: 'The Challenge',
            desc: 'Visitors were leaving before completing purchases.',
          },
          {
            title: 'Our Approach',
            desc: 'Redesigned the funnel with clear CTAs, microcopy, and visual cues.',
          },
          {
            title: 'The Outcome',
            desc: 'Boosted conversions by 45% within two weeks, increasing revenue significantly.',
          },
        ].map((card, i) => (
          <div
            key={i}
            ref={addToRefs}
            className="bg-[#111111] p-8 rounded-2xl shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
          >
            <h3 className="text-xl font-semibold mb-4 text-green-500">{card.title}</h3>
            <p className="text-gray-400">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}