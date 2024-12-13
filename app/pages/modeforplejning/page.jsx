"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebaseConfig";
import fetchUserRole from "@/fetchUserRole";
import FoodSheet from "@/app/components/FoodSheet";
import GetDate from "@/app/components/GetDate";
import TotalItemValue from "@/app/components/TotalItemValue";

export default function Modeforplejning() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUserRole = async () => {
      const user = auth.currentUser;
      if (user) {
        const role = await fetchUserRole(user.uid);
        if (role === "admin" || role === "teacher") {
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
    <section className="ml-2 mr-2">
      <h1>Mødeforplejning</h1>
      <form action="" className="w-full p-4">
        <input
          type="text"
          className="w-full border-black rounded-large border h-12 px-4 m-1"
          placeholder="Navn på arrangement"
        />
        <input
          type="text"
          className="w-full border-black rounded-large border h-12 px-4 m-1"
          placeholder="Serveringssted"
        />
        <div className="flex">
          <GetDate />
          <input
            type="number"
            className="w-1/2 border-black rounded-large border h-12 px-4"
            placeholder="Antal i alt"
          />
        </div>
      </form>
      <FoodSheet />
      <TotalItemValue />
      <button className="w-52 mt-6 bg-forest text-white py-2 rounded-large font-bold m-auto flex self-center justify-center">
        Send til godkendelse
      </button>
    </section>
  );
}
