export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Total Users" value="1200" />
        <Card title="Active Users" value="900" />
        <Card title="Reports" value="25" />
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