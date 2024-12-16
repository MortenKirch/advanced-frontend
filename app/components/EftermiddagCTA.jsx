import Image from "next/image"

export default function EftermiddagCTA(){
    return(

        <div className="bg-white row-span-1 col-span-2 w-full h-full rounded-large drop-shadow-xl ">
     
        <h2 className="bg-sage p-2 rounded-t-large ">Eftermiddag</h2>
        <p className="p-2">Kom ned i kantinen, om eftermiddagen, se hvad vi kan tilbyde jer til aftensmad eller køb noget med hjem som i kan smide i fryseren!</p>
         <div className="flex rounded-b-large h-44 justify-around" >
   
   
       
           <Image src="/gronsager.png" width={400} height={400} alt="billede af croissant" className="w-auto h-auto flex "></Image>
        </div>
      </div>
      
    )
}
