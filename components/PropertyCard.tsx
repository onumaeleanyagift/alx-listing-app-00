import Image from "next/image";
import { PropertyProps } from "../interfaces/index";

const PropertyCard: React.FC<PropertyProps> = ({
  name,
  address,
  category,
  rating,
  price,
  offers,
  discount,
  image,
}) => {
  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden w-full sm:w-[300px]">
      <div className="relative h-48 w-full">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">
          {`${address.city}, ${address.state}, ${address.country}`}
        </p>
        <p className="text-sm text-gray-600">{category}</p>
        <p className="text-sm text-yellow-500">⭐ {rating}</p>
        <p className="text-sm text-gray-600">{price}</p>
        <p className="text-sm text-gray-600">
          {`${offers.bed}, ${offers.shower}, ${offers.occupants}`}
        </p>
        <p className="text-sm text-gray-600">{discount}</p>
        <p className="text-sm text-gray-600">{image}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
