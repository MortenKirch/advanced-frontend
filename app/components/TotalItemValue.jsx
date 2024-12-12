"use client"; 

export default function TotalItemValue(){

    return(
        <>
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

        
        </>
    )
}