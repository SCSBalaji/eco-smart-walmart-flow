
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  TrendingUp,
  TrendingDown,
  Package,
  AlertTriangle,
  MapPin,
  Heart,
  Users,
  IndianRupee,
  Clock,
  Zap,
  Target,
  Award,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  const quickStats = [
    { title: 'Total Revenue', value: '₹12.7 Cr', change: '+18%', positive: true, icon: IndianRupee },
    { title: 'Waste Reduced', value: '2,340 kg', change: '+15%', positive: true, icon: TrendingDown },
    { title: 'Items Near Expiry', value: '156', change: '-12%', positive: true, icon: Clock },
    { title: 'Active Donations', value: '24', change: '+8%', positive: true, icon: Heart },
  ];

  const nearExpiryItems = [
    { name: 'Amul Fresh Paneer', category: 'Dairy', expiry: '2 days', price: '₹85', discount: '30%', location: 'Mumbai Store' },
    { name: 'Haldiram Samosas', category: 'Snacks', expiry: '1 day', price: '₹120', discount: '50%', location: 'Delhi Store' },
    { name: 'Mother Dairy Milk', category: 'Dairy', expiry: '3 days', price: '₹56', discount: '20%', location: 'Bangalore Store' },
    { name: 'Britannia Bread', category: 'Bakery', expiry: '1 day', price: '₹35', discount: '40%', location: 'Chennai Store' },
  ];

  const geoData = [
    { city: 'Mumbai', demand: 'High', surplus: '₹2.3L', stores: 12 },
    { city: 'Delhi', demand: 'Medium', surplus: '₹1.8L', stores: 8 },
    { city: 'Bangalore', demand: 'High', surplus: '₹2.1L', stores: 10 },
    { city: 'Hyderabad', demand: 'Low', surplus: '₹0.9L', stores: 6 },
  ];

  const subscriptionPlans = [
    { name: 'Smart Essentials', price: '₹299/month', subscribers: '2,340', growth: '+12%' },
    { name: 'Family Plus', price: '₹599/month', subscribers: '1,890', growth: '+18%' },
    { name: 'Premium Box', price: '₹999/month', subscribers: '945', growth: '+25%' },
  ];

  // Toast for feedback
  const handleViewAll = () => {
    if (window && window.dispatchEvent) {
      window.dispatchEvent(new CustomEvent('show-toast', { detail: { message: 'Navigating to Expiry Tracking...' } }));
    }
  };
  return (
    <Layout>
      <div className="p-6 space-y-8 bg-gradient-to-br from-blue-50 to-yellow-50">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" 
                 alt="India Flag" className="h-8 w-12 rounded shadow-sm" />
            Walmart India Smart Dashboard
            <Award className="h-8 w-8 text-yellow-500" />
          </h1>
          <p className="text-lg text-muted-foreground">
            AI-Powered Inventory Management | Reducing Food Waste Across India
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200 hover:scale-105">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <stat.icon className="h-5 w-5 text-primary" />
                  <Badge variant={stat.positive ? "default" : "destructive"}>
                    {stat.change}
                  </Badge>
                </div>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Near Expiry Items */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-500" />
                    Items Near Expiry - Take Action
                  </CardTitle>
                  <CardDescription>Products requiring immediate attention across India stores</CardDescription>
                </div>
                <Link to="/expiry-tracking">
                  <Button variant="outline" size="sm" onClick={handleViewAll}>View All</Button>
                </Link>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {nearExpiryItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <img
                          src={
                            item.category === 'Dairy' ? 'https://t3.ftcdn.net/jpg/01/57/03/60/360_F_157036026_9tMnjyVOQ3kjAoQtx8wStEHZVuii1Tq1.jpg?w=80&h=80&fit=crop' :
                            item.category === 'Snacks' ? 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=80&h=80&fit=crop' :
                            item.category === 'Bakery' ? 'https://cdn.zeptonow.com/production/ik-seo/tr:w-640,ar-1000-1000,pr-true,f-auto,q-80/cms/product_variant/c97ae948-133d-419b-bf02-66fbad14aabe/Britannia-100-Whole-Wheat-Bread-No-Maida-.jpeg?w=80&h=80&fit=crop' :
                            'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=80&h=80&fit=crop'
                          }
                          alt={item.category}
                          className="rounded w-10 h-10 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold">{item.name}</h4>
                          <p className="text-sm text-muted-foreground">{item.location}  {item.category}</p>
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="destructive" className="text-xs">{item.expiry}</Badge>
                        <Badge variant="secondary" className="text-xs">{item.discount} OFF</Badge>
                      </div>
                      <p className="font-semibold text-green-600">{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-500" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Link to="/dynamic-discounting" className="block">
                <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" aria-label="Go to Dynamic Discounting">
                  <Target className="h-4 w-4 mr-2" />
                  Dynamic Discounting
                </Button>
              </Link>
              <Link to="/geo-redistribution" className="block">
                <Button variant="outline" className="w-full justify-start" aria-label="Go to Geo Redistribution">
                  <MapPin className="h-4 w-4 mr-2" />
                  Geo Redistribution
                </Button>
              </Link>
              <Link to="/donations" className="block">
                <Button variant="outline" className="w-full justify-start" aria-label="Go to Food Donations">
                  <Heart className="h-4 w-4 mr-2" />
                  Food Donations
                </Button>
              </Link>
              <Link to="/ai-inventory" className="block">
                <Button variant="outline" className="w-full justify-start" aria-label="Go to AI Inventory Balance">
                  <Package className="h-4 w-4 mr-2" />
                  AI Inventory Balance
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Geo Distribution & Subscriptions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Geo Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-500" />
                Geo Distribution - Indian Cities
              </CardTitle>
              <CardDescription>Surplus inventory across major Indian cities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {geoData.map((city, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <img
                        src={
                          city.city === 'Mumbai' ? 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=64&h=64&fit=crop' :
                          city.city === 'Delhi' ? 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=64&h=64&fit=crop' :
                          city.city === 'Bangalore' ? 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=64&h=64&fit=crop' :
                          city.city === 'Hyderabad' ? 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=64&h=64&fit=crop' :
                          'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?w=64&h=64&fit=crop'
                        }
                        alt={city.city}
                        className="rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{city.city}</h4>
                        <p className="text-sm text-muted-foreground">{city.stores} stores</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={city.demand === 'High' ? 'default' : city.demand === 'Medium' ? 'secondary' : 'outline'}>
                        {city.demand} Demand
                      </Badge>
                      <p className="text-sm font-semibold text-green-600">{city.surplus}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Subscription Plans */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-500" />
                Subscription Plans Performance
              </CardTitle>
              <CardDescription>Customer subscription analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subscriptionPlans.map((plan, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold">{plan.name}</h4>
                        <p className="text-sm text-muted-foreground">{plan.price}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{plan.subscribers}</p>
                        <Badge variant="default" className="text-xs">{plan.growth}</Badge>
                      </div>
                    </div>
                    <Progress value={75 + index * 5} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sustainability Impact */}
        <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              🌱 Sustainability Impact - India Initiative
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold">2,340 kg</h3>
                <p className="text-green-100">Food Waste Prevented</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">₹12.7 Cr</h3>
                <p className="text-green-100">Revenue Recovered</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">18,500</h3>
                <p className="text-green-100">Meals Donated</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">34%</h3>
                <p className="text-green-100">Waste Reduction</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Home;
