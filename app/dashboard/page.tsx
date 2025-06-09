'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Activity,
  Calendar,
  MessageSquare,
  Target,
  Zap,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import ShellLayout from '@/components/ui/shell-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DashboardPage() {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$2.4M',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'Active Users',
      value: '1,247',
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'Performance Score',
      value: '94.2%',
      change: '+2.1%',
      trend: 'up',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'System Health',
      value: '99.9%',
      change: '-0.1%',
      trend: 'down',
      icon: Activity,
      color: 'from-orange-500 to-red-600'
    }
  ];

  const recentActivities = [
    { id: 1, type: 'user', message: 'New user Sarah Johnson joined the team', time: '2 minutes ago', status: 'success' },
    { id: 2, type: 'payment', message: 'Payment of $15,000 processed successfully', time: '15 minutes ago', status: 'success' },
    { id: 3, type: 'alert', message: 'Server maintenance scheduled for tonight', time: '1 hour ago', status: 'warning' },
    { id: 4, type: 'goal', message: 'Q1 OKR milestone achieved by Marketing team', time: '2 hours ago', status: 'success' },
    { id: 5, type: 'system', message: 'Database backup completed', time: '3 hours ago', status: 'info' }
  ];

  const upcomingTasks = [
    { id: 1, title: 'Review Q1 Performance Reports', due: 'Today, 3:00 PM', priority: 'high' },
    { id: 2, title: 'Team Standup Meeting', due: 'Tomorrow, 9:00 AM', priority: 'medium' },
    { id: 3, title: 'Client Presentation Prep', due: 'Friday, 2:00 PM', priority: 'high' },
    { id: 4, title: 'Budget Planning Session', due: 'Next Week', priority: 'low' }
  ];

  return (
    <ShellLayout>
      <div className="p-6 space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
            Dashboard
          </h1>
          <p className="text-gray-400">Welcome back! Here's what's happening with your organization.</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-black/20 backdrop-blur-xl border-purple-500/20 hover:border-purple-400/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm font-medium">{stat.title}</p>
                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                        <div className="flex items-center mt-2">
                          {stat.trend === 'up' ? (
                            <ArrowUpRight className="w-4 h-4 text-green-400 mr-1" />
                          ) : (
                            <ArrowDownRight className="w-4 h-4 text-red-400 mr-1" />
                          )}
                          <span className={`text-sm font-medium ${
                            stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
                          }`}>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-black/20 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Activity className="w-5 h-5 mr-2 text-purple-400" />
                  Recent Activity
                </CardTitle>
                <CardDescription>Latest updates from your organization</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-purple-500/10 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.status === 'success' ? 'bg-green-400' :
                      activity.status === 'warning' ? 'bg-yellow-400' :
                      activity.status === 'info' ? 'bg-blue-400' : 'bg-gray-400'
                    }`} />
                    <div className="flex-1">
                      <p className="text-white text-sm">{activity.message}</p>
                      <p className="text-gray-400 text-xs mt-1">{activity.time}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Upcoming Tasks */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="bg-black/20 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="flex items-center text-white">
                  <Calendar className="w-5 h-5 mr-2 text-purple-400" />
                  Upcoming Tasks
                </CardTitle>
                <CardDescription>Your schedule for the next few days</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    className="p-3 rounded-lg border border-purple-500/20 hover:border-purple-400/40 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-white text-sm font-medium">{task.title}</h4>
                        <div className="flex items-center mt-1">
                          <Clock className="w-3 h-3 text-gray-400 mr-1" />
                          <span className="text-gray-400 text-xs">{task.due}</span>
                        </div>
                      </div>
                      <Badge 
                        variant={task.priority === 'high' ? 'destructive' : task.priority === 'medium' ? 'default' : 'secondary'}
                        className="text-xs"
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="bg-black/20 backdrop-blur-xl border-purple-500/20">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Zap className="w-5 h-5 mr-2 text-purple-400" />
                Quick Actions
              </CardTitle>
              <CardDescription>Frequently used features and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Users, label: 'Add Team Member', color: 'from-blue-500 to-cyan-600' },
                  { icon: MessageSquare, label: 'Send Announcement', color: 'from-green-500 to-emerald-600' },
                  { icon: Target, label: 'Create OKR', color: 'from-purple-500 to-pink-600' },
                  { icon: BarChart3, label: 'View Analytics', color: 'from-orange-500 to-red-600' }
                ].map((action, index) => {
                  const IconComponent = action.icon;
                  return (
                    <motion.button
                      key={index}
                      className="p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-white text-sm font-medium">{action.label}</p>
                    </motion.button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </ShellLayout>
  );
}