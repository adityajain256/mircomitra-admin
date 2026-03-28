import React, { useEffect, useState } from "react";
import api from "../utils/api.js";

export default function Dashboard() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await api.get("/dashboard");
      setData(res);
    } catch (error) {
      console.log("Error fetching dashboard data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  });
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Users" value={data?.totalUsers || "0"} />
        <Card title="Active Users" value={data?.totalJobs || "0"} />
        <Card title="Reports" value={data?.reports || "0"} />
      </div>

      <div className="bg-white mt-6 p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
        <p className="text-gray-500">No recent activity</p>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h4 className="text-gray-500">{title}</h4>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
