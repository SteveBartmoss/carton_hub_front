
export interface UserProfileSettings {
  username: string;
  displayName: string;
  email: string;
  description: string;
  avatar: string;
  banner: string;
  favoriteGames: string[];
  stats: {
    cards: number;
    trades: number;
    sales: number;
    rating: number;
  };
}

export const initialProfile: UserProfileSettings = {
  username: "stevebartmoss",
  displayName: "SteveBartmoss",
  email: "tu@email.com",
  description:
    "Coleccionista. Jugador. Siempre en busca de la siguiente carta.",
  avatar:
    "https://api.dicebear.com/9.x/adventurer/svg?seed=CardForge",
  banner:
    "https://images.unsplash.com/photo-1519608487953-e999c86e7455",
  favoriteGames: [
    "Magic: The Gathering",
    "Pokémon",
    "Yu-Gi-Oh!",
  ],
  stats: {
    cards: 452,
    trades: 128,
    sales: 73,
    rating: 98,
  },
};
