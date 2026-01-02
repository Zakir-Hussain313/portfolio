// components/Hero.tsx
"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Hero() {
    const hoverIn = (el: HTMLElement) => {
        gsap.to(el, {
            y: -2,
            scale: 1.03,
            boxShadow: '0 10px 20px rgba(34,197,94,0.6)',
            duration: 0.25,
            ease: "power2.out",
        });
    };

    const hoverOut = (el: HTMLElement) => {
        gsap.to(el, {
            y: 0,
            scale: 1,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            duration: 0.25,
            ease: "power2.out",
        });
    };

    useEffect(() => {
        gsap.fromTo("#hero", { opacity: 0 }, { opacity: 1, duration: 0.4 });

        const tl = gsap.timeline({ ease: "power3.out" });

        tl.from("#hero-title", {
            y: 48,
            opacity: 0,
            duration: 0.8,
        })
            .from(
                "#hero-subtitle",
                {
                    y: 32,
                    opacity: 0,
                    duration: 0.6,
                },
                "-=0.4"
            )
            .from(
                "#hero-cta",
                {
                    y: 24,
                    opacity: 0,
                    duration: 0.6,
                },
                "-=0.3"
            );
    }, []);

    return (
        <section
            id="hero"
            className="min-h-screen bg-[#0B0B0B] flex items-center justify-center px-6 text-center overflow-hidden"
        >
            <div className="max-w-5xl mx-auto flex flex-col justify-center gap-6 h-full">
                <div className="flex flex-col mt-10 gap-6 flex-1 justify-center">
                    <h1
                        id="hero-title"
                        className="text-3xl md:text-5xl font-bold tracking-tight text-green-500"
                    >
                        Websites That Convert Visitors Into Customers
                    </h1>
                    <p
                        id="hero-subtitle"
                        className="md:text-2xl text-gray-400"
                    >
                        I build insanely converting websites with data-driven UX and smooth funnels, turning more clicks into paying customers.
                    </p>
                </div>

                <div id="hero-cta" className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="#demo"
                        onMouseEnter={(e) => hoverIn(e.currentTarget)}
                        onMouseLeave={(e) => hoverOut(e.currentTarget)}
                        className="px-7 py-3 rounded-2xl bg-green-500 text-black shadow-lg will-change-transform"
                    >
                        Contact Me
                    </Link>

                    <a
                        href="https://wa.me/923168021003"
                        onMouseEnter={(e) => hoverIn(e.currentTarget)}
                        onMouseLeave={(e) => hoverOut(e.currentTarget)}
                        className="px-7 py-3 rounded-2xl border-2 border-white/10 text-white shadow-lg will-change-transform"
                    >
                        WhatsApp Me
                    </a>
                </div>
            </div>
        </section>
    );
}