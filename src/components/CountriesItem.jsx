import { Link } from "react-router-dom";

function CountriesItem({ country }) {
  const { population, region, capital } = country;

  return (
    <li className="overflow-hidden rounded-lg bg-white shadow-lg duration-200 hover:-translate-y-2 dark:bg-light-blue ">
      <Link to={`/countries/${country.name.common}`}>
        <div>
          <img
            src={country.flags.svg}
            alt={country.name.common}
            loading="lazy"
          />
        </div>
        <div className="p-6">
          <h2 className="mb-3 text-lg font-bold"> {country.name.common} </h2>
          <div className="space-y-2">
            <p>
              <span>Population:</span>
              <span className="stats">{population}</span>
            </p>
            <p>
              <span>Region:</span>
              <span className="stats">{region}</span>
            </p>
            <p>
              <span>Capital:</span>
              <span className="stats">{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default CountriesItem;
