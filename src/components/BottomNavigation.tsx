import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Heart, MessageSquare, Settings } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  path: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: Home,
    path: '/'
  },
  {
    id: 'favorites',
    label: 'Favorites',
    icon: Heart,
    path: '/favorites'
  },
  {
    id: 'feedback',
    label: 'Feedback',
    icon: MessageSquare,
    path: '/feedback'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: Settings,
    path: '/settings'
  }
];

interface BottomNavigationProps {
  onNavigate?: (itemId: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemId: string, path: string) => {
    setActiveItem(itemId);
    navigate(path);
    onNavigate?.(itemId);
  };

  return (
    <nav className="bg-background border-t border-border shadow-[0px_-1px_12px_rgba(0,0,0,0.07)] self-stretch flex w-full items-stretch gap-5 text-sm text-muted-foreground font-medium whitespace-nowrap tracking-[-0.56px] justify-between px-[31px] py-[15px] fixed bottom-0 left-0 right-0 max-w-[480px] mx-auto z-50">
      {navigationItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = activeItem === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.id, item.path)}
            className={`flex flex-col items-center transition-colors ${
              isActive ? 'text-golden' : 'hover:text-foreground'
            }`}
            aria-label={item.label}
            aria-current={isActive ? 'page' : undefined}
          >
            <IconComponent className="h-6 w-6" />
            <span className="mt-[5px]">{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
};
