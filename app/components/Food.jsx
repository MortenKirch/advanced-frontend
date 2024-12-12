import MeetingButton from "./MeetingButton";

export default async function Food({item}){
    const res = await fetch(`https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/menu/meeting/${item}.json`);
    const data = await res.json();

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
                   <div className="border-b-2 border-black m-2">
                    <div className="flex justify-between">
                    <p className="text-base font-semi-bold mr-2">{item.name}</p>
              
                        <MeetingButton itemValue={item.price} itemId={item.id}/>

    
                    </div>
                    <p className="text-base text-center">{item.price} kr</p>
                      </div>
                         </>
                    )
                
  
                })}
            
  

            </>


    )
}