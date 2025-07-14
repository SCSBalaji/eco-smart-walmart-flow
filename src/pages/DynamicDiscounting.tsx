
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
  DollarSign,
  Percent,
  Clock,
  Target,
  Zap,
  BarChart3,
} from 'lucide-react';
import Layout from '@/components/layout/Layout';

const DynamicDiscounting = () => {
  const [autoDiscounting, setAutoDiscounting] = useState(true);
  const [discountRange, setDiscountRange] = useState([20]);

  const discountRules = [
    {
      id: 1,
      name: 'Expiry Based Discount',
      condition: 'Days to expiry ≤ 2',
      discount: '50-70%',
      status: 'active',
      performance: '+15% conversion',
      items: 23,
    },
    {
      id: 2,
      name: 'Seasonal Clearance',
      condition: 'Summer items in Fall',
      discount: '30-60%',
      status: 'active',
      performance: '+22% revenue',
      items: 67,
    },
    {
      id: 3,
      name: 'Overstock Liquidation',
      condition: 'Inventory > 150% of avg',
      discount: '25-45%',
      status: 'paused',
      performance: '+8% turnover',
      items: 12,
    },
    {
      id: 4,
      name: 'Loyalty Member Boost',
      condition: 'Premium members',
      discount: '10-25%',
      status: 'active',
      performance: '+31% retention',
      items: 156,
    },
  ];

  const performanceMetrics = [
    { title: 'Revenue Recovery', value: '$127K', change: '+18%', positive: true },
    { title: 'Waste Reduction', value: '34%', change: '+12%', positive: true },
    { title: 'Conversion Rate', value: '23%', change: '+7%', positive: true },
    { title: 'Average Discount', value: '42%', change: '-3%', positive: true },
  ];

  const activeDiscounts = [
    {
      id: 1,
      product: 'Organic Banana Bundle',
      originalPrice: 4.99,
      discountedPrice: 2.49,
      discount: 50,
      reason: 'Expiring in 1 day',
      demand: 'High',
      category: 'Produce',
    },
    {
      id: 2,
      product: 'Fresh Salmon Fillets',
      originalPrice: 12.99,
      discountedPrice: 7.79,
      discount: 40,
      reason: 'Low demand prediction',
      demand: 'Medium',
      category: 'Seafood',
    },
    {
      id: 3,
      product: 'Artisan Sourdough',
      originalPrice: 5.49,
      discountedPrice: 1.65,
      discount: 70,
      reason: 'Same day expiry',
      demand: 'Low',
      category: 'Bakery',
    },
  ];

  return (
    <Layout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dynamic Discounting Model</h1>
            <p className="text-muted-foreground mt-1">
              AI-powered pricing optimization to maximize revenue and reduce waste
            </p>
          </div>
          <div className="flex gap-2">
            <Button>
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
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className="text-2xl font-bold">{metric.value}</div>
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
                <CardTitle>Currently Active Discounts</CardTitle>
                <CardDescription>
                  Real-time discounts applied by AI based on expiry, demand, and inventory levels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeDiscounts.map((item) => (
                    <div key={item.id} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-lg">{item.product}</h3>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary" className="mb-2">
                            {item.discount}% OFF
                          </Badge>
                          <div className="text-sm text-muted-foreground">
                            Demand: {item.demand}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Original Price
                          </label>
                          <div className="text-lg font-semibold line-through text-muted-foreground">
                            ${item.originalPrice}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Discounted Price
                          </label>
                          <div className="text-lg font-semibold text-green-600">
                            ${item.discountedPrice}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            Savings
                          </label>
                          <div className="text-lg font-semibold text-primary">
                            ${(item.originalPrice - item.discountedPrice).toFixed(2)}
                          </div>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-muted-foreground">
                            AI Reason
                          </label>
                          <div className="text-sm font-medium">{item.reason}</div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Adjust Discount
                        </Button>
                        <Button size="sm" variant="outline">
                          View Analytics
                        </Button>
                        <Button size="sm" variant="destructive">
                          Remove Discount
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
                <CardTitle>Discount Rules & Automation</CardTitle>
                <CardDescription>
                  Configure AI-driven discount rules based on various conditions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {discountRules.map((rule) => (
                    <div key={rule.id} className="border rounded-lg p-4">
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
                  <CardTitle>AI Configuration</CardTitle>
                  <CardDescription>
                    Configure how the AI calculates and applies discounts
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
                      Automatically apply AI-suggested discounts without manual approval
                    </p>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium">
                      Maximum Auto-Discount: {discountRange[0]}%
                    </label>
                    <Slider
                      value={discountRange}
                      onValueChange={setDiscountRange}
                      max={80}
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
                      Minimum Profit Margin
                    </label>
                    <Input type="number" placeholder="15" className="w-full" />
                    <p className="text-sm text-muted-foreground">
                      Maintain at least this profit margin percentage
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Discount Factors</CardTitle>
                  <CardDescription>
                    Weight different factors in AI discount calculations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Days to Expiry</label>
                      <span className="text-sm text-muted-foreground">70%</span>
                    </div>
                    <Slider defaultValue={[70]} max={100} step={5} className="w-full" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Demand Prediction</label>
                      <span className="text-sm text-muted-foreground">50%</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={5} className="w-full" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Inventory Level</label>
                      <span className="text-sm text-muted-foreground">30%</span>
                    </div>
                    <Slider defaultValue={[30]} max={100} step={5} className="w-full" />
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <label className="text-sm font-medium">Seasonal Trends</label>
                      <span className="text-sm text-muted-foreground">40%</span>
                    </div>
                    <Slider defaultValue={[40]} max={100} step={5} className="w-full" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>
                  Configure alerts for discount events and performance
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">High Impact Discounts</label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Daily Performance Summary</label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Discount Rule Triggers</label>
                      <Switch />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Revenue Alerts</label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Inventory Clearance</label>
                      <Switch defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <label className="text-sm font-medium">Customer Response Metrics</label>
                      <Switch />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default DynamicDiscounting;
