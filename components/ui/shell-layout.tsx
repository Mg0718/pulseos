'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  AlignLeft,
  LayoutDashboard,
  Bot,
  BarChart3,
  Users,
  CalendarCheck,
  MessageCircle,
  TreeDeciduous,
  MessageSquare,
  Megaphone,
  Target,
  UserCheck,
  RotateCcw,
  Wallet,
  FileText,
  Banknote,
  BarChart,
  Zap,
  Plug,
  ScrollText,
  ShieldCheck,
  Package,
  Ticket,
  TabletSmartphone,
  Lightbulb,
  Flame,
  Trophy,
  Settings,
  CreditCard,
  Sparkles,
  Key,
  LifeBuoy,
  UserCircle,
  LogOut,
  Bell,
  Search,
  Menu,
  X,
} from 'lucide-react';

interface SidebarItem {
  label: string;
  icon: React.ComponentType<any>;
  route: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

interface ShellLayoutProps {
  children: React.ReactNode;
}

const ShellLayout: React.FC<ShellLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const sections: SidebarSection[] = [
    {
      title: 'Intelligence',
      items: [
        { label: 'Dashboard', icon: LayoutDashboard, route: '/dashboard' },
        { label: 'PulseBot AI', icon: Bot, route: '/ai' },
        { label: 'Analytics Hub', icon: BarChart3, route: '/analytics' },
      ],
    },
    {
      title: 'People & Teams',
      items: [
        { label: 'Teams', icon: Users, route: '/teams' },
        { label: 'Users', icon: UserCircle, route: '/users' },
        { label: 'Leave Tracker', icon: CalendarCheck, route: '/leave' },
        { label: 'Feedback', icon: MessageCircle, route: '/feedback' },
        { label: 'Org Chart', icon: TreeDeciduous, route: '/org-chart' },
      ],
    },
    {
      title: 'Communication',
      items: [
        { label: 'PulseComms', icon: MessageSquare, route: '/comms' },
        { label: 'Announcements', icon: Megaphone, route: '/announcements' },
      ],
    },
    {
      title: 'Performance & Growth',
      items: [
        { label: 'OKRs & Goals', icon: Target, route: '/okr' },
        { label: '1:1 Reviews', icon: UserCheck, route: '/1on1s' },
        { label: 'Reviews', icon: RotateCcw, route: '/reviews' },
      ],
    },
    {
      title: 'Finance & Ops',
      items: [
        { label: 'PulsePay', icon: Wallet, route: '/pulsepay' },
        { label: 'Invoices', icon: FileText, route: '/invoices' },
        { label: 'Payroll', icon: Banknote, route: '/payroll' },
        { label: 'CFO Dashboard', icon: BarChart, route: '/cfo' },
      ],
    },
    {
      title: 'Automation & Tools',
      items: [
        { label: 'PulseFlow', icon: Zap, route: '/automation' },
        { label: 'Integrations', icon: Plug, route: '/integrations' },
        { label: 'Contracts', icon: ScrollText, route: '/contracts' },
        { label: 'Compliance', icon: ShieldCheck, route: '/compliance' },
      ],
    },
    {
      title: 'Innovation',
      items: [
        { label: 'Ideas Hub', icon: Lightbulb, route: '/ideas' },
        { label: 'Hackathons', icon: Flame, route: '/hackathon' },
        { label: 'Leaderboard', icon: Trophy, route: '/leaderboard' },
      ],
    },
    {
      title: 'Admin',
      items: [
        { label: 'Settings', icon: Settings, route: '/admin/settings' },
        { label: 'Billing', icon: CreditCard, route: '/admin/billing' },
        { label: 'API Keys', icon: Key, route: '/admin/api' },
        { label: 'Onboarding', icon: Sparkles, route: '/onboarding' },
      ],
    },
  ];

  const sidebarVariants = {
    expanded: { width: '280px' },
    collapsed: { width: '80px' },
  };

  const contentVariants = {
    expanded: { opacity: 1, display: 'block' },
    collapsed: { opacity: 0, display: 'none' },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white relative overflow-hidden">
      {/* Interactive Background */}
      <motion.div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(111, 45, 189, 0.15) 0%, transparent 50%)`,
        }}
        animate={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(111, 45, 189, 0.15) 0%, transparent 50%)`,
        }}
        transition={{ type: "tween", ease: "linear", duration: 0.2 }}
      />

      <div className="flex relative z-10">
        {/* Desktop Sidebar */}
        <motion.div
          className="hidden lg:flex flex-col h-screen bg-black/20 backdrop-blur-xl border-r border-purple-500/20 sticky top-0"
          variants={sidebarVariants}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {/* Sidebar Header */}
          <div className="p-4 border-b border-purple-500/20">
            <div className="flex items-center justify-between">
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    <Link href="/dashboard">
                      <motion.h1
                        className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        PulseOS
                      </motion.h1>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors text-gray-300 hover:text-white"
              >
                <AlignLeft className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto py-4 px-2">
            {sections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <AnimatePresence>
                  {isExpanded && (
                    <motion.h3
                      variants={contentVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2"
                    >
                      {section.title}
                    </motion.h3>
                  )}
                </AnimatePresence>
                <div className="space-y-1">
                  {section.items.map((item, itemIndex) => {
                    const IconComponent = item.icon;
                    const isActive = pathname === item.route;
                    return (
                      <Link key={itemIndex} href={item.route}>
                        <motion.div
                          className={`flex items-center px-3 py-2 rounded-xl transition-all duration-200 group cursor-pointer ${
                            isActive
                              ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25'
                              : 'text-gray-300 hover:text-white hover:bg-purple-500/20'
                          }`}
                          whileHover={{ scale: 1.02, x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <IconComponent className={`w-5 h-5 ${isExpanded ? 'mr-3' : 'mx-auto'}`} />
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.span
                                variants={contentVariants}
                                initial="collapsed"
                                animate="expanded"
                                exit="collapsed"
                                className="text-sm font-medium"
                              >
                                {item.label}
                              </motion.span>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="border-t border-purple-500/20 p-2">
            <Link href="/help">
              <motion.div
                className="flex items-center px-3 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-purple-500/20 transition-all duration-200 group cursor-pointer mb-1"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <LifeBuoy className={`w-5 h-5 ${isExpanded ? 'mr-3' : 'mx-auto'}`} />
                <AnimatePresence>
                  {isExpanded && (
                    <motion.span
                      variants={contentVariants}
                      initial="collapsed"
                      animate="expanded"
                      exit="collapsed"
                      className="text-sm font-medium"
                    >
                      Help & Support
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col min-h-screen">
          {/* Top Navigation */}
          <motion.header
            className="bg-black/10 backdrop-blur-xl border-b border-purple-500/20 sticky top-0 z-40"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <div className="flex items-center justify-between h-16 px-6">
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-purple-500/20 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

              {/* Search Bar */}
              <div className="flex-1 max-w-xl mx-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search PulseOS..."
                    className="w-full pl-10 pr-4 py-2 bg-black/20 border border-purple-500/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-200"
                  />
                </div>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                <motion.button
                  className="p-2 rounded-lg hover:bg-purple-500/20 transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Bell className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
                </motion.button>
                
                <motion.div
                  className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              </div>
            </div>
          </motion.header>

          {/* Page Content */}
          <motion.main
            className="flex-1 overflow-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {children}
          </motion.main>

          {/* Footer */}
          <motion.footer
            className="bg-black/10 backdrop-blur-xl border-t border-purple-500/20 py-4 px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between text-sm text-gray-400">
              <p>© 2025 PulseOS Inc. All rights reserved.</p>
              <p>The Operating System for Modern Global Teams</p>
            </div>
          </motion.footer>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              className="w-80 h-full bg-black/90 backdrop-blur-xl border-r border-purple-500/20"
              initial={{ x: -320 }}
              animate={{ x: 0 }}
              exit={{ x: -320 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile menu content - similar to desktop sidebar */}
              <div className="p-4 border-b border-purple-500/20">
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  PulseOS
                </h1>
              </div>
              <div className="py-4 px-2">
                {sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="mb-6">
                    <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">
                      {section.title}
                    </h3>
                    <div className="space-y-1">
                      {section.items.map((item, itemIndex) => {
                        const IconComponent = item.icon;
                        const isActive = pathname === item.route;
                        return (
                          <Link key={itemIndex} href={item.route} onClick={() => setIsMobileMenuOpen(false)}>
                            <div
                              className={`flex items-center px-3 py-2 rounded-xl transition-all duration-200 ${
                                isActive
                                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                                  : 'text-gray-300 hover:text-white hover:bg-purple-500/20'
                              }`}
                            >
                              <IconComponent className="w-5 h-5 mr-3" />
                              <span className="text-sm font-medium">{item.label}</span>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShellLayout;