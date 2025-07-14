
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
          <Route path="/geo-redistribution" element={<div className="p-6"><h1 className="text-2xl font-bold">Geo-Target Redistribution - Coming Soon</h1></div>} />
          <Route path="/donations" element={<div className="p-6"><h1 className="text-2xl font-bold">Save the Food & Donate - Coming Soon</h1></div>} />
          <Route path="/subscriptions" element={<div className="p-6"><h1 className="text-2xl font-bold">Subscription Packages - Coming Soon</h1></div>} />
          <Route path="/ai-inventory" element={<div className="p-6"><h1 className="text-2xl font-bold">AI-Based Inventory Balancing - Coming Soon</h1></div>} />
          <Route path="/categories" element={<div className="p-6"><h1 className="text-2xl font-bold">Categories - Coming Soon</h1></div>} />
          <Route path="/deals" element={<div className="p-6"><h1 className="text-2xl font-bold">Deals - Coming Soon</h1></div>} />
          <Route path="/alerts" element={<div className="p-6"><h1 className="text-2xl font-bold">Alerts - Coming Soon</h1></div>} />
          <Route path="/analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">Analytics - Coming Soon</h1></div>} />
          <Route path="/settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings - Coming Soon</h1></div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
