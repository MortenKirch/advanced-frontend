import Image from "next/image";
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
import { RiInformation2Line } from "react-icons/ri";
export default function UgensMenu() {
  return (
    <section className="m-4 ">
<h1>uge current week</h1>

<div className="flex justify-between w-11/12 bg-cream rounded-lg justify-center m-auto p-1 ">
  <FaChevronLeft size={40}/>
  <h3 className="font-bold self-center">Idag mandag?</h3>
  <FaChevronRight size={40}/>
</div>

<section className="grid grid-cols-2 gap-3">


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


  <div className="grid grid-cols-2 col-span-2 gap-3">

    <h2 className="col-span-2 text-left">Salat</h2>
 

      <div className="flex bg-sage rounded-large">

        <div>
        <h3 className="p-2 font-bold">salat omkring den ret som skal være her</h3>
        <Image src="/placeholder-carrot.png" width={250} height={250} alt="billede af grøntsager"className="w-full"/>
        </div>
        <RiInformation2Line size={45} className="m-1 mr-2 "/>
      </div>
      <div className="flex bg-sage rounded-large">

      <div className="col-span-2 flex flex-col">
      <h3 className="p-2 font-bold">salat omkring den ret som skal være her</h3>
      <Image src="/salad.png" width={150} height={150} alt="billede af grøntsager"className="self-end"/>
      </div>
      <RiInformation2Line size={45} className="m-1 mr-2 "/>
      </div>
  </div>

  <div className="grid grid-cols-2 col-span-2 gap-3">
    
  <div>
      <h2 className="col-span-2 text-left">Dressing</h2>
      <div className="flex bg-gold rounded-large">
    
    
      <div className="col-span-2 flex flex-col">
      <h3 className="p-2 font-bold">salat omkring den ret som skal være her</h3>
      <Image src="/dessing.png" width={100} height={100} alt="billede af grøntsager"className="self-end"/>
      </div>
      <RiInformation2Line size={45} className="m-1 mr-2 "/>
      </div>
      </div>

      <div>
      <h2 className="col-span-2 text-left">Dip</h2>
      <div className="flex bg-blush rounded-large">
    
    
      <div className="col-span-2 flex flex-col">
      <h3 className="p-2 font-bold">salat omkring den ret som skal være her</h3>
      <Image src="/dip.png" width={150} height={150} alt="billede af grøntsager"className="self-end"/>
      </div>
      <RiInformation2Line size={45} className="m-1 mr-2 "/>
      </div>
      </div>

  </div>


    
  <div className="col-span-2">
    <div className="flex justify-between  ">
    <h2>Varm ret</h2>
    <button className="underline text-xs self-end mr-2">se vegetar muligheder her</button>
    </div>
      <div className=" bg-tan overflow-hidden rounded-large">
     
      
      <div className="flex w-full justify-between">
        <h3 className="pl-2 font-bold">undertekst omkring den ret som skal være her</h3>
        <RiInformation2Line size={30} className="m-1 mr-2"/>
        </div>
        <Image src="/bread.png" width={150} height={150} alt="billede af grøntsager"className="self-end"/>
  
        </div>
      
  </div>


  <div className="grid grid-cols-2 col-span-2 gap-3">

<h2 className="col-span-2 text-left">Pålæg</h2>


  <div className="flex bg-primary rounded-large">

    <div>
    <h3 className="p-2 font-bold">salat omkring den ret som skal være her</h3>
    <Image src="/cold-cut2.png" width={250} height={250} alt="billede af grøntsager"className="w-full"/>
    </div>
    <RiInformation2Line size={45} className="m-1 mr-2 "/>
  </div>
  <div className="flex bg-primary rounded-large">

  <div className="col-span-2 flex flex-col">
  <h3 className="p-2 font-bold">salat omkring den ret som skal være her</h3>
  <Image src="/cold-cut.png" width={150} height={150} alt="billede af grøntsager"className="self-end"/>
  </div>
  <RiInformation2Line size={45} className="m-1 mr-2 "/>
  </div>
</div>

</section>



</section>

  );
}
