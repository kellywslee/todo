export type Todo = {
  id: string;
  title: string;
  isCompleted: boolean;
};

export type Filter = "All" | "Active" | "Completed";
