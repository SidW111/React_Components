
type Todo = {
  title: string;
  id: string;
  completed: boolean;
};

import { useEffect, useState } from "react";

export default function PaginatedTodos() {
  const [todos, setTodos] = useState<Todo[]>();
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchTodos = async (page: number) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=5`
      );
      const data = await res.json();
      setTodos(data);
    } catch (err) {
      console.error("Error fetching todos:", err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch whenever page changes
  useEffect(() => {
    fetchTodos(page);
  }, [page]);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Paginated Todos</h1>

      {loading && <p className="text-gray-500">Loading...</p>}

      <ul className="space-y-2">
        {todos?.map((todo) => (
          <li
            key={todo.id}
            className="border rounded p-2 flex items-center justify-between"
          >
            <span>{todo.title}</span>
            <span
              className={`text-sm ${
                todo.completed ? "text-green-600" : "text-red-500"
              }`}
            >
              {todo.completed ? "✅" : "❌"}
            </span>
          </li>
        ))}
      </ul>

      {/* Pagination buttons */}
      <div className="flex justify-between mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          className="bg-gray-300 px-3 py-1 rounded disabled:opacity-50"
        >
          ⬅ Prev
        </button>

        <span>Page {page}</span>

        <button
          onClick={() => setPage(page + 1)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}
