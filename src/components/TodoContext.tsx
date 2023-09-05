import { ITodo } from "@/type/Todo.type";
import { createContext } from "react";

export const TodoContext = createContext<{
  todos: ITodo[];
  addTodo: (title: string) => void;
  updateTodoStatus: (index: number, stat: boolean) => void;
} | null>(null);
