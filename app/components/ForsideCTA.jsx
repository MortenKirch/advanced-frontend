import Image from "next/image"

export default function ForsideCTA(){
    return(

        <div className="bg-white row-span-1 col-span-2 w-full h-full rounded-large drop-shadow-xl ">
     
        <h2 className="bg-rose p-2 rounded-t-large ">Morgenmad</h2>
        <p className="p-2">Kom ned i kanitnen og få din morgenmad eller se bagerens friskbagte brød</p>
         <div className="flex rounded-b-large h-44 " >
   
           <ul  className="p-2 flex flex-col justify-end">
           <li>
           Kaffe: 12kr
           </li>
           <li>
             bolle med ost: 22kr
           </li>
           </ul> 
       
           <Image src="/coffee-and-c.png" width={80} height={80} alt="billede af croissant" className="w-auto h-auto"></Image>
        </div>
      </div>
      
    )
}
