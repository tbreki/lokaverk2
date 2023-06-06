import React, { useEffect, useState } from 'react';

const DrinkDetails = () => {
  const [drinkName, setDrinkName] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedDrinkName = localStorage.getItem('drinkName');
      setDrinkName(storedDrinkName);
    }
  }, []);

  if (!drinkName) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {typeof window !== 'undefined' && <h2>{drinkName}</h2>}
      {/* Other drink details */}
    </div>
  );
};

export default DrinkDetails;
