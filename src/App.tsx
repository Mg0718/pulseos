import React from 'react';
import { ArrowRight, Users, Zap, Shield, BarChart3, Layers, Rocket } from 'lucide-react';
import Sidebar from './components/Sidebar';

function App() {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50 dark:from-darkBackground dark:via-darkBackground dark:to-sidebarBackground flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white/80 dark:bg-sidebarBackground/80 backdrop-blur-md border-b border-purple-100 dark:border-sidebarHighlight/20 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-800 via-wine-600 to-purple-700 dark:from-sidebarHighlight dark:via-wine-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Welcome to PulseOS
                </h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a href="#features" className="text-slate-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-sidebarHighlight transition-colors font-medium">
                  Features
                </a>
                <a href="#contact" className="text-slate-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-sidebarHighlight transition-colors font-medium">
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-800/5 via-wine-600/5 to-purple-700/5 dark:from-sidebarHighlight/10 dark:via-wine-600/10 dark:to-purple-700/10"></div>
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
                <span className="block text-slate-900 dark:text-white mb-2">Welcome to</span>
                <span className="block bg-gradient-to-r from-purple-800 via-wine-600 to-purple-700 dark:from-sidebarHighlight dark:via-wine-400 dark:to-purple-400 bg-clip-text text-transparent">
                  PulseOS
                </span>
              </h1>
              <p className="max-w-3xl mx-auto text-xl sm:text-2xl text-slate-600 dark:text-gray-300 leading-relaxed mb-12">
                The Operating System for Modern Global Teams — unify planning, performance, payments & people with one platform.
              </p>
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 to-wine-600 dark:from-sidebarHighlight dark:to-wine-500 hover:from-purple-800 hover:to-wine-700 dark:hover:from-sidebarHighlight/90 dark:hover:to-wine-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl dark:shadow-glow transform hover:-translate-y-0.5 transition-all duration-200">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-32 bg-gradient-to-b from-white to-slate-50 dark:from-darkBackground dark:to-sidebarBackground">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-6">
                Why PulseOS?
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-gray-300">
                Discover the powerful features that make PulseOS the ultimate platform for modern teams.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white dark:bg-sidebarBackground rounded-2xl p-8 shadow-md hover:shadow-xl dark:shadow-glow transition-all duration-300 border border-purple-100 dark:border-sidebarHighlight/20 hover:border-purple-200 dark:hover:border-sidebarHighlight/40 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-wine-100 dark:from-sidebarHighlight/20 dark:to-wine-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-6 h-6 text-purple-700 dark:text-sidebarHighlight" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-slate-900 via-purple-900 to-wine-900 dark:from-sidebarBackground dark:via-darkBackground dark:to-sidebarBackground text-white py-12">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-sidebarHighlight to-wine-400 bg-clip-text text-transparent">PulseOS</h3>
                <p className="text-slate-300 dark:text-gray-400">The Operating System for Modern Global Teams</p>
              </div>
              <div className="border-t border-purple-800 dark:border-sidebarHighlight/20 pt-8">
                <p className="text-slate-400 dark:text-gray-500">
                  © 2025 PulseOS Inc. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;