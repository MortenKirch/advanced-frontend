import { FaBell, FaSignInAlt } from 'react-icons/fa'; // Import icons from react-icons
import { MdAdminPanelSettings } from "react-icons/md";

import Image from 'next/image';
import Link from 'next/link';

export default function NavbarTop() {
    return (
        <header className="fixed top-0 w-full bg-cream text-f-green z-10">
            <nav className="container mx-auto px-4 py-2 flex justify-between items-center align-center h-16 w-full">
                     <Link href="/">
                    <Image src="/gulerod.png" alt="Logo" width={200} height={50} className='h-8 w-auto' />
                    </Link>
                <div className="flex flex-row w-32 text-forest justify-between" >
                    <Link href="/pages/notification">
                    <FaBell title="Notifications" aria-label="Notifications"  size={25}/>
                    </Link>
                    <Link href="/pages/admin-dashboard">
                    <MdAdminPanelSettings title="Admin dashboard" aria-label="Admin dashboard"  size={25}/>
                    </Link>
                    <Link href="/pages/login">
                    <FaSignInAlt title="Login" aria-label="Login"  size={25}/>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
