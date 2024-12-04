import Image from "next/image"



export default function Drink (){


    return(
        <>
        <section className="grid grid-cols-2 gap-2 m-2 ">
        <div className="radius-large shadow-2xl flex flex-col items-center overflow-hidden rounded-b-large">
        <Image src={`/coffee.png`} width={100} height={100} alt={`billde af`}></Image>
        <p className="font-bold">overskrift til drikkevarene</p>
            <p className="p-1 font-bold bg-cream w-full text-center ">18kr</p>
        </div>
        
        </section>
        </>
    )

}