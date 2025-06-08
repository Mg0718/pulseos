import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap, Shield, BarChart3, Layers, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    document.documentElement.classList.add('dark'); // Force dark mode
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: Users,
      title: "Unified Platform",
      description: "Connect HR, finance, ops & strategy in one command center."
    },
    {
      icon: Zap,
      title: "Middleware Ready",
      description: "Easily integrate with your favorite SaaS tools & APIs."
    },
    {
      icon: Shield,
      title: "Blockchain Security",
      description: "Zero Trust and explainable AI powered by invisible blockchain."
    },
    {
      icon: BarChart3,
      title: "PulsePay Analytics",
      description: "Integrated payments with CFO dashboards and smart spend management."
    },
    {
      icon: Layers,
      title: "Templates for Every Industry",
      description: "From legal to education — launch with prebuilt vertical stacks."
    },
    {
      icon: Rocket,
      title: "Agile Innovation Studio",
      description: "Build, ship, and lead with real-time feedback and performance loops."
    }
  ];

  return (
    <div className="min-h-screen bg-darkBackground text-white relative overflow-hidden">
      {/* Interactive violet glow background */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(111, 45, 189, 0.15) 0%, transparent 50%)`,
        }}
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(111, 45, 189, 0.15) 0%, transparent 50%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      <Header />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 sm:py-32 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block">Welcome to</span>
            <span className="block bg-gradient-to-r from-sidebarHighlight via-wine-500 to-purple-500 bg-clip-text text-transparent">
              PulseOS
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-300 leading-relaxed mb-10">
            The Operating System for Modern Global Teams — unify planning, performance, payments & people with one platform.
          </p>
          <motion.button
            onClick={() => navigate('/login')}
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-sidebarHighlight to-wine-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-glow hover:shadow-glow-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </section>

        {/* Features Section */}
        <section className="py-24 sm:py-32 bg-gradient-to-b from-darkBackground to-sidebarBackground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6">Why PulseOS?</h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-400 mb-14">
              Discover the powerful features that make PulseOS the ultimate platform for modern teams.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={i}
                    className="bg-sidebarBackground p-8 rounded-2xl border border-sidebarHighlight/10 hover:border-sidebarHighlight/30 shadow transition-all duration-300 hover:shadow-glow"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 mb-6 mx-auto flex items-center justify-center rounded-xl bg-sidebarHighlight/10 text-sidebarHighlight">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default App;
