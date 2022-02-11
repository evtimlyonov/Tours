import React, { useState } from 'react';
import { Tour } from './components/Tour';

const data = [
  {
    id: 1,
    img: 'https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg',
    name: 'Best Of Paris In 7 Days Tour',
    price: 1.995,
    text: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 2,
    img: 'https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg',
    name: 'Best Of Ireland In 14 Days Tour',
    price: 3.895,
    text: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
  },
  {
    id: 3,
    img: 'https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg',
    name: 'Best Of Salzburg & Vienna In 8 Days Tour',
    price: 2.695,
    text: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
];

function App() {
  const [tours, setTours] = useState(data);
  const deleteHandler = (id: number) => {
    setTours((prevState) => prevState.filter((t) => t.id !== id));
  };

  const refreshHandler = () => {
    setTours(data);
  };
  return (
    <main className='w-[90vh] max-w-[620px] mx-auto my-20'>
      <section>
        <div className='mb-16 text-center'>
          <h2 className='text-4xl tracking-widest font-bold mb-3'>
            {!tours.length ? 'No Tours Left' : 'Our Tours'}
          </h2>
          <div className='w-[6rem] h-[0.25rem] bg-[#49a6e9] m-auto'></div>
          {!tours.length && (
            <button
              className='mt-10 bg-[#49a6e9] py-2 px-8 rounded-xl text-xl text-white'
              onClick={refreshHandler}>
              refresh
            </button>
          )}
        </div>
        <div>
          {tours.map((tour) => (
            <Tour
              key={tour.id}
              id={tour.id}
              img={tour.img}
              name={tour.name}
              price={tour.price}
              text={tour.text}
              deleteHandler={deleteHandler}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
