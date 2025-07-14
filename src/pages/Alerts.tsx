
import React, { useState } from 'react';
import { Bell, AlertTriangle, Clock, CheckCircle, XCircle, Filter, Search, Calendar, MapPin, Package, TrendingDown, TrendingUp, Heart, Zap } from 'lucide-react';
import Layout from '../components/layout/Layout';

const Alerts = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const alerts = [
    {
      id: 1,
      type: 'critical',
      icon: AlertTriangle,
      title: 'Urgent: Dairy Products Expiring Today',
      message: 'Amul Milk (50 units) and Paneer (25 units) expire today. Immediate action required.',
      time: '2 hours ago',
      location: 'Mumbai Store',
      value: '₹15,400',
      action: 'Apply 40% discount',
      status: 'pending'
    },
    {
      id: 2,
      type: 'warning',
      icon: Clock,
      title: 'Stock Running Low - Basmati Rice',
      message: 'Only 12 units left of India Gate Basmati Rice. Reorder recommended.',
      time: '4 hours ago',
      location: 'Delhi Store',
      value: '₹8,200',
      action: 'Reorder stock',
      status: 'pending'
    },
    {
      id: 3,
      type: 'success',
      icon: CheckCircle,
      title: 'Successful Donation - Bread Items',
      message: 'Successfully donated 200 units of bread to Akshaya Patra Foundation.',
      time: '6 hours ago',
      location: 'Bangalore Store',
      value: '₹5,600',
      action: 'Donation completed',
      status: 'completed'
    },
    {
      id: 4,
      type: 'info',
      icon: Package,
      title: 'New Stock Arrival - Seasonal Fruits',
      message: 'Fresh mangoes and oranges arrived. Update inventory and pricing.',
      time: '8 hours ago',
      location: 'Chennai Store',
      value: '₹12,500',
      action: 'Update inventory',
      status: 'pending'
    },
    {
      id: 5,
      type: 'critical',
      icon: TrendingDown,
      title: 'Overstock Alert - Festival Sweets',
      message: 'Diwali sweets overstocked by 40%. Consider redistribution or discount.',
      time: '12 hours ago',
      location: 'Hyderabad Store',
      value: '₹25,000',
      action: 'Redistribute or discount',
      status: 'pending'
    },
    {
      id: 6,
      type: 'warning',
      icon: MapPin,
      title: 'High Demand - Ready-to-Cook Items',
      message: 'MTR Ready-to-Eat demand spike in Pune. Transfer from Mumbai stock.',
      time: '14 hours ago',
      location: 'Pune Store',
      value: '₹18,700',
      action: 'Transfer stock',
      status: 'in-progress'
    }
  ];

  const filteredAlerts = alerts.filter(alert => {
    const matchesFilter = selectedFilter === 'all' || alert.type === selectedFilter;
    const matchesSearch = alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         alert.message.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getAlertColor = (type) => {
    switch (type) {
      case 'critical': return 'border-red-500 bg-red-50';
      case 'warning': return 'border-orange-500 bg-orange-50';
      case 'success': return 'border-green-500 bg-green-50';
      case 'info': return 'border-blue-500 bg-blue-50';
      default: return 'border-gray-500 bg-gray-50';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
              🚨 Alerts & Notifications - India
              <span className="text-2xl">🇮🇳</span>
            </h1>
            <p className="text-gray-600">Real-time inventory alerts and notifications across all Indian stores</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-red-600 font-semibold">Critical Alerts</p>
                  <p className="text-3xl font-bold text-red-700">12</p>
                </div>
                <AlertTriangle className="h-12 w-12 text-red-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 font-semibold">Warnings</p>
                  <p className="text-3xl font-bold text-orange-700">28</p>
                </div>
                <Clock className="h-12 w-12 text-orange-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-600 font-semibold">Resolved</p>
                  <p className="text-3xl font-bold text-green-700">156</p>
                </div>
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-lg border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-600 font-semibold">Total Savings</p>
                  <p className="text-3xl font-bold text-blue-700">₹2.1L</p>
                </div>
                <TrendingUp className="h-12 w-12 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-4 items-center">
                <Filter className="h-5 w-5 text-gray-500" />
                <div className="flex gap-2">
                  {['all', 'critical', 'warning', 'success', 'info'].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setSelectedFilter(filter)}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        selectedFilter === filter
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {filter.charAt(0).toUpperCase() + filter.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search alerts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Alerts List */}
          <div className="space-y-4">
            {filteredAlerts.map((alert) => {
              const IconComponent = alert.icon;
              return (
                <div
                  key={alert.id}
                  className={`bg-white rounded-lg p-6 shadow-lg border-l-4 ${getAlertColor(alert.type)} hover:shadow-xl transition-shadow`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-full ${
                        alert.type === 'critical' ? 'bg-red-100' :
                        alert.type === 'warning' ? 'bg-orange-100' :
                        alert.type === 'success' ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        <IconComponent className={`h-6 w-6 ${
                          alert.type === 'critical' ? 'text-red-600' :
                          alert.type === 'warning' ? 'text-orange-600' :
                          alert.type === 'success' ? 'text-green-600' : 'text-blue-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2">{alert.title}</h3>
                        <p className="text-gray-600 mb-3">{alert.message}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {alert.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {alert.location}
                          </div>
                          <div className="font-semibold text-green-600">
                            {alert.value}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(alert.status)}`}>
                        {alert.status.charAt(0).toUpperCase() + alert.status.slice(1)}
                      </span>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                        {alert.action}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button className="flex items-center gap-3 p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors">
                <Zap className="h-6 w-6 text-red-600" />
                <div className="text-left">
                  <p className="font-semibold text-red-700">Bulk Discount</p>
                  <p className="text-sm text-red-600">Apply discounts to expiring items</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <Heart className="h-6 w-6 text-green-600" />
                <div className="text-left">
                  <p className="font-semibold text-green-700">Donate Items</p>
                  <p className="text-sm text-green-600">Send items to charity partners</p>
                </div>
              </button>
              <button className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div className="text-left">
                  <p className="font-semibold text-blue-700">Redistribute</p>
                  <p className="text-sm text-blue-600">Transfer to high-demand stores</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Alerts;
