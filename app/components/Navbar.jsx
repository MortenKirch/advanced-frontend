"use client";

import React, { useState, useEffect } from "react";
import { FaHome, FaUtensils, FaHandshake, FaGlassWhiskey } from "react-icons/fa";
import Link from "next/link";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import fetchUserRole from '@/fetchUserRole';

export default function Navbar() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRole = await fetchUserRole(user.uid);
        setRole(userRole);
      } else {
        setRole(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <header>
      <nav className="fixed bottom-0 w-full h-16 flex items-center justify-around bg-cream text-forest z-10">
        <Link href="/" className="flex flex-col h-14">
          <FaHome size={30} title="Home" aria-label="Home" />
          <p className="text-xs mt-1">Home</p>
        </Link>
        <Link href="/pages/ugensMenu" className="flex flex-col items-center h-14">
          <FaUtensils size={30} title="Ugens menu" aria-label="Ugens menu" />
          <p className="text-xs mt-1">Ugens menu</p>
        </Link>
        <Link href="/pages/drikkevare" className="flex flex-col items-center h-14">
          <FaGlassWhiskey size={30} title="Drikkevarer" aria-label="Drikkevarer" />
          <p className="text-xs mt-1">Drikkevarer</p>
        </Link>
        {(role === "admin" || role === "teacher") && (
          <Link href="/pages/modeforplejning" className="flex flex-col items-center h-14">
            <FaHandshake size={30} title="Mødeforplejning" aria-label="Mødeforplejning" />
            <p className="text-xs mt-1">Mødeforplejning</p>
          </Link>
        )}
      </nav>
    </header>
  );
}
