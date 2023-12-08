import { Route, Routes } from "react-router-dom";
import { CountriesContextProvider } from "./contexts/CountriesContext";

import Header from "./components/Header";
import Settings from "./components/Settings";
import CountriesList from "./components/CountriesList";
import Country from "./components/Country";
import Pagination from "./components/Pagination";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <CountriesContextProvider>
      <Header />
      <Routes>
        <Route
          index
          element={
            <>
              <Settings />
              <CountriesList />
              <Pagination />
            </>
          }
        />
        <Route path="/countries/:name" element={<Country />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </CountriesContextProvider>
  );
}

export default App;
