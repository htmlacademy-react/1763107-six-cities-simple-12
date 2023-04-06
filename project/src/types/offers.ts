export interface Offer {
  id: string;
  image: string;
  price: number;
  rating: string;
  title: string;
  type: string;
}

export interface PropertyInside {
  bedrooms: number;
  maxAdults: number;
  ratingValue: number;
  detailsFeatures: string[];
  comments: Comments;
}

export interface Comments {
  avatar: string;
  userName: string;
  userStatus?: string;
  text: string;
  time: string;
}

export type OfferList = Offer[];
