import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";

export default function Dip({ data }) {
  if (!data) return null; // Don't render if no data is provided

  return (
    <div>

      <h2 className="col-span-2 text-left">Dip</h2>


      <div className="flex bg-blush rounded-large flex-col">
        <div className="col-span-2 flex flex-row justify-between">
          <h3 className="p-2 font-bold">{data || "Ingen beskrivelse tilgængelig"}</h3>
          <RiInformation2Line size={25} className="m-1 mr-2" />
        </div>
        <Image
          src={"/dip.png" || "/placeholder.png"} // Use provided image or a fallback
          width={150}
          height={150}
          alt="Billede af dip"
          className="self-end rounded-b-large"
        />
      </div>
    </div>
  );
}
