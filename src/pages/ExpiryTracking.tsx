
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import {
  Clock,
  AlertTriangle,
  CheckCircle,
  Package,
  Search,
  Filter,
  Calendar,
  TrendingDown,
  Bell,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const ExpiryTracking = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const expiryData = [
    {
      id: 1,
      name: 'Organic Spinach Bags',
      category: 'Produce',
      batch: 'SP-2024-001',
      quantity: 45,
      expiryDate: '2024-07-16',
      daysLeft: 2,
      status: 'critical',
      suggestedAction: 'Apply 60% discount',
      location: 'Aisle 7, Section A',
    },
    {
      id: 2,
      name: 'Fresh Milk Gallons',
      category: 'Dairy',
      batch: 'ML-2024-087',
      quantity: 23,
      expiryDate: '2024-07-17',
      daysLeft: 3,
      status: 'warning',
      suggestedAction: 'Apply 40% discount',
      location: 'Dairy Section, Cooler 2',
    },
    {
      id: 3,
      name: 'Artisan Bread Loaves',
      category: 'Bakery',
      batch: 'BR-2024-234',
      quantity: 12,
      expiryDate: '2024-07-15',
      daysLeft: 1,
      status: 'critical',
      suggestedAction: 'Move to donation',
      location: 'Bakery Counter',
    },
    {
      id: 4,
      name: 'Greek Yogurt Cups',
      category: 'Dairy',
      batch: 'YG-2024-156',
      quantity: 67,
      expiryDate: '2024-07-20',
      daysLeft: 6,
      status: 'good',
      suggestedAction: 'Monitor closely',
      location: 'Dairy Section, Cooler 1',
    },
    {
      id: 5,
      name: 'Chicken Breast Packs',
      category: 'Meat',
      batch: 'CB-2024-089',
      quantity: 18,
      expiryDate: '2024-07-16',
      daysLeft: 2,
      status: 'critical',
      suggestedAction: 'Apply 50% discount',
      location: 'Meat Section, Cooler A',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'destructive';
      case 'warning': return 'outline';
      case 'good': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'critical': return <AlertTriangle className="h-4 w-4" />;
      case 'warning': return <Clock className="h-4 w-4" />;
      case 'good': return <CheckCircle className="h-4 w-4" />;
      default: return <Package className="h-4 w-4" />;
    }
  };

  const filteredData = expiryData.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.batch.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || item.category === filterCategory;
    const matchesStatus = filterStatus === 'all' || item.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const criticalCount = expiryData.filter(item => item.status === 'critical').length;
  const warningCount = expiryData.filter(item => item.status === 'warning').length;
  const totalItems = expiryData.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Smart Expiry Tracking System</h1>
            <p className="text-muted-foreground mt-1">
              Monitor and manage perishable inventory with AI-powered insights
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
              <Bell className="h-4 w-4 mr-2" />
              Setup Alerts
            </Button>
            <Button variant="outline">
              <Calendar className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                CRITICAL ITEMS
              </CardTitle>
              <div className="text-2xl font-bold text-destructive">{criticalCount}</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <span className="text-sm text-muted-foreground">Need immediate action</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                WARNING ITEMS
              </CardTitle>
              <div className="text-2xl font-bold text-orange-500">{warningCount}</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span className="text-sm text-muted-foreground">Monitor closely</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                TOTAL ITEMS
              </CardTitle>
              <div className="text-2xl font-bold text-primary">{totalItems}</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Package className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground">Units tracked</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                WASTE REDUCTION
              </CardTitle>
              <div className="text-2xl font-bold text-green-500">32%</div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <TrendingDown className="h-4 w-4 text-green-500" />
                <span className="text-sm text-muted-foreground">This month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <CardTitle>Filter & Search</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search by product name or batch number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={filterCategory} onValueChange={setFilterCategory}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Produce">Produce</SelectItem>
                  <SelectItem value="Dairy">Dairy</SelectItem>
                  <SelectItem value="Bakery">Bakery</SelectItem>
                  <SelectItem value="Meat">Meat</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="warning">Warning</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Expiry Tracking Table */}
        <Card>
          <CardHeader>
            <CardTitle>Product Expiry Overview</CardTitle>
            <CardDescription>
              Real-time tracking of all perishable items with smart recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {filteredData.map((item) => (
                <div key={item.id} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {getStatusIcon(item.status)}
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          Batch: {item.batch} • {item.location}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant={getStatusColor(item.status)}>
                        {item.status.toUpperCase()}
                      </Badge>
                      <div className="text-right">
                        <div className="font-semibold">{item.quantity} units</div>
                        <div className="text-sm text-muted-foreground">{item.category}</div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        Expiry Date
                      </label>
                      <div className="font-semibold">{item.expiryDate}</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        Days Remaining
                      </label>
                      <div className="font-semibold text-destructive">{item.daysLeft} days</div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground">
                        Suggested Action
                      </label>
                      <div className="font-semibold text-primary">{item.suggestedAction}</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Shelf Life Progress</span>
                      <span className="text-sm font-medium">{Math.max(0, (7 - item.daysLeft) * 14.3).toFixed(0)}%</span>
                    </div>
                    <Progress 
                      value={Math.min(100, Math.max(0, (7 - item.daysLeft) * 14.3))} 
                      className="h-2"
                    />
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" variant="outline">
                      Apply Discount
                    </Button>
                    <Button size="sm" variant="outline">
                      Move to Donation
                    </Button>
                    <Button size="sm" variant="outline">
                      Transfer Store
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ExpiryTracking;
