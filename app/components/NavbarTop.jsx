import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function NavbarTop() {
    return (
        <header className="fixed top-0  w-full bg-creme text-f-green ">
            <nav className="container mx-auto px-4 py-2 flex justify-between items-center align-center h-16">
            
                    <Image src="/gulerod.png" alt="Logo" width={100} height={30} />
        
                <div className="flex flex-row w-30">
                    <FontAwesomeIcon icon={faBell} title="Notifications" aria-label="Notifications" className="h-8" />
                    <FontAwesomeIcon icon={faRightToBracket} title="Login" aria-label="Login" className="h-8 ml-6" />
                </div>
            </nav>
        </header>
    );
}

