import React, { useState } from 'react';

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    onSearch?.(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 flex w-full max-w-[380px] items-stretch gap-[13px] text-base text-gray-400 font-medium mt-[22px] px-[18px] py-2.5 rounded-[20px]">
      <img
        src="https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/55f7b48c1420d064d745d26fa5ea679e78c8c989?placeholderIfAbsent=true"
        className="aspect-[1] object-contain w-[19px] shrink-0"
        alt="Search icon"
      />
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search Services..."
        className="grow shrink w-[308px] basis-auto bg-transparent outline-none text-gray-600 placeholder-gray-400"
        aria-label="Search services"
      />
    </form>
  );
};
