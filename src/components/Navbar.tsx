"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  const linkClass = (path: string) =>
    `px-3 py-1 rounded transition ${
      pathname === path ? "bg-blue-600" : "hover:bg-blue-700"
    }`;

  return (
    <nav className="opacity-85 text-white flex justify-between items-center px-6 py-4">
      <div className="flex space-x-4">
        <Link href="/dashboard" className={linkClass("/dashboard")}>
          Dashboard
        </Link>
        <Link href="/admin" className={linkClass("/admin")}>
          Admin
        </Link>
        <Link href="/profile" className={linkClass("/profile")}>
          Profile
        </Link>
      </div>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
      >
        Logout
      </button>
    </nav>
  );
}
