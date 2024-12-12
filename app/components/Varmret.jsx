"use client";

import { useState } from "react";
import { RiInformation2Line } from "react-icons/ri";
import Image from "next/image";

export default function Varmret({ data }) {
  const [isVegan, setIsVegan] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false); // State for tooltip visibility

  if (!data || (!data.Hovedret && !data.vegetar)) {
    return <p>Ingen data tilgængelig for varmret.</p>; // Fallback if no data is passed
  }

  const handleClick = () => {
    setIsVegan(!isVegan);
  };

  const currentOption = isVegan ? data.vegetar : data.Hovedret; // Switch between options

  const allergenes = currentOption.allergenes || []; // Fetch allergenes for the current option

  return (
    <div className="col-span-2">
      <div className="flex justify-between">
        <h2>Varm ret</h2>
        <button
          className="underline text-xs self-end mr-2"
          onClick={handleClick}
        >
          {isVegan ? "Se kød muligheder her" : "Se vegetar muligheder her"}
        </button>
      </div>
      <div className="flex bg-butter overflow-hidden rounded-large h-64 relative">
        <Image
          src={currentOption.image}
          width={200}
          height={200}
          alt={currentOption.name || "varmret"}
          className="self-end w-5/12 h-full object-cover"
        />
        <div>
          <h3 className="p-2 font-bold">
            {currentOption.name || currentOption.name}
          </h3>
          <p className="pl-2">{currentOption.description}</p>
        </div>
 
          <RiInformation2Line
            size={20}
            className="m-1 mr-2 w-10 cursor-pointer"
            onClick={() => setShowTooltip(!showTooltip)}
          />
          {showTooltip && (
            <div className="absolute bottom-2 right-2 mt-2 p-2 bg-gray-800 text-white text-xs rounded shadow-lg w-32 ">
              <h3 className="text-base font-bold">Allergener:</h3>
              <ul>
                {allergenes.map((allergen, index) => (
                    <li key={index}>{`Indeholder ${allergen.name}`}</li> // Directly access the name property
                  ))}
              </ul>
            </div>
          )}
        </div>
      </div>

  );
}
