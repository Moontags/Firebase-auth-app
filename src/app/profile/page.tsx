"use client";

import PrivateRoute from "@/components/PrivateRoute";
import NavBar from "@/components/Navbar";

export default function ProfilePage() {
  return (
    <PrivateRoute>
      <NavBar />
      <div
        className="flex flex-col items-center justify-center min-h-screen text-white p-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('/welcome.avif')",
        }}
      >
        <div className=" p-6 rounded">
          <h1 className="text-3xl font-bold mb-4 text-gray-600">User Profile</h1>
          <p className="text-lg text-white">Visible to all logged-in users.</p>
        </div>
      </div>
    </PrivateRoute>
  );
}
