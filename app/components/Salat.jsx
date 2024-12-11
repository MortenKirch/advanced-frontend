import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";

export default function Salat({ data }) {
  if (!data) return null;  

  return (
    <div className="flex bg-sage rounded-large flex-col">
      <div className="flex flex-row justify-between">
        <h3 className="p-2 font-bold">{data.description}</h3>
        <RiInformation2Line size={25} className="m-1 self-top mr-2" />
      </div>
      <Image
        src={"/salad.png" || "/placeholder.png"}
        width={250} 
        height={250}
        alt={`Tegning af salatskål`}
        className="w-full rounded-b-large"
      />
    </div>
  );
}
