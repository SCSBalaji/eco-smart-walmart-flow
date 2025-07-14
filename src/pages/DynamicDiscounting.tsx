
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  TrendingUp,
  TrendingDown,
  IndianRupee,
  Percent,
  Clock,
  Target,
  Zap,
  BarChart3,
  MapPin,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const DynamicDiscounting = () => {
  const [autoDiscounting, setAutoDiscounting] = useState(true);
  const [discountRange, setDiscountRange] = useState([25]);

  const discountRules = [
    {
      id: 1,
      name: 'Expiry Based Discount - Indian Products',
      condition: 'Days to expiry ≤ 2',
      discount: '40-60%',
      status: 'active',
      performance: '+22% conversion',
      items: 45,
    },
    {
      id: 2,
      name: 'Festival Clearance - Diwali',
      condition: 'Post-festival items',
      discount: '30-50%',
      status: 'active',
      performance: '+18% revenue',
      items: 89,
    },
    {
      id: 3,
      name: 'Regional Overstock - South India',
      condition: 'Inventory > 150% of avg',
      discount: '25-40%',
      status: 'paused',
      performance: '+12% turnover',
      items: 23,
    },
    {
      id: 4,
      name: 'Monsoon Special - Mumbai',
      condition: 'Weather-based demand',
      discount: '15-30%',
      status: 'active',
      performance: '+28% retention',
      items: 67,
    },
  ];

  const performanceMetrics = [
    { title: 'Revenue Recovery', value: '₹8.4 Cr', change: '+22%', positive: true },
    { title: 'Waste Reduction', value: '28%', change: '+15%', positive: true },
    { title: 'Conversion Rate', value: '31%', change: '+9%', positive: true },
    { title: 'Average Discount', value: '38%', change: '-2%', positive: true },
  ];

  const activeDiscounts = [
    {
      id: 1,
      product: 'Amul Fresh Paneer 200g',
      originalPrice: 89,
      discountedPrice: 45,
      discount: 49,
      reason: 'Expiring in 1 day',
      demand: 'High',
      category: 'Dairy',
      location: 'Mumbai',
      image: 'https://via.placeholder.com/60x60/4f46e5/ffffff?text=P'
    },
    {
      id: 2,
      product: 'Haldiram Samosa Pack',
      originalPrice: 120,
      discountedPrice: 72,
      discount: 40,
      reason: 'Low demand in Chennai',
      demand: 'Medium',
      category: 'Snacks',
      location: 'Chennai',
      image: 'https://via.placeholder.com/60x60/059669/ffffff?text=S'
    },
    {
      id: 3,
      product: 'Mother Dairy Curd 400g',
      originalPrice: 65,
      discountedPrice: 20,
      discount: 69,
      reason: 'Same day expiry',
      demand: 'Low',
      category: 'Dairy',
      location: 'Delhi',
      image: 'https://via.placeholder.com/60x60/dc2626/ffffff?text=C'
    },
    {
      id: 4,
      product: 'Britannia Good Day Biscuits',
      originalPrice: 45,
      discountedPrice: 27,
      discount: 40,
      reason: 'Festival overstock',
      demand: 'High',
      category: 'Biscuits',
      location: 'Bangalore',
      image: 'https://via.placeholder.com/60x60/7c3aed/ffffff?text=B'
    },
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6 bg-gradient-to-br from-blue-50 to-yellow-50">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Target className="h-8 w-8 text-primary" />
              Dynamic Discounting - India
            </h1>
            <p className="text-muted-foreground mt-1 flex items-center gap-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" 
                   alt="India" className="h-4 w-6 rounded" />
              AI-powered pricing optimization across Indian stores
            </p>
          </div>
          <div className="flex gap-2">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
              <Zap className="h-4 w-4 mr-2" />
              Run AI Analysis
            </Button>
            <Button variant="outline">
              <BarChart3 className="h-4 w-4 mr-2" />
              View Reports
            </Button>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {performanceMetrics.map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <IndianRupee className="h-4 w-4" />
                  {metric.title}
                </CardTitle>
                <div className="text-2xl font-bold text-primary">{metric.value}</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  {metric.positive ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-red-500" />
                  )}
                  <span className={`text-sm font-medium ${
                    metric.positive ? 'text-green-500' : 'text-red-500'
                  }`}>
                    {metric.change}
                  </span>
                  <span className="text-sm text-muted-foreground">vs last month</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="active-discounts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="active-discounts">Active Discounts</TabsTrigger>
            <TabsTrigger value="discount-rules">Discount Rules</TabsTrigger>
            <TabsTrigger value="settings">AI Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="active-discounts" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Percent className="h-5 w-5 text-green-500" />
                  Currently Active Discounts - Indian Products
                </CardTitle>
                <CardDescription>
                  Real-time discounts applied by AI across Indian stores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeDiscounts.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex items-start gap-4 mb-4">
                        <img src={item.image} alt={item.product} className="rounded-lg" />
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg">{item.product}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline">{item.category}</Badge>
                            <Badge variant="secondary" className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {item.location}
                            </Badge>
                          </div>
                        </div>
                        <Badge variant="destructive" className="text-lg">
                          {item.discount}% OFF
                        </Badge>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Original Price
                          </label>
                          <div className="text-lg font-semibold line-through text-muted-foreground">
                            ₹{item.originalPrice}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Discounted Price
                          </label>
                          <div className="text-lg font-semibold text-green-600">
                            ₹{item.discountedPrice}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            You Save
                          </label>
                          <div className="text-lg font-semibold text-primary">
                            ₹{item.originalPrice - item.discountedPrice}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-muted-foreground">AI Reason</p>
                          <p className="font-medium">{item.reason}</p>
                        </div>
                        <Badge variant={item.demand === 'High' ? 'default' : item.demand === 'Medium' ? 'secondary' : 'outline'}>
                          {item.demand} Demand
                        </Badge>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          Adjust Discount
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          View Analytics
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="discount-rules" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-500" />
                  Discount Rules & Automation - India
                </CardTitle>
                <CardDescription>
                  Configure AI-driven discount rules for Indian market conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discountRules.map((rule) => (
                    <div key={rule.id} className="border rounded-lg p-4 hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{rule.name}</h3>
                          <p className="text-sm text-muted-foreground">{rule.condition}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={rule.status === 'active' ? 'default' : 'secondary'}>
                            {rule.status}
                          </Badge>
                          <Switch checked={rule.status === 'active'} />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Discount Range
                          </label>
                          <div className="text-lg font-semibold text-primary">
                            {rule.discount}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Performance
                          </label>
                          <div className="text-sm font-semibold text-green-600">
                            {rule.performance}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Active Items
                          </label>
                          <div className="text-lg font-semibold">
                            {rule.items} items
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Edit Rule
                        </Button>
                        <Button size="sm" variant="outline">
                          View Items
                        </Button>
                        <Button size="sm" variant="outline">
                          Clone Rule
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Button className="w-full" variant="outline">
                    <Target className="h-4 w-4 mr-2" />
                    Create New Discount Rule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>AI Configuration - India</CardTitle>
                  <CardDescription>
                    Configure AI for Indian market conditions and pricing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">
                        Auto-Apply Discounts
                      </label>
                      <Switch 
                        checked={autoDiscounting} 
                        onCheckedChange={setAutoDiscounting}
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Automatically apply AI-suggested discounts for Indian products
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      Maximum Auto-Discount: {discountRange[0]}%
                    </label>
                    <Slider
                      value={discountRange}
                      onValueChange={setDiscountRange}
                      max={70}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                    <p className="text-sm text-muted-foreground">
                      AI won't auto-apply discounts higher than this percentage
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      Minimum Profit Margin (%)
                    </label>
                    <Input type="number" placeholder="12" className="w-full" />
                    <p className="text-sm text-muted-foreground">
                      Maintain at least this profit margin for Indian operations
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Indian Market Factors</CardTitle>
                  <CardDescription>
                    Weight different factors for Indian market dynamics
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Festival Seasons</label>
                      <span className="text-sm text-muted-foreground">80%</span>
                    </div>
                    <Slider defaultValue={[80]} max={100} step={5} className="w-full" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Regional Preferences</label>
                      <span className="text-sm text-muted-foreground">65%</span>
                    </div>
                    <Slider defaultValue={[65]} max={100} step={5} className="w-full" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Weather Impact</label>
                      <span className="text-sm text-muted-foreground">45%</span>
                    </div>
                    <Slider defaultValue={[45]} max={100} step={5} className="w-full" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Local Competition</label>
                      <span className="text-sm text-muted-foreground">55%</span>
                    </div>
                    <Slider defaultValue={[55]} max={100} step={5} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DynamicDiscounting;
