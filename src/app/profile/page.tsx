export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Profile</h1>
          <div className="space-y-4">
            <p className="text-gray-600">Welcome to your profile page!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Personal Information</h3>
                <p className="text-gray-600">Manage your personal details</p>
              </div>
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-lg mb-2">Account Settings</h3>
                <p className="text-gray-600">Update your account preferences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}