import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useCountries } from "../contexts/CountriesContext";
import { FaArrowLeftLong } from "react-icons/fa6";

import Loader from "./Loader";
import ErrorIndicator from "./ErrorIndicator";

function Country() {
  const navigate = useNavigate();
  const { name: currCountryNameFromURL } = useParams();
  const { isLoading, hasError, currCountry, getCurrCountry } = useCountries();

  useEffect(() => {
    getCurrCountry(currCountryNameFromURL);
  }, [getCurrCountry, currCountryNameFromURL]);

  if (currCountry === undefined) return;
  if (isLoading) return <Loader />;
  if (hasError) return <ErrorIndicator message={hasError} />;

  return (
    currCountry[0] && (
      <section className="responsive mt-20 pb-20">
        <button
          onClick={() => navigate(-1)}
          className="custom-shadow flex items-center gap-3 rounded-lg bg-white px-6 py-1 dark:bg-light-blue dark:text-white"
        >
          <FaArrowLeftLong />
          <span>Back</span>
        </button>
        <div className="mt-20 grid grid-cols-1 gap-14 lg:grid-cols-2">
          <img
            src={currCountry[0].flags.svg}
            alt={currCountry[0].name.common}
            className="custom-shadow lg:w-[500px]"
          />

          <div className="flex flex-col justify-around gap-10 lg:gap-0">
            <div>
              <h1 className="mb-4 text-xl font-bold sm:text-3xl">
                {currCountry[0].name.common}
              </h1>
              <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="space-y-2">
                  <p>
                    <span>Native Name: </span>
                    <span className="stats">
                      {currCountry[0].name.official
                        ? currCountry[0].name.official
                        : currCountry[0].name.common}
                    </span>
                  </p>
                  <p>
                    <span>Population: </span>
                    <span className="stats"> {currCountry[0].population} </span>
                  </p>
                  <p>
                    <span>Region: </span>
                    <span className="stats"> {currCountry[0].region} </span>
                  </p>
                  <p>
                    <span>Sub Region: </span>
                    <span className="stats"> {currCountry[0].subregion} </span>
                  </p>
                  <p>
                    <span>Capital: </span>
                    <span className="stats">
                      {currCountry[0].capital && currCountry[0].capital}
                    </span>
                  </p>
                </div>

                <div className="space-y-2">
                  <p>
                    <span>Top Level Domain: </span>
                    <span className="stats"> {currCountry[0].tld[0]} </span>
                  </p>
                  <p>
                    <span>Currencies: </span>
                    {currCountry[0].currencies &&
                      Object.entries(currCountry[0].currencies).map(
                        ([currencyCode, currencyDetails]) => (
                          <span key={currencyCode} className="stats">
                            {currencyDetails.name},
                          </span>
                        ),
                      )}
                  </p>
                  <p>
                    <span>Languages: </span>
                    {currCountry[0].languages &&
                      Object.entries(currCountry[0].languages).map(
                        ([languageCode, languages]) => (
                          <span key={languageCode} className="stats">
                            {languages},
                          </span>
                        ),
                      )}
                  </p>
                </div>
              </div>
            </div>

            {currCountry[0].borders && (
              <div>
                <p className="mb-3">Border Countries:</p>
                <div className="flex flex-wrap gap-3">
                  {currCountry[0].borders.map((border) => {
                    return (
                      <span
                        key={border}
                        className="custom-shadow rounded-lg bg-white px-6 py-1 text-dark-gray dark:bg-light-blue dark:text-gray-300"
                      >
                        {border}
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  );
}

export default Country;
