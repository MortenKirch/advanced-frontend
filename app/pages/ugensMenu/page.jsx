import Menu from "@/app/components/Menu";

export default async function UgensMenu() {

function getISOWeekNumber(date = new Date()) {
  const tempDate = new Date(date.getTime());
  tempDate.setUTCHours(0, 0, 0, 0);
  tempDate.setUTCDate(tempDate.getUTCDate() + 4 - (tempDate.getUTCDay() || 7));
  const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(((tempDate - yearStart) / 86400000 + 1) / 7);
  return weekNumber;
}
const currentWeekNumber = getISOWeekNumber();

const response =  await fetch(
  `https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app/menu/uge${currentWeekNumber}.json`
);
const menuData = await response.json();




  return (
    <section className="m-4 ">
   <h1>Uge {currentWeekNumber}</h1>


<Menu menuData={menuData}></Menu>

</section>

  );
}

