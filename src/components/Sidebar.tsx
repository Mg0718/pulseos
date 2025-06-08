import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
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

interface SidebarProps {
  showSidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ showSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const savedState = localStorage.getItem('sidebarExpanded');
    if (savedState !== null) {
      setIsExpanded(JSON.parse(savedState));
    }
  }, []);

  const toggleSidebar = () => {
    const newState = !isExpanded;
    setIsExpanded(newState);
    localStorage.setItem('sidebarExpanded', JSON.stringify(newState));
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
    window.location.reload();
  };

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
        { label: 'Users & Teams', icon: Users, route: '/teams' },
        { label: 'Leave Tracker', icon: CalendarCheck, route: '/leave' },
        { label: 'Feedback & Review', icon: MessageCircle, route: '/feedback' },
        { label: 'Org Chart', icon: TreeDeciduous, route: '/org-chart' },
      ],
    },
    {
      title: 'Communication',
      items: [
        { label: 'Chat', icon: MessageSquare, route: '/comms' },
        { label: 'Announcements', icon: Megaphone, route: '/announcements' },
      ],
    },
    {
      title: 'Performance & Growth',
      items: [
        { label: 'Goals & OKRs', icon: Target, route: '/okr' },
        { label: '1:1 Reviews', icon: UserCheck, route: '/1on1s' },
        { label: 'Weekly Retros', icon: RotateCcw, route: '/reviews' },
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
      title: 'Modules & Tools',
      items: [
        { label: 'Automation (Flow)', icon: Zap, route: '/automation' },
        { label: 'Integrations', icon: Plug, route: '/integrations' },
        { label: 'Contracts', icon: ScrollText, route: '/contracts' },
        { label: 'Compliance', icon: ShieldCheck, route: '/compliance' },
      ],
    },
    {
      title: 'FieldOps / MSP',
      items: [
        { label: 'Assets', icon: Package, route: '/assets' },
        { label: 'Tickets', icon: Ticket, route: '/tickets' },
        { label: 'Field Dashboard', icon: TabletSmartphone, route: '/field-dashboard' },
      ],
    },
    {
      title: 'Innovation',
      items: [
        { label: 'Innovation Hub', icon: Lightbulb, route: '/ideas' },
        { label: 'Hackathons', icon: Flame, route: '/hackathon' },
        { label: 'Leaderboard', icon: Trophy, route: '/leaderboard' },
      ],
    },
    {
      title: 'Admin & Settings',
      items: [
        { label: 'Company Settings', icon: Settings, route: '/settings' },
        { label: 'Plans & Billing', icon: CreditCard, route: '/admin/billing' },
        { label: 'Onboarding Studio', icon: Sparkles, route: '/onboarding' },
        { label: 'API Keys', icon: Key, route: '/admin/api' },
      ],
    },
  ];

  const utilityItems: SidebarItem[] = [
    { label: 'Help & Docs', icon: LifeBuoy, route: '/help' },
    { label: 'Profile', icon: UserCircle, route: '/profile' },
  ];

  const sidebarVariants = {
    visible: { 
      x: 0,
      width: isExpanded ? '280px' : '80px',
    },
    hidden: { 
      x: isExpanded ? -280 : -80,
      width: isExpanded ? '280px' : '80px',
    },
  };

  const contentVariants = {
    expanded: { opacity: 1, display: 'block' },
    collapsed: { opacity: 0, display: 'none' },
  };

  return (
    <motion.div
      className="fixed left-0 top-0 h-screen bg-sidebarBackground backdrop-blur-md bg-black/40 border-r border-sidebarHighlight/20 flex flex-col z-40"
      variants={sidebarVariants}
      animate={showSidebar ? 'visible' : 'hidden'}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      {/* Header */}
      <div className="p-4 border-b border-sidebarHighlight/20">
        <div className="flex items-center justify-between">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center"
              >
                <motion.h1
                  className="text-xl font-bold bg-gradient-to-r from-sidebarHighlight to-wine-400 bg-clip-text text-transparent cursor-pointer"
                  onClick={() => navigate('/dashboard')}
                  animate={{ 
                    textShadow: [
                      '0 0 10px rgba(111, 45, 189, 0.5)',
                      '0 0 20px rgba(111, 45, 189, 0.8)',
                      '0 0 10px rgba(111, 45, 189, 0.5)',
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  whileHover={{ scale: 1.05 }}
                >
                  PulseOS
                </motion.h1>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-lg hover:bg-sidebarHighlight/20 transition-colors text-gray-300 hover:text-white"
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
                const isActive = location.pathname === item.route;
                return (
                  <motion.button
                    key={itemIndex}
                    onClick={() => navigate(item.route)}
                    className={`w-full flex items-center px-3 py-2 rounded-xl transition-all duration-200 group ${
                      isActive
                        ? 'bg-sidebarHighlight text-white shadow-glow'
                        : 'text-gray-300 hover:text-white hover:bg-sidebarHighlight/20'
                    }`}
                    whileHover={{ scale: 1.02 }}
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
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Utility Items */}
      <div className="border-t border-sidebarHighlight/20 p-2">
        {utilityItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.button
              key={index}
              onClick={() => navigate(item.route)}
              className="w-full flex items-center px-3 py-2 rounded-xl text-gray-300 hover:text-white hover:bg-sidebarHighlight/20 transition-all duration-200 group mb-1"
              whileHover={{ scale: 1.02 }}
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
            </motion.button>
          );
        })}
        
        {/* Logout Button */}
        <motion.button
          onClick={handleLogout}
          className="w-full flex items-center px-3 py-2 rounded-xl text-gray-300 hover:text-red-400 hover:bg-red-500/20 transition-all duration-200 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut className={`w-5 h-5 ${isExpanded ? 'mr-3' : 'mx-auto'}`} />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                variants={contentVariants}
                initial="collapsed"
                animate="expanded"
                exit="collapsed"
                className="text-sm font-medium"
              >
                Logout
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sidebar;