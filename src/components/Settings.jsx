import Filter from "./Filter";
import Search from "./Search";

function Settings() {
  return (
    <section className="responsive my-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-0">
      <Search />
      <Filter />
    </section>
  );
}

export default Settings;
