// export default function Navbar() {
//   return (
//     <div className="bg-white p-4 shadow">
//       Admin Panel
//     </div>
//   );
// }

export default function Navbar() {
  return (
    <div className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h2 className="text-lg font-semibold">Admin Dashboard</h2>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">Admin</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">
          Logout
        </button>
      </div>
    </div>
  );
}