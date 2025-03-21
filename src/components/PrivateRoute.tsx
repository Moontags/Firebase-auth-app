"use client";

import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

interface Props {
  children: ReactNode;
}

export default function PrivateRoute({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticated(true);
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return <div className="text-white text-center mt-10">Loading...</div>;
  }

  return authenticated ? <>{children}</> : null;
}
