import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";

export default function Paalaeg({ data }) {
  if (!data) return null; 

  return (
    <div className="flex bg-primary rounded-large flex-col">
      <div className="col-span-2 flex flex-row">
        <h3 className="p-2 font-bold">{data.description || "Ingen beskrivelse tilgængelig"}</h3>
        <RiInformation2Line size={20} className="m-1 mr-2" />
      </div>
      <Image
        src="/cold-cut.png" // Static placeholder image for "pålæg"
        width={150}
        height={150}
        alt={`Billede af ${data.description || "pålæg"}`}
        className="self-end rounded-b-large"
      />
    </div>
  );
}
