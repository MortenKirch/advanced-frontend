"use client"; // Enables client-side interactivity

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Correct way to access params in a client component

export default function ItemPage() {
  const { id } = useParams(); // Access the 'id' dynamically from the route

  const [items, setItems] = useState([]);
  const [name, setName] = useState(""); // Input state for name
  const [price, setPrice] = useState(""); // Input state for price
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data under "meeting/{id}"
  async function fetchItems() {
    if (!id) return; // Ensure 'id' is loaded before fetching
    const res = await fetch(
      `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/meeting/${id}.json`
    );
    const data = await res.json();

    const itemArray = data
      ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
      : [];
    setItems(itemArray);
  }

  // Load data when component mounts or 'id' changes
  useEffect(() => {
    fetchItems();
  }, [id]);

  // Handle adding a new item
  async function handleAddItem(e) {
    e.preventDefault();
    setIsLoading(true);

    const newItem = { name, price: Number(price) };

    try {
      await fetch(
        `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/meeting/${id}.json`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newItem),
        }
      );
      fetchItems(); // Refresh the list
      setName("");
      setPrice("");
    } catch (error) {
      console.error("Error adding item:", error);
    } finally {
      setIsLoading(false);
    }
  }

  // Handle deleting an item
  async function handleDeleteItem(itemId) {
    try {
      await fetch(
        `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/meeting/${id}/${itemId}.json`,
        { method: "DELETE" }
      );
      fetchItems(); // Refresh the list
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">eksisterende varer</h2>
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="border-b p-2 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>{item.price} kr</p>
            </div>
            <button
              onClick={() => handleDeleteItem(item.id)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p>No items available.</p>
      )}

      <h2 className="text-xl font-bold mb-4 mt-6">Tilføj</h2>
      {/* Add New Item Form */}
      <form onSubmit={handleAddItem} className="mb-4">
        <div className="mb-2">
          <label className="block font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-2">
          <label className="block font-medium">Price (kr)</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-forest w-full text-white px-4 py-2 rounded-large"
          disabled={isLoading}
        >
          {isLoading ? "Tilføjer..." : "Tilføj"}
        </button>
      </form>
    </div>
  );
}
