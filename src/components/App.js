import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
//import { useState } from "react/cjs/react.production.min";

function App() {
const [darkMode, setDarkMode] = useState(false); //create state

const toggleDarkMode = () => {
  setDarkMode(prevMode => !prevMode); // toggle mode
};
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  
const appClass = darkMode ? "App dark" : "App light"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
   
  );
}

export default App;
