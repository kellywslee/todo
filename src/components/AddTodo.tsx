import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { type Todo } from "../lib/types";

type AddTodoProps = {
  onAdd: (todo: Todo) => void;
};

export default function AddTodo({ onAdd }: AddTodoProps) {
  const [title, setTitle] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd({ id: uuidv4(), title, isCompleted: false });
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex h-12 w-full gap-3">
      <input
        type="text"
        value={title}
        onChange={handleChange}
        className="w-full rounded-lg bg-purple-100 p-2"
      />
      <button className="w-20 rounded-lg bg-purple-300 font-bold shadow-md transition-all hover:bg-purple-200  ">
        Add
      </button>
    </form>
  );
}
