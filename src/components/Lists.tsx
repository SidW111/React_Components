import axios from "axios";
import { useEffect, useState } from "react";

export default function List() {
  type User = {
    name: string;
    id: string;
    company: { name: string };
    email: string;
  };
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [searchEmail, setSearchEmail] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filterCompany, setFilterCompany] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users?_limit=10`
      );
      console.log(res.data);
      setUsers(res.data);
    } catch (error) {
      console.error("error fetching todo", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredUsers = users

    .filter((user) => user.name.toLowerCase().includes(search.toLowerCase()))
    .filter((user) =>
      filterCompany ? user.company.name === filterCompany : true
    )
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    )
    .filter((users) =>
      users.email.toLowerCase().includes(searchEmail.toLowerCase())
    );

  const companyList = [...new Set(users.map((u) => u.company.name))];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-center text-2xl font-bold mb-4">Users List</h1>
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-3 py-1 rounded w-full mb-3"
        />
        <input
          type="text"
          placeholder="Search by email..."
          value={searchEmail}
          onChange={(e) => setSearchEmail(e.target.value)}
          className="border px-3 py-1 rounded w-full mb-3"
        />
      </div>

      <div className="flex gap-3 mb-4">
        <select
          value={filterCompany}
          onChange={(e) => {
            setFilterCompany(e.target.value);
          }}
          className="border px-2 py-1 rounded"
        >
          <option value="">All companies</option>
          {companyList.map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
          }}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Sort: {sortOrder === "asc" ? "A => Z" : "Z => A"}
        </button>
      </div>

      <ul className="space-y-3">
        {filteredUsers?.map((user) => (
          <li
            key={user.id}
            className="p-3 border rounded shadow-sm hover:bg-gray-50"
          >
            <h2 className="font-semibold text-gray-600">{user.name}</h2>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-sm text-gray-600">{user.company.name}</p>
          </li>
        ))}
      </ul>

      {filteredUsers.length === 0 && (
        <p className="text-gray-500 mt-4">No Users found.</p>
      )}
    </div>
  );
}
