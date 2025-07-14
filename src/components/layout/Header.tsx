
import { Link, useLocation } from 'react-router-dom';
import { Bell, Search, ShoppingCart, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const Header = () => {
  const location = useLocation();
  const [notifications] = useState(8);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Deals', path: '/deals' },
    { name: 'My Subscriptions', path: '/subscriptions' },
    { name: 'Donations', path: '/donations' },
    { name: 'Inventory Dashboard', path: '/inventory' },
  ];

  return (
    <header className="bg-primary text-white shadow-lg">
      {/* Top bar */}
      <div className="bg-primary-foreground text-primary text-sm py-1">
        <div className="container mx-auto px-4 text-center">
          🇮🇳 Walmart India - Smart Inventory Management | Reducing Food Waste by 30% Across India 🌱
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="https://logos-world.net/wp-content/uploads/2020/09/Walmart-Logo.png" 
              alt="Walmart India" 
              className="h-10 w-auto bg-white p-1 rounded"
            />
            <div className="text-sm">
              <div className="font-bold text-lg">Walmart India</div>
              <div className="text-xs opacity-90">Smart Inventory Hub</div>
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search products, expiry dates, donations in India..."
                className="pl-10 bg-white text-gray-900"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 relative">
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 border-t border-white/20 pt-4">
          <div className="flex space-x-8 overflow-x-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-200 hover:text-secondary whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-secondary border-b-2 border-secondary pb-1 transform scale-105'
                    : 'text-white/90 hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
