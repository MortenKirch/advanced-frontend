import Image from "next/image"



export default function Drink ({drink}){


    return(
        <>

        <div className="radius-large shadow-inner flex flex-col items-center overflow-hidden rounded-large justify-between ">
        <Image src={drink.image || "/placeholder-image.png"} width={200} height={200} alt={`billde af ${drink.name}`} className="w-auto h-auto m-4" ></Image>

       <div className="flex flex-col w-full"> 
       <p className="self-end text-xs pr-4">{drink.size}</p>
        <p className="font-bold p-2 text-center">{drink.name}</p>       
         </div>
            <p className="p-1 font-bold bg-cream w-full text-center">{drink.price || ""}kr</p>
   

        </div>
       
        </>
    )

}
