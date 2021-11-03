import { heroes } from "../data/heroes";

export const getHeroesByName = (name) => {
  const minus = name.toLowerCase();
  if (!minus) return [];
  return heroes.filter(
    (hero) =>
      hero.superhero.toLowerCase().includes(minus) ||
      hero.alter_ego.toLowerCase().includes(minus)
  );
};
