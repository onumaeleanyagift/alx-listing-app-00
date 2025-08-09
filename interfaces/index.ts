export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
  description: string;
  reviews: any[];
}

export interface PillProps {
  label: string;
  onClick?: () => void;
  isActive?: boolean;
}

export interface BookingSectionProps {
  price: number;
}

export interface ReviewSectionProps {
  reviews: any[];
}
