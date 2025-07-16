import React, { useState } from 'react';

interface CategoryTabsProps {
  onCategoryChange?: (category: string) => void;
}

const categories = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'room-service', label: 'Room Service' }
];

export const CategoryTabs: React.FC<CategoryTabsProps> = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  return (
    <nav className="flex w-full max-w-[378px] items-stretch gap-2 text-base text-[rgba(85,85,85,1)] font-medium mt-[21px]" role="tablist">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.id)}
          className={`flex flex-col items-stretch justify-center px-[19px] py-2.5 rounded-[20px] transition-colors ${
            activeCategory === category.id
              ? 'bg-[rgba(184,134,11,1)] text-white font-semibold'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
          role="tab"
          aria-selected={activeCategory === category.id}
          aria-controls={`panel-${category.id}`}
        >
          <span className="whitespace-nowrap">{category.label}</span>
        </button>
      ))}
    </nav>
  );
};
