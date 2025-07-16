import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="flex w-full max-w-[374px] gap-5 justify-between">
      <button className="p-1" aria-label="Menu">
        <img
          src="https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/76265d4d9a5b06f081c45c8939ce40f522da284d?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0 mt-1.5"
          alt="Menu icon"
        />
      </button>
      <img
        src="https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/205c918efe329d1deef66b23388a68068c06a302?placeholderIfAbsent=true"
        className="aspect-[4.39] object-contain w-[123px] shrink-0 max-w-full"
        alt="Hotel logo"
      />
      <button className="p-1" aria-label="Profile">
        <img
          src="https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/e2176576a833e629afed5b2c3fb39c41897094b3?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 shrink-0 mt-1.5"
          alt="Profile icon"
        />
      </button>
    </header>
  );
};
