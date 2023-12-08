import CountriesItem from "./CountriesItem";
import Loader from "./Loader";
import ErrorIndicator from "./ErrorIndicator";
import { useCountries } from "../contexts/CountriesContext";

function CountriesList() {
  const { displayedCountries, isLoading, hasError } = useCountries();

  return (
    <>
      {isLoading && <Loader />}
      {hasError && <ErrorIndicator message={hasError} />}

      {!isLoading && !hasError ? (
        <ul className="responsive grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {displayedCountries.map((country) => {
            return (
              <CountriesItem key={country.name.common} country={country} />
            );
          })}
        </ul>
      ) : null}
    </>
  );
}

export default CountriesList;
