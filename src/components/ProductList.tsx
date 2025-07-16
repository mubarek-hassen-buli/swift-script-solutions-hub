import React from 'react';
import { ProductCard } from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: string;
  rating: number;
  reviewCount: string;
  image: string;
  category: string;
}

interface ProductListProps {
  searchQuery?: string;
  activeCategory?: string;
  onAddToCart?: (id: string) => void;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Black Forest',
    price: '135.00 birr',
    rating: 4.5,
    reviewCount: '4.5',
    image: 'https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/4c2cba2e4b85ab46d410f9d9c547d520fc1215b0?placeholderIfAbsent=true',
    category: 'food'
  },
  {
    id: '2',
    name: 'Black Forest',
    price: '135.00 birr',
    rating: 4.5,
    reviewCount: '4.5',
    image: 'https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/4c2cba2e4b85ab46d410f9d9c547d520fc1215b0?placeholderIfAbsent=true',
    category: 'food'
  }
];

export const ProductList: React.FC<ProductListProps> = ({
  searchQuery = '',
  activeCategory = 'all',
  onAddToCart
}) => {
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="flex flex-col items-center w-full" aria-label="Product list">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          rating={product.rating}
          reviewCount={product.reviewCount}
          image={product.image}
          onAddToCart={onAddToCart}
        />
      ))}
      {filteredProducts.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </section>
  );
};
