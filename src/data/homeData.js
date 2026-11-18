export interface TCGCard {
  id: number;
  name: string;
  game: string;
  price: number;
  image: string;
  rarity?: string;
}

export interface CommunityActivity {
  id: number;
  username: string;
  avatar: string;
  description: string;
  action: string;
}

export interface FeaturedUser {
  id: number;
  username: string;
  avatar: string;
  rating: number;
}

export const popularCards: TCGCard[] = [
  {
    id: 1,
    name: "Jace, the Mind Sculptor",
    game: "Magic: The Gathering",
    price: 4500,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
  },
  {
    id: 2,
    name: "Charizard ex",
    game: "Pokémon",
    price: 3200,
    image:
      "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe",
  },
  {
    id: 3,
    name: "Blue-Eyes White Dragon",
    game: "Yu-Gi-Oh!",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1614583225154-5fcdda07019e",
  },
  {
    id: 4,
    name: "Monkey D. Luffy",
    game: "One Piece",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
  },
  {
    id: 5,
    name: "Mewtwo V",
    game: "Pokémon",
    price: 1900,
    image:
      "https://images.unsplash.com/photo-1613771404721-1f92d799e49f",
  },
];

export const communityActivities: CommunityActivity[] = [
  {
    id: 1,
    username: "DarkRider",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=DarkRider",
    description: "realizó un intercambio con SteveBartmoss",
    action: "trade",
  },
  {
    id: 2,
    username: "KairosTCG",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Kairos",
    description: "publicó una nueva oferta de venta: Charizard ex",
    action: "sale",
  },
  {
    id: 3,
    username: "PokeMaster",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=PokeMaster",
    description: "se unió a la comunidad",
    action: "community",
  },
];

export const featuredUsers: FeaturedUser[] = [
  {
    id: 1,
    username: "SteveBartmoss",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Steve",
    rating: 98,
  },
  {
    id: 2,
    username: "DarkRider",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=DarkRider",
    rating: 97,
  },
  {
    id: 3,
    username: "PokeMaster",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=PokeMaster",
    rating: 95,
  },
  {
    id: 4,
    username: "KairosTCG",
    avatar: "https://api.dicebear.com/9.x/adventurer/svg?seed=Kairos",
    rating: 94,
  },
];
