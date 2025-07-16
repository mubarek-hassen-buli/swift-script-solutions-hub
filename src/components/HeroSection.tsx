import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col self-stretch relative min-h-[216px] w-full text-2xl text-white font-medium text-center tracking-[-0.96px] leading-[38px] mt-3.5">
      <img
        src="https://api.builder.io/api/v1/image/assets/907dc48dfccd43dfb279b20779532cfb/1cabba2d57c817e2e26f8b93ce745f8f8cfdb893?placeholderIfAbsent=true"
        className="absolute h-full w-full object-cover inset-0"
        alt="Luxury hotel interior"
      />
      <div className="relative flex w-full flex-col items-stretch justify-center p-[70px]">
        <h1 className="text-2xl text-white font-medium text-center tracking-[-0.96px] leading-[38px]">
          Experience Luxary Beyond Imagination
        </h1>
      </div>
    </section>
  );
};
