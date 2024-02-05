import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { type Todo } from "../lib/types";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React", isCompleted: true },
    { id: "2", title: "Learn TypeScript", isCompleted: true },
  ]);

  const handleAdd = (todo: Todo) => {
    setTodos([...todos, todo]);
  };
  const handleUpdate = (updated: Todo) => {
    setTodos(todos.map((todo) => (todo.id === updated.id ? updated : todo)));
  };
  const handleDelete = (deleted: Todo) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  return (
    <section className="flex w-11/12 flex-col gap-8 md:w-2/3">
      <ul className="flex flex-col gap-2">
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            todo={item}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
