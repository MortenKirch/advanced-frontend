import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";


export default function Dressing(){

    return(
        <>
        
        <div>
      <h2 className="col-span-2 text-left">Dressing</h2>
      <div className="flex bg-gold rounded-large flex-col">
    
      <div className="col-span-2 flex flex-row">

      <h3 className="p-2 font-bold">salat omkring den ret som skal være her</h3>
      <RiInformation2Line size={45} className="m-1 mr-2 "/>
       </div>
       <Image src="/dessing.png" width={100} height={100} alt="billede af grøntsager"className="self-end"/>
     
      </div>
      </div>

        </>
    )
}