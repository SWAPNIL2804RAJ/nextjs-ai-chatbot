'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import profilePic from '../../artifacts/image/profilepic.jpg';
import { signOut } from 'next-auth/react';

export default function DashboardPage() {
  const originalUser = {
    fullName: 'Swapnil Raj',
    accountType: 'Premium',
    phone: '+91 9876543210',
    dob: '2000-01-01',
    bio: 'Passionate web developer exploring MERN stack and more.',
  };

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(originalUser);
  const [originalData, setOriginalData] = useState(originalUser);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    if (!isEditing) {
      // Going into edit mode: store current state as backup
      setOriginalData(formData);
    } else {
      // Cancel edit: reset form data to original values
      setFormData(originalData);
    }
    setIsEditing(prev => !prev);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Optional: Add backend update logic here
  };

  const handleLogout = () => signOut({ callbackUrl: '/' });

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">User Dashboard</h1>

      {/* Profile Overview */}
      <div className="flex items-center space-x-4 border p-4 rounded-lg shadow-sm">
        <Image
          src={profilePic}
          alt="Profile Picture"
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold">{formData.fullName}</h2>
          <p className="text-muted-foreground">{formData.accountType} Account</p>
        </div>
        <Button onClick={handleEditToggle} variant="outline">
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
      </div>

      {/* Editable Details */}
      <div className="space-y-4 border p-4 rounded-lg shadow-sm">
        <div>
          <label className="block text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="mt-1 w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="mt-1 w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="mt-1 w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            disabled={!isEditing}
            className="mt-1 w-full p-2 border rounded-md"
            rows={3}
          />
        </div>

        {isEditing && (
          <Button onClick={handleSave} className="w-full">
            Save Changes
          </Button>
        )}
      </div>

      {/* Logout Button */}
      <div className="w-full flex justify-center">
        <Button
          onClick={handleLogout}
          className="w-full max-w-3xl border border-red-500 text-red-600 hover:bg-red-500 hover:text-white transition-colors duration-200"
          variant="outline"
        >
          Logout
        </Button>
      </div>
    </div>
  );
}
