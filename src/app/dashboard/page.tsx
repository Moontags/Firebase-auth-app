"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import PrivateRoute from "@/components/PrivateRoute";
import NavBar from "@/components/Navbar";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <PrivateRoute>
      <NavBar />
      <div
        className="flex flex-col items-center justify-center min-h-screen text-white p-8 bg-cover bg-center"
        style={{
          backgroundImage: "url('/happy.avif')",
        }}
      >
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4 text-green-300">Congratulations!</h1>
          {user && (
            <p className="text-lg text-gray-200 mb-6">
              You have signed in as: <strong>{user.email}</strong>
            </p>
          )}
        </div>
      </div>
    </PrivateRoute>
  );
}
