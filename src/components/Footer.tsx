import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-wine-900 dark:from-sidebarBackground dark:via-darkBackground dark:to-sidebarBackground text-white py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <motion.div 
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-bold mb-2 bg-gradient-to-r from-sidebarHighlight to-wine-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              PulseOS
            </motion.h3>
            <p className="text-slate-300 dark:text-gray-400">The Operating System for Modern Global Teams</p>
          </motion.div>
          <motion.div 
            className="border-t border-purple-800 dark:border-sidebarHighlight/20 pt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 dark:text-gray-500">
              © 2025 PulseOS Inc. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;