import React from 'react';
import { Globe, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="flex w-full max-w-[374px] gap-5 justify-between items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-1 text-foreground hover:text-primary transition-colors" aria-label="Language">
            <Globe className="h-6 w-6" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-background border border-border shadow-lg">
          <DropdownMenuItem className="hover:bg-muted">English</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-muted">አማርኛ (Amharic)</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-muted">Afaan Oromoo</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-muted">Sidaamu</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      <div className="text-xl font-bold text-primary">
        HOTEL TOUR
      </div>
      
      <button 
        onClick={toggleTheme}
        className="p-1 text-foreground hover:text-primary transition-colors" 
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </button>
    </header>
  );
};
