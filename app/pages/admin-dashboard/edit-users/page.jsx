"use client";
import { useState } from 'react';
import { auth } from '@/firebaseConfig'; // Ensure only auth is imported
import { createUserWithEmailAndPassword } from 'firebase/auth';
  export default function Page(){

  


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [role, setRole] = useState('teacher'); // Default role
  const [loading, setLoading] = useState(false); // Loading state


  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      // Create user with Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Prepare user data
      const userData = {
        displayName,
        email,
        role,
        createdAt: new Date().toISOString(), // ISO string for consistency
      };

      // Define the Realtime Database URL with the user's UID
      const dbUrl = `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/users/${user.uid}.json`;

      // PUT user data to Firebase Realtime Database at /users/{uid}.json
      const response = await fetch(dbUrl, {
        method: 'PUT', // Use 'PUT' to set data at a specific path
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Failed to set user data in Realtime Database');
      }

      alert('User registered successfully!');

      // Optionally, redirect the user after successful registration
      // router.push('/login'); // Uncomment if using Next.js and have a login page

      // Clear form fields
      setEmail('');
      setPassword('');
      setDisplayName('');
      setRole('teacher');
    } catch (error) {
      console.error('Error registering user:', error);
      // Map Firebase Auth error codes to user-friendly messages
      let errorMessage = 'An unexpected error occurred. Please try again.';
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'The email address is already in use.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'The email address is invalid.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'The password is too weak.';
      } else if (error.message.includes('Failed to set user data')) {
        errorMessage = 'There was an issue saving your data. Please try again.';
      }
      alert(errorMessage);
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <form 
        onSubmit={handleRegister} 
        className="bg-cream p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold font-sans mb-6 text-center">Opret Bruger</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="indtast email"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="indtast password"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="displayName">Navn:</label>
          <input
            id="displayName"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Indtast fulde navn"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="role">Adgang</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-3 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="teacher">Lærer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className={`w-full  text-white py-2 rounded bg-forest rounded-large ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? 'Registere...' : 'Register'}
        </button>
      </form>
    </div>
  );
};
