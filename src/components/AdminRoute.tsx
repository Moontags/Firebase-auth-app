"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AdminRoute({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [user, setUser] = useState<User | null | "checking">("checking");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        router.replace("/login"); 
      } else if (firebaseUser.email !== "admin@example.com") {
        router.replace("/login?unauthorized=true"); 
      } else {
        setUser(firebaseUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (user === "checking") {
    return <p className="text-white text-center mt-10">Checking access...</p>;
  }

  return <>{children}</>;
}
