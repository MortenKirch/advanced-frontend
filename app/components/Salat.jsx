import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";


export default function Salat(){

    return(
        <>
        
        <div className="flex bg-sage rounded-large flex-col">
    <div className="flex flex-row">
      <h3 className="p-2 font-bold">salat omkring den ret som skal være her</h3>
      <RiInformation2Line size={50} className="m-1 self-top"/>
    </div>
    <Image src="/salad.png" width={250} height={250} alt="billede af grøntsager"className="w-full"/>

  </div>
        </>
    )
}