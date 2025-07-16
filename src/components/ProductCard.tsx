import React, { useState } from 'react';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  rating: number;
  reviewCount: string;
  image: string;
  onAddToCart?: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  rating,
  reviewCount,
  image,
  onAddToCart
}) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    onAddToCart?.(id);
    setTimeout(() => setIsAdded(false), 1000);
  };

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <img
          key={`full-${i}`}
          src="https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/33bc2366fa37fdff51dd300489df376f61e9660a?placeholderIfAbsent=true"
          className="aspect-[1.07] object-contain w-4 shrink-0"
          alt="Full star"
        />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <img
          key="half"
          src="https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/3dab55e1c21f4419377bed63ee8ee05477e3e5c4?placeholderIfAbsent=true"
          className="aspect-[1.07] object-contain w-4 shrink-0"
          alt="Half star"
        />
      );
    }

    return stars;
  };

  return (
    <article className="bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.15)] flex w-[380px] max-w-full items-stretch gap-5 justify-between mt-6 pr-4 rounded-xl hover:shadow-lg transition-shadow">
      <div className="flex items-stretch gap-2.5">
        <img
          src={image}
          className="aspect-[0.97] object-contain w-[113px] shrink-0 max-w-full rounded-[12px_0px_0px_12px]"
          alt={name}
        />
        <div className="flex flex-col items-stretch my-auto">
          <h3 className="text-[rgba(30,30,30,1)] text-base font-medium">
            {name}
          </h3>
          <div className="flex items-stretch gap-0.5 mt-3">
            <div>
              <div className="flex items-stretch gap-px">
                {renderStars()}
              </div>
              <div className="text-[rgba(184,134,11,1)] text-base font-semibold mt-[11px]">
                {price}
              </div>
            </div>
            <div className="text-[rgba(126,114,128,1)] text-[15px] font-normal tracking-[-0.6px]">
              ({rating})
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className={`aspect-[1.11] object-contain w-5 shrink-0 mt-[77px] transition-transform hover:scale-110 ${
          isAdded ? 'scale-125' : ''
        }`}
        aria-label={`Add ${name} to cart`}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/9c6be1057fd8772114bc2bbed8b92b01022bc040?placeholderIfAbsent=true"
          className="w-full h-full"
          alt="Add to cart"
        />
      </button>
    </article>
  );
};
