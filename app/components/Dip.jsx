import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";


export default function Dip(){

    return(
        <>
        
        <div>
      <h2 className="col-span-2 text-left">Dip</h2>
      <div className="flex bg-blush rounded-large flex-col">
    
    
      <div className="col-span-2 flex flex-row">
      <h3 className="p-2 font-bold">tekst omkring dip</h3>
      <RiInformation2Line size={45} className="m-1 mr-2 "/>
       </div>
       <Image src="/dip1.png" width={150} height={150} alt="billede af grøntsager"className="self-end"/>
     
      </div>
      </div>
        </>
    )
}

