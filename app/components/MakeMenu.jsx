// MakeMenu.js
import React, { useState } from 'react';

const emptyDish = {
  name: '',
  description: '',
  image: '',
  allergenes: []
};

const emptyDayMenu = {
  day: '',
  hovedret: { ...emptyDish },
  vegetar: { ...emptyDish },
  salad: [{ description: '' }, { description: '' }],
  pålæg: [{ description: '' }, { description: '' }],
  dip: '',
  dressing: ''
};

export default function MakeMenu({ onSubmit, initialData = [] }) {
  const [weeklyMenu, setWeeklyMenu] = useState(
    initialData.length > 0 ? initialData : Array(5).fill(null).map(() => ({ ...emptyDayMenu }))
  );

  const handleDayChange = (index, field, value) => {
    const newWeeklyMenu = [...weeklyMenu];
    newWeeklyMenu[index] = { ...newWeeklyMenu[index], [field]: value };
    setWeeklyMenu(newWeeklyMenu);
  };

  const handleDishChange = (dayIndex, dishType, field, value) => {
    const newWeeklyMenu = [...weeklyMenu];
    newWeeklyMenu[dayIndex] = {
      ...newWeeklyMenu[dayIndex],
      [dishType]: { ...newWeeklyMenu[dayIndex][dishType], [field]: value }
    };
    setWeeklyMenu(newWeeklyMenu);
  };

  const handleAllergenChange = (dayIndex, dishType, allergenIndex, field, value) => {
    const newWeeklyMenu = [...weeklyMenu];
    const updatedAllergenes = [...newWeeklyMenu[dayIndex][dishType].allergenes];
    updatedAllergenes[allergenIndex] = { ...updatedAllergenes[allergenIndex], [field]: value };
    newWeeklyMenu[dayIndex] = {
      ...newWeeklyMenu[dayIndex],
      [dishType]: { ...newWeeklyMenu[dayIndex][dishType], allergenes: updatedAllergenes }
    };
    setWeeklyMenu(newWeeklyMenu);
  };

  const addAllergen = (dayIndex, dishType) => {
    const newWeeklyMenu = [...weeklyMenu];
    newWeeklyMenu[dayIndex] = {
      ...newWeeklyMenu[dayIndex],
      [dishType]: {
        ...newWeeklyMenu[dayIndex][dishType],
        allergenes: [...newWeeklyMenu[dayIndex][dishType].allergenes, { name: '', description: '' }]
      }
    };
    setWeeklyMenu(newWeeklyMenu);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(weeklyMenu);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
      {weeklyMenu.map((day, dayIndex) => (
        <div key={dayIndex} className="border-2 p-4 rounded-xl bg-cream">
          <h3 className="text-xl font-bold mb-2 text-center">Dag {dayIndex + 1}</h3>
          <input
            type="text"
            value={day.day}
            onChange={(e) => handleDayChange(dayIndex, 'day', e.target.value)}
            placeholder="Ugedag (f.eks. mandag)"
            className="w-full p-2 border rounded mb-2"
            required
          />
          {['hovedret', 'vegetar'].map((dishType) => (
            <div key={dishType} className="mb-4">
              <h3 className="text-lg font-semibold capitalize">{dishType}</h3>
              <input
                type="text"
                value={day[dishType].name}
                onChange={(e) => handleDishChange(dayIndex, dishType, 'name', e.target.value)}
                placeholder="Navn"
                className="w-full p-2 border rounded mb-2"
                required
              />
              <textarea
                value={day[dishType].description}
                onChange={(e) => handleDishChange(dayIndex, dishType, 'description', e.target.value)}
                placeholder="Beskrivelse"
                className="w-full p-2 border rounded mb-2"
                required
              />
              <input
                type="url"
                value={day[dishType].image}
                onChange={(e) => handleDishChange(dayIndex, dishType, 'image', e.target.value)}
                placeholder="Billede URL"
                className="w-full p-2 border rounded mb-2"
              />
              <div className="mb-2">
                <h4 className="font-semibold">Allergener</h4>
                {day[dishType].allergenes.map((allergen, allergenIndex) => (
                  <div key={allergenIndex} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={allergen.name}
                      onChange={(e) => handleAllergenChange(dayIndex, dishType, allergenIndex, 'name', e.target.value)}
                      placeholder="Allergen navn"
                      className="flex-1 p-2 border rounded"
                    />
                    <input
                      type="text"
                      value={allergen.description}
                      onChange={(e) => handleAllergenChange(dayIndex, dishType, allergenIndex, 'description', e.target.value)}
                      placeholder="Allergen beskrivelse"
                      className="flex-1 p-2 border rounded"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addAllergen(dayIndex, dishType)}
                  className="bg-green-500 text-white p-2 rounded"
                >
                  Tilføj Allergen
                </button>
              </div>
            </div>
          ))}
          <div className="mb-2">
            <h4 className="font-semibold">Salad</h4>
            {day.salad.map((item, index) => (
              <input
                key={index}
                type="text"
                value={item.description}
                onChange={(e) => {
                  const newSalad = [...day.salad];
                  newSalad[index] = { description: e.target.value };
                  handleDayChange(dayIndex, 'salad', newSalad);
                }}
                placeholder={`Salad ${index + 1}`}
                className="w-full p-2 border rounded mb-2"
              />
            ))}
          </div>
          <div className="mb-2">
            <h4 className="font-semibold">Pålæg</h4>
            {day.pålæg.map((item, index) => (
              <input
                key={index}
                type="text"
                value={item.description}
                onChange={(e) => {
                  const newPålæg = [...day.pålæg];
                  newPålæg[index] = { description: e.target.value };
                  handleDayChange(dayIndex, 'pålæg', newPålæg);
                }}
                placeholder={`Pålæg ${index + 1}`}
                className="w-full p-2 border rounded mb-2"
              />
            ))}
          </div>
          <input
            type="text"
            value={day.dip}
            onChange={(e) => handleDayChange(dayIndex, 'dip', e.target.value)}
            placeholder="Dip"
            className="w-full p-2 border rounded mb-2"
          />
          <input
            type="text"
            value={day.dressing}
            onChange={(e) => handleDayChange(dayIndex, 'dressing', e.target.value)}
            placeholder="Dressing"
            className="w-full p-2 border rounded mb-2"
          />
        </div>
      ))}
      <button type="submit" className="bg-forest text-white p-2 rounded-large flex self-center">Indsend Ugentlig Menu</button>
    </form>
  );
}
