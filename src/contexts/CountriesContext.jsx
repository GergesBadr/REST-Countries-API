import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const CountriesContext = createContext();

function CountriesContextProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [currCountry, setCourrCountry] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState("");

  const regions = ["All", "Africa", "America", "Asia", "Europe", "Oceania"];
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchedCountry, setSearchedCountry] = useState("");

  const BASE_URL = "https://restcountries.com/v3.1";

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const countriesPerPage = 16;
  const lastCountryIndex = countriesPerPage * currentPage;
  const firstCountryIndex = lastCountryIndex - countriesPerPage;
  const pagesLength = Math.ceil(countries.length / countriesPerPage);
  const pagesNum = Array.from({ length: pagesLength }, (_, index) => index + 1);

  const displayedCountries = countries.slice(
    firstCountryIndex,
    lastCountryIndex,
  );

  function handleSelectedRegion(e) {
    setSelectedRegion(e.target.innerText);
  }

  function sortDataAlphabetically(arrOfData) {
    arrOfData.sort((a, b) => {
      const nameA = a.name.common.toUpperCase();
      const nameB = b.name.common.toUpperCase();
      if (nameA > nameB) return 1;
      if (nameA < nameB) return -1;
      return 0;
    });
    return arrOfData;
  }

  // Fetch all countries
  useEffect(() => {
    async function fetchCountries() {
      // show the loader before fetching data
      setIsLoading(true);
      // Reset error indicator
      setHasError("");
      // try to fetch the data
      try {
        const res = await fetch(`${BASE_URL}/all`);
        // Handle errors
        if (!res.ok) {
          throw new Error("Sorry, something went wrong while fetching data!");
        }
        const data = await res.json();

        sortDataAlphabetically(data);
        setCountries(data);
      } catch (err) {
        setHasError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountries();
  }, []);

  // Fetch clicked country
  const getCurrCountry = useCallback(async function getCurrCountry(
    currCountryName,
  ) {
    setIsLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/name/${currCountryName}`);
      if (!res.ok) {
        throw new Error(
          `Sorry, something went wrong while fetching ${currCountryName} country data!`,
        );
      }
      const data = await res.json();
      setCourrCountry(data);
    } catch (err) {
      setHasError(err.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Fetch selected region countries
  useEffect(() => {
    async function fetchCountriesByRegion() {
      setIsLoading(true);
      try {
        if (selectedRegion) {
          const res =
            selectedRegion === "All"
              ? await fetch(`${BASE_URL}/all`)
              : await fetch(`${BASE_URL}/region/${selectedRegion}`);
          if (!res.ok) {
            throw new Error(
              `Sorry, something went wrong while fetching ${selectedRegion} region countries!`,
            );
          }
          const data = await res.json();

          sortDataAlphabetically(data);
          setCountries(data);
          setSelectedRegion("");
        }
      } catch (err) {
        setHasError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCountriesByRegion();
  }, [selectedRegion]);

  // Fetch searched countries
  useEffect(() => {
    async function fetchSearchedCountry() {
      setIsLoading(true);
      try {
        if (searchedCountry) {
          const res = await fetch(`${BASE_URL}/name/${searchedCountry}`);
          if (!res.ok) {
            throw new Error(
              `Please provide a right country name. There is no data for ${searchedCountry} country`,
            );
          }
          const data = await res.json();

          sortDataAlphabetically(data);
          setCountries(data);
        }
      } catch (err) {
        setHasError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchSearchedCountry();
  }, [searchedCountry]);

  return (
    <CountriesContext.Provider
      value={{
        countries,
        isLoading,
        hasError,
        regions,
        selectedRegion,
        searchedCountry,
        setSearchedCountry,
        handleSelectedRegion,
        currCountry,
        getCurrCountry,
        countriesPerPage,
        currentPage,
        setCurrentPage,
        displayedCountries,
        pagesNum,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const contextValue = useContext(CountriesContext);
  if (contextValue === undefined)
    throw new Error("Countries context was used outside it's provider");
  return contextValue;
}

export { useCountries, CountriesContextProvider };
