
import FoodSheet from "@/app/components/FoodSheet";
import GetDate from "@/app/components/GetDate";
import TotalItemValue from "@/app/components/TotalItemValue";


export default function Mødeforplejning() {


  

  return (
    <section className="ml-2 mr-2">
      <h1>mødeforplejning</h1>
    <form action="" className="w-full p-4">
    <input type="text" className="w-full border-black rounded-large border h-12 px-4 m-1" placeholder="Navn på arrengement"/>
    <input type="text" className="w-full border-black rounded-large border h-12 px-4 m-1" placeholder="Serveringsted"/>
    <div className="flex ">
     <GetDate/>
    <input type="Number"  className="w-1/2 border-black rounded-large border h-12 px-4 " placeholder="Antal ialt"/>
    </div>


    </form>
    <FoodSheet></FoodSheet>

    <TotalItemValue/>

    <button className="w-52 mt-6 bg-forest text-white py-2 rounded-large font-bold m-auto flex self-center justify-center">
      Send til godkendelse
    </button>
  

  </section>
  );
}
