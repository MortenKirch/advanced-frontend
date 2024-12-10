import Image from "next/image";
import Drink from "@/app/components/Drink";

export default async function Drikkevarer(){
  const res = await fetch("https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/menu/drikkevarer.json");
  const data = await res.json();
  console.log(data)
  
  const drinks = Object.keys(data).map(key =>{
   return{
       id: key,
       ...data[key]
   };
  });
  
   return(
    <section className="grid grid-cols-2 gap-2 m-2 ">
      
       {drinks.map(drink =>{
           return(
                  <>
                    <Drink drink={drink}/>
                    </>
           )
       })}
       </section>
   )
  }             