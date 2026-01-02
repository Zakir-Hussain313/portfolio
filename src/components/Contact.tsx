// components/Contact.tsx
"use client";

import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    // Here you can integrate with an API like EmailJS, Next.js API route, or any backend service
  };

  return (
    <section className="bg-[#0B0B0B] text-white py-24 px-6" id="contact">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-500">Get In Touch</h2>
        <p className="text-gray-400 text-lg md:text-xl">
          I’m ready to help you build a high-converting website. Reach out via WhatsApp, Email, or send me a message below.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center gap-12 max-w-5xl mx-auto">
        {/* Buttons */}
        <div className="flex flex-col gap-6">
          <a
            href="https://wa.me/923168021003"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-8 py-4 bg-green-500 text-black rounded-2xl shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
          >
            <FaWhatsapp size={24} /> WhatsApp Me
          </a>

          <a
            href="mailto:your.email@example.com"
            className="flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/20 rounded-2xl shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
          >
            <FaEnvelope size={24} /> Email Me
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 flex flex-col gap-4 bg-gray-900/50 p-8 rounded-2xl shadow-lg"
        >
          {submitted && (
            <p className="text-green-500 font-semibold mb-2">Thanks! Your message has been sent.</p>
          )}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
            className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none resize-none"
          />
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-green-500 cursor-pointer text-black font-semibold rounded-2xl shadow-lg hover:shadow-green-500/50 transition-shadow duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
