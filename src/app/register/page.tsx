"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.email === "admin@example.com") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/page.avif')", 
      }}
    >
      <form
        onSubmit={handleRegister}
        className="p-8 rounded shadow-md w-80"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>

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
          className="w-full bg-green-500 hover:bg-green-600 py-2 rounded transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
