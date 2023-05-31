
import { useEffect, useState } from 'react';

const RandomDrink = () => {
  const [drink, setDrink] = useState(null);

  useEffect(() => {
    // Fetch the random dish data from your API
    fetch('https://api.punkapi.com/v2/beers/random')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched dish data
        setDrink(data[0]);
      })
      .catch(error => {
        console.error('Error fetching random drink:', error);
      });
  }, []);

  if (!drink) {
    return <div>Loading...</div>;
  }

  const { name, image_url } = drink;

  return (
    
      <div className='flex flex-col items-center'>
        <h2 className='text-center  text-maingreen font-bold m-10'>{name}</h2>
      <img className= "object-scale-down h-48 w-48"src={image_url} alt={name} />
    </div>
  );
};

export default RandomDrink;

// https://api.punkapi.com/v2/beers/random