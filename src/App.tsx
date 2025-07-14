
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ExpiryTracking from "./pages/ExpiryTracking";
import DynamicDiscounting from "./pages/DynamicDiscounting";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/expiry-tracking" element={<ExpiryTracking />} />
          <Route path="/dynamic-discounting" element={<DynamicDiscounting />} />
          {/* Enhanced pages with proper images */}
          <Route path="/geo-redistribution" element={
            <div className="p-6 bg-gradient-to-br from-blue-50 to-yellow-50 min-h-screen">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 flex items-center gap-3">
                  🗺️ Geo-Target Redistribution - India
                  <span className="text-2xl">🇮🇳</span>
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">India Distribution Map</h2>
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop" 
                         alt="India Map Distribution" className="w-full h-64 object-cover rounded-lg mb-4" />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <h3 className="font-bold text-red-600">Mumbai</h3>
                        <p className="text-sm">High Surplus</p>
                        <p className="font-semibold text-green-600">₹2.3L</p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <h3 className="font-bold text-blue-600">Delhi</h3>
                        <p className="text-sm">Medium Demand</p>
                        <p className="font-semibold text-green-600">₹1.8L</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h2 className="text-2xl font-semibent mb-4">Transportation Network</h2>
                    <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=300&fit=crop" 
                         alt="Transportation Network" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded">
                        <span>Mumbai → Pune</span>
                        <span className="font-semibold text-green-600">₹45,000 saved</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-yellow-50 rounded">
                        <span>Delhi → Gurgaon</span>
                        <span className="font-semibold text-yellow-600">In Transit</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded">
                        <span>Bangalore → Mysore</span>
                        <span className="font-semibold text-blue-600">₹32,000 saved</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop" 
                         alt="Warehouse" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h3 className="font-bold text-green-600 mb-2">Bangalore Hub</h3>
                    <p className="text-sm text-gray-600">High Demand Region</p>
                    <p className="font-semibold text-2xl text-green-600">₹2.1L</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=200&fit=crop" 
                         alt="Distribution Center" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h3 className="font-bold text-blue-600 mb-2">Chennai Hub</h3>
                    <p className="text-sm text-gray-600">Medium Demand</p>
                    <p className="font-semibold text-2xl text-blue-600">₹1.5L</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=200&fit=crop" 
                         alt="Supply Chain" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h3 className="font-bold text-purple-600 mb-2">Hyderabad Hub</h3>
                    <p className="text-sm text-gray-600">Growing Market</p>
                    <p className="font-semibold text-2xl text-purple-600">₹1.9L</p>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/donations" element={
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 flex items-center gap-3">
                  ❤️ Save the Food & Donate - India Initiative
                  <span className="text-2xl">🇮🇳</span>
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=400&fit=crop" 
                         alt="Food Donation Drive" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Akshaya Patra Foundation</h3>
                    <p className="text-gray-600 mb-4">Feeding underprivileged children across India with nutritious meals</p>
                    <div className="bg-green-50 p-4 rounded-lg mb-4">
                      <p className="text-green-700 font-semibold text-lg">18,500 meals donated this month</p>
                      <p className="text-sm text-green-600">Impact: 2,340 kg food saved from waste</p>
                    </div>
                    <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                      Donate Now - ₹5,000 worth
                    </button>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=400&fit=crop" 
                         alt="Community Kitchen" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold mb-3">Robin Hood Army</h3>
                    <p className="text-gray-600 mb-4">Zero waste, zero hunger initiative connecting surplus food to those in need</p>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-blue-700 font-semibold text-lg">12,400 people fed this week</p>
                      <p className="text-sm text-blue-600">Impact: 1,850 kg food redistributed</p>
                    </div>
                    <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      Schedule Pickup - ₹3,200 worth
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1609501676725-7186f734c2b8?w=300&h=200&fit=crop" 
                         alt="Fresh Vegetables" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h4 className="font-semibold mb-2">Fresh Vegetables</h4>
                    <p className="text-sm text-gray-600">Ready for donation</p>
                    <p className="font-bold text-green-600">₹8,500 worth</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1563379091339-03246963d17f?w=300&h=200&fit=crop" 
                         alt="Dairy Products" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h4 className="font-semibold mb-2">Dairy Products</h4>
                    <p className="text-sm text-gray-600">Expires in 2 days</p>
                    <p className="font-bold text-orange-600">₹4,200 worth</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop" 
                         alt="Bread Products" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h4 className="font-semibold mb-2">Bakery Items</h4>
                    <p className="text-sm text-gray-600">Same day pickup</p>
                    <p className="font-bold text-red-600">₹2,800 worth</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=200&fit=crop" 
                         alt="Packaged Foods" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h4 className="font-semibold mb-2">Packaged Foods</h4>
                    <p className="text-sm text-gray-600">Long shelf life</p>
                    <p className="font-bold text-blue-600">₹6,400 worth</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg p-8 text-center">
                  <h2 className="text-3xl font-bold mb-4">Total Impact This Month</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="text-4xl font-bold">₹2.8 Cr</h3>
                      <p className="text-green-100">Food Value Donated</p>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold">45,000</h3>
                      <p className="text-green-100">Meals Provided</p>
                    </div>
                    <div>
                      <h3 className="text-4xl font-bold">8,200 kg</h3>
                      <p className="text-green-100">Waste Prevented</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/subscriptions" element={
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">📦 Subscription Packages - India</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-blue-200">
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Smart Essentials</h3>
                    <p className="text-3xl font-bold mb-4">₹299<span className="text-sm text-muted-foreground">/month</span></p>
                    <ul className="space-y-2 mb-6">
                      <li>✅ Daily essentials delivery</li>
                      <li>✅ 10% discount on all items</li>
                      <li>✅ Expiry alerts</li>
                    </ul>
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Subscribe Now</button>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-green-200">
                    <h3 className="text-xl font-bold text-green-600 mb-2">Family Plus</h3>
                    <p className="text-3xl font-bold mb-4">₹599<span className="text-sm text-muted-foreground">/month</span></p>
                    <ul className="space-y-2 mb-6">
                      <li>✅ Family-sized portions</li>
                      <li>✅ 15% discount + free delivery</li>
                      <li>✅ Regional specialties</li>
                    </ul>
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg">Subscribe Now</button>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg border-2 border-purple-200">
                    <h3 className="text-xl font-bold text-purple-600 mb-2">Premium Box</h3>
                    <p className="text-3xl font-bold mb-4">₹999<span className="text-sm text-muted-foreground">/month</span></p>
                    <ul className="space-y-2 mb-6">
                      <li>✅ Premium organic products</li>
                      <li>✅ 20% discount + priority delivery</li>
                      <li>✅ Exclusive festival boxes</li>
                    </ul>
                    <button className="w-full bg-purple-600 text-white py-2 rounded-lg">Subscribe Now</button>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/ai-inventory" element={
            <div className="p-6 bg-gradient-to-br from-indigo-50 to-cyan-50 min-h-screen">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 flex items-center gap-3">
                  🤖 AI-Based Inventory Balancing - India
                  <span className="text-2xl">🇮🇳</span>
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">AI Analytics Dashboard</h3>
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop" 
                         alt="AI Analytics Dashboard" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <div className="text-center">
                      <div className="text-5xl font-bold text-green-600 mb-2">94% ✅</div>
                      <p className="text-gray-600 font-medium">Overall inventory optimization across India</p>
                      <div className="mt-4 p-3 bg-green-50 rounded-lg">
                        <p className="text-sm text-green-700">AI has prevented ₹4.2 Cr in potential losses this quarter</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4">Predictive Analytics</h3>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop" 
                         alt="Predictive Analytics" className="w-full h-48 object-cover rounded-lg mb-4" />
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                        <span className="font-medium">Diwali demand spike</span>
                        <span className="font-bold text-orange-600">+340%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <span className="font-medium">Monsoon impact</span>
                        <span className="font-bold text-blue-600">-15%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                        <span className="font-medium">Regional preference shift</span>
                        <span className="font-bold text-green-600">+25%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=400&h=200&fit=crop" 
                         alt="Machine Learning" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h4 className="font-bold text-blue-600 mb-2">Machine Learning</h4>
                    <p className="text-sm text-gray-600">Advanced algorithms</p>
                    <p className="font-semibold text-2xl text-blue-600">97.8%</p>
                    <p className="text-xs text-gray-500">Accuracy Rate</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop" 
                         alt="Data Analytics" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h4 className="font-bold text-green-600 mb-2">Data Processing</h4>
                    <p className="text-sm text-gray-600">Real-time analysis</p>
                    <p className="font-semibold text-2xl text-green-600">2.4M</p>
                    <p className="text-xs text-gray-500">Data Points/Day</p>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg text-center">
                    <img src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=200&fit=crop" 
                         alt="Automation" className="w-full h-32 object-cover rounded-lg mb-4" />
                    <h4 className="font-bold text-purple-600 mb-2">Automation</h4>
                    <p className="text-sm text-gray-600">Smart decisions</p>
                    <p className="font-semibold text-2xl text-purple-600">85%</p>
                    <p className="text-xs text-gray-500">Automated Tasks</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-4">AI Demand Forecasting - Indian Cities</h3>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=400&fit=crop" 
                       alt="AI Demand Forecasting Chart" className="w-full h-64 object-cover rounded-lg mb-4" />
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-600">Mumbai</h4>
                      <p className="text-sm text-gray-600">High Growth</p>
                      <p className="font-bold text-green-600">↗ +18%</p>
                    </div>
                    <div className="text-center p-3 bg-green-50 rounded-lg">
                      <h4 className="font-semibold text-green-600">Delhi</h4>
                      <p className="text-sm text-gray-600">Stable</p>
                      <p className="font-bold text-blue-600">→ +5%</p>
                    </div>
                    <div className="text-center p-3 bg-purple-50 rounded-lg">
                      <h4 className="font-semibold text-purple-600">Bangalore</h4>
                      <p className="text-sm text-gray-600">Rapid Growth</p>
                      <p className="font-bold text-green-600">↗ +22%</p>
                    </div>
                    <div className="text-center p-3 bg-orange-50 rounded-lg">
                      <h4 className="font-semibold text-orange-600">Chennai</h4>
                      <p className="text-sm text-gray-600">Moderate</p>
                      <p className="font-bold text-blue-600">↗ +12%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/categories" element={
            <div className="p-6 bg-gradient-to-br from-orange-50 to-red-50 min-h-screen">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">🛍️ Categories - Indian Products</h1>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    {name: 'Dairy Products', items: '245 items', image: 'https://images.unsplash.com/photo-1563379091339-03246963d17f?w=300&h=300&fit=crop'},
                    {name: 'Indian Snacks', items: '180 items', image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=300&fit=crop'},
                    {name: 'Spices & Masala', items: '320 items', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=300&fit=crop'},
                    {name: 'Rice & Grains', items: '156 items', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=300&fit=crop'},
                    {name: 'Fresh Vegetables', items: '290 items', image: 'https://images.unsplash.com/photo-1609501676725-7186f734c2b8?w=300&h=300&fit=crop'},
                    {name: 'Indian Sweets', items: '95 items', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=300&fit=crop'},
                    {name: 'Beverages', items: '134 items', image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=300&fit=crop'},
                    {name: 'Ready to Cook', items: '78 items', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=300&fit=crop'}
                  ].map((category, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
                      <img src={category.image} alt={category.name} className="w-full h-32 object-cover rounded-lg mb-3" />
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="text-sm text-muted-foreground">{category.items}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          } />
          <Route path="/deals" element={
            <div className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 min-h-screen">
              <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  🎯 Special Deals - India
                  <span className="text-xl">🇮🇳</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {name: 'Amul Butter 500g', original: '₹280', discounted: '₹168', discount: '40%', reason: 'Bulk clearance'},
                    {name: 'Tata Tea Premium 1kg', original: '₹450', discounted: '₹315', discount: '30%', reason: 'Festival offer'},
                    {name: 'Patanjali Atta 10kg', original: '₹420', discounted: '₹294', discount: '30%', reason: 'Weekly special'},
                    {name: 'Haldiram Namkeen Mix', original: '₹150', discounted: '₹90', discount: '40%', reason: 'Near expiry'},
                    {name: 'Mother Dairy Paneer', original: '₹120', discounted: '₹72', discount: '40%', reason: 'Same day fresh'},
                    {name: 'Kissan Mixed Fruit Jam', original: '₹180', discounted: '₹126', discount: '30%', reason: 'Overstock'}
                  ].map((deal, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-lg border-2 border-orange-200 hover:shadow-xl transition-all duration-200">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold">{deal.name}</h3>
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">{deal.discount} OFF</span>
                      </div>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground line-through">{deal.original}</span>
                          <span className="font-bold text-green-600 text-lg">{deal.discounted}</span>
                        </div>
                        <p className="text-sm text-blue-600">{deal.reason}</p>
                      </div>
                      <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          } />
          <Route path="/alerts" element={<div className="p-6"><h1 className="text-2xl font-bold">🚨 Alerts & Notifications - India</h1></div>} />
          <Route path="/analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">📊 Customer Analytics - India</h1></div>} />
          <Route path="/settings" element={<div className="p-6"><h1 className="text-2xl font-bold">⚙️ Settings - India Configuration</h1></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
