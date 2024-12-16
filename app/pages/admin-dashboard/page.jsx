import Link from "next/link";
import { FaEdit } from "react-icons/fa";

export default function AdminDashboard() {
  return (
    <>
      <section className=" m-4 flex flex-col items-center">
        <h1 className="font-sans text-3xl font-bold mb-4">Admin Dashboard</h1>
        <h3 className="text-center text-lg text-gray-600 mb-8">
          Her kan du administrere og redigere indholdet
        </h3>

        <div className="grid grid-cols-1 gap-6 w-full">
          <Link
            href="admin-dashboard/edit-menu"
            className="flex items-center justify-between p-4 w-full bg-forest text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            <span className="text-lg font-semibold">Ugens menu</span>
            <FaEdit size={30}></FaEdit>
          </Link>

          <Link
            href="admin-dashboard/edit-drikkevarer"
            className="flex items-center justify-between p-4 w-full bg-forest text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            <span className="text-lg font-semibold">Drikkevarer</span>
            <FaEdit size={30}></FaEdit>
          </Link>

          <Link
            href="admin-dashboard/edit-modeforplejning"
            className="flex items-center justify-between p-4 w-full bg-forest text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            <span className="text-lg font-semibold">Mødeforplejning</span>
            <FaEdit size={30}></FaEdit>
          </Link>

          <Link
            href="admin-dashboard/edit-users"
            className="flex items-center justify-between p-4 w-full bg-forest text-white rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
          >
            <span className="text-lg font-semibold">Brugere</span>
            <FaEdit size={30}></FaEdit>
          </Link>
        </div>
      </section>
    </>
  );
}
