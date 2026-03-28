import { useState, useEffect } from "react";

export default function Users() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // ✅ Load from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(saved);
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // 🔍 Filter
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  // ➕ Add user
  const handleAdd = () => {
    if (!name || !email) return;

    setUsers([...users, { name, email, status: "Active" }]);
    setName("");
    setEmail("");
    setShowModal(false);
  };

  // ❌ Delete
  const handleDelete = (index) => {
    if (confirm("Are you sure?")) {
      setUsers(users.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="flex justify-between mb-4">
        <input
          placeholder="Search user..."
          className="border px-3 py-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add User
        </button>
      </div>

      <div className="bg-white rounded shadow">
        <table className="w-full">

          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.status}</td>

                  <td className="space-x-2">
                    <button className="text-red-500" onClick={() => handleDelete(index)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center p-4">
                  No user found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      {/* 🔥 Modal UI */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow w-80">

            <h2 className="text-lg font-bold mb-4">Add User</h2>

            <input
              type="text"
              placeholder="Enter name"
              className="border w-full mb-3 px-3 py-2 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Enter email"
              className="border w-full mb-3 px-3 py-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="px-3 py-1 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={handleAdd}
                className="bg-blue-600 text-white px-3 py-1 rounded"
              >
                Add
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}