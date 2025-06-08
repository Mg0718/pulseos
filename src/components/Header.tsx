import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogIn, LogOut } from 'lucide-react';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  const handleAuthAction = () => {
    if (isLoggedIn) {
      localStorage.removeItem('isLoggedIn');
      navigate('/');
      window.location.reload(); // Force refresh to update auth state
    } else {
      navigate('/login');
    }
  };

  return (
    <motion.header 
      className="bg-white/80 dark:bg-sidebarBackground/80 backdrop-blur-md border-b border-purple-100 dark:border-sidebarHighlight/20 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-purple-800 via-wine-600 to-purple-700 dark:from-sidebarHighlight dark:via-wine-400 dark:to-purple-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              PulseOS
            </motion.h1>
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {location.pathname === '/' && (
              <>
                <motion.a 
                  href="#features" 
                  className="text-slate-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-sidebarHighlight transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Features
                </motion.a>
                <motion.a 
                  href="#contact" 
                  className="text-slate-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-sidebarHighlight transition-colors font-medium"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact
                </motion.a>
              </>
            )}
            
            <motion.button
              onClick={handleAuthAction}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-wine-600 dark:from-sidebarHighlight dark:to-wine-500 hover:from-purple-800 hover:to-wine-700 dark:hover:from-sidebarHighlight/90 dark:hover:to-wine-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg dark:shadow-glow transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isLoggedIn ? (
                <>
                  <LogOut className="w-4 h-4" />
                  Logout
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  Login
                </>
              )}
            </motion.button>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;