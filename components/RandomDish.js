import { useEffect, useState } from 'react';

const RandomDish = () => {
  const [dish, setDish] = useState(null);

  useEffect(() => {
    // Fetch the random dish data from your API
    fetch('https://themealdb.com/api/json/v1/1/random.php')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched dish data
        setDish(data.meals[0]);
      })
      .catch(error => {
        console.error('Error fetching random dish:', error);
      });
  }, []);

  if (!dish) {
    return <div>Loading...</div>;
  }

  const { strMeal, strMealThumb } = dish;

  return (
    
      <div className='flex flex-col items-center'>
        <h2 className='text-center  text-maingreen font-bold m-10'>{strMeal}</h2>
      <img className= "object-scale-down h-48 w-48"src={strMealThumb} alt={strMeal} />
    </div>
  );
};

export default RandomDish;
