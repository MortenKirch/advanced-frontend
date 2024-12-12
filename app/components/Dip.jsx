import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";

export default function Dip({ data }) {
  if (!data) return null; // Don't render if no data is provided

  return (
    <>



      <div className="flex bg-blush rounded-large flex-col justify-between">
        <div className=" flex justify-between ">
          <h3 className="p-2 font-bold">{data}</h3>
          <RiInformation2Line size={20} className="m-1 mr-2 w-10" />
        </div>
        <Image
          src={"/dip.png" || "/placeholder.png"} // Use provided image or a fallback
          width={150}
          height={150}
          alt="Billede af dip"
          className="self-center max-w-28"
        />
      </div>
    </>
  );
}
