import React, { forwardRef, useRef, useEffect, useContext } from "react";
import { TodoContext } from "./TodoContext";

// ...

function TodoItem({ index, todo }, ref) {
  const { updateTodoStatus } = useContext(TodoContext);
  const checkboxRef = useRef(null);

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = todo.stat;
    }
  }, [todo.stat]);

  return (
    <div className="w-full h-[3rem] text-lg items-center bg-white border-[1px] pl-4 pr-4 flex justify-between">
      {todo.title}
      <input
        type="checkbox"
        onChange={(e) => updateTodoStatus(index, e.target.checked)}
        ref={(el) => {
          checkboxRef.current = el;
          if (ref) {
            ref.current = el;
          }
        }}
      />
    </div>
  );
}

export default forwardRef(TodoItem);
