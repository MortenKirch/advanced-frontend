import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";

export default function Dressing({ data }) {
  if (!data) return null; // Don't render if no data is provided

  return (
    <div>

      <h2 className="col-span-2 text-left">Dressing</h2>


      <div className="flex bg-gold rounded-large flex-col">
        <div className="col-span-2 flex flex-row">
          <h3 className="p-2 font-bold">{data}</h3> {/* Display the string directly */}
          <RiInformation2Line size={25} className="m-1 mr-2" />
        </div>
        <Image
          src="/dessing.png" 
          width={100}
          height={100}
          alt="Billede af dressing"
          className="self-end rounded-b-large"
        />
      </div>
    </div>
  );
}
