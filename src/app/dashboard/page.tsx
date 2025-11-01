export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Overview</h3>
              <p className="text-gray-600">View your account overview</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Statistics</h3>
              <p className="text-gray-600">Check your activity stats</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">Recent Activity</h3>
              <p className="text-gray-600">See your recent actions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}