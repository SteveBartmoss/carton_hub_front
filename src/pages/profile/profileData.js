
export interface ProfileUser {
  id: string;
  username: string;
  nickname: string;
  avatar: string;
  banner: string;
  description: string;
  cards: number;
  trades: number;
  sales: number;
  rating: number;
  favoriteGames: string[];
}

export interface CollectionCard {
  id: string;
  name: string;
  game: string;
  image: string;
  rarity: string;
  quantity: number;
  condition: string;
  price: number;
  status: "collection" | "sale" | "trade";
}

export const profileUser: ProfileUser = {
  id: "usr_001",
  username: "stevebartmoss",
  nickname: "SteveBartmoss",
  avatar:
    "https://api.dicebear.com/9.x/adventurer/svg?seed=CardForge",
  banner:
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
  description:
    "Coleccionista. Jugador. Siempre en busca de la siguiente carta.",
  cards: 452,
  trades: 128,
  sales: 73,
  rating: 98,
  favoriteGames: [
    "Magic: The Gathering",
    "Pokémon",
    "Yu-Gi-Oh!",
  ],
};

export const collectionCards: CollectionCard[] = [
  {
    id: "1",
    name: "Jace, the Mind Sculptor",
    game: "Magic",
    image: "https://cards.scryfall.io/normal/front/1/9/19d4d28b-8f2e-4c31-8c8b-4f2d3f3c4e0b.jpg",
    rarity: "Mythic",
    quantity: 1,
    condition: "NM",
    price: 4500,
    status: "trade",
  },
  {
    id: "2",
    name: "Liliana of the Veil",
    game: "Magic",
    image: "https://cards.scryfall.io/normal/front/0/8/08b7d0a0-2c8d-4d3f-a9b1-7c4e8f6a5d3b.jpg",
    rarity: "Mythic",
    quantity: 2,
    condition: "NM",
    price: 1200,
    status: "sale",
  },
  {
    id: "3",
    name: "Karn, Silver Golem",
    game: "Magic",
    image: "https://cards.scryfall.io/normal/front/2/1/21a4c8d0-3e7f-4a9b-8c2d-6f5e4d3c2b1a.jpg",
    rarity: "Rare",
    quantity: 1,
    condition: "LP",
    price: 850,
    status: "collection",
  },
  {
    id: "4",
    name: "Force of Will",
    game: "Magic",
    image: "https://cards.scryfall.io/normal/front/0/0/00000000-0000-0000-0000-000000000000.jpg",
    rarity: "Rare",
    quantity: 1,
    condition: "NM",
    price: 2500,
    status: "trade",
  },
  {
    id: "5",
    name: "Lightning Bolt",
    game: "Magic",
    image: "https://cards.scryfall.io/normal/front/0/0/00000000-0000-0000-0000-000000000001.jpg",
    rarity: "Common",
    quantity: 4,
    condition: "NM",
    price: 50,
    status: "sale",
  },
];
