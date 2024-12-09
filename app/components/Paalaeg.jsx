import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";


export default function paalaeg(){

    return(
        <>
        
        <div className="flex bg-primary rounded-large flex-col">

        <div className="col-span-2 flex flex-row">
        <h3 className="p-2 font-bold">noget om pålæg</h3>
        <RiInformation2Line size={20} className="m-1 mr-2 "/> 
        </div>
        <Image src="/cold-cut.png" width={150} height={150} alt="billede af grøntsager"className="self-end"/>

        </div>

        </>
    )
}