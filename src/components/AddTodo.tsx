import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./TodoList";

type Props = {
  onAdd: (todo: Todo) => void;
};

export default function AddTodo({ onAdd }: Props) {
  const [task, setTask] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), task, isCompleted: false });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full gap-3">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="w-full rounded-lg bg-purple-200 p-2"
      />
      <button className="rounded-lg bg-purple-300 p-2 font-bold">Add</button>
    </form>
  );
}
