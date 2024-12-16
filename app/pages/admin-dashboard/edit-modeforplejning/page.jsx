"use client"; // Enables client-side functionality for forms and state handling

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [items, setItems] = useState([]);
  const [title, setTitle] = useState(""); // Input field state

  const [isLoading, setIsLoading] = useState(false);

  // Fetch items on initial load
  async function fetchItems() {
    const res = await fetch(
      "https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/meeting.json"
    );
    const data = await res.json();
    const fetchedItems = Object.keys(data || {}).map((key) => ({
      id: key,
      ...data[key],
    }));
    setItems(fetchedItems);
  }

  // Load items when the page loads
  useState(() => {
    fetchItems();
  }, []);
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
  
    try {
      // Target the 'meeting' node with the title as the key
      const url = `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/meeting/${title}.json`;
  
      // Use a placeholder value since Firebase ignores empty objects
      const newItem = { placeholder: true };
  
      // Send PUT request to create the key with a placeholder value
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newItem), // Non-empty object
      });
  
      if (!res.ok) {
        throw new Error("Failed to add the new item to Firebase.");
      }
  
      // Refresh the list
      fetchItems();
      setTitle(""); // Reset input field
    } catch (error) {
      console.error("Error adding new item:", error);
    } finally {
      setIsLoading(false);
    }
  }
  

  // Handle deleting an item
  async function handleDelete(id) {
    try {
      await fetch(
        `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/meeting/.json`,
        {
          method: "DELETE",
        }
      );

      // Remove the item from the list locally
      setItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  return (
    <div className="p-4">
      {/* Display the list of items */}
      <h2 className="text-xl font-bold mb-2">Items</h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-2 border-b flex flex-col w-full justify-between items-center"
        >
          <Link
            href={`edit-modeforplejning/${item.id}`}
            className="w-full flex justify-around "
          >
            <h3 className="text-center w-2/3 h-10 p-2 bg-cream rounded-xl">
              {item.title || `${item.id}`}
            </h3>
          </Link>
          <button
            onClick={() => handleDelete(item.id)}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      ))}

      <h2 className="text-xl font-bold mb-4 mt-6">Add a New Item</h2>

      {/* Form to add new items */}
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="mb-2">
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Adding..." : "Add Item"}
        </button>
      </form>
    </div>
  );
}
