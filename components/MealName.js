import React, { useEffect, useState } from 'react';

const MealDetails = () => {
  const [mealName, setmealName] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedMealName = localStorage.getItem('mealName');
      setmealName(storedMealName);
    }
  }, []);

  if (!mealName) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {typeof window !== 'undefined' && <h2>{mealName}</h2>}
      {/* Other drink details */}
    </div>
  );
};

export default MealDetails;
