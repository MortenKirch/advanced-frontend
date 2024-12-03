import { FaBell, FaSignInAlt } from 'react-icons/fa'; // Import icons from react-icons
import Image from 'next/image';

export default function NavbarTop() {
    return (
        <header className="fixed top-0 w-full bg-creme text-f-green">
            <nav className="container mx-auto px-4 py-2 flex justify-between items-center align-center h-16">
                <Image src="/gulerod.png" alt="Logo" width={100} height={30} />

                <div className="flex flex-row w-30">
         
                    <FaBell title="Notifications" aria-label="Notifications"  size={25}/>
                    <FaSignInAlt title="Login" aria-label="Login" className="ml-6" size={25}/>
                </div>
            </nav>
        </header>
    );
}
