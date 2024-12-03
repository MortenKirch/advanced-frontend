import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHandshake, faBottleWater, faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <header>
            <nav className="fixed bottom-0 w-full h-16 flex items-center justify-around bg-creme text-f-green">
                <div className="flex flex-col h-14">
                    <FontAwesomeIcon icon={faHouse} title="Home" aria-label="Home" className="mt-1" />
                    <p className="text-xs mt-2">Home</p>
                </div>
                <div className="flex flex-col items-center h-14 ">
                    <FontAwesomeIcon icon={faUtensils} title="Ugens menu" aria-label="Ugens menu"  />
                    <p className="text-xs mt-1">Ugens menu</p>
                </div>
                <div className="flex flex-col items-center h-14">
                    <FontAwesomeIcon icon={faBottleWater} title="Drikkevarer" aria-label="Drikkevarer"  />
                    <p className="text-xs mt-1">Drikkevarer</p>
                </div>
                <div className="flex flex-col items-center h-14">
                    <FontAwesomeIcon icon={faHandshake} title="Mødeforplejning" aria-label="Mødeforplejning"/>
                    <p className="text-xs mt-1">Mødeforplejning</p>
                </div>
            </nav>
        </header>
    );
}
