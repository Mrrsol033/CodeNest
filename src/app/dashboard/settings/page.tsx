export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Settings</h1>
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Account Settings</h3>
              <p className="text-gray-600">Manage your account preferences and security settings.</p>
            </div>
            <div className="border-b pb-4">
              <h3 className="font-semibold text-lg mb-2">Notifications</h3>
              <p className="text-gray-600">Configure your notification preferences.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Privacy</h3>
              <p className="text-gray-600">Control your privacy settings and data.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}