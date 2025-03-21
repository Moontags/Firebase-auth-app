"use client";

import { useEffect, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [unauthorized, setUnauthorized] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🔁 Tarkistetaan query param useEffectin avulla
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("unauthorized") === "true") {
        setUnauthorized(true);
      }
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email === "admin@example.com") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: "url('/page.avif')",
      }}
    >
      <form className="p-8 rounded shadow-md w-80" onSubmit={handleLogin}>
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>

        {unauthorized && (
          <div className="text-red-500 mb-3 text-sm">
            You are not authorized to view that page.
            <button
              type="button"
              onClick={() => router.back()}
              className="text-blue-400 underline ml-2"
            >
              Go Back
            </button>
          </div>
        )}

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 rounded bg-gray-700 border border-gray-600"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded transition"
        >
          Login
        </button>
      </form>
    </div>
  );
}
