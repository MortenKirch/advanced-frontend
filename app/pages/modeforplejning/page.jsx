import FoodSheet from "@/app/components/FoodSheet";

export default function Mødeforplejning() {
  return (
    <>
<h1>mødeforplejning</h1>
  <form action="" className="w-full p-4">
    <input type="text" className="w-full border-black rounded-large border h-12 px-4 m-1" placeholder="Navn på arrengement"/>
    <input type="text" className="w-full border-black rounded-large border h-12 px-4 m-1" placeholder="Serveringsted"/>
    <div className="flex">
    <input type="Date" min="2024-01-01" max="2099-12-31" className="w-1/2 border-black rounded-large border h-12 px-4 m-1" placeholder="Dato"/>
    <input type="Number"  className="w-1/2 border-black rounded-large border h-12 px-4 m-1" placeholder="Antal ialt"/>
    </div>


    </form>
    <FoodSheet></FoodSheet>

    <div class="mt-6">
      <h3 class="text-lg font-bold">Bestilling</h3>
      <div class="bg-gray-100 p-4 h-24 mt-2 rounded-lg"></div>
      <div class="flex justify-between items-center mt-4">
        <span class="font-bold">Pris ialt:</span>
        <span class="text-lg font-semibold">0 kr</span>
      </div>
      <p class="text-sm text-gray-500 mt-2">Obs: Kokketimer = 325 kr, bio kopper 3 kr</p>
    </div>

  
    <button class="w-52 mt-6 bg-forest text-white py-2 rounded-large font-bold ">
      Send til godkendelse
    </button>
  

    </>
  );
}
