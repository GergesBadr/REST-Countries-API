import { IoSearchOutline } from "react-icons/io5";
import { useCountries } from "../contexts/CountriesContext";

function Search() {
  const { searchedCountry, setSearchedCountry } = useCountries();

  return (
    <div className="relative w-full md:w-[500px]">
      <IoSearchOutline
        size={"24px"}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-dark-gray dark:text-white"
      />
      <label
        htmlFor="search-country"
        className="absolute left-16 top-1/2 -translate-y-1/2 font-semibold text-dark-gray dark:text-white"
      >
        {!searchedCountry ? "Search for a country..." : searchedCountry}
      </label>
      <input
        type="text"
        name="search-country"
        id="search-country"
        value={searchedCountry}
        onChange={(e) => setSearchedCountry(e.target.value)}
        className="w-full rounded-lg bg-white py-4 pl-16 shadow-lg dark:bg-light-blue"
      />
    </div>
  );
}

export default Search;
