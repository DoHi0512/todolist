import { useEffect, useState } from "react";

interface ITodo {
  title: string;
  stat: boolean;
  date: Date;
}
export default function Home() {
  const [todo, setTodo] = useState<ITodo[]>([
    {
      title: "sdfg",
      stat: false,
      date: new Date(),
    },
  ]);
  const [text, setText] = useState<string>("");
  const [log, setLog] = useState<Array<ITodo[]>>([]);
  useEffect(() => {
    setLog([...log, [...todo.map((item) => ({ ...item }))]]);
  }, [todo]);
  return (
    <div className="w-full  h-full flex">
      <div className="h-full w-1/2 bg-[#20c998] rounded-lg flex items-center flex-col overflow-auto">
        <span className="text-4xl font-bold text-white mt-4">TodoList</span>
        <form
          onSubmit={(e) => {
            !!text
              ? setTodo([
                  ...todo,
                  { title: text, stat: false, date: new Date() },
                ])
              : null;
            e.preventDefault();
          }}
          className="w-4/5 h-[4rem]"
        >
          <input
            className="w-full h-full pl-4 text-xl mt-4 outline-none"
            placeholder="투두 추가"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
        <div className="flex flex-col w-4/5 mt-4">
          {todo.map((item, idx) => (
            <div
              className="w-full h-[3rem] text-lg items-center bg-white border-[1px] pl-4 pr-4 flex justify-between"
              key={idx}
            >
              {item.title}
              <input
                type="checkbox"
                onChange={(e) => {
                  const updated = [...todo];
                  updated[idx].stat = e.target.checked;
                  setTodo(updated);
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 bg-[#E1F5FE] border-[1px] rounded-lg flex items-center flex-col overflow-auto">
        <span className="text-4xl font-bold text-black mt-4">LOG</span>
        <div className="mt-4 flex flex-col w-4/5">
          {log.map((data, idx1) => {
            if (idx1 == 0) return null;
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
