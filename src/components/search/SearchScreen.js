import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../heroes/HeroCard";
import queryString from "query-string";
import { useLocation } from "react-router";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { useMemo } from "react";

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });
  const { searchText } = formValues;
  let filtered = useMemo(() => getHeroesByName(q), [q]);
  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?q=${searchText}`);
  };
  return (
    <div className="row">
      <div className="col-5">
        <h4>Search</h4>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="find you hero"
            className="form-control"
            name="searchText"
            value={searchText}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="btn m-1 btn-block btn-outline-primary"
          >
            Search{" "}
          </button>
        </form>
      </div>
      <div className="col-7">
        <h4>Results</h4>
        <hr />
        {!q && <div className="alert alert-info">Search a hero</div>}
        {q !== "" && filtered.length === 0 && (
          <div className="alert alert-warning">Hero not found</div>
        )}
        {filtered.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

export default SearchScreen;
