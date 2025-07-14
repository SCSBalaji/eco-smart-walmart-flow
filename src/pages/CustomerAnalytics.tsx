
import React, { useState } from 'react';
import { Users, TrendingUp, ShoppingCart, Heart, MapPin, Calendar, Filter, Download, Eye, BarChart3, PieChart, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Cell } from 'recharts';
import { Pie } from 'recharts';
import Layout from '../components/layout/Layout';

const CustomerAnalytics = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedRegion, setSelectedRegion] = useState('all');

  // Sample data for charts
  const salesData = [
    { month: 'Jan', sales: 45000, customers: 1200, avgOrder: 375 },
    { month: 'Feb', sales: 52000, customers: 1350, avgOrder: 385 },
    { month: 'Mar', sales: 48000, customers: 1280, avgOrder: 375 },
    { month: 'Apr', sales: 61000, customers: 1520, avgOrder: 400 },
    { month: 'May', sales: 55000, customers: 1400, avgOrder: 395 },
    { month: 'Jun', sales: 67000, customers: 1680, avgOrder: 400 },
  ];

  const categoryData = [
    { name: 'Dairy Products', value: 25, color: '#10b981' },
    { name: 'Spices & Masala', value: 20, color: '#f59e0b' },
    { name: 'Rice & Grains', value: 18, color: '#ef4444' },
    { name: 'Fresh Vegetables', value: 15, color: '#8b5cf6' },
    { name: 'Indian Snacks', value: 12, color: '#06b6d4' },
    { name: 'Others', value: 10, color: '#6b7280' },
  ];

  const regionalData = [
    { region: 'Mumbai', customers: 2400, revenue: '₹8.5L', growth: '+12%' },
    { region: 'Delhi', customers: 2100, revenue: '₹7.2L', growth: '+8%' },
    { region: 'Bangalore', customers: 1800, revenue: '₹6.8L', growth: '+15%' },
    { region: 'Chennai', customers: 1600, revenue: '₹5.9L', growth: '+10%' },
    { region: 'Hyderabad', customers: 1400, revenue: '₹5.1L', growth: '+18%' },
    { region: 'Pune', customers: 1200, revenue: '₹4.3L', growth: '+22%' },
  ];

  const topProducts = [
    { name: 'Amul Milk 1L', sales: 2500, revenue: '₹1.25L', trend: '+5%' },
    { name: 'India Gate Basmati Rice 5kg', sales: 1800, revenue: '₹2.16L', trend: '+8%' },
    { name: 'Aashirvaad Atta 10kg', sales: 1600, revenue: '₹1.28L', trend: '+3%' },
    { name: 'Tata Tea Premium 1kg', sales: 1400, revenue: '₹63K', trend: '+12%' },
    { name: 'Haldiram Namkeen Mix', sales: 1200, revenue: '₹48K', trend: '+15%' },
  ];

  const customerSegments = [
    { segment: 'Premium Customers', count: 1200, percentage: 15, avgSpend: '₹2,500', color: 'bg-purple-500' },
    { segment: 'Regular Customers', count: 4800, percentage: 60, avgSpend: '₹1,200', color: 'bg-blue-500' },
    { segment: 'Occasional Buyers', count: 2000, percentage: 25, avgSpend: '₹450', color: 'bg-green-500' },
  ];

  return (
    <Layout>
      <div className="p-6 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
              📊 Customer Analytics - India
              <span className="text-2xl">🇮🇳</span>
            </h1>
            <p className="text-gray-600">Comprehensive customer insights and behavioral analytics across Indian markets</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+12%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">15,240</h3>
              <p className="text-gray-600">Total Customers</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-100 rounded-full">
                  <ShoppingCart className="h-6 w-6 text-green-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+8%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">₹4.2 Cr</h3>
              <p className="text-gray-600">Monthly Revenue</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-100 rounded-full">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+15%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">₹1,847</h3>
              <p className="text-gray-600">Avg Order Value</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-100 rounded-full">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <span className="text-green-500 text-sm font-medium">+6%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800">78%</h3>
              <p className="text-gray-600">Customer Retention</p>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <div className="flex flex-wrap gap-4 items-center">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex gap-2">
                <label className="text-sm font-medium text-gray-700">Period:</label>
                <select 
                  value={selectedPeriod} 
                  onChange={(e) => setSelectedPeriod(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="week">Last Week</option>
                  <option value="month">Last Month</option>
                  <option value="quarter">Last Quarter</option>
                  <option value="year">Last Year</option>
                </select>
              </div>
              <div className="flex gap-2">
                <label className="text-sm font-medium text-gray-700">Region:</label>
                <select 
                  value={selectedRegion} 
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                >
                  <option value="all">All Regions</option>
                  <option value="north">North India</option>
                  <option value="south">South India</option>
                  <option value="west">West India</option>
                  <option value="east">East India</option>
                </select>
              </div>
              <button className="ml-auto flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Download className="h-4 w-4" />
                Export Report
              </button>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Sales Trend */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                Sales Trend Analysis
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value, name) => [`₹${value.toLocaleString()}`, name]} />
                  <Line type="monotone" dataKey="sales" stroke="#3b82f6" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Category Distribution */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PieChart className="h-5 w-5 text-green-600" />
                Category Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Customer Segments */}
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-purple-600" />
              Customer Segments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {customerSegments.map((segment, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-4 h-4 rounded-full ${segment.color}`}></div>
                    <h4 className="font-semibold">{segment.segment}</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Customers:</span>
                      <span className="font-semibold">{segment.count.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Percentage:</span>
                      <span className="font-semibold">{segment.percentage}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg Spend:</span>
                      <span className="font-semibold text-green-600">{segment.avgSpend}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Regional Performance & Top Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Regional Performance */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-600" />
                Regional Performance
              </h3>
              <div className="space-y-4">
                {regionalData.map((region, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{region.region}</h4>
                      <p className="text-sm text-gray-600">{region.customers} customers</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{region.revenue}</p>
                      <p className="text-sm text-green-500">{region.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Products */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-orange-600" />
                Top Performing Products
              </h3>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold">{product.name}</h4>
                      <p className="text-sm text-gray-600">{product.sales} units sold</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-green-600">{product.revenue}</p>
                      <p className="text-sm text-green-500">{product.trend}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights & Recommendations */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">AI-Powered Insights & Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🎯 Customer Behavior Insight</h4>
                <p className="text-sm">Premium customers in Mumbai show 45% higher purchase frequency during festival seasons. Consider targeted premium product launches.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">📈 Growth Opportunity</h4>
                <p className="text-sm">Pune market shows 22% growth potential. Expanding ready-to-cook product lines could capture emerging young professional segment.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">💡 Retention Strategy</h4>
                <p className="text-sm">Customers buying organic products have 85% higher retention. Cross-selling organic variants could boost customer lifetime value.</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h4 className="font-semibold mb-2">🚀 Revenue Optimization</h4>
                <p className="text-sm">Bundling spices with staples increases average order value by 32%. Implement smart bundling recommendations at checkout.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomerAnalytics;
