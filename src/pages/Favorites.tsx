import React from 'react';
import { Header } from '@/components/Header';
import { BottomNavigation } from '@/components/BottomNavigation';
import { Heart } from 'lucide-react';

const Favorites = () => {
  const handleNavigation = (itemId: string) => {
    console.log(`Navigated to ${itemId}`);
  };

  return (
    <div className="bg-background flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto pt-4 min-h-screen">
      <Header />
      
      <main className="flex flex-col w-full flex-1 px-6 py-6 items-center justify-center">
        <h1 className="text-2xl font-semibold text-foreground mb-12">Your Favorites</h1>
        
        <div className="flex flex-col items-center text-center">
          <div className="mb-6">
            <Heart className="h-20 w-20 text-muted-foreground/50" />
          </div>
          
          <h2 className="text-lg font-medium text-foreground mb-2">No favorites yet</h2>
          <p className="text-muted-foreground max-w-sm">
            Add services to your favorites to see them here
          </p>
        </div>
      </main>
      
      <BottomNavigation onNavigate={handleNavigation} />
    </div>
  );
};

export default Favorites;