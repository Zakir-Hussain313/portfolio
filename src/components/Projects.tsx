// components/SingleDemo.tsx
"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: titleRef.current, start: 'top 85%' } });
    }

    if (subtitleRef.current) {
      gsap.fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power3.out', scrollTrigger: { trigger: subtitleRef.current, start: 'top 85%' } });
    }

    if (imageRef.current) {
      gsap.fromTo(imageRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: imageRef.current, start: 'top 85%' } });
    }

    cardsRef.current.forEach((card, i) => {
      gsap.fromTo(card, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, delay: i * 0.2, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 85%' } });
    });

    if (ctaRef.current) {
      gsap.fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.5, ease: 'power3.out', scrollTrigger: { trigger: ctaRef.current, start: 'top 90%' } });
    }
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 ref={titleRef} className="text-3xl md:text-4xl font-bold mb-4 text-green-500">Conversion Demo</h2>
        <p ref={subtitleRef} className="text-gray-400 text-lg md:text-xl">
          A live example of how I turn clicks into paying customers with high-converting UX.
        </p>
      </div>

      <div ref={imageRef} className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-lg">
        <Image src="/Screenshot (30).png" alt="Demo Screenshot" width={1200} height={700} style={{ objectFit: 'cover' }} />
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
        {[
          { title: 'The Challenge', desc: 'Visitors were leaving before completing purchases.' },
          { title: 'Our Approach', desc: 'Redesigned funnels with clear CTAs, UX tweaks, and persuasive copy.' },
          { title: 'The Outcome', desc: 'Increased conversions by 45% within two weeks.' },
        ].map((card, i) => (
          <div key={i} ref={addToRefs} className="bg-[#111111] p-8 rounded-2xl shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-4 text-green-500">{card.title}</h3>
            <p className="text-gray-400">{card.desc}</p>
          </div>
        ))}
      </div>

      <div ref={ctaRef} className="flex justify-center">
        <a href="https://wa.me/923168021003" className="px-10 py-4 rounded-2xl bg-green-500 text-black font-semibold shadow-lg hover:shadow-green-500/50 transition-shadow duration-300">
          View Live Demo
        </a>
      </div>
    </section>
  );
}