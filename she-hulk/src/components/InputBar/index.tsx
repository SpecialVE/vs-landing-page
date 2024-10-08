import React, { useState } from "react";
import { TTodo } from "../../types/todo";

interface InputBarProps {
  todos: TTodo[];
  setTodos: React.Dispatch<React.SetStateAction<TTodo[]>>;
}

const InputBar = ({ todos, setTodos }: InputBarProps) => {
  const [title, setTitle] = useState("");

  const addTodo = (title: string) => {
    if (title) {
      setTodos([...todos, { id: Math.random(), title, completed: false }]);
      setTitle("");
    }
  };

  return (
    <div className="w-full flex items-center gap-3">
      <input
        type="text"
        className="w-full bg-[#1e2329] outline-none h-12 rounded-md px-2 text-[#e9e9e9] font-medium"
        placeholder="Todo Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        type="button"
        className="bg-[#F6C90E] py-3 px-7 rounded-md text-[#1e2329]"
        onClick={() => addTodo(title)}
      >
        Add
      </button>
    </div>
  );
};

export default InputBar;
