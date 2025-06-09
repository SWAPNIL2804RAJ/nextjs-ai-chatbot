'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [dob, setDob] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Settings</h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column */}
        <div className="flex-1 space-y-6">
          {/* Theme */}
          <div className="border p-4 rounded shadow">
            <div
              onClick={() => toggleSection('theme')}
              className="cursor-pointer font-medium"
            >
              Theme
            </div>
            {openSection === 'theme' && (
              <div className="mt-2">
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="w-full border rounded p-2 mt-2"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            )}
          </div>

          {/* Date of Birth */}
          <div className="border p-4 rounded shadow">
            <div
              onClick={() => toggleSection('dob')}
              className="cursor-pointer font-medium"
            >
              Date of Birth
            </div>
            {openSection === 'dob' && (
              <div className="mt-2">
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full border rounded p-2"
                />
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 space-y-6">
          {/* Notifications */}
          <div className="border p-4 rounded shadow">
            <div
              onClick={() => toggleSection('notifications')}
              className="cursor-pointer font-medium"
            >
              Email Notifications
            </div>
            {openSection === 'notifications' && (
              <div className="mt-2 flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={() => setNotifications(!notifications)}
                />
                <span>{notifications ? 'Enabled' : 'Disabled'}</span>
              </div>
            )}
          </div>

          {/* Change Password */}
          <div className="border p-4 rounded shadow">
            <div
              onClick={() => toggleSection('password')}
              className="cursor-pointer font-medium"
            >
              Change Password
            </div>
            {openSection === 'password' && (
              <div className="mt-2 space-y-2">
                <input
                  type="password"
                  placeholder="Enter old password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full border rounded p-2"
                />
                <input
                  type="password"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border rounded p-2"
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="mt-6">
        <button
          onClick={() => alert('Settings updated!')}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
