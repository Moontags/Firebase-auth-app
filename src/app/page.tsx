"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/page.avif')", 
      }}
    >
      <div className=" p-10  text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to auth-app!</h1>
        <h3 className="text-2xl font-bold mb-8">Start here:</h3>

        <div className="flex space-x-6 justify-center">
          <Link
            href="/login"
            className="bg-blue-400 hover:bg-blue-600 text-white px-3 py-1 rounded transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded transition"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}
