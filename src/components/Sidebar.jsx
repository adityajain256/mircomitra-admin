// import { Link } from "react-router-dom";

// export default function Sidebar() {
//   return (
//     <div className="w-64 bg-blue-900 text-white p-4">
//       <h1 className="text-xl mb-4">Micromitra</h1>
//       <Link to="/dashboard">Dashboard</Link><br />
//       <Link to="/users">Users</Link><br />
//       <Link to="/data">Data</Link>
//     </div>
//   );
// }



import { Link, useLocation } from "react-router-dom";
import { Home, Users, Database } from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `flex items-center gap-2 p-2 rounded ${
      pathname === path ? "bg-blue-700" : "hover:bg-blue-700"
    }`;

  return (
    <div className="w-64 bg-blue-900 text-white hidden md:flex flex-col">
      <h1 className="text-2xl font-bold p-4">Micromitra</h1>

      <nav className="flex flex-col gap-2 px-4">
        <Link to="/dashboard" className={linkClass("/dashboard")}>
          <Home size={18} /> Dashboard
        </Link>

        <Link to="/users" className={linkClass("/users")}>
          <Users size={18} /> Users
        </Link>

        <Link to="/data" className={linkClass("/data")}>
          <Database size={18} /> Data
        </Link>
      </nav>
    </div>
  );
}