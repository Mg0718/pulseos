'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Mail, ArrowRight, ArrowLeft, Sparkles, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsEmailSent(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 relative overflow-hidden p-4">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(111, 45, 189, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(166, 99, 204, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(111, 45, 189, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <Card className="bg-black/20 backdrop-blur-xl border-purple-500/20 shadow-2xl shadow-purple-500/10">
          <CardHeader className="text-center space-y-4">
            <motion.div
              className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isEmailSent ? (
                <CheckCircle className="w-8 h-8 text-white" />
              ) : (
                <Sparkles className="w-8 h-8 text-white" />
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {isEmailSent ? 'Check Your Email' : 'Reset Password'}
              </CardTitle>
              <CardDescription className="text-gray-300 mt-2">
                {isEmailSent 
                  ? 'We\'ve sent a password reset link to your email address'
                  : 'Enter your email address and we\'ll send you a link to reset your password'
                }
              </CardDescription>
            </motion.div>
          </CardHeader>

          <CardContent className="space-y-6">
            {!isEmailSent ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-black/20 border-purple-500/20 text-white placeholder-gray-400 focus:border-purple-400 focus:ring-purple-400/20"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-200"
                  >
                    {isLoading ? (
                      <motion.div
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    ) : (
                      <>
                        Send Reset Link
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            ) : (
              <motion.div
                className="text-center space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <p className="text-green-400 text-sm">
                    Password reset email sent to <strong>{email}</strong>
                  </p>
                  <p className="text-gray-400 text-xs mt-2">
                    Please check your inbox and follow the instructions to reset your password.
                  </p>
                </div>

                <Button
                  onClick={() => {
                    setIsEmailSent(false);
                    setEmail('');
                  }}
                  variant="outline"
                  className="w-full border-purple-500/20 text-purple-400 hover:bg-purple-500/10"
                >
                  Send Another Email
                </Button>
              </motion.div>
            )}

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link 
                href="/login" 
                className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Sign In
              </Link>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}