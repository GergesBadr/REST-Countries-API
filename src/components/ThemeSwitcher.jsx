import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";

function ThemeSwitcher() {
  const savedTheme = localStorage.getItem("current-theme");
  const [theme, setTheme] = useState(savedTheme || "light");

  // Display user prefer theme in first time
  useEffect(() => {
    if (!savedTheme) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  // Handle switch on click
  function handleThemeSwitch() {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("current-theme", newTheme);
  }

  // Add dark theme class to be handled with tailwind
  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <button
      onClick={() => handleThemeSwitch()}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="flex items-center justify-center gap-2"
    >
      <span>
        {theme === "light" ? (
          <FaRegMoon size={"20px"} />
        ) : (
          <FaMoon size={"20px"} />
        )}
      </span>
      <span className="text-md font-semibold sm:text-lg">Dark Mode</span>
    </button>
  );
}

export default ThemeSwitcher;
