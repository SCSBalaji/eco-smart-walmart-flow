
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import {
  AlertTriangle,
  TrendingUp,
  Heart,
  Package,
  BarChart3,
  MapPin,
  Clock,
  DollarSign,
  Recycle,
  Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

const Home = () => {
  const dashboardStats = [
    { title: 'Food Waste Reduced', value: '30%', icon: Recycle, color: 'success-gradient' },
    { title: 'Items Donated', value: '2,847', icon: Heart, color: 'warning-gradient' },
    { title: 'Revenue Saved', value: '$47K', icon: DollarSign, color: 'walmart-gradient' },
    { title: 'Active Subscriptions', value: '1,204', icon: Users, color: 'success-gradient' },
  ];

  const expiringItems = [
    { name: 'Fresh Vegetables Bundle', expires: '2 days', discount: '40%', category: 'Produce' },
    { name: 'Dairy Products Pack', expires: '1 day', discount: '60%', category: 'Dairy' },
    { name: 'Bakery Fresh Bread', expires: '6 hours', discount: '70%', category: 'Bakery' },
  ];

  const inventoryHealth = [
    { category: 'Produce', health: 85, status: 'Good' },
    { category: 'Dairy', health: 65, status: 'Warning' },
    { category: 'Meat', health: 90, status: 'Excellent' },
    { category: 'Bakery', health: 45, status: 'Critical' },
  ];

  return (
    <Layout showSidebar={false}>
      <div className="p-6 space-y-6">
        {/* Welcome Banner */}
        <div className="walmart-gradient text-white rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome to Walmart Smart Inventory Hub</h1>
              <p className="text-lg opacity-90">
                Reducing waste, maximizing profits, and supporting communities through AI-driven inventory management
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">92%</div>
              <div className="text-sm opacity-80">System Health Score</div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dashboardStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <div className={`absolute inset-0 ${stat.color} opacity-10`}></div>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <Icon className="h-6 w-6 text-primary" />
                    <Badge variant="secondary">{stat.value}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-sm">{stat.title}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Expiring Soon Alert */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-destructive" />
                Items Expiring Soon
              </CardTitle>
              <CardDescription>Take immediate action to prevent waste</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {expiringItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">Expires in {item.expires}</p>
                  </div>
                  <div className="text-right">
                    <Badge variant="destructive">{item.discount} OFF</Badge>
                    <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                  </div>
                </div>
              ))}
              <Link to="/expiry-tracking">
                <Button className="w-full" variant="outline">
                  View All Expiring Items
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Inventory Health */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                Inventory Health
              </CardTitle>
              <CardDescription>Category-wise inventory status</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {inventoryHealth.map((category, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{category.category}</span>
                    <Badge 
                      variant={
                        category.status === 'Excellent' ? 'default' :
                        category.status === 'Good' ? 'secondary' :
                        category.status === 'Warning' ? 'outline' : 'destructive'
                      }
                    >
                      {category.status}
                    </Badge>
                  </div>
                  <Progress value={category.health} className="h-2" />
                  <p className="text-xs text-muted-foreground">{category.health}% optimal</p>
                </div>
              ))}
              <Link to="/ai-inventory">
                <Button className="w-full" variant="outline">
                  View AI Insights
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Access key features instantly</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/dynamic-discounting">
                <Button className="w-full justify-start" variant="outline">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Dynamic Discounting
                </Button>
              </Link>
              <Link to="/geo-redistribution">
                <Button className="w-full justify-start" variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  Geo Redistribution
                </Button>
              </Link>
              <Link to="/donations">
                <Button className="w-full justify-start" variant="outline">
                  <Heart className="h-4 w-4 mr-2" />
                  Food Donations
                </Button>
              </Link>
              <Link to="/subscriptions">
                <Button className="w-full justify-start" variant="outline">
                  <Package className="h-4 w-4 mr-2" />
                  Subscription Packages
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Subscription Offers Banner */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2">🎁 Weekly Smart Box Subscription</h3>
                <p className="opacity-90">Get curated surplus food boxes with up to 50% savings!</p>
              </div>
              <div className="text-right">
                <Link to="/subscriptions">
                  <Button variant="secondary" size="lg">
                    Subscribe Now
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rescue Near-Expiry Items Banner */}
        <Card className="border-2 border-destructive/50 bg-destructive/5">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="pulse-glow bg-destructive/20 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-destructive">🚨 Rescue Near-Expiry Items</h3>
                  <p className="text-muted-foreground">47 items need immediate attention</p>
                </div>
              </div>
              <div className="text-right space-x-2">
                <Link to="/expiry-tracking">
                  <Button variant="destructive">
                    Take Action
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
