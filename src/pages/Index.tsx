import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SearchBar } from '@/components/SearchBar';
import { CategoryTabs } from '@/components/CategoryTabs';
import { ProductList } from '@/components/ProductList';
import { BottomNavigation } from '@/components/BottomNavigation';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  const handleAddToCart = (productId: string) => {
    console.log(`Added product ${productId} to cart`);
  };

  const handleNavigation = (itemId: string) => {
    console.log(`Navigated to ${itemId}`);
  };

  return (
    <div className="bg-white flex max-w-[480px] w-full flex-col overflow-hidden items-center mx-auto pt-4 min-h-screen">
      <Header />
      
      <main className="flex flex-col items-center w-full flex-1">
        <HeroSection />
        
        <SearchBar onSearch={handleSearch} />
        
        <CategoryTabs onCategoryChange={handleCategoryChange} />
        
        <ProductList
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onAddToCart={handleAddToCart}
        />
      </main>
      
      <BottomNavigation onNavigate={handleNavigation} />
    </div>
  );
};

export default Index;
