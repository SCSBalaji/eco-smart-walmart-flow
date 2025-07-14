
import { Link, useLocation } from 'react-router-dom';
import {
  Package,
  AlertTriangle,
  MapPin,
  Heart,
  BarChart3,
  Clock,
  TrendingUp,
  Users,
  Settings,
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const sidebarItems = [
    {
      title: 'Inventory Management',
      items: [
        { name: 'Smart Expiry Tracking', path: '/expiry-tracking', icon: Clock },
        { name: 'AI Inventory Balance', path: '/ai-inventory', icon: BarChart3 },
        { name: 'Alerts & Notifications', path: '/alerts', icon: AlertTriangle },
      ],
    },
    {
      title: 'Operations',
      items: [
        { name: 'Dynamic Discounting', path: '/dynamic-discounting', icon: TrendingUp },
        { name: 'Geo Redistribution', path: '/geo-redistribution', icon: MapPin },
        { name: 'Food Donations', path: '/donations', icon: Heart },
      ],
    },
    {
      title: 'Customer Services',
      items: [
        { name: 'Subscription Packages', path: '/subscriptions', icon: Package },
        { name: 'Customer Analytics', path: '/analytics', icon: Users },
      ],
    },
    {
      title: 'System',
      items: [
        { name: 'Settings', path: '/settings', icon: Settings },
      ],
    },
  ];

  return (
    <aside className="w-64 bg-sidebar text-sidebar-foreground shadow-lg h-screen overflow-y-auto">
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-6 text-sidebar-primary">
          Admin Dashboard
        </h2>

        {sidebarItems.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="text-sm font-medium text-sidebar-foreground/70 uppercase tracking-wider mb-3">
              {section.title}
            </h3>
            <nav className="space-y-1">
              {section.items.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sidebar-accent text-sidebar-primary'
                        : 'text-sidebar-foreground/80 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
