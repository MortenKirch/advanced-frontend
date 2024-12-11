
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
    <section className="grid grid-cols-2 gap-3 m-4 ">
        <h1 className="text-center font-morningbrew col-span-2">Drikkevarer</h1>
       {drinks.map(drink =>{
           return(
                  <>
                    <Drink drink={drink}/>
                    </>
           )
       })}
       <p className="text-xs col-span-2 text-center">vi gør opmærksomme om at alle flasker har en pant på min 1 kr.</p>
       </section>
   )
  }             