import React, { useState } from 'react';

interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  activeIcon?: string;
}

const navigationItems: NavigationItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: 'https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/5dc3dcf3c81cd8798e911194728bb6c6f5638c20?placeholderIfAbsent=true'
  },
  {
    id: 'favorites',
    label: 'Favorites',
    icon: 'https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/bd6fc20bfb7759416c72abac7fde03d373b72854?placeholderIfAbsent=true'
  },
  {
    id: 'feedback',
    label: 'Feedback',
    icon: 'https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/5efa3cc15087ee273c7fee22e3192eb21e7deff2?placeholderIfAbsent=true'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/2d21067bcedeeca7c08934072c2563a1edd56f2f?placeholderIfAbsent=true'
  }
];

interface BottomNavigationProps {
  onNavigate?: (itemId: string) => void;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({ onNavigate }) => {
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    onNavigate?.(itemId);
  };

  return (
    <nav className="bg-white shadow-[0px_-1px_12px_rgba(0,0,0,0.07)] self-stretch flex w-full items-stretch gap-5 text-sm text-gray-500 font-medium whitespace-nowrap tracking-[-0.56px] justify-between mt-[179px] px-[31px] py-[15px]">
      {navigationItems.map((item) => (
        <button
          key={item.id}
          onClick={() => handleItemClick(item.id)}
          className={`flex flex-col items-center transition-colors ${
            activeItem === item.id ? 'text-[rgba(184,134,11,1)]' : 'hover:text-gray-700'
          }`}
          aria-label={item.label}
          aria-current={activeItem === item.id ? 'page' : undefined}
        >
          <img
            src={item.icon}
            className={`object-contain shrink-0 ${
              item.id === 'home' ? 'aspect-[1.09] w-6' :
              item.id === 'favorites' ? 'aspect-[1.11] w-5' :
              item.id === 'feedback' ? 'aspect-[1] w-5' :
              'aspect-[0.95] w-[19px]'
            }`}
            alt={`${item.label} icon`}
          />
          <span className="mt-[5px]">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};
