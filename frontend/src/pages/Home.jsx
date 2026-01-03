import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Workflow, 
  Sparkles, 
  BarChart3, 
  FolderKanban, 
  Settings,
  ArrowRight,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle2,
  Play,
  Plus,
  Users
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData, executions } from '../utils/mockData';

export const Home = () => {
  const navigate = useNavigate();

  const quickActions = [
    { 
      icon: Workflow, 
      label: 'Workflows', 
      path: '/workflows',
      description: 'Manage your automations',
      color: 'from-purple-500 to-purple-600'
    },
    { 
      icon: Sparkles, 
      label: 'AI Builder', 
      path: '/ai-builder',
      description: 'Create workflows with AI',
      color: 'from-orange-500 to-orange-600'
    },
    { 
      icon: BarChart3, 
      label: 'Analytics', 
      path: '/analytics',
      description: 'Track performance metrics',
      color: 'from-green-500 to-green-600'
    },
    { 
      icon: FolderKanban, 
      label: 'Templates', 
      path: '/templates',
      description: 'Browse workflow templates',
      color: 'from-pink-500 to-pink-600'
    },
    { 
      icon: Settings, 
      label: 'Settings', 
      path: '/settings',
      description: 'Configure your account',
      color: 'from-gray-500 to-gray-600'
    },
  ];

  const metrics = [
    { title: 'Total Workflows', value: '48', icon: Workflow, change: '+12%' },
    { title: 'Executions Today', value: '1,247', icon: Play, change: '+23%' },
    { title: 'Avg Response Time', value: '142ms', icon: Clock, change: '-15%' },
    { title: 'Success Rate', value: '99.9%', icon: CheckCircle2, change: '+2%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111111] p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to ORvexia
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Overview of your workflow performance
          </p>
        </div>
        <button
          onClick={() => navigate('/workflows/builder')}
          className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition"
        >
          <Plus className="w-4 h-4" />
          New Workflow
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
          >
            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 bg-orange-50 dark:bg-orange-950/30 rounded-lg flex items-center justify-center">
                  <metric.icon className="w-5 h-5 text-orange-600 dark:text-orange-500" />
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-500">
                  {metric.change}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {metric.title}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-lg p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Execution Trends
            </h3>
            <select className="px-3 py-1.5 border border-gray-200 dark:border-[#2a2a2a] bg-white dark:bg-[#1a1a1a] rounded-lg text-sm text-gray-700 dark:text-gray-300">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData.executionsOverTime}>
              <defs>
                <linearGradient id="colorSuccess" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-[#2a2a2a]" />
              <XAxis 
                dataKey="date" 
                stroke="#9ca3af" 
                style={{ fontSize: '12px' }}
                tick={{ fill: '#9ca3af' }}
              />
              <YAxis 
                stroke="#9ca3af" 
                style={{ fontSize: '12px' }}
                tick={{ fill: '#9ca3af' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
                labelStyle={{ color: '#374151' }}
              />
              <Area
                type="monotone"
                dataKey="success"
                stroke="#f97316"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorSuccess)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Activity Feed */}
        <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {executions.slice(0, 6).map((ex) => (
              <div
                key={ex.id}
                className="flex items-start gap-3 pb-4 border-b border-gray-100 dark:border-[#2a2a2a] last:border-0 last:pb-0"
              >
                <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                  ex.status === 'completed' || ex.status === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {ex.workflowName}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{ex.timestamp}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
          <button 
            onClick={() => navigate('/workflows')}
            className="w-full mt-4 px-4 py-2 text-sm font-medium text-orange-600 dark:text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-950/20 rounded-lg transition"
          >
            View All Activity
          </button>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Quick Actions
          </h2>
          <button
            onClick={() => navigate('/templates')}
            className="text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium"
          >
            Browse All Templates →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {quickActions.map((action, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              onClick={() => navigate(action.path)}
              className="group cursor-pointer bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl p-6 shadow-sm hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700 transition-all"
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${action.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <action.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition">
                {action.label}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {action.description}
              </p>
              <div className="flex items-center text-orange-600 dark:text-orange-400 font-medium text-sm">
                <span>Go to {action.label}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Popular Templates Preview */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Popular Templates
          </h2>
          <button
            onClick={() => navigate('/templates')}
            className="text-sm text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 font-medium"
          >
            View All →
          </button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'AI Chat for Lead Generation',
              apps: ['AI Chatbot', 'CRM'],
              uses: '15.8k',
              image: 'https://botup.com/images/kp/chatbots-for-lead-generation.png',
            },
            {
              title: 'AI Email Assistant',
              apps: ['Gmail', 'AI Assistant'],
              uses: '22.4k',
              image: 'https://zapier.com/api/templates/v1/media/file/de3421b43a7c5615d3d0d4f2c6596c43-Thumbnail_8__1_.webp',
            },
            {
              title: 'Create GitHub issues from Slack',
              apps: ['Slack', 'GitHub'],
              uses: '18.6k',
              image: 'data:image/jpeg;base64,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',
            },
            {
              title: 'Increase sales leads from support tickets',
              apps: ['Support Desk', 'CRM'],
              uses: '12.9k',
              image: 'https://zapier.com/api/templates/v1/media/file/62e8b5f59857790881a88ca5d60b715d-Potential_Deal_Flag_Zap.webp',
            },
          ].map((template, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              onClick={() => navigate('/templates')}
              className="group cursor-pointer bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl overflow-hidden hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700 transition-all"
            >
              <div className="h-32 bg-gray-100 dark:bg-[#222222] relative overflow-hidden">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.className = 'h-32 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/10 relative overflow-hidden flex items-center justify-center';
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition line-clamp-2 mb-2">
                  {template.title}
                </h3>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  {template.apps.map((app, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-gray-100 dark:bg-[#222222] text-gray-700 dark:text-gray-300 text-xs rounded"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <Users className="w-3 h-3" />
                  <span>{template.uses} uses</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { label: 'Time Saved Today', value: '4.2 hours' },
          { label: 'Active Integrations', value: '12 services' },
          { label: 'Workflows Created', value: '48 total' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + idx * 0.1 }}
          >
            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-lg p-6 shadow-sm">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {stat.label}
              </p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
