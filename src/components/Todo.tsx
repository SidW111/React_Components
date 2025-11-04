import { useEffect, useState } from "react";

export default function Todo() {
  type Todo = {
    id: string;
    title: string;
    desc: string;
    done: boolean;
  };

  const KEY = "Todo_App";

  const [todos, setTodos] = useState<Todo[]>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? (JSON.parse(raw) as Todo[]) : [];
    } catch {
      return [];
    }
  });

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    const t = title.trim();
    const d = desc.trim();
    if (!t) return;
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: t,
      desc: d,
      done: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    setTitle("");
    setDesc("");
  };

  const toggleDone = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen w-full max-w-md mx-auto flex flex-col items-center justify-start p-6">
      <h1 className="text-center text-2xl mb-4 font-bold">TODO APP</h1>

      <div className="w-full mb-4 space-y-2">
        <input
          type="text"
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="w-full px-3 py-2 border rounded-lg"
          placeholder="Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          className="w-full px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white "
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>
      <div className="w-full space-y-2">
        {todos.length === 0 && (
          <p className="text-sm text-gray-500 text-center">
            No todos yet. Add one!{" "}
          </p>
        )}
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex flex-col border rounded-lg p-3 bg-white shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => {
                    toggleDone(todo.id);
                  }}
                />

                <h3
                  className={`font-semibold ${
                    todo.done ? " line-through text-gray-400" : ""
                  }`}
                >
                  {todo.title}
                </h3>
              </div>
              <button
                className="text-sm text-red-500 hover:underline"
                onClick={() => deleteTodo(todo.id)}
              >
                Delete
              </button>
            </div>
            {todo.desc && (
              <p
                className={`text-sm mt-1 ${
                  todo.done ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
