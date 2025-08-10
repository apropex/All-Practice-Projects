import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

export default function App() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      <h1 className="text-5xl font-extrabold">Learn about redux toolkit</h1>

      <AddTodo />
      <Todos />
    </div>
  );
}
