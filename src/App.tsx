'use client';

import { motion } from 'framer-motion';
import { Button } from './components/ui/button'; 
import { ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function App() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative overflow-hidden dark:bg-darkBackground text-white min-h-screen px-4 md:px-16 py-24 space-y-32 font-sans">
      <div
        className="absolute inset-0 -z-10 blur-3xl opacity-30 transition-transform duration-300"
        ref={backgroundRef}
        style={{
          background: 'radial-gradient(circle at center, #6F2DBD, #181825)',
        }}
      />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center space-y-4"
      >
        <h1 className="text-5xl font-bold tracking-tight">
          Welcome to <span className="text-wine-400">PulseOS</span>
        </h1>
        <p className="text-lg text-muted max-w-xl mx-auto">
          The Operating System for Modern Global Teams — unify planning, performance, payments & people with one platform.
        </p>
        <Button className="mt-6 text-base px-6 py-3 shadow-glow-lg">
          Get Started <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h2 className="text-3xl font-bold">🚫 Why Business Systems Fail</h2>
        <ul className="list-disc pl-6 space-y-2 text-wine-200">
          <li>Disjointed tools and scattered workflows</li>
          <li>Lack of automation, explainability, or blockchain security</li>
          <li>Outdated, clunky interfaces and poor onboarding</li>
          <li>Zero role-based intelligence or decision support</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto space-y-6"
      >
        <h2 className="text-3xl font-bold">✅ The PulseOS Edge</h2>
        <ul className="list-disc pl-6 space-y-2 text-wine-100">
          <li>One unified system for operations, finance, HR & performance</li>
          <li>AI-first workflows with role-based views</li>
          <li>PulsePay: built-in payment analytics & blockchain security</li>
          <li>Vertical templates & onboarding studio for fast launches</li>
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center space-y-4"
      >
        <p className="text-lg">🚀 Ready to transform your work?</p>
        <Button className="px-6 py-3 text-lg font-semibold bg-wine-500 hover:bg-wine-600 transition-colors shadow-glow-lg">
          Register Now
        </Button>
      </motion.section>
    </main>
  );
}
