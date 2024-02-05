import { BsFillMoonStarsFill, BsEmojiSunglasses } from "react-icons/bs";
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
      <button onClick={toggleDarkMode} className="text-xl">
        {!darkMode && <BsFillMoonStarsFill />}
        {darkMode && <BsEmojiSunglasses />}
      </button>
      <ul className="flex gap-5">
        {filters.map((value, index) => (
          <li key={index}>
            <button
              onClick={() => onFilterChange(value)}
              className={`${filter === value ? "font-bold" : "font-normal"}`}
            >
              {value}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
