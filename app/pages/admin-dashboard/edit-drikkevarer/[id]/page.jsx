import Link from 'next/link';
import Image from 'next/image';
import DrinkEditForm from '@/app/components/DrinkEditForm';


export default async function EditDrinkPage({ params }) {
  const id = await params?.id;

  if (!id) {
    return <div className="text-center text-red-500">Error: Drink ID is missing.</div>;
  }

  try {
    // Fetch drink data on the server
    const res = await fetch(
      `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/drikkevarer/${id}.json`,
      { cache: 'no-store' } 
    );

    if (!res.ok) {
      throw new Error('Failed to fetch drink data.');
    }

    const drink = await res.json();

    if (!drink) {
      return (
        <div className="flex flex-col items-center mt-10">
          <h1 className="text-3xl font-semibold text-red-500">Drink Not Found</h1>
          <Link
            href="/pages/admin-dashboard/edit-drikkevarer"
            className="mt-4 text-blue-500 hover:underline"
          >
            Tilbage
          </Link>
        </div>
      );
    }

    return (
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-50 rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
           <span className="">{drink.name}</span>
        </h1>

        {/* Display Drink Image */}
        <div className="flex justify-center mb-6">
          <Image width={300}
          height={300}
            src={drink.image || 'https://via.placeholder.com/300'}
            alt={drink.name}
            className="w-64 h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Drink Edit Form */}
        <DrinkEditForm drink={drink} id={id} />

        {/* Back Link */}
        <div className="mt-6 text-center">
          <Link
            href="/pages/admin-dashboard/edit-drikkevarer"
            className="text-blue-500 hover:underline"
          >
            Tilbage
          </Link>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-semibold text-red-500">Error Fetching Drink</h1>
        <p className="mt-2 text-gray-700">{error.message}</p>
        <Link
          href="/pages/admin-dashboard/edit-drikkevarer"
          className="mt-4 text-blue-500 hover:underline"
        >
          Tilbage
        </Link>
      </div>
    );
  }
}
