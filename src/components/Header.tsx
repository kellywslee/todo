import { BsFillMoonStarsFill, BsFillEmojiSunglassesFill } from "react-icons/bs";
import { type Filter } from "../lib/types";
import { useDarkMode } from "../context/DarkModeContext";

type HeaderProps = {
  filters: Filter[];
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
};

export default function Header({
  filters,
  filter,
  onFilterChange,
}: HeaderProps) {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <header className="flex w-11/12 justify-between md:w-2/3">
      <button
        onClick={toggleDarkMode}
        className="text-xl"
        aria-label={darkMode ? "Disable dark mode" : "Enable dark mode"}
      >
        {!darkMode && <BsFillMoonStarsFill className="text-purple-600" />}
        {darkMode && <BsFillEmojiSunglassesFill className="text-yellow-300" />}
      </button>
      <ul className="flex gap-5">
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${filter === value ? "border-b-4 border-purple-200 pb-1 font-bold dark:text-purple-50" : "font-normal dark:text-purple-50"}`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
