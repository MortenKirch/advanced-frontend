import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";


export default function Dip(){

    return(
        <>
<div className="col-span-2">
<div className="flex justify-between  ">
<h2>Varm ret</h2>
<button className="underline text-xs self-end mr-2">se vegetar muligheder her</button>
</div>
  <div className="flex bg-butter overflow-hidden rounded-large">
    <Image src="/placeholder-image.png" width={200} height={200}></Image>
    <div>
    <h3 className="p-2 font-bold">overskrift</h3>
    <p className="pl-2">undertekst omkring den ret som skal være her</p>
    </div>
    <RiInformation2Line size={30} className="m-1 mr-2"/>
  </div>
</div>
        </>
    )
}

