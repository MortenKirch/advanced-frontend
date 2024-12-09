
import Image from "next/image";

export default function login() {
  return (
<section className="flex justify-center flex-col">
  <Image src={"/logo.png"} width={300} height={300} alt="madkammer logo" className="self-center"></Image>
      <form action="" className="w-full flex flex-col">
    <input type="text" className="w-4/5 border-black rounded-large border h-12 px-4 m-2 self-center" placeholder="Email:"/>
    <input type="text" className="w-4/5 border-black rounded-large border h-12 px-4 m-2 self-center" placeholder="Password:"/>
    <div className="flex ml-2 self-center">
    <p className="text-xs"> Har du glemt dit password? </p> 
    <a href="_blank" className="underline text-xs">klik her</a>
    </div>
    </form>
    <button class=" w-32 mt-6 bg-forest text-white px-4 py-2 rounded-large font-bold m-auto flex self-center justify-center">
      Login
    </button>
</section>



  );
}
