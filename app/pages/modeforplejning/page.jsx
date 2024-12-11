import FoodSheet from "@/app/components/FoodSheet";
import GetDate from "@/app/components/GetDate";




export default function Mødeforplejning() {



  return (
    <section className="ml-2 mr-2">
      <h1>mødeforplejning</h1>
    <form action="" className="w-full p-4">
    <input type="text" className="w-full border-black rounded-large border h-12 px-4 m-1" placeholder="Navn på arrengement"/>
    <input type="text" className="w-full border-black rounded-large border h-12 px-4 m-1" placeholder="Serveringsted"/>
    <div className="flex ">
     <GetDate/>
    <input type="Number"  className="w-1/2 border-black rounded-large border h-12 px-4 mt-1 ml-1" placeholder="Antal ialt"/>
    </div>


    </form>
    <FoodSheet></FoodSheet>

    <div className="">
      <h3 className="text-lg font-bold">Bestilling</h3>
      <div className="bg-gray-200 p-4 h-24 m-2 rounded-lg">
      <div className="flex justify-between items-center mt-2">
      <span className="">ting i kurven: x antal</span>
     
      <span className="text-lg font-semibold">0 kr</span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <span className="font-bold">Pris ialt:</span>
        <span className="text-lg font-semibold">0 kr</span>
      </div>
      </div>
      <p className="text-sm text-gray-500 mt-2 text-center">Obs: Kokketimer = 325 kr, bio kopper 3 kr</p>
    </div>

  
    <button className="w-52 mt-6 bg-forest text-white py-2 rounded-large font-bold m-auto flex self-center justify-center">
      Send til godkendelse
    </button>
  

  </section>
  );
}
