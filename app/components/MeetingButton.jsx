"use client";
import { useState } from "react";

export default function MeetingButton({itemValue, itemId}) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };

  return (
    <div className="flex self-center">
      <button
        onClick={handleDecrement}
        className="h-10 w-10 bg-forest rounded-l-full text-2xl text-white"
      >
        -
      </button>
      <input
        type="text"
        readOnly
        value={count}
        className="bg-cream w-10 h-10 text-center placeholder-black text-2xl"
      />
            <input
        type="number"
        readOnly
        value={itemValue * count}
        className="hidden"
        id={itemId}
      />
      <button
        onClick={handleIncrement}
        className="h-10 w-10 bg-forest rounded-r-full text-2xl text-white"
      >
        +
      </button>

    
    </div>
  );
}
