// app/drikkevarer/page.js

import React from 'react';
import Link from 'next/link';
import Drink from '@/app/components/Drink';

import { CiCirclePlus } from "react-icons/ci";

export default async function DrikkevarerPage() {
  const res = await fetch("https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/drikkevarer.json");
  
  if (!res.ok) {
    return <div>Failed to load drinks.</div>;
  }
  

  const data = await res.json();
  const drinks = data ? Object.entries(data).map(([id, drink]) => ({ id, ...drink })) : [];

  return (
    <div>
      <h1>Drikkevarer</h1>
      
      <ul className='grid gap-3 grid-cols-2'>
      <li className='w-full h-full  '>
      <Link href={`edit-drikkevarer/new-drink`} className="flex justify-around self-center items-center w-full h-full">
                  <div className="radius-large shadow-inner flex justify-around w-20 h-20 rounded-large">
                  
                  
          
       <CiCirclePlus className=' flex self-center  bold' size={40}></CiCirclePlus>
      
          
                  </div>
                 
            </Link>
      </li>
        {drinks.map((drink) => (
          <li key={drink.id}>
            <Link href={`edit-drikkevarer/${drink.id}`}>
              <Drink drink={drink} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
