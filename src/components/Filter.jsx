import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useCountries } from "../contexts/CountriesContext";

function Filter() {
  const [dropdownIsActive, setDropdownIsActive] = useState(false);
  const { regions, selectedRegion, handleSelectedRegion } = useCountries();

  return (
    <div className="relative w-56 rounded-lg bg-white px-6 py-4 shadow-lg dark:bg-light-blue">
      <button
        onClick={() => setDropdownIsActive((pre) => !pre)}
        className="flex w-full items-center justify-between"
      >
        <span className="text-lg">
          {!selectedRegion ? "Filter by region" : selectedRegion}
        </span>
        <FaAngleDown
          size={"20px"}
          className={`duration-200 ${dropdownIsActive ? "rotate-180" : ""}`}
        />
      </button>

      {dropdownIsActive && (
        <div className="absolute left-0 top-[68px] z-50 w-full overflow-hidden rounded-lg bg-white text-left shadow-lg dark:bg-light-blue">
          {regions.map((region) => {
            return (
              <button
                key={region}
                onClick={(e) => {
                  handleSelectedRegion(e);
                  setDropdownIsActive(false);
                }}
                className="w-full px-6 py-2 text-left text-lg duration-200 hover:bg-slate-100 dark:hover:bg-slate-700"
              >
                {region}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Filter;
