import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

export default function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //
  return (
    <div className="mt-16">
      <h2 className="text-center text-4xl uppercase font-bold">Todos</h2>

      <ul className="mt-6 space-y-3">
        {todos &&
          todos?.map((todo) => (
            <li
              key={todo.id}
              className="p-3 border border-gray-700 rounded-md flex items-center gap-x-3"
            >
              <span>{todo.text}</span>
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="btn btn-circle btn-error btn-sm"
              >
                X
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
