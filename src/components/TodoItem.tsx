import { ChangeEvent } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import Checkbox from "./Checkbox";
import { type Todo } from "../lib/types";

type TodoItemProps = {
  todo: Todo;
  onUpdate: (todo: Todo) => void;
  onDelete: (todo: Todo) => void;
};

export default function TodoItem({ todo, onUpdate, onDelete }: TodoItemProps) {
  const { title, isCompleted } = todo;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isCompleted = e.target.checked ? true : false;
    onUpdate({ ...todo, isCompleted });
  };

  const handleDelete = () => onDelete(todo);

  return (
    <li className="boder-2 flex items-center justify-between rounded-md bg-purple-50 p-5 shadow-md">
      <div className="flex items-center">
        <Checkbox checked={isCompleted} onChange={handleChange} label={title} />
      </div>
      <button onClick={handleDelete}>
        <RiDeleteBinLine className="text-xl text-purple-400 transition-all hover:text-purple-900" />
      </button>
    </li>
  );
}
