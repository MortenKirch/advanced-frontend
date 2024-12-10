
export default async function Food({item}){
    const res = await fetch(`https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/menu/meeting/${item}.json`);
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
                   <div className="border-b-2 border-black m-2">
                    <div className="flex justify-between">
                    <p className="text-base font-semi-bold mr-2">{item.name}</p>
                    <div className="flex self-center">
                    <button className="h-10 w-10 bg-forest rounded-l-full text-2xl text-white">-</button>
                    <input type="text" placeholder="0" className=" bg-cream w-10 h-10 text-center placeholder-black text-2xl"/>
                    <button className="h-10 w-10 bg-forest rounded-r-full text-2xl text-white">+</button>
                    </div>
                    </div>
                    <p className="text-base text-center">{item.price} kr</p>
                      </div>
                         </>
                    )
                })}
                   
  

            </>


    )
}