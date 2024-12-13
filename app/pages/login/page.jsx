"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebaseConfig";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  // Monitor auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe(); // Cleanup the listener on unmount
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/"); // Redirect after successful login
    } catch (err) {
      setError("Login failed. Please check your email and password.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      alert("Logged out successfully!");
    } catch (err) {
      console.error("Logout failed:", err.message);
    }
  };

  return (
    <section className="flex justify-center flex-col">
      <Image
        src={"/logo.png"}
        width={150}
        height={150}
        alt="madkammer logo"
        className="self-center h-auto"
      />
      {!user ? (
        <form onSubmit={handleLogin} className="w-full flex flex-col">
          <input
            type="text"
            className="w-4/5 border-black rounded-large border h-12 px-4 m-2 self-center"
            placeholder="Email:"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="w-4/5 border-black rounded-large border h-12 px-4 m-2 self-center"
            placeholder="Password:"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex ml-2 self-center">
            <p className="text-xs">Har du glemt dit password?</p>
            <a href="#" className="underline text-xs">
              klik her
            </a>
          </div>
          {error && <p className="text-red-500 text-xs mt-2 self-center">{error}</p>}
          <button
            type="submit"
            className="w-32 mt-6 bg-forest text-white px-4 py-2 rounded-large font-bold m-auto flex self-center justify-center"
          >
            Login
          </button>
        </form>
      ) : (
        <button
          onClick={handleLogout}
          className="w-32 mt-6 bg-red-500 text-white px-4 py-2 rounded-large font-bold m-auto flex self-center justify-center"
        >
          Logout
        </button>
      )}
    </section>
  );
}
