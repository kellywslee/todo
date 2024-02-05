import { type Filter } from "../lib/types";

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
  return (
    <header>
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
