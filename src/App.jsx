import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login.jsx";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Data from "./pages/Data";
import Layout from "./components/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login page */}
        <Route path="/" element={<Login />} />

        {/* Layout routes */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Dashboard />} />
        </Route>

        <Route path="/users" element={<Layout />}>
          <Route index element={<Users />} />
        </Route>

        <Route path="/data" element={<Layout />}>
          <Route index element={<Data />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}