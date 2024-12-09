import { FaChevronLeft, FaChevronRight} from "react-icons/fa";
import Paalaeg from "@/app/components/Paalaeg";
import Brod from "@/app/components/Brod";
import Dressing from "@/app/components/Dressing";
import Dip from "@/app/components/Dip";
import Salat from "@/app/components/Salat";
import Varmret from "@/app/components/Varmret";
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


<Varmret></Varmret>


<div className="grid grid-cols-2 col-span-2 gap-3">
  <h2 className="col-span-2 text-left">Salat</h2>
    <Salat></Salat>
    <Salat></Salat>
  </div>


  <div className="grid grid-cols-2 col-span-2 gap-3">
    <Dressing></Dressing>
    <Dip></Dip>


  </div>


    
  <div className="col-span-2">
    <Brod/>
  </div>

<div className="grid grid-cols-2 col-span-2 ">
  <h2 className="text-left">Pålæg</h2>
  <div className="grid grid-cols-2 col-span-2 gap-3">

    <Paalaeg/>
    <Paalaeg/>
    </div>
</div>

</section>



</section>

  );
}
