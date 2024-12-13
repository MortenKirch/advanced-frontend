// Home.js
'use client';

import { useState, useEffect } from 'react';
import MakeMenu from '@/app/components/MakeMenu';

const DATABASE_URL = 'https://madkammeret-b04c3-default-rtdb.europe-west1.firebasedatabase.app';

export default function Home() {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMenus();
  }, []);

  // Funktion til at beregne ISO Uge Nummer
  const getISOWeekNumber = (date = new Date()) => {
    const tempDate = new Date(date.getTime());
    tempDate.setUTCHours(0, 0, 0, 0);
    tempDate.setUTCDate(tempDate.getUTCDate() + 4 - (tempDate.getUTCDay() || 7));
    const yearStart = new Date(Date.UTC(tempDate.getUTCFullYear(), 0, 1));
    const weekNumber = Math.ceil(((tempDate - yearStart) / 86400000 + 1) / 7);
    return weekNumber;
  };

  // Funktion til at finde det totale antal uger i et år
  const getTotalWeeks = (year) => {
    const d = new Date(year, 11, 31);
    const week = getISOWeekNumber(d);
    return week === 1 ? 52 : week;
  };

  // Funktion til at beregne det næste ugenummer med wrap-around
  const getNextWeekNumber = (currentWeek, year) => {
    const totalWeeks = getTotalWeeks(year);
    return currentWeek === totalWeeks ? 1 : currentWeek + 1;
  };

  const fetchMenus = async () => {
    try {
      const response = await fetch(`${DATABASE_URL}/menu.json`);
      const data = await response.json();
      console.log('Fetched Data:', data); // For debugging
      if (data) {
        // Konverter objektstrukturen til et array af menuer
        const fetchedMenus = Object.entries(data).map(([id, menu]) => ({
          id,
          ...menu,
        }));
        setMenus(fetchedMenus);
      } else {
        setMenus([]);
      }
    } catch (error) {
      console.error('Error fetching menus:', error);
    }
  };

  const handleSubmit = async (weeklyMenuArray) => {
    try {
      // Konverter weeklyMenuArray til et objekt med ugedage som nøgler
      const formattedMenu = weeklyMenuArray.reduce((acc, day) => {
        if (!day.day) return acc; // Skip hvis dag ikke er angivet
        const dayName = day.day.toLowerCase(); // Sørg for, at dagene er små bogstaver
        acc[dayName] = {
          dip: day.dip,
          dressing: day.dressing,
          hovedret: day.hovedret,
          vegetar: day.vegetar,
          salad: day.salad,
          pålæg: day.pålæg,
        };
        return acc;
      }, {});

      console.log('Formatted Menu:', formattedMenu); // Tilføj dette for at inspicere data

      if (selectedMenu) {
        // Opdater eksisterende menu
        await fetch(`${DATABASE_URL}/menu/${selectedMenu.id}.json`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formattedMenu), // Gem formattedMenu direkte
        });
        setMessage('Weekly menu updated successfully');
      } else {
        // Opret ny menu
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentWeekNumber = getISOWeekNumber(today);
        const nextWeekNumber = getNextWeekNumber(currentWeekNumber, currentYear);
        const newId = `uge${nextWeekNumber}`; // Sikre korrekt wrap-around

        console.log('New Menu ID:', newId); // Tilføj dette for at inspicere ID

        await fetch(`${DATABASE_URL}/menu/${newId}.json`, {
          method: 'PUT', // Brug PUT for at sikre korrekt nøgle
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formattedMenu), // Gem formattedMenu direkte
        });
        setMessage('Weekly menu created successfully');
      }
      fetchMenus();
      setSelectedMenu(null);
    } catch (error) {
      console.error('Error in handleSubmit:', error); // Opdateret til at logge fejlen
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleEdit = (menu) => {
    setSelectedMenu(menu);
  };

  const handleDelete = async (menuId) => {
    try {
      await fetch(`${DATABASE_URL}/menu/${menuId}.json`, {
        method: 'DELETE',
      });
      setMessage('Menu deleted successfully');
      fetchMenus();
    } catch (error) {
      setMessage(`Error deleting menu: ${error.message}`);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Skriv Ugens Menu</h1>
      <MakeMenu 
        onSubmit={handleSubmit} 
        initialData={selectedMenu ? Object.entries(selectedMenu).map(([key, value]) => ({
          day: key.charAt(0).toUpperCase() + key.slice(1), // F.eks. 'mandag' -> 'Mandag'
          ...value
        })) : []} 
      />
      {message && <p className="mt-4 text-green-600">{message}</p>}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-2">eksisternene menuer</h2>
        {menus.map((menu) => (
          <div key={menu.id} className="border p-4 rounded mb-4">
            <h3 className="text-lg font-semibold">{menu.id.toUpperCase()}</h3>
            {menu && Object.entries(menu).map(([day, details]) => {
              if (day === 'id') return null; // Udelad 'id' fra rendering
              return (
                <div key={day} className="mt-2">
                  <h4 className="font-semibold capitalize">{day}</h4>
                  <p><strong>Dip:</strong> {details.dip || 'N/A'}</p>
                  <p><strong>Dressing:</strong> {details.dressing || 'N/A'}</p>
                  <p><strong>Hovedret:</strong> {details.hovedret?.name || 'N/A'}</p>
                  <p><strong>Beskrivelse:</strong> {details.hovedret?.description || 'N/A'}</p>
                  <p><strong>Vegetar:</strong> {details.vegetar?.name || 'N/A'}</p>
                  <p><strong>Salad:</strong> {details.salad ? details.salad.map((salad, index) => salad.description).join(', ') : 'N/A'}</p>
                  <p><strong>Pålæg:</strong> {details.pålæg ? details.pålæg.map((pålæg, index) => pålæg.description).join(', ') : 'N/A'}</p>
                  {/* Tilføj flere felter efter behov */}
                </div>
              );
            })}
            <div className="mt-4">
              <button
                onClick={() => handleEdit(menu)}
                className="bg-yellow-500 text-white p-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(menu.id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
