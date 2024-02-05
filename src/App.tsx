import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="mx-auto mt-8 flex max-w-screen-md flex-col items-center gap-8 text-slate-950 ">
      <h1 className="text-2xl font-bold">My Todo List 📝</h1>
      <TodoList />
    </main>
  );
}

export default App;
