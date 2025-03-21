"use client";

import AdminRoute from "@/components/AdminRoute";
import NavBar from "@/components/Navbar";

export default function AdminPage() {
  return (
    <AdminRoute>
      <NavBar />
      <div
        className="flex flex-col items-center justify-center min-h-screen text-white p-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('/admin.avif')",
        }}
      >
        <div className="p-6 rounded">
          <h1 className="text-4xl font-bold mb-4 text-yellow-200">Admin Panel</h1>
          <p className="text-lg text-white">Access admin-only </p>
        </div>
      </div>
    </AdminRoute>
  );
}
