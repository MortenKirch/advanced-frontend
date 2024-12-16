
// components/DeleteButton.js
"use client";
import { useRouter } from 'next/navigation';

export default function DeleteButton({ id }) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = confirm('Are you sure you want to delete this drink?');
    if (!confirmDelete) return;

    try {
      const deleteRes = await fetch(
        `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/drikkevarer/${id}.json`,
        {
          method: 'DELETE',
        }
      );

      if (!deleteRes.ok) {
        throw new Error('Failed to delete drink.');
      }

      alert('Drink deleted successfully!');
      router.push('/pages/admin-dashboard/edit-drikkevarer'); // Navigate back to the list
    } catch (error) {
      console.error(error);
      alert('Error deleting drink. Please try again.');
    }
  };

  return (
    <button
      onClick={handleDelete}
      type="button"
      className="px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
    >
      Slet
    </button>
  );
}