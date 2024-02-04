import { useState } from 'react';

type Todo = {
  id: number;
  task: string;
  isCompleted: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, task: 'Learn React', isCompleted: true },
    { id: 2, task: 'Learn TypeScript', isCompleted: true },
  ]);
  return (
    <section>
      <ul>
        {todos.map((todo) => (
          <li>{todo.task}</li>
        ))}
      </ul>
    </section>
  );
}
