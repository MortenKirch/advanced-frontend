
export default function Food(){
    return(

            
            <div className="border-b-2 border-black m-2">
            <div className="flex justify-between">
            <p className="text-base font-semi-bold mr-2">hvad det bolle med smør</p>
            <div className="flex self-center">
            <button className="h-10 w-10 bg-forest rounded-l-full text-2xl text-white">-</button>
            <input type="text" placeholder="0" className=" bg-cream w-10 h-10 text-center placeholder-black text-2xl"/>
            <button className="h-10 w-10 bg-forest rounded-r-full text-2xl text-white">+</button>
            </div>
            </div>
            <p className="text-base text-center">10 kr</p>


    
            </div>




    )
}