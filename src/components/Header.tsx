import React from 'react';
import { Menu, User } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="flex w-full max-w-[374px] gap-5 justify-between items-center">
      <button className="p-1 text-foreground hover:text-primary transition-colors" aria-label="Menu">
        <Menu className="h-6 w-6" />
      </button>
      
      <div className="text-xl font-bold text-primary">
        HOTEL TOUR
      </div>
      
      <button className="p-1 text-foreground hover:text-primary transition-colors" aria-label="Profile">
        <User className="h-6 w-6" />
      </button>
    </header>
  );
};
