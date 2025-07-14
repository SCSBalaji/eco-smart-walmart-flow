
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
          {/* Placeholder routes for other features */}
          <Route path="/geo-redistribution" element={
            <div className="p-6 bg-gradient-to-br from-blue-50 to-yellow-50 min-h-screen">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  🗺️ Geo-Target Redistribution - India
                </h1>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <img src="https://maps.googleapis.com/maps/api/staticmap?center=India&zoom=5&size=800x400&maptype=roadmap&markers=color:red%7Clabel:M%7C19.0760,72.8777&markers=color:blue%7Clabel:D%7C28.7041,77.1025&markers=color:green%7Clabel:B%7C12.9716,77.5946&key=demo" 
                       alt="India Geo Distribution" className="w-full rounded-lg mb-4" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-red-50 rounded">
                      <h3 className="font-bold text-red-600">Mumbai</h3>
                      <p>High Surplus: ₹2.3L</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded">
                      <h3 className="font-bold text-blue-600">Delhi</h3>
                      <p>Medium Demand: ₹1.8L</p>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded">
                      <h3 className="font-bold text-green-600">Bangalore</h3>
                      <p>High Demand: ₹2.1L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/donations" element={
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  ❤️ Save the Food & Donate - India Initiative
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400" alt="Food Donation" className="w-full rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Akshaya Patra Foundation</h3>
                    <p className="text-muted-foreground mb-4">Feeding underprivileged children across India</p>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-green-700 font-semibold">18,500 meals donated this month</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400" alt="Community Kitchen" className="w-full rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Robin Hood Army</h3>
                    <p className="text-muted-foreground mb-4">Zero waste, zero hunger initiative</p>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="text-blue-700 font-semibold">2,340 kg food saved from waste</p>
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
                <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
                  🤖 AI-Based Inventory Balancing - India
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">Inventory Health Score</h3>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">92% ✅</div>
                      <p className="text-muted-foreground">Overall inventory optimization across India</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-semibold mb-4">AI Predictions</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Diwali demand spike</span>
                        <span className="font-semibold text-orange-600">+340%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Monsoon impact</span>
                        <span className="font-semibold text-blue-600">-15%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Regional preference shift</span>
                        <span className="font-semibold text-green-600">+25%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold mb-4">Demand Forecasting - Indian Cities</h3>
                  <img src="https://via.placeholder.com/800x300/3b82f6/ffffff?text=AI+Demand+Forecasting+Chart" alt="AI Forecasting" className="w-full rounded-lg" />
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
                    {name: 'Dairy Products', items: '245 items', image: 'https://via.placeholder.com/150x150/10b981/ffffff?text=Dairy'},
                    {name: 'Indian Snacks', items: '180 items', image: 'https://via.placeholder.com/150x150/f59e0b/ffffff?text=Snacks'},
                    {name: 'Spices & Masala', items: '320 items', image: 'https://via.placeholder.com/150x150/ef4444/ffffff?text=Spices'},
                    {name: 'Rice & Grains', items: '156 items', image: 'https://via.placeholder.com/150x150/8b5cf6/ffffff?text=Grains'},
                    {name: 'Fresh Vegetables', items: '290 items', image: 'https://via.placeholder.com/150x150/22c55e/ffffff?text=Veggies'},
                    {name: 'Indian Sweets', items: '95 items', image: 'https://via.placeholder.com/150x150/f97316/ffffff?text=Sweets'},
                    {name: 'Beverages', items: '134 items', image: 'https://via.placeholder.com/150x150/06b6d4/ffffff?text=Drinks'},
                    {name: 'Ready to Cook', items: '78 items', image: 'https://via.placeholder.com/150x150/ec4899/ffffff?text=Ready'}
                  ].map((category, index) => (
                    <div key={index} className="bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer">
                      <img src={category.image} alt={category.name} className="w-full rounded-lg mb-3" />
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
