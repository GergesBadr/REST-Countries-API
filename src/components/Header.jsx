import ThemeSwitcher from "./ThemeSwitcher";

function Header() {
  return (
    <header className="bg-white shadow-lg dark:bg-light-blue dark:shadow-xl">
      <div className="responsive flex items-center justify-between py-6">
        <h1 className="text-xl font-bold sm:text-3xl">Where in the world?</h1>
        <ThemeSwitcher />
      </div>
    </header>
  );
}

export default Header;
