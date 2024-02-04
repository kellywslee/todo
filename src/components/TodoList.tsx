import { useState } from "react";
import AddTodo from "./AddTodo";

export type Todo = {
  id: string;
  task: string;
  isCompleted: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", task: "Learn React", isCompleted: true },
    { id: "2", task: "Learn TypeScript", isCompleted: true },
  ]);

  const handleAdd = (todo: Todo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };
  return (
    <section className="flex w-11/12 flex-col gap-8 md:w-2/3">
      <ul className="flex flex-col gap-2">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd} />
    </section>
  );
}
