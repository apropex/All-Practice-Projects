import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setInput("");
      alert("Empty input");
      return;
    }

    dispatch(addTodo(input));
    setInput("");
  };

  //
  return (
    <form
      onSubmit={addTodoHandler}
      className="mt-16 w-full max-w-sm p-6 rounded-2xl border border-gray-700 space-y-5"
    >
      <input
        type="text"
        className="input w-full focus:outline-none"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="btn btn-secondary w-full">
        Add Todo
      </button>
    </form>
  );
}
