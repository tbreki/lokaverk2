import React from "react";
import DrinkDetails from "@/components/DrinkName";
import MealDetails from "@/components/MealName";
import DatelDetails from "@/components/DateDetails";
import "../app/globals.css"


export default function recept() {
  return (
    <main className="flex sm:justify-center mt-10">
    <div className="block max-w-sm p-6 bg-white border border-gray-200 
    rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
        <div >Meal:<h2 className="text font-semibold"> <MealDetails/></h2></div>
        <div >Drink:<h2 className="text font-semibold"> <DrinkDetails/></h2></div>
        <div >Date:<h2 className="text font-semibold"> <DatelDetails/></h2></div>
        <h2 className="text font-light">-----------------</h2>
       <h2 className="text font-semibold">Price: 1.000.000 USD</h2>
        </div>
    </main>
  );
}
