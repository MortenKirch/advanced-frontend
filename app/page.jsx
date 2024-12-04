import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function Page() {
  return (
    <>
    <h1 className="text-center">Velkommen til Madkammeret</h1>
    <section className="grid grid-row-3 grid-cols-2 gap-2 text-center">
     
  

      <div className="bg-teal row-span-2 col-span-1 w-full h-full rounded-large drop-shadow-xl">
      <h2>Om os</h2>
      <p>Vil du hører mere om os her i Madkammeret så gå et smudt ind på vores hjemmeside, hvor der stpr meget mere.</p>
      <div className="flex flex-row justify-between">
      <Image src="/jacob.png" width={100} height={100} alt="billede af Jacob, Ejer af madkammeret"/> 
      <a className=" block w-10 h-10 border-white border-4 rounded-full self-end m-2 mr-4 "> <FaArrowRight size={30} className="text-white"/></a>
      </div>
      </div>

      <div className="bg-white row-span-1 col-span-1 w-full h-full rounded-large drop-shadow-xl">
     
        <h2 className="bg-butter p-2 rounded-t-large ">Tilbud</h2>
      <div className="flex rounded-b-large" >
        <p>se hvad vi har på tilbud idag</p>
        <a className=" block w-10 border-butter border-4 rounded-full h-10 self-end"> <FaArrowRight size={30}/></a>
        </div>
      </div>


      <div className="bg-blush row-span-1 col-span-1 w-full h-full rounded-large drop-shadow-xl">
     
        <h2 className="p-2 rounded-t-large ">Klippekort</h2>
      <div className="flex rounded-b-large" >
        <p>se hvad vi har på tilbud idag</p>
        <a className=" block w-10 border-butter border-4 rounded-full h-10 self-end"> <FaArrowRight size={30}/></a>
        </div>
      </div>

        <div className="bg-white row-span-1 col-span-2 w-full h-full rounded-large">   
        <h2 className="bg-primary p-2 rounded-t-large ">Stop madspild</h2>
      <div className="flex rounded-b-large" >
        <p>STOP </p>
        <a className=" block w-10 border-butter border-4 rounded-full h-10 self-end"> <FaArrowRight size={30}/></a>
        </div>
      </div>
    </section>

    </>


  );
}
