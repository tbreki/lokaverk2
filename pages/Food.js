import { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import styles from "../app/globals.css";
import RandomDish from "@/components/RandomDish";

export default function Food(){
   
     const [showRandomFood, setShowRandomFood] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
  
    const handleButtonClick2 = () => {
      setShowRandomFood(true);
      setIsClicked(true);
     

    const mealName = localStorage.getItem("mealName");
    localStorage.setItem("meal",mealName);
    
    };
    
    
    
    
    
    
    
    return(
    <main> 
        
            <Navigation/>
            <div className="flex place-content-center mt-10">
            <button onClick={handleButtonClick2}>{<div className={`p-4 ${isClicked ? "border-2 border-maingreen" : ""}`}>
        {<RandomDish />}
      </div>}</button>
      </div>
      
        
        </main>
        )
};

