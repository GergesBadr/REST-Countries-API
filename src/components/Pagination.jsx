import { useCountries } from "../contexts/CountriesContext";

function Pagination() {
  const { currentPage, setCurrentPage, pagesNum, hasError } = useCountries();

  return (
    <>
      {!hasError ? (
        <div className="responsive flex flex-wrap justify-center gap-3 pb-10">
          {pagesNum.map((page) => {
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`rounded-lg  px-4 py-[6px] shadow-lg  ${
                  currentPage === page
                    ? "bg-green-400 dark:bg-green-400"
                    : "bg-white dark:bg-light-blue"
                }`}
              >
                {page}
              </button>
            );
          })}
        </div>
      ) : null}
    </>
  );
}

export default Pagination;
