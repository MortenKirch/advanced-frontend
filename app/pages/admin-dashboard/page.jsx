    "use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import fetchUserRole from "@/fetchUserRole";

export default function AdminDashboard() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const role = await fetchUserRole(user.uid);
        if (role === "admin") {
          setIsAuthorized(true);
        } else {
          router.push("/");
        }
      } else {
        router.push("/");
      }
      setLoading(false);
    };

    checkUserRole();
  }, [router]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!isAuthorized) {
    return null;
  }
    return (
        <>
        <h1>hello</h1>
        </>
    )
}