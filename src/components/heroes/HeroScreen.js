import { Redirect, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

const HeroScreen = ({ history }) => {
  const { heroeId } = useParams();
  const hero = getHeroById(heroeId);
  if (!hero) return <Redirect to="/" />;
  const { alter_ego, characters, first_appearance, publisher, superhero } =
    hero;
  const handleReturn = () => {
    if (history.length <= 2) {
      history.push("/");
      return;
    }
    history.goBack();
  };
  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          className="img-thumbnail"
          src={`../assets/heroes/${heroeId}.jpg`}
          alt={superhero}
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-gruop list-group-flush">
          <li className="list-group-item">
            <b>Alter ego</b> {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher</b> {publisher}
          </li>
          <li className="list-group-item">
            <b>First appearance</b> {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>
        <button onClick={handleReturn} className="btn btn-outline-info">
          return
        </button>
      </div>
    </div>
  );
};

export default HeroScreen;
