import TodoList from "@/components/Todo";
import { TodoContext } from "@/components/TodoContext";
import { useEffect, useState, useRef, createContext, useContext } from "react";

interface ITodo {
  title: string;
  stat: boolean;
  date: Date;
}
export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([
    {
      title: "sdfg",
      stat: false,
      date: new Date(),
    },
  ]);
  const [log, setLog] = useState<Array<ITodo[]>>([]);

  useEffect(() => {
    setLog([...log, [...todos.map((item) => ({ ...item }))]]);
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos([...todos, { title, stat: false, date: new Date() }]);
  };

  const updateTodoStatus = (index: number, stat: boolean) => {
    const updatedTodos = [...todos];
    updatedTodos[index].stat = stat;
    setTodos(updatedTodos);
  };

  return (
    <div className="w-full  h-full flex">
      <TodoContext.Provider value={{ todos, addTodo, updateTodoStatus }}>
        <TodoList />
      </TodoContext.Provider>

      <div className="w-1/2 bg-[#E1F5FE] border-[1px] rounded-lg flex items-center flex-col overflow-auto">
        <span className="text-4xl font-bold text-black mt-4">LOG</span>
        <div className="mt-4 flex flex-col w-4/5">
          {log.map((data, idx1) => {
            if (idx1 === 0) return null;
            return (
              <div className="bg-white mt-4 rounded-lg" key={idx1}>
                {data.map((item, idx2) => (
                  <div className="flex flex-col pl-4 pr-4 pt-2 pb-2" key={idx2}>
                    <span>date : {item.date.toTimeString()}</span>
                    <span>title : {item.title}</span>
                    <span>status : {item.stat ? "checked" : "none"}</span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
