import Link from "next/link"
import Varmret from "@/app/components/Varmret"
export default function AdminDashboard() {
 
    return (
        <>
        <section className="m-2 w-full flex flex-col">
        <h1 className="font-sans ">Admin</h1>
        <h3 className="text-center text-lg">Her har du mulighed for at ændre dit content</h3>
        
        <Link href="admin-dashboard/edit-menu" className="text-center self-center text-lg m-4 p-2 w-2/3 h-10 bg-forest text-white rounded-xl "> Ugens menu</Link>
        <Link href="admin-dashboard/edit-drikkevarer" className="text-center self-center text-lg m-4 p-2 w-2/3  h-10 bg-forest text-white rounded-xl "> Drikkevarer</Link>
        <Link href="admin-dashboard/edit-modeforplejning" className="text-center self-center text-lg m-4 p-2 w-2/3  h-10 bg-forest text-white rounded-xl "> mødeforplejning</Link>
        <Link href="admin-dashboard/edit-users" className="text-center self-center text-lg m-4 p-2 w-2/3  h-10 bg-forest text-white rounded-xl "> Brugere</Link>
        </section>
        </>
    )
}