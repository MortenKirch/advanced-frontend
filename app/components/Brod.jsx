import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";


export default function Brod(){

    return(
        <>
        
        <div className="flex justify-between  ">
    <h2>brød</h2>
    </div>
      <div className=" bg-tan overflow-hidden rounded-large flex flex-col">
      <div className="flex w-full justify-between">
        <h3 className="pl-2 font-bold">Bagerens friskbagte rugbrød & Koldhævede surdejsbrød</h3>
        <RiInformation2Line size={20} className="m-1 mr-2"/>
        </div>
        <Image src="/bread.png" width={150} height={150} alt="billede af grøntsager"className="flex self-end"/>
  
        </div>
      

        </>
    )
}