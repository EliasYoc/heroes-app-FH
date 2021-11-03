import { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

const HeroesList = ({ publisher }) => {
  console.log(publisher);
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="card-columns">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero}>
          {hero.superhero}
        </HeroCard>
      ))}
    </div>
  );
};

export default HeroesList;
