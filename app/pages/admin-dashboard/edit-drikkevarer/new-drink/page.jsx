"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function NewDrink() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
  });
  const router = useRouter();
  const [responseMessage, setResponseMessage] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!formData.name || !formData.price || !formData.image) {
      setResponseMessage("Please fill all fields before submitting.");
      return;
    }

    try {
      const response = await fetch(
        "https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/drikkevarer.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add drink");
      }

      const data = await response.json();
      setResponseMessage(`Successfully added: ${formData.name}`);
    } catch (error) {
      console.error(error);
      setResponseMessage("Error adding drink. Please try again.");
    }
    router.push("/pages/admin-dashboard/edit-drikkevarer");
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
      {/* Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Tilføj drink
      </h1>

      <div className="flex justify-center mb-6">
        <img
          src={formData.image || "https://via.placeholder.com/300"}
          alt="Preview"
          className="w-64 h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      <form className="space-y-4" onSubmit={handleFormSubmit}>
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Drink Name:
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Navn på drink"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Price Field */}
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price (DKK):
          </label>
          <input
            type="number"
            id="price"
            value={formData.price}
            onChange={handleInputChange}
            placeholder="Pris"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Image URL Field */}
        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Image URL:
          </label>
          <input
            type="text"
            id="image"
            value={formData.image}
            onChange={handleInputChange}
            placeholder="Image URL"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end">

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Save Changes
          </button>

        </div>
      </form>

      {/* Response Message */}
      {responseMessage && (
        <div className="mt-4 text-center text-gray-700">
          {responseMessage}
        </div>
      )}

      {/* Back Link */}
      <div className="mt-6 text-center">
        <Link
          href="/pages/admin-dashboard/edit-drikkevarer"
          className="text-blue-500 hover:underline"
        >
          Back to Edit Drinks
        </Link>
      </div>
    </div>
  );
}
