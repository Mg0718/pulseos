import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Zap, Shield, BarChart3, Layers, Rocket } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
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

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-darkBackground dark:via-darkBackground dark:to-sidebarBackground relative overflow-hidden">
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(111, 45, 189, 0.1) 0%, transparent 50%),
        }}
        animate={{
          background: radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(111, 45, 189, 0.1) 0%, transparent 50%),
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="relative overflow-hidden py-20 sm:py-32"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/5 via-wine-600/5 to-purple-700/5 dark:from-sidebarHighlight/10 dark:via-wine-600/10 dark:to-purple-700/10"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <motion.h1 
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-slate-900 dark:text-white mb-2">Welcome to</span>
                <motion.span 
                  className="block bg-gradient-to-r from-purple-800 via-wine-600 to-purple-700 dark:from-sidebarHighlight dark:via-wine-400 dark:to-purple-400 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  PulseOS
                </motion.span>
              </motion.h1>
              <motion.p 
                className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-600 dark:text-gray-300 leading-relaxed mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The Operating System for Modern Global Teams — unify planning, performance, payments & people with one platform.
              </motion.p>
              <motion.button 
                onClick={handleGetStarted}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 to-wine-600 dark:from-sidebarHighlight dark:to-wine-500 hover:from-purple-800 hover:to-wine-700 dark:hover:from-sidebarHighlight/90 dark:hover:to-wine-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl dark:shadow-glow transform hover:-translate-y-0.5 transition-all duration-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          id="features" 
          className="py-20 sm:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-darkBackground dark:to-sidebarBackground"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why PulseOS?
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-gray-300">
                Discover the powerful features that make PulseOS the ultimate platform for modern teams.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="group bg-white dark:bg-sidebarBackground rounded-2xl p-8 shadow-md hover:shadow-xl dark:shadow-glow transition-all duration-300 border border-purple-100 dark:border-sidebarHighlight/20 hover:border-purple-200 dark:hover:border-sidebarHighlight/40"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-r from-purple-100 to-wine-100 dark:from-sidebarHighlight/20 dark:to-wine-600/20 rounded-xl flex items-center justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <IconComponent className="w-6 h-6 text-purple-700 dark:text-sidebarHighlight" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;