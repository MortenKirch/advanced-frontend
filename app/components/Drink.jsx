import Image from "next/image"



export default function Drink ({drink}){


    return(
        <>

        <div className="radius-large shadow-xl flex flex-col items-center overflow-hidden rounded-b-large">
        <Image src={drink.image || "/placeholder-image.png"} width={200} height={200} alt={`billde af ${drink.name}`} className="w-auto h-auto object-cover"></Image>
        <p className="font-bold">{drink.name}</p>
            <p className="p-1 font-bold bg-cream w-full text-center ">{drink.price}kr</p>
        </div>
        
    
        </>
    )

}
