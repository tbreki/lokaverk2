import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import styles from "../app/globals.css";

import RandomDrink from "@/components/drinkapi";


export default function drink(){
   
    
    const [showRandomDrink, setShowRandomDrink] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
    const handleButtonClick = () => {
      setShowRandomDrink(true);
      setIsClicked(true);
  

    // Retrieve the random drink
    const randomDrink = localStorage.getItem("randomDrink");

    // Save the random drink to local storage
    localStorage.setItem("drink", randomDrink);
    
    };
    
    
    
    
    return(
     <main> 
        
            <Navigation/>
            <div className="flex place-content-center mt-10">
            <button onClick={handleButtonClick}>{<div className={`p-4 ${isClicked ? "border-2 border-maingreen" : ""}`}>
        {<RandomDrink />}
      </div>}</button>
      </div>
      
      
        
        
        </main>
        )
};
