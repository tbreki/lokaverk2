import drink from "@/pages/Drinks";
import React from "react";

const DrinkName = () => {
  // Retrieve the drink name from local storage
  let drinkName = "";

  if (typeof window !== "undefined") {
    // Check if running in a browser environment
    drinkName = localStorage.getItem("drink");
  }

  return (
    <div>
      
        <h3>Drink Name: {drink}</h3>
     
    </div>
  );
};

export default DrinkName;
