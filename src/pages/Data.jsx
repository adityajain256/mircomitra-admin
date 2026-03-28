import { useState, useEffect } from "react";

export default function Data() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  // ✅ Load data
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("data")) || [];
    setData(saved);
  }, []);

  // ✅ Save data
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  // 🔍 Filter
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  // ➕ Add
  const handleAdd = () => {
    if (!title || !value) return;

    setData([...data, { title, value }]);
    setTitle("");
    setValue("");
    setShowModal(false);
  };

  // ❌ Delete
  const handleDelete = (index) => {
    if (confirm("Are you sure?")) {
      setData(data.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="flex justify-between mb-4">
        <input
          placeholder="Search data..."
          className="border px-3 py-2 rounded w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Data
        </button>
      </div>

      <div className="bg-white rounded shadow">
        <table className="w-full">

          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Title</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.title}</td>
                  <td>{item.value}</td>

                  <td>
                    <button
                      onClick={() => handleDelete(index)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4">
                  No data found
                </td>
              </tr>
            )}
          </tbody>

        </table>
      </div>

      {/* 🔥 Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow w-80">

            <h2 className="text-lg font-bold mb-4">Add Data</h2>

            <input
              type="text"
              placeholder="Enter title"
              className="border w-full mb-3 px-3 py-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter value"
              className="border w-full mb-3 px-3 py-2 rounded"
              value={value}
              onChange={(e) => setValue(e.target.value)}
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