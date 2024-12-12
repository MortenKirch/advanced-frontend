import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";

export default function Dressing({ data }) {
  if (!data) return null; // Don't render if no data is provided

  return (
    <>

     


      <div className="flex bg-gold rounded-large flex-col w-full">
        <div className="col-span-2 flex justify-between w-full">
          <h3 className=" m-2 font-bold break-all">{data}</h3> 
          <Image
          src="/dressing.png" 
          width={100}
          height={100}
          alt="Billede af dressing"
          className="w-10"
        />
          <RiInformation2Line size={20} className="m-1 mr-2 w-10" />
          
        </div>

      </div>
    </>
  );
}
