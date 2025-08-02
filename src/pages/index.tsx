import Image from "next/image";
import { IMAGES } from "../../constants/images";
import Pill from "../../components/Pill";
import { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "../../constants/index";
import PropertyCard from "../../components/PropertyCard";

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

      <section className="px-4 py-10 bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Popular Listings
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
          {PROPERTYLISTINGSAMPLE.map((index) => (
            <PropertyCard
              name={index.name}
              address={index.address}
              rating={index.rating}
              category={index.category}
              offers={index.offers}
              price={index.price}
              discount={index.discount}
              image={index.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
