import { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { type Todo, type Filter } from "../lib/types";

type TodoListProps = {
  filter: Filter;
};

export default function TodoList({ filter }: TodoListProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React", isCompleted: true },
    { id: "2", title: "Learn TypeScript", isCompleted: true },
  ]);

  // const [todos, setTodos] = useState<Todo[]>(readTodosFromLocalStorage);

  const handleAdd = (todo: Todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated: Todo) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted: Todo) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = getFilteredTodos(todos, filter);

  return (
    <section className="flex w-11/12 flex-col gap-8 md:w-2/3">
      <AddTodo onAdd={handleAdd} />
      <ul className="flex flex-col gap-3">
        {filteredTodos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </section>
  );
}

// function readTodosFromLocalStorage(): Todo[] {
//   console.log("readTodosFromLocalStorage");
//   const todos = localStorage.getItem("todos");
//   return todos ? JSON.parse(todos) : [];
// }

function getFilteredTodos(todos: Todo[], filter: Filter) {
  if (filter === "All") {
    return todos;
  }
  return todos.filter(
    (todo: Todo) => todo.isCompleted === (filter === "Completed"),
  );
}
