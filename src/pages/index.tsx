// pages/index.tsx
import Image from "next/image";
import { IMAGES } from "../../constants/images";
import Pill from "../../components/Pill";
import { useState } from "react";

const filters = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Near Beach",
  "Private Pool",
];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full h-[70vh]">
        <Image
          src={IMAGES.HERO_BG}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center bg-black/40">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      <section className="px-4 py-6 bg-gray-50">
        <div className="flex flex-wrap gap-3 justify-center">
          {filters.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              isActive={activeFilter === filter}
              onClick={() => setActiveFilter(filter)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
