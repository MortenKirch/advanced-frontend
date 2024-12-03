import { FaHome, FaUtensils, FaHandshake, FaGlassWhiskey } from 'react-icons/fa'; // Import equivalent icons

export default function Navbar() {
    return (
        <header>
            <nav className="fixed bottom-0 w-full h-16 flex items-center justify-around bg-creme text-f-green">
                <a href="/"className="flex flex-col h-14">
                    {/* Replace FontAwesomeIcon with FaHome */}
                    <FaHome size={30}title="Home" aria-label="Home" />
                    <p className="text-xs mt-1">Home</p>
                </a>
                <a href="ugensMenu"className="flex flex-col items-center h-14">
                    {/* Replace FontAwesomeIcon with FaUtensils */}
                    <FaUtensils size={30} title="Ugens menu" aria-label="Ugens menu" />
                    <p className="text-xs mt-1">Ugens menu</p>
                </a>
                <a href="/drikkevare"className="flex flex-col items-center h-14">
                    {/* Replace FontAwesomeIcon with FaGlassWhiskey */}
                    <FaGlassWhiskey size={30} title="Drikkevarer" aria-label="Drikkevarer" />
                    <p className="text-xs mt-1">Drikkevarer</p>
                </a>
                <a href="/modeforplejning"className="flex flex-col items-center h-14">
                    {/* Replace FontAwesomeIcon with FaHandshake */}
                    <FaHandshake size={30} title="Mødeforplejning" aria-label="Mødeforplejning" />
                    <p className="text-xs mt-1">Mødeforplejning</p>
                </a>
            </nav>
        </header>
    );
}
