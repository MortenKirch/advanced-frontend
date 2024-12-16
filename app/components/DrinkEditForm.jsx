"use client";
import DrinkDelete from '@/app/components/DrinkDelete';
import React from 'react';

export default function DrinkEditForm({ drink, id }) {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedDrink = {
      name: event.target.name.value,
      price: parseFloat(event.target.price.value),
      image: event.target.image.value,
    };

    try {
      const updateRes = await fetch(
        `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/drikkevarer/${id}.json`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedDrink),
        }
      );

      if (!updateRes.ok) {
        throw new Error('Failed to update drink data.');
      }

      alert('Drink updated successfully!');
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Name Field */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Drink Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={drink.name}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
          name="price"
          defaultValue={drink.price}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
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
          name="image"
          defaultValue={drink.image}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Save Button */}
  
      <div className="flex justify-between">
      <DrinkDelete id={id}></DrinkDelete>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
  
          Save Changes
        </button>
      </div>
    </form>
  );
}
