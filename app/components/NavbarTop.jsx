import { FaBell, FaSignInAlt } from 'react-icons/fa'; // Import icons from react-icons
import Image from 'next/image';
import Link from 'next/link';

export default function NavbarTop() {
    return (
        <header className="fixed top-0 w-full bg-cream text-f-green z-10">
            <nav className="container mx-auto px-4 py-2 flex justify-between items-center align-center h-16">
            <Link href="/">
                <Image src="/gulerod.png" alt="Logo" width={100} height={30} />
                </Link>
                <div className="flex flex-row w-30 text-forest" >
                    <Link href="/pages/notification">
                    <FaBell title="Notifications" aria-label="Notifications"  size={25}/>
                    </Link>
                    <Link href="/pages/login">
                    <FaSignInAlt title="Login" aria-label="Login" className="ml-6" size={25}/>
                    </Link>
                </div>
            </nav>
        </header>
    );
}
