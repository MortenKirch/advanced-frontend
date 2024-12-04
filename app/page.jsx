import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Page() {
  return (
    <>
    <h1 className="text-center">Velkommen til Madkammeret</h1>
    <section className="grid grid-row-3 grid-cols-2 gap-2 text-center">
     
  

      <div className="bg-red-500 row-span-2 col-span-1 w-full h-full rounded-large drop-shadow-xl">
      <h2>Om os</h2>
      <p>Vil du hører mere om os her i Madkammeret så gå et smudt ind på vores hjemmeside, hvor der stpr meget mere.</p>
      <div className="flex flex-row justify-between">
      <Image src="/jacob.png" width={100} height={100} alt="billede af Jacob, Ejer af madkammeret"/> 
      <a className=" block w-10 h-10 border-yellow-400 border-4 rounded-full self-end m-2 mr-4 "> <FaArrowRight size={30} className="text-white"/></a>
      </div>
      </div>

      <div className="bg-yellow-500 row-span-1 col-span-1 w-full h-full rounded-large ">
        <h2>Tilbud</h2>
        <p></p>
        <a className=" block w-10 border-yellow-400 border-4 rounded-full"> <FaArrowRight size={30}/></a>
        
      </div>

      <div className="bg-blue-400 row-span-1 col-span-1 w-full h-full rounded-large">
    <h2>Klippekort</h2>
    <p></p>
    <a className=" block w-10 border-yellow-400 border-4 rounded-full"> <FaArrowRight size={30}/></a>
      </div>

      <div className="bg-green-400 row-span-1 col-span-2 w-full h-full rounded-large" >
    <h2>Stopdmadspild</h2>
    <p></p>
      </div>

    </section>

    </>


  );
}
