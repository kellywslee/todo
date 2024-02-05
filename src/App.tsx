import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { type Filter } from "./lib/types";
import { DarkModeProvider } from "./context/DarkModeContext";

const filters: Filter[] = ["All", "Active", "Completed"];

function App() {
  const [filter, setFilter] = useState<Filter>(filters[0]);
  return (
    <DarkModeProvider>
      <main className="mx-auto mt-8 flex max-w-screen-md flex-col items-center justify-center gap-8 p-6 text-slate-950">
        <h1 className="text-2xl font-bold">My Todo List 📝</h1>
        <Header filters={filters} filter={filter} onFilterChange={setFilter} />
        <TodoList filter={filter} />
      </main>
    </DarkModeProvider>
  );
}

export default App;
