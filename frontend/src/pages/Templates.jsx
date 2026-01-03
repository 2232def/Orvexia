import { motion } from 'framer-motion';
import { Search, Filter, TrendingUp, Clock, Users } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Real-life workflow templates inspired by Zapier
const workflowTemplates = [
  {
    id: 1,
    title: 'Add new leads to Google Sheets',
    description: 'When a new lead comes in from Facebook Lead Ads, automatically add them to a Google Sheets spreadsheet.',
    category: 'Sales',
    apps: ['Facebook Lead Ads', 'Google Sheets'],
    icon: '📊',
    uses: '12.3k',
    time: '2 min',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'Create Trello cards from new emails',
    description: 'When you receive an email in Gmail with a specific label, automatically create a Trello card.',
    category: 'Productivity',
    apps: ['Gmail', 'Trello'],
    icon: '📋',
    uses: '8.7k',
    time: '3 min',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'Send Slack notifications for new form responses',
    description: 'When someone submits a Google Form, send a notification to a Slack channel with the response details.',
    category: 'Communication',
    apps: ['Google Forms', 'Slack'],
    icon: '💬',
    uses: '15.2k',
    time: '2 min',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
  },
  {
    id: 4,
    title: 'Save Gmail attachments to Google Drive',
    description: 'Automatically save email attachments from Gmail to a specific Google Drive folder.',
    category: 'Productivity',
    apps: ['Gmail', 'Google Drive'],
    icon: '📎',
    uses: '9.4k',
    time: '2 min',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=250&fit=crop',
  },
  {
    id: 5,
    title: 'Add new HubSpot contacts to Mailchimp',
    description: 'When a new contact is created in HubSpot, automatically add them to a Mailchimp audience.',
    category: 'Marketing',
    apps: ['HubSpot', 'Mailchimp'],
    icon: '👥',
    uses: '6.8k',
    time: '3 min',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
  },
  {
    id: 6,
    title: 'Create calendar events from email',
    description: 'When you receive an email with meeting details, automatically create a Google Calendar event.',
    category: 'Productivity',
    apps: ['Gmail', 'Google Calendar'],
    icon: '📅',
    uses: '11.5k',
    time: '4 min',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop',
  },
  {
    id: 7,
    title: 'Post new blog posts to Twitter',
    description: 'When a new blog post is published on WordPress, automatically share it on Twitter.',
    category: 'Social Media',
    apps: ['WordPress', 'Twitter'],
    icon: '🐦',
    uses: '7.9k',
    time: '3 min',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop',
  },
  {
    id: 8,
    title: 'Send invoice emails from Stripe payments',
    description: 'When a payment is received in Stripe, automatically send an invoice email to the customer.',
    category: 'Finance',
    apps: ['Stripe', 'Gmail'],
    icon: '💳',
    uses: '5.2k',
    time: '3 min',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
  },
  {
    id: 9,
    title: 'Create tasks in Asana from Slack messages',
    description: 'When someone mentions a task in Slack, automatically create a task in Asana.',
    category: 'Productivity',
    apps: ['Slack', 'Asana'],
    icon: '✅',
    uses: '4.6k',
    time: '4 min',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop',
  },
  {
    id: 10,
    title: 'Backup new files to Dropbox',
    description: 'When a new file is added to Google Drive, automatically create a backup copy in Dropbox.',
    category: 'Data Management',
    apps: ['Google Drive', 'Dropbox'],
    icon: '💾',
    uses: '3.8k',
    time: '2 min',
    difficulty: 'Easy',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=250&fit=crop',
  },
  {
    id: 11,
    title: 'Send SMS notifications for new orders',
    description: 'When a new order is created in Shopify, send an SMS notification using Twilio.',
    category: 'E-commerce',
    apps: ['Shopify', 'Twilio'],
    icon: '📱',
    uses: '2.9k',
    time: '5 min',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
  },
  {
    id: 12,
    title: 'Update customer records in Salesforce',
    description: 'When a contact is updated in HubSpot, automatically sync the changes to Salesforce.',
    category: 'CRM',
    apps: ['HubSpot', 'Salesforce'],
    icon: '🔄',
    uses: '4.1k',
    time: '4 min',
    difficulty: 'Medium',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
  },
];

const categories = ['All', 'Sales', 'Productivity', 'Marketing', 'Communication', 'Finance', 'Social Media', 'E-commerce', 'CRM', 'Data Management'];

export const Templates = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTemplates = workflowTemplates.filter(template => {
    const matchesCategory = selectedCategory === 'All' || template.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleUseTemplate = (template) => {
    navigate('/workflows/builder');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Workflow Templates
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Choose from thousands of pre-built workflows to automate your work
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
            />
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`
                  px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${
                    selectedCategory === category
                      ? 'bg-orange-500 text-white shadow-sm'
                      : 'bg-white dark:bg-[#1a1a1a] text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-[#2a2a2a] hover:border-orange-300 dark:hover:border-orange-700'
                  }
                `}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template, idx) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => handleUseTemplate(template)}
              className="group cursor-pointer bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-[#2a2a2a] rounded-xl overflow-hidden hover:shadow-lg hover:border-orange-300 dark:hover:border-orange-700 transition-all"
            >
              {/* Image */}
              <div className="h-40 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/10 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">{template.icon}</span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-1 bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-sm text-xs font-medium text-gray-700 dark:text-gray-300 rounded">
                    {template.difficulty}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition line-clamp-2">
                    {template.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {template.description}
                </p>

                {/* Apps */}
                <div className="flex items-center gap-2 mb-4 flex-wrap">
                  {template.apps.map((app, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 bg-gray-100 dark:bg-[#222222] text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
                    >
                      {app}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 pt-4 border-t border-gray-100 dark:border-[#2a2a2a]">
                  <div className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5" />
                    <span>{template.uses} uses</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{template.time} setup</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No templates found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};
