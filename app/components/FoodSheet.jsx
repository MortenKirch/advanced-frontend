import Food from "./Food";

export default async function FoodSheet(){
    const res = await fetch("https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/menu/meeting.json");
    const data = await res.json();
    console.log(data)
    
    const items = Object.keys(data).map(key =>{
     return{
         id: key,
         ...data[key]
     };
    });
    
     return(
        <>
         {items.map(item =>{
             return( <>
                <h3 className="font-bold">{item.id}</h3>
                <Food item={item.id}></Food>
                </>
             )
         })}
        </>
     )
    }             